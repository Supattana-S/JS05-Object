function multiplyNumeric(obj, num) {
  for (let k in obj) {
    if (typeof obj[k] === "number") {
      obj[k] *= num;
    } else {
      continue;
    }
  }
  return obj;
}

let menu = {
  width: 200,
  height: 300,
  title: "My menu",
};

multiplyNumeric(menu, 3);
console.log(menu);
