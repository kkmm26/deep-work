import React from "react";
import styled from "styled-components";
import { COLORS, MAIN_TASKS_ADDABLE, STYLES, SUBJECTS_ADDABLE } from "../../constants";
import CrossButton from "../Buttons/CrossButton";
import { getFromStorage, setInStorage } from "../../api/db/localStorage";
import { SHOW_POPUP } from "../../config";

const TYPES = {
    "Subject": {addable: SUBJECTS_ADDABLE, name: "subject"},
    "MainTask": {addable: MAIN_TASKS_ADDABLE, name: "main task"},
}

function PopUp({ closePopUp, type }) {
    const [dontShowAgain, setDontShowAgain] = React.useState(false);

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

    function handleOkayButtonClicked() {
        let newConfig = Object.values(getFromStorage("showPopUp")).length ? getFromStorage("showPopUp") : SHOW_POPUP
        console.log(newConfig);
        if (type === "Subject") {
            newConfig.onSubjectLimit = !dontShowAgain
            setInStorage("showPopUp", newConfig)
        }
        if (type === "MainTask") {
            newConfig.onMainTaskLimit = !dontShowAgain
            setInStorage("showPopUp", newConfig)
        }
        console.log(type, newConfig);
        // localStorage.setItem("showPopUp", !dontShowAgain); 
        // inverse is stored cuz isShowPopUp will be called to open pop up again
        closePopUp();
    }

    function handleCheckBoxChange() {
        setDontShowAgain((prev) => !prev);
    }

    return (
        <Overlay>
            <Card>
                <Message>
                    {TYPES[type].addable} tasks is your max for "{TYPES[type].name}" now. Move to{" "}
                    <PlannerLink href="">the planner</PlannerLink>, if not
                    urgent yet. Or let’s just try to finish a few tasks!
                </Message>
                <CheckBoxLabel>
                    <CheckBox
                        type="checkbox"
                        id="show-again"
                        checked={dontShowAgain}
                        onChange={handleCheckBoxChange}
                    ></CheckBox>
                    Don’t interfere me again!
                </CheckBoxLabel>
                <ButtonGroup>
                    <OkayButton onClick={handleOkayButtonClicked}>
                        Alright!
                    </OkayButton>
                    <ConfigureButton>Configure tasks limit</ConfigureButton>
                </ButtonGroup>
                <CrossButton
                    onClick={closePopUp}
                    variant="Pop Up"
                ></CrossButton>
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
    isolation: isolate;
    z-index: 10;
`;

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
