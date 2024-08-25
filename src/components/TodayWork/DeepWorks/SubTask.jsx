import styled from "styled-components";
import TaskBar from "./TaskBar";

function SubTask({ subTasks }) {
    return (
        <Wrapper>
            {subTasks.map((task, index) => {
                return (
                    <SubTaskBar key={index} variant="Sub Task">
                        {task}
                    </SubTaskBar>
                );
            })}
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
    gap: 5px;
`;

const SubTaskBar = styled(TaskBar)`
    font-size: 0.9rem;
    font-weight: 400;
`;

export default SubTask;
