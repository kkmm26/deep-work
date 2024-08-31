import styled, { css } from "styled-components";
import MainTask from "./MainTask";

function MainTaskList({ mainTasks, addMainTask, isShowMainTasks }) {
    return (
        <Wrapper isShowMainTasks={isShowMainTasks}>
            {mainTasks.map(({ task, id }) => {
                return (
                    <MainTask key={id} onPlusBtnClicked={addMainTask}>
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


