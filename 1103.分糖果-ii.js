/*
 * @lc app=leetcode.cn id=1103 lang=javascript
 *
 * [1103] 分糖果 II
 */

// @lc code=start
/**
 * time complexity O(max(candies ** 0.5, n))
 * space complexity O(1)
 * @param {number} candies
 * @param {number} num_people
 * @return {number[]}
 */
var distributeCandies = function(candies, num_people) {
  const arr = Array(num_people).fill(0);
  let count = 0;
  while (candies > 0) {
    arr[count % num_people] += Math.min(candies, ++count);
    candies -= count;
  }
  return arr;
};
// @lc code=end
