
const button = document.querySelector('.menu-button');
const menu = document.querySelector('.menu');

// eventListener

function handleMenu(e) {
  e.preventDefault();
  menu.classList.toggle('is-active');
}

button.addEventListener('click', handleMenu);

// Node.addEvent ...