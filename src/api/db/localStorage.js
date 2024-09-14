export function getFromStorage(key) {
    return JSON.parse(localStorage.getItem(key) || "[]"); 
}

export function setInStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

export function updateStorage(key, value) {
    const existingData = getFromStorage(key);
    existingData.push(value);
    setInStorage(key, existingData);
}
