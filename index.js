const email = [
  "minyoung@min.com",
  "naver@gmail.com",
  "you@you.com",
  "lynn@gmail.com",
];
// 주소가 gmail.com 인 것을 찾아야 한다
// 4개의 주소가 있다
// find의 설명을 보면, Array.prototype.find()는 array의 제공되는 함수 조건을 만족하는 첫 번째 엘리먼트를 리턴한다
// 이 말인 즉슨, 이 값들을 테스트 해야 한다는 것이다
// item.includes()를 쓴다 -> includes는 string을 찾아준다

const foundMail = email.find((item) => item.includes("@gmail.com"));
console.log(foundMail);
// includes는 true나 false를 return한다
// 그러니 찾았으면 true를 리턴하고 그렇지 않으면 false를 return한다
