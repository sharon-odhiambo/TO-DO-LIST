/* eslint-disable max-classes-per-file */
import './style.css';
// Store Task Details
class Task {
  constructor(checkbox, description, remove) {
    this.title = checkbox;
    this.author = description;
    this.remove = remove;
  }
}
// local Storage
class Storage {
  static getTasks() {
    let tasks;
    if (localStorage.getItem('tasks') === null) {
      tasks = [];
    } else {
      tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    return tasks;
  }

  static addTask(task) {
    const tasks = Storage.getTasks();
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  static removeTask(description) {
    const tasks = Storage.getTasks();
    tasks.forEach((task, index) => {
      if (task.description === description) {
        tasks.splice(index, 1);
      }
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }
}

// Display Added Tasks
class Events {
  static displayTasks() {
    const tasks = Storage.getTasks();
    tasks.forEach((task) => Storage.addTask(task));
  }

  static addList(task) {
    const taskslist = document.querySelector('.added-list');
    const inputItem = document.querySelector('.item');
    // const addedtasks = document.createElement('div');
    inputItem.innerHTML = `
        <ul class=" task-items">
        <li class="check">${task.checkbox}</li>
        <li class="task-entry">${task.description}</li>
        </ul><hr>`;
    taskslist.appendChild(inputItem);
  }

  static deleteTask(el) {
    if (el.classList.contains('fa-ellipsis-vertical')) {
      el.parentElement.parentElement.remove();
    }
  }
}
document.addEventListener('DOMContentLoaded', Events.displayTasks);
// Add EventListening to Task List
const addButton = document.querySelector('.fa-level-down-alt');
addButton.addEventListener('click', (e) => {
  e.preventDefault();
  const checkbox = '<i class="far fa-square"></i>';
  const description = document.querySelector('.item').value;
  // const remove = document.querySelector('.fa-ellipsis-vertical');
  // const status = 'false';
  // New Task List
  const task = new Task(checkbox, description);
  // Add Tasks to List and Storage
  Events.addList(task);
  Storage.addTask(task);
});
// Remove task from storage
// document.querySelector('.fa-ellipsis-vertical').addEventListener('click', (e) => {
//   Events.deleteTask(e.target);
//   Storage.removeTask(e.target.parentElement.previousElementSibling.innerHTML);
// });
/* eslint-enable max-classes-per-file */
