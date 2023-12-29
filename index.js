const button = document.querySelector("button");
const handleClick = () => {
  console.log(this.style);
  this.style.backgroundColor = "red";
};
button.addEventListener("click", handleClick);
