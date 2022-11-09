/**
 * @param {number} k
 * @param {number[]} nums
 */
function Node(val, cnt) {
  this.left = null;
  this.right = null;
  this.val = val;
  this.cnt = cnt;
}
let root = null;
let k = 0;

function insert(root, num) {
  if (root === null) {
    return new Node(num, 1);
  }

  if (root.val > num) {
    root.left = insert(root.left, num);
  } else {
    root.right = insert(root.right, num);
  }

  root.cnt++;
  return root;
}

function searchKthLargest(root, k) {
  let greaterThanRoot = root?.right ? root.right.cnt : 0;

  if (k === greaterThanRoot + 1) {
    return root.val;
  }

  if (k <= greaterThanRoot) {
    return searchKthLargest(root.right, k);
  }

  return searchKthLargest(root.left, k - (greaterThanRoot + 1));
}

var KthLargest = function (_k, nums) {
  k = _k;
  root = null;
  for (let num of nums) {
    root = insert(root, num);
  }
};

/**
 * @param {number} val
 * @return {number}
 */

KthLargest.prototype.add = function (val) {
  root = insert(root, val);
  return searchKthLargest(root, k);
};

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */
