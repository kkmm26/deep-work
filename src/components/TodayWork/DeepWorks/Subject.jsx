import TaskHeader from "./TaskHeader";

function Subject({children}) {
    return (
        <TaskHeader hasDesc={true}>{children}</TaskHeader>
    );
}



export default Subject;
