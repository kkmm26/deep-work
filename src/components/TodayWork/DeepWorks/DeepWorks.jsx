import ToastList from "./ToastList.jsx";
import ToastsProvider from "./ToastsProvider.jsx";
import TasksProvider from "../../Providers/TasksProvider.jsx";
import TaskContainerList from "./TaskContainerList.jsx";

function DeepWorks() {

    return (
        <TasksProvider>
            <ToastsProvider>
                <TaskContainerList></TaskContainerList>
                <ToastList></ToastList>
            </ToastsProvider>
        </TasksProvider>
    );
}

export default DeepWorks;
