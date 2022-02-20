'use strict'

const dataView = document.querySelector('#dataView');
const tbody = document.querySelector('section tbody');

dataView.addEventListener('click', () => {
    // display: none 해제
    tbody.classList.add('data-area');

    // localStrorage에 data가 존재하는지 확인
    if(localStorage.length == 0) {
        alert('저장된 데이터가 없습니다.');
    } else {
        let result = "";
        
        // localStorage의 data만큼 출력
        for(let i=0; i<localStorage.length; i++) {
            let key = localStorage.key(i);
            result += '<tr class="table-light">';
            result += '<td class="data-key">'+localStorage.key(i)+'</td>';
            result += '<td>'+localStorage.getItem(localStorage.key(i))+'</td>';
            result += '<td><button id="delDataBtn">Delete</button></td>';
            result += '</tr>';
        }
        
        // innerHtml로 table에 붙이기
        tbody.innerHTML = result;
        
        // 개별 data 삭제
        const delDataBtn = document.querySelectorAll('section tbody #delDataBtn');
        const delData = document.querySelectorAll('section tbody .data-key');
        
        // 원하는 data의 delete button을 선택하기 위한 forEach
        delDataBtn.forEach((value, index) => {
            value.addEventListener('click', () => {

                // html에 출력된 data key
                let key = delData[index].textContent;

                // data를 삭제할지 여부
                const delMessage = confirm(`해당 key(${key})의 data를 삭제하시겠습니까?`);
    
                if(delMessage){
                    localStorage.removeItem(key);
                    // data 삭제 후 페이지 새로고침
                    location.reload();
                }
            });
        });
    }
});
