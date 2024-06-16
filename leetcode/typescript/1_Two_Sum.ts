/**
 * Input: nums = [2,7,11,15], target = 9
*  Output: [0,1]
*  Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
*/

function twoSum(numbers: number[], target: number) {
    const hashmap = new Map();
    
    for (var index = 0; index < numbers.length; index++) {
        var complement = target - numbers[index];
        
        if (hashmap.has(complement)) {
            return [index, hashmap.get(complement)]
        }
        
        hashmap.set(numbers[index], index)
    }
}
