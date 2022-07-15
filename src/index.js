  // Add Tasks to List and Storage
// Add/Remove Added Books
import { Task, Store } from './modules/store.js';
import Events from './modules/ui.js';
// Add EventListening
const addButton = document.querySelector('.fa-level-down-alt');
const deleteButton = document.querySelector('task-close');
addButton.addEventListener('click', (e) => {
  e.preventDefault();
  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;
  const isbn = document.querySelector('#isbn').value;
  const book = new Book(title, author, isbn);
  Events.addList(task);
  Store.addTask(task);
  Events.clearFields();
});
deleteButton.addEventListener('click', (e) => {
  Events.deleteTask(e.target);
  Store.removeTasks(e.target.parentElement.previousElementSibling.innerHTML);
});
