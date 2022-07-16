/* eslint-disable import/extensions */
import { Store } from './store.js';

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
      tasks.splice(index, 1);
    }
  });
  localStorage.setItem('tasks', JSON.stringify(tasks));
};
export { updateCompleted, clearCompleted };

/* eslint-enable import/extensions */