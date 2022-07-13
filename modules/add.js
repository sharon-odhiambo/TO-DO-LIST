// Display Added Tasks
import Storage from './store.js';

export default class Events {
  static displayTasks() {
    const tasks = Storage.getTasks();
    tasks.forEach((task) => Events.addTask(task));
  }

  static addList(task) {
    const taskslist = document.querySelector('.added-list');
    const addedtasks = document.createElement('div');
    addedtasks.innerHTML = `
        <ul class=" task-items">
        <li><i class="far fa-square check"></i></li>
        <li class="task-entry">${task.description}</li>
        <li><i class="fa-solid fa-ellipsis-vertical removebutton"></i></li>
        </ul><hr>`;
    taskslist.innerHTML += addedtasks;
  }

  static deleteTask(el) {
    if (el.classList.contains('removebutton')) {
      el.parentElement.parentElement.remove();
    }
  }
}
document.addEventListener('DOMContentLoaded', Events.displayTasks);