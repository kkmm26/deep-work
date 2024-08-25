import styled from "styled-components";
import TaskBar from "./TaskBar";

function SubTask({ children }) {
    return (
        <Wrapper>
            <SubTaskBar variant="Sub Task">
                Conversion between different functional groups (e.g., alcohol to
                ketone)
            </SubTaskBar>
            <SubTaskBar variant="Sub Task">
                Conversion between different functional groups (e.g., alcohol to
                ketone)
            </SubTaskBar>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    align-self: flex-end;
    max-width: 88%;
    display: flex;
    flex-direction: column;
    gap: 5px;
`;

const SubTaskBar = styled(TaskBar)`
    font-size: 0.9rem;
    font-weight: 400;
`;

export default SubTask;
