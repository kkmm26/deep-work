import React from "react";
import styled from "styled-components";

import Subject from "./Subject.jsx";
import MainTask from "./MainTask.jsx";
import SubTask from "./SubTask.jsx";

function DeepWorks() {
    const [subTasks, setSubtasks] = React.useState(["HomeWork(1)", "HomeWork(2)"])
        
    function addSubTask() {
        
    }

    return (
        <Wrapper>
            <Subject hasDesc={true}>Chemistry</Subject>
            <MainTask addSubTask={addSubTask}>Memorize the periodic table</MainTask>
            <SubTask subTasks={subTasks}/>

        </Wrapper>
    );
}

const Wrapper = styled.section`
    display: flex;
    flex-direction: column;
    gap: 8px;

    max-width: 35%;
`;





export default DeepWorks;
