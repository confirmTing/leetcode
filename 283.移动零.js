/*
 * @lc app=leetcode.cn id=283 lang=javascript
 *
 * [283] 移动零
 */

// @lc code=start
/**
 * 一开始的 left 和 right 都为0
 * 当 nums[right] 不为0时，我们讲 left 和 right 交换
 * 然后 left 指针 +1， left 指针及之前的都是非 0 值
 * 然后 right 指针 + 1，如果 right 小于 len 则继续判断
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  if (!nums) return nums;
  const len = nums.length;
  let l = 0,
    r = 0;
  while (r < len) {
    if (nums[r]) {
      const t = nums[r];
      nums[r] = nums[l];
      nums[l] = t;
      l++;
    }
    r++;
  }
  return nums;
};

/**
 * 将非0元素往前挪，记录下标，然后将下标之后的元素设置为0
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let index = 0;
  for (const num of nums) {
    if (num !== 0) {
      nums[index++] = num;
    }
  }
  while (index < nums.length) {
    nums[index++] = 0;
  }
  return nums;
};
// @lc code=end
