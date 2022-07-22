/* eslint-disable import/extensions */
/* eslint-disable no-unused-vars */

import { Store } from './store.js';
import Events from './ui.js';

const updateCompleted = (index) => {
  const tasks = Store.getTasks();
  const task = tasks.find((task) => task.index === index);
  task.completed = !task.completed;
  localStorage.setItem('tasks', JSON.stringify(tasks));
};
const clearCompleted = (tasks) => {
  tasks = tasks.filter((t) => t.completed !== true);
  localStorage.setItem('tasks', JSON.stringify(tasks));
};
export { updateCompleted, clearCompleted };

/* eslint-enable import/extensions */
/* eslint-disable no-unused-vars */