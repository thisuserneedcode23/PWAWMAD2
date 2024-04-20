window.onload = () => {
  'use strict';

  // Add event listener to toggle button
  var toggleBtn = document.querySelector('.menu-btn');
  toggleBtn.addEventListener('click', toggleMenu);
}

function toggleMenu() {
  var menu = document.querySelector('.menu');
  menu.classList.toggle('active');
}