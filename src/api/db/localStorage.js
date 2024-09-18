export function getFromStorage(key) {
    const storedValue = localStorage.getItem(key);
    
    const v= JSON.parse(storedValue || "{}");
    console.log("value", v);
    return v
}

export function setInStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

export function updateStorage() {

}
