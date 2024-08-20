import * as Form from "@radix-ui/react-form";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";

import { styled, keyframes } from "@stitches/react";
import { blackA, violet, mauve } from "@radix-ui/colors";
import React from "react";
import { STYLES } from "../constants.js";
import PlusButton from "./PlusButton";

function TaskForm({}, ref) {
    return (
        <FormRoot ref={ref} className="FormRoot">
            <Form.Field className="FormField" name="mainTask">
                <VisuallyHidden.Root>
                    <Form.Label className="FormLabel">Main Task</Form.Label>
                </VisuallyHidden.Root>
                <Form.Message className="FormMessage" match="valueMissing">
                    Please write at least one task before creating
                </Form.Message>
                <Form.Control
                    style={{ height: "34px", maxWidth: "100%" }}
                    asChild
                >
                    <input
                        className="Input"
                        type="text"
                        required
                        placeholder="Main Task"
                    />
                </Form.Control>
            </Form.Field>

            <Form.Field
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "end",
                    gap: "5px",
                }}
                className="FormField"
                name="subTask"
            >
                <VisuallyHidden.Root>
                    <Form.Label className="FormLabel">Sub Task</Form.Label>
                </VisuallyHidden.Root>
                <Form.Control
                    style={{ height: "26px", maxWidth: "80%" }}
                    asChild
                >
                    <input type="text" placeholder="Sub Task" />
                </Form.Control>
                <div
                    style={{
                        width: "80%",
                        minHeight: "20px",
                        position: "relative",
                    }}
                >
                    <PlusButton type="Sub Task" />
                </div>
            </Form.Field>
            <Form.Field className="FormField" name="mainTask">
                <VisuallyHidden.Root>
                    <Form.Label className="FormLabel">Main Task</Form.Label>
                </VisuallyHidden.Root>
                <Form.Message className="FormMessage" match="valueMissing">
                    Please write at least one task before creating
                </Form.Message>
                <Form.Control
                    style={{ resize: "none", height: "80px", maxWidth: "100%" }}
                    asChild
                >
                    <textarea type="text" placeholder="Task Description" />
                </Form.Control>
            </Form.Field>
            <div style={{ display: "flex", justifyContent: "end" }}>
                <Form.Submit asChild>
                    <button
                        style={{
                            marginTop: 10,
                            width: "50%",
                            border: "none",
                            borderRadius: "3px",
                            cursor: "pointer",
                        }}
                    >
                        Create
                    </button>
                </Form.Submit>
            </div>
        </FormRoot>
    );
}

const FormRoot = styled(Form.Root, {
    minWidth: 260,
    // visibility: "hidden",
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
    gap: "10px",
});

export default React.forwardRef(TaskForm);
