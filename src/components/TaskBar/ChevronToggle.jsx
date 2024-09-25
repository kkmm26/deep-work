import React from "react";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import styled from "styled-components";
import { COLORS } from "../../constants";

function ChevronToggle({ isRotated, onClick, className }) {
    return (
        <ChevronDownIconWrapper className={className} onClick={onClick} isRotated={isRotated}>
            <ChevronDownIcon />
        </ChevronDownIconWrapper>
    );
}

const ChevronDownIconWrapper = styled.div`
    padding: 6px 10px;
    border-radius: 3px;
    visibility: hidden;
    transform: ${({ isRotated }) =>
        isRotated ? "rotate(180deg)" : "rotate(0deg)"};

    &:hover {
        cursor: pointer;
        background-color: ${COLORS.backgroundHover};
    }
`;

export default ChevronToggle;
