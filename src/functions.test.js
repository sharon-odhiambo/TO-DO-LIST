import {
  Store, Events, Task,
} from './functions';

document.body.innerHTML = `
    <div id="to-dos" class="added-list">
      <div class="item" id="input"></div>
    </div>
`;

const lists = new Task(1, 'Baba ndiye orezo', true);
const list1 = new Task(1, 'Baba ndiye orezo', true);
const list = document.querySelector('.added-list').childNodes;

describe('add/remove functions', () => {
  test('adds an element to the list', () => {
    Store.addTask(lists);
    Store.addTask(list1);
    Events.displayTasks();
    expect(list.length).toBe(2);
  });

  test('Removes item from list', () => {
    const store = Store.removeTask();
    expect(store.length).toBe(1);
  });
});