/* eslint-disable import/extensions */
/* eslint-disable no-unused-vars */

import { Store } from './modules/store.js';
import Events from './modules/ui.js';

const updateCompleted = (index) => {
  const tasks = Store.getTasks();
  const task = tasks.find((task) => task.index === index);
  task.completed = !task.completed;
  localStorage.setItem('tasks', JSON.stringify(tasks));
};
const clearCompleted = () => {
  const tasks = Store.getTasks();
  tasks.forEach((task, index) => {
    if (task.completed === true) {
      tasks.splice(index);
    }
    Events.displayTasks();
  });
  localStorage.setItem('tasks', JSON.stringify(tasks));
};
export { updateCompleted, clearCompleted };

/* eslint-enable import/extensions */
/* eslint-disable no-unused-vars */