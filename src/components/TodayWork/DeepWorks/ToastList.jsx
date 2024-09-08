import React from "react"
import { ToastsContext } from "./ToastsProvider"
import styled from "styled-components";
import Toast from "../../Toast/Toast";

function ToastList(){

    const {toasts, destroyToast} = React.useContext(ToastsContext)

    return (
        <>
            {toasts.length > 0 && (
                <Toasts>
                    {toasts.map((toast) => {
                        return (
                            <Toast
                                key={toast.id}
                                task="dummy"
                                destroyToast={destroyToast}
                            ></Toast>
                        );
                    })}
                </Toasts>
            )}
        </>
    );
}
const Toasts = styled.ul`
    position: fixed;
    bottom: 10px;
    right: 30px;
`;

export default ToastList