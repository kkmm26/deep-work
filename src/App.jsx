import React from "react";
import Feature from "./components/Feature";
import styled from "styled-components";
import TodayWork from "./components/TodayWork";
import FleetingThoughts from "./components/FleetingThoughs";
import TimeBlock from "./components/TimeBlock";
import { COLORS, STYLES } from "./constants.js";

const FEATURES = ["Time Block", "Today's Works", "Fleeting Thoughts"]

function App() {
    const [activeFeature, setActiveFeature] = React.useState(FEATURES[1])


    function handleClick(e) {
        const feature = e.target.textContent
        setActiveFeature(feature)
    }

    return (
        <>
            <TitleWrapper onClick={(e) => handleClick(e)}>
                {FEATURES.map((title) => {
                    return <Feature key={crypto.randomUUID()} title={title} isActive={title === activeFeature}/>;
                })}
            </TitleWrapper>
            <Main>
                <FeatureWrapper>
                    {activeFeature === FEATURES[0] && <TimeBlock />}
                    {activeFeature === FEATURES[1] && <TodayWork />}
                    {activeFeature === FEATURES[2] && <FleetingThoughts />}
                </FeatureWrapper>
            </Main>
        </>
    );
}
const TitleWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    max-width: 1440px;
    width: 100%;
    margin: 0 auto;
`;


const Main = styled.main`
    max-width: 1440px;
    height: 100vh;
    padding: 15px;
    margin: 0 auto;
    `;

const FeatureWrapper = styled.div`
min-width: fit-content;
    width: 100%;
    height: 100%;
    background-color: ${COLORS.white};
    margin: 0 auto;
    border-radius: 5px;
    box-shadow: ${STYLES.boxShadow};
    padding: 10px;
`;
export default App;
