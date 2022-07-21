import { updateCompleted, clearCompleted } from './edit';
import Events from './modules/ui';

document.body.innerHTML = `
      <li><input type="text" class="task-entry" data-index="1" data-completed="completed" value="We are editing this function"></li>
`;

describe('edit/clear completed items', () => {
    const index = 1;
    const input = document.querySelector('.task-entry').value;
    const description = 'We have edited you, please behave';
    test('edit the input item', () => {
        Events.editInput(index, description);
        expect(input).toEqual(0);
    });
})