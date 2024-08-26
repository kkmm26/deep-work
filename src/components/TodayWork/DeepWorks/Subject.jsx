import styled from "styled-components";
import TaskBar from "./TaskBar";

function Subject() {
    return (
   
            <SubjectTaskBar hasDesc={true} variant="Subject">Chemistry</SubjectTaskBar>
    
    );
}

const SubjectTaskBar = styled(TaskBar)`
    font-size: 1.2rem;
    font-weight: 700;

    &  button {
        right: -60px;
    }
`;

export default Subject;
