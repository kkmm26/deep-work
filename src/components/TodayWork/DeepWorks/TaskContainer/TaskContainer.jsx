import React from "react";
import styled from "styled-components";

import Subject from "./Subject.jsx";
import { MAIN_TASKS_ADDABLE } from "../../../../constants.js";
import PopUp from "../../../PopUp/PopUp.jsx";
import MainTaskList from "./MainTaskList.jsx";

function TaskContainer() {
    const [isTasksLimitReached, setIsTasksLimitReached] = React.useState(false);
    const isShowPopUp =
        typeof JSON.parse(localStorage.getItem("showPopUp")) === "boolean"
            ? JSON.parse(localStorage.getItem("showPopUp"))
            : true;
    const [mainTasks, setMainTasks] = React.useState([
        { task: "Memorize the periodic table", id: crypto.randomUUID() },
    ]);
    const [isShowMainTasks, setIsShowMainTasks] = React.useState(true);
    function addMainTask() {
        setIsShowMainTasks(true);

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

    function toggleDisplayTasks() {
        console.log(isShowMainTasks);
        setIsShowMainTasks((prev) => !prev);
    }
    return (
        <Wrapper>
            {isShowPopUp && isTasksLimitReached && (
                <PopUp closePopUp={closePopUp}></PopUp>
            )}
            <Subject
                onChevronBtnClicked={toggleDisplayTasks}
                onPlusBtnClicked={addMainTask}
                hasDesc={true}
            >
                Chemistry
            </Subject>
            <MainTaskList
                mainTasks={mainTasks}
                addMainTask={addMainTask}
                isShowMainTasks={isShowMainTasks}
            ></MainTaskList>
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

export default TaskContainer;
