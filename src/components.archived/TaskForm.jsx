import * as Form from "@radix-ui/react-form";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";

import { styled, keyframes } from "@stitches/react";
import React from "react";
import { COLORS, STYLES, SUB_TASKS_ADDABLE } from "../constants.js";
import PlusButton from "../components/Buttons/PlusButton.jsx";
import { SubTaskContext } from "../components/Providers/SubTaskInputProvider.jsx";

function TaskForm({ closeForm, isFormOpen }) {
    const { subTaskInputs, addSubTaskInput, deleteSubTaskInput } =
        React.useContext(SubTaskContext);
    const taskFormRef = React.useRef();
    console.log("rendered");

    React.useEffect(() => {
        function handleMouseDown(e) {
            if (!taskFormRef.current.contains(e.target)) {
                closeForm(e);
            }
        }

        function handleKeyDown(e) {
            if(e.key === "Escape") {
                closeForm(e)
            }
        }

        window.addEventListener("mousedown", handleMouseDown);
        window.addEventListener("keydown", handleKeyDown);
        return () => {
            window.removeEventListener("mousedown", handleMouseDown);
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [isFormOpen]);

    return (
        <FormRoot ref={taskFormRef}>
            <CloseButton onClick={closeForm} />
            <Form.Field style={{ width: "100%" }} name="mainTask">
                <VisuallyHidden.Root>
                    <Form.Label>Main Task</Form.Label>
                </VisuallyHidden.Root>
                <Form.Message
                    style={{ fontSize: "0.7rem", color: `${COLORS.error}` }}
                    match="valueMissing"
                >
                    Please write at least one task
                </Form.Message>
                <Form.Control
                    style={{ height: "34px", maxWidth: "100%", paddingLeft: "5px" }}
                    asChild
                >
                    <input
                        style={{ width: "100%" }}
                        type="text"
                        required
                        placeholder="Main Task"
                    />
                </Form.Control>
            </Form.Field>

            <SubTaskField name="subTask">
                {subTaskInputs.map((_, index) => {
                    return (
                        <div key={index} style={{ position: "relative" }}>
                            <VisuallyHidden.Root>
                                <Form.Label>Sub Task</Form.Label>
                            </VisuallyHidden.Root>
                            {
                                <SubTaskCrossButton
                                    onClick={(e) =>
                                        deleteSubTaskInput(e, index)
                                    }
                                    style={{ position: "absolute" }}
                                />
                            }
                            <Form.Control
                                style={{ height: "26px", width: "100%", paddingLeft: "5px" }}
                                asChild
                            >
                                <input type="text" placeholder="Sub Task" />
                            </Form.Control>
                        </div>
                    );
                })}

                {subTaskInputs.length > 0 &&
                    subTaskInputs.length < SUB_TASKS_ADDABLE && (
                        <div
                            style={{
                                width: "100%",
                                minHeight: "20px",
                                position: "relative",
                            }}
                        >
                            <PlusButton
                                onClick={addSubTaskInput}
                                variant="Sub Task"
                            />
                        </div>
                    )}
                {subTaskInputs.length === 0 && (
                    <div
                        style={{
                            width: "100%",
                            minHeight: "20px",
                            position: "relative",
                        }}
                    >
                        <PlusButton onClick={addSubTaskInput} variant="Sub Task">
                            Add a Sub Task
                        </PlusButton>
                    </div>
                )}
                {subTaskInputs.length === SUB_TASKS_ADDABLE && (
                    <div
                        style={{
                            fontSize: "0.6rem",
                            color: `${COLORS.inactiveBlack}`,
                        }}
                    >
                        <p>
                            "Cannot add more than {SUB_TASKS_ADDABLE} sub
                            tasks."
                        </p>
                    </div>
                )}
            </SubTaskField>
            <Form.Field
                style={{ width: "100%", marginTop: "5px" }}
                name="description"
            >
                <VisuallyHidden.Root>
                    <Form.Label>Main Task</Form.Label>
                </VisuallyHidden.Root>
                <Form.Control
                    style={{
                        resize: "none",
                        height: "50px",
                        maxWidth: "100%",
                        width: "100%",
                        paddingLeft: "5px"
                    }}
                    asChild
                >
                    <textarea type="text" placeholder="Task Description" />
                </Form.Control>
            </Form.Field>
            <div style={{ display: "flex", justifyContent: "end" }}>
                <FormSubmit asChild>
                    <button>Create</button>
                </FormSubmit>
            </div>
        </FormRoot>
    );
}

const FormRoot = styled(Form.Root, {
    minWidth: 260,
    maxWidth: "min-content", // prevent width from expanding when form submit error message shows
    position: "absolute",
    zIndex: 1,
    top: "140px",
    left: "50%",
    transform: "translateX(-50%)",
    boxShadow: `${STYLES.boxShadow2}`,
    borderRadius: "5px",
    padding: "25px",
    paddingTop: "35px",
    display: "flex",
    flexDirection: "column",
    alignItems: "end",
    gap: "10px",
    backgroundColor: `${COLORS.white}`,
});

const FormSubmit = styled(Form.Submit, {
    marginTop: 10,
    fontSize: "0.8rem",
    border: "none",
    padding: "5px 12px",
    borderRadius: "3px",
    cursor: "pointer",
    color: `${COLORS.white}`,
    backgroundColor: `${COLORS.black}`,

    "&:hover": {
        backgroundColor: `${COLORS.hoverBlack}`,
    },
});

const SubTaskField = styled(Form.Field, {
    display: "flex",
    flexDirection: "column",
    gap: "5px",
    width: "90%",
    position: "relative",
});

export default React.forwardRef(TaskForm);
