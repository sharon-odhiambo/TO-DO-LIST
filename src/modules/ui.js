/* eslint-disable no-restricted-globals */
/* eslint-disable import/extensions */
// Display Books
import { Store, Task } from './store.js';

export default class Events {
  static displayTasks = () => {
    const list = document.querySelector('.added-list');
    list.innerHTML = '';
    const tasks = Store.getTasks();
    tasks.forEach((task) => {
      const addedtasks = document.createElement('div');
      const flag = task.completed ? 'checked' : '';
      addedtasks.innerHTML = `
      <ul class="list-item">
      <li><input type='checkbox' class="check" id="${task.index}" data-index="${task.index}" ${flag}></li>
      <li><input type="text" class="task-entry" data-index="${task.index}" data-completed="${task.completed}" value="${task.description}"></li>
      <li class="icons">
      <i class="fa-solid fa-trash-can" data-index="${task.index}"></i>
      </li>
      </ul>`;
      list.appendChild(addedtasks);
    });
  };

  static addList = () => {
    const inpuItem = document.querySelector('.item').value;
    if (!inpuItem) return;
    const list = new Task(Store.getTasks().length, inpuItem, false);
    Store.addTask(list);
    this.displayTasks();
  }

  static clearFields = () => {
    document.querySelector('.item').value = null;
  }

 static editInput = (index, description) => {
   const tasks = Store.getTasks();
   const task = tasks.find((task) => task.index === index);
   task.description = description;
   localStorage.setItem('tasks', JSON.stringify(tasks));
 }
}
/* eslint-enable import/extensions */
/* eslint-enable no-restricted-globals */