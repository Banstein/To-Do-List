import './style.css';
import { addTask } from './Modules/add.js';

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
    //
    const iEdt = document.createElement('i');
    iEdt.classList.add('task-edit', 'far', 'fa-edit');
    edtBtn.appendChild(iEdt);
  });
};

// update
function UpdateStorage(e) {
  localStorage.setItem('storedStTask', JSON.stringify(e));
}
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

document.addEventListener('click', (e) => {
  if (e.target.className === 'task-edit far fa-edit') {
    const editer = prompt('Renew Task!');
    const eLi = e.target.parentNode.parentNode.parentNode;
    list.forEach((item) => {
      if (editer.length > 1 && item.index === Number(eLi.id)) {
        item.description = editer;
      }
    });
    UpdateStorage(list);
    displayTasks(list);
  }
});

window.onload = () => {
  displayTasks(list);
};
