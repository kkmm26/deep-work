import styled from "styled-components";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import { COLORS } from "../../../constants";
import DescriptionIcon from "./DescriptionIcon";

function Task() {
    return (
        <Wrapper>
            <MainTask>
                <ChevronDownIconWrapper>
                    <ChevronDownIcon />
                </ChevronDownIconWrapper>
                Chemistry
            </MainTask>
            <DescriptionIconWrapper>
                <DescriptionIcon />
            </DescriptionIconWrapper>
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
    position: relative;
    display: flex;
    gap: 5px;
`;

const MainTask = styled.h3`
    display: flex;
    gap: 5px;
    align-items: center;
    &:hover ${ChevronDownIconWrapper} {
        visibility: visible;
    }
`;

const DescriptionIconWrapper = styled.div`
`;

export default Task;
