import React from "react";
import styled from "styled-components";
import { SUB_TASKS_ADDABLE } from "../../../../constants";
import TaskBar from "../../../TaskBar/TaskBar";
import SubTaskList from "./SubTaskList"
import { TasksContext } from "../../../Providers/TasksProvider";

function MainTask({ children, createToast, subTaskIds, mainTaskId }) {
    const [isShowSubTasks, setIsShowSubTasks] = React.useState(true);
    const [isSubTasksLimitReached, setIsSubTasksLimitReached] =
        React.useState(false);
    const {addNewSubTask} = React.useContext(TasksContext)

    function addSubTask(mainTaskId) {
        setIsShowSubTasks(true);
        addNewSubTask(mainTaskId, ()=>setIsSubTasksLimitReached(true))
    }
    function toggleDisplayTasks() {
        setIsShowSubTasks((prev) => !prev);
    }

    return (
        <Wrapper>
            <MainTaskTaskBar
                hasDesc={false}
                onChevronBtnClicked={toggleDisplayTasks}
                onPlusBtnClicked={()=>addSubTask(mainTaskId)}
                createToast={createToast}
                variant="Main Task"
            >
                {children}
            </MainTaskTaskBar>
            <SubTaskList
                isShowSubTasks={isShowSubTasks}
                subTaskIds={subTaskIds}
                isSubTasksLimitReached={isSubTasksLimitReached}
            />
        </Wrapper>
    );
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 3px;
`

const MainTaskTaskBar = styled(TaskBar)`
    font-size: 1rem;
    font-weight: 400;
`;

export default MainTask;
