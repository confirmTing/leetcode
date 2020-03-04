/*
 * @lc app=leetcode.cn id=994 lang=javascript
 *
 * [994] 腐烂的橘子
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting2 = function(grid) {
  let good = 0;
  let bad = 0;
  let t = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === 1) {
        good++;
      } else if (grid[i][j] === 2) {
        bad++;
      }
    }
  }

  if (!good) return 0;
  if (!bad) return -1;

  let newGood = good;

  while (newGood) {
    for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[i].length; j++) {
        if (grid[i][j] === t + 2) {
          // 检查坏橘子四周
          if (i && grid[i - 1][j] === 1) {
            grid[i - 1][j] = t + 3;
            newGood--;
          }
          if (j && grid[i][j - 1] === 1) {
            grid[i][j - 1] = t + 3;
            newGood--;
          }
          if (i !== grid.length - 1 && grid[i + 1][j] === 1) {
            grid[i + 1][j] = t + 3;
            newGood--;
          }
          if (j !== grid[i].length - 1 && grid[i][j + 1] === 1) {
            grid[i][j + 1] = t + 3;
            newGood--;
          }
        }
      }
    }

    t++;

    if (newGood === good) return -1;
    good = newGood;
  }

  return t;
};

/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
  const queue = [];
  const rows = grid.length;
  const cols = grid[0].length;
  let countFresh = 0;

  // put the position of all rotten oranges in queue
  // count the number of fresh oranges
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i][j] === 1) {
        countFresh++;
      } else if (grid[i][j] === 2) {
        queue.push([i, j]);
      }
    }
  }
  // or count of fresh oranges is zero
  // return 0
  if (countFresh === 0) return 0;

  let count = 0;
  // the position of left, top, right, bottom
  const dirs = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1]
  ];

  // bfs starting from initially rotten oranges
  while (queue.length > 0) {
    const len = queue.length;
    count++;

    for (let i = 0; i < len; i++) {
      const point = queue.shift();

      for (let j = 0; j < dirs.length; j++) {
        const x = point[0] + dirs[j][0];
        const y = point[1] + dirs[j][1];

        // if x or y is out of bound
        // or the orange at (x, y) is already rotten or empty
        // we do nothing
        if (
          x < 0 ||
          y < 0 ||
          x >= rows ||
          y >= cols ||
          grid[x][y] === 0 ||
          grid[x][y] === 2
        ) {
          continue;
        }
        // mark the orange at (x, y) as rotten
        grid[x][y] = 2;
        // put the new rotten orange in queue
        queue.push([x, y]);
        // decrease the count of fresh oranges by 1
        countFresh--;
      }
    }
  }

  if (countFresh > 0) return -1;
  return count - 1;
};
// @lc code=end
