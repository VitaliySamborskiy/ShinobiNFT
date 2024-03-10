
// animation

const options ={
    rootMargin: '-40px',
};

const scrollObserver = new IntersectionObserver((scroll) => {
    scroll.forEach((bottom) => {
        if (bottom.isIntersecting) {
            bottom.target.classList.add('bottom_active');
        } 
    });
    scroll.forEach((left) => {
        if (left.isIntersecting) {
            left.target.classList.add('left_active');
        } 
    });
    scroll.forEach((top) => {
        if (top.isIntersecting) {
            top.target.classList.add('top_active')
        }
    });
    scroll.forEach((right) => {
        if (right.isIntersecting) {
            right.target.classList.add('right_active')
        }
    });
}, options);

const bottomAnimItems = document.querySelectorAll('.bottom-anim');
bottomAnimItems.forEach((b) => scrollObserver.observe(b));

const leftAnimItems = document.querySelectorAll('.left-anim');
leftAnimItems.forEach((l) => scrollObserver.observe(l));

const topAnimItems = document.querySelectorAll('.top-anim');
topAnimItems.forEach((t) => scrollObserver.observe(t));

const rightAnimItems = document.querySelectorAll('.right-anim');
rightAnimItems.forEach((r) => scrollObserver.observe(r));