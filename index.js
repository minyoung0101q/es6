class User {
  constructor() {
    this.username = "Minyoung";
  }
  sayHello() {
    console.log("Hello, I'm Minyoung.");
  }
}

const sexyUser = new User();
const uglyUser = new User();

sexyUser.sayHello();
uglyUser.sayHello();