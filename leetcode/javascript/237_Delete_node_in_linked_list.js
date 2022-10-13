/**
* https://leetcode.com/problems/delete-node-in-a-linked-list
* Task:
* Given a single linked list and a node to delete, write a function to delete this node.
*
* Input: head = [4,5,1,9], node = 5
* Output: [4,1,9]
*
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function(node) {
    if (node === null || node.next === null) {
        return null;
    }
    
    node.val = node.next.val;
    node.next = node.next.next;
};
