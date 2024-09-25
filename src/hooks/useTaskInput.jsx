import React from "react";
import { getCurrentTask } from "../helpers";

function useTaskInput({ currentTaskId, updateTask, variant, taskInputRef }) {
    const [currentTask, setCurrentTask] = React.useState(
        getCurrentTask(variant, currentTaskId)
    );
    const [isEditMode, setIsEditMode] = React.useState(false);
    const [isTaskUpdated, setIsTaskUpdated] = React.useState(true);

    

    React.useEffect(() => {
        if (isEditMode && taskInputRef.current) {
            taskInputRef.current.focus();
        }

        const handleKeydown = (e) => {
            if (e.key === "Enter" && isEditMode) {
                updateTask(currentTaskId, currentTask, variant);
                setIsEditMode(false);
            }
            if (e.key === "Escape" && isEditMode) {
                setIsTaskUpdated(false);
                setIsEditMode(false);
            }
        };

        const inputRef = taskInputRef.current;
        if (inputRef) {
            inputRef.addEventListener("keydown", handleKeydown);
        }

        return () => {
            if (inputRef) {
                inputRef.removeEventListener("keydown", handleKeydown);
            }
        };
    }, [isEditMode, currentTask, updateTask, currentTaskId, variant]);

    const handleBlur = () => {
        setIsEditMode(false);
        if (isTaskUpdated) {
            updateTask(currentTaskId, currentTask, variant);
        }
    };

    const handleInputChange = (e) => setCurrentTask(e.target.value);
    const handleInputClick = () => setIsEditMode(true);

    return {
        taskInputRef,
        currentTask,
        isEditMode,
        handleInputChange,
        handleInputClick,
        handleBlur,
        setIsEditMode,
    };
}

export default useTaskInput;
