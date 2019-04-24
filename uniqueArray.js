/**
* Return array withoud duplicate items
* [1, 2, 3, 4, 5, 3, 3, 5, 6] => [1, 2, 3, 4, 5, 6]
*/

const a = [1, 2, 3, 4, 5, 4];

// ES5
var getUniqValues = function(iterable) {
	return iterable.filter(function(elem, pos, arr) {
		return arr.indexOf(elem) === pos;
	});
};

// ES6
const getUniqValues = (iterable) => iterable.filter((elem, pos, arr) => arr.indexOf(elem) === pos);

// Using Set
const getUniqValues = (iterable) => new Set(iterable);
