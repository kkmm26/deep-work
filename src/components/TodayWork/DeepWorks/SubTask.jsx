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
    max-width: 85%;
    align-self: flex-end;
    padding-left: 0px;
    padding-right: 40px;
    display: flex;
    flex-direction: column;
    gap: 5px;
`;

const SubTaskBar = styled(TaskBar)`
    font-size: 0.9rem;
    font-weight: 400;
`;

export default SubTask;
