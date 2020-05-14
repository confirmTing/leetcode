/*
 * @lc app=leetcode.cn id=199 lang=javascript
 *
 * [199] 二叉树的右视图
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
 * bfs 广度优先
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function(root) {
  const queue = [root];
  const res = [];
  if (root === null) return res;

  while(queue.length > 0) {
    const len = queue.length;

    for (let i = 0; i < len; i++) {
      const node = queue.shift();
      if (node.left !== null) {
        queue.push(node.left);
      }

      if (node.right !== null) {
        queue.push(node.right);
      }

      if (i === len -1) {
        res.push(node.val)
      }
    }
  }

  return res;
};

/**
 * dfs 深度优先
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function(root) {
  const res = [];

  const dfs = (node, depth) => {
    if (!node) return;

    if (depth === res.length) {
      res.push(node.val)
    }
    depth += 1;
    dfs(node.right, depth);
    dfs(node.left, depth);
  }

  dfs(root, 0);
  return res;
}
// @lc code=end
