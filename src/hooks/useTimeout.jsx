import React from "react";

function useTimeout(callback, duration) {
    React.useEffect(() => {
        const timeoutID = setTimeout(() => {
            callback();
        }, duration);

        return () => {
            clearTimeout(timeoutID);
        };
    }, []);
}

export default useTimeout;
