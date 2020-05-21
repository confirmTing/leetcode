/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let length;
  do {
    length = s.length;
    s = s.replace("()", "").replace("[]", "").replace("{}", "");
  } while (s.length !== length);
  return s.length === 0;
};

/**
 * time complexity O(n)
 * space complexity O(1)
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  // 栈，用于保存左括号
  const stack = [];
  // 避免复杂的判断
  const map = { ")": "(", "]": "[", "}": "{" };
  for (let i = 0; i < s.length; i++) {
    if (!(s[i] in map)) {
      stack.unshift(s[i]);
    } else if (stack.length === 0 || map[s[i]] !== stack.shift()) {
      return false;
    }
  }
  return stack.length === 0;
};
// @lc code=end
