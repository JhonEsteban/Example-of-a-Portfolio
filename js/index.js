const btnBurger = document.getElementById('btn-burger');
const menu = document.getElementById('main-menu');

btnBurger.addEventListener( 'click', () =>  menu.classList.toggle('show-menu') );