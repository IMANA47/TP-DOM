// Sélectionner des éléments
const title = document.getElementById('title');
const toggleButton = document.getElementById('toggleMode');
const submitButton = document.getElementById('submitName');
const userInput = document.getElementById('username');
const addDivButton = document.getElementById('addDiv');
const removeDivButton = document.getElementById('removeLast');
const elementsContainer = document.getElementById('elementsContainer');
const hiddenText = document.querySelector('.hidden');

// Modifier le contenu et les styles
title.textContent = "Manipulation du DOM avec JavaScript!";
title.style.color = 'yellow';
title.style.fontSize = '24px';

// Gérer les événements
toggleButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

submitButton.addEventListener('click', () => {
  alert(`Bonjour, ${userInput.value}!`);
  userInput.value = ''; // Réinitialiser le champ après soumission
});

//  Ajouter un élément
addDivButton.addEventListener('click', () => {
  const newDiv = document.createElement('div');
  newDiv.textContent = "Nouvel élément ajouté";
  elementsContainer.appendChild(newDiv);

  // Afficher le texte caché
  hiddenText.classList.remove('hidden');
});

// Supprimer un élément
removeDivButton.addEventListener('click', () => {
  if (elementsContainer.lastChild) {
    elementsContainer.removeChild(elementsContainer.lastChild);
  }
});
