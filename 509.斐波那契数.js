/*
 * @lc app=leetcode.cn id=509 lang=javascript
 *
 * [509] 斐波那契数
 */

// @lc code=start
/**
 * @param {number} N
 * @return {number}
 */
var fib = function(N) {
  fib.map = fib.map || new Map();
  if (fib.map.get(N)) {
    return fib.map.get(N);
  }

  if (N < 2) return N;
  const res = fib(N-1) + fib(N-2);
  fib.map.set(N, res);
  return res;
};

/**
 * @param {number} N
 * @return {number}
 */
var fib = function(N) {
  const res = [0, 1];
  for (let i = 2; i <= N; i++) {
    res[i] = res[i - 1] + res[i - 2];
  }
  return res[N]
}

/**
 * @param {number} N
 * @return {number}
 */
var fib = function(N) {
  if (N < 2) return N;
  let prev = 0;
  let current = 1;
  for (let i = 2; i <= N; i++) {
    const temp = current;
    current += prev;
    prev = temp;
  }
  return current;
}
// @lc code=end
