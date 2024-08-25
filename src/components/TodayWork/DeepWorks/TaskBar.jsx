import React from "react";
import styled from "styled-components";

import { ChevronDownIcon } from "@radix-ui/react-icons";
import { COLORS } from "../../../constants.js";
import DescriptionIcon from "./DescriptionIcon.jsx";
import PlusButton from "../../Buttons/PlusButton.jsx";

function TaskBar({
    children,
    hasDesc,
    titleStyles,
    className,
    variant,
    onClick,
}) {


    let Tag;
    if (variant === "Main Task") {
        Tag = MainTaskTitle;
    } else if (variant === "Sub Task") {
        Tag = SubTaskTitle;
    } else {
        Tag = Title;
    }

   function editTaskTitle(e) {
       const titleElement = e.currentTarget;
       titleElement.setAttribute("contenteditable", "true");
       titleElement.focus();

       function handleKeydown(e) {
           if (e.key === "Escape" || e.key === "Enter") {
               titleElement.blur();
           }
       }

       function handleBlur() {
           titleElement.removeAttribute("contenteditable");

           window.getSelection().removeAllRanges();

           titleElement.removeEventListener("keydown", handleKeydown);
           titleElement.removeEventListener("blur", handleBlur);
       }

       titleElement.addEventListener("keydown", handleKeydown);
       titleElement.addEventListener("blur", handleBlur);
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


export default TaskBar;
