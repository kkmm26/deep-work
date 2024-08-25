import styled from "styled-components";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import { COLORS } from "../../../constants.js";
import DescriptionIcon from "./DescriptionIcon.jsx";
import PlusButton from "../../Buttons/PlusButton.jsx"

function Subject({children}) {
    return (
        <Wrapper>
            <SubjectTitle>
                <ChevronDownIconWrapper>
                    <ChevronDownIcon />
                </ChevronDownIconWrapper>
                {children}
            </SubjectTitle>
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

const SubjectTitle = styled.h3`
    display: flex;
    gap: 5px;
    align-items: center;
    font-size: 1.2rem;
    font-weight: 700;
    &:hover ${ChevronDownIconWrapper} {
        visibility: visible;
    }
`;



export default Subject;
