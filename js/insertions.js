const portfolioContainer = document.getElementById('Portfolio');
const modalsContainer = document.getElementsByClassName('modals_container')[0];
const projects = [
  {
    id: 1,
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
    id: 2,
    title: 'Multi-Post Stories',
    details: {
      client: 'Facebook',
      role: 'Full Stack Dev',
      year: '2015',
    },
    shortDescription: `Experimental content creation feature that allows users to add to an 
    existing story over the course of a day without spamming their friends.`,
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an 
    unknown printer took a galley of type and scrambled it to make a type specimen book. 
    It has survived not only five centuries, but also the leap into electronic typesetting, 
    remaining essent, Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an 
    unknown printer took a galley of type and scrambled it to make a type specimen book. 
    It has survived not only five centuries, but also the leap into electronic typesetting, 
    remaining essent`,
    image: {
      imageUrl: './img/snapshoot2.png',
      imageAlt: 'project 2 preview image',
    },
    technologies: ['html', 'css', 'javaScript'],
    liveUrl: 'mpStoriesLive.html',
    soureUrl: 'mpStories.html',
  },
  {
    id: 3,
    title: 'Facebook 360',
    details: {
      client: 'Facebook',
      role: 'Full Stack Developer',
      year: '2015',
    },
    shortDescription: `Exploring the future of media in Facebook's first Virtual Reality app; 
    a place to discover and enjoy 360 photos and videos on Gear VR.`,
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an 
    unknown printer took a galley of type and scrambled it to make a type specimen book. 
    It has survived not only five centuries, but also the leap into electronic typesetting, 
    remaining essent, Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an 
    unknown printer took a galley of type and scrambled it to make a type specimen book. 
    It has survived not only five centuries, but also the leap into electronic typesetting, 
    remaining essent`,
    image: {
      imageUrl: './img/snapshoot3.png',
      imageAlt: 'project 3 preview image',
    },
    technologies: ['html', 'css', 'javaScript'],
    liveUrl: 'TonicLive.html',
    soureUrl: 'Tonic.html',
  },
  {
    id: 4,
    title: 'Uber Navigation',
    details: {
      client: 'Uber',
      role: 'Lead Developer',
      year: '2018',
    },
    shortDescription: `A smart assistant to make driving more safe, efficient, 
    and fun by unlocking your most expensive computer: your car.`,
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an 
    unknown printer took a galley of type and scrambled it to make a type specimen book. 
    It has survived not only five centuries, but also the leap into electronic typesetting, 
    remaining essent, Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an 
    unknown printer took a galley of type and scrambled it to make a type specimen book. 
    It has survived not only five centuries, but also the leap into electronic typesetting, 
    remaining essent`,
    image: {
      imageUrl: './img/snapshoot4.png',
      imageAlt: 'project 4 preview image',
    },
    technologies: ['html', 'css', 'javaScript'],
    liveUrl: 'mpStoriesLive.html',
    soureUrl: 'mpStories.html',
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
                <a href="${project.liveUrl}" class="df gap12 btn action_btn enabled">
                See Live
                <img src="icons/live.svg" alt="live logo"/>
                </a>
                <a href="${project.soureUrl}" class="df gap12 btn action_btn enabled">
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
