/* eslint-disable max-classes-per-file */
import './style.css';
import {Task, Storage} from './modules/store.js';
import {Events} from './modules/ui.js';
// Add EventListening to Task List
const addButton = document.querySelector('.fa-level-down-alt');
const deleteButton = document.querySelector('.task-close');
addButton.addEventListener('click', (e) => {
  e.preventDefault();
  const checkbox = 'far fa-square';
  const description = document.querySelector('.item').value;
  const ellips = 'fa-ellipsis-vertical';
  const task = new Task(checkbox, description,ellips);
  // Add Tasks to List and Storage
  Events.addList(task);
  Storage.addTask(task);
});
// // Remove task from storage
// deleteButton.addEventListener('click', (e) => {
//  Events.deleteTask(e.target);
//  Storage.removeTask(e.target.parentElement.previousElementSibling.innerHTML);
// });
// /* eslint-enable max-classes-per-file */
