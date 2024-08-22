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
    const [workType, setWorkType] = React.useState(WORK_TYPES[1]);
    const [isFormOpen, setIsFormOpen] = React.useState(true)
    const scrollRef = React.useRef();
    const taskFormRef = React.useRef();

    function handleClick(e) {
        scrollRef.current.scrollIntoView({ behavior: "smooth" });
        setWorkType(e.target.dataset.work);
    }
    function handleFormClose(e) {
        e.preventDefault()
        setIsFormOpen(false)
    }

    return (
        <>
            <TitleWrapper>
                {WORK_TYPES.map((work, index) => {
                    const isActive = work === workType;
                    return (
                        <Work key={index}>
                            <WorkTitle
                                data-work={work}
                                onClick={(e) => handleClick(e)}
                                isActive={isActive}
                            >
                                {work}
                            </WorkTitle>
                            {isActive && <PlusButton type="Work Type" />}
                            <SubTaskProvider>
                                {isFormOpen && (
                                    <TaskForm
                                        ref={taskFormRef}
                                        handleFormClose={handleFormClose}
                                    />
                                )}
                            </SubTaskProvider>
                        </Work>
                    );
                })}

                
            </TitleWrapper>
            <WorkTypeWrapper ref={scrollRef}>
                {workType === WORK_TYPES[0] && <Ritual />}
                {workType === WORK_TYPES[1] && <DeepWorks />}
                {workType === WORK_TYPES[2] && <ShallowWorks />}
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
    max-height: 30px;
    width: 100%;
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
    border-bottom: ${p => p.isActive && "1px solid black"};
    padding-bottom: 5px;

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
