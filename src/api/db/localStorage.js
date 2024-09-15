export function getFromStorage(key) {
    const storedValue = localStorage.getItem(key);
    return JSON.parse(storedValue || "[]");
}

export function setInStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

export function updateStorage(key, value) {
    const existingData = getFromStorage(key);
    existingData.push(value);
    setInStorage(key, existingData);
}
