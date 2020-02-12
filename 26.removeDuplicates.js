const expect = require("./utils").expect;
/**
 *
 * 给定一个排序数组，你需要在原地删除重复出现的元素，使得每个元素只出现一次，返回移除后数组的新长度。

  不要使用额外的数组空间，你必须在原地修改输入数组并在使用 O(1) 额外空间的条件下完成。

  example1:
  给定数组 nums = [1,1,2],
  函数应该返回新的长度 2, 并且原数组 nums 的前两个元素被修改为 1, 2。
  你不需要考虑数组中超出新长度后面的元素。
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  let i = 0;
  for (let j = 0; j < nums.length; j++) {
    if (nums[j] !== nums[i]) {
      i++;
      // 优化部分，考虑连续数组的情况 [1,2,3,4...]
      if (j - i > 0) {
        nums[i] = nums[j];
      }
    }
  }
};

const nums1 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
const nums2 = [1, 2, 3, 4, 5, 6, 7];
const nums3 = [1, 2, 2, 3, 4, 5, 6, 7];

removeDuplicates(nums1);
removeDuplicates(nums2);
removeDuplicates(nums3);
console.log(expect(nums1.slice(0, 5)).isEqual([0, 1, 2, 3, 4]));
console.log(expect(nums2).isEqual([1, 2, 3, 4, 5, 6, 7]));
console.log(expect(nums3.slice(0, 7)).isEqual([1, 2, 3, 4, 5, 6, 7]));
