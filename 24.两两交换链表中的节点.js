/*
 * @lc app=leetcode.cn id=24 lang=javascript
 *
 * [24] 两两交换链表中的节点
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
  if (!head || !head.next) return head;
  // n -> 2
  const n = head.next;
  // head.next = 4 -> 3
  head.next = swapPairs(head.next.next);
  // 2.next = 1
  n.next = head;
  return n;
};

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
  const dummy = {};
  dummy.next = head;
  let point = dummy;

  while (point.next && point.next.next) {
    const first = point.next;
    const second = point.next.next;
    point.next = second;
    first.next = second.next;
    second.next = first;
    point = first;
  }

  return dummy.next;
};

/**
 * 遍历
 * time Complexity O(n)
 * space Complexity O(1)
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
  // 用于保存头结点
  let dummy = {};
  dummy.next = head;
  let current = dummy;

  while(current.next && current.next.next) {
    // 1
    const first = current.next;
    // 2
    const second = current.next.next;

    // dummy.next = 2
    current.next = second;
    // 1.next = 3
    first.next = second.next;
    // 2.next = 1
    second.next = first;
    // cur = 1 -> 3
    current = first;
  }

  return dummy.next;
};
// @lc code=end

// const list = {
//   val: 1,
//   next: { val: 2, next: { val: 3, next: { val: 4, next: null } } },
// };

// swapPairs(list)
