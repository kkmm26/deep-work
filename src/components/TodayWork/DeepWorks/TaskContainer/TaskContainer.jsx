/* eslint-disable react/prop-types */
import React from "react";
import styled from "styled-components";

import Subject from "./Subject.jsx";
import { MAIN_TASKS_ADDABLE } from "../../../../constants.js";
import PopUp from "../../../PopUp/PopUp.jsx";
import MainTaskList from "./MainTaskList.jsx";
import { TasksContext } from "../../../Providers/TasksProvider.jsx";
import {
    getFromStorage,
    setInStorage,
} from "../../../../api/db/localStorage.js";
import { SHOW_POPUP } from "../../../../config.js";
import { ToastsContext } from "../ToastsProvider.jsx";

function TaskContainer({ subjectObj, mainTaskIds }) {
    const [isTasksLimitReached, setIsTasksLimitReached] = React.useState(false);

    const isShowPopUp = Object.keys(getFromStorage("showPopUp")).length
        ? getFromStorage("showPopUp").onMainTaskLimit
        : SHOW_POPUP.onMainTaskLimit;

    const [isShowMainTasks, setIsShowMainTasks] = React.useState(true);
    const { addNewMainTask, updateTask, completeSubject } = React.useContext(TasksContext);
    const {createToast} = React.useContext(ToastsContext)
    function addMainTask(subjectId) {
        setIsShowMainTasks(true);
        addNewMainTask(subjectId, () => setIsTasksLimitReached(true));
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
                <PopUp closePopUp={closePopUp} type="MainTask"></PopUp>
            )}
            <Subject
                onChevronBtnClicked={toggleDisplayTasks}
                onPlusBtnClicked={() => addMainTask(subjectObj.id)}
                hasDesc={true}
                description={subjectObj.description}
                updateTask={updateTask}
                currentTaskId={subjectObj.id}
                currentTask={subjectObj.task}
                createToast={()=>createToast(subjectObj.task)}
                completeTask={()=>completeSubject(subjectObj.id)}
        >
                {subjectObj.task}
            </Subject>
            <MainTaskList
                mainTaskIds={mainTaskIds}
                isShowMainTasks={isShowMainTasks}
                subjectId={subjectObj.id}
            ></MainTaskList>
        </Wrapper>
    );
}

const Wrapper = styled.section`
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 5px;
    flex: 1;
    min-width: 25%;
    max-width: 35%;
    /* max-height: 80vh; */
    /* overflow-y: scroll;
    overflow-x: hidden; */
    margin-bottom: -20px;
    padding-bottom: 20px;

    scrollbar-width: none;

    &::-webkit-scrollbar {
        display: none;
    }
`;

export default TaskContainer;
