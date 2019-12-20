/**
 *
 * @returns {boolean|boolean}
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
 *
 * @param object
 * @returns {boolean}
 */
export function objectIsEmpty(object) {
    for(let property in object) {
        if(object.hasOwnProperty(property))
            return false;
    }
    return true;
}
