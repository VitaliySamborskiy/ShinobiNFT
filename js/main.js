let burger = document.querySelector('.burger-menu');
let burgerBackground = document.querySelector('.burger-menu__background');
let look = document.body;

burger.addEventListener('click', function(){
    burger.classList.toggle('burger-menu_active');
    burgerBackground.classList.toggle('burger-menu__background_active');
    look.classList.toggle('look');
});

