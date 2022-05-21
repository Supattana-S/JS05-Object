//Lab 1.1.1 (js01, topic 1, lab no.1, according to github codecamp), Lab 1.1.3
// alert("My name is Pangpond.");

//Lab 1.2.1
// let person;
// let name;

// name = "Pangpond";
// person = name;

// alert(person);

//Lab 1.2.2
// let pocketMoney
// let dadName
// let momName
// let address
// let universeAge

//Lab 1.2.3
//error: const always need to set default value
// const user;
// const role;
// user = 'iamhero'
// role = 'customer'
// error: need to set the variable before use
// alert(username)

//Lab 1.2.4
// const firstName = 'Supattana'
// const lastName = 'Suesawatwanich'
// var nickName = 'Pangpond'

// const firstName = 'John'
// const lastName = 'Joestar'
// var nickName = 'Jojo'

//no error: but should avoid this.
// birthDate = '01/10/1993'

//Lab 1.2.5
// let BRAND_NAME = 'I am a hero'
//use all capital when it's environment variable

//Lab 1.3.1
//vobal answer is ok

//Lab 1.3.2
// const firstName = "Supattana";
// const lastName = "Suesawatwanich";
// const age = 29;
// const address = "Chachengsao";
// console.log(
//   `Full Name: ${firstName} ${lastName}, Age: ${age}, Address: ${address} `
// );

//Lab 1.3.3
//vobal answer is ok

//Lab 1.4.1
// let a = undefined;
// let b = 2;
// let c = a++; // a = a + 1 => NaN
// let d = String(a); // 'undefined'
// let e = "" + b; // '2'
// let f = `${c}`; // NaN

//Lab 1.4.2
// let a = undefined;
// let b = null;
// let c = b + "4 2";
// let d = Number(a); //NaN
// let e = +b; //NaN
// let f = c * 1; //NaN

//Lab 1.4.3
// let a = undefined;
// let b = " ";
// let c = !b;
// let d = Boolean(a); //false
// let e = !!b; //true
// let f = !!c; //false

//Lab 1.4.4
//vobal answer is ok

//Lab 1.4.5
// let a = 0;
// a++; // 1
// a += 3; // 4
// a *= 17; // 68
// a %= 7; // 5
// console.log(a);

//Lab 1.4.6
// let a = 1; // a:1
// let b = 2; // a:1 b:2
// let c = a++; // a:2 b:2 c:1
// let d = ++c; // a:2 b:2 c:2 d:2
// let e = ++d + d++ + d; // 3+3+4 // d:4 e:10

//Lab 1.4.7
// let num1 = +prompt("Enter first number");
// let num2 = +prompt("Enter second number");
// alert(num1 + num2);

//Lab 1.4.8
// let a = 0.1;
// let b = 0.2;
// let c = a + b;
// console.log(c.toFixed(1));

//Lab 1.4.9
// let a = 1 * "4" + +null + +" " - "5" * 2 + +(7 + 2 + "" + +!!undefined);
// 4 + 0 => 4 + 0 => 4 - 10 => -6 + +('9' + 0)=> -6 + +'90' => 84

//Lab 2.1.1
//vobal answer is ok
//use isNaN() instead of === NaN

//Lab 2.2.1, 2.2.2
//vobal answer is ok

//Lab 2.2.3
// const inputName = prompt("Enter Name");
// if (inputName === "Pangpond") {
//   console.log("Correct!!!");
// } else {
//   console.log("Wrong!!!");
// }

//Lab 2.2.4
// const inputNumber = prompt("Enter Number");
// if (inputNumber > 0) {
//   console.log("Positive!!!");
// } else if (inputNumber === "0") {
//   console.log("Zero!!!");
//   0;
// } else if (inputNumber < 0) {
//   console.log("Negative!!!");
// } else {
//   console.log("Invalid number");
// }

//Lab 2.2.5
// const inputNumber = prompt("Enter Number");
// if (inputNumber === null || inputNumber.trim() === "" || isNaN(inputNumber)) {
//   //.trim() use with string. If .trim() go first and input is null, error occur because null is NOT string.
//   console.log("Invalid number");
// } else {
//   if (inputNumber % 2 === 0) {
//     console.log("Even number!!");
//   } else {
//     console.log("Odd number!!!");
//   }
// }

//Lab 2.2.6
// function isInvalidNumber(checkValue) {
//   return checkValue === null || checkValue.trim() === "" || isNaN(checkValue);
// }

// const input1 = prompt("Enter Number 1");
// const input2 = prompt("Enter Number 2");

// if (isInvalidNumber(input1) || isInvalidNumber(input2)) {
//   console.log("Invalid 1number");
// } else {
//   console.log(+input1 + +input2);
// }

