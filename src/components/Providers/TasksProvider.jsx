import React from "react";
import { getFromStorage } from "../../api/db/localStorage";
import { TASKS } from "../../constants";

export const TasksContext = React.createContext();
function TasksProvider({ children }) {
    const [tasks, setTasks] = React.useState(getFromStorage("tasks"));

    

    const VALUES = { tasks };
    return (
        <TasksContext.Provider value={VALUES}>{children}</TasksContext.Provider>
    );
}

export default TasksProvider;
