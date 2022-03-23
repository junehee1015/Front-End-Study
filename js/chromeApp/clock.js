'use strict'

const today = document.querySelector('#today');
const clock = document.querySelector('#clock');

const setToday = () => {
    const date = new Date();
    let days = date.getDay();
    const dates = String(date.getDate()).padStart(2, '0');
    const months = String(date.getMonth() + 1).padStart(2, '0'); // month(0~11 -> +1 = 1~12)
    const years = date.getFullYear();

    switch (days) {
        case 0:
            days = '일요일';
            break;
        case 1:
            days = '월요일';
            break;
        case 2:
            days = '화요일';
            break;
        case 3:
            days = '수요일';
            break;
        case 4:
            days = '목요일';
            break;
        case 5:
            days = '금요일';
            break;
        case 6:
            days = '토요일';
            break;
    }

    today.innerText = `${years}년 ${months}월 ${dates}일 ${days}`;
};
const setClock = () => {
    const date = new Date();
    const seconds = String(date.getSeconds()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    
    clock.innerText = `${hours}:${minutes}:${seconds}`;
};
setToday();
setInterval(setToday, 1000);
setClock();
setInterval(setClock, 1000);