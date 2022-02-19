'use strict'

// 브라우저 로컬 데이터에 저장

// main method
// 1. 저장 -> localStorage.setItem('key', value);
// 2. 가져오기 => localStorage.getItem('key');
// 3. 삭제 -> localStorage.removeItem('key');

// key에 맞는 data를 가지고 온다.
// 동일한 key에 새로운 값을 저장하면 덮어써지면서 기존 local data의 정보가 수정된다.


// Set Data
const setBtn = document.querySelector('#setBtn');
const setData = document.querySelector('#setData');

// set button click
setBtn.addEventListener('click', () => {
    // set input value
    const setValue = setData.value;

    if(setValue != "") {
        // set localStorage
        localStorage.setItem('userName', setValue);
        console.log('localStorage에',setValue, '저장');
    } else
        alert('data를 입력해주세요.');

    // set input init
    setData.value = "";
});


// Get Data
const getBtn = document.querySelector('#getBtn');
const getData = document.querySelector('#getData');

getBtn.addEventListener('click', () => {
    const getValue = localStorage.getItem('userName');
    if(!getValue) {
        getData.value="";
        alert('저장된 Local Data가 없습니다.');
    }else
        getData.value = getValue;
});


// Remove Local Data
const dataDelBtn = document.querySelector('#dataDelBtn');

dataDelBtn.addEventListener('click', () => {
    const removeData = confirm('Local Data를 삭제하시겠습니까?');
    
    if(removeData) {
        localStorage.removeItem('userName');
        getData.value="";
    }
});