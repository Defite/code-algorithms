/**
 * Input: nums = [2,7,11,15], target = 9
*  Output: [0,1]
*  Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
*/

function twoSum(numbers: number[], target: number) {
    const numbersMap = new Map();

    for (let i=0; i < numbers.length; i++) {
        const number = numbers[i];

        if (numbersMap.has(number)) {
            return [numbersMap.get(number), i]
        } else {
            numbersMap.set((target - number), i)
        }
    }
}
