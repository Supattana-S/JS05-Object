const user = {};

let username = prompt("Enter username");
let password = prompt("Enter password");
let email = prompt("Enter E-mail");

user.username = username;
user.password = password;
user.email = email;

console.log(user);

// best solution
// const user = {
//     username, //username: username
//     email, // email: email
//     password // password: password
// }
