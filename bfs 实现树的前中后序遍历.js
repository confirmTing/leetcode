const expect = require("./utils").expect;

const tree = {
  val: 1,
  left: {
    val: 2,
    left: { val: 4, left: null, right: null },
    right: { val: 5, left: null, right: null },
  },
  right: { val: 3, left: { val: 6, left: null, right: null }, right: null },
};

const prevValue = [1, 2, 4, 5, 3, 6];
const middleValue = [4, 2, 5, 1, 6, 3];
const afterValue = [4, 5, 2, 6, 3, 1];

/**
 * 前序遍历递归版本
 * @param {*} root
 */
var dfsPrev = (root) => {
  const res = [];
  const dfs = (node) => {
    if (!node) return;
    res.push(node.val);
    dfs(node.left);
    dfs(node.right);
  };
  dfs(root);
  return res;
};

/**
 * 中序遍历递归版本
 * @param {*} root
 */
var dfsMiddle = (root) => {
  const res = [];
  const dfs = (node) => {
    if (!node) return;
    dfs(node.left);
    res.push(node.val);
    dfs(node.right);
  };
  dfs(root);
  return res;
};

/**
 * 中序遍历递归版本
 * @param {*} root
 */
var dfsAfter = (root) => {
  const res = [];
  const dfs = (node) => {
    if (!node) return;
    dfs(node.left);
    dfs(node.right);
    res.push(node.val);
  };
  dfs(root);
  return res;
};

/**
 * 前序遍历迭代版本1
 * @param {*} root
 */
var bfsPrev = (root) => {
  const stack = [root];
  const res = [];

  while (stack.length > 0) {
    const node = stack.pop();
    res.push(node.val);
    if (node.right) stack.push(node.right);
    if (node.left) stack.push(node.left);
  }
  return res;
};

/**
 * 前序遍历迭代版本2
 * @param {*} root
 */
var bfsPrev2 = (root) => {
  if (!root) return [];
  const res = [];
  const stack = [];
  while (root || stack.length > 0) {
    while (root !== null) {
      res.push(root.val);
      stack.push(root);
      root = root.left;
    }
    root = stack.pop();
    root = root.right;
  }

  return res;
};

/**
 * 中序遍历迭代版本
 * @param {*} root
 */
var bfsMiddle = (root) => {
  if (!root) return [];
  const stack = [];
  const res = [];

  while (root !== null || stack.length > 0) {
    while (root !== null) {
      stack.push(root);
      root = root.left;
    }
    root = stack.pop();
    res.push(root.val);
    root = root.right;
  }
  return res;
};

var bfsAfter = (root) => {
  if (!root) return [];
  const res = [];
  const stack = [root];
  const set = new Set();

  while (stack.length > 0) {
    let temp = stack[stack.length - 1];
    if (temp.left && !set.has(temp.left)) {
      temp = temp.left;
      while (temp) {
        if (set.has(temp)) break;
        stack.push(temp);
        temp = temp.left;
      }
      continue;
    }
    if (temp.right && !set.has(temp.right)) {
      stack.push(temp.right);
      continue;
    }

    const node = stack.pop();
    set.add(node);
    res.push(node.val);
  }

  return res;
};

expect(dfsPrev(tree)).isEqual(prevValue);
expect(dfsMiddle(tree)).isEqual(middleValue);
expect(dfsAfter(tree)).isEqual(afterValue);

expect(bfsPrev(tree)).isEqual(prevValue);
expect(bfsPrev2(tree)).isEqual(prevValue);
expect(bfsMiddle(tree)).isEqual(middleValue);
expect(bfsAfter(tree)).isEqual(afterValue);
