/*
 * @lc app=leetcode.cn id=322 lang=javascript
 *
 * [322] 零钱兑换
 */

// @lc code=start
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
  const cache = [];
  function dp(n) {
    let res = Infinity;
    if (n < 0) return -1;
    if (n === 0) return 0;
    if (cache[n] !== undefined) return cache[n];

    for (let i = 0; i < coins.length; i++) {
      const subProblem = dp(n - coins[i]);
      if (subProblem === -1) continue;
      res = Math.min(res, subProblem + 1);
    }
    cache[n] = res === Infinity ? -1 : res;
    return cache[n];
  }

  return dp(amount);
};

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
  // 设置较大值，便于后面求最小值
  // 换零钱，最大零钱数量也不会超过金钱数量，不考虑小数
  const queue = Array(amount + 1).fill(amount + 1);
  // base case
  queue[0] = 0;

  // 循环求 queue[i] 值
  for (let i = 1; i < amount + 1; i++) {
    // 遍历零钱列表求最小值
    for (let j = 0; j < coins.length; j++) {
      // 如果总钱数小于零钱金额，跳过
      if (i - coins[j] < 0) continue;
      // 基于 base case 求值
      // 1 + queue[i - coins[j]] 零钱列表循环完毕，必然获得最小值
      queue[i] = Math.min(queue[i], 1 + queue[i - coins[j]]);
    }
  }
  // 如果 amount 为当初设置的 amount + 1 及 无解，否则返回解
  return queue[amount] > amount ? -1 : queue[amount];
};
// @lc code=end
