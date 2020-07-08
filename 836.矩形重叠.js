/*
 * @lc app=leetcode.cn id=836 lang=javascript
 *
 * [836] 矩形重叠
 */

// @lc code=start
/**
 * 可行域
 * @param {number[]} rec1
 * @param {number[]} rec2
 * @return {boolean}
 */
var isRectangleOverlap = function (rec1, rec2) {
  // 取左边的最大值
  const x1 = Math.max(rec1[0], rec2[0]);
  // 取上边的最大值
  const y1 = Math.max(rec1[1], rec2[1]);

  // 取右边的最小值
  const x2 = Math.min(rec1[2], rec2[2]);
  // 取下边最小是
  const y2 = Math.min(rec1[3], rec2[3]);

  // 当且仅当 左边最大值小于右边最小值
  // 且上边最大值小于下边最小值时
  // 方有重合
  return x1 < x2 && y1 < y2;
};

/**
 * 区间重叠问题
 * @param {number[]} rec1
 * @param {number[]} rec2
 * @return {boolean}
 */
var isRectangleOverlap = function (rec1, rec2) {
  // 对矩形进行压平，投影
  // 当 x1，x2 没有交集的时候肯定是没有重合区域的
  // 对其进行取反操作
  // 当且仅当x,y 轴都有重合区域的时候返回 true
  const boolX = !(rec1[2] <= rec2[0] || rec2[2] <= rec1[0]);
  const boolY = !(rec1[3] <= rec2[1] || rec2[3] <= rec1[1]);

  return boolX && boolY;
};

// @lc code=end
