let dailyTasks = [
  { task: 'Do 5 Pushups' },
  { task: 'Go down the stairs' },
  { task: 'Meditate for 1 minute' },
  { task: 'Read 1 page of a book' }
];

let content = document.getElementById('content');

tasksHTML = '';

dailyTasks.forEach(function(item, index) {
  tasksHTML += `<div class="task" id='task-${index}' onclick="doSomething(${index})" >${item.task}</div>`;
});

content.innerHTML = tasksHTML;

function showHomePage() {
  content.innerHTML = tasksHTML;
}

function doSomething(id) {
  console.log('Doing something');
  content.innerHTML = `<h1>${dailyTasks[id].task}</h1>`;
}

logo = document.getElementById('header');
logo.addEventListener('click', showHomePage);
