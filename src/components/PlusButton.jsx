import styled from "styled-components";
import { COLORS } from "../constants";

function PlusButton() {
    function handleClick(e) {
        e.preventDefault()
    }   

    return <Button onClick={e => handleClick(e)}>+</Button>;
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
    visibility: hidden;

    &:hover {
        cursor: pointer;
        background-color: ${COLORS.plusButtonHover};
    }
`;

export default PlusButton;
