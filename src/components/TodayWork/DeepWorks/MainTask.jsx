import styled from "styled-components";
import TaskBar from "./TaskBar";



function MainTask() {
    return (
        <Wrapper>
            <MainTaskTaskBar
                hasDesc={false}
                variant="Main Task"
            >
                Memorize the periodic table
            </MainTaskTaskBar>
        </Wrapper>
    );
}

const Wrapper = styled.div`
`;

const MainTaskTaskBar = styled(TaskBar)`
    font-size: 1rem;
    font-weight: 400;
`;

export default MainTask;
