/**
 * Binary search algorithm
 * Complexity: O(log(n))
 */

function binarySearch(arr: number[], item: number) {
    let start = 0;
    let end = arr.length - 1;

    while (start <= end) {
        let mid = Math.floor(start + end) / 2;
        let guess = arr[mid];

        if (guess === item) {
            return true;
        } else if (guess < item) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }

    return false;
}