// function isValidNumber(checkValue) {
//   return !(
//     checkValue === null ||
//     checkValue.trim() === "" ||
//     isNaN(checkValue)
//   );
// }

// const input1 = prompt("Enter Number 1");
// const input2 = prompt("Enter Number 2");

// if (!isValidNumber(input1) || !isValidNumber(input2)) {
//   console.log("Invalid 1number");
// } else {
//   console.log(+input1 + +input2);
// }

//Lab 2.2.7
// function isAccess(checkUsername, checkPassword) {
//     return (
//         (checkUsername === "admin" && checkPassword === "1234") ||
//         (checkUsername === "john" && checkPassword === "qwerty")
//         );
//     }

//     const username = prompt("Username:");
//     const password = prompt("Passsword:");
//     if (isAccess(username, password)) {
//         console.log("Hello");
//     } else {
//   console.log("invalid username or password");
// }

//Lab 2.2.8
// const input = prompt("Enter your score");
// function isInvalidNumber(checkValue) {
//     return checkValue === null || checkValue.trim() === "" || isNaN(checkValue);
// }

// if (isInvalidNumber(input)) {
//     console.log("Invalid number");
// } else {
//     if (input >= 80) {
//         console.log("A");
//     } else if (input >= 70) {
//         console.log("B");
//     } else if (input >= 60) {
//         console.log("C");
//     } else if (input >= 50) {
//         console.log("D");
//     } else if (input >= 0) {
//         console.log("F");
//     } else {
//         console.log("Invalid score");
//     }
// }

//Lab 2.2.9
// let age = prompt("How old are you");
// let message;
// if (age >= 18) {
//   message = 'Allowed';
// } else {
//   message = 'Not allowed';
// }

// let massage = age >= 18 ? "Allowed" : "Not Allowed";

//Lab 2.2.10
// let login = prompt("Enter username");
// let message;
// if (login == 'Employee') {
//   message = 'Hello';
// } else if (login == 'Director') {
//   message = 'Greetings';
// } else if (login == '') {
//   message = 'No login';
// } else {
//   message = '';
// }

// let massager =
//   login === "employee"
//     ? "hello"
//     : login === "Director"
//     ? "Greeting"
//     : login === ""
//     ? "No login"
//     : "";

//Lab 2.2.11
// const input = prompt("Enter your score");
// function isInvalidNumber(checkValue) {
//     return checkValue === null || checkValue.trim() === "" || isNaN(checkValue);
// }

// if (isInvalidNumber(input)) {
//     console.log("Invalid number");
// } else {
//     if (input >= 80) {
//         console.log("A");
//     } else if (input >= 70) {
//         console.log("B");
//     } else if (input >= 60) {
//         console.log("C");
//     } else if (input >= 50) {
//         console.log("D");
//     } else if (input >= 0) {
//         console.log("F");
//     } else {
//         console.log("Invalid score");
//     }
// }

// let message = isInvalidNumber(input)
//   ? "Invalid number"
//   : input >= 80
//   ? "A"
//   : input >= 70
//   ? "B"
//   : input >= 60
//   ? "C"
//   : input >= 50
//   ? "D"
//   : input >= 0
//   ? "F"
//   : "Invalid score";
// console.log(message);

//Lab 2.2.12
//Verbal answer is OK

//Lab 2.3.1
// const input = prompt("Enter number");
// switch (input) {
//   case "1":
//     alert("One");
//     break;
//   case "0":
//     alert("Zero");
//     break;
//   case "-1":
//     alert("Minus one");
//     break;
//   default:
//     alert("Invalid value");
// }

//Lab 2.3.2
// let a = +prompt("a?");

// if (a === 0) {
//   alert(0);
// }
// if (a === 1) {
//   alert(1);
// }

// if (a === 2 || a === 3) {
//   alert("2,3");
// }

// switch (a) {
//   case 0:
//     alert(0);
//     break;
//   case 1:
//     alert(1);
//     break;
//   case 2:
//   case 3:
//     alert("2,3");
//     break;
//   default:
// }

//Lab 2.3.3
// switch (browser) {
//   case "Edge":
//     alert("You've got the Edge!");
//     break;
//   case "Chrome":
//   case "Firefox":
//   case "Safari":
//   case "Opera":
//     alert("Okay we support these browsers too");
//     break;
//   default:
//     alert("We hope that this page looks ok!");
// }
// const browser = prompt("What is your browser?");

// if (browser === "edge") {
//   alert("You've got the Edge!");
// } else if (
//   browser === "Chrome" ||
//   browser === "Firefox" ||
//   browser === "Safari" ||
//   browser === "Opera"
// ) {
//   alert("Okay we support these browsers too");
// } else {
//   alert("We hope that this page looks ok!");
// }

//Lab 2.4.1
//Lab 2.4.2
//Lab 2.4.3

//Loop
//Lab 3.1
//answer is 1
//Verbal answer is ok

