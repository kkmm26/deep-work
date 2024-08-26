function useEditableTitle() {

    return (e)=> {

        const titleElement = e.currentTarget;
    
        titleElement.setAttribute("contenteditable", "true");
        titleElement.focus();
    
        function handleKeydown(e) {
            if (e.key === "Escape" || e.key === "Enter") {
                titleElement.blur();
            }
        }
    
        function handleBlur() {
            titleElement.removeAttribute("contenteditable");
    
            window.getSelection().removeAllRanges();
    
            titleElement.removeEventListener("keydown", handleKeydown);
            titleElement.removeEventListener("blur", handleBlur);
        }
    
        titleElement.addEventListener("keydown", handleKeydown);
        titleElement.addEventListener("blur", handleBlur);
    }
}

export default useEditableTitle