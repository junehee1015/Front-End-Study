'use strict'

// slide element
const slide_container = document.querySelector('.slide_container');
const slide = document.querySelector('.slide');
const slide_img = document.querySelectorAll('.slide_img');
const dot_controller = document.querySelector('.dot_controller');
// button
const prev = document.getElementById('prev');
const next = document.getElementById('next');
// 현재 slide의 위치
let slide_index = 0;

// Auto slide를 동작할 수 있는 변수
// undefined는 변수를 지정하고 아무것도 하지 않은 상태이기 때문에 빈 변수를 만들때는 null을 사용. 
let autoSlide = null;
// dot_controller
let dot = null;
let allDot = null;


// slide img를 가로로 나열
slide_img.forEach((value, index) => {
    value.style.left = `${index * 100}%`;
});

// img의 갯수만큼 dot 만들기
slide_img.forEach(() => {
    dot = document.createElement('button');
    dot.classList.add('dot');
    dot_controller.appendChild(dot);
});

// slide의 position을 바꿔주는 함수
function moveSlide(index) {
    slide.style.left = `${-100 * index}%`;
    slide_index = index;
    
    allDot = document.querySelectorAll('.dot');
    for(let i of allDot) {
        i.classList.remove('showing'); // click 할때마다 dot의 class를 지운다.
    }
    allDot[index].classList.add('showing'); // click한 dot에 class를 추가.
}
moveSlide(0);
// moveSlide(0)을 사용하는 이유
// 1. 첫 slide에는 showing이 적용되지 않기 때문에 첫번째 slide를 호출함으로써 showing을 적용시킨.
// 2. allDot의 querySelectorAll을 밖에서도 사용하기 위함.

// dot control
allDot.forEach((value, index) => {
    value.addEventListener('click', (e) => {
        moveSlide(index); // dot을 click 할때마다 이동 해당 slide로 이동
    });
});

// 좌우 button
prev.addEventListener('click', () => {
    slide_index == 0 ? moveSlide(slide_img.length - 1) : moveSlide(slide_index - 1);
});
next.addEventListener('click', () => {
    slide_index == slide_img.length - 1 ? moveSlide(0) : moveSlide(slide_index + 1);
});

// Auto slide
// 변수를 재사용 할 수 없기 때문에 변수를 함수로 감싸서 사용한다.
function startAutoSlide() {
    autoSlide = setInterval(() => {
        slide_index == slide_img.length - 1 ? moveSlide(0) : moveSlide(slide_index + 1);
    }, 1000);
}
startAutoSlide();

// 마우스가 slide에 들어오면 Auto slide가 멈춘다.
slide_container.addEventListener('mouseenter', () => {
    clearInterval(autoSlide);
});
// 마우스가 slide를 벗어나면 다시 Auto slide가 실행된다.
slide_container.addEventListener('mouseleave', startAutoSlide);