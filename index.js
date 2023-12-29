const minyoung = {
  name: "Minyoung",
  age: 24,
  addYear: () => {
    this.age++; // this가 window를 가리킴
  },
};
console.log(minyoung); // minyoung 객체 로그 출력
minyoung.addYear();
minyoung.addYear();
console.log(minyoung);
