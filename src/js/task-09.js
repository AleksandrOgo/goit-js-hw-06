function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const button = document.querySelector("button.change-color");
const colorSpan = document.querySelector("span.color");
button.addEventListener("click", function() {
  document.body.style.backgroundColor = colorSpan.textContent = getRandomHexColor();
});