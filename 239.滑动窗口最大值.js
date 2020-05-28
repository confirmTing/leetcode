/*
 * @lc app=leetcode.cn id=239 lang=javascript
 *
 * [239] 滑动窗口最大值
 */

// @lc code=start

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  const res = [];
  const window = [];

  nums.forEach((num, i) => {
    window.push(num);
    if (i >= k - 1) {
      res.push(Math.max(...window));
      window.shift();
    }
  });

  return res;
};

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  if (!nums || !nums.length) return [];
  const res = [];
  const dequeue = [];

  nums.forEach((num, index) => {
    // 删除左侧超出窗口的元素
    if (index >= k && dequeue[0] <= index - k) {
      dequeue.shift();
    }

    // 如果新加进来的数字比之前的数字大，就把之前的数字干掉
    while (dequeue.length > 0 && nums[dequeue[dequeue.length - 1]] <= num) {
      dequeue.pop();
    }

    dequeue.push(index);

    // 当窗口滑动到指定位置后开始保存最大值
    if (index >= k - 1) {
      res.push(nums[dequeue[0]]);
    }
  });

  return res;
};

// @lc code=end

// const data = [
//   1, 3, -1, -3,
//   5, 3,  6,  7
// ];

// maxSlidingWindow(data, 3)
