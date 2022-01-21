import './style.css';
import addTask from './Modules/add.js';
import UpdateStorage from './Modules/updateStorage.js';
import { UpdateTask, saveUpdatedTask } from './Modules/edit.js';

// variables
let list = JSON.parse(localStorage.getItem('storedStTask')) || [];
const taskInject = document.querySelector('.task-injector');
const taskInput = document.querySelector('.task-input');
const addBtn = document.querySelector('#add-sign');

// render
class Task {
  constructor(value) {
    this.description = value;
    this.completed = false;
    this.index = list.length + 1;
  }
}

// display elements
const displayTasks = (tasks) => {
  taskInject.innerHTML = '';
  tasks.forEach((task) => {
    const li = document.createElement('li');
    li.classList.add('li');
    li.setAttribute('id', task.index);
    taskInject.appendChild(li);
    //
    const span = document.createElement('span');
    span.classList.add('task-wrapper');
    li.appendChild(span);
    //
    const check = document.createElement('input');
    check.classList.add('task-check');
    check.type = 'checkbox';
    span.appendChild(check);
    //
    const label = document.createElement('label');
    label.classList.add('dat-task');
    label.innerText = task.description;
    span.appendChild(label);
    //
    const div = document.createElement('div');
    li.appendChild(div);
    //
    const edtBtn = document.createElement('button');
    div.appendChild(edtBtn);
    //
    const dltBtn = document.createElement('button');
    div.appendChild(dltBtn);
    //
    const iDlt = document.createElement('i');
    iDlt.classList.add('task-delete', 'far', 'fa-trash-alt');
    dltBtn.appendChild(iDlt);
  });
};

// update storage
// function UpdateStorage(e) {
//   localStorage.setItem('storedStTask', JSON.stringify(e));
// }
// add
const add = () => {
  if (taskInput.value.trim() !== '') {
    const newTask = new Task(taskInput.value);
    addTask(list, newTask);
    UpdateStorage(list);
    displayTasks(list);
    taskInput.value = '';
    taskInput.placeholder = 'Add another Task!';
  } else { taskInput.placeholder = 'Please enter a valid Task!'; }
};

addBtn.addEventListener('click', add);
taskInput.addEventListener('keypress', (event) => {
  if (event.keyCode === 13) {
    event.preventDefault();
    add();
  }
});

// remove
document.addEventListener('click', (e) => {
  if (e.target.className === 'task-delete far fa-trash-alt') {
    const eLi = e.target.parentNode.parentNode.parentNode;
    list = list.filter((item) => item.index !== Number(eLi.id));
    list.forEach((item, i) => {
      item.index = i + 1;
    });
    UpdateStorage(list);
    displayTasks(list);
  }
});

// edit
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
            displayTasks(list);
          }
        });
      }
    });
  }
});

// Reload
window.onload = () => {
  displayTasks(list);
};
