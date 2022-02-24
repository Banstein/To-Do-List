function addTask(arr, obj) {
  return arr.push(obj);
}

function removeTask(arr, index) {
  return arr.splice(index, 1);
}

export { addTask, removeTask };