
// animation

const bottomAnimItems = document.querySelectorAll('.bottom-anim');
const topAnimItems = document.querySelectorAll('.top-anim');
const leftAnimItems = document.querySelectorAll('.left-anim');
const rightAnimItems = document.querySelectorAll('.right-anim');

if (bottomAnimItems.length > 0 || topAnimItems.length > 0 || leftAnimItems.length > 0 || rightAnimItems.length > 0) {
    window.addEventListener('scroll', animElements);

    function animElements() {
        animOnScroll(bottomAnimItems, 15);
        animOnScroll(topAnimItems, 15);
        animOnScroll(leftAnimItems, 15);
        animOnScroll(rightAnimItems, 15);
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