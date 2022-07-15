/* eslint-disable max-classes-per-file */
import './style.css';
import {Task, Store} from './modules/store.js';
import {Events} from './modules/ui.js';
// Add EventListening to Task List
const task = new Task();
const addButton = document.querySelector('.fa-level-down-alt');
const deleteButton = document.querySelector('.fa-trash-alt');
addButton.addEventListener('click', (e) => {
  e.preventDefault();
  // Add Tasks to List and Storage
  Store.addTask(task);
  Events.addList(task);
});
// // Remove task from list and storage
// deleteButton.addEventListener('click', (e) => {
//  Events.deleteTask(e.target);
//  Storage.removeTask(e.target.parentElement.previousElementSibling.innerHTML);
// });
/* eslint-enable max-classes-per-file */
