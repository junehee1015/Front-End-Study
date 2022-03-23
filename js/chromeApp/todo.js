const todoForm = document.querySelector('#todo-form');
const todoInput = document.querySelector('#todo-input');
const todoList = document.querySelector('#todo-list');

let toDos = []; // To Do가 생성될 때 저장될 공간.
const TODOS = 'toDos';

// save To Do
function saveToDo() {
    // JSON.stringify(): Object 또는 array를 string으로 만들어준다.
    localStorage.setItem(TODOS, JSON.stringify(toDos));
}
// delete To Do
function deleteToDo(e) {
    // e.target: event가 발생한 element.
    // parentElement: 부모태그.
    const li = e.target.parentElement;

    li.remove();

    // filter(): true가 return되면 값들이 반환된다.
    // -> click한 To Do는 toDos 배열에 저장된 Obj의 id와 li의 id가 같으면 제외된다. (!== 이기 때문에 false가 반환된다.)
    // -> value.id = number / li.id = string -> data type을 맞춰주어야하기 때문에 parseInt()를 사용.
    toDos = toDos.filter(value => value.id !== parseInt(li.id));

    // 바뀐 값을 다시 저장
    saveToDo();
}

// append To Do List 
function paintToDo(newToDoObj) {
    const li = document.createElement('li');
    li.id = newToDoObj.id; // localStorage의 id값과 li의 id값을 비교하여 삭제하기 위함.

    const span = document.createElement('span');
    span.innerText = newToDoObj.text;

    const btn = document.createElement('button'); // form 안에 button은 submit이 된다.
    btn.innerText = '❌';
    btn.addEventListener('click', deleteToDo); // btn delete event

    li.appendChild(span);
    li.appendChild(btn);
    todoList.appendChild(li);
}

// form submit
function handleToDoSubmit(e) {
    e.preventDefault();

    const newToDo = todoInput.value;
    todoInput.value = "";

    // Object는 id를 사용하여 원하는 To Do를 삭제하기 위함.
    // Date.now(): 현재 시간을 milliSecond 출력. -> 중복되지 않는 random 숫자로 활용.
    const newToDoObj = {
        id: Date.now(),
        text: newToDo
    };

    // array에 To Do 저장.
    // localStorage에는 array는 저장할 수 없다.
    // -> 오직 String만 가능하다.
    toDos.push(newToDoObj);

    // create list
    paintToDo(newToDoObj);

    // save localStorage
    saveToDo();
}

todoForm.addEventListener('submit', handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS);
if(savedToDos !== null) {
    // JSON.parse(): string을 array의 형태로 변환한다.
    // 각각의 item을 사용하기 위해 array의 형태로 변환한다.
    const parsedToDos = JSON.parse(savedToDos);

    // To Do가 누적되도록 이전의 값들을 포함하여준다.
    toDos = parsedToDos;

    // array에 있는 각각의 item으로 function을 실행한다.
    // -> painToDo function을 사용하여 각각의 To Do가 생성될 때 localStorage에 array형태로 생성된다.
    parsedToDos.forEach(paintToDo);
}