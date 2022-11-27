/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

var mergeTwoLists = function (list1, list2) {
  let curr = new ListNode();
  let res = curr;

  while (list1 != null && list2 != null) {
    if (list1.val < list2.val) {
      curr.next = new ListNode(list1.val);
      list1 = list1.next;
      curr = curr.next;
    } else {
      curr.next = new ListNode(list2.val);
      list2 = list2.next;
      curr = curr.next;
    }
  }
  if (list1 == null) {
    curr.next = list2;
  }
  if (list2 == null) {
    curr.next = list1;
  }

  console.log(res.next);
  return res.next;
};

// Test cases
let list1 = [1, 2, 4];
let list2 = [1, 3, 4];
