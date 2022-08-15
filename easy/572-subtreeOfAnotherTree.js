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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
// Time complexity: O(Tree 1 * Tree 2)
var isSameTree = function (root1, root2) {
  if (root1 === null && root2 === null) return true;
  if (!(root1 !== null && root2 !== null) || root1.val !== root2.val)
    return false;

  return (
    isSameTree(root1.left, root2.left) && isSameTree(root1.right, root2.right)
  );
};

var isSubtree = function (root, subRoot) {
  if (subRoot === null) return true; // An empty tree is a subtree of any tree
  if (root === null) return false; // If subtree is not empty -> Cannot be a subtree of a empty tree

  if (isSameTree(root, subRoot)) return true;

  return (
    isSubtree(root.left, subRoot) || // If not a subtree of root -> Recursive to left
    isSubtree(root.right, subRoot) // If not a subtree of root -> Recursive to right
  );
};
