const a = {};
let productName;
let productSold;
let productCost;
let productDiscount;

function checkToStop(sth) {
  return sth === "stop" || sth === null || String(sth).trim() === "";
}

function inputInfo(name, varName) {
  name = prompt("please input your " + varName);
  return name;
}

function discountCalculation(obj) {
  return (obj.discountPrice =
    obj.productCost * (1 - obj.productDiscount / 100));
}

productName = prompt("please input name");
while (checkToStop(productName)) {
    productName = prompt("please input name");
}

productSold = prompt("please input Sold number");
while (checkToStop(productSold)) {
    productSold = prompt("please input Sold number");
}

productCost = prompt("please input Cost");
while (checkToStop(productCost)) {
    productCost = prompt("please input Cost");
}

productDiscount = prompt("please input Discount");
while (checkToStop(productDiscount)) {
    productDiscount = prompt("please input Discount");
}

a.productName = productName;
a.productSold = productSold;
a.productCost = productCost;

if (productDiscount !== null || String(productDiscount.trim()) !== "") {
  a.productDiscount = productDiscount;
}

discountCalculation(a);
console.log(a);
