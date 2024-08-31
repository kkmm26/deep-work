import React from "react";
import styled, { css } from "styled-components";
import TaskBar from "../../TaskBar/TaskBar";
import { SUB_TASKS_ADDABLE } from "../../../constants";

function SubTaskList({ subTasks, isShowSubTasks, isSubTasksLimitReached }) {
    return (
        <Wrapper isShowSubTasks={isShowSubTasks}>
            {subTasks.map((task, index) => {
                return (
                    <SubTaskBar key={index} variant="Sub Task">
                        {task}
                    </SubTaskBar>
                );
            })}
            {isSubTasksLimitReached && (
                <SubTaskWarning>
                    Whoa, that's a lot of tasks! You've maxed out your{" "}
                    {SUB_TASKS_ADDABLE} sub-tasks. Time to check some off before
                    adding more.{" "}
                </SubTaskWarning>
            )}
        </Wrapper>
    );
}
const Wrapper = styled.div`
    max-width: 85%;
    width: 100%;
    align-self: flex-end;
    padding-left: 0px;
    padding-right: 40px;
    display: flex;
    flex-direction: column;
    gap: 3px;
    opacity: 1;
    transform: translateY(0);
    overflow: hidden;
    height: auto;

    ${(p) =>
        !p.isShowSubTasks &&
        css`
            opacity: 0;
            height: 0;
        `}
`;

const SubTaskBar = styled(TaskBar)`
    font-size: 0.9rem;
    font-weight: 400;
`;

const SubTaskWarning = styled.p`
    align-self: flex-start;
    padding: 5px 15px;
    font-size: 0.8rem;
    opacity: 0.8;
`;


export default SubTaskList;
