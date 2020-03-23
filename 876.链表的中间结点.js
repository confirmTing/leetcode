/*
 * @lc app=leetcode.cn id=876 lang=javascript
 *
 * [876] 链表的中间结点
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
 * 保存数组
 * time complexity O(n)
 * space complexity O(n)
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
  const arr = [head];
  let current = head;

  while (current.next) {
    arr.push(current.next);
    current = current.next;
  }

  return arr[Math.floor(arr.length / 2)];
};

/**
 * 快慢指针法
 * time complexity O(n)
 * space complexity O(1)
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow;
};

/**
 * 单指针法
 * time complexity O(n)
 * space complexity O(1)
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
  let count = 0;
  let current = head;

  while (current) {
    count++;
    current = current.next;
  }

  let k = 0;
  current = head;

  while (k < Math.floor(count / 2)) {
    k++;
    current = current.next;
  }
  return current;
};
// @lc code=end
