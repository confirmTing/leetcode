class UF {
  constructor(n) {
    this.count = n;
    this.id = Array(n);

    for (let i = 0; i < n; i++) {
      this.id[i] = i;
    }
  }

  count() {
    return this.count;
  }

  connected(p, q) {
    return this.find(p) === this.find(q);
  }

  find(p) {
    return this.id[p];
  }

  union(p, q) {
    const pId = this.find(p);
    const qId = this.find(q);

    if (pId === qId) return;

    this.id.forEach((item, index) => {
      if (item === pId) {
        this.id[index] = qId;
      }
    });
    this.count--;
  }
}

class QuickUf extends UF {
  find(p) {
    // 寻找根触点
    while (p !== this.id[p]) {
      p = this.id[p];
    }
    return p;
  }

  union(p, q) {
    const pRoot = this.find(p);
    const qRoot = this.find(q);

    if (pRoot === qRoot) return;
    this.id[pRoot] = qRoot;
    this.count--;
  }
}

class WeightedQuickUnionUF extends UF {
  constructor(n) {
    super(n)
    this.size = Array(n).fill(1);
  }

  find(p) {
    // 寻找根触点
    while (p !== this.id[p]) {
      p = this.id[p];
    }
    return p;
  }

  union(p, q) {
    const i = this.find(p);
    const j = this.find(q);
    if (i === j) return;
    const size = this.size;
    if (size[i] < size[j]) {
      this.id[i] = j;
      size[j] += size[i];
    } else {
      this.id[j] = i;
      size[i] += size[j]
    }
    this.count--;
  }
}

var uf = new UF(10);
const quickUf = new QuickUf(10);
const weightedQuickUf = new WeightedQuickUnionUF(10);

const input = [
  [4, 3],
  [3, 8],
  [6, 5],
  [9, 4],
  [2, 1],
  [8, 9],
  [5, 0],
  [7, 2],
  [6, 1],
  [1, 0],
  [6, 7],
];

function run(input, uf) {
  input.forEach(([p, q]) => {
    if (uf.connected(p, q)) return;

    uf.union(p, q);
    console.log(p + "  " + q);
  });

  console.log(uf.count + " components");
}

// run(input, uf);
run(input, quickUf);
run(input, weightedQuickUf);
