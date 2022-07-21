import { Store, Events } from './functions';

document.body.innerHTML = `
    <div id="to-dos" class="added-list">
      <div class="item" id="remove"></div>
    </div>
`;

const lists = [
  {
    description: 'complete my tasks',
  },
];

const list = document.querySelector('.added-list').childNodes;

describe('add/remove functions', () => {
  test('adds an element to the list', () => {
    Store.addTask(lists);
    Events.displayTasks();
    expect(list.length).toBe(1);
  });

  test('Removes item from list', () => {
    const store = Store.removeTask();
    expect(store.length).toBe(0);
  });
});