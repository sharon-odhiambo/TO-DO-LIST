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
    tasks.forEach((task) => Events.addTask(task));
  }

  static addList(task) {
    const taskslist = document.querySelector('.added-list');
    const addedtasks = document.createElement('div');
    addedtasks.innerHTML = `
        <ul class=" task-items">
        <li><i class="far fa-square"></i></li>
        <li class="task-entry">${task.description}</li>
        <li><i class="fa-solid fa-ellipsis-vertical"></i></li>
        </ul><hr>`;
    taskslist.innerHTML += addedtasks;
  }

  static deleteTask(el) {
    if (el.classList.contains('fa-ellipsis-vertical')) {
      el.parentElement.parentElement.remove();
    }
  }
}
document.addEventListener('DOMContentLoaded', Events.displayTasks);
// Add EventListening to Task List
document.querySelector('.fa-level-down-alt').addEventListener('click', (e) => {
  e.preventDefault();
  const checkbox = document.querySelector('.fa-square');
  const description = document.querySelector('.task-entry').value;
  const remove = document.querySelector('.fa-ellipsis-vertical').value;
  // const status = 'false';
  // New Task List
  const task = new Task(checkbox, description, remove);
  // Add Tasks to List and Storage
  Events.addList(task);
  Storage.addTask(task);
});
// Remove task from storage
document.querySelector('.fa-ellipsis-vertical').addEventListener('click', (e) => {
  Events.deleteTask(e.target);
  Storage.removeTask(e.target.parentElement.previousElementSibling.innerHTML);
});
/* eslint-enable max-classes-per-file */
