const product1 = {
  name: "Water",
  distributor: {
    name: "Giraffe Water Company",
    address: {
      street: "Phetchaburi",
      subdistrict: "Thanonphetchaburi",
      district: "Ratchathewi",
      province: "Bangkok",
    },
  },
};

const product2 = {};

console.log(product1.distributor.address.province);

product2.distributor = product1.distributor;

console.log(product2.distributor.address.province);
