import React from "react";
import styled from "styled-components";

function Feature({ title }) {

    return (
        <>
            <FeatureTitle>{title}</FeatureTitle>
        </>
    );
}

const FeatureTitle = styled.h1`
    width: 100%;
    background-color: ${(p) => (p.isActive ? "#b1b1b1" : "#e3e3e3")};
    text-align: center;
    font-size: 20px;
    border: 1px solid #b1b1b1b1;

    &:hover {
        cursor: pointer;
        background-color: #b1b1b1;
    }
`;

export default Feature;
