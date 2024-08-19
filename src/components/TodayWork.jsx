import React from "react";
import styled from "styled-components";
import Ritual from "./Ritual";
import DeepWorks from "./DeepWorks";
import ShallowWorks from "./ShallowWorks";
import { WORK_TYPES, WORK_TYPES_STYLES } from "./work_types.constants";

import { COLORS } from "./colors.constants";
import PlusButton from "./PlusButton";

function TodayWork() {
    const [workType, setWorkType] = React.useState(WORK_TYPES[1]);

    function handleClick(e) {
        setWorkType(e.target.dataset.work);
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
                            {isActive && <HorizontalLine></HorizontalLine>}
                            {isActive && <PlusButton />}
                        </Work>
                    );
                })}
            </TitleWrapper>
            <WorkTypeWrapper>
                {workType === WORK_TYPES[0] && <Ritual />}
                {workType === WORK_TYPES[1] && <DeepWorks />}
                {workType === WORK_TYPES[2] && <ShallowWorks />}
            </WorkTypeWrapper>
        </>
    );
}

const TitleWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    min-width: fit-content;
    max-width: 35%;
    text-align: center;
`;

const Work = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;

    &:hover button{
        visibility: visible;
    }
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
