export function UpdateTask(e) {
  const currentTask = e.target.innerText;
  const taskInput = document.createElement('input');
  taskInput.type = 'text';
  taskInput.value = currentTask;
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

export function UpdateStatus(e, list) {
  const boxId = e.target.id;
  const checkBox = document.querySelector(`#${boxId}`);
  const status = checkBox.checked;
  for (let i = 0; i < list.length; i += 1) {
    const span = document.querySelectorAll('.span')[i];
    if (`box-${list[i].index}` === boxId && status === true) {
      list[i].completed = true;
      span.classList.toggle('done');
    } else if (`box-${list[i].index}` === boxId && status === false) {
      list[i].completed = false;
      span.classList.toggle('done');
    }
  }
}

export function clearAll(list) {
  const UncompeledTasks = list.filter((task) => task.completed === false);
  UncompeledTasks.forEach((task, i) => { (task.index = i + 1); });
  list = UncompeledTasks;
  return list;
}