import UpdateStorage from './Modules/updateStorage.js';
import addTask from './Modules/add.js';

let list = JSON.parse(localStorage.getItem('storedStTask')) || [];

const displayTasks = (tasks, taskInject) => {
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
    check.checked = task.completed;
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

class Task {
  constructor(value) {
    this.description = value;
    this.completed = false;
    this.index = list.length + 1;
  }
}

const add = (taskInput, taskInject) => {
  if (taskInput.value.trim() !== '') {
    const newTask = new Task(taskInput.value);
    list = addTask(list, newTask);
    UpdateStorage(list);
    displayTasks(list, taskInject);
    taskInput.value = '';
    taskInput.placeholder = 'Add another Task!';
  } else { taskInput.placeholder = 'Please enter a valid Task!'; }
};

const deleteTask = (e, taskInject) => {
  if (e.target.className === 'task-delete far fa-trash-alt') {
    const eLi = e.target.parentNode.parentNode.parentNode;
    list = list.filter((item) => item.index !== Number(eLi.id));
    list.forEach((item, i) => {
      item.index = i + 1;
    });
    UpdateStorage(list);
    displayTasks(list, taskInject);
  }
};

export { displayTasks, deleteTask, add };