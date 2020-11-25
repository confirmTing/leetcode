/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let ans = 0;
  let left = 0;
  let right = height.length - 1;

  while (left < right) {
    const minHeight =
      height[left] < height[right] ? height[left++] : height[right--];
    const area = minHeight * (right - left + 1);
    ans = Math.max(ans, area);
  }
  return ans;
};

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let max = 0;
  for (let i = 0, j = height.length - 1; i < j;) {
    const minHeight = height[i] < height[j] ? height[i++] : height[j--];
    const area = minHeight * (j - i + 1);
    max = Math.max(max, area);
  }
  return max;
};

// @lc code=end
