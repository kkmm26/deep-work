import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import { ChevronDownIcon } from "@radix-ui/react-icons";
import { COLORS } from "../../../constants.js";
import DescriptionIcon from "./DescriptionIcon.jsx";
import PlusButton from "../../Buttons/PlusButton.jsx";
import useEditableTitle from "../../../hooks/useEditableTitle.jsx";

const Title = styled.h3`
    min-width: fit-content;
    cursor: pointer;
    display: flex;
    gap: 5px;
    align-items: center;
    font: inherit;
    &:focus {
        outline: 2px solid ${COLORS.taskFocusOutline};
        opacity: 0.7;
    }
`;

const MainTaskTitle = styled(Title)`
    width: 100%;
    min-height: 40px;
    background-color: ${COLORS.mainTaskBackground};
    padding: 0;
    padding-left: 15px;
    border-radius: 3px;
`;

const SubTaskTitle = styled(Title)`
    width: 100%;
    min-height: 30px;
    background-color: ${COLORS.background};
    padding: 0;
    padding-left: 15px;
    border-radius: 2px;
`;

const titleComponents = {
    "Subject": Title, 
    "Main Task": MainTaskTitle,
    "Sub Task": SubTaskTitle,
};

function TaskBar({
    children,
    hasDesc,
    className,
    variant,
    onClick,
}) {
    const Tag = titleComponents[variant];
    const editTaskTitle = useEditableTitle();

    return (
        <Wrapper className={className}>
            {variant !== "Sub Task" && (
                <ChevronDownIconWrapper>
                    <ChevronDownIcon />
                </ChevronDownIconWrapper>
            )}
            <Tag
                tabIndex={0}
                onClick={(e) => e.currentTarget.focus()}
                onDoubleClick={editTaskTitle}
            >
                {children}
            </Tag>
            {hasDesc && <DescriptionIcon />}
            {variant !== "Sub Task" && (
                <PlusButton onClick={onClick} variant="Task Bar" />
            )}
        </Wrapper>
    );
}



const ChevronDownIconWrapper = styled.div`
    padding: 6px 10px;
    border-radius: 3px;
    align-self: center;
    visibility: hidden;

    &:hover {
        cursor: pointer;
        background-color: ${COLORS.backgroundHover};
    }
`;

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    gap: 5px;

    &:hover button,
    &:hover ${ChevronDownIconWrapper} {
        visibility: visible;
    }
`;


TaskBar.propTypes = {
    children: PropTypes.node,
    hasDesc: PropTypes.bool,
    titleStyles: PropTypes.object,
    className: PropTypes.string,
    variant: PropTypes.oneOf(["Subject", "Main Task", "Sub Task"]), 
    onClick: PropTypes.func,
};

export default TaskBar;
