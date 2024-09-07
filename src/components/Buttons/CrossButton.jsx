import styled from "styled-components";
import { Cross1Icon } from "@radix-ui/react-icons";

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

const PopUpCrossButton = styled(TaskEntryFormCrossButton)``;

const ToastCrossButton = styled(TaskEntryFormCrossButton)``;

const VARIANTS = {
    "Task Form": TaskEntryFormCrossButton,
    "Sub Task": SubTaskCrossButton,
    "Pop Up": PopUpCrossButton,
    "Toast": ToastCrossButton
};

function CrossButton({ onClick, variant }) {

    const Tag = VARIANTS[variant];
    function handleClick(e){
        e.preventDefault()
        typeof onClick === "function" && onClick()
    }

    if (Tag) {
        return (
            <Tag onClick={handleClick}>
                <Cross1Icon />
            </Tag>
        );
    }

    return (
        <Button type="button" onClick={onClick}>
            <Cross1Icon />
        </Button>
    );
}


export default CrossButton;
