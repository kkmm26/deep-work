import React from "react";
import Feature from "./components/Feature";
import styled from "styled-components";
import TodayWork from "./components/TodayWork";
import FleetingThoughts from "./components/FleetingThoughs";
import TimeBlock from "./components/TimeBlock";

const FEATURES = ["Time Block", "Today's Work", "Fleeting Thoughts"];

function App() {
    const [isTimeBlockActive, setIsTimeBlockActive] = React.useState(false);
    const [isTodayWork, setIsTodayWork] = React.useState(true);
    const [isFleeting, setIsFleeting] = React.useState(false);

    return (
        <>
        <FeatureWrapper>
            {FEATURES.map((feature) => {
                return <Feature key={crypto.randomUUID()} title={feature} />;
            })}
        </FeatureWrapper>
        <Main>
            <Wrapper>

            {isTimeBlockActive && <TimeBlock />}
            {isTodayWork && <TodayWork />}
            {isFleeting && <FleetingThoughts />}
            </Wrapper>
        </Main>
        </>
    );
}
const FeatureWrapper = styled.div`
    display: flex;
    max-width: 1440px;
    width: auto;
    margin: 0 auto;
    justify-content: space-between;
`;


const Main = styled.main`
    max-width: 1440px;
    height: 100vh;
    padding: 25px;
    margin: 0 auto;
`;

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    background-color: #ffffff;
    margin: 0 auto;
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.375) 0px 2px 8px 0px;
`;
export default App;
