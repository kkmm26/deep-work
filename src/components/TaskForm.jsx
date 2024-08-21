import * as Form from "@radix-ui/react-form";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";

import { styled, keyframes } from "@stitches/react";
import React from "react";
import { COLORS, STYLES } from "../constants.js";
import PlusButton from "./PlusButton";
import SubTaskCrossButton from "./SubTaskCrossButton.jsx";
import { SubTaskContext } from "./SubTaskProvider.jsx";

function TaskForm({}, ref) {

    const {subTasks, addSubTask, deleteSubTask} = React.useContext(SubTaskContext)

    return (
        <FormRoot ref={ref}>
            <Form.Field name="mainTask">
                <VisuallyHidden.Root>
                    <Form.Label>Main Task</Form.Label>
                </VisuallyHidden.Root>
                <Form.Message match="valueMissing">
                    Please write at least one task before creating
                </Form.Message>
                <Form.Control
                    style={{ height: "34px", maxWidth: "100%" }}
                    asChild
                >
                    <input type="text" required placeholder="Main Task" />
                </Form.Control>
            </Form.Field>

            <SubTaskField name="subTask">
                {subTasks.length === 0 && <p style={{textAlign: "start"}}>Add a Sub Task</p>}
                {subTasks.map((_, index) => {
                    return (
                        <div key={index} style={{ position: "relative" }}>
                            <VisuallyHidden.Root>
                                <Form.Label>Sub Task</Form.Label>
                            </VisuallyHidden.Root>
                            {
                                <SubTaskCrossButton
                                    onClick={(e) => deleteSubTask(e, index)}
                                    style={{ position: "absolute" }}
                                />
                            }
                            <Form.Control
                                style={{ height: "26px", width: "100%" }}
                                asChild
                            >
                                <input type="text" placeholder="Sub Task" />
                            </Form.Control>
                        </div>
                    );
                })}

                <div
                    style={{
                        width: "100%",
                        minHeight: "20px",
                        position: "relative",
                    }}
                >
                    <PlusButton onClick={addSubTask} type="Sub Task" />
                </div>
            </SubTaskField>
            <Form.Field name="description">
                <VisuallyHidden.Root>
                    <Form.Label>Main Task</Form.Label>
                </VisuallyHidden.Root>
                <Form.Control
                    style={{ resize: "none", height: "50px", maxWidth: "100%" }}
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
    top: "30%",
    left: "50%",
    transform: "translateX(-50%)",
    boxShadow: `${STYLES.boxShadow}`,
    borderRadius: "5px",
    padding: "25px",
    display: "flex",
    flexDirection: "column",
    alignItems: "end",
    gap: "10px",
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
});

export default React.forwardRef(TaskForm);
