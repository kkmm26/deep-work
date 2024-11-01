import { getFromStorage } from "./api/db/localStorage";

const TASK_TYPES = {
    "Subject": "subjects",
    "Main Task": "mainTasks",
    "Sub Task": "subTasks",
};

export function getCurrentTask(type, currentTaskId) {
    if(!currentTaskId){
        return null
    }
    const existingTasks = JSON.parse(JSON.stringify(getFromStorage("tasks")));
    console.log(existingTasks);
    const taskType = TASK_TYPES[type];
    return existingTasks[taskType][currentTaskId].task 
}
export function removeSubTasks(existingTasks, mainTaskId) {
    const subTasksToDel = existingTasks.mainTasks[mainTaskId].subTaskIds;
    subTasksToDel.forEach((id) => delete existingTasks.subTasks[id]);
}