const expect = require("./utils").expect;

/**
 * 输入一个正整数 target ，输出所有和为 target 的连续正整数序列（至少含有两个数）。
 * 序列内的数字由小到大排列，不同序列按照首个数字从小到大排列。
 */

/**
 * 解法1： 滑动窗口
 * @param {number} target
 * @return {number[][]}
 */
var findContinuousSequence = function(target) {
  let left = 1;
  let right = 1;
  let sum = 0;
  const res = [];

  while (left <= target / 2) {
    if (sum < target) {
      // 扩大窗口
      sum += right;
      right++;
    } else if (sum > target) {
      // 缩小窗口
      sum -= left;
      left++;
    } else {
      // 保存结果
      const arr = [];
      for (let i = left; i < right; i++) {
        arr[i - left] = i;
      }
      res.push(arr);
      sum -= left;
      left++;
    }
  }

  return res;
};

/**
 * 解法2： 等差数列求和公式
 * sum = (b + a) * (b - a + 1) / 2
 * @param {number} target
 * @return {number[][]}
 */
var findContinuousSequence = function(target) {
  let l = 1;
  let r = 2;
  const res = [];

  while (l < r) {
    const sum = ((l + r) * (r - l + 1)) / 2;
    if (sum < target) {
      r++;
    } else if (sum > target) {
      l++;
    } else {
      const arr = [];
      for (let i = l; i <= r; i++) {
        arr[i - l] = i;
      }
      res.push(arr);
      l++;
    }
  }

  return res;
};

expect(findContinuousSequence(9)).isEqual([
  [2, 3, 4],
  [4, 5]
]);
