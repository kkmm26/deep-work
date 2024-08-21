import React from "react"

export const SubTaskContext = React.createContext()

function SubTaskProvider({children}) {


    const [subTasks, setSubTasks] = React.useState([0]);

    function addSubTask(e) {
        e.preventDefault();
        if (subTasks.length >= 8) {
            return;
        }
        const newTask = 0;
        setSubTasks([...subTasks, newTask]);
    }

    function deleteSubTask(e, index) {
        console.log(subTasks);
        e.preventDefault()        
        setSubTasks(subTasks.filter((_, i) => i !== index))
    }

    

    return <SubTaskContext.Provider value={{subTasks, deleteSubTask, addSubTask}}>{children}</SubTaskContext.Provider>
}

export default SubTaskProvider