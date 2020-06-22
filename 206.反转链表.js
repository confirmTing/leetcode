/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
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
var reverseList = function (head) {
  let prev = null;
  let current = head;

  while (current !== null) {
    const next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }

  return prev;
};

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  if (head === null || head.next === null) return head;
  const p = reverseList(head.next);

  // 2 -> 3 . next = 2
  head.next.next = head;
  // 防止链表循环 2 -> 3 -> 2
  head.next = null;
  // 返回最后一个元素
  return p;
}
// @lc code=end

// const linkList = {
//   val: 1,
//   next: { val: 2, next: { val: 3, next: null } },
// };

// reverseList(linkList)
