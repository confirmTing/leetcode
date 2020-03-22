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
var isRectangleOverlap = function(rec1, rec2) {
  const x1 = Math.max(rec1[0], rec2[0]);
  const y1 = Math.max(rec1[1], rec2[1]);

  const x2 = Math.min(rec1[2], rec2[2]);
  const y2 = Math.min(rec1[3], rec2[3]);

  return x1 < x2 && y1 < y2;
};

/**
 * 区间重叠问题
 * @param {number[]} rec1
 * @param {number[]} rec2
 * @return {boolean}
 */
var isRectangleOverlap = function(rec1, rec2) {
  const boolX = !(rec1[2] <= rec2[0] || rec2[2] <= rec1[0]);
  const boolY = !(rec1[3] <= rec2[1] || rec2[3] <= rec1[1]);

  return boolX && boolY;
};

// @lc code=end
