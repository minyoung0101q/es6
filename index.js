const amISexy = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Yes you are!");
  }, 3000);
});

console.log(amISexy);

setTimeout(() => {
  console.log(amISexy);
}, 1000);
