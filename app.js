//Selectors cache the DOM
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const todoInput = document.querySelector('.todo-input');

// Event Listeners
todoButton.addEventListener('click', addTodo);

//Functions
function addTodo(event){
  event.preventDefault()
  const todoDiv = document.createElement('div')
}