import React from "react";

export const ToastsContext = React.createContext();

function ToastsProvider({children}) {
    const [toasts, setToasts] = React.useState([]);
    function createToast(taskName) {
        setToasts([...toasts, { taskName, id: crypto.randomUUID() }]);
    }
    function destroyToast(idToDel) {
        setToasts(toasts.filter(toast => toast.id !== idToDel))
    }

    return <ToastsContext.Provider value={{toasts, createToast, destroyToast}}>{children}</ToastsContext.Provider>;
}

export default ToastsProvider;
