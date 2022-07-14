import {Task, Storage} from './store.js';
// Display Added Tasks
const checkbox = document.createElement('div');
checkbox.innerHTML = '<i class="fas fa-check"></i>';
const description = document.querySelector('.item').value;
const ellips = document.createElement('div');
ellips.innerHTML = '<i class="fas fa-trash-alt"></i>';
const task = new Task(checkbox, description,ellips);
export class Events {
    static addList(task) {
      let taskslist = document.querySelector('.added-list');
      const inputItem = document.querySelector('.item');
      inputItem.innerText = `
          <ul class="task-items">
          <li class="task-check">${task.checkbox}</li>
          <li class="task-entry">${task.description}</li>
          <li class="task-close">${task.ellips}</li>
          </ul><hr>`;
      taskslist.innerHTML += inputItem;
      console.log(taskslist)
    }
  
    static displayTasks() {
      const tasks = Storage.getTasks();
      tasks.forEach((task) => Events.addList(task));
    }
  
    static deleteTask(el) {
      if (el.classList.contains('task-close')) {
        el.parentElement.parentElement.remove();
      }
    }

    static clearList() {
        document.querySelector('.item').value = '';
    }
  }
  document.addEventListener('DOMContentLoaded', Events.addList)