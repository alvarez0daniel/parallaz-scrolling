// Text elements
 heroText = document.getElementById('hero-text');

// Image elements
let bird1 = document.getElementById('bird1');
let bird2 = document.getElementById('bird2');
let forest = document.getElementById('forest');
let rocks = document.getElementById('rocks');
let water = document.getElementById('water');

// UI elements
let mainNav = document.getElementById('main-nav');
let heroBtn = document.getElementById('hero-btn');


window.addEventListener('scroll', () => {
  let value = window.scrollY;

  // Hero text
  heroText.style.top = 50 + value * -0.5 + '%';

  // Birds
  bird1.style.top = value * -1.5 + 'px';
  bird1.style.left = value * 2 + 'px';

  bird2.style.top = value * -1.5 + 'px';
  bird2.style.left = value * -2 + 'px';

  // UI
  mainNav.style.top = value * 0.5 + 'px';
  heroBtn.style.marginTop = value * 1.5 + 'px';

  // Rocks
  rocks.style.top = value * -0.12 + 'px';

  // Forest
  forest.style.top = value * 0.25 + 'px';
});