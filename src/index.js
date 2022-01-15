import './style.css';

// variables
const taskInject = document.querySelector('.task-injector');
const taskInput = document.querySelector('.task-input');
const addBtn = document.querySelector('#add-sign');
const dltBtn = document.querySelectorAll('.task-delete');
let listData = [];

// render
const render = (items, inject) => {
  inject.innerHTML = '';
  items.forEach((data) => {
    items.sort((a, b) => a.index - b.index);
    inject.innerHTML += `
    <li id="${data.index}">
    <div class="task-wrapper">
    <input type="checkbox" id="task-check" name="${data.index}" ${data.completed ? 'checked' : ''}>
    <label class="dat-task ${data.completed ? 'line-through' : ''}" for="${data.index}">${data.description}</label>
    </div>
    <div>
    <button class="task-edit"><i class="far fa-edit"></i></button>
    <button class="task-delete"><i class="far fa-trash-alt"></i></button>
    </div>
    </li>
  `;
  });
  dltBtn.style.visibility = 'hidden';
};

// add task
addBtn.addEventListener('click', () => {
  const task = {
    index: listData.length,
    description: taskInput.value,
    completed: false,
  };
  listData = [...listData, task];
  render(listData, taskInject);
});

// delete task