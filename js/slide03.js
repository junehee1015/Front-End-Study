'use strict'

const slide = document.querySelector('.slide');
const slide_img = document.querySelectorAll('.slide_img');
const prev = document.querySelector('#prev');
const next = document.querySelector('#next');

let slide_index = 0; // 현재 보고있는 slide 번호
const img = 32.33; // img 크기
const margin = 1; // img margin

// slide img를 복제하여 앞 뒤로 붙여주는 함수
function makeClone() {
    // cloneNode(), cloneNode(true)
    // -> 요소를 복제한다. true이면 요소의 자식요소까지 복제.
    for(let i=0; i<slide_img.length; i++) {
        const clone = slide_img[i].cloneNode(true);
        clone.classList.add('sdsd');
        slide.appendChild(clone);
    }
    
    // prepend는 반대 순서로 붙여지기때문에 순서를 바꾸어 붙여야한다.
    for(let i=slide_img.length - 1; i>=0; i--) {
        const clone = slide_img[i].cloneNode(true);
        clone.classList.add('sdsd');
        slide.prepend(clone);
    }

    // ul의 width를 clone생성 이후에 새로 바꾸어줘야 한다. 
    slideWidth();
    // 가운대로 위치 이동
    initposition();
    slide.classList.add('animated');
}
makeClone();

function slideWidth() {
    const newSlide_img = document.querySelectorAll('.slide_img');
    const slideWidth = (img + margin) * newSlide_img.length;
    slide.style.width = `${slideWidth}%`;
}
function initposition() {
    // const initposition = (img + margin) * slide_img.length;
    // px로 하면 앞의 clone img의 길이만큼 구하여서 변수로 넣어주면 된다.
    // transform은 재정의하면 정의했던 값이 초기화되기 때문에 사용했던 속성을 다시 적어주어야한다.(-50%)
    slide.style.transform = 'translate(-33.33%, -50%)';
}
function moveSlide(index) {
    slide.style.left = `${-33.33 * index}%`;
    slide_index = index;
    console.log(slide_index, slide_img.length);

    // slide index와 slide의 길이가 같아질 떼 slide를 원위치시켜서 무한히 반복되는 것처럼 보이도록 한다.
    if(slide_index == slide_img.length || slide_index == -slide_img.length) {
        // transition이 작동되는 시간만큼 setTimeout을 해준다.
        setTimeout(() => {
            slide.classList.remove('animated');
            slide.style.left = '0';
            slide_index = 0;
        }, 300);
        setTimeout(() => {
            slide.classList.add('animated');
        }, 330);
    }
}

prev.addEventListener('click', ()=> {
    moveSlide(slide_index - 1);
});
next.addEventListener('click', ()=> {
    moveSlide(slide_index + 1);
});