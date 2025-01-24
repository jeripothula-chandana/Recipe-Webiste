// Recipess.js
document.addEventListener('DOMContentLoaded', function () {
  const prepTime = document.querySelector('.prep-time');
  const ingredients = document.querySelector('.ingredients');
  const instructions = document.querySelector('.instructions');
  
  prepTime.addEventListener('click', function() {
    this.classList.toggle('hidden');
  });

  ingredients.addEventListener('click', function() {
    this.classList.toggle('hidden');
  });

  instructions.addEventListener('click', function() {
    this.classList.toggle('hidden');
  });
});
