import React from "react";
import styled from "styled-components";
import Ritual from "./Ritual";
import DeepWorks from "./DeepWorks";
import ShallowWorks from "./ShallowWorks";

import { COLORS, WORK_TYPES, WORK_TYPES_STYLES } from "../constants.js";
import PlusButton from "./PlusButton";
import TaskForm from "./TaskForm";
import SubTaskProvider from "./SubTaskProvider.jsx";

function TodayWork() {
    const [workType, setWorkType] = React.useState(WORK_TYPES[1]);
    const scrollRef = React.useRef();
    const taskFormRef = React.useRef();

    function handleClick(e) {
        scrollRef.current.scrollIntoView({ behavior: "smooth" });
        setWorkType(e.target.dataset.work);
    }

  

    return (
        <>
            <TitleWrapper  >
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
                            {isActive && <HorizontalLine></HorizontalLine>}
                            <SubTaskProvider>
                            
                            {isActive && (
                                <TaskForm
                                    ref={taskFormRef}
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
    padding: 0;
    color: ${(p) => (p.isActive ? COLORS.black : COLORS.inactiveBlack)};
    font-size: ${(p) =>
        p.isActive
            ? WORK_TYPES_STYLES.fontSize.active + "px"
            : WORK_TYPES_STYLES.fontSize.inactive + "px"};
            font-weight: ${p => p.isActive && 900};
    &:hover {
        color: ${(p) => !p.isActive && COLORS.hoverBlack};
    }
`;

const HorizontalLine = styled.div`
    width: 100%;
    height: 1px;
    background-color: ${COLORS.hoverBlack};
    padding: 0;
    margin: 0;
`;

const WorkTypeWrapper = styled.div`
    padding: 20px;
    border: 1px solid red;
    background-color: aliceblue;
    max-width: 100%;
    min-width: fit-content;
`;

export default TodayWork;
