const expect = require("./utils").expect;

/**
 * 给定一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？找出所有满足条件且不重复的三元组。
 * 注意：答案中不可以包含重复的三元组。
 * 时间复杂度 O(n²)
 * @param {number[]} nums
 * @returns {number[][]}
 */
var threeSum = function(nums) {
  if (nums === null || nums.length < 3) return []; // 处理边界情况
  const res = [];
  nums.sort((a, b) => a - b); // 排序
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) break; // 最小数大于0 三数之和必然无法等于0
    if (i > 0 && nums[i] === nums[i - 1]) continue; // 排除重复的元素

    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      const result = nums[left] + nums[i] + nums[right];
      if (result === 0) {
        res.push([nums[i], nums[left], nums[right]]);
        while (left < right && nums[left] === nums[left + 1]) left++; // 排除重复结果
        while (left < right && nums[right] === nums[right - 1]) right--; // 排除重复结果
        left++;
        right--;
      } else if (result < 0) {
        left++;
      } else {
        right--;
      }
    }
  }
  return res;
};

var t1 = [-1, 0, 1, 2, -1, -4];

console.log(
  expect(threeSum(t1)).isEqual([
    [-1, -1, 2],
    [-1, 0, 1]
  ])
);
