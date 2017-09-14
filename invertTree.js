/**
*
* https://twitter.com/mxcl/status/608682016205344768
*
* Task: invert binary tree
*
* This:
*      4
*    /   \
*   2     7
*  / \   / \
* 1   3 6   9
*
* will turn into this:
*
*      4
*    /   \
*   7     2
*  / \   / \
* 9   6 3   1
*
*/

var tree = {
  value: 4,
  left: {
    value: 2,
    left: {
      value: 1
    },
    right: {
      value: 3
    }
  },
  right: {
    value: 7,
    left: {
      value: 6
    },
    right: {
      value: 9
    }
  }
};

function invertTree(node) {
  if (!node) return false;
  
  var right = invertTree(node.right);
  var left = invertTree(node.left);
  
  if (left) node.left = right;
  if (right) node.right = left;
  
  return node;
}

console.log(invertTree(tree));
