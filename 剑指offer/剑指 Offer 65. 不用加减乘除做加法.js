const expect = require("../utils").expect;

/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var add = function (a, b) {
  if (!b) return a;
  return add(a ^ b, (a & b) << 1);
};

expect(add(1, 2)).isEqual(3);
expect(add('111', '2222')).isEqual(2333);
