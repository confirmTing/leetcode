/*
 * @lc app=leetcode.cn id=617 lang=javascript
 *
 * [617] 合并二叉树
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
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */
var mergeTrees = function(t1, t2) {
  if (!t1) return t2;
  if (!t2) return t1;
  console.log(t1.val)
  t1.val = (t1.val || 0) + t2.val;
  t1.left = mergeTrees(t1.left, t2.left);
  t1.right = mergeTrees(t1.right, t2.right);
  return t1;
};

/**
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */
var mergeTrees = function(t1, t2) {
  if (!t1) return t2;
  if (!t2) return t1;
  const queue = [t1, t2];

  while (queue.length > 0) {
    const r1 = queue.shift();
    const r2 = queue.shift();
    r1.val += r2.val;
    if (r1.left !== null && r2.left !== null) {
      queue.push(r1.left, r2.left);
    } else if (r1.left === null) {
      r1.left = r2.left;
    }

    if (r1.right !== null && r2.right !== null) {
      queue.push(r1.right, r2.right);
    } else if (r1.right === null) {
      r1.right = r2.right;
    }
  }

  return t1;
}
// @lc code=end
