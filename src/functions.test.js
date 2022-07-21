import { Store, Events } from './functions';

describe('add/remove functions', () => {
  test('adds an element to the list', () => {
    Events.addList('Go shopping');
    Events.addList('Attend morning session meeting');
    Events.displayTasks();
    const list = document.querySelector('.added-list');
    expect(list.length).toBe(2);
  });
});