import styled from "styled-components"

const WORK_TYPES = ["Ritual", "Deep Works", "Shallow Works"]

function TodayWork() {
    return <Wrapper>
        {WORK_TYPES.map((work, index) => <Work key={index}>{work}</Work>)}
    </Wrapper>
}


const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    width: 30%;
` 

const Work = styled.h2`
    font-size: 15px;
`

export default TodayWork