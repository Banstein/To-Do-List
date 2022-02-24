import { addTask, removeTask } from './addRemove.js';

describe('testing add', () => {
  const task = { index: 1 };
  const list = [];
  it('adding the first task', () => {
    addTask(list, task);
    expect(list.length).toBe(1);
  });

  it('adding and chacking task description', () => {
    addTask(list, task);
    expect(list.length).toBe(2);
  });
});

describe('testing delete', () => {
  const deleteIndex = 1;
  const list = [{ index: 1 }];
  const list2 = [{ index: 1 }, { index: 2 }];

  it('test if first element is deleted', () => {
    expect(removeTask(list, deleteIndex).length).toBe(0);
  });

  it('test if first element is deleted', () => {
    expect(removeTask(list2, deleteIndex).length).toBe(1);
  });
});