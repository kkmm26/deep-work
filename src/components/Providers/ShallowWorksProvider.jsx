import React from "react";
import { getFromStorage } from "../../api/db/localStorage";

export const ShallowWorksContext = React.createContext();
function ShallowWorksProvider({ children }) {
    // const [shallowWorks, setShallowWorks] = React.useState(
    //     getFromStorage("shallow-works")
    // );
    const [shallowWorks, setShallowWorks] = React.useState(
        {}
    );

    const VALUES = {
        shallowWorks
    }
    return (
        <ShallowWorksContext.Provider value={VALUES}>{children}</ShallowWorksContext.Provider>
    );
}
export default ShallowWorksProvider;
