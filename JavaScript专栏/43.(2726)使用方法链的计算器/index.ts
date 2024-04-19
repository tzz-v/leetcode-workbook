class Calculator {
  value = 0;
  constructor(value: number) {
    this.value = value;
  }

  add(value: number): Calculator {
    this.value += value;
    return this;
  }

  subtract(value: number): Calculator {
    this.value -= value;
    return this;
  }

  multiply(value: number): Calculator {
    this.value *= value;
    return this;
  }

  divide(value: number): Calculator {
    if (value === 0) {
      throw new Error('Division by zero is not allowed');
    }
    this.value /= value;
    return this;
  }

  power(value: number): Calculator {
    const itemArr = new Array(Math.abs(value)).fill(this.value);
    let result = itemArr.reduce((prev, cur) => prev * cur, 1);
    if (value < 0) {
      result = 1 / result;
    }
    this.value = result;
    return this;
  }

  getResult(): number {
    return this.value;
  }
}
