import React from "react";
import Feature from "./components/Feature";
import styled from "styled-components";
import TodayWork from "./components/TodayWork";
import FleetingThoughts from "./components/FleetingThoughs";
import TimeBlock from "./components/TimeBlock";

const FEATURES = ["Time Block", "Today's Works", "Fleeting Thoughts"]

function App() {
    const [activeFeature, setActiveFeature] = React.useState(FEATURES[1])


    function handleClick(e) {
        const feature = e.target.textContent
        setActiveFeature(feature)
    }

    return (
        <>
            <FeatureWrapper onClick={(e) => handleClick(e)}>
                {FEATURES.map((title) => {
                    return <Feature key={crypto.randomUUID()} title={title} isActive={title === activeFeature}/>;
                })}
            </FeatureWrapper>
            <Main>
                <Wrapper>
                    {activeFeature === FEATURES[0] && <TimeBlock />}
                    {activeFeature === FEATURES[1] && <TodayWork />}
                    {activeFeature === FEATURES[2] && <FleetingThoughts />}
                </Wrapper>
            </Main>
        </>
    );
}
const FeatureWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    max-width: 1440px;
    width: 100%;
    margin: 0 auto;
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
    padding: 10px;
`;
export default App;
