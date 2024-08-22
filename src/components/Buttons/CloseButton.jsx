import styled from "styled-components";
import { Cross1Icon } from "@radix-ui/react-icons";

function CloseButton({onClick}) {

    function defaultClick(e) {
        e.preventDefault()
    }

    if (!onClick) {
        onClick = defaultClick
    }

    return <Button type="button" onClick={onClick}><Cross1Icon/></Button>
}

const Button = styled.button`
cursor: pointer;
    border: none;
    background: none;
    padding: 10px;
    position: absolute;
    top: 0;
    right: 0;
`

export default CloseButton