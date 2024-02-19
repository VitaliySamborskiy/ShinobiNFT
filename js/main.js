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

// animation

// const animItems = document.querySelectorAll('.bottom-anim');

// if (animItems.length > 0) {
//     window.addEventListener('scroll', animOnScroll);
//     function animOnScroll() {
//         for (let index = 0; index< animItems.length; index++) {
//             const animItems = animItems[index];
//             const animItemsHeight = animItems.offsetHeight;
//             const animItemsOffset = offset(animItems).top;
//             const animStart = 4;

//             let animItemsPoint = window.innerHeight - animItemsHeight / animStart;

//             if (animItemsHeight > window.innerHeight) {
//                 animItemsPoint = window.innerHeight - window.innerHeight / animStart;
//             }

//             if ((pageYOffset > animItemsOffset - animStart) && pageYOffset < (animItemsOffset + animItemsHeight)){
//                 animItems.classList.add('bottom_active');
//             } else {
//                 animItems.classList.remove('bottom_active');
//             }
//         }
//     }
//     function offset(el) {
//         const rect = el.getBoundingClientRect(),
//             scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
//             scrollTop = window.pageYOffset || document.documentElement.scrollTop;
//         return { top: rect.top + scrollTop, left: rect.left + scrollLeft}
//     }

//     animOnScroll();
// }

const bottomAnimItems = document.querySelectorAll('.bottom-anim');
const topAnimItems = document.querySelectorAll('.top-anim');
const leftAnimItems = document.querySelectorAll('.left-anim');
const rightAnimItems = document.querySelectorAll('.right-anim');

if (bottomAnimItems.length > 0 || topAnimItems.length > 0 || leftAnimItems.length > 0 || rightAnimItems.length > 0) {
    window.addEventListener('scroll', animElements);

    function animElements() {
        animOnScroll(bottomAnimItems, 3);
        animOnScroll(topAnimItems, 3);
        animOnScroll(leftAnimItems, 3);
        animOnScroll(rightAnimItems, 3);
    }

    function animOnScroll(items, animStart) {
        for (let index = 0; index < items.length; index++) {
            const animItem = items[index];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            let animItemPoint = window.innerHeight - animItemHeight / animStart;

            if (animItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }

            if ((window.pageYOffset > animItemOffset - animItemPoint) && window.pageYOffset < (animItemOffset + animItemHeight)) {
                animItem.classList.add('bottom_active');
                animItem.classList.add('top_active');
                animItem.classList.add('left_active');
                animItem.classList.add('right_active');
            } else {
                if (!animItem.classList.contains('anim-no-hide'))
                    animItem.classList.remove('bottom_active', 'top_active', 'left_active', 'right_active');
            }
        }
    }

    function offset(el) {
        const rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
    }

    animElements();
}