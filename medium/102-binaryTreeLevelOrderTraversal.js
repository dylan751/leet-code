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
 * @return {number[][]}
 */
var levelOrder = function (root) {
  let res = [];
  let queue = [];

  queue.push(root);

  while (queue.length > 0) {
    let queueLength = queue.length; // To iterate through 1 level at a time
    let level = [];
    for (let i = 0; i < queueLength; i++) {
      let node = queue.shift();
      if (node) {
        level.push(node.val);
        queue.push(node.left);
        queue.push(node.right);
      }
    }

    // Add every level to the result array
    if (level.length > 0) res.push(level);
  }

  return res;
};
