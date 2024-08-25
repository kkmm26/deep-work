import styled from "styled-components";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import { COLORS } from "../../../constants.js";
import DescriptionIcon from "./DescriptionIcon.jsx";
import PlusButton from "../../Buttons/PlusButton.jsx";

function TaskBar({
    children,
    hasDesc,
    titleStyles,
    className,
    variant,
    onClick,
}) {
    let Tag;
    if (variant === "Main Task") {
        Tag = MainTaskTitle;
    } else if (variant === "Sub Task") {
        Tag = SubTaskTitle;
    } else {
        Tag = Title;
    }

    return (
        <Wrapper className={className}>
            {variant !== "Sub Task" && (
                <ChevronDownIconWrapper>
                    <ChevronDownIcon />
                </ChevronDownIconWrapper>
            )}
            <Tag titleStyles={titleStyles}>
                {children}

                {variant !== "Sub Task" && (
                    <PlusButton onClick={onClick} variant="Task Bar" />
                )}
            </Tag>
            {hasDesc && <DescriptionIcon />}
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
    width: 100%;
    display: flex;
    gap: 6px;

    &:hover button,
    &:hover ${ChevronDownIconWrapper} {
        visibility: visible;
    }
`;

const Title = styled.h3`
    position: relative;
    cursor: pointer;
    display: flex;
    gap: 5px;
    align-items: center;
    font: inherit;
`;

const MainTaskTitle = styled(Title)`
    background-color: ${COLORS.mainTaskBackground};
    padding: 8px;
    padding-left: 18px;
    width: 100%;
    border-radius: 3px;
`;

const SubTaskTitle = styled(Title)`
    background-color: ${COLORS.background};
    padding: 5px;
    padding-left: 15px;
    width: 100%;
    border-radius: 2px;
`;

export default TaskBar;
