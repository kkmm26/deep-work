import React from "react";
import Feature from "./components/Feature";
import styled from "styled-components";
import TodayWork from "./components/TodayWork/TodayWork.jsx";
import FleetingThoughts from "./components/FleetingThoughts/FleetingThoughts.jsx";
import TimeBlock from "./components/TimeBlock/TimeBlock.jsx";
import { COLORS, STYLES, TASKS } from "./constants.js";
import { setInStorage } from "./api/db/localStorage.js";

const FEATURES = ["Time Block", "Today's Works", "Fleeting Thoughts"];

function App() {
    const [activeFeature, setActiveFeature] = React.useState(FEATURES[1]);

    setInStorage("tasks", TASKS) // just for testing, remove later

    React.useEffect(()=> {
        function handleKeydown(e) {
            if (e.key === "Escape") {
                if(document.activeElement) {
                    document.activeElement.blur()
                }
            }
        }

        window.addEventListener('keydown', handleKeydown)

        return (() => {
            window.removeEventListener('keydown', handleKeydown)
        })
    })

    function handleClick(e) {
        const feature = e.target.textContent;
        setActiveFeature(feature);
    }

    return (
        <>
            <TitleWrapper onClick={(e) => handleClick(e)}>
                {FEATURES.map((title) => {
                    return (
                        <Feature
                            key={crypto.randomUUID()}
                            title={title}
                            isActive={title === activeFeature}
                        />
                    );
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
    min-height: 100%;
    background-color: ${COLORS.white};
    margin: 0 auto;
    border-radius: 5px;
    box-shadow: ${STYLES.boxShadow};
    padding: 10px;
`;
export default App;
