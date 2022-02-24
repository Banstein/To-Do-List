import addTask from './add.js';

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