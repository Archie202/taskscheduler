// Variables
const loginForm = document.getElementById('loginForm');
const registerLink = document.getElementById('registerLink');
const registerForm = document.getElementById('registerForm');
const loginLink = document.getElementById('loginLink');
const taskForm = document.getElementById('taskForm');
const taskInput = document.getElementById('taskInput');
const priorityInput = document.getElementById('priorityInput');
const tasksList = document.getElementById('tasks');
const completedList = document.getElementById('completed');

// Event Listeners
loginForm.addEventListener('submit', login);
registerLink.addEventListener('click', showRegisterForm);
registerForm.addEventListener('submit', register);
loginLink.addEventListener('click', showLoginForm);
taskForm.addEventListener('submit', addTask);
tasksList.addEventListener('click', markAsDone);

// Functions
function login(e) {
  e.preventDefault();
  // Add your login logic here
  showTaskSchedulerPage();
}

function showRegisterForm(e) {
  e.preventDefault();
  document.getElementById('loginPage').style.display = 'none';
  document.getElementById('registerPage').style.display = 'block';
}

function register(e) {
  e.preventDefault();
  // Add your registration logic here
  showTaskSchedulerPage();
}

function showLoginForm(e) {
  e.preventDefault();
  document.getElementById('registerPage').style.display = 'none';
  document.getElementById('loginPage').style.display = 'block';
}

function addTask(e) {
  e.preventDefault();
  const taskName = taskInput.value;
  const priority = priorityInput.value;

  if (taskName.trim() === '') {
    alert('Please enter a task name.');
    return;
  }

  const taskItem = document.createElement('li');
  taskItem.innerHTML = `${taskName} (${priority})`;
  tasksList.appendChild(taskItem);

  taskInput.value = '';
}

function markAsDone(e) {
  if (e.target.tagName === 'LI') {
    const completedItem = e.target;
    completedList.appendChild(completedItem);
  }
}

function showTaskSchedulerPage() {
  document.getElementById('loginPage').style.display = 'none';
  document.getElementById('registerPage').style.display = 'none';
  document.getElementById('taskSchedulerPage').style.display = 'block';
}
