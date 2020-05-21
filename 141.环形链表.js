/*
 * @lc app=leetcode.cn id=141 lang=javascript
 *
 * [141] 环形链表
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
 * time complexity O(n)
 * space complexity O(n)
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    let current = head;
    let set = new Set([head]);

    while (current) {
      current = current.next;
      if (set.has(current)) return true;
      set.add(current);
    }

    return false;
};

/**
 * time complexity O(n)
 * space complexity O(1)
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
  if (!head || !head.next) return false;

  let slow = head;
  let fast = head.next;

  while(slow !== fast) {
    if (!fast || !fast.next) return false;

    slow = slow.next;
    fast = fast.next.next;
  }

  return true;
}
// @lc code=end
