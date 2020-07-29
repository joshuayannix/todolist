//Selectors cache the DOM
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const todoInput = document.querySelector('.todo-input');

// Event Listeners
todoButton.addEventListener('click', addTodo);

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