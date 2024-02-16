// burger

let burger = document.querySelector('.burger-menu__icon');
let burgerBackground = document.querySelector('.burger-menu__background');
let look = document.body;

burger.addEventListener('click', function(){
    burger.classList.toggle('burger-menu__icon_active');
    burgerBackground.classList.toggle('burger-menu__background_active');
    look.classList.toggle('look');
});

// tabs

document.querySelectorAll('.tabs__link-item').forEach((item) =>
  item.addEventListener('click', function (e) {
      e.preventDefault();
      const id = e.target.getAttribute('href').replace('#', '');

      document.querySelectorAll('.tabs__link-item').forEach(
          (child) => child.classList.remove('tabs__link-item_active')
      );

      document.querySelectorAll('.tabs__container-item').forEach(
          (child) => child.classList.remove('tabs__container-item_active')
      );

      item.classList.add('tabs__link-item_active');
      document.getElementById(id).classList.add('tabs__container-item_active'); 
  })
);

document.querySelector('.tabs__link-item').click();