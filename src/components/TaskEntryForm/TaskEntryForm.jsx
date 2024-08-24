import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import styled from "styled-components";
import { COLORS, STYLES } from "../../constants";
import SubTasksGroup from "./SubTasksGroup";
import CrossButton from "../Buttons/CrossButton";

function TaskEntryForm() {
    function handleSubmit(e) {
        e.preventDefault();
    }
    function closeForm(e) {}
    return (
        <>
            <Overlay>
                <Form onSubmit={handleSubmit}>
                    <CrossButton onClick={closeForm} variant="Task Form" />

                    <VisuallyHidden>
                        <label htmlFor="main-task">Main Task</label>
                    </VisuallyHidden>
                    <MainTaskInput
                        type="text"
                        placeholder="Main Task"
                        id="main-task"
                        name="main-task"
                    />
                    <SubTasksGroup />
                    <DescriptionTextArea placeholder="Description" />
                    <CreateButton>Create</CreateButton>
                </Form>
            </Overlay>
        </>
    );
}

const Form = styled.form`
    position: absolute;
    top: 150px;
    left: 50%;
    transform: translateX(-50%);
    max-width: 250px;
    box-shadow: ${STYLES.boxShadow2};
    border-radius: 3px;
    padding: 30px 20px 20px 20px;

    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 6px;
`;

const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    /* background-color: rgba(0, 0, 0, 0.1); */
`;

const MainTaskInput = styled.input`
    height: 32px;
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
    resize: none;
    padding-left: 6px;
`;

export default TaskEntryForm;
