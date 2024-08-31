import styled from "styled-components";
import React from "react";
import { COLORS, MAIN_TASKS_ADDABLE, STYLES } from "../../constants";
import CrossButton from "../Buttons/CrossButton";

function PopUp({ closePopUp }) {
    const popUpRef = React.useRef()

    React.useEffect(() => {
        function handleKeydown(e) {
            if (e.key === "Escape") {
                closePopUp();
            }
        }


        window.addEventListener("keydown", handleKeydown);

        return () => {
            window.removeEventListener("keydown", handleKeydown);
        };
    }, [closePopUp]);

    return (
        <Overlay>
        
        <Card ref={popUpRef}>
            <Message>
                {MAIN_TASKS_ADDABLE} tasks is your max for now. Move to{" "}
                <PlannerLink href="">the planner</PlannerLink>, if not urgent
                yet. Or let’s just try to finish a few tasks!
            </Message>
            <CheckBoxLabel>
                <CheckBox type="checkbox"></CheckBox>
                Don’t interfere me again!
            </CheckBoxLabel>
            <ButtonGroup>
                <OkayButton onClick={closePopUp}>Alright!</OkayButton>
                <ConfigureButton>Configure tasks limit</ConfigureButton>
            </ButtonGroup>
            <CrossButton onClick={closePopUp} variant="Pop Up"></CrossButton>
        </Card>
        </Overlay>
    );
}
const Overlay = styled.div`
    background-color: ${COLORS.overlay};
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
`

const Card = styled.article`
    background-color: ${COLORS.background};
    box-shadow: ${STYLES.boxShadow4};
    position: absolute;
    top: 30%;
    left: 50%;
    transform: translateX(-50%);
    max-width: 300px;
    padding: 20px;
    border-radius: 6px;
`;
const Message = styled.p`
    font-size: 1.1rem;
`;
const PlannerLink = styled.a`
    color: ${COLORS.linkColor};
`;

const CheckBox = styled.input`
    width: initial;
    margin-right: 10px;
`;

const CheckBoxLabel = styled.label`
    display: block;
    font-size: 0.9rem;

    margin-top: 15px;
`;

const ButtonGroup = styled.div`
    display: flex;
    justify-content: space-between;

    margin-top: 15px;
`;

const OkayButton = styled.button`
    cursor: pointer;
    border: none;
    background-color: ${COLORS.buttonPrimary};
    color: ${COLORS.white};
    padding: 4px 10px;
    border-radius: 3px;
`;

const ConfigureButton = styled.button`
    cursor: pointer;
    border: none;
    background-color: ${COLORS.buttonSecondary};
    padding: 4px 10px;
    border-radius: 3px;
`;

export default PopUp;
