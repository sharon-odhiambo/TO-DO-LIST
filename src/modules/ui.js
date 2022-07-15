// Display Books
import { Store } from './store.js';

export default class Events {
  static displayTasks() {
    const tasks = Store.getTasks();
    tasks.forEach((task) => Events.addList(task));
  }

  static addList(task) {
    const list = document.querySelector('.added-list');
    const addedtasks = document.createElement('div');
    addedtasks.innerHTML = `
        <table class="cols">
        <td class="cols1">"${book.title}"</td>
        <td class="cols2">by ${book.author}</td>
        <td class="cols3">${book.isbn}</td>
        <td class="cols4"><button type="submit" class="delete">Remove</button></td>
        </table>
        `;
    list.appendChild(addedtasks);
  }

  static deleteTask(el) {
    if (el.classList.contains('task-close')) {
      el.parentElement.parentElement.remove();
    }
  }

  static clearFields() {
    document.querySelector('.item').value = ''
  }
}
document.addEventListener('DOMContentLoaded', Events.displayTasks);