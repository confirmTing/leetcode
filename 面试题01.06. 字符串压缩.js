const expect = require("./utils").expect;

/**
 * 字符串压缩。利用字符重复出现的次数，编写一种方法，实现基本的字符串压缩功能。
 * 比如，字符串aabcccccaaa会变为a2b1c5a3。若“压缩”后的字符串没有变短，
 * 则返回原先的字符串。你可以假设字符串中只包含大小写英文字母（a至z）。
 */

/**
 * @param {string} S
 * @return {string}
 */
var compressString = function(S) {
  let str = "";
  let count = 0;
  let ch = S[0];

  for (let i = 0; i < S.length; i++) {
    if (ch === S[i]) {
      count++;
    } else {
      str += ch + count.toString();
      ch = S[i];
      count = 1;
    }
  }

  str += ch + count.toString();

  return str.length >= S.length ? S : str;
};

expect(compressString("aabcccccaa")).isEqual("a2b1c5a2");
expect(compressString("aa")).isEqual("aa");
expect(compressString("abbccd")).isEqual("abbccd");
