/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function (val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {} l1
 * @param {} l2
 * @return {}
 */
var mergeTwoLists = function (l1, l2) {
  if (l1 === null) return l2;
  if (l2 === null) return l1;
  if (l1.val < l2.val) {
    l1.next = mergeTwoLists(l1.next, l2);
    return l1;
  }
  l2.next = mergeTwoLists(l1, l2.next);
  return l2;
};

/**
 * @param {} l1
 * @param {} l2
 * @return {}
 */
var mergeTwoLists = function (l1, l2) {
  const preHead = {};
  let prev = preHead;

  while (l1 && l2) {
    if (l1.val <= l2.val) {
      prev.next = l1;
      l1 = l1.next;
    } else {
      prev.next = l2;
      l2 = l2.next;
    }
    prev = prev.next;
  }

  prev.next = l1 === null ? l2 : l1;
  return preHead.next;
};

// @lc code=end

// const list1 = {
//   val: 1,
//   next: { val: 2, next: { val: 4, next: null } },
// };

// const list2 = {
//   val: 1,
//   next: { val: 3, next: { val: 4, next: null } },
// };

// mergeTwoLists(list1, list2);
