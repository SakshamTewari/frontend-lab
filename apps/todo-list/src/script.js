const todoInput = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');

addBtn.addEventListener('click', addTodo);


function addTodo(){
    const text = todoInput.value.trim();
    if(!text) return;
    console.log(text)

    const todo = createTodoItem(text);
    todoList.appendChild(todo);
    todoInput.value = ''
}


function createTodoItem(text){
    const li = document.createElement('li');
    li.className = 'todo-item';

    const main = document.createElement('div');
    main.className = 'todo-main';

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.addEventListener('change', () => {
        li.classList.toggle('completed');
    })

    const span = document.createElement('span');
    span.className = 'todo-text';
    span.textContent = text;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'X';
    deleteButton.addEventListener('click', () => {
        li.classList.add('removing');
        setTimeout(() => li.remove(), 1000);
    })

    const subToggle = document.createElement('span');
    subToggle.textContent = '+ sub';
    subToggle.className = 'add-sub';

    const subList = document.createElement('ul');
    subList.className = 'sub-todos';

    // ---- BUILD ----
main.appendChild(checkbox);
main.appendChild(span);
main.appendChild(deleteButton);
// main.appendChild(subToggle);

li.appendChild(main);
li.appendChild(subList);


    return li;
}