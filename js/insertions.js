const portfolioContainer = document.getElementById('Portfolio');
const modalsContainer = document.getElementsByClassName('modals_container')[0];
const projects = [
  {
    id: 1,
    title: 'Book store',
    details: {
      client: 'Learning Project',
      role: 'Full Stack Dev',
      year: '2022',
    },
    shortDescription: `The Bookstore is a website that allows you to display a list of books,
    add a book, remove a selected book..`,
    description: `The Bookstore is a website that allows you to display a list of books,
    add a book, remove a selected book. Categories page is coming soon`,
    image: {
      imageUrl: './img/bookstore.gif',
      imageAlt: 'preview of BookStore project',
    },
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Redux'],
    liveUrl: 'https://m0rrighan.github.io/bookstore-react-redux/',
    soureUrl: 'https://github.com/M0rrighan/bookstore-react-redux',
  },
  {
    id: 2,
    title: 'Math Magicians',
    details: {
      client: 'Learning Project',
      role: 'Full Stack Dev',
      year: '2022',
    },
    shortDescription: `A Single Page App (SPA) that allows users to make simple calculations
    and read a random math-related quote.`,
    description: `Math magicians" is a website for all fans of mathematics. It is a Single Page App (SPA) that allows users to make simple calculations and
    read a random math-related quote.`,
    image: {
      imageUrl: './img/math-magicians.gif',
      imageAlt: 'preview of Math Magicians project',
    },
    technologies: ['html', 'css', 'javaScript', 'React'],
    liveUrl: 'https://m0rrighan.github.io/math-magicians/',
    soureUrl: 'https://github.com/M0rrighan/math-magicians',
  },
  {
    id: 3,
    title: 'Totos - React',
    details: {
      client: 'Learning Project',
      role: 'Full Stack Dev',
      year: '2022',
    },
    shortDescription: `To Do List: allows the user to add tasks, edit and remove tasks,
    clear all completed task`,
    description: `To Do List: allows the user to add tasks, edit and remove tasks,
    clear all completed task`,
    image: {
      imageUrl: './img/todos-react.gif',
      imageAlt: 'preview of ToDos project',
    },
    technologies: ['html', 'css', 'javaScript', 'React'],
    liveUrl: 'https://m0rrighan.github.io/to-do-react/',
    soureUrl: 'https://github.com/M0rrighan/to-do-react/tree/react-routing',
  },
  {
    id: 4,
    title: 'To Do List',
    details: {
      client: 'Learning Project',
      role: 'Full Stack Dev',
      year: '2021',
    },
    shortDescription: `A simple yet powerful to-do list, inspired by the minimalist website.
    It allows the user to add tasks, edit and remove tasks, clear all completed tasks.`,
    description: `A simple yet powerful to-do list, inspired by the minimalist website.
    It allows the user to add tasks, edit and remove tasks, clear all completed tasks.
    Drag and drop is also allowed, giving the possibility to re order the list as pleased.`,
    image: {
      imageUrl: './img/TDL.gif',
      imageAlt: 'preview of To Do List project',
    },
    technologies: ['html', 'css', 'javaScript'],
    liveUrl: 'https://m0rrighan.github.io/To-do-list/',
    soureUrl: 'https://github.com/M0rrighan/To-do-list',
  },
  {
    id: 5,
    title: 'LeaderBoard',
    details: {
      client: 'Learning Project',
      role: 'Full Stack Dev',
      year: '2021',
    },
    shortDescription: `The leaderboard website displays scores submitted by you and by other players.
    Preserves all data to external API servise.`,
    description: `The leaderboard website displays scores submitted by different players.
    It also allows you to submit your score. All data is preserved thanks to the external
    Leaderboard API service.`,
    image: {
      imageUrl: './img/leaderboard.gif',
      imageAlt: 'preview of Leadwrboard project',
    },
    technologies: ['html', 'css', 'javaScript', 'WEBPACK'],
    liveUrl: 'https://m0rrighan.github.io/Leaderboard/',
    soureUrl: 'https://github.com/M0rrighan/Leaderboard',
  },
];

function createCard(project) {
  const article = document.createElement('article');
  article.classList.add('df', 'work_card', 'gap12', 'bg_white');
  article.innerHTML = `
  <div class="df img">
    <img src="${project.image.imageUrl}" alt="${project.image.imageAlt}" />
  </div>
  <div class="df card_details">
    <div class="df project_details_wrapper">
      <h3 class="project_title neutral_b">${project.title}</h3>
      <ul class="df project_details gap12"> 
        <li title="client" class="project_info_txt upper neutral_n">${project.details.client}</li>
        <li><i class="material-icons small light_grey">circle</i></li>
        <li title="role" class="project_info_txt dark_grey">${project.details.role}</li>
        <li><i class="material-icons small light_grey">circle</i></li>
        <li title="year" class="project_info_txt dark_grey">${project.details.year}</li>
      </ul>
    </div>
    <p class="descriptive_txt fs_15 neutral_n">
      ${project.shortDescription}
    </p>
    <ul class="df tags">
      ${project.technologies.map((tech) => `<li class="btn tag_btn"> 
      ${tech}</li>`).join('')}
    </ul>
    <div class="df action">
      <a href="#Modal${project.id}" class="btn action_btn enabled">See Project</a>
    </div>
  </div>`;
  return article;
}

function createModal(project) {
  const modal = document.createElement('div');
  modal.id = `Modal${project.id}`;
  modal.classList.add('modal');
  modal.innerHTML = `
          <article class="df work_card gap12 bg_white">
          <button type="button" class="close_modal btn xs-transparent_btn btn_fc">
            <i class="material-icons">close</i>
          </button>
          <div class="df project_details_wrapper">
            <h3 class="project_title neutral_b">${project.title}</h3>
            <ul class="df project_details gap12">
              <li title="client" class="project_info_txt upper neutral_n">${project.details.client}</li>
              <li><i class="material-icons small light_grey">circle</i></li>
              <li title="role" class="project_info_txt dark_grey">${project.details.role}</li>
              <li><i class="material-icons small light_grey">circle</i></li>
              <li title="year" class="project_info_txt dark_grey">${project.details.year}</li>
            </ul>
          </div>
          <div class="df img">
            <img src="${project.image.imageUrl}" alt="${project.image.imageAlt}" />
          </div>
          <div class="df card_details">
            <p class="descriptive_txt fs_15 neutral_n">
            ${project.description}
            </p>
            <div>
              <ul class="df tags">
              ${project.technologies.map((tech) => `<li class="btn tag_btn"> 
              ${tech}</li>`).join('')}                
              </ul>
              <div class="df action gap12">
                <a href="${project.liveUrl}" target="_blank" class="df gap12 btn action_btn enabled">
                See Live
                <img src="icons/live.svg" alt="live logo"/>
                </a>
                <a href="${project.soureUrl}" target="_blank" class="df gap12 btn action_btn enabled">
                See Source
                <img src="icons/githubSource.svg" alt="github logo icon"/>
                </a>
              </div>
            </div>
          </div>
        </article>`;
  return modal;
}

projects.forEach((project) => {
  portfolioContainer.appendChild(createCard(project));
});

projects.forEach((project) => {
  modalsContainer.appendChild(createModal(project));
});
