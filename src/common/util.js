export const parseDataFromString = (string, defaultValue = {}) => {
    let returnValue = defaultValue;
    try {
        returnValue = JSON.parse(string);
    } catch(e) { }
    return returnValue;
}
