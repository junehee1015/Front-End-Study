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
const setKey = document.querySelector('#setKey');
const setValue = document.querySelector('#setValue');

// set button click
setBtn.addEventListener('click', () => {
    // set input value
    const set_key = setKey.value;
    const set_value = setValue.value;

    if((set_key != "") && (set_value !="")) {
        // set localStorage
        localStorage.setItem(set_key, set_value);
        alert(`localStorage -> [ ${set_key} : ${set_value} ] 저장`);
    }else
        alert('key와 Value의 data를 입력해주세요.');

    // set input init
    setKey.value = "";
    setValue.value = "";
});


// Get Data
const getBtn = document.querySelector('#getBtn');
const getKey = document.querySelector('#getKey');
const getValue = document.querySelector('#getValue');


getBtn.addEventListener('click', () => {
    const get_key = localStorage.getItem(getKey.value);
    if(!get_key){
        alert('Key를 정확히 입력해주세요.');
        getKey.value = "";
        getValue.value = "";
    }else
        getValue.value = get_key;
});


// Remove Local Data
const dataDelBtn = document.querySelector('#dataDelBtn');

// input에서 받아온 key 로 삭제하는 방법

// const delKey = document.querySelector('#delKey');
// const del_key = localStorage.key(delKey.value);

// dataDelBtn.addEventListener('click', () => {

//     // input의 key와 localStorage의 key가 같은지 확인
//     if(delKey.value == del_key) {
//         const removeData = confirm('Local Data를 삭제하시겠습니까?');
//         if(removeData){
//             localStorage.removeItem(delKey.value);
//             delKey.value="";
//         }else
//             delKey.value="";
//     }else{
//         alert('삭제할 Data의 Key를 정확히 입력해주세요.');
//         delKey.value="";
//     }
// });

// All Delete
dataDelBtn.addEventListener('click', () => {
    if(localStorage.length == 0) {
        alert('저장된 data가 없습니다.');
    }else {
        if(confirm('Local Data를 모두 삭제하시겠습니까?'))
        localStorage.clear();
    }
});