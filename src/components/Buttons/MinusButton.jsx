import { MinusIcon } from "@radix-ui/react-icons";
import styled from "styled-components";
import { COLORS } from "../../constants";

const Button = styled.button`
    cursor: pointer;
    border: none;
    background-color: ${COLORS.buttonSecondary};
    padding: 2px 4px;
    border-radius: 2px;
    visibility: hidden;

    position: absolute;
    top: 2px;
    right: 2px;

    &:hover {
        background-color: ${COLORS.buttonSecondaryHover};
    }
`;

const VARIANTS = {
    default: Button,
};

function MinusButton({ variant, onClick }) {
    const Tag = VARIANTS[variant];

    function handleClick(e) {
        e.preventDefault();
        typeof onClick === "function" && onClick();
    }

    return (
        <Tag onClick={handleClick}>
            <MinusIcon></MinusIcon>
        </Tag>
    );
}

export default MinusButton;
