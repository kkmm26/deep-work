import React from "react";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import PlusButton from "../Buttons/PlusButton";
import CrossButton from "../Buttons/CrossButton.jsx"
import styled from "styled-components";
import { SUB_TASKS_ADDABLE } from "../../constants.js";

function SubTasksGroup() {
    const [subTaskInputs, setSubTaskInputs] = React.useState([{id: crypto.randomUUID()}]);

    function addSubTaskInput(e) {
        e.preventDefault();
        if (subTaskInputs.length >= SUB_TASKS_ADDABLE) {
            return;
        }
        setSubTaskInputs([...subTaskInputs, {id: crypto.randomUUID()}]);
    }
    function deleteSubTaskInput(idToDel) {
        setSubTaskInputs(subTaskInputs.filter((task) => task.id !== idToDel));
    }

    return (
        <Wrapper>
            {subTaskInputs.map((task) => {
                return (
                    <SubTaskInputWrapper  key={task.id}>
                        <VisuallyHidden>
                            <label htmlFor="sub-task">Sub Task</label>
                        </VisuallyHidden>
                        <input
                            type="text"
                            placeholder="Sub Task"
                            name="sub-task"
                        />
                        <CrossButton
                            variant= "Sub Task"
                            onClick={() => deleteSubTaskInput(task.id)}
                            />
                    </SubTaskInputWrapper>
                );
            })}

            {subTaskInputs.length < SUB_TASKS_ADDABLE &&
                subTaskInputs.length > 0 && (
                    <PlusButton onClick={addSubTaskInput} variant="Sub Task Input" />
                )}
            {subTaskInputs.length >= SUB_TASKS_ADDABLE && (
                <SubTaskWarning>
                    "Cannot add more than {SUB_TASKS_ADDABLE} sub tasks."
                </SubTaskWarning>
            )}
            {subTaskInputs.length === 0 && (
                <PlusButton onClick={addSubTaskInput} variant="Sub Task">
                    Add a Sub Task
                </PlusButton>
            )}
        </Wrapper>
    );
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 8px;
    margin-top: 14px;

    width: 90%;
`;

const SubTaskInputWrapper = styled.div`
    position: relative;
`

const SubTaskWarning = styled.p`
    font-size: 0.7rem;
    opacity: 0.5;
`;



export default SubTasksGroup;
