function Calculator() {
  // this.num1 = 0; //no nedd because using this.input1 already
  // this.num2 = 0; //no nedd because using this.input2 already

  this.read = function () {
    this.num1 = +prompt("Enter num1");
    this.num2 = +prompt("Enter num2");
  };

  this.sum = function () {
    return this.num1 + this.num2;
  };

  this.mul = function () {
    return this.num1 * this.num2;
  };
}

let obj = new Calculator();

obj.read();
console.log(obj.sum());
