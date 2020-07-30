//Selectors cache the DOM
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const todoInput = document.querySelector('.todo-input');
const filterOption = document.querySelector('.filter-todo');

// Event Listeners
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
filterOption.addEventListener('click', filterTodo)

//Functions
function addTodo(event){
  event.preventDefault()
  //Todo Div and add the class of 'todo'
  const todoDiv = document.createElement('div');
  todoDiv.classList.add('todo');
  // create li, add inner text and class. add it to our Todo div
  const newTodo = document.createElement('li');
  newTodo.innerText = todoInput.value;
  newTodo.classList.add('todo-item');
  todoDiv.appendChild(newTodo)
  // Create checkmark button
  const completedButton = document.createElement('button');
  completedButton.innerHTML = '<i class="fas fa-check"></i>';
  completedButton.classList.add('complete-btn');
  todoDiv.appendChild(completedButton)
  // add trash button
  const trashButton = document.createElement('button');
  trashButton.innerHTML = '<i class="fas fa-trash"></i>';
  trashButton.classList.add('trash-btn');
  todoDiv.appendChild(trashButton);
  // append to list
  todoList.appendChild(todoDiv);
  todoInput.value = '';
}

function deleteCheck(e){
  const item = e.target;

  //Delete TODO
  if(item.classList[0] === 'trash-btn'){
    const todo = item.parentElement;
    todo.classList.add('fall');
    todo.addEventListener('transitionend', () => todo.remove())
  }

  //checkmark
  if(item.classList[0] === 'complete-btn'){
    item.parentElement.classList.toggle('completed')
  }
}

function filterTodo(e){
  const todos = todoList.childNodes;
  console.log(todos)
  todos.forEach(function(todo) {
    switch (e.target.value) {
      case 'all':
        todo.style.display = 'flex';
        break;
      case 'completed':
        if(todo.classList.contains('completed')){
          todo.style.display = 'flex';
        } else {
          todo.style.display = 'none';
        }
    }
  })
}