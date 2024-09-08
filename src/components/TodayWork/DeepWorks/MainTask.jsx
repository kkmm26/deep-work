import React from "react";
import styled from "styled-components";
import TaskBar from "../../TaskBar/TaskBar";
import SubTaskList from "./SubTaskList";
import { SUB_TASKS_ADDABLE } from "../../../constants";
import { ToastsContext } from "./ToastsProvider";

function MainTask({ children, onPlusBtnClicked }) {
    const [subTasks, setSubTasks] = React.useState([
        "Sub Task",
    ]);
    const [isShowSubTasks, setIsShowSubTasks] = React.useState(true)
    const [isSubTasksLimitReached, setIsSubTasksLimitReached] = React.useState(false)
    const createToast = React.useContext(ToastsContext)

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
