const body = document.getElementsByTagName('body')[0];
const menu = document.querySelector('header nav ul.menu');
const openMenuBtn = document.querySelector('.openMenuBtn');
const closeMenuBtn = document.querySelector('.closeMenuBtn');
const navLinks = document.querySelectorAll('header nav ul.menu li');

function showMenu() {
  menu.classList.add('opened');
  closeMenuBtn.style.display = 'block';
  body.style.overflow = 'hidden';
}

function hideMenu() {
  menu.classList.remove('opened');
  closeMenuBtn.style.display = 'none';
  body.style.overflow = 'auto';
}

openMenuBtn.addEventListener('click', showMenu);
closeMenuBtn.addEventListener('click', hideMenu);

navLinks.forEach((link) => {
  link.addEventListener('click', hideMenu);
});
