/*
 * @lc app=leetcode.cn id=225 lang=javascript
 *
 * [225] 用队列实现栈
 */

// @lc code=start
/**
 * Initialize your data structure here.
 */
var MyStack = function () {
  this.input = [];
  this.output = [];
};

/**
 * Push element x onto stack.
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {
  this.input.push(x);
  while (this.output.length > 0) {
    this.input.push(this.output.shift());
  }
  this.output = this.input;
  this.input = [];
};

/**
 * Removes the element on top of the stack and returns that element.
 * @return {number}
 */
MyStack.prototype.pop = function () {
  return this.output.shift();
};

/**
 * Get the top element.
 * @return {number}
 */
MyStack.prototype.top = function () {
  return this.output[0];
};

/**
 * Returns whether the stack is empty.
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
  return this.output.length < 1;
};

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */

// 思路2
/**
 * Push element x onto stack.
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {
  this.input.push(x);
  this.topValue = x;
};

/**
 * 取元素的时候，input 保留最后一个元素就是刚入栈的元素
 * top 取倒数第二个元素
 * Removes the element on top of the stack and returns that element.
 * @return {number}
 */
MyStack.prototype.pop = function () {
  while (this.input.length > 1) {
    this.topValue = this.input.shift();
    this.output.push(this.topValue);
  }
  const res = this.input.shift();
  this.input = this.output;
  this.output = [];
  return res;
};

MyStack.prototype.top = function () {
  return this.topValue;
};

/**
 * Returns whether the stack is empty.
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
  return this.input.length < 1;
};
// @lc code=end
