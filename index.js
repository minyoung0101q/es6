const emails = [
  "minyoung@gmail.com",
  "lego@gmail.com",
  "dddd@naver.com",
  "goo@naver.com",
  "hhh@naver.com",
  "uuu@naveer.com",
];
const foundMail = emails.filter((element) => !element.includes("@gmail.com"));
console.log(foundMail);
