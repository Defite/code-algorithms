/**
* https://leetcode.com/problems/two-sum/
* Example 1: Input: nums = [2,7,11,15], target = 9 Output: [0,1]
* Output: Because nums[0] + nums[1] == 9, we return [0, 1].
*
* Example 2: Input: nums = [3,2,4], target = 6
* Output: [1,2]
*
* Example 3: Input: nums = [3,3], target = 6
* Output: [0,1]
*
* Hash Table solution
*
*/

var twoSum = function(nums, target) {
    const indices = {};

    nums.forEach((item, index) => {
        indices[item] = index
    });

    for (let index = 0; index < nums.length; index++) {
        const rest = target - nums[index];

        if (indices[rest] !== undefined && indices[rest] !== index) {
            return [index, indices[rest]]
        }
    }
};
