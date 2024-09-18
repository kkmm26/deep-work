export function getFromStorage(key) {
    const storedValue = localStorage.getItem(key);
    
    const v= JSON.parse(storedValue || "{}");
    return v
}

export function setInStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

export function updateStorage() {

}
