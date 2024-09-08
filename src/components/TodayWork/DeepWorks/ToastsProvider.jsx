import React from "react";

export const ToastsContext = React.createContext();

function ToastsProvider({children}) {
    const [toasts, setToasts] = React.useState([]);
    function createToast() {
        setToasts([...toasts, { id: crypto.randomUUID() }]);
    }
    function destroyToast() {}

    return <ToastsContext.Provider value={{toasts, createToast, destroyToast}}>{children}</ToastsContext.Provider>;
}

export default ToastsProvider;
