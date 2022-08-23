/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
const reverseList = (head) => {
  let cur = head,
    prev = null;
  while (cur) {
    const temp = cur.next;
    cur.next = prev;
    prev = cur;
    cur = temp;
  }
  return prev;
};

const reorderList = (head) => {
  if (!head) return null;

  // Get middle point of the list
  // Using slow, fast pointers
  let slow = head,
    fast = head;
  while (fast && fast.next) {
    slow = slow.next; // Jump once
    fast = fast.next.next; // Jump twice
  }

  let firstPointer = head,
    secondPointer = slow.next; // slow = middle node
  slow.next = null; // Split lists
  secondPointer = reverseList(secondPointer); // Reverse the second half

  // Merge
  while (secondPointer) {
    const temp = secondPointer.next;
    secondPointer.next = firstPointer.next;
    firstPointer.next = secondPointer;
    firstPointer = firstPointer.next.next;
    secondPointer = temp;
  }
  return head;
};
