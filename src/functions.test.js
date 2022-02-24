import UpdateStorage from './Modules/updateStorage.js';
import addTask from './Modules/add.js';

import LocalStorage from './__mocks__/localStorage.js';

global.localStorage = new LocalStorage();
