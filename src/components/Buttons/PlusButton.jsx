import styled from "styled-components";
import { COLORS } from "../../constants.js";
import { PlusIcon } from "@radix-ui/react-icons";

function PlusButton({ onClick, variant, children }) {
    function defaultClick(e) {
        e.preventDefault();
    }
    if (!onClick) {
        onClick = defaultClick;
    }
    if (variant === "Sub Task" && children) {
        return (
            <SubTaskChildrenPlusButton type="button" onClick={onClick}>
                {children}
                <PlusIcon />
            </SubTaskChildrenPlusButton>
        );
    }
    if (variant === "Work Type") {
        return (
            <WorkTypePlusButton  type="button" onClick={onClick}>
                <PlusIcon />
            </WorkTypePlusButton>
        );
    }
    if (variant === "Sub Task Input") {
        return (
            <SubTaskInputPlusButton type="button" onClick={onClick}>
                <PlusIcon />
            </SubTaskInputPlusButton>
        );
    }
    if (variant === "Task Bar") {
        return (
            <TaskBarPlusButton type="button" onClick={onClick}>
                <PlusIcon />
            </TaskBarPlusButton>
        );
    }
    

    return (
        <Button  type="button" onClick={onClick}>
            <PlusIcon />
        </Button>
    );
}

const Button = styled.button`
    width: 60px;
    height: 20px;
    border-radius: 3px;
    background-color: ${COLORS.background};
    border: none;
    font-size: 0.7rem;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
        cursor: pointer;
        background-color: ${COLORS.backgroundHover};
    }
`;

const SubTaskInputPlusButton = styled(Button)`
`;

const SubTaskChildrenPlusButton = styled(Button)`
    width: fit-content;
    padding: 12px 10px;
    display: flex;
    gap: 8px;
`;

const WorkTypePlusButton = styled(Button)`
    position: absolute;
    bottom: -30px;
    width: 60px;
    height: 25px;
    margin: 0 auto;
    visibility: hidden;
    opacity: 0;
    transition: visibility 0s, opacity 0.3s ease-in-out;
`;

const TaskBarPlusButton = styled(Button)`
    min-width: 35px;
    max-width: 35px;
    height: 25px;
    visibility: hidden;
`

export default PlusButton;
