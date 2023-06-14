const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientsList = document.querySelector('#ingredients');
const fragment = document.createDocumentFragment();
for (let i = 0; i < ingredients.length; i++) {
  const ingredient = ingredients[i];
  const li = document.createElement('li');
  li.textContent = ingredient;
  if (ingredient !== "") {
    li.classList.add('item');
  }
  fragment.appendChild(li);
}
ingredientsList.appendChild(fragment);
