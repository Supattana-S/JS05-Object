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
//alternative
// const multiplyNumeric = (obj, num) => {
//    const result = {};
//   for (let k in obj) {
//     if (typeof obj[k] === 'number') {
//       result[k] = obj[k] * num;
//     } else {
//  result[key] = obj[key]
// }
//     return result
//   }
// }
// above code will be create another object
// const newObject = mulitplyNumeric(menu, 3)
// newObject will be new object instead of update Object: menu
// **normally, will create another object instead of update

let menu = {
  width: 200,
  height: 300,
  title: "My menu",
};

multiplyNumeric(menu, 3);
console.log(menu);
