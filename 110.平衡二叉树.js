/*
 * @lc app=leetcode.cn id=110 lang=javascript
 *
 * [110] 平衡二叉树
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
var isBalanced = function (root) {
  if (!root) return true;
  const height = (node) => {
    if (!node) return -1;

    return Math.max(height(node.left), height(node.right)) + 1;
  };

  return (
    Math.abs(height(root.left) - height(root.right)) < 2 &&
    isBalanced(root.left) &&
    isBalanced(root.right)
  );
};

class TreeInfo {
  constructor(height, balanced) {
    this.height = height;
    this.balanced = balanced;
  }
}

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function (root) {
  function balancedHelper(node) {
    if (!node) {
      return new TreeInfo(-1, true);
    }

    const left = balancedHelper(node.left);
    if (!left.balanced) {
      return new TreeInfo(-1, false);
    }

    const right = balancedHelper(node.right);
    if (!right.balanced) {
      return new TreeInfo(-1, false);
    }

    if (Math.abs(left.height - right.height) < 2) {
      return new TreeInfo(Math.max(left.height, right.height) + 1, true);
    }

    return new TreeInfo(-1, false);
  }

  return balancedHelper(root).balanced;
};
// @lc code=end
