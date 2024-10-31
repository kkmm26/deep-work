import styled from "styled-components";
import React from "react";
import { getFromStorage } from "../../api/db/localStorage";
import TaskBar from "../TaskBar/TaskBar";
import { ShallowWorksContext } from "../Providers/ShallowWorksProvider";

function ShallowWorks() {
    const {shallowWorks} = React.useContext(ShallowWorksContext)

    return <Wrapper>{Object.values(shallowWorks).map(work => <p>{work}</p>)}</Wrapper>
}
const Wrapper = styled.div``;

export default ShallowWorks;
