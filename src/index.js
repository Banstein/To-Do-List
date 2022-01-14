import './style.css';

const taskInject = document.querySelector('.task-injector');

const listData = [
  {
    description: 'Module 1 : w1 ~ w5',
    completed: true,
    index: 0,
  },
  {
    description: 'Module 2 : w2 ~ w5',
    completed: false,
    index: 3,
  },
  {
    description: 'Module 3',
    completed: false,
    index: 2,
  },
  {
    description: 'Module 4',
    completed: false,
    index: 1,
  },
];

listData.forEach((data) => {
  listData.sort((a, b) => a.index - b.index);
  taskInject.innerHTML += `
  <li>
  <div class="task-wrapper">
  <input type="checkbox" id="task-check" name="${data.index}" ${data.completed ? 'checked' : ''
}>
  <label class="dat-task ${data.completed ? 'line-through' : ''}" for="${data.index
}">${data.description}</label>
  </div>
  <i class="fas fa-ellipsis-v" id="task-toggle"></i>
</li>
`;
});
