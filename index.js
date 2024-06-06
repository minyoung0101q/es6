<<<<<<< HEAD
class User {
  constructor() {
    this.username = "Minyoung";
  }
  sayHello() {
    console.log("Hello, I'm Minyoung.");
=======
const nico = {
  name: "Nico",
  age: 24,
  addYear: function () {
    ++this.age;
>>>>>>> parent of 07fb55f ( #2.2 Arrow Functions in the Real World 변경)
  }
}

const sexyUser = new User();
const uglyUser = new User();

sexyUser.sayHello();
uglyUser.sayHello();