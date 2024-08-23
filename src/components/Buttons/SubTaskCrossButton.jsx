import { Cross1Icon } from "@radix-ui/react-icons";
import styled from "styled-components";
import { COLORS } from "../../constants";

function SubTaskCrossButton({onClick}) {
    function defaultClick(e) {
        e.preventDefault();
    }
    return (
        <Button onClick={onClick? onClick : defaultClick} type="button">
            <Cross1Icon style={{ width: "80%" }} />
        </Button>
    );
}

const Button = styled.button`
    cursor: pointer;
    background: none;
    border: none;
    /* background-color: ${COLORS.plusButton}; */
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 2px;
    position: absolute;
    right: 2px;
    top: 4px;
    bottom: 4px;

    
`;

export default SubTaskCrossButton;
