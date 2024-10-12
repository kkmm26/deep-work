import React from "react";
import { getFromStorage, setInStorage } from "../../api/db/localStorage";
import { MAIN_TASKS_ADDABLE, SUB_TASKS_ADDABLE } from "../../constants";
import { parseLocalStorageItem } from "../../utils";
import { removeSubTasks } from "../../helpers";

const TASK_TYPES = {
    Subject: "subjects",
    "Main Task": "mainTasks",
    "Sub Task": "subTasks",
};
export const TasksContext = React.createContext();
function TasksProvider({ children }) {
    const [tasks, setTasks] = React.useState(getFromStorage("tasks"));
    const existingTasks = React.useMemo(
        () => parseLocalStorageItem(tasks),
        [tasks]
    );

    function persistTasks(updatedTasks) {
        setTasks(updatedTasks);
        setInStorage("tasks", updatedTasks);
    }

    function addNewTask(newTask) {
        existingTasks.subjects = existingTasks.subjects || {};
        existingTasks.mainTasks = existingTasks.mainTasks || {};
        existingTasks.subTasks = existingTasks.subTasks || {};
        const newSubjectId = crypto.randomUUID();
        const newMainTaskId = crypto.randomUUID();
        const newSubTaskIds =
            newTask.subTasks?.map(() => crypto.randomUUID()) || [];

        existingTasks.subjects[newSubjectId] = {
            id: newSubjectId,
            description: newTask.description,
            task: newTask.subject,
            mainTaskIds: [newMainTaskId],
        };
        existingTasks.mainTasks[newMainTaskId] = {
            id: newMainTaskId,
            task: newTask.mainTask,
            subTaskIds: [...newSubTaskIds],
        };

        newSubTaskIds.forEach((subTaskId, index) => {
            existingTasks.subTasks[subTaskId] = {
                id: subTaskId,
                task: newTask.subTasks[index],
            };
        });
        persistTasks(existingTasks);
    }

    function addNewMainTask(subjectId, limitReachedCb) {
        const newId = crypto.randomUUID();

        const currentMainTaskIds =
            existingTasks.subjects[subjectId].mainTaskIds;
        if (currentMainTaskIds.length >= MAIN_TASKS_ADDABLE) {
            limitReachedCb();
            return;
        }
        currentMainTaskIds.push(newId);
        existingTasks.mainTasks[newId] = {
            id: newId,
            task: "New Main Task",
            subTaskIds: [],
        };
        persistTasks(existingTasks);
    }

    function updateTask(currentTaskId, newTask, type) {
        const taskType = TASK_TYPES[type];
        existingTasks[taskType][currentTaskId].task = newTask;

        persistTasks(existingTasks);
    }

    function addNewSubTask(mainTaskId, limitReachedCb) {
        const newId = crypto.randomUUID();

        const currentSubTaskIds =
            existingTasks.mainTasks[mainTaskId].subTaskIds;
        if (currentSubTaskIds.length >= SUB_TASKS_ADDABLE) {
            limitReachedCb();
            return;
        }
        currentSubTaskIds.push(newId);
        existingTasks.subTasks[newId] = {
            id: newId,
            task: "New Sub Task",
        };

        persistTasks(existingTasks);
    }

    function completeSubject(subjectId) {
        const mainTasksToDel = existingTasks.subjects[subjectId].mainTaskIds;
        // console.log(mainTasksToDel);

        mainTasksToDel.forEach((id) => {
            removeSubTasks(existingTasks, id);
            delete existingTasks.mainTasks[id];
        });
        delete existingTasks.subjects[subjectId];

        persistTasks(existingTasks);
    }

    function completeMainTask(subjectId, mainTaskId) {
        removeSubTasks(existingTasks, mainTaskId); // delete subtasks
        existingTasks.subjects[subjectId].mainTaskIds = existingTasks.subjects[
            subjectId
        ].mainTaskIds.filter((id) => id !== mainTaskId); // delete mainTaskId
        delete existingTasks.mainTasks[mainTaskId]; // delete mainTask

        persistTasks(existingTasks);
    }

    function completeSubTask(mainTaskId, subTaskId) {
        existingTasks.mainTasks[mainTaskId].subTaskIds =
            existingTasks.mainTasks[mainTaskId].subTaskIds.filter(
                (id) => id !== subTaskId
            );
        delete existingTasks.subTasks[subTaskId];

        persistTasks(existingTasks);
    }

    const VALUES = {
        tasks,
        addNewTask,
        addNewMainTask,
        addNewSubTask,
        completeSubTask,
        completeMainTask,
        updateTask,
        completeSubject,
    };
    return (
        <TasksContext.Provider value={VALUES}>{children}</TasksContext.Provider>
    );
}

export default TasksProvider;
