import styled from "styled-components";
import TaskHeader from "./TaskHeader";

function Subject({ children }) {
    return (
        <Wrapper>
            <TaskHeader hasDesc={true}>{children}</TaskHeader>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    font-size: 1.2rem;
    font-weight: 700;

    /* & > * {
        font-size: 1.2rem;
        font-weight: 700;
    } */
`;


export default Subject;
