/*
 * @lc app=leetcode.cn id=242 lang=javascript
 *
 * [242] 有效的字母异位词
 */

// @lc code=start

var isAnagram = function (s, t) {
  function sort(str) {
    return str.split("").sort().join("");
  }

  return sort(s) === sort(t);
};

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  const getCode = function (s) {
    return s.charCodeAt() - "a".charCodeAt();
  };

  const map = (str) => {
    const arr = Array(26).fill(0);
    for (let i = 0; i < str.length; i++) {
      arr[getCode(str[i])] += 1;
    }
    return arr;
  };

  const s1 = map(s);
  const s2 = map(t);

  for (let i = 0; i < s1.length; i++) {
    if (s1[i] !== s2[i]) return false;
  }
  return true;
};
// @lc code=end

isAnagram("anagram", "nagaram");
