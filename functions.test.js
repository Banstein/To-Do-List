// import UpdateStorage from './src/Modules/updateStorage.js';
// import addTask from './src/Modules/add.js';

import LocalStorage from './__mocks__/localStorage.js';
// import domMock from './__mocks__/domMock.js';

// global.localStorage = new LocalStorage();

describe('test localStorage', () => {
  it('Adds an item to the mock localStorage', () => {
    const localStorage = new LocalStorage();
    const key = 'mockKey';
    const value = 'storageValue';

    localStorage.setItem(key, value);

    expect(
      Object.keys(localStorage.storage).length,
    ).toEqual(1);
  });

  it('gets the items from the mock localStorage', () => {
    const localStorage = new LocalStorage();
    const key = 'mockKey';
    const value = 'storageValue';
    localStorage.setItem(key, value);

    const receivedValue = localStorage.getItem(key);

    expect(receivedValue).toEqual(value);
  });
});