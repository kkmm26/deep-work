import * as Form from "@radix-ui/react-form";
import { styled, keyframes } from "@stitches/react";
import { blackA, violet, mauve } from "@radix-ui/colors";
import React from "react";
import { STYLES } from "../constants";

function TaskForm({ }, ref) {


    return (
  <FormRoot ref={ref} className="FormRoot">
    <Form.Field className="FormField" name="email">
      <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
        <Form.Label className="FormLabel">Email</Form.Label>
        <Form.Message className="FormMessage" match="valueMissing">
          Please enter your email
        </Form.Message>
        <Form.Message className="FormMessage" match="typeMismatch">
          Please provide a valid email
        </Form.Message>
      </div>
      <Form.Control asChild>
        <input className="Input" type="email" required />
      </Form.Control>
    </Form.Field>
    <Form.Field className="FormField" name="question">
      <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
        <Form.Label className="FormLabel">Question</Form.Label>
        <Form.Message className="FormMessage" match="valueMissing">
          Please enter a question
        </Form.Message>
      </div>
      <Form.Control asChild>
        <textarea className="Textarea" required />
      </Form.Control>
    </Form.Field>
    <Form.Submit asChild>
      <button className="Button" style={{ marginTop: 10 }}>
        Post question
      </button>
    </Form.Submit>
  </FormRoot>
);


}


const FormRoot = styled(Form.Root, {
    maXwidth: 260,
    // visibility: "hidden",
    position: "absolute",
    zIndex: 1,
    top: "30%",
    left: "50%",
    transform: "translateX(-50%)",
    backgroundColor: "red",
    boxShadow: `${STYLES.boxShadow}`,
    borderRadius: "5px",
    padding: "25px",
    border: "10px solid deeppink",
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
