import styled from "styled-components";
import TaskBar from "./TaskBar";



function MainTask({addSubTask}) {

    return (
        <MainTaskTaskBar
            hasDesc={false}
            onPlusBtnClicked={addSubTask}
            variant="Main Task"
        >
            Organic Here are my favourite ones so you can suggest similar: wind
            river, prisoners, gone girl, no country for old man, nightcrawler...
            etc. There is probably no famous movie that I have not seen, so I'm
            looking tor some hidden gems, or some good foreign films.
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
