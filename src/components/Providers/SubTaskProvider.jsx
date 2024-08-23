import React from "react"
import { SUB_TASKS_ADDABLE } from "../../constants";

export const SubTaskContext = React.createContext()

function SubTaskProvider({children}) {


    const [subTaskInputs, setSubTaskInputs] = React.useState([0]);

    function addSubTaskInput(e) {
        e.preventDefault();
        if (subTaskInputs.length >= SUB_TASKS_ADDABLE) {
            return;
        }
        const newTask = 0;
        setSubTaskInputs([...subTaskInputs, newTask]);
    }

    function deleteSubTaskInput(e, index) {
        e.preventDefault()        
        setSubTaskInputs(subTaskInputs.filter((_, i) => i !== index));
    }

    

    return (
        <SubTaskContext.Provider
            value={{ subTaskInputs, deleteSubTaskInput, addSubTaskInput }}
        >
            {children}
        </SubTaskContext.Provider>
    );
}

export default SubTaskProvider