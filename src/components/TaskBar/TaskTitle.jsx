import React from "react";
import styled, { css } from "styled-components";
import { COLORS } from "../../constants";

const TaskTitle = styled.h3`
    position: relative;
    cursor: pointer;
    padding: 8px;
    font: inherit;
    flex: 1;
    ${({ variant }) => variantStyles[variant]}

    &:focus {
        outline: 2px solid ${COLORS.taskFocusOutline};
    }


`;

const variantStyles = {
    Subject: css`
        max-height: 2.5rem;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        overflow: hidden;
        word-wrap: break-word;
        border: 3px solid red;
        ${({ fullTextVisible }) => fullTextVisible && css`
            display: block;
            word-wrap: normal;
            max-height: fit-content;
        `}
    `,
    "Main Task": css`
        background-color: ${COLORS.mainTaskBackground};
        padding-left: 20px;
        border-radius: 3px;
    `,
    "Sub Task": css`
        background-color: ${COLORS.background};
        padding: 5px;
        padding-left: 20px;
        border-radius: 2px;
    `,
};

export default TaskTitle;
