function Accumulator(startigValue) {
  this.currentValue = startigValue;
  this.read = function () {
    inputNum = +prompt("Enter Number");
    return (this.currentValue += inputNum);
  };
  this.show = function () {
    return console.log(this.currentValue);
  };
}

let a = new Accumulator(10);
console.log(a.currentValue);
a.read();
a.show();
