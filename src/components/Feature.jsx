import React from "react";
import styled from "styled-components";

function Feature({ title, isActive }) {

    return (
        <>
            <FeatureTitle isActive={isActive}>{title}</FeatureTitle>
        </>
    );
}

const FeatureTitle = styled.h1`
    width: 100%;
    background-color: ${(p) => (p.isActive ? "#000000" : "white")};
    color: ${(p) => (p.isActive ? "white" : "#b1b1b1")};
    text-align: center;
    font-size: 18px;

    &:hover {
        cursor: pointer;
        background-color: ${(p) => (p.isActive ? "none" : "#e7e7e7")};
        pointer-events: ${p => p.isActive ? "none" : "revert"};
    }
`;

export default Feature;
