/*
 * @lc app=leetcode.cn id=198 lang=javascript
 *
 * [198] 打家劫舍
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  let prevMax = 0; // 前一个较大值
  let currentMax = 0; // 当前最大值

  nums.forEach(x => {
    const temp = currentMax;
    // 计算当前最大值，前一个最大值加上当前值，跟当前最大值进行对比
    currentMax = Math.max(prevMax + x, currentMax);
    prevMax = temp;
  })
  return currentMax;
};
// @lc code=end
