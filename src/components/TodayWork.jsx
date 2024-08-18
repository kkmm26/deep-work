import React from "react";
import styled from "styled-components";
import Ritual from "./Ritual";
import DeepWorks from "./DeepWorks";
import ShallowWorks from "./ShallowWorks";

const WORK_TYPES = ["Ritual", "Deep Works", "Shallow Works"];

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
    font-size: ${(p) => (p.isActive ? "18px" : "14px")};
    border-bottom: ${(p) => (p.isActive ? "1px solid #b1b1b1" : "none")};
    color: ${(p) => (p.isActive ? "#2d2d2d" : "#b1b1b1")};

    padding: 0 10px 5px 10px;
`;

export default TodayWork;
