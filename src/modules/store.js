/* eslint-disable max-classes-per-file */
// Store Task Details
export class Task {
    constructor(checkbox, description, ellips) {
      this.checkbox = checkbox;
      this.description = description;
      this.ellips = ellips;
    }
  }
// local Storage
export class Storage {
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
  /* eslint-enable max-classes-per-file */