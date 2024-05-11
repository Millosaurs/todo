function addTask() {
    const input = document.getElementById('input');
    const taskList = document.getElementById('taskList');
    const taskText = input.value.trim();

    if (taskText === '') return; // Don't add empty tasks

    const li = document.createElement('li');
    li.classList.add('task-item');
    li.innerHTML = `
        <span class="text">${taskText}</span>
        <button class="delete-btn" onclick="removeTask(this)"><i class="fas fa-trash"></i></button>
    `;

    li.addEventListener('click', () => {
        li.classList.toggle('checked');
    });

    taskList.appendChild(li);
    input.value = ''; // Clear input field
}
function removeTask(button) {
    const taskItem = button.closest('li');
    taskItem.remove();
}


