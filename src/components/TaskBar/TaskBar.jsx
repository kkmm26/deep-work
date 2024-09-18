import React, { useState, useRef } from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";

import { ChevronDownIcon } from "@radix-ui/react-icons";
import { COLORS } from "../../constants.js";
import DescriptionIcon from "./DescriptionIcon.jsx";
import PlusButton from "../Buttons/PlusButton.jsx";
import useEditableTitle from "../../hooks/useEditableTitle.jsx";
import Slider from "./Slider.jsx";
import Toast from "../Toast/Toast.jsx";

const Title = styled.h3`
    position: relative;
    cursor: pointer;
    padding: 8px;
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
    word-wrap: break-word;
    ${({ fullTextVisible }) =>
        fullTextVisible &&
        css`
            display: block;
            overflow: visible;
        `}
`;

const MainTaskTitle = styled(Title)`
    width: 100%;
    background-color: ${COLORS.mainTaskBackground};
    padding: 8px;
    padding-left: 20px;
    border-radius: 3px;
`;

const SubTaskTitle = styled(Title)`
    width: 100%;
    background-color: ${COLORS.background};
    padding: 5px;
    padding-left: 20px;
    border-radius: 2px;
`;

const titleComponents = {
    Subject: SubjectTitle,
    "Main Task": MainTaskTitle,
    "Sub Task": SubTaskTitle,
};

function TaskBar({
    children,
    hasDesc,
    className,
    variant,
    onPlusBtnClicked,
    onChevronBtnClicked,
    createToast,
    completeTask
}) {
    const Tag = titleComponents[variant];
    const editTaskTitle = useEditableTitle();
    const [fullTextVisible, setFullTextVisible] = useState(false);
    const [isChevronRotated, setIsChevronRotated] = useState(false);
    const titleRef = React.useRef();

    function handleTitleClick() {
        setFullTextVisible((prev) => !prev);
    }

    function handleChevronClicked(e) {
        e.preventDefault();
        setIsChevronRotated((prev) => !prev);
        typeof onChevronBtnClicked === "function" && onChevronBtnClicked();
    }

    function onTaskComplete(){
        createToast()
        completeTask()
    }


    return (
        <Wrapper className={className}>
            {variant !== "Sub Task" && (
                <ChevronDownIconWrapper
                    onClick={handleChevronClicked}
                    isRotated={isChevronRotated}
                >
                    <ChevronDownIcon />
                </ChevronDownIconWrapper>
            )}
            <Tag
                ref={titleRef}
                tabIndex={0}
                onClick={handleTitleClick}
                fullTextVisible={fullTextVisible}
                onDoubleClick={(e) => {
                    setFullTextVisible(true);
                    editTaskTitle(e);
                }}
            >
                {children}
                <StyledSlider
                    titleRef={titleRef}
                    onTaskComplete={onTaskComplete}
                ></StyledSlider>
            </Tag>
            {hasDesc && <DescriptionIcon />}
            {variant !== "Sub Task" && (
                <PlusButton onClick={onPlusBtnClicked} variant="Task Bar" />
            )}
            
        </Wrapper>
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

const StyledSlider = styled(Slider)``;


const Wrapper = styled.div`
    max-width: 100%;
    display: flex;
    gap: 5px;
    align-items: flex-start;

    &:hover button,
    &:hover ${ChevronDownIconWrapper}, &:hover ${StyledSlider} {
        visibility: visible;
    }
`;

TaskBar.propTypes = {
    children: PropTypes.node,
    hasDesc: PropTypes.bool,
    className: PropTypes.string,
    variant: PropTypes.oneOf(["Subject", "Main Task", "Sub Task"]),
    onPlusBtnClicked: PropTypes.func,
    onChevronBtnClicked: PropTypes.func,
    createToast: PropTypes.func,
    completeTask: PropTypes.func
};

export default TaskBar;
