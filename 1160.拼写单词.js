/*
 * @lc app=leetcode.cn id=1160 lang=javascript
 *
 * [1160] 拼写单词
 */

// @lc code=start
/**
 * 解法1 利用 map 存储数据后进行对比
 * time complexity O(n)
 * space complexity O(S) S 为字符集大小
 *
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function (words, chars) {
  function getCharCount(map, chars) {
    for (let i = 0; i < chars.length; i++) {
      map[chars[i]] = (map[chars[i]] || 0) + 1;
    }
    return map;
  }

  const mapC = getCharCount({}, chars);
  let count = 0;

  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    let ans = true;
    let mapW = getCharCount({}, word);

    for (let j = 0; j < word.length; j++) {
      if (!mapC[word[j]] || mapC[word[j]] < mapW[word[j]]) {
        ans = false;
        break;
      }
    }
    if (ans) {
      count += word.length;
    }
  }

  return count;
};

/**
 * 解法2 利用 ASCII 码作为下标存储数据，进行对比
 * time complexity O(n)
 * space complexity O(S) S 为字符集大小
 *
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function (words, chars) {
  const codeA = "a".charCodeAt();
  function getCharsCount(chars) {
    const arr = [];
    for (let i = 0; i < chars.length; i++) {
      const code = chars[i].charCodeAt();
      arr[code - codeA] = (arr[code - codeA] || 0) + 1;
    }
    return arr;
  }

  let arrChars = getCharsCount(chars);
  let count = 0;

  words.forEach((word) => {
    const arrWord = getCharsCount(word);

    let ans = true;

    for (let j = 0; j < word.length; j++) {
      const code = word[j].charCodeAt() - codeA;
      if (!arrChars[code] || arrChars[code] < arrWord[code]) {
        ans = false;
        break;
      }
    }

    if (ans) {
      count += word.length;
    }
  });

  return count;
};
// @lc code=end
