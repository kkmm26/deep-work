import React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import DescriptionIcon from "./DescriptionIcon.jsx";
import PlusButton from "../Buttons/PlusButton.jsx";
import Slider from "./Slider.jsx";
import ChevronToggle from "./ChevronToggle.jsx";
import TaskTitle from "./TaskTitle.jsx";
import useTaskInput from "../../hooks/useTaskInput.jsx";

const ChevronToggleWrapper = styled(ChevronToggle)``;
const StyledSlider = styled(Slider)``;

const Wrapper = styled.div`
    max-width: 100%;
    display: flex;
    gap: 5px;
    align-items: flex-start;

    &:hover button,
    &:hover ${ChevronToggleWrapper}, &:hover ${StyledSlider} {
        visibility: visible;
    }
`;

function TaskBar({
    children,
    hasDesc,
    className,
    variant,
    onPlusBtnClicked,
    onChevronBtnClicked,
    description,
    createToast,
    completeTask,
    currentTaskId,
    updateTask,
}) {
    const [fullTextVisible, setFullTextVisible] = React.useState(false);
    const [isChevronRotated, setIsChevronRotated] = React.useState(false);

    const handleChevronClicked = (e) => {
        e.preventDefault();
        setIsChevronRotated((prev) => !prev);
        if (typeof onChevronBtnClicked === "function") {
            onChevronBtnClicked();
        }
    };

    const titleRef = React.useRef();
    const taskInputRef = React.useRef();

    const onTaskComplete = () => {
        createToast();
        completeTask();
    };

    const handleTitleClick = () => setFullTextVisible((prev) => !prev);
    const handleTitleDblClick = () => {
        handleInputClick();
    };

    const {
        currentTask,
        isEditMode,
        handleInputChange,
        handleInputClick,
        handleBlur,
    } = useTaskInput({
        taskInputRef,
        currentTaskId,
        updateTask,
        variant,
    });

    return (
        <Wrapper className={className}>
            {variant !== "Sub Task" && (
                <ChevronToggleWrapper
                    isRotated={isChevronRotated}
                    onClick={handleChevronClicked}
                />
            )}
            <TaskTitle
                ref={titleRef}
                variant={variant}
                onClick={handleTitleClick}
                fullTextVisible={fullTextVisible}
                onDoubleClick={(e) => {
                    handleTitleDblClick(e);
                }}
            >
                {children}
                <StyledSlider
                    titleRef={titleRef}
                    onTaskComplete={onTaskComplete}
                />
                <TaskInput
                    ref={taskInputRef}
                    isEditMode={isEditMode}
                    type="text"
                    value={currentTask}
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                />
            </TaskTitle>
            {hasDesc && <DescriptionIcon description={description} />}
            {variant !== "Sub Task" && (
                <PlusButton onClick={onPlusBtnClicked} variant="Task Bar" />
            )}
        </Wrapper>
    );
}

const TaskInput = styled.input`
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    visibility: hidden;
    z-index: -1;

    ${({ isEditMode }) =>
        isEditMode &&
        css`
            visibility: visible;
            z-index: 10;
        `}
`;

TaskBar.propTypes = {
    children: PropTypes.node.isRequired,
    task: PropTypes.string.isRequired,
    hasDesc: PropTypes.bool,
    className: PropTypes.string,
    variant: PropTypes.oneOf(["Subject", "Main Task", "Sub Task"]),
    onPlusBtnClicked: PropTypes.func,
    onChevronBtnClicked: PropTypes.func,
    createToast: PropTypes.func,
    completeTask: PropTypes.func,
    description: PropTypes.string,
    currentTaskId: PropTypes.string,
    currentTask: PropTypes.string,
    updateTask: PropTypes.func,
};

export default TaskBar;
