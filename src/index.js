/* eslint-disable no-restricted-globals */
/* eslint-disable import/extensions */
// Add Tasks to List and Storage
// Add/Remove Added Books
import './style.css';
import { Store } from './modules/store.js';
import Events from './modules/ui.js';
// Add EventListening
const addButton = document.querySelector('#form');
const list = document.querySelector('.added-list');
window.addEventListener('load', Events.displayTasks());
addButton.addEventListener('submit', (e) => {
  e.preventDefault();
  Events.addList();
});
list.addEventListener('click', (e) => {
  const clicked = e.target.closest('.fa-trash-can');
  if (!clicked) return;
  const listIndex = +clicked.dataset.index;
  Store.removeTasks(listIndex);
  Events.displayTasks();
});
list.addEventListener('click', (e) => {
  const clicked = e.target.closest('.task-entry');
  if (!clicked) return;
  clicked.addEventListener('keyup', () => {
    const index = +clicked.dataset.index;
    const description = clicked.value.trim();
    Events.editInput(index, description);
  });
});
/* eslint-enable no-restricted-globals */
/* eslint-enable import/extensions */
