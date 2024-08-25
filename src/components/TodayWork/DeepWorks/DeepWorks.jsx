import styled from "styled-components";
import Subject from "./Subject.jsx";
import MainTask from "./MainTask.jsx";
import SubTask from "./SubTask.jsx";

function DeepWorks() {
    return (
        <Wrapper>
            <Subject hasDesc={true}>Chemistry</Subject>
            <MainTask >Memorize the periodic table</MainTask>
            <SubTask>Structure and Bonding in Organic Molecules</SubTask>

        </Wrapper>
    );
}

const Wrapper = styled.section`
    display: flex;
    flex-direction: column;
    gap: 5px;

    max-width: 35%;
`;





export default DeepWorks;
