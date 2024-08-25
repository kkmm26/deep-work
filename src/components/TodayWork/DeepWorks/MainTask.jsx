import styled from "styled-components";
import TaskHeader from "./TaskHeader";

function MainTask({ children }) {
    return (
        <Wrapper>
            <TaskHeader hasDesc={false}>{children}</TaskHeader>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    font-size: 1.2rem;
    font-weight: 700;
`;

export default MainTask;
