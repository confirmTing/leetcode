/*
 * @lc app=leetcode.cn id=98 lang=javascript
 *
 * [98] 验证二叉搜索树
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
var isValidBST = function (root) {
  function helper(node, min, max) {
    if (!node) return true;

    if (node.val <= min || node.val >= max) return false;

    return (
      helper(node.left, min, node.val) && helper(node.right, node.val, max)
    );
  }

  return helper(root, -Infinity, Infinity);
};

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function (root) {
  const stack = [];
  let inOrder = -Infinity;

  while (stack.length || root !== null) {
    while (root) {
      stack.push(root);
      root = root.left;
    }
    root = stack.pop();
    if (root.val <= inOrder) return false;
    inOrder = root.val;
    root = root.right;
  }
  return true;
};
// @lc code=end
