import React from "react";
import styled from "styled-components";
import { SUB_TASKS_ADDABLE } from "../../../../constants";
import TaskBar from "../../../TaskBar/TaskBar";
import SubTaskList from "./SubTaskList";
import { TasksContext } from "../../../Providers/TasksProvider";

function MainTask({
    children,
    task,
    createToast,
    subTaskIds,
    mainTaskId,
    subjectId,
}) {
    const { addNewSubTask, completeMainTask, updateTask, tasks } = React.useContext(TasksContext);
    const [isShowSubTasks, setIsShowSubTasks] = React.useState(true);
    function handlePlusBtnClicked(mainTaskId) {
        setIsShowSubTasks(true);
        addNewSubTask(mainTaskId);
    }
    function toggleDisplayTasks() {
        setIsShowSubTasks((prev) => !prev);
    }

    return (
        <Wrapper>
            <MainTaskTaskBar
                hasDesc={false}
                onChevronBtnClicked={toggleDisplayTasks}
                onPlusBtnClicked={() => handlePlusBtnClicked(mainTaskId)}
                createToast={createToast}
                completeTask={() => completeMainTask(subjectId, mainTaskId)}
                variant="Main Task"
                currentTask={task}
                currentTaskId={mainTaskId}
                updateTask={updateTask}
            >
                {children}
            </MainTaskTaskBar>
            <SubTaskList
                isShowSubTasks={isShowSubTasks}
                subTaskIds={subTaskIds}
                mainTaskId={mainTaskId}
            />
        </Wrapper>
    );
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 3px;
`;

const MainTaskTaskBar = styled(TaskBar)`
    font-size: 1rem;
    font-weight: 400;
`;

export default MainTask;
