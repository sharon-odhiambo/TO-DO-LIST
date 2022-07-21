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
    {
        description: 'join morning session',
    }
]
describe('add/remove functions', () => {
  test('adds an element to the list', () => {
    Store.addTask();
    const list = document.querySelector('.added-list').childNodes;
    expect(list.length).toBe(2);
  });
  test('removes an element from the list', () => {
    const list = document.querySelector('.added-list').childNodes;
    Store.removeTasks(lists);
    Events.displayTasks();
    expect(list.length).toBe(0);
  });
});