class Jest {
  constructor(value) {
    this.value = value;
  }

  _isEqual(value) {
    if (typeof value !== typeof this.value) {
      return false;
    }
    if (typeof value === "object") {
      return JSON.stringify(value) === JSON.stringify(this.value);
    }
    return value === this.value;
  }

  isEqual(value) {
    const isEqual = this._isEqual(value);
    if (isEqual) {
      console.log("true");
    } else {
      console.log(
        `false:
        expect: ${JSON.stringify(this.value)}
        got: ${JSON.stringify(value)}`
      );
    }
  }
}

exports.expect = function(value) {
  return new Jest(value);
};
