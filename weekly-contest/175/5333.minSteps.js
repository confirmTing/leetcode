/**
 * 给你两个长度相等的字符串 s 和 t。每一个步骤中，你可以选择将 t 中的 任一字符 替换为 另一个字符。
 * 返回使 t 成为 s 的字母异位词的最小步骤数。
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var minSteps = function(s, t) {
  var map = {};
  var len = s.length;
  for (let i = 0; i < len; i++) {
    map[s[i]] = map[s[i]] !== undefined ? map[s[i]] + 1 : 1;
  }
  for (let j = 0; j < t.length; j++) {
    const number = map[t[j]];
    if (number && number > 0) {
      map[t[j]] -= 1;
      len -= 1;
    }
  }
  return len;
};

var t1s = "bab", t1t = "aba";
var t2s = "leetcode", t2t = "practice";
var t3s = "anagram", t3t = "mangaar";
var t4s = "friend", t4t = "family";

console.log(minSteps(t1s, t1t) === 1)
console.log(minSteps(t2s, t2t) === 5)
console.log(minSteps(t3s, t3t) === 0)
console.log(minSteps(t4s, t4t) === 4)
