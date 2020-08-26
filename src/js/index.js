const btnBurger = document.getElementById('btn-burger'),
      menu = document.getElementById('main-menu');

btnBurger.addEventListener( 'click', () =>  menu.classList.toggle('show-menu') );


const menuLinks = document.querySelectorAll('.main-menu__link');

function menuAction (){
  menu.classList.remove('show-menu');
}

for ( let link of menuLinks ) link.addEventListener( 'click', menuAction );