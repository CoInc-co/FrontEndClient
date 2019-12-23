/**
 * Checks if the current browser has a method of local storage enabled
 * @returns {boolean} hasLocalStorage
 */
export function checkLocalStorage() {
    try{
        return 'localStorage' in window && window['localStorage'] !== null;
    } catch(e) {
        console.log(e);
        return false;
    }
}

/**
 * Checks if the given object is an empty JSON
 * @param   object JSON object to check properties on
 * @returns {boolean} jsonIsEmpty
 */
export function objectIsEmpty(object) {
    for(let property in object) {
        if(object.hasOwnProperty(property))
            return false;
    }
    return true;
}

/**
 * Generates a random float [minimum, maximum]
 * @param minimum       The minimum value
 * @param maximum       The maximum value
 * @returns {number}    The random float
 */
export function randomFloat(minimum, maximum) {
    maximum -= (minimum - 1);
    return ((Math.random() * maximum) + minimum);
}

/**
 * Generates a random integer [minimum, maximum]
 * @param minimum       The minimum value
 * @param maximum       The maximum value
 * @returns {number}    The random integer
 */
export function randomInteger(minimum, maximum) {
    return Math.floor(randomFloat(minimum, maximum));
}
