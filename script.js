// 1. Sélectionner des éléments
const title = document.getElementById('title');
const toggleButton = document.getElementById('toggleMode');
const submitButton = document.getElementById('submitName');
const userInput = document.getElementById('username');
const addDivButton = document.getElementById('addDiv');
const removeDivButton = document.getElementById('removeLast');
const elementsContainer = document.getElementById('elementsContainer');
const hiddenText = document.querySelector('.hidden');

// 2. Modifier le contenu et les styles
title.textContent = "Manipulation du DOM avec JavaScript!";
title.style.color = 'blue';
title.style.fontSize = '24px';

// 3. Gérer les événements
toggleButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

submitButton.addEventListener('click', () => {
  alert(`Bonjour, ${userInput.value}!`);
  userInput.value = ''; // Réinitialiser le champ après soumission
});

// 4. Ajouter un élément
addDivButton.addEventListener('click', () => {
  const newDiv = document.createElement('div');
  newDiv.textContent = "Nouvel élément ajouté";
  elementsContainer.appendChild(newDiv);

  // Afficher le texte caché
  hiddenText.classList.remove('hidden');
});

// 5. Supprimer un élément
removeDivButton.addEventListener('click', () => {
  if (elementsContainer.lastChild) {
    elementsContainer.removeChild(elementsContainer.lastChild);
  }
});
