import styled from "styled-components";
import Subject from "./Subject";
import MainTask from "./MainTask";

function DeepWorks() {
    return (
        <Wrapper>
            <Subject>Chemistry</Subject>
            <MainTask>Memorize the periodic table</MainTask>
        </Wrapper>
    );
}

const Wrapper = styled.section``;

export default DeepWorks;
