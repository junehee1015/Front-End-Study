'use strict'

const addBtn = document.querySelector('main button');

addBtn.addEventListener('click', () => {
    const tbody = document.querySelector('main tbody');
    
    // table의 tr 한 줄 삽입
    const createRow = tbody.insertRow();
    createRow.classList.add('table-light');

    // table의 td 한 칸 삽입
    const createColumn1 = createRow.insertCell();
    const createColumn2 = createRow.insertCell();
    const createColumn3 = createRow.insertCell();
    const createColumn4 = createRow.insertCell();

    // text append
    const textNode1 = document.createTextNode('홍길동');
    createColumn1.appendChild(textNode1);

    const textNode2 = document.createTextNode(27);
    createColumn2.appendChild(textNode2);

    const textNode3 = document.createTextNode('010-1111-1111');
    createColumn3.appendChild(textNode3);

    const textNode4 = document.createTextNode('honggildong@naver.com');
    createColumn4.appendChild(textNode4);

    // table row
    const table = document.querySelector('main table');

    // row의 갯수
    const row = table.rows.length-1; // table의 th 부분을 제외 해야하기 때문에 -1을 해준다.
    // cell의 갯수
    const cell = table.rows[row].cells.length;

    // 반복문으로 cell의 값 설정
    for(let i=0; i<cell; i++) {
        // tbody에 붙이기 때문에 rows의 index가 0부터 시작해야 한다.
        tbody.rows[row-1].cells[i].innerHTML = `Data[${row-1}][${i}]`;
    }
});