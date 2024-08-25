import styled from "styled-components";
import TaskBar from "./TaskBar";



function MainTask({addSubTask}) {

    return (
            <MainTaskTaskBar
                hasDesc={false}
                onClick={addSubTask}
                variant="Main Task"
            >
                Organic Chemistry
            </MainTaskTaskBar>
    );
}

const Wrapper = styled.div`
`;

const MainTaskTaskBar = styled(TaskBar)`
    font-size: 1rem;
    font-weight: 400;
`;

export default MainTask;
