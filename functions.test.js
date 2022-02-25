import { addTask, removeTask } from './src/Modules/addRemove.js';
import LocalStorage from './src/__mock__/localStorageMock.js';
import domMock from './src/__mock__/domMock.js';

describe('testing add', () => {
  const task = { index: 1 };
  const list = [];
  it('adding the first task', () => {
    addTask(list, task);
    expect(list.length).toBe(1);
  });

  it('adding and checking task description', () => {
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

describe('localStorage', () => {
  it('Adds an item to the mock localStorage', () => {
    const localStorage = new LocalStorage();
    const key = 'mockKey';
    const value = 'stringValue';

    localStorage.setItem(key, value);

    expect(
      Object.keys(localStorage.storage).length,
    ).toEqual(1);
  });

  it('gets the items from the mock localStorage', () => {
    const localStorage = new LocalStorage();
    const key = 'mockKey';
    const value = 'stringValue';
    localStorage.setItem(key, value);

    const receivedValue = localStorage.getItem(key);

    expect(receivedValue).toEqual(value);
  });
});

describe('domMock', () => {
  it('create a ul in the document', () => {
    domMock();
    expect(document.children.length).toEqual(1);
  });
});
