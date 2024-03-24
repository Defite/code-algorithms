/**
* Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive.
* There is only one repeated number in nums, return this repeated number.
* You must solve the problem without modifying the array nums and uses only constant extra space.
*
* Examples:
* Input: nums = [1,3,4,2,2]
* Output: 2
*
* Input: nums = [3,1,3,4,2]
* Output: 3
*/
function findDuplicate (nums) {
    // tortoise and hare algorithm
    let slow = 0;
    let fast = 0;

    // Find the meeting point
    do {
        slow = nums[slow];
        fast = nums[nums[fast]];
    } while (slow != fast);

    fast = 0;

    // Find the start of the cycle
    do {
        slow = nums[slow];
        fast = nums[fast];
    } while (slow != fast);
    
    return slow
};
