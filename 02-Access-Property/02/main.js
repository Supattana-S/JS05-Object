function checkEmpty(obj) {
  for (let k in obj) {
    // execute 
    return false;
  }
  return true;
}

const a = {};
const b = { name: "Pond" };

console.log(checkEmpty(a));
console.log(checkEmpty(b));
