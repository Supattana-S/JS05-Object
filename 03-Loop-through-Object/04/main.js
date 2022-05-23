const a = {};
// let b = true;
let key;
let value;

function checkToStop(sth) {
  return sth === "stop" || sth === null || String(sth.trim()) === "";
}

while (true) {
  key = prompt("Please input your key");
  if (checkToStop(key)) {
    break;
  }
  value = prompt("Please input your value");
  if (checkToStop(value)) {
    break;
  }

  a[key] = value;
}

console.log(a);
