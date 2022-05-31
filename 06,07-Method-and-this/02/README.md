ผลลัพธ์ในบรรทัดที่มี \* มีค่าเป็นอะไรและเพราะอะไร

```js
var name = "Joe";
function makeUser() {
  return {
    name: "John",
    ref: this,
  };
}
let user = makeUser(); // let user = window.makeUser() => { name: 'John', ref: window}
// "this" clarify when urge by the function, 'this' is funcrtion brfore the '.'.(In this case is window.makeuser())

console.log(user.ref.name); // consol.log(window.name) => Joe
```
