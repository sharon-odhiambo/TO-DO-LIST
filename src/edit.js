/* eslint-disable import/extensions */
/* eslint-disable no-unused-vars */

import { Store } from './modules/store.js';
import Events from './modules/ui.js';
import { Task } from './functions';

const task = new Task();

const updateCompleted = (index) => {
  const tasks = Store.getTasks();
  const task = tasks.find((task) => task.index === index);
  task.completed = !task.completed;
  localStorage.setItem('tasks', JSON.stringify(tasks));
};
const editInput = (index, description) => {
  const tasks = Store.getTasks();
  const task = tasks.find((task) => task.index === index);
  task.description = description;
  localStorage.setItem('tasks', JSON.stringify(tasks));
};

const clearCompleted = (tasks) => {
  tasks = tasks.filter((t) => t.completed !== true);
  localStorage.setItem('tasks', JSON.stringify(tasks));
  return tasks;
};
export { updateCompleted, editInput, clearCompleted };

/* eslint-enable import/extensions */
/* eslint-disable no-unused-vars */