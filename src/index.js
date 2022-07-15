  // Add Tasks to List and Storage
// Add/Remove Added Books
import './style.css';
import { task, Task, Store } from './modules/store.js';
import {Events} from './modules/ui.js';
// Add EventListening
const addButton = document.querySelector('.fa-level-down-alt');
const deleteButton = document.querySelectorAll('.fa-trash-can');
console.log(deleteButton)
addButton.addEventListener('click', (e) => {
  e.preventDefault();
  Events.addList(task);
  Store.addTask(task);
  Events.clearFields();
});
deleteButton.addEventListener('click', (e) => {
  Events.deleteTask(e.target);
  Store.removeTasks(e.target.parentElement.previousElementSibling.innerHTML);
});
