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
    if (variant === "Sub Task") {
        return (
            <SubTaskPlusButton type="button" onClick={onClick}>
                <PlusIcon />
            </SubTaskPlusButton>
        );
    }
    if (variant === "Main Task") {
        return (
            <MainTaskPlusButton type="button" onClick={onClick}>
                <PlusIcon />
            </MainTaskPlusButton>
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
    background-color: ${COLORS.plusButton};
    border: none;
    font-size: 0.7rem;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
        cursor: pointer;
        background-color: ${COLORS.plusButtonHover};
    }
`;

const SubTaskPlusButton = styled(Button)`
`;

const SubTaskChildrenPlusButton = styled(SubTaskPlusButton)`
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

const MainTaskPlusButton = styled(Button)`
    align-self: center;
    width: 35px;
    height: 25px;
    visibility: hidden;
`

export default PlusButton;
