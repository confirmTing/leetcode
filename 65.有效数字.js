/*
 * @lc app=leetcode.cn id=65 lang=javascript
 *
 * [65] 有效数字
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function (s) {
  /*
  * 1. 两边空格
  * 2. 开始的符号, 可能有可能没有
  * 3. 数字部分，可能的情况: "1", "1.", "1.2" ".1"
  * 3. 指数形式, e 后面可能有符号，而且后面必须跟数字， 整体可能有也可能没有
  * 4. 开头和结尾必须都要匹配
  */
  const reg = /^\s*[+-]?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?\s*$/;
  return reg.test(s);
};

// @lc code=end
