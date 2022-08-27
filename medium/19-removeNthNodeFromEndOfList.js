/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  // Make two pointers: slow = head, fast = head + n;
  // When fast === null -> slow is at the right position

  // Create a dummy node
  let dummy = new ListNode(0, head);
  let slow = dummy;
  let fast = head;
  for (let i = 0; i < n; i++) {
    if (fast) fast = fast.next;
  }

  while (fast) {
    slow = slow.next;
    fast = fast.next;
  }

  // Remove the slow.next Node
  if (slow.next.next) slow.next = slow.next.next;
  else slow.next = null;

  return dummy.next;
};
