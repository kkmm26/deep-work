import React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import { COLORS } from "../../constants.js";
import DescriptionIcon from "./DescriptionIcon.jsx";
import PlusButton from "../Buttons/PlusButton.jsx";
import useEditableTitle from "../../hooks/useEditableTitle.jsx";
import Slider from "./Slider.jsx";
import { getCurrentTask } from "../../helpers.js";

const Title = styled.h3`
    position: relative;
    cursor: pointer;
    padding: 8px;
    font: inherit;
    &:focus {
        outline: 2px solid ${COLORS.taskFocusOutline};
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
    "Subject": SubjectTitle,
    "Main Task": MainTaskTitle,
    "Sub Task": SubTaskTitle,
};

function TaskBar({
    task,
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
    updateTask
}) {
    const Tag = titleComponents[variant];
    // const editTaskTitle = useEditableTitle();
    const [isEditMode, setIsEditMode] = React.useState(false);
    const [fullTextVisible, setFullTextVisible] = React.useState(false);
    const [isChevronRotated, setIsChevronRotated] = React.useState(false);
    const [currentTask, setCurrentTask] = React.useState(getCurrentTask(variant, currentTaskId));

    const titleRef = React.useRef();
    const taskInputRef = React.useRef();

    const handleTitleClick = () => setFullTextVisible((prev) => !prev);
    const handleTitleDblClick = (e) => {
        setIsEditMode(true);
        setFullTextVisible(true);
        taskInputRef.current.focus();
        // editTaskTitle(e);
    };
    React.useEffect(() => {
        if (isEditMode && taskInputRef.current) {
            taskInputRef.current.focus();
        }
    }, [isEditMode]);

    const handleChevronClicked = (e) => {
        e.preventDefault();
        setIsChevronRotated((prev) => !prev);
        if (typeof onChevronBtnClicked === "function") {
            onChevronBtnClicked();
        }
    };

    const onTaskComplete = () => {
        createToast();
        completeTask();
    };

    function handleBlur() {
        setIsEditMode(false);
        updateTask(currentTaskId, currentTask, variant)
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
                    onChange={(e)=>{setCurrentTask(e.target.value)}}
                    onBlur={handleBlur}
                />
            </Tag>
            {hasDesc && <DescriptionIcon description={description} />}
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
    updateTask: PropTypes.func
};

export default TaskBar;
