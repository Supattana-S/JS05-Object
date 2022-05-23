const employees = {
  john: {
    salary: 1000,
    address: { district: "Ratchathewi", province: "Bangkok" },
  },
  peter: {
    salary: 1500,
    address: { district: "Pathumwan", province: "Bangkok" },
  },
  mike: {
    salary: 800,
    address: { district: "Pakkret", province: "Nonthaburi" },
  },
  sarah: {
    salary: 2200,
    address: { district: "Sriraja", province: "Chonburi" },
  },
};

function checkName(name, obj) {
  for (let k in obj) {
    if (k === name) {
      return true;
    }
    return false;
  }
}

let inputName = prompt("Please input your name");

if (checkName(inputName, employees)) {
  // Can use (employees[name])
  console.log(
    `Name: ${inputName}, salary: ${employees[inputName].salary}, Address: ${employees[inputName].address.district}, ${employees[inputName].address.province}`
  );
} else {
  console.log("Not found");
}
