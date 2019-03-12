// @see https://stackoverflow.com/a/49724916/578886
/**
* Checks if number belongs to interval
* @param {Number} - Number to check
* @param {Number} - Min number
* @param {Number} - Max number
* @returns {Boolean}
*/
function inRange(x, min, max) {
    return ((x-min)*(x-max) <= 0);
}

//test
inRange(0, 0, 10) // true
inRange(-1, 0, 10) // false
