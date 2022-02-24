import UpdateStorage from './Modules/updateStorage.js';
import addTask from './Modules/add.js';

import LocalStorage from './__mocks__/localStorage.js';
import domMock from './__mocks__/domMock.js';

global.localStorage = new LocalStorage();
