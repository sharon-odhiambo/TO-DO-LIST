import { forEach } from 'lodash';
import {Store} from './store.js';
// Display Added Tasks
// export const task = new Storage();
// Display Books
export class Events {
    constructor() {
        this.lists = lists;
    }

    static displayTasks(task) {
        const tasks = Storage.getTasks();
        tasks.forEach((task) => Events.addList(task));
      }

    static addList(task) {
      let taskslist = document.querySelector('.added-list');
      const tasks = Store.getTasks();
      tasks.forEach(task => {
        taskslist.innerHTML = `<div class='todo-div'>
          <input type='checkbox' class='check' id="1">
          <li class='todoListItem'>gggg</li>
          <div class="icons"
          <i class="fa-solid fa-ellipsis-vertical"></i>
          <i class="fa-solid fa-trash-can" data-index="1"></i>
          </div>
          </div>
          `;
      })
      console.log(task)
    //   taskslist.appendChild(inputItem.innerHTML);
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