/*
 * @lc app=leetcode.cn id=628 lang=javascript
 *
 * [628] 三个数的最大乘积
 */

// @lc code=start
/**
 * 排序法
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function (nums) {
  // 排序
  nums.sort((a, b) => a - b);
  const len = nums.length;

  // 如果有负数，用最小的两个负数和最大的正数相乘
  // 三个正数相乘，以上两种情况取最大值
  return Math.max(
    nums[0] * nums[1] * nums[len - 1],
    nums[len - 1] * nums[len - 2] * nums[len - 3]
  );
};

/**
 * 求最大值的思路同上，这里通过一次循环找出最大的三个数，和最小的两个数
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function (nums) {
  // 全部为负数的情况，故把初始值设置为最小值
  let max = Array(3).fill(-Infinity);
  let min = Array(2).fill(0);

  nums.forEach((num) => {
    if (num > max[2]) {
      max = [max[1], max[2], num];
    } else if (num > max[1]) {
      max = [max[1], num, max[2]];
    } else if (num > max[0]) {
      max = [num, max[1], max[2]]
    }

    if (num < min[0]) {
      min = [num, min[0]]
    } else if (num < min[1]) {
      min = [min[0], num]
    }
  });

  return Math.max(min[0] * min[1] * max[2], max[0] * max[1] * max[2]);
};
// @lc code=end
