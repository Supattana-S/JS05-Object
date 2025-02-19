const notebook = {
  brand: "ASUS",
  model: "Vivobook D413IA-EB303TS",
  processor: "AMD Ryzen 7 4700U 3.6GHz",
  graphics: "Integrated Graphics : AMD Radeon Graphics",
  ram: "8GB DDR4 Onboard",
  storage: "512GB PCIe NVMe M.2 SSD",
};

const a = {};
const b = {};

for (let k in notebook) {
  a[k] = notebook[k];
}

Object.assign(b, notebook);

console.log(a);
console.log(b);
