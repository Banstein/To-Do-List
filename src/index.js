import './style.css';
import UpdateStorage from './Modules/updateStorage.js';
import { UpdateTask, saveUpdatedTask } from './Modules/edit.js';
import {
  displayTasks, deleteTask, add, gameChange, getTodos, demolishAll,
} from './functions.js';

// variables
// let list = JSON.parse(localStorage.getItem('storedStTask')) || [];

const taskInject = document.querySelector('.task-injector');
const taskInput = document.querySelector('.task-input');
const addBtn = document.querySelector('#add-sign');
const completeAll = document.querySelector('.complete-delete');

addBtn.addEventListener('click', () => add(taskInput, taskInject));
taskInput.addEventListener('keypress', (event) => {
  if (event.keyCode === 13) {
    event.preventDefault();
    add(taskInput, taskInject);
  }
});

// Events
document.addEventListener('click', (e) => deleteTask(e, taskInject));
document.addEventListener('change', (e) => gameChange(e));
completeAll.addEventListener('click', () => demolishAll(taskInject));

taskInject.addEventListener('dblclick', (e) => {
  if (e.target.classList.contains('dat-task')) {
    UpdateTask(e);
    const list = getTodos();
    list.forEach((task) => {
      if (task.description === e.target.innerText) {
        const taskInput = document.querySelector('.edit');
        taskInput.addEventListener('keypress', (e) => {
          if (e.keyCode === 13) {
            task.description = taskInput.value;
            UpdateStorage(list);
            saveUpdatedTask(taskInput.value, e.target.parentNode, taskInput);
            displayTasks(taskInject);
          }
        });
      }
    });
  }
});

// Reload
window.onload = () => {
  displayTasks(taskInject);
};
