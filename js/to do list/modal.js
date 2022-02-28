'use strict'

// modal
const modalBtn = document.querySelector('#modalBtn');
const modal = document.querySelector('.modal');
const modal_bg = document.querySelector('#modal_bg');
const showModal = () => {
    modal.classList.remove('showModal');
};
const closeModal = () => {
    modal.classList.add('showModal');
}

// modal 닫기
const closeBtn = document.querySelector('#closeBtn');
// modal 열기
modalBtn.addEventListener('click', showModal);
// modal 닫기
closeBtn.addEventListener('click', closeModal);
modal_bg.addEventListener('click', closeModal);
