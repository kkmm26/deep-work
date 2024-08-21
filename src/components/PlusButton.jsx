import styled from "styled-components";
import { COLORS } from "../constants.js";
import { PlusIcon } from "@radix-ui/react-icons";


function PlusButton({onClick, type}) { 

    function defaultClick(e) {
        e.preventDefault()
    }
    if (!onClick) {
        onClick = defaultClick
    }

    if (type === "Sub Task") {
        return <SubTaskPlusButton type="button" onClick={onClick}><PlusIcon/></SubTaskPlusButton>
    }

    return <Button type="button" onClick={onClick}><PlusIcon/></Button>;
}



const Button = styled.button`
    width: 60px;
    height: 20px;
    border-radius: 3px;
    background-color: ${COLORS.plusButton};
    border: none;
    margin: 0 auto;
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
    position: absolute;
    left: 0;
`

export default PlusButton;
