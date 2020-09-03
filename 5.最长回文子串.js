/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start

function isPalindrome(s) {
  let i = 0;
  let j = s.length - 1;
  while (i < j) {
    if (s[i] !== s[j]) return false;
    i++;
    j--;
  }
  return true;
}
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  if (!s) return "";
  const len = s.length;
  let max = 0;
  let ans = "";
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j <= len; j++) {
      const temp = s.substring(i, j);
      if (isPalindrome(temp) && temp.length > max) {
        max = temp.length;
        ans = temp;
      }
    }
  }
  return ans;
};

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  let n = s.length;
  let res = '';
  let dp = Array.from(new Array(n), () => new Array(n).fill(0));
  for (let i = n - 1; i >= 0; i--) {
    for (let j = i; j < n; j++) {
      dp[i][j] = s[i] == s[j] && (j - i < 2 || dp[i + 1][j - 1]);
      if (dp[i][j] && j - i + 1 > res.length) {
        res = s.substring(i, j + 1);
      }
    }
  }
  return res;
};

// @lc code=end
