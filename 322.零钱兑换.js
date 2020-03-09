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
  const queue = Array(amount + 1).fill(amount + 1);
  queue[0] = 0;

  for (let i = 1; i < amount + 1; i++) {
    for (let j = 0; j < coins.length; j++) {
      if (i - coins[j] < 0) continue;
      queue[i] = Math.min(queue[i], 1 + queue[i - coins[j]]);
    }
  }

  return queue[amount] > amount ? -1 : queue[amount];
};
// @lc code=end
