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
 * @return {TreeNode}
 */
var invertTree = function (root) {
  if (root == null) return null;

  // Invert the value of 2 children
  const tmp = root.left;
  root.left = root.right;
  root.right = tmp;

  // Recursive for the left and right children
  invertTree(root.left);
  invertTree(root.right);
  return root;
};
