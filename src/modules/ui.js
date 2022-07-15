// Display Books
import { Store, task, Task } from './store.js';
export class Events {
  static displayTasks() {
    const tasks = Store.getTasks();
    tasks.forEach((task) => Events.addList(task));
  }

  static addList(task) {
    const list = document.querySelector('.added-list');
    const addedtasks = document.createElement('div');
    addedtasks.innerHTML = `
      <ul class='list-item'>
      <li><input type='checkbox' class='check' id="i"></li>
      <li class='todoListItem'>${task.description}</li>
      <li class="icons">
      <i class="fa-solid fa-ellipsis-vertical"></i>
      <i class="fa-solid fa-trash-can"></i>
      </li>
      </ul>`;
    list.appendChild(addedtasks);
}
  static deleteTask(el) {
    if (el.classList.contains('.fa-trash-can')) {
      el.parentElement.parentElement.remove();
    }
  }

  static clearFields() {
    document.querySelector('.item').value = ''
  }
}
document.addEventListener('DOMContentLoaded', Events.displayTasks);

