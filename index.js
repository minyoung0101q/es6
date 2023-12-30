const emails = [
  "nco@no.com",
  "naver@google.com",
  "lynn@gmail.com",
  "nico@nomad.com",
  "nico@gmail.com",
];
const cleaned = [];
emails.forEach((email) => {
  cleaned.push(email.split("@")[0]);
});

console.log(cleaned);
