/* eslint-disable react/prop-types */
import React from "react";
import styled, { css } from "styled-components";
import TaskBar from "../../../TaskBar/TaskBar";
import { SUB_TASKS_ADDABLE } from "../../../../constants";
import { ToastsContext } from "../ToastsProvider";
import { TasksContext } from "../../../Providers/TasksProvider";

function SubTaskList({ subTaskIds, isShowSubTasks, isSubTasksLimitReached, mainTaskId }) {
    const { createToast } = React.useContext(ToastsContext);
    const {tasks, completeSubTask, updateTask} = React.useContext(TasksContext)
    return (
        <Wrapper isShowSubTasks={isShowSubTasks}>
            {subTaskIds.map((id) => {
                const subTask = tasks.subTasks[id]
                
                return (
                    <SubTaskBar
                        key={subTask.id}
                        variant="Sub Task"
                        createToast={() => createToast(subTask.task)}
                        completeTask={() => completeSubTask(mainTaskId, id)}
                        currentTask={subTask.task}
                        currentTaskId={subTask.id}
                        updateTask={updateTask}
                    >
                        {subTask.task}
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
    padding: 2px 40px 2px 2px;  // 2px is room for outline on task focus
    display: flex;
    flex-direction: column;
    gap: 3px;
    opacity: 1;
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
