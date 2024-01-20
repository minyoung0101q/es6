const DEFAULT = "alternative";
const sayHello = (element = DEFAULT) => "hello " + element;
console.log(sayHello());
