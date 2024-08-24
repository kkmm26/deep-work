import React from "react";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import PlusButton from "../Buttons/PlusButton";
import CrossButton from "../Buttons/CrossButton.jsx"
import styled from "styled-components";
import { SUB_TASKS_ADDABLE } from "../../constants.js";

function SubTasksGroup() {
    const id = React.useId();
    const [subTaskInputs, setSubTaskInputs] = React.useState([0]);

    function addSubTaskInput(e) {
        e.preventDefault();
        if (subTaskInputs.length >= SUB_TASKS_ADDABLE) {
            return;
        }
        setSubTaskInputs([...subTaskInputs, 0]);
    }
    function deleteSubTaskInput(e, index) {
        e.preventDefault();
        setSubTaskInputs(subTaskInputs.filter((_, i) => i !== index));
    }

    return (
        <Wrapper>
            {subTaskInputs.map((_, index) => {
                return (
                    <SubTaskInputWrapper  key={index}>
                        <VisuallyHidden>
                            <label htmlFor="sub-task">Sub Task</label>
                        </VisuallyHidden>
                        <input
                            type="text"
                            placeholder="Sub Task"
                            id={id}
                            name="sub-task"
                        />
                        <CrossButton
                            variant= "Sub Task"
                            onClick={(e) => deleteSubTaskInput(e, index)}
                            />
                    </SubTaskInputWrapper>
                );
            })}

            {subTaskInputs.length < SUB_TASKS_ADDABLE &&
                subTaskInputs.length > 0 && (
                    <PlusButton onClick={addSubTaskInput} type="Sub Task" />
                )}
            {subTaskInputs.length >= SUB_TASKS_ADDABLE && (
                <SubTaskWarning>
                    "Cannot add more than {SUB_TASKS_ADDABLE} sub tasks."
                </SubTaskWarning>
            )}
            {subTaskInputs.length === 0 && (
                <PlusButton onClick={addSubTaskInput} type="Sub Task">
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
