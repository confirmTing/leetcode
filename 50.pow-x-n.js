/*
 * @lc app=leetcode.cn id=50 lang=javascript
 *
 * [50] Pow(x, n)
 */

// @lc code=start
/**
 * 暴力破解, 超时...
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
  if (n === 0) {
    return 1;
  }
  let res = 1;
  if (n < 0) {
    while (n < 0) {
      res /= x;
      n += 1;
    }
  } else {
    while (n > 0) {
      res *= x;
      n -= 1;
    }
  }
  return res;
};

/**
 *
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
  if (n === 0) return 1;

  if (n < 0) {
    return 1 / myPow(x, -n);
  }

  if (n % 2 === 0) {
    return myPow(x * x, n / 2);
  }

  return x * myPow(x, n - 1);
};

/**
 *
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
  if (n < 0) {
    x = 1 / x;
    n = -n;
  }
  let pow = 1;

  while (n) {
    if (n % 2 === 1) {
      pow *= x;
    }
    x *= x;
    // n >>= 1;
    n = parseInt(n / 2, 10);
  }

  return pow;
};

var myPow = function (x, n) {
  if (n === 0) return 1;

  if (n < 0) {
    return 1 / myPow(x, -n);
  }
  if (n % 2 === 1) {
    return x * myPow(x, n - 1);
  }

  return myPow(x * x, n / 2);
};
// @lc code=end
