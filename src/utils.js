export function parseLocalStorageItem(item) {
    return JSON.parse(JSON.stringify(item));
}