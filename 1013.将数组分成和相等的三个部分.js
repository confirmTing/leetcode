/*
 * @lc app=leetcode.cn id=1013 lang=javascript
 * 给你一个整数数组 A，只有可以将其划分为三个和相等的非空部分时才返回 true，否则返回 false。
 * [1013] 将数组分成和相等的三个部分
 */

// @lc code=start
/**
 * time complexity O(n)
 * space complexity O(1)
 * @param {number[]} A
 * @return {boolean}
 */
var canThreePartsEqualSum = function(A) {
  const sum = A.reduce((prev, item) => prev + item, 0);
  if (sum % 3 !== 0) return false; // 不能被3整除返回 false
  let len = A.length;
  let i = 0;
  let cur = 0;
  let target = sum / 3; // 平均数

  // 找到前面相等的部分
  while (i < len) {
    cur += A[i];
    if (cur === target) break;
    i++;
  }
  // 遍历整个数组未找到，返回 false
  if (cur !== target) return false;

  // 找中间相等的部分
  let j = i + 1;
  cur = 0;
  // j < len - 1; 最后一部分不能为空
  while (j < len - 1) {
    cur += A[j];
    // 找到中间相等的值时，剩下的自然也是相等的 返回 true
    if (cur === target) return true;
    j++;
  }
  // 未找到 返回 false
  return false;
};
// @lc code=end
