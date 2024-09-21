import React from "react";
import styled from "styled-components";
import Ritual from "./Ritual.jsx";
import DeepWorks from "./DeepWorks/DeepWorks.jsx";
import ShallowWorks from "./ShallowWorks.jsx";

import {
    COLORS,
    SUBJECTS_ADDABLE,
    WORK_TYPES,
    WORK_TYPES_STYLES,
} from "../../constants.js";
import SubTaskInputProvider from "../Providers/SubTaskInputProvider.jsx";
import PlusButton from "../Buttons/PlusButton.jsx";
import TaskEntryForm from "../TaskEntryForm/TaskEntryForm.jsx";
import TasksProvider from "../Providers/TasksProvider.jsx";
import { getFromStorage } from "../../api/db/localStorage.js";
import PopUp from "../PopUp/PopUp.jsx";
import { SHOW_POPUP } from "../../config.js";

function TodayWork() {
    const [currentWork, setCurrentWork] = React.useState(WORK_TYPES[1]);
    const [isFormOpen, setIsFormOpen] = React.useState(false);
    const [isSubjectLimitReached, setIsSubjectLimitReached] =
        React.useState(false);
    const isShowPopUp = Object.keys(getFromStorage("showPopUp")).length
        ? getFromStorage("showPopUp").onSubjectLimit
        : SHOW_POPUP.onSubjectLimit;
    const scrollRef = React.useRef();

    function handleTitleClicked(e) {
        setCurrentWork(e.currentTarget.dataset.work);
        scrollRef.current.scrollIntoView({ behavior: "smooth" });
    }
    function closeForm() {
        setIsFormOpen(false);
        document.body.style.overflow = "auto";
    }
    function openForm(e) {
        e.preventDefault();
        setIsFormOpen(true);
        document.body.style.overflow = "hidden";
    }
    function handlePlusBtnClick(e) {
        const currentTasks = getFromStorage("tasks");
        console.log(isShowPopUp);
        if (Object.keys(currentTasks).length === 0) {
            openForm(e);
            return;
        }
        if (Object.values(currentTasks.subjects).length < SUBJECTS_ADDABLE) {
            openForm(e);
        } else {
            // setIsShowPopUp(getFromStorage("showPopUp").onSubjectLimit);
            setIsSubjectLimitReached(true);
        }
    }
    function closePopUp() {
        setIsSubjectLimitReached(false);
    }

    return (
        <Wrapper ref={scrollRef}>
            {isShowPopUp && isSubjectLimitReached && (
                <PopUp type="Subject" closePopUp={closePopUp}></PopUp>
            )}
            <TitleWrapper>
                {WORK_TYPES.map((work, index) => {
                    const isActive = work === currentWork;
                    return (
                        <Work key={index}>
                            <WorkTitle
                                data-work={work}
                                onClick={(e) => handleTitleClicked(e)}
                                isActive={isActive}
                            >
                                {work}
                                {isActive && (
                                    <PlusButton
                                        onClick={(e) => handlePlusBtnClick(e)}
                                        variant="Work Type"
                                    />
                                )}
                            </WorkTitle>
                        </Work>
                    );
                })}
            </TitleWrapper>
            <TasksProvider>
                <SubTaskInputProvider>
                    {isFormOpen && <TaskEntryForm closeForm={closeForm} />}
                </SubTaskInputProvider>
                <WorkTypeWrapper>
                    {currentWork === WORK_TYPES[0] && <Ritual />}
                    {currentWork === WORK_TYPES[1] && <DeepWorks />}
                    {currentWork === WORK_TYPES[2] && <ShallowWorks />}
                </WorkTypeWrapper>
            </TasksProvider>
        </Wrapper>
    );
}
const Wrapper = styled.div``;

const TitleWrapper = styled.div`
    isolation: isolate;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    min-width: fit-content;
    max-width: 40%;
    width: auto;
    text-align: center;
`;
const Work = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5px;
    width: 100%;

    padding-bottom: 30px;

    &:hover button {
        visibility: visible;
        opacity: 1;
    }
`;
const WorkTitle = styled.h2`
    cursor: pointer;
    margin: 0;
    color: ${(p) => (p.isActive ? COLORS.black : COLORS.inactiveBlack)};
    font-size: ${(p) =>
        p.isActive
            ? WORK_TYPES_STYLES.fontSize.active
            : WORK_TYPES_STYLES.fontSize.inactive};
    font-weight: ${(p) => p.isActive && 900};
    border-bottom: ${(p) => p.isActive && "1px solid black"};
    padding-bottom: 5px;
    position: relative;
    display: flex;
    justify-content: center;

    &:hover {
        color: ${(p) => !p.isActive && COLORS.hoverBlack};
    }
`;

const WorkTypeWrapper = styled.div``;

export default TodayWork;
