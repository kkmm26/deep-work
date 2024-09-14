import React from "react";
import ToastList from "./ToastList.jsx";
import ToastsProvider from "./ToastsProvider.jsx";
import TaskContainer from "./TaskContainer/TaskContainer.jsx";

function DeepWorks() {


    return (
        <ToastsProvider>
            <TaskContainer></TaskContainer>
            <ToastList></ToastList>
        </ToastsProvider>
    );
}

export default DeepWorks;
