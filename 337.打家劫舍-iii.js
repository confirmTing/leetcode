/*
 * @lc app=leetcode.cn id=337 lang=javascript
 *
 * [337] 打家劫舍 III
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
 * 递归，比较爷爷+四个孙子的钱 和 两个爸爸的钱哪个多
 * @param {TreeNode} root
 * @return {number}
 */
var rob = function (root) {
  if (!root) return 0;

  let money = 0;

  if (root.left) {
    money += rob(root.left.left) + rob(root.left.right);
  }

  if (root.right) {
    money += rob(root.right.left) + rob(root.right.right);
  }

  return Math.max(money + root.val, rob(root.left) + rob(root.right));
};

/**
 * 利用缓存
 * @param {TreeNode} root
 * @return {number}
 */
var rob = function (root) {
  if (!root) return 0;

  let money = 0;

  rob.map = rob.map || new WeakMap();

  if (rob.map.get(root)) return rob.map.get(root);

  if (root.left) {
    money += rob(root.left.left) + rob(root.left.right);
  }

  if (root.right) {
    money += rob(root.right.left) + rob(root.right.right);
  }
  const res = Math.max(money + root.val, rob(root.left) + rob(root.right));
  rob.map.set(root, res);
  return res;
};

/**
 *
 * @param {TreeNode} root
 * @return {number}
 */
var rob = function (root) {
  const robExclude = (node) => {
    if (!node) return 0;

    return rob(node.left) + rob(node.right);
  };

  const robInclude = (node) => {
    if (!node) return 0;
    return robExclude(node.left) + robExclude(node.right) + node.val;
  };

  if (!root) return 0;

  return Math.max(robInclude(root), robExclude(root));
};

/**
 *
 * @param {TreeNode} root
 * @return {number}
 */
var rob = function (root) {
  const robSub = (node) => {
    // the first denotes root not robbed
    // the second denotes root is robbed
    const res = [0, 0];
    if (!node) return res;

    const left = robSub(node.left);
    const right = robSub(node.right);

    // 不偷父节点，随意偷子节点或者以下节点
    res[0] = Math.max(left[0], left[1]) + Math.max(right[0], right[1]);
    // 选择偷父节点，只能偷左、右子树的不偷父节点的值
    res[1] = node.val + left[0] + right[0];
    return res;
  };

  const res = robSub(root);

  return Math.max(...res);
};

/**
 * 递归，比较爷爷+四个孙子的钱 和 两个爸爸的钱哪个多
 * @param {TreeNode} root
 * @return {number}
 */
var rob = function (root) {
  const robSub = node => {
    const res=  [0, 0];

    if (!node) return res;

    const left = robSub(node.left);
    const right = robSub(node.right);

    res[0] = Math.max(left[0], left[1]) + Math.max(right[0], right[1]);
    res[1] = node.val + left[0] + right[0];
    return res;
  }

  return Math.max(...robSub(root));
};

// @lc code=end
