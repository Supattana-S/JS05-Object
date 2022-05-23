let result = 0;
let a = {};
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

function checkEmpty(obj) {
  for (let k in obj) {
    return false;
  }
  return true;
}

function salary(obj) {
  if (checkEmpty(obj)) {
    result = 0;
    return console.log(result);
  } else {
    for (let k in obj) {
      result += obj[k];
    }
    return console.log(result);
  }
}
//we can do this also
// const calcSalary = obj => {
//   let sum = 0;
//   for (let k in obj) {
//     sum += obj[k]
//   }
//   return sum
// }

salary(salaries);
salary(a);
