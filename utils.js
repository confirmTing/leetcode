class Jest {
  constructor(value) {
    this.value = value;
  }

  isEqual(value) {
    if (typeof value !== typeof this.value) {
      return false;
    }
    if (typeof value === 'object') {
      return JSON.stringify(value) === JSON.stringify(this.value);
    }
    return value === this.value;
  }
}

exports.expect = function (value) {
  return new Jest(value)
}
