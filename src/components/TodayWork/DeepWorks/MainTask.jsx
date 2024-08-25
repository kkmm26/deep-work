import styled from "styled-components";
import TaskBar from "./TaskBar";
import { COLORS, TASK_TITLE_STYLES } from "../../../constants";



function MainTask() {
    return (
        <Wrapper>
            <MainTaskTaskBar
                hasDesc={false}
                titleStyles={TASK_TITLE_STYLES}
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
