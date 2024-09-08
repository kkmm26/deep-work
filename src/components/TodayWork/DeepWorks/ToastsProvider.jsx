import React from "react";

export const ToastsContext = React.createContext();

function ToastsProvider({ children }) {
    const [toasts, setToasts] = React.useState([]);
    function createToast(taskName) {
        const newToast = {taskName, id:crypto.randomUUID()}

        if (toasts.length >= 2) {
            const lastToast = toasts[1]
            setToasts([lastToast, newToast])
            return
        }
        setToasts([...toasts, newToast]);
    }
    function destroyToast(idToDel) {
        setToasts(toasts.filter((toast) => toast.id !== idToDel));
    }

    return (
        <ToastsContext.Provider value={{ toasts, createToast, destroyToast }}>
            {children}
        </ToastsContext.Provider>
    );
}

export default ToastsProvider;
