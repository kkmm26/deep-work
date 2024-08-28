import styled from "styled-components";
import TaskBar from "./TaskBar";

function Subject() {
    return (
        <SubjectTaskBar hasDesc={true} variant="Subject">
            Organic Here are my my favourite ones so you can suggest similar:
            wind river, prisoners, gone girl, no country for old man,
            nightcrawler... etc. There is probably no famous movie that I have
            not seen, so I'm looking tor some hidden gems, or some good foreign
            films. o
        </SubjectTaskBar>
    );
}

const SubjectTaskBar = styled(TaskBar)`
    font-size: 1.2rem;
    font-weight: 700;
    display: flex;
    align-items: center;

    &  button {
        right: -60px;
    }
`;

export default Subject;
