import styled from "styled-components";
import TaskBar from "../../TaskBar/TaskBar";
import { SUB_TASKS_ADDABLE } from "../../../constants";

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
            {subTasks.length >= SUB_TASKS_ADDABLE && (
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
    gap: 5px;
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


export default SubTask;
