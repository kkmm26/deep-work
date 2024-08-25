import styled from "styled-components";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import { COLORS } from "../../../constants.js";
import DescriptionIcon from "./DescriptionIcon.jsx";
import PlusButton from "../../Buttons/PlusButton.jsx";

function TaskBar({ children, hasDesc, titleStyles, className }) {
    return (
        <Wrapper className={className}>
            <ChevronDownIconWrapper>
                <ChevronDownIcon />
            </ChevronDownIconWrapper>
            <Title titleStyles={titleStyles}>{children}</Title>
            {hasDesc && <DescriptionIcon />}
            <PlusButton variant="Task Header" />
        </Wrapper>
    );
}

const ChevronDownIconWrapper = styled.div`
    padding: 6px 10px;
    border-radius: 3px;
    align-self: center;
    visibility: hidden;

    &:hover {
        cursor: pointer;
        background-color: ${COLORS.backgroundHover};
    }
`;

const Wrapper = styled.div`
    max-width: 30%;
    width: fit-content;
    display: flex;
    gap: 6px;

    &:hover button,
    &:hover ${ChevronDownIconWrapper} {
        visibility: visible;
    }
`;

const Title = styled.h3`
    cursor: pointer;
    display: flex;
    gap: 5px;
    align-items: center;
    font: inherit;
    background-color: ${(p) => p.titleStyles && `${COLORS.background}`};
    padding: ${(p) => p.titleStyles && p.titleStyles.padding + "px"};
    border-radius: 3px;
`;
export default TaskBar;