//Lab 3.2
//Verbal answer is ok

//Lab 3.3
// for (let i = 1; i <= 50; i++) {
//   console.log(i * 2);
// }

// let i = 0;
// while (i < 100) {
//   i += 2;
//   console.log(i);
// }

//Lab 3.4
// let sum = 0;
// let sumEven = 0;
// let sumOdd = 0;
// let sumThreeSquare = 0;
// let sumEvenSquare = 0;
// for (let i = 1; i <= 100; i += 1) {
//   sum += i;
// }
// console.log(sum);

// for (let i = 1; i <= 100; i++) {
//   if (i % 2 === 0) {
//     sumEven += i;
//   } else {
//     sumOdd += i;
//   }
// }
// console.log(sumEven);
// console.log(sumOdd);

// for (let i = 1; i <= 100; i++) {
//   if (i % 2 === 0) {
//     sumTwoDevided += i;
//   } else if (i % 3 === 0) {
//     sumThreeSquare += i;
//   }
// }
// console.log(typeof sumTwoDevided);
// console.log(sumTwoDevided - sumThreeSquare);

// for (let i = 1; i <= 100; i += 1) {
//     sum += i;
//     if (i % 2 === 0) {
//         sumEven += i;
//         sumEvenSquare += i ** 2;
//   } else {
//       sumOdd += i;
//     }
//     if (i % 3 === 0) {
//         sumThreeSquare += i ** 2;
//     }
// }
// console.log(sum);
// console.log(sumEven);
// console.log(sumOdd);
// console.log(typeof sumThreeSquare);
// console.log(sumThreeSquare);
// console.log(sumEvenSquare - sumThreeSquare);

//Lab 3.5
// let sumMoney = 100000;
// for (let i = 0; i < 10; i++) {
//   sumMoney *= 1.025;
// }
// console.log(sumMoney);

//Lab 3.6
// let acc = "";
// let acc2 = "";
// for (let i = 0; i < 4; i++) {
//   for (let j = 0; j < 4; j++) {
//     if (i >= j) {
//       acc += "* ";
//     }
//   }
//   acc += "\n";
// }

// for (let i = 0; i < 4; i++) {
//   for (let j = 0; j < 4; j++) {
//     if (j >= i) {
//       acc2 += "* ";
//     } else {
//       acc2 += "  ";
//     }
//   }
//   acc2 += "\n";
// }
// console.log(acc);
// console.log(acc2);

//Lab 3.7
// let a = 2;
// for (let i = 1; i <= 12; i++) {
//     console.log(`${a} x ${i} = ${a*i}`)
// }

// for (let i = 1; i <= 12; i++) {
//     for (let j = 1; j <= 12; j++) {
//         console.log(`${i} x ${j} = ${i*j} \n`)
//     }
// }

//Lab 3.8
// let num = prompt("Enter number");
// let sum = 0;
// let count = 0;
// let average;
// // console.log(num);
// // console.log(typeof num);

// while (!(num === "0" || num === "" || num === null)) {
//   sum += +num;
//   count++;
//   num = prompt("Enter number");
// }
// average = sum / count;

// console.log(sum);
// console.log(average);

//Lab 3.9
// const num1 = prompt("Enter Number");
// let num2 = prompt("Guess num1");
// let count = 0;

// while (num2 !== num1 ) {
//   if (+num2 > +num1) {
//     console.log("Your number is too much");
//   } else if (+num2 < +num1) {
//     console.log("Your number is too less");
//   } else {
//     console.log("Invalid Number");
//   }
//   count++;
//   num2 = prompt("Guess num1");
// }

// console.log("Correct!!!");
// console.log(count);

//Lab 3.10
// let count = 0;
// function isPrime(num) {
//   return !(
//     num % 2 === 0 ||
//     num % 10 === 0 ||
//     num % 3 === 0 ||
//     num % 5 === 0 ||
//     num % 7 === 0
//   );
// }

// for (let i = 1; i <= 100; i++) {
//   if (isPrime(i) || i === 3 || i === 5 || i === 2) {
//     console.log(i);
//     count++;
//   } else {
//     continue;
//   }
// }
// console.log(count);

// function isPrime(num) {
//   for (let i = 2; i <= num - 1; i++) {
//     if (num % i === 0) {
//       return false;
//     }
//   }
//   return true;
// }

// for (let i = 2; i <= 100; i++) {
//   if (isPrime(i)) {
//     count++;
//     console.log(i);
//   }
// }
// console.log(count);

//Lab 2.4.1 Logical Operation
//verbal answer

//Lab 2.4.2
//verbal answer

//Lab 2.4.3
// let user = prompt("Enter username:") || "Guest";
// if (user === '' || user === null) {
//     user = 'Guest'
// }
// if (user === "codecamp") {
//   let password = prompt("Enter password:");
//   if (password === "123456") {
//     console.log("Welcome!!");
//   } else {
//     console.log("Wrong password");
//   }
// } else {
//   user = "Guest";
//   alert(`Welcome, ${user}`);
// }

//Lab 4.1.1
//verbal answer

//Lab 4.1.2
// function sayHelloUser(username) {
//     alert(`Hello, ${username}`)
// }

// const user = prompt('Enter your name')
// sayHelloUser(user)

//Lab 4.1.3
//verbal answer
//message in function is not the message on global

//Lab 4.1.4
//verbal answer

//Lab 4.1.5
//verbal answer

//Lab 4.1.6
// function mutiply(num1, num2) {
//   return num1 * num2;
// }
// console.log(mutiply(2, 3));

//Lab 4.1.7
// function minNum(num1, num2) {
//     return num1 > num2 ? num2 : num1;
// }

//Lab 4.1.8
// function login(username, password) {
//   if (username === "admin" && password === "P@ssw0rd") {
//     console.log("Login Success");
//   } else {
//     console.log("Incorrect username or password");
//   }
// }

//Lab 4.1.9
//Please see in LAB 3.10 for isPrime function
// function isPrime(num) {
//   for (let i = 2; i <= num - 1; i++) {
//     if (num % i === 0) {
//       return false;
//     }
//   }
//   return true;
// }

// function showPrimeNumber(n) {
//     if (isPrime(i)) {
//         console.log(i)
//     }
// }

//Lab 4.1.10
//verbal answer
//undefined

//Lab 4.1.11
//verbal answer

//Lab 4.1.12
//verbal answer
//not return anything becuase it'll put ';' end of return

//Lab 4.1.13
// function checkAge(age) {
//     if (age > 18) {
//       return true;
//     }
//     return confirm('Did parents allow you?');

// }

// function checkAge(age) {
//     return age > 18 ? true : confirm('Did parents allow you?');
// }

// function checkAge(age) {
//     return age > 18 || confirm('Did parents allow you?');
// }

//Lab 4.1.14
// function isValidNumber(num) {
//   if (
//     num === null ||
//     String(num).trim() === "" ||
//     isNaN(num) ||
//     typeof num === "boolean"
//   ) {
//     return fasle;
//   }
//   return true;
// }

// // Actually, we'll use Math.max(a, b, c)
// function maxNum(a, b, c, d) {
//   //   if (a === undefined) {
//   //     return undefined;
//   //   }
//   //   if (b === undefined) {
//   //       if (isValidNumber(a)) {
//   //           return a;
//   //       } else return NaN
//   //   } else {
//   //       if (isValidNumber(a) && isValidNumber(b)) {
//   //           return a > b ? a:b;
//   //       } else return NaN;
//   //   }
//   if (a === undefined) return undefined;
//   if (b === undefined) return Math.max(a);
//   else {
//     if (c === undefined) return Math.max(a, b);
//     else {
//       if (d === undefined) return Math.max(a, b, c);
//       else return Math.max(a, b, c, d);
//     }
//   }
// }

// function max(a, b = 0, c = 0, d = 0) {
//   if (
//     a === undefined
//   ) {
//     console.log("undefined");
//   } else if (isNaN(a) || isNaN(b) || isNaN(c) || isNaN(d)){
//     console.log("NaN");
//   } else  {
//     console.log(Math.max(a, b, c, d));
//   }
// }

// max(2, 'k');

//Lab 4.2.1 fucntion expression
// const multipy = function (a, b) {
//   return a * b;
// };

// const result = multipy(17, 7);
// console.log(result);

//Lab 4.2.2
//verbal answer
// '*' showModal willsame as 'alert' function
// '**'error, showModal is not function. showModal is undefined becuase return from alert(), in parenthesis is undefined

//Lab 4.2.3
// const checkPermission = function (role, yes, no) {
//   if (role === "ADMIN") {
//     yes();
//   } else {
//     no();
//   }
// };

// checkPermission(
//   "ADMIN",
//   function () {
//     alert("ACCESS GRANTED");
//   },
//   function () {
//     alert("ACCESS DENIED");
//   }
// );

//Lab 4.2.4
// function magic() {
//   return function (x) {
//     return x * 42;
//   };
// }
// const answer = magic(); // answer = function(x)
// console.log(answer); // * function (x)
// console.log(answer(1337)); // ** 1337*42
// console.log(magic(1337)(42)); // *** 42*42

//Lab 4.3.1 Arrow function


//Lab 5.1.1
// const person = {
//     name: 'Pangpond',
//     age: 29,
//     gender: 'Male',
//     address: "Chachoengsao",
//     telNum: "081-861-8163"
// }

//Lab 5.2.1
const user = {
    name: 'John',
    surName: 'Doe',
}


console.log(user)