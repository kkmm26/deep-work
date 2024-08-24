import styled from "styled-components";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import { COLORS } from "../../../constants";
import DescriptionIcon from "./DescriptionIcon";

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
    border: 1px solid red;
    display: flex;
    gap: 10px;
`;

const TaskName = styled.h3`
    display: flex;
    gap: 5px;
    align-items: center;
    &:hover ${ChevronDownIconWrapper} {
        visibility: visible;
    }
`;



export default MainTask;
