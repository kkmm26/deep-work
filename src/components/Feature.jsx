import React from "react";
import styled from "styled-components";
import { COLORS, FEATURE_TITLES_STYLES } from "../constants.js";

function Feature({ title, isActive }) {

    return (
        <>
            <FeatureTitle isActive={isActive}>{title}</FeatureTitle>
        </>
    );
}

const FeatureTitle = styled.h1`
    width: 100%;
    background-color: ${(p) => (p.isActive ? COLORS.black : COLORS.white)};
    color: ${(p) => (p.isActive ? COLORS.white: COLORS.inactiveBlack)};
    text-align: center;
    font-size: ${FEATURE_TITLES_STYLES.fontSize};

    &:hover {
        cursor: pointer;
        background-color: ${(p) => (!p.isActive && COLORS.hoverBlack)};
        pointer-events: ${p => p.isActive && "none"};
    }
`;

export default Feature;
