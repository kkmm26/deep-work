import React from "react";
import styled from "styled-components";
import TaskBar from "./TaskBar";
import SubTask from "./SubTask";
import { SUB_TASKS_ADDABLE } from "../../../constants";

function MainTask({ children, onPlusBtnClicked }) {
    const [subTasks, setSubTasks] = React.useState([
        "HomeWork(1)",
        "HomeWork(1)",
    ]);
    function addSubTask() {
        if (subTasks.length >= SUB_TASKS_ADDABLE) {
            return;
        }
        setSubTasks([...subTasks, "New Sub Task"]);
    }

    return (
        <>
            <MainTaskTaskBar
                hasDesc={false}
                onPlusBtnClicked={addSubTask}
                variant="Main Task"
            >
                {children}
            </MainTaskTaskBar>
            <SubTask subTasks={subTasks} />
        </>
    );
}

const Wrapper = styled.div``;

const MainTaskTaskBar = styled(TaskBar)`
    font-size: 1rem;
    font-weight: 400;
`;

export default MainTask;
