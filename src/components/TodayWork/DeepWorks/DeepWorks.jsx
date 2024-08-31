import React from "react";
import styled from "styled-components";

import Subject from "./Subject.jsx";
import MainTask from "./MainTask.jsx";
import SubTask from "./SubTask.jsx";
import { MAIN_TASKS_ADDABLE, SUB_TASKS_ADDABLE } from "../../../constants.js";
import PopUp from "../../PopUp/PopUp.jsx";

function DeepWorks() {
    const [mainTasks, setMainTasks] = React.useState([
        { task: "Memorize the periodic table", id: crypto.randomUUID() },
    ]);
    const [isTasksLimitReached, setIsTasksLimitReached] = React.useState(false);
    const isShowPopUp = localStorage.getItem("showPopUp") || true;

    console.log(localStorage.getItem("showPopUp"));
    console.log(isShowPopUp);
    function addMainTask() {
        if (mainTasks.length >= MAIN_TASKS_ADDABLE) {
            setIsTasksLimitReached(true);
        } else {
            setMainTasks([
                ...mainTasks,
                { task: "New Main Task", id: crypto.randomUUID() },
            ]);
        }
    }

    function closePopUp() {
        setIsTasksLimitReached(false);
    }

    return (
        <Wrapper>
            {isShowPopUp && isTasksLimitReached && (
                <PopUp closePopUp={closePopUp}></PopUp>
            )}
            <Subject onPlusBtnClicked={addMainTask} hasDesc={true}>
                Chemistry
            </Subject>
            {mainTasks.map(({ task, id }) => {
                return (
                    <MainTask key={id} onPlusBtnClicked={addMainTask}>
                        {task}
                    </MainTask>
                );
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
