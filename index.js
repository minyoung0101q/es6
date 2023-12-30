const emails = [
  "nco@no.com",
  "naver@google.com",
  "lynn@gmail.com",
  "nico@nomad.com",
  "nico@gmail.com",
];

const cleaned = emails.map((email, index) => ({
  username: email.split("@")[0],
  index: index, //index
}));

console.log(cleaned);
