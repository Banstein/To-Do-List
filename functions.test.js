import UpdateStorage from './src/Modules/updateStorage.js';
import addTask from './src/Modules/add.js';

import LocalStorage from './__mocks__/localStorage.js';

global.localStorage = new LocalStorage();
