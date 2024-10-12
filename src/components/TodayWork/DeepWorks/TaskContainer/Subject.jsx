import styled from "styled-components";
import TaskBar from "../../../TaskBar/TaskBar";

function Subject({ currentTask,  currentTaskId, updateTask, children, onPlusBtnClicked, onChevronBtnClicked, description, createToast, completeTask }) {
    return (
        <SubjectTaskBar
            onChevronBtnClicked={onChevronBtnClicked}
            onPlusBtnClicked={onPlusBtnClicked}
            hasDesc={true}
            description={description}
            variant="Subject"
            currentTask={currentTask}
            currentTaskId={currentTaskId}
            updateTask={updateTask}
            createToast={createToast}
            completeTask={completeTask}
        >
            {children}
        </SubjectTaskBar>
    );
}

const SubjectTaskBar = styled(TaskBar)`
    font-size: 1.2rem;
    font-weight: 700;
    display: flex;
    align-items: center;
    width: fit-content;

    &  button {
        right: -60px;
    }
`;

export default Subject;
