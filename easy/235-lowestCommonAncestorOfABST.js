/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  let cur = root;

  while (cur !== null) {
    if (p.val > cur.val && q.val > cur.val) {
      // If both p, q > cur.val -> The LCA must be in the right subtree
      cur = cur.right;
    } else if (p.val < cur.val && q.val < cur.val) {
      // If both p, q < cur.val -> The LCA must be in the left subtree
      cur = cur.left;
    } else {
      // If p, q is in the different subtree (or p == cur || q == cur)-> current node must be the Lowest Common Ancestor (LCA)
      return cur;
    }
  }
};
