/*
 * @lc app=leetcode.cn id=88 lang=javascript
 *
 * [88] 合并两个有序数组
 */

// @lc code=start
/**
 * time complexity O(m+n)
 * space complexity O(1)
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  let pa = m - 1;
  let pb = n - 1;
  let current = m + n - 1;

  while (pa >= 0 || pb >= 0) {
    if (pa < 0) {
      nums1[current--] = nums2[pb--];
    } else if (pb < 0) {
      nums1[current--] = nums1[pa--];
    } else if (nums1[pa] > nums2[pb]) {
      nums1[current--] = nums1[pa--];
    } else {
      nums1[current--] = nums2[pb--];
    }
  }
};

/**
 * time complexity O(m + n)
 * space complexity O(1)
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  let pa = m - 1;
  let pb = n - 1;
  let current = m + n - 1;

  while (pa >= 0 && pb >= 0) {
    nums1[current--] = nums1[pa] > nums2[pb] ? nums1[pa--] : nums2[pb--];
  }

  while (pb >= 0) {
    nums1[current--] = nums2[pb--];
  }
};

/**
 * time complexity O((n+m)log(n+m))
 * space complexity O(1)
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  for (let i = 0; i < n; i++) {
    nums1[m++] = nums2[i];
  }
  nums1.sort((a, b) => a - b);
};

/**
 * time complexity O((n+m)log(n+m))
 * space complexity O(1)
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  let pa = m - 1;
  let pb = n - 1;
  let current = m + n - 1;

  while (pb >= 0) {
    nums1[current--] =
      pa >= 0 && nums1[pa] > nums2[pb] ? nums1[pa--] : nums2[pb--];
  }
};

// @lc code=end
