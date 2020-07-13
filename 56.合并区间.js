/*
 * @lc app=leetcode.cn id=56 lang=javascript
 *
 * [56] 合并区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  const res = [];
  let index = -1;
  intervals.forEach((item) => {
    if (index === -1 || item[0] > res[index][1]) {
      res[++index] = item;
      return;
    }
    res[index][1] = Math.max(item[1], res[index][1]);
  });
  return res;
};
// @lc code=end
