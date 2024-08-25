import styled from "styled-components";
import Subject from "./Subject.jsx";
import MainTask from "./MainTask.jsx";

function DeepWorks() {
    return (
        <Wrapper>
            <Subject hasDesc={true}>Chemistry</Subject>
            <MainTask hasDesc={false}>Memorize the periodic table</MainTask>
        </Wrapper>
    );
}

const Wrapper = styled.section`
    display: flex;
    flex-direction: column;
    gap: 5px;
`;



export default DeepWorks;
