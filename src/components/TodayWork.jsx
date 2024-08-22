import React from "react";
import styled from "styled-components";
import Ritual from "./Ritual";
import DeepWorks from "./DeepWorks";
import ShallowWorks from "./ShallowWorks";

import { COLORS, WORK_TYPES, WORK_TYPES_STYLES } from "../constants.js";
import TaskForm from "./TaskForm";
import SubTaskProvider from "./SubTaskProvider.jsx";
import PlusButton from "./Buttons/PlusButton.jsx";

function TodayWork() {
    const [currentWork, setCurrentWork] = React.useState(WORK_TYPES[1]);
    const [isFormOpen, setIsFormOpen] = React.useState(false)
    const scrollRef = React.useRef();

    function scrollOnTitleClicked(e) {
        scrollRef.current.scrollIntoView({ behavior: "smooth" });
        setCurrentWork(e.currentTarget.dataset.work);
    }
    function closeForm(e) {
        e.preventDefault()
        setIsFormOpen(false)
    }
    function openForm(e) {
        e.preventDefault()
        setIsFormOpen(true)
    }
    
    

    return (
        <>
            <TitleWrapper>
                {WORK_TYPES.map((work, index) => {
                    const isActive = work === currentWork;
                    return (
                        <Work key={index}>
                            <WorkTitle
                                data-work={work}
                                onClick={(e) => scrollOnTitleClicked(e)}
                                isActive={isActive}
                            >
                                {work}
                                {isActive && (
                                    <PlusButton
                                        onClick={(e) => openForm(e)}
                                        type="Work Type"
                                    />
                                )}
                            </WorkTitle>
                        </Work>
                    );
                })}
            </TitleWrapper>
            <SubTaskProvider>
                {isFormOpen && (
                    <TaskForm
                        closeForm={closeForm}
                        isFormOpen={isFormOpen}
                    />
                )}
            </SubTaskProvider>
            <WorkTypeWrapper ref={scrollRef}>
                {currentWork === WORK_TYPES[0] && <Ritual />}
                {currentWork === WORK_TYPES[1] && <DeepWorks />}
                {currentWork === WORK_TYPES[2] && <ShallowWorks />}
            </WorkTypeWrapper>
        </>
    );
}

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
            ? WORK_TYPES_STYLES.fontSize.active + "px"
            : WORK_TYPES_STYLES.fontSize.inactive + "px"};
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



const WorkTypeWrapper = styled.div`
    /* padding: 20px;
    border: 1px solid red;
    background-color: aliceblue;
    max-width: 100%;
    min-width: fit-content; */
`;



export default TodayWork;
