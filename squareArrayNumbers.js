// sortedSquares([-2, -1, 0, 1, 2, 3]) => [ 0, 1, 1, 4, 4, 9 ]

/**
 * @param {number[]} arr
 * @return {number[]}
 */
var sortedSquares = function(arr) {
    if (arr === null) return null;
        
    var temp = new Array(arr.length);

    var start = 0;
    var end = arr.length - 1;
    var i = end; // insert position.
    while (start <= end) {
        var pow1 = Math.pow(arr[start], 2);
        var pow2 = Math.pow(arr[end], 2);
        if (pow1 > pow2) {
            temp[i--] = pow1;
            start++;
        } else {
            temp[i--] = pow2;
            end--;
        }
    }
    return temp;
};
