class User {
  constructor(name) {
    this.username = name;
  }
  sayHello() {
    console.log(`Hello, my name is ${this.username}`);
  }
}

const sexyUser = new User("minyoung");

sexyUser.sayHello();