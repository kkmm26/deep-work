import styled from "styled-components";
import TaskBar from "./TaskBar";



function MainTask() {
    function addSubTask() {

    }

    return (
        <Wrapper>
            <MainTaskTaskBar
                hasDesc={false}
                onClick={addSubTask}
                variant="Main Task"
            >
                Organic Chemistry
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
