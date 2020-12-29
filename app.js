//Selectors
const todoInput= document.querySelector('.todo-input');
const todoButton= document.querySelector('.todo-button');
const todoList= document.querySelector('.todo-list');

//Event listeners
todoButton.addEventListener('click', addTodo)

//Functions

function addTodo(event){
   // Prevent form from Submitting
   event.preventDefault();
   //Todo DIV
   const todoDiv= document.createElement('div');
   todoDiv.classList.add("todo")
   //Create LI
   const newTodo = document.createElement('li');
   newTodo.innerText= 'Hey';
   newTodo.classList.add('todo-item');
   todoDiv.appendChild(newTodo);
   //Check Mark Button
   const completedButton = document.createElement('button');
   completedButton.innerHTML = '<i class="fas fa-check"></i>';
   completedButton.classList.add("complete-btn");
   todoDiv.appendChild(completedButton);
   //Trash Button
   const trashButton = document.createElement('button');
   trashButton.innerHTML = '<i class="fas fa-trash"></i>';
   trashButton.classList.add("complete-btn");
   todoDiv.appendChild(trashButton);
   //Append to list
   todoList.appendChild(todoDiv)
}