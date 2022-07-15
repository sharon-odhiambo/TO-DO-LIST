/* eslint-disable max-classes-per-file */
export class Task {
    constructor(index, description, list) {
      this.index = 0;
      this.description = description;
      this.completed = false;
    }
  }
  
  // local Storage
  export class Store {
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
      const tasks = Store.getTasks();
      tasks.push(task);
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
  
    static removeTasks(description) {
      const tasks = Store.getTasks();
      tasks.forEach((task, index) => {
        if (task.description === description) {
          tasks.splice(index, 1);
        }
      });
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
  }
  /* eslint-enable max-classes-per-file */