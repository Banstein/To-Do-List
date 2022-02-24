const domMock = (value) => {
  document.innerHTML = `
    <input type='text' class='task-input' value=${value}/>
    <ul class='task-injector'>
        <li class='li'></li>
    </ul>
    `;
};

export default domMock;