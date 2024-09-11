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
        setToasts(prev => [...prev, newToast]);
    }
    function destroyToast(idToDel) {
        setToasts(toasts =>toasts.filter((toast) => toast.id !== idToDel));
    }

    const values = React.useMemo(() => {
        return { toasts, createToast, destroyToast };
    }, [toasts]);

    return (
        <ToastsContext.Provider value={values}>
            {children}
        </ToastsContext.Provider>
    );
}

export default ToastsProvider;
