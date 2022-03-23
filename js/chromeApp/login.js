'use strict'

const loginForm = document.querySelector('#login-form');
const loginInput = document.querySelector('#login-input');
const greeting = document.querySelector('#greeting');
const toDo = document.querySelector('#todo');

// string 변수는 대문자
const CLASS_NAME = 'hidden';
const USER_NAME = 'username';

// function
const login = (e) => {
    e.preventDefault();
    
    localStorage.setItem(USER_NAME, loginInput.value);
    activeClass();
};
const activeClass = () => {
    loginForm.classList.add(CLASS_NAME);
    greeting.classList.remove(CLASS_NAME);
    greeting.innerText = `Hello ${localStorage.getItem(USER_NAME)}!`;
    toDo.classList.remove(CLASS_NAME);
};

// running
if(localStorage.getItem(USER_NAME)) {
    activeClass();
}else {
    loginForm.addEventListener('submit', login);
}
