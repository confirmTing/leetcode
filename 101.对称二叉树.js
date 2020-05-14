/*
 * @lc app=leetcode.cn id=101 lang=javascript
 *
 * [101] 对称二叉树
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
var isSymmetric = function (root) {
  const isMirror = (t1, t2) => {
    if (t1 === null && t2 === null) return true;
    if (t1 === null || t2 === null) return false;

    return (
      t1.val === t2.val &&
      isMirror(t1.left, t2.right) &&
      isMirror(t1.right, t2.left)
    );
  };

  return isMirror(root, root);
};

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
  const queue = [root, root];

  while (queue.length > 0) {
    const t1 = queue.shift();
    const t2 = queue.shift();

    if (t1 === null && t2 === null) continue;
    if (t1 === null || t2 === null) return false;
    if (t1.val !== t2.val) return false;
    queue.push(t1.left);
    queue.push(t2.right);
    queue.push(t1.right);
    queue.push(t2.left);
  }

  return true;
}
// @lc code=end
