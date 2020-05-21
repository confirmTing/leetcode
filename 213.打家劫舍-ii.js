/*
 * @lc app=leetcode.cn id=213 lang=javascript
 *
 * [213] 打家劫舍 II
 */

// @lc code=start
/**
 * time complexity O(n)
 * space complexity O(1)
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  if (!nums || nums.length < 1) return 0;
  if (nums.length < 3) return Math.max(...nums);

  function myRob(nums) {
    let preMax = 0;
    let currentMax = 0;

    nums.forEach((num) => {
      const temp = currentMax;
      currentMax = Math.max(preMax + num, currentMax);
      preMax = temp;
    });
    return currentMax;
  }
  // 打家窃舍拆分为两个单排问题
  // 获取不打劫第一家的最大值
  const max1 = myRob(nums.slice(1));
  // 获取不打劫最后一家的最大值
  const max2 = myRob(nums.slice(0, nums.length - 1));

  // 取上面两个最大值的最大值
  return Math.max(max1, max2);
};
// @lc code=end
