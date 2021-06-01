/*
 * @lc app=leetcode.cn id=796 lang=javascript
 *
 * [796] 旋转字符串
 *
 * https://leetcode-cn.com/problems/rotate-string/description/
 *
 * algorithms
 * Easy (51.69%)
 * Likes:    127
 * Dislikes: 0
 * Total Accepted:    19.5K
 * Total Submissions: 37.8K
 * Testcase Example:  '"abcde"\n"cdeab"'
 *
 * 给定两个字符串, A 和 B。
 *
 * A 的旋转操作就是将 A 最左边的字符移动到最右边。 例如, 若 A = 'abcde'，在移动一次之后结果就是'bcdea'
 * 。如果在若干次旋转操作之后，A 能变成B，那么返回True。
 *
 *
 * 示例 1:
 * 输入: A = 'abcde', B = 'cdeab'
 * 输出: true
 *
 * 示例 2:
 * 输入: A = 'abcde', B = 'abced'
 * 输出: false
 *
 * 注意：
 *
 *
 * A 和 B 长度不超过 100。
 *
 *
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function(s, goal) {
  return s.length === goal.length && (s + s).indexOf(goal) > -1
};

/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
 var rotateString = function(s, goal) {
  function kmpSearch(s, p) {
    if (p === '') return 0
    const m = p.length;
    const n = s.length;
    const next = [-1];
    for (let i = 1, j = -1; i < m; i++) {
      while(j >= 0 && p[i] !== p[j+1]) {
        j = next[j]
      }
      if (p[i] === p[j + 1]) {
        j++
      }
      next[i] = j
    }

    for (let i = 0, j = -1; i < n; i++) {
      while (j >= 0 && s[i] !== p[j +1]) {
        j = next[j]
      }
      if (s[i] === p[j +1]) j++
      if (j === m -1) return i-m+1
    }
    return -1
  }

  return s.length === goal.length && kmpSearch(s + s, goal) > -1
};
// @lc code=end
