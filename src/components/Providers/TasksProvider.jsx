import React from "react";
import { setInStorage } from "../../api/db/localStorage";
import { MAIN_TASKS_ADDABLE, SUB_TASKS_ADDABLE, TASKS } from "../../constants";

export const TasksContext = React.createContext();
function TasksProvider({ children }) {
    // const [tasks, setTasks] = React.useState(getFromStorage("tasks"));
    const [tasks, setTasks] = React.useState(TASKS);

    function addNewMainTask(subjectId, limitReachedCb, ) {
        const existingTasks = JSON.parse(JSON.stringify(tasks));
        const newId = crypto.randomUUID();

        const currentMainTaskIds = existingTasks.subjects[subjectId].mainTaskIds
        if(currentMainTaskIds.length >= MAIN_TASKS_ADDABLE) {
            limitReachedCb()
            return
        }
        currentMainTaskIds.push(newId);
        existingTasks.mainTasks[newId] = {
            id: newId,
            task: "New Main Task",
            subTaskIds: [],
        };
        setTasks(existingTasks);
        setInStorage("tasks", existingTasks)
    }

    function addNewSubTask(mainTaskId, limitReachedCb) {
        const existingTasks = JSON.parse(JSON.stringify(tasks));
        const newId = crypto.randomUUID();

        const currentSubTaskIds =
            existingTasks.mainTasks[mainTaskId].subTaskIds;
        if (currentSubTaskIds.length >= SUB_TASKS_ADDABLE) {
            limitReachedCb()
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



    const VALUES = { tasks, addNewMainTask, addNewSubTask };
    return (
        <TasksContext.Provider value={VALUES}>{children}</TasksContext.Provider>
    );
}

export default TasksProvider;
