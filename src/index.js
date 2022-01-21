import './style.css';
import UpdateStorage from './Modules/updateStorage.js';
import { UpdateTask, saveUpdatedTask } from './Modules/edit.js';
import { displayTasks, deleteTask, add } from './functions.js';

// variables
const list = JSON.parse(localStorage.getItem('storedStTask')) || [];
const taskInject = document.querySelector('.task-injector');
const taskInput = document.querySelector('.task-input');
const addBtn = document.querySelector('#add-sign');

addBtn.addEventListener('click', () => add(taskInput, taskInject));
taskInput.addEventListener('keypress', (event) => {
  if (event.keyCode === 13) {
    event.preventDefault();
    add(taskInput, taskInject);
  }
});

document.addEventListener('click', (e) => deleteTask(e, taskInject));
//
document.addEventListener('change', (e) => {
  if (e.target.classList.contains('task-check')) {
    const changer = e.target.parentNode.parentNode;
    list.forEach((item) => {
      if (item.index === Number(changer.id)) {
        item.completed = !item.completed;
        UpdateStorage(list);
        displayTasks(list, taskInject);
      }
    });
  }
});

taskInject.addEventListener('dblclick', (e) => {
  if (e.target.classList.contains('dat-task')) {
    UpdateTask(e);
    list.forEach((task) => {
      if (task.description === e.target.innerText) {
        const taskInput = document.querySelector('.edit');
        taskInput.addEventListener('keypress', (e) => {
          if (e.keyCode === 13) {
            task.description = taskInput.value;
            UpdateStorage(list);
            saveUpdatedTask(taskInput.value, e.target.parentNode, taskInput);
            displayTasks(list, taskInject);
          }
        });
      }
    });
  }
});

// Reload
window.onload = () => {
  displayTasks(list, taskInject);
};
