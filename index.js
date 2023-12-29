const button = document.querySelector("button");
function handleClick() {
  console.log(this.style);
  this.style.backgroundColor = "red";
}
button.addEventListener("click", handleClick);
