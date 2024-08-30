import React from "react";
import styled from "styled-components";

import Subject from "./Subject.jsx";
import MainTask from "./MainTask.jsx";
import SubTask from "./SubTask.jsx";
import { MAIN_TASKS_ADDABLE, SUB_TASKS_ADDABLE } from "../../../constants.js";

function DeepWorks() {
    const [mainTasks, setMainTasks] = React.useState([
        { task: "Memorize the periodic table", id: crypto.randomUUID() },
    ]);

    function addMainTask() {
        if (mainTasks.length >= MAIN_TASKS_ADDABLE) {
            return;
        }
        setMainTasks([
            ...mainTasks,
            { task: "New Main Task", id: crypto.randomUUID() },
        ]);
    }

    return (
        <Wrapper>
            <Subject onPlusBtnClicked={addMainTask} hasDesc={true}>
                Chemistry
            </Subject>
            {mainTasks.map(({ task, id }) => {
                return <MainTask key={id} onPlusBtnClicked={addMainTask}>{task}</MainTask>;
            })}
        </Wrapper>
    );
}

const Wrapper = styled.section`
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 5px;
    max-width: 35%;
    max-height: 80vh;
    overflow-y: scroll;
    overflow-x: hidden;
    scrollbar-width: none;

    &::-webkit-scrollbar {
        display: none;
    }
`;

export default DeepWorks;
