import React from "react";
import styled from "styled-components";
import CrossButton from "../Buttons/CrossButton.jsx";
import { COLORS, STYLES } from "../../constants.js";
import useTimeout from "../../hooks/useTimeout.jsx";

function Toast({ id, task, destroyToast }) {
    useTimeout(() => destroyToast(id), 3000);

    return (
        <ToastCard>
            <CrossButton
                onClick={() => destroyToast(id)}
                variant="Toast"
            ></CrossButton>
            <Columns>
                <FirstColumn>
                    <span>Completed:</span>
                    <Spacer></Spacer>
                    <span>Duration:</span>
                </FirstColumn>
                <SecondColumn>
                    <span>{task}</span>
                    <Spacer></Spacer>
                    <span>2 days</span>
                </SecondColumn>
            </Columns>
        </ToastCard>
    );
}

const ToastCard = styled.li`
    list-style: none;
    position: relative;
    margin-top: 20px;
    width: 250px;
    padding: 12px 20px;

    background-color: ${COLORS.background};
    border-radius: 3px;
    box-shadow: ${STYLES.toastBoxShadow};
`;

const Columns = styled.div`
    display: flex;
    gap: 16px;
`;

const FirstColumn = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: end;
    & span {
        border-bottom: 1px solid ${COLORS.underlineColor};
    }
`;

const Spacer = styled.div`
    width: 100%;
    height: 10px;
`;

const SecondColumn = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
`;

export default Toast;
