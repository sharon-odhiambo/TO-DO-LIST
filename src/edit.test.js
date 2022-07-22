import { clearCompleted } from './edit';
import { Task, Store } from './functions';

let task = new Task(1, 'Baba ndiye orezo');
task.completed = true;
const tasks = Store.getTasks();

tasks.push(task);

document.body.innerHTML = `
  <li><input type="text" class="task-entry" index="${task.index}" data-completed="${task.completed}" value="${task.description}"></li>
`;

const editInput = (index, description) => {
  task = tasks.find((task) => task.index === index);
  task.description = description;
  localStorage.setItem('tasks', JSON.stringify(tasks));
};

const updateCompleted = (index) => {
  const task = tasks.find((task) => task.index === index);
  task.completed = true;
  localStorage.setItem('tasks', JSON.stringify(tasks));
};

const list = document.querySelector('.task-entry').value;

describe('Edit Update and clear from list', () => {
  test('unedited item on list', () => {
    expect(task.description).toEqual(list);
  });

  test('edits the list item', () => {
    editInput(1, 'list');
    expect(task.description).not.toEqual(list);
  });

  test('updates the status of the list item', () => {
    updateCompleted(1);
    expect(task.completed).toEqual(true);
  });

  test('clears the list item', () => {
    const tasks = Store.getTasks();
    expect(clearCompleted(tasks).length).toBe(0);
  });
});
