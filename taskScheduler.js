// Get elements from the DOM
const taskInput = document.getElementById('taskInput');
const descriptionInput = document.getElementById('descriptionInput');
const startTimeInput = document.getElementById('startTimeInput');
const deadlineInput = document.getElementById('deadlineInput');
const priorityInput = document.getElementById('priorityInput');
const addButton = document.getElementById('addButton');
const taskList = document.getElementById('taskList');

// Load tasks from localStorage
window.addEventListener('DOMContentLoaded', function() {
  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

  for (const task of tasks) {
    createTaskItem(task);
  }
});

// Add task to the list
addButton.addEventListener('click', function() {
  const taskText = taskInput.value;
  const descriptionText = descriptionInput.value;
  const startTime = startTimeInput.value;
  const deadline = deadlineInput.value;
  const priority = priorityInput.value;

  if (taskText.trim() !== '') {
    const task = {
      taskText,
      descriptionText,
      startTime,
      deadline,
      priority
    };

    createTaskItem(task);
    saveTaskToLocalStorage(task);

    // Clear the input fields
    taskInput.value = '';
    descriptionInput.value = '';
    startTimeInput.value = '';
    deadlineInput.value = '';
  }
});

// Create a task item and append it to the list
function createTaskItem(task) {
  const taskItem = document.createElement('li');
  taskItem.classList.add('taskItem');
  taskItem.classList.add(task.priority);
  taskItem.innerHTML = `
    <span class="taskName">${task.taskText}</span>
    <span class="description">${task.descriptionText}</span>
    <span class="startTime">${task.startTime}</span>
    <span class="deadline">${task.deadline}</span>
    <span class="priority">${task.priority}</span>
    <button class="markDoneButton">Mark as Done</button>
    <button class="deleteButton">Delete</button>
  `;
  taskList.appendChild(taskItem);

  // Add event listener to delete button
  const deleteButton = taskItem.querySelector('.deleteButton');
  deleteButton.addEventListener('click', function() {
    taskList.removeChild(taskItem);
    removeTaskFromLocalStorage(task);
  });

  // Add event listener to mark as done button
  const markDoneButton = taskItem.querySelector('.markDoneButton');
  markDoneButton.addEventListener('click', function() {
    taskItem.classList.add('done');
    moveTaskToDoneList(taskItem);
  });
}

// Save task to localStorage
function saveTaskToLocalStorage(task) {
  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  tasks.push(task);
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Remove task from localStorage
function removeTaskFromLocalStorage(task) {
  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  const updatedTasks = tasks.filter(item => item.taskText !== task.taskText);
  localStorage.setItem('tasks', JSON.stringify(updatedTasks));
}

// Move task from Task List to Done List
function moveTaskToDoneList(taskItem) {
  const doneList = document.getElementById('doneList');
  const clonedTaskItem = taskItem.cloneNode(true); // Clone the task item
  taskList.removeChild(taskItem);
  doneList.appendChild(clonedTaskItem);
}

function redirectToIndex() {
  window.location.href = 'Index.html';
}