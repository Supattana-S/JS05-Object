const a = {};
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
  if (checkToStop(value) || isNaN(value)) {
    break;
  }
  if (value > 1) {
    a[key + "s"] = value;
  }
}

console.log(a);
