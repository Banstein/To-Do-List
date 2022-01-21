export function UpdateTask(e) {
  const currentTask = e.target.innerText;
  const taskInput = document.createElement('input');
  taskInput.type = 'text';
  taskInput.value = currentTask;
  taskInput.style.background = 'none';
  taskInput.classList.add('edit');
  e.target.parentNode.append(taskInput);
  e.target.remove();
  taskInput.select();
}

export function saveUpdatedTask(value, parentNode, taskInput) {
  if (value !== '') {
    const span = document.createElement('span');
    span.innerText = value;
    parentNode.append(span);
    taskInput.remove();
  }
}