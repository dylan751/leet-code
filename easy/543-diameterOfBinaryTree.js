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
 * @return {number}
 */

var diameterOfBinaryTree = function (root) {
  let resultSum = Number.MIN_SAFE_INTEGER;

  let recurse = (node, isRoot) => {
    if (!node) {
      return 0;
    }

    let left = recurse(node.left);
    let right = recurse(node.right);

    let result = Math.max(left, right);

    resultSum = Math.max(resultSum, left + right);

    return result + 1;
  };

  recurse(root, true);
  return resultSum;
};
