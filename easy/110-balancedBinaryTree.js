/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */

var isBalanced = function (root) {
  let leftHeight = 0;
  let rightHeight = 0;

  if (root === null) {
    return true;
  }

  if (root.left) {
    leftHeight = calculateHeight(root.left);
  }

  if (root.right) {
    rightHeight = calculateHeight(root.right);
  }

  let balanced = Math.abs(leftHeight - rightHeight) <= 1;

  if (!balanced) {
    return false;
  }

  balanced = balanced && isBalanced(root.left);
  balanced = balanced && isBalanced(root.right);

  return balanced;
};


var calculateHeight = function (root) {
  if (root === null) {
    return 0;
  }

  let leftSubtreeHeight = 0;
  let rightSubtreeHeight = 0;

  if (root.left) {
    leftSubtreeHeight = calculateHeight(root.left);
  }

  if (root.right) {
    rightSubtreeHeight = calculateHeight(root.right);
  }

  return Math.max(leftSubtreeHeight, rightSubtreeHeight) + 1;
};
