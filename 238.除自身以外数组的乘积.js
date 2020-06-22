/*
 * @lc app=leetcode.cn id=238 lang=javascript
 *
 * [238] 除自身以外数组的乘积
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  let sum = 1;
  let zeroIndex;

  nums.forEach((num, index) => {
    if (num === 0) {
      zeroIndex = zeroIndex !== undefined ? -1 : index;
    } else {
      sum *= num;
    }
  });

  if (zeroIndex === -1) {
    return Array(nums.length).fill(0);
  }

  if (zeroIndex !== undefined) {
    let result = Array(nums.length).fill(0);
    result[zeroIndex] = sum;
    return result;
  }
  return nums.map((num) => sum / num);
};

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  const len = nums.length;
  const L = Array(len);
  const R = Array(len);
  L[0] = 1;
  R[len - 1] = 1;

  for (let i = 1; i < len; i++) {
    L[i] = L[i - 1] * nums[i - 1];
  }

  for (let i = len - 2; i >= 0; i--) {
    R[i] = R[i + 1] * nums[i + 1];
  }

  const answer = Array(len);
  for (let i = 0; i < len; i++) {
    answer[i] = L[i] * R[i];
  }

  return answer;
};

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  const len = nums.length;
  const answer = Array(len);
  answer[0] = 1;

  for (let i = 1; i < len; i++) {
    answer[i] = answer[i - 1] * nums[i - 1];
  }

  let R = 1;
  for (let i = len - 1; i >= 0; i--) {
    answer[i] = answer[i] * R;
    R *= nums[i];
  }
  return answer;
};

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  const len = nums.length;
  const answer = [1];

  for (let i = 1; i < len; i++) {
    answer[i] = answer[i - 1] * nums[i - 1];
  }

  let R = 1;
  for (let i = len - 1; i >= 0; i--) {
    answer[i] = answer[i] * R;
    R *= nums[i];
  }
  return answer;
};
// @lc code=end
