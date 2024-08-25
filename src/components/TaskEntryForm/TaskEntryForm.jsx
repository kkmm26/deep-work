import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import styled from "styled-components";
import { COLORS, STYLES } from "../../constants";
import SubTasksGroup from "./SubTasksGroup";
import CrossButton from "../Buttons/CrossButton";
import React from "react";

function TaskEntryForm({ closeForm }) {
    const [errors, setErrors] = React.useState({});
    const subjectInputRef = React.useRef();

    function handleSubmit(e) {
        e.preventDefault();
        let validationErrors = {};
        const formData = new FormData(e.target);

        const mainTask = formData.get("main-task");
        if (!mainTask) {
            validationErrors.subject = "Please write Subject/ Area!";
            validationErrors.mainTask = "Please write at lease one main task!";
            // e.target.children["main-task"].focus()
        }
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        }
    }

    React.useEffect(() => {
        subjectInputRef.current.focus();

        function handleKeydown(e) {
            if (e.key === "Escape") {
                closeForm(e);
            }
        }

        window.addEventListener("keydown", handleKeydown);

        return () => {
            window.removeEventListener("keydown", handleKeydown);
        };
    }, [closeForm]);

    return (
        <>
            <Overlay>
                <Form onSubmit={handleSubmit}>
                    <VisuallyHidden>
                        <label htmlFor="subject">Subject/ Area</label>
                    </VisuallyHidden>
                    <SubjectInput
                        ref={subjectInputRef}
                        type="text"
                        placeholder="Subject/ Area"
                        id="subject"
                        name="subject"
                        hasError={errors.subject}
                        required
                    />
                    <VisuallyHidden>
                        <label htmlFor="main-task">Main Task</label>
                    </VisuallyHidden>
                    <MainTaskInput
                        type="text"
                        placeholder="Main Task"
                        id="main-task"
                        name="main-task"
                        hasError={errors.mainTask}
                        required
                    />
                    {errors.mainTask && (
                        <ErrorMessage>{errors.mainTask}</ErrorMessage>
                    )}
                    <SubTasksGroup />
                    <DescriptionTextArea
                        placeholder="Description"
                        maxLength={120}
                    />
                    <CreateButton>Create</CreateButton>
                    <CrossButton onClick={closeForm} variant="Task Form" />
                </Form>
            </Overlay>
        </>
    );
}

const Form = styled.form`
    min-width: 300px;
    max-width: 250px;
    position: absolute;
    top: 150px;
    left: 50%;
    transform: translateX(-50%);
    box-shadow: ${STYLES.boxShadow2};
    border-radius: 3px;
    padding: 30px 30px 20px 30px;
    font-size: 0.9rem;

    display: flex;
    flex-direction: column;
    align-items: flex-end;

    &:focus {
        border-color: ${COLORS.black};
        outline: ${(props) =>
            props.hasError
                ? `2px solid ${COLORS.error}`
                : `2px solid ${COLORS.primary}`};
    }
`;

const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
`;

const SubjectInput = styled.input`
    height: 32px;
    border: ${(p) => p.hasError && "1px solid red"};
`;

const MainTaskInput = styled.input`
    height: 32px;
    border: ${(p) => p.hasError && "1px solid red"};
    margin-top: 18px;
`;

const CreateButton = styled.button`
    cursor: pointer;
    border: none;
    background-color: ${COLORS.black};
    color: ${COLORS.white};
    padding: 6px 10px;
    border-radius: 3px;
    margin-top: 10px;

    &:hover {
        background-color: ${COLORS.inactiveBlack};
    }
`;

const DescriptionTextArea = styled.textarea`
    font-size: 0.9rem;
    width: 100%;
    height: 70px;
    resize: none;
    padding-left: 6px;
    margin-top: 20px;
`;

const ErrorMessage = styled.p`
    color: ${COLORS.error};
    font-size: 0.8rem;
    margin-bottom: 5px;
`;

export default TaskEntryForm;
