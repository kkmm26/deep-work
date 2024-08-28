import React from "react";
import styled from "styled-components";

import Subject from "./Subject.jsx";
import MainTask from "./MainTask.jsx";
import SubTask from "./SubTask.jsx";
import { SUB_TASKS_ADDABLE } from "../../../constants.js";

function DeepWorks() {
    const [subTasks, setSubtasks] = React.useState([
        "HomeWork(1)",
        "ive into Systems is a free, online textbook that serves as a gentle introduction to computer systems, computer organization, and parallel computing. The book is intended for an audience that has only a CS1 background. It guides readers through a vertical slice of a computer to develop an understanding of a variety of systems topics, including:(2)",
        "ive into Systems is a free, online textbook that serves as a gentle introduction to computer systems, computer organization, and parallel computing. The book is intended for an audience that has only a CS1 background. It guides readers through a vertical slice of a computer to develop an understanding of a variety of systems topics, including:(2)",
    ]);

    function addSubTask() {
        if (subTasks.length >= SUB_TASKS_ADDABLE) {
            return;
        }
        setSubtasks([...subTasks, "New Sub Task"]);
    }

    return (
        <Wrapper>
            <Subject hasDesc={true}>Chemistry</Subject>
            <MainTask addSubTask={addSubTask}>
                Memorize the periodic table
            </MainTask>
            <SubTask subTasks={subTasks} />
            {subTasks.length >= SUB_TASKS_ADDABLE && (
                <SubTaskWarning>
                    Whoa, that's a lot of tasks! You've maxed out your{" "}
                    {SUB_TASKS_ADDABLE} sub-tasks. Time to check some off before
                    adding more.{" "}
                </SubTaskWarning>
            )}
        </Wrapper>
    );
}

const Wrapper = styled.section`
    display: flex;
    flex-direction: column;
    gap: 8px;
    max-width: 35%;
`;

const SubTaskWarning = styled.p`
    align-self: center;
    padding-left: 70px;
    padding-right: 30px;
    font-size: 0.8rem;
    opacity: 0.8;
`;

export default DeepWorks;
