/*
 * @lc app=leetcode.cn id=232 lang=javascript
 *
 * [232] 用栈实现队列
 */

// @lc code=start
/**
 * Initialize your data structure here.
 */
var MyQueue = function () {
  // push 操作保存到 input 栈
  this.inputStack = [];
  // peek pop 操作从 output 栈获取
  // 并判断 outputStack 是否为空
  // 如果为空从 inputStack 栈获取元素存到 outputStack 栈
  this.outputStack = [];
};

/**
 * Push element x to the back of queue.
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
  this.inputStack.push(x);
};

MyQueue.prototype._validateOutput = function () {
  if (this.outputStack.length < 1) {
    let item;
    while ((item = this.inputStack.pop()) !== undefined) {
      this.outputStack.push(item);
    }
  }
};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function () {
  this._validateOutput();

  return this.outputStack.pop();
};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function () {
  this._validateOutput();
  return this.outputStack[this.outputStack.length - 1];
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
  return this.inputStack.length === 0 && this.outputStack.length === 0;
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
// @lc code=end
