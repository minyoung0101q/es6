const nico = {
  name: "Nico",
  age: 24,
  addYear: function () {
    ++this.age;
  }
}

console.log(nico); // 24
nico.addYear();
nico.addYear();
console.log(nico); // 26