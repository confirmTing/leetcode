/**
 * 解法1 时间复杂度 O(n²)
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var towSum = function(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
  return [];
};

/**
 * 时间复杂度O(n), 空间复杂度 O(n)
 * @param {number[]} nums
 * @param {number} target
 */
function towSumBetter(nums, target) {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    var another_num = target - nums[i];
    if (map.get(another_num) !== undefined) {
      return [map.get(another_num), i];
    }
    map.set(nums[i], i);
  }
  return [];
}

const test1Nums = [2, 7, 11, 15];
const test1Target = 9;
const test2Nums = [3, 3, 2];
const test2Target = 6;

console.log(towSum(test1Nums, test1Target).toString() === "0,1");
console.log(towSum(test2Nums, test2Target).toString() === "0,1");

console.log(towSumBetter(test1Nums, test1Target).toString() === "0,1");
console.log(towSumBetter(test2Nums, test2Target).toString() === "0,1");
