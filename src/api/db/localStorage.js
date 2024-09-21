
export function getFromStorage(key) {
    const storedValue = localStorage.getItem(key);
    if(!storedValue) {
        return {}
    }
    return JSON.parse(storedValue)
}

export function setInStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

export function updateStorage() {

}
