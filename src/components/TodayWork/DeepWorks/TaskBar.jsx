import React, { useState } from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";

import { ChevronDownIcon } from "@radix-ui/react-icons";
import { COLORS } from "../../../constants.js";
import DescriptionIcon from "./DescriptionIcon.jsx";
import PlusButton from "../../Buttons/PlusButton.jsx";
import useEditableTitle from "../../../hooks/useEditableTitle.jsx";

const Title = styled.h3`
    cursor: pointer;
    padding: 10px;
    font: inherit;
    &:focus {
        outline: 2px solid ${COLORS.taskFocusOutline};
        opacity: 0.7;
    }
`;

const SubjectTitle = styled(Title)`
    flex: 1;
    padding: 0;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    ${({ fullTextVisible }) =>
        fullTextVisible &&
        css`
            display: block;
            overflow: visible;
        `}
`;

const MainTaskTitle = styled(Title)`
    width: 100%;
    min-height: 40px;
    background-color: ${COLORS.mainTaskBackground};
    padding-left: 15px;
    border-radius: 3px;
    overflow: hidden;
    text-overflow: ellipsis;
`;

const SubTaskTitle = styled(Title)`
    width: 100%;
    min-height: 30px;
    background-color: ${COLORS.background};
    padding-left: 15px;
    border-radius: 2px;
`;

const titleComponents = {
    Subject: SubjectTitle,
    "Main Task": MainTaskTitle,
    "Sub Task": SubTaskTitle,
};

function TaskBar({ children, hasDesc, className, variant, onClick }) {
    const Tag = titleComponents[variant];
    const editTaskTitle = useEditableTitle();
    const [fullTextVisible, setFullTextVisible] = useState(false);

    function handleTitleClick() {
        setFullTextVisible((prev) => !prev);
    }

    return (
        <Wrapper className={className}>
            {variant !== "Sub Task" && (
                <ChevronDownIconWrapper>
                    <ChevronDownIcon />
                </ChevronDownIconWrapper>
            )}
            <Tag
                tabIndex={0}
                onClick={handleTitleClick}
                fullTextVisible={fullTextVisible}
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
    visibility: hidden;

    &:hover {
        cursor: pointer;
        background-color: ${COLORS.backgroundHover};
    }
`;

const Wrapper = styled.div`
    max-width: 100%;
    display: flex;
    gap: 5px;
    align-items: flex-start;

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
