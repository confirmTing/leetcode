/*
 * @lc app=leetcode.cn id=563 lang=javascript
 *
 * [563] 二叉树的坡度
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
var findTilt = function (root) {
  if (root === null) return 0;
  let res = 0;

  const tilt = (node) => {
    if (node === null) return 0;
    const left = tilt(node.left);
    const right = tilt(node.right);
    res += Math.abs(left - right);
    return node.val + left + right;
  };
  tilt(root);
  return res;
};

// @lc code=end
