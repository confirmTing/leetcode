/*
 * @lc app=leetcode.cn id=167 lang=javascript
 *
 * [167] 两数之和 II - 输入有序数组
 */

// @lc code=start
/**
 * brute force
 * time complexity O(n²)
 * space complexity O(1)
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
  for (let i = 0; i < numbers.length; i++) {
    let j = i + 1;
    while (numbers[j] <= target - numbers[i]) {
      if (numbers[i] + numbers[j] === target) {
        return [i + 1, j + 1];
      }
      j++;
    }
  }
  return [];
};

/**
 * 双指针
 * time complexity O(n)
 * space complexity O(1)
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
  let i = 0;
  let j = numbers.length - 1;

  while (i < j) {
    const sum = numbers[i] + numbers[j];
    if (sum < target) {
      i++;
    } else if (sum > target) {
      j--;
    } else {
      return [i + 1, j + 1];
    }
  }
};
// @lc code=end
