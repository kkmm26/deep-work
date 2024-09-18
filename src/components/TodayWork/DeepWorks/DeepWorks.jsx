import ToastList from "./ToastList.jsx";
import ToastsProvider from "./ToastsProvider.jsx";
import TaskContainerList from "./TaskContainerList.jsx";

function DeepWorks() {

    return (
            <ToastsProvider>
                <TaskContainerList></TaskContainerList>
                <ToastList></ToastList>
            </ToastsProvider>
    );
}

export default DeepWorks;
