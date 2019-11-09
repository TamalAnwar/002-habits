// Debug option
const DEBUG = true;
const SHOW_COMPLETE = false;

// logging function
function debug(...args) {
  if (DEBUG) {
    console.log('DEBUG LOG:', ...args);
  }
}

let taskList = [
  {
    task: 'Do 5 Pushups',
    id: 'pushup',
    info:
      'Do just 5 pushups. You can do it anywhere anytime. It will take you just a minute.',
    img: 'pushups.jpg',
    done: false
  },
  {
    task: 'Go down the stairs',
    id: 'stairs',
    info:
      'Go down the stairs all the way to the ground floor and come back up.',
    img: 'stairs.jpg',
    done: false
  },
  {
    task: 'Meditate for 1 minute',
    id: 'meditate',
    info:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic quas odio at, quisquam, explicabo consequatur itaque enim consectetur mollitia consequuntur illum earum nulla? Ratione recusandae accusantium, saepe a eum in!',
    done: false
  },
  {
    task: 'Read 1 page of a book',
    id: 'readpage',
    info:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic quas odio at, quisquam, explicabo consequatur itaque enim consectetur mollitia consequuntur illum earum nulla? Ratione recusandae accusantium, saepe a eum in!',
    done: false
  }
];

// Copy the tasks to the daily task list
let dailyTasks = [...taskList];

// A list for finished tasks
let finishedTasks = [];

// To show the completed tasks
if (DEBUG && SHOW_COMPLETE) {
  dailyTasks = [];
  finishedTasks = [...taskList];
}
// back button
const back = document.querySelector('.back');
back.style.display = 'none';

const content = document.getElementById('content');

function renderCompletedTasks() {
  let tasksHTML = '';
  if (finishedTasks.length) {
    finishedTasks.forEach(function(item, index) {
      tasksHTML += `<div class="task complete" id='task-${index}' >${item.task}</div>`;
    });
  }
  content.innerHTML = tasksHTML;
  showBackButton();
}

// Render the page
function renderPage() {
  let tasksHTML = '';
  if (!dailyTasks.length) {
    // Show an empty welldone page!
    tasksHTML += `<div class="welldone">
    <p >All tasks completed!</p>
      <img src="./img/welldone.jpg" alt=""/>
      </div>`;
  }

  dailyTasks.forEach(function(item, index) {
    tasksHTML += `<div class="task ${
      item.done ? 'complete' : ''
    }" id='task-${index}' onclick="renderTaskPage(${index})" >${
      item.task
    }</div>`;
  });

  if (finishedTasks.length) {
    tasksHTML += `<div class="showdone" onclick="renderCompletedTasks()">Show Completed Tasks</div>`;
  }

  content.innerHTML = tasksHTML;
}
// Render the page on initial load
renderPage();

// Show homepage when back button is called.
function showHomePage() {
  renderPage();
  back.style.display = 'none';
}

// After task button is clicked, it will show the task info
function renderTaskPage(id) {
  let { task, info, img } = dailyTasks[id];
  content.innerHTML = `<h1>${task}</h1>
  <p>${info}</p>
  ${img ? `<img src="./img/${img}" alt="${img}"/>` : ''}
  <div onclick="completeTask(${id})" class="done" id="done-${id}">Done</div>
  `;
  showBackButton();
}

// Function for completing a task, when someone clicks on the 'done' button
function completeTask(id) {
  debug('Completing task', id);
  dailyTasks[id].done = true;
  finishedTasks.push(dailyTasks[id]);
  dailyTasks = dailyTasks.filter(function(item, index) {
    return index !== id;
  });
  // Show homepage when task is done (optional)
  showHomePage();
}

back.addEventListener('click', showHomePage);

function showBackButton() {
  back.style.display = 'block';
}
