import './style.css';

const Tasks = [
  {
    index: 1,
    description: 'Task One',
    completed: false,
  },
  {
    index: 2,
    description: 'Task Two',
    completed: false,
  },
  {
    index: 3,
    description: 'Task Three',
    completed: false,
  },
];
function createTasks() {
  const taskList = document.querySelector('.added-list');
  for (let i = 0; i < Tasks.length; i += 1) {
    const list = `
    <ul class=" task-items">
    <li><i class="far fa-square"></i></li>
    <li class="task-entry">${Tasks[i].description}</li>
    <li><i class="fa-solid fa-ellipsis-vertical"></i></li>
    </ul><hr>`;

    taskList.innerHTML += list;
  }
}
document.addEventListener('DOMContentLoaded', createTasks);
