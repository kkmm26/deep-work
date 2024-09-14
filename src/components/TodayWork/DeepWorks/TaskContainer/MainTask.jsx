import React from "react";
import styled from "styled-components";
import { SUB_TASKS_ADDABLE } from "../../../../constants";
import TaskBar from "../../../TaskBar/TaskBar";
import SubTaskList from "./SubTaskList"

function MainTask({ children, onPlusBtnClicked, createToast }) {
    const [subTasks, setSubTasks] = React.useState([
        "Sub Task",
    ]);
    const [isShowSubTasks, setIsShowSubTasks] = React.useState(true)
    const [isSubTasksLimitReached, setIsSubTasksLimitReached] = React.useState(false)
    

    function addSubTask() {
        setIsShowSubTasks(true)
        if (subTasks.length >= SUB_TASKS_ADDABLE) {
            setIsSubTasksLimitReached(true)
            
        } else {

            setSubTasks([...subTasks, "New Sub Task"]);
        }
    }
    function toggleDisplayTasks(){
        setIsShowSubTasks(prev => !prev)
    }

    return (
        <Wrapper>
            <MainTaskTaskBar
                hasDesc={false}
                onChevronBtnClicked={toggleDisplayTasks}
                onPlusBtnClicked={addSubTask}
                createToast={createToast}
                variant="Main Task"
            >
                {children}
            </MainTaskTaskBar>
            <SubTaskList isShowSubTasks={isShowSubTasks} subTasks={subTasks} isSubTasksLimitReached={isSubTasksLimitReached}/>
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
