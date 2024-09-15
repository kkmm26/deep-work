/* eslint-disable react/prop-types */
import React from "react";
import styled from "styled-components";

import Subject from "./Subject.jsx";
import { MAIN_TASKS_ADDABLE, TASKS } from "../../../../constants.js";
import PopUp from "../../../PopUp/PopUp.jsx";
import MainTaskList from "./MainTaskList.jsx";
import { TasksContext } from "../../../Providers/TasksProvider.jsx";

function TaskContainer({ subjectObj, mainTaskIds }) {
    const [isTasksLimitReached, setIsTasksLimitReached] = React.useState(false);
    const isShowPopUp =
        typeof JSON.parse(localStorage.getItem("showPopUp")) === "boolean"
            ? JSON.parse(localStorage.getItem("showPopUp"))
            : true;
    const [isShowMainTasks, setIsShowMainTasks] = React.useState(true);
    const {addNewMainTask} = React.useContext(TasksContext)
    function addMainTask(subjectId) {
        setIsShowMainTasks(true);

        addNewMainTask(subjectId, () => setIsTasksLimitReached(true))
        
    }

    function closePopUp() {
        setIsTasksLimitReached(false);
    }

    function toggleDisplayTasks() {
        setIsShowMainTasks((prev) => !prev);
    }
    return (
        <Wrapper>
            {isShowPopUp && isTasksLimitReached && (
                <PopUp closePopUp={closePopUp}></PopUp>
            )}
            <Subject
                onChevronBtnClicked={toggleDisplayTasks}
                onPlusBtnClicked={()=>addMainTask(subjectObj.id)}
                hasDesc={true}
            >
                {subjectObj.task}
            </Subject>
            <MainTaskList
                mainTaskIds={mainTaskIds}
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
    min-width: 25%;
    max-height: 80vh;
    overflow-y: scroll;
    overflow-x: hidden;
    scrollbar-width: none;

    &::-webkit-scrollbar {
        display: none;
    }
`;

export default TaskContainer;
