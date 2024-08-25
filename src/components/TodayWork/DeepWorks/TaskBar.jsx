import styled from "styled-components";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import { COLORS } from "../../../constants.js";
import DescriptionIcon from "./DescriptionIcon.jsx";
import PlusButton from "../../Buttons/PlusButton.jsx";

function TaskBar({ children, hasDesc, titleStyles, className, variant }) {
    const Tag = variant === "Main Task" ? MainTaskTitle : Title;

    return (
        <Wrapper className={className}>
            <ChevronDownIconWrapper>
                <ChevronDownIcon />
            </ChevronDownIconWrapper>
            <Tag titleStyles={titleStyles}>{children}</Tag>
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
`;

const MainTaskTitle = styled(Title)`
    background-color: ${COLORS.background};
    padding: 8px;
    padding-left: 18px;
    width: 100%;
    border-radius: 3px;
`;

export default TaskBar;
