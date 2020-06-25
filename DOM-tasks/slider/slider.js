const leftArrow = document.querySelector ('#left');
const rightArrow = document.querySelector ('#right');
const items = document.querySelector ('#items');

let currentRight = 0

rightArrow.addEventListener('click', function(event) {
  event.preventDefault();

  if (currentRight < 500) {
    currentRight += 100;
    items.style.right = `${currentRight}px`;
  }
 
});

leftArrow.addEventListener('click', function(event) {
  event.preventDefault();

  if (currentRight > 0) {
    currentRight -= 100;
    items.style.right = `${currentRight}px`;
  }
});