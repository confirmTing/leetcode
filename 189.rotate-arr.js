/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
  let temp;
  let previous;
  for (let i = 0; i < k; i++) {
    previous = nums[nums.length - 1];

    for (let j = 0; j < nums.length; j++) {
      temp = nums[j];
      nums[j] = previous;
      previous = temp;
    }
  }
};

/**
 * 增加一个数组，循环时已排好
 * 空间复杂度O(n) 时间复杂度 O(n)
 */
var rotate = function(nums, k) {
  var arr = [];
  for (let i = 0; i < nums.length; i++) {
    arr[(i + k) % nums.length] = nums[i];
  }
  for (let i = 0; i < nums.length; i++) {
    nums[i] = arr[i];
  }
};

/**
 * 直接将数字移动到最终的位置上去
 * 时间复杂度 O(n)
 * 空间复杂度 O(1)
 */
var rotate = function(nums, k) {
  k = k % nums.length;
  let count = 0;

  for (let i = 0; count < nums.length; i++) {
    let current = i;
    let prev = nums[i];

    do {
      let next = (current + k) % nums.length;
      let temp = nums[next];
      nums[next] = prev;
      prev = temp;
      current = next;
      count++;
    } while (i != current);
  }
};

/**
 * 解法4，利用反转实现
 * 时间复杂度 O(n)
 * 空间复杂度 O(1)
 */
function reverse(nums, start, end) {
  while (start < end) {
    const temp = nums[end];
    nums[end] = nums[start];
    nums[start] = temp;
    start++;
    end--;
  }
}

var rotate = function(nums, k) {
  k = k % nums.length;
  reverse(nums, 0, nums.length - 1);
  reverse(nums, 0, k - 1);
  reverse(nums, k, nums.length - 1);
};
