/**
 * 给你一个整数数组 arr，请你检查是否存在两个整数 N 和 M，满足 N 是 M 的两倍（即，N = 2 * M）。
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function(arr) {
  var set = new Set();
  for (let i = 0; i < arr.length; i++) {
    if (set.has(arr[i] / 2) || set.has(arr[i] * 2)) {
      return true;
    }
    set.add(arr[i])
  }
  return false;
};

const test1 = [10,2,5,3];
const test2 = [7,1,14,11];
const test3 = [-2,0,10,-19,4,6,-8];
const test4 = [-10,12,-20,-8,15];

console.log(checkIfExist(test1) === true);
console.log(checkIfExist(test2) === true);
console.log(checkIfExist(test3) === false);
console.log(checkIfExist(test4) === true);
