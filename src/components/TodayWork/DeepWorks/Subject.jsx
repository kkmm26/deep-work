import styled from "styled-components";
import TaskBar from "./TaskBar";

function Subject() {
    return (
        <SubjectTaskBar hasDesc={true} variant="Subject">
            By default, the element is aligned to the top (or bottom) edge of
            the scrollable ancestor. To define a custom spacing, use
            scroll-margin-top or scroll-margin-bottom. This is often useful when
            there's a fixed header on the page.
        </SubjectTaskBar>
    );
}

const SubjectTaskBar = styled(TaskBar)`
    font-size: 1.2rem;
    font-weight: 700;
    display: flex;
    align-items: center;
    width: fit-content;

    &  button {
        right: -60px;
    }
`;

export default Subject;
