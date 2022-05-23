const user = {
  name: "John",
  surName: "Doe",
};

user["name"] = "Jack";
user.name = "Matt";
delete user.name;

console.log(user);
