let dailyTasks = [
  {
    task: 'Do 5 Pushups',
    info:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic quas odio at, quisquam, explicabo consequatur itaque enim consectetur mollitia consequuntur illum earum nulla? Ratione recusandae accusantium, saepe a eum in!',
    img: 'pushups.jpg',
    done: false
  },
  {
    task: 'Go down the stairs',
    info:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic quas odio at, quisquam, explicabo consequatur itaque enim consectetur mollitia consequuntur illum earum nulla? Ratione recusandae accusantium, saepe a eum in!',
    img: 'stairs.jpg',
    done: false
  },
  {
    task: 'Meditate for 1 minute',
    info:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic quas odio at, quisquam, explicabo consequatur itaque enim consectetur mollitia consequuntur illum earum nulla? Ratione recusandae accusantium, saepe a eum in!',
    done: false
  },
  {
    task: 'Read 1 page of a book',
    info:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic quas odio at, quisquam, explicabo consequatur itaque enim consectetur mollitia consequuntur illum earum nulla? Ratione recusandae accusantium, saepe a eum in!',
    done: false
  }
];

// back button
const back = document.querySelector('.back');
back.style.display = 'none';

let content = document.getElementById('content');

function renderPage() {
  let tasksHTML = '';
  dailyTasks.forEach(function(item, index) {
    tasksHTML += `<div class="task ${
      item.done ? 'complete' : ''
    }" id='task-${index}' onclick="doSomething(${index})" >${item.task}</div>`;
  });

  content.innerHTML = tasksHTML;
}

renderPage();

function showHomePage() {
  renderPage();
  back.style.display = 'none';
}

function doSomething(id) {
  let { task, info, img } = dailyTasks[id];
  content.innerHTML = `<h1>${task}</h1>
  <p>${info}</p>
  ${img ? `<img src="./img/${img}" alt="${img}"/>` : ''}
  <div onclick="completeTask(${id})" class="done" id="done-${id}">Done</div>
  `;
  back.style.display = 'block';
}

function completeTask(id) {
  console.log('Completing task', id);
  dailyTasks[id].done = true;
  // Show homepage when task is done (optional)
  showHomePage();
}

back.addEventListener('click', showHomePage);
