'use strict'

// list
const form = document.querySelector('form');
const input = document.querySelector('#text');
const ul = document.querySelector('.to_do_list');
const submitText = () => {
    event.preventDefault();
    const text = input.value;

    if(!text)
        alert('할 일을 작성해주세요.');
    else {
        const li = document.createElement('li');

        const ham = document.createElement('div');
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
        li.appendChild(ham);
        li.appendChild(input_text);
        li.appendChild(editBtn);
        li.appendChild(delBtn);
        ul.appendChild(li);

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
                ul.removeChild(li);
        });
    }
}

// text 저장
form.addEventListener('submit', submitText);