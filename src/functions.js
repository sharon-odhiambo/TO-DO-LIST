/* eslint-disable max-classes-per-file */
/* eslint-disable no-restricted-globals */
/* eslint-disable import/extensions */
// local Storage
export class Task {
  constructor(index, description) {
    this.index = index;
    this.description = description;
    this.completed = false;
  }
}
export class Store {
      static getTasks = () => {
        let tasks;
        if (localStorage.getItem('tasks') === null) {
          tasks = [];
        } else {
          tasks = JSON.parse(localStorage.getItem('tasks'));
        }
        return tasks;
      }

      static addTask = (task) => {
        const tasks = Store.getTasks();
        tasks.push(task);
        localStorage.setItem('tasks', JSON.stringify(tasks));
      }

      static removeTask = (ind) => {
        const tasks = Store.getTasks();
        tasks.splice(ind, 1);
        return tasks;
      }

      static removeTasks = (ind) => {
        const tasks = Store.getTasks();
        tasks.forEach((task, index) => {
          if (task.index === ind) {
            tasks.splice(index, 1);
          }
        });
        localStorage.setItem('tasks', JSON.stringify(tasks));
      }
}

// Display Books
export class Events {
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
    Events.displayTasks();
  }
}

/* eslint-enable import/extensions */
/* eslint-enable no-restricted-globals */
/* eslint-enable max-classes-per-file */