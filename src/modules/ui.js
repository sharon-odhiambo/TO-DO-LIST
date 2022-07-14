import { forEach } from 'lodash';
import {Storage} from './store.js';
// Display Added Tasks
// export const task = new Storage();
export class Events {
    constructor(lists) {
        this.lists = lists;
    }

    static addList(task) {
      let taskslist = document.querySelector('.added-list');
      let inputItem = document.querySelector('.item');
      inputItem.innerHTML = '';
        for (let i = 0; i < this.lists; i += 1) {
        inputItem.innerHTML += `<div class='todo-div'>
          <input type='checkbox' class='check' id="${i}">
          <li class='todoListItem'>${this.lists[i].description}</li>
          <div class="icons"
          <i class="fa-solid fa-ellipsis-vertical"></i>
          <i class="fa-solid fa-trash-can" data-index=${i + 1}></i>
          </div>
          </div>
          `;
      taskslist.innerHTML += inputItem;
    }
  }
    static displayTasks(task) {
      const tasks = Storage.getTasks();
      tasks = Events.addList();
      localStorage.setItem('lists', JSON.stringify(task));
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