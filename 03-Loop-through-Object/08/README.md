บรรทัดที่มี * และ ** ให้ผลลัพธ์เป็นอะไร เพราะอะไร

```js
const user = {
  email: 'cc@gmail.com',
  isActive: true
};

user.isActive = false;
console.log(user); // *user object with user.isActive = false
user = {};
console.log(user); // ** error because user is const

```
