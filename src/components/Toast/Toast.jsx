import styled from "styled-components";
import CrossButton from "../Buttons/CrossButton.jsx";
import { COLORS } from "../../constants.js";

function Toast({ task, destroyToast }) {
    return (
        <ToastCard>
            <CrossButton onClick={destroyToast} variant="Toast"></CrossButton>
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
    width: fit-content;
    padding: 12px 20px;

    background-color: ${COLORS.background};
    border-radius: 6px;
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
