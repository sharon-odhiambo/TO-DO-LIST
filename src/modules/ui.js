/* eslint-disable no-restricted-globals */
/* eslint-disable import/extensions */
// Display Books
import { Store, Task } from './store.js';

export default class Events {
  static displayTasks = () => {
    const tasks = Store.getTasks();
    tasks.forEach((task) => this.displayList(task));
  }

  static displayList = (task) => {
    const list = document.querySelector('.added-list');
    const addedtasks = document.createElement('div');
    addedtasks.innerHTML = `
      <ul class="list-item">
      <li><input type='checkbox' class="check" id="${task.index}"></li>
      <li class="task-entry">${task.description}</li>
      <li class="icons">
      <i class="fa-solid fa-trash-can" data-index="${task.index}"></i>
      </li>
      </ul>`;
    list.appendChild(addedtasks);
  }

  static addList = () => {
    const inpuItem = document.querySelector('.item').value;
    if (!inpuItem) return;
    const list = new Task(Store.getTasks().length, inpuItem, false);
    Store.addTask(list);
    this.displayTasks();
    location.reload();
  }

  static clearFields = () => {
    document.querySelector('.item').value = null;
  }
}
const checkboxes = document.querySelectorAll('input[type=checkbox]');
checkboxes.forEach((checkbox) => {
  checkbox.addEventListener('change', (event) => {
    const inputField = event.target.parentNode;
    inputField.classList.toggle('line-through');
  });
});
/* eslint-enable import/extensions */
/* eslint-enable no-restricted-globals */