/*
 * @lc app=leetcode.cn id=912 lang=javascript
 *
 * [912] 排序数组
 */

// @lc code=start

function swap(arr, i, j) {
  const t = arr[i];
  arr[i] = arr[j];
  arr[j] = t;
}

/**
 * 选择排序
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (nums) {
  const len = nums.length;
  for (let i = 0; i < len; i++) {
    let min = i;
    for (let j = i + 1; j < len; j++) {
      if (nums[j] < nums[min]) {
        min = j;
      }
    }
    swap(nums, i, min);
  }
  return nums;
};

/**
 * 冒泡排序
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (nums) {
  const len = nums.length;
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      if (nums[i] > nums[j]) {
        swap(nums, i, j);
      }
    }
  }
  return nums;
};

/**
 * 插入排序
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (nums) {
  const len = nums.length;
  for (let i = 1; i < len; i++) {
    const temp = nums[i];

    let j = i;
    while (j > 0 && nums[j - 1] > temp) {
      nums[j] = nums[j - 1];
      j--;
    }
    nums[j] = temp;
  }
  return nums;
};
// @lc code=end
