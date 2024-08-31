import styled from "styled-components";
import TaskBar from "../../TaskBar/TaskBar";

function Subject({children, onPlusBtnClicked}) {
    return (
        <SubjectTaskBar onPlusBtnClicked={onPlusBtnClicked} hasDesc={true} variant="Subject">
            {children}
        </SubjectTaskBar>
    );
}

const SubjectTaskBar = styled(TaskBar)`
    font-size: 1.2rem;
    font-weight: 700;
    display: flex;
    align-items: center;
    width: fit-content;

    &  button {
        right: -60px;
    }
`;

export default Subject;
