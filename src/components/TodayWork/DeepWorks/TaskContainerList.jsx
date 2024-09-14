import React from "react";
import { TasksContext } from "../../Providers/TasksProvider";
import styled from "styled-components";
import TaskContainer from "./TaskContainer/TaskContainer";

function TaskContainerList() {
    const { tasks } = React.useContext(TasksContext);

    return (
        <Wrapper>
            {tasks.map((task) => (
                <TaskContainer key={task.id} task={task}></TaskContainer>
            ))}
        </Wrapper>
    );
}

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`;

export default TaskContainerList;
