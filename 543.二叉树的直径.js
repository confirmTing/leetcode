/*
 * @lc app=leetcode.cn id=543 lang=javascript
 *
 * [543] 二叉树的直径
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
 * @return {number}
 */
var diameterOfBinaryTree = function(root) {
  var res = 0;

  const depth = function(node) {
    if (!node) return 0; // 空节点返回 0
    const l = depth(node.left); // 获取左节点最大直径
    const r = depth(node.right); // 获取右节点最大直径
    res = Math.max(res, l + r);
    return Math.max(l, r) + 1; // 只要左边或者右边的最大深度
  };
  depth(root);
  return res;
};
// @lc code=end
