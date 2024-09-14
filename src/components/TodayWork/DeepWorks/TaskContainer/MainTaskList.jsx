import styled, { css } from "styled-components";
import MainTask from "./MainTask";
import React from "react";
import { ToastsContext } from "../ToastsProvider";
import { TasksContext } from "../../../Providers/TasksProvider";

function MainTaskList({ mainTasks, addMainTask, isShowMainTasks }) {
    const { createToast } = React.useContext(ToastsContext);

    return (
        <Wrapper isShowMainTasks={isShowMainTasks}>
            {mainTasks.map(({ task, id }) => {
                return (
                    <MainTask key={id} onPlusBtnClicked={addMainTask} createToast={()=>createToast(task)}>
                        {task}
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


