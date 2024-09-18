import React from "react";
import { getFromStorage, setInStorage } from "../../api/db/localStorage";
import { MAIN_TASKS_ADDABLE, SUB_TASKS_ADDABLE, TASKS } from "../../constants";

export const TasksContext = React.createContext();
function TasksProvider({ children }) {
    const [tasks, setTasks] = React.useState(getFromStorage("tasks"));

    function addNewTask(newTask) {
        const existingTasks = JSON.parse(JSON.stringify(tasks));
        existingTasks.subjects = existingTasks.subjects || {}
        existingTasks.mainTasks = existingTasks.mainTasks || {}
        existingTasks.subTasks = existingTasks.subTasks || {};
        const newSubjectId = crypto.randomUUID();
        const newMainTaskId = crypto.randomUUID();
        const newSubTaskIds = newTask.subTasks?.map(() => crypto.randomUUID()) || [];

        existingTasks.subjects[newSubjectId] = {
            id: newSubjectId,
            task: newTask.subject,
            mainTaskIds: [newMainTaskId],
        };
        existingTasks.mainTasks[newMainTaskId] = {
            id: newMainTaskId,
            task: newTask.mainTask,
            subTaskIds: [...newSubTaskIds],
        };

        newSubTaskIds.forEach((subTaskId, index )=> {
            existingTasks.subTasks[subTaskId] = {
                id: subTaskId,
                task: newTask[index]
            }
        }); 

        setTasks(existingTasks);
        setInStorage("tasks", existingTasks);
    }

    function addNewMainTask(subjectId, limitReachedCb) {
        const existingTasks = JSON.parse(JSON.stringify(tasks));
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
        setTasks(existingTasks);
        setInStorage("tasks", existingTasks);
    }

    function addNewSubTask(mainTaskId, limitReachedCb) {
        const existingTasks = JSON.parse(JSON.stringify(tasks));
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
        setTasks(existingTasks);
        setInStorage("tasks", existingTasks);
    }

    const VALUES = { tasks, addNewTask, addNewMainTask, addNewSubTask };
    return (
        <TasksContext.Provider value={VALUES}>{children}</TasksContext.Provider>
    );
}

export default TasksProvider;
