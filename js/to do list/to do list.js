'use strict'

// list
const form = document.querySelector('form');
const input = document.querySelector('#text');
const task = document.querySelector('#task');
const submitText = () => {
    event.preventDefault();
    const text = input.value;

    if(!text)
        alert('할 일을 작성해주세요.');
    else {
        const to_do_list = document.createElement('div');
        to_do_list.classList.add('to_do_list');

        const draggable = document.createElement('div');
        draggable.classList.add('draggable');
        draggable.setAttribute('draggable', 'true');

        const ham = document.createElement('div');
        ham.classList.add('ham');
        const span1 = document.createElement('span');
        const span2 = document.createElement('span');
        const span3 = document.createElement('span');

        const input_text = document.createElement('input');
        input_text.type = 'text';
        input_text.value = text;
        input_text.setAttribute('readonly', 'readonly');

        const editBtn = document.createElement('button');
        editBtn.classList.add('editBtn');
        editBtn.innerText = 'Edit';
        
        const delBtn = document.createElement('button');
        delBtn.classList.add('delBtn');
        delBtn.innerText = 'Delete';

        ham.appendChild(span1);
        ham.appendChild(span2);
        ham.appendChild(span3);
        draggable.appendChild(ham);
        draggable.appendChild(input_text);
        draggable.appendChild(editBtn);
        draggable.appendChild(delBtn);
        to_do_list.appendChild(draggable);
        task.appendChild(to_do_list);

        input.value = "";

        // Edit
        editBtn.addEventListener('click', () => {
            if(editBtn.innerText == 'Edit') {
                input_text.removeAttribute('readonly');
                input_text.focus();
                editBtn.innerText = 'save';
            }else {
                input_text.setAttribute('readonly', 'readonly');
                editBtn.innerText = 'Edit';
                alert('내용이 수정되었습니다.');
            }
        });

        // Delete
        delBtn.addEventListener('click', () => {
            if(confirm('해당 목록을 삭제하시겠습니까?'))
                task.removeChild(to_do_list);
        });

        // Drag & Drop
        const dragElement = document.querySelectorAll('.draggable');
        dragElement.forEach(value => {
            value.addEventListener('dragstart', (e) => {
                value.classList.add('dragging');
            });
            value.addEventListener('dragend', () => {
                value.classList.remove('dragging');
            });
        });
        
        const dragContainer = document.querySelectorAll('.to_do_list');
        dragContainer.forEach(value => {
            value.addEventListener('dragover', (e) => {
                // cursor가 drop이 가능하다는 표시로 바뀐다
                // preventDefault()는 drop을 허용하는 의미
                e.preventDefault();
                const afterElement = getAfterElement(value, e.clientY); // e.ClientY -> 마우스의 수직 좌표 값
                const dragging = document.querySelector('.dragging');
                
                afterElement == null ? value.appendChild(dragging) : value.insertBefore(dragging, afterElement);
            });
        });
    }
}

// drag and drop을 하기 위해 이전 요소를 얻어오는 함수
function getAfterElement(dragContainer, y) {
    // .draggable class중 .dragging class가 아닌 것을 모두 배열에 담는다.
    const draggableElement = [...dragContainer.querySelectorAll('.draggable:not(.dragging)')];

    // reduce(가장 가까운 요소, 현재 요소)
    return draggableElement.reduce((closest, curr) => {

        // getBoundingClientRect() => 요소의 현재 viewport 위치를 DOMRect 객체로 반환한다.
        const currElement = curr.getBoundingClientRect();

        // 선택된 요소 위치 =  마우스의 수직 좌표 값 - 요소의 top 위치 - 요소의 높이의 절반
        const position = y - currElement.top - currElement.height / 2;

        // 조건은 position은 0보다 작지만 가장 가까운 값
        if(position < 0 && position > closest.position) {
            return {position: position, element: curr};
        }else {
            // 조건에 일치하지 않으면 가장 가까운 값 반환
            return closest;
        }
        // 음의 무한대 -infinity
    }, {position: Number.NEGATIVE_INFINITY}).element;
}

// text 저장
form.addEventListener('submit', submitText);