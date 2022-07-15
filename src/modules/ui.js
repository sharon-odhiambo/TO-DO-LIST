// Display Books
import { Store, Task} from './store.js';
export class Events {
  static displayTasks = () => {
    const tasks = Store.getTasks();
    tasks.forEach((task) => this.displayList(task));
  }

  static displayList = (task) => {
    const list = document.querySelector('.added-list');
    const addedtasks = document.createElement('ul');
    addedtasks.innerHTML = `
      <input type='checkbox' class='check' id="${task.index}">
      <li class='todoListItem'>${task.description}</li>
      <div class="icons">
      <i class="fa-solid fa-ellipsis-vertical"></i>
      <i class="fa-solid fa-trash-can" data-index="${task.index}"></i>
      </div>`;
    list.appendChild(addedtasks);
}

  static addList = () => {
    const inpuItem = document.querySelector('.item').value;
    if (!inpuItem) return; 
    const list = new Task(Store.getTasks().length, inpuItem, false);
    Store.addTask(list);
    this.displayTasks();
  }

  // static deleteTask = (el) => {
  //   if (el.classList.contains('.fa-solid fa-trash-can')) {
  //     el.parentElement.parentElement.remove();
  //   }

  static clearFields = () => {
    document.querySelector('.item').value = ''
  }
}

