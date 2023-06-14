const rangeInput = document.getElementById("font-size-control");
const textElement = document.getElementById("text");
rangeInput.addEventListener("input", function() {
  textElement.style.fontSize = rangeInput.value + "px";
});
