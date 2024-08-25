import styled from "styled-components";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import { COLORS } from "../../../constants";
import DescriptionIcon from "./DescriptionIcon";
import PlusButton from "../../Buttons/PlusButton.jsx"

function MainTask() {
    return (
        <Wrapper>
            <TaskName>
                <ChevronDownIconWrapper>
                    <ChevronDownIcon />
                </ChevronDownIconWrapper>
                Chemistry
            </TaskName>
                <DescriptionIcon />
                <PlusButton variant="Main Task"/>
        </Wrapper>
    );
}

const ChevronDownIconWrapper = styled.div`
    padding: 6px 10px;
    border-radius: 3px;
    visibility: hidden;

    &:hover {
        cursor: pointer;
        background-color: ${COLORS.plusButtonHover};
    }
`;
const Wrapper = styled.div`
    max-width: 30%;
    width: fit-content;
    display: flex;
    gap: 10px;

    &:hover button {
        visibility: visible;
    }
`;

const TaskName = styled.h3`
    display: flex;
    gap: 5px;
    align-items: center;
    font-size: 1.2rem;
    font-weight: 700;
    &:hover ${ChevronDownIconWrapper} {
        visibility: visible;
    }
`;



export default MainTask;
