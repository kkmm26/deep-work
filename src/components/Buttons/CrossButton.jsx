import styled from "styled-components";
import { Cross1Icon } from "@radix-ui/react-icons";

function CrossButton({ onClick, variant }) {
    function defaultClick(e) {
        e.preventDefault();
    }
    if (!onClick) {
        onClick = defaultClick;
    }

    if (variant === "Task Form") {
        return (
            <TaskEntryFormCrossButton onClick={onClick}>
                <Cross1Icon />
            </TaskEntryFormCrossButton>
        );
    }
    if (variant === "Sub Task") {
        return (
            <SubTaskCrossButton onClick={onClick}>
                <Cross1Icon style={{ width: "80%" }} />
            </SubTaskCrossButton>
        );
    }

    return (
        <Button type="button" onClick={onClick}>
            <Cross1Icon />
        </Button>
    );
}

const Button = styled.button`
    cursor: pointer;
    border: none;
    background: none;
`;

const TaskEntryFormCrossButton = styled(Button)`
    position: absolute;
    right: 0;
    top: 6px;
`;

const SubTaskCrossButton = styled(Button)`
    position: absolute;
    right: 0;
    padding: 5px;
    top: 50%;
    transform: translateY(-50%);
`;

export default CrossButton;
