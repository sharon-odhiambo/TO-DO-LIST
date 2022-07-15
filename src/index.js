/* eslint-disable no-restricted-globals */
/* eslint-disable import/extensions */
// Add Tasks to List and Storage
// Add/Remove Added Books
import './style.css';
import { Store } from './modules/store.js';
import Events from './modules/ui.js';
// Add EventListening
const addButton = document.querySelector('.fa-level-down-alt');
const deleteButton = document.querySelector('.added-list');
window.addEventListener('load', Events.displayTasks());
addButton.addEventListener('click', (e) => {
  e.preventDefault();
  Events.addList();
});
deleteButton.addEventListener('click', (e) => {
  const clicked = e.target.closest('.fa-trash-can');
  if (!clicked) return;
  const listIndex = +clicked.dataset.index;
  Store.removeTasks(listIndex);
  Events.displayTasks();
  location.reload();
});
/* eslint-enable no-restricted-globals */
/* eslint-enable import/extensions */
