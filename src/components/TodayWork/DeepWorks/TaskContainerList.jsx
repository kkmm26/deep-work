import React from "react";
import { TasksContext } from "../../Providers/TasksProvider";
import styled from "styled-components";
import TaskContainer from "./TaskContainer/TaskContainer";

function TaskContainerList() {
    const { tasks } = React.useContext(TasksContext);

    return (
        <Wrapper>
            {Object.values(tasks.subjects).map((subjectObj) => (
                <TaskContainer
                    key={subjectObj.id}
                    mainTaskIds={subjectObj.mainTaskIds}
                    subjectObj={subjectObj}
                ></TaskContainer>
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
