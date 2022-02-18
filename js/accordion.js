'use strict'

const question = document.querySelectorAll('main tbody .faq-question');
const answer = document.querySelectorAll('main tbody .faq-answer-box');
const closeBtn = document.querySelector('main #faq-close-btn');

// FAQ title
question.forEach((value, index) => {
    value.addEventListener('click', () => {

        // FAQ answer
        answer[index].classList.toggle('answer-show');
    });
});  

// button animation
closeBtn.addEventListener('mousedown', () => {
    closeBtn.style.transform = 'scale(0.95)';
});
closeBtn.addEventListener('mouseup', () => {
    closeBtn.style.transform = 'scale(1)';
});

// close button
closeBtn.addEventListener('click', () => {
    answer.forEach((value) => {
        value.classList.remove('answer-show');
    });
});