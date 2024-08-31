import React from "react";
import styled from "styled-components";
import TaskBar from "../../TaskBar/TaskBar";
import SubTaskList from "./SubTaskList";
import { SUB_TASKS_ADDABLE } from "../../../constants";

function MainTask({ children, onPlusBtnClicked }) {
    const [subTasks, setSubTasks] = React.useState([
        "HomeWork(1)",
        "HomeWork(1)",
    ]);
    const [isShowSubTasks, setIsShowSubTasks] = React.useState(true)

    function addSubTask() {
        if (subTasks.length >= SUB_TASKS_ADDABLE) {
            return;
        }
        setSubTasks([...subTasks, "New Sub Task"]);
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
                variant="Main Task"
            >
                {children}
            </MainTaskTaskBar>
            <SubTaskList isShowSubTasks={isShowSubTasks} subTasks={subTasks} />
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
