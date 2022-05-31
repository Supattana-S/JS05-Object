let calculator = {
  // input1: 0, //no nedd because using this.input1 already
  // input2: 0, //no nedd because using this.input2 already

  read: function () {
    this.input1 = +prompt("Enter num1");
    this.input2 = +prompt("Enter num2");
  },

  sum() {
    return this.input1 + this.input2;
  },

  mul() {
    return this.input1 * this.input2;
  },
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());
