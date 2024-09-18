import styled, { css } from "styled-components";
import MainTask from "./MainTask";
import React from "react";
import { ToastsContext } from "../ToastsProvider";
import { TasksContext } from "../../../Providers/TasksProvider";

function MainTaskList({ mainTaskIds, addMainTask, isShowMainTasks, subjectId }) {
    const { createToast } = React.useContext(ToastsContext);
    const {tasks} = React.useContext(TasksContext)
    

    return (
        <Wrapper isShowMainTasks={isShowMainTasks}>
            {mainTaskIds.map((id) => {
                const mainTask = tasks.mainTasks[id]
                
                return (
                    <MainTask
                        key={mainTask.id}
                        createToast={() => createToast(mainTask.task)}
                        subTaskIds={mainTask.subTaskIds}
                        mainTaskId = {id}
                        subjectId={subjectId}
                    >
                        {mainTask.task}
                    </MainTask>
                );
            })}
        </Wrapper>
    );
}

const Wrapper = styled.div`
    height: auto;
    opacity: 1;
    display: flex;
    flex-direction: column;
    gap: 6px;

    ${(p) =>
        !p.isShowMainTasks &&
        css`
            opacity: 0;
            height: 0;
        `}
`;

export default MainTaskList;


