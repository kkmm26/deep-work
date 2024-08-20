import * as Form from "@radix-ui/react-form";
import { styled, keyframes } from "@stitches/react";
import { blackA, violet, mauve } from "@radix-ui/colors";
import React from "react";

function TaskForm({ showForm, hideForm }, ref) {


    return (
        <FormRoot ref={ref} onMouseEnter={showForm} onMouseLeave={hideForm}>
            <FormField name="email">
                <Flex
                    css={{
                        alignItems: "baseline",
                        justifyContent: "space-between",
                    }}
                >
                    <FormLabel>Email</FormLabel>
                    <FormMessage match="valueMissing">
                        Please enter your email
                    </FormMessage>
                    <FormMessage match="typeMismatch">
                        Please provide a valid email
                    </FormMessage>
                </Flex>
                <Form.Control asChild>
                    <Input type="email" required />
                </Form.Control>
            </FormField>
            <FormField name="question">
                <Flex
                    css={{
                        alignItems: "baseline",
                        justifyContent: "space-between",
                    }}
                >
                    <FormLabel>Question</FormLabel>
                    <FormMessage match="valueMissing">
                        Please enter a question
                    </FormMessage>
                </Flex>
                <Form.Control asChild>
                    <Textarea required />
                </Form.Control>
            </FormField>
            <Form.Submit asChild>
                <Button css={{ marginTop: 10 }}>Post question</Button>
            </Form.Submit>
        </FormRoot>
    );
}


const FormRoot = styled(Form.Root, {
    width: 260,
    visibility: "hidden",
    position: "absolute",
    zIndex: 1,
    top: 30,
    backgroundColor: "red",
    margin: "0 auto"
});

const FormField = styled(Form.Field, {
    display: "grid",
    marginBottom: 10,
});

const FormLabel = styled(Form.Label, {
    fontSize: 15,
    fontWeight: 500,
    lineHeight: "35px",
    color: "white",
});

const FormMessage = styled(Form.Message, {
    fontSize: 13,
    color: "white",
    opacity: 0.8,
});

const Flex = styled("div", { display: "flex" });

const inputStyles = {
    all: "unset",
    boxSizing: "border-box",
    width: "100%",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 4,

    fontSize: 15,
    color: "white",
    backgroundColor: blackA.blackA2,
    boxShadow: `0 0 0 1px ${blackA.blackA6}`,
    "&:hover": { boxShadow: `0 0 0 1px black` },
    "&:focus": { boxShadow: `0 0 0 2px black` },
    "&::selection": { backgroundColor: blackA.blackA6, color: "white" },
};

const Input = styled("input", {
    ...inputStyles,
    height: 35,
    lineHeight: 1,
    padding: "0 10px",
});

const Textarea = styled("textarea", {
    ...inputStyles,
    resize: "none",
    padding: 10,
});

const Button = styled("button", {
    all: "unset",
    boxSizing: "border-box",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 4,
    padding: "0 15px",
    fontSize: 15,
    lineHeight: 1,
    fontWeight: 500,
    height: 35,
    width: "100%",

    backgroundColor: "white",
    color: violet.violet11,
    boxShadow: `0 2px 10px ${blackA.blackA4}`,
    "&:hover": { backgroundColor: mauve.mauve3 },
    "&:focus": { boxShadow: `0 0 0 2px black` },
});


export default React.forwardRef(TaskForm);
