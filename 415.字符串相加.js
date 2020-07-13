/*
 * @lc app=leetcode.cn id=415 lang=javascript
 *
 * [415] 字符串相加
 */

// @lc code=start
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
  const len1 = num1.length;
  const len2 = num2.length;

  const maxLen = Math.max(len1, len2);
  if (len1 < len2) {
    while (num1.length < len2) {
      num1 = "0" + num1;
    }
  }
  if (len1 > len2) {
    while (num2.length < len1) {
      num2 = "0" + num2;
    }
  }
  let carry = 0;
  let res = "";
  for (let i = maxLen - 1; i >= 0; i--) {
    const sum = Number(num1[i]) + Number(num2[i]) + carry;
    res = (sum % 10) + res;
    carry = sum >= 10 ? 1 : 0;
  }

  return carry ? carry + res : res;
};

var addStrings = (num1, num2) => {
  let j = num1.length - 1;
  let k = num2.length - 1;
  let carry = 0;
  let res = "";

  while (j >= 0 || k >= 0 || carry === 1) {
    const x = j >= 0 ? num1[j--] : 0;
    const y = k >= 0 ? num2[k--] : 0;
    const sum = carry + +x + +y;
    res = (sum % 10) + res;
    carry = Math.floor(sum / 10);
  }
  return res;
};
// @lc code=end

// console.log(addStrings('9', '99'))
