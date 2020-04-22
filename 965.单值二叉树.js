/*
 * @lc app=leetcode.cn id=965 lang=javascript
 *
 * [965] 单值二叉树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isUnivalTree = function (root) {
  if (!root) return true;
  const left =
    root.left === null ||
    (root.val === root.left.val && isUnivalTree(root.left));
  const right =
    root.right === null ||
    (root.val === root.right.val && isUnivalTree(root.right));

  return left && right;
};

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isUnivalTree = function (root) {
  const queue = [root];

  while (queue.length > 0) {
    const node = queue.shift();
    if (node === null) continue;
    if (node.val !== root.val) return false;
    queue.push(node.left, node.right);
  }
  return true;
}
// @lc code=end
