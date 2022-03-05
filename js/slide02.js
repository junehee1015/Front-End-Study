'use strict'

const slide_container = document.querySelector('.slide_container');
const firstSlide = document.querySelector('.slide_img');
let autoSlide = null;

// slide function
function startSlide() {
    // 현재 slide
    const currSlide = document.querySelector('.showing');
    if (currSlide) {
        currSlide.classList.remove('showing');

        // nextElementSibling: 다음 Element를 호출한다.
        const nextSlide = currSlide.nextElementSibling;

        // 다음 element가 없으면 처음으로 돌아간다.
        nextSlide ? nextSlide.classList.add('showing') : firstSlide.classList.add('showing');
    } else
        firstSlide.classList.add('showing');
}
startSlide(); // 처음 페이지를 시작할때 첫 slide img가 보이도록 하기 위함.

// Auto slide
function startAutoSlide() {
    autoSlide = setInterval(startSlide, 2000);
}
startAutoSlide();

// mouse control
slide_container.addEventListener('mouseenter', () => {
    clearInterval(autoSlide);
});
slide_container.addEventListener('mouseleave', startAutoSlide);