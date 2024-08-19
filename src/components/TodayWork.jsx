import React from "react";
import styled from "styled-components";
import Ritual from "./Ritual";
import DeepWorks from "./DeepWorks";
import ShallowWorks from "./ShallowWorks";
import { WORK_TYPES, WORK_TYPES_STYLES } from "./work_types.constants";

import { COLORS } from "./colors.constants";

function TodayWork() {
    const [workType, setWorkType] = React.useState(WORK_TYPES[1]);

    function handleClick(e) {
        setWorkType(e.target.textContent);
    }

    return (
        <>
            <TitleWrapper>
                {WORK_TYPES.map((work, index) => (
                    <Work
                        key={index}
                        onClick={(e) => handleClick(e)}
                        isActive={work === workType}
                    >
                        {work}
                    </Work>
                ))}
            </TitleWrapper>
            {workType === WORK_TYPES[0] && <Ritual />}
            {workType === WORK_TYPES[1] && <DeepWorks />}
            {workType === WORK_TYPES[2] && <ShallowWorks />}
        </>
    );
}

const TitleWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    width: 35%;
`;

const Work = styled.h2`
    cursor: pointer;
    font-size: ${(p) => (p.isActive ? WORK_TYPES_STYLES.fontSize.active : WORK_TYPES_STYLES.fontSize.inactive)};
    border-bottom: ${(p) => (p.isActive && WORK_TYPES_STYLES.borderBottom.active)};
    color: ${(p) => (p.isActive ? COLORS.black : COLORS.inactiveBlack)};
    padding: 0 10px 5px 10px;

    &:hover {
        color: ${p => !p.isActive && COLORS.hoverBlack};
        pointer-events: ${p => p.isActive && "none"};
    }
`;

export default TodayWork;
