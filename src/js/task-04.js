let counterValue = 0;
const valueEl = document.getElementById('value');
const incrementBtn = document.querySelector('button[data-action="increment"]');
const decrementBtn = document.querySelector('button[data-action="decrement"]');
incrementBtn.addEventListener('click', () => {
  valueEl.textContent = counterValue += 1;
});
decrementBtn.addEventListener('click', () => {
  valueEl.textContent = counterValue -= 1;
});
