const projects = [
  {
    title: 'Tonic',
    details: {
      client: 'Canopy',
      role: 'Back End Dev',
      year: '2015',
    },
    shortDescription: `A daily selection of privately personalized reads; no accounts or 
    sign-ups required.`,
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
      imageUrl: './img/snapshoot1.png',
      imageAlt: 'project preview image',
    },
    technologies: ['html', 'css', 'javaScript'],
    liveUrl: 'TonicLive.html',
    soureUrl: 'Tonic.html',
  },
  {
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
      imageAlt: 'project preview image',
    },
    technologies: ['html', 'css', 'javaScript'],
    liveUrl: 'mpStoriesLive.html',
    soureUrl: 'mpStories.html',
  },
  {
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
      imageAlt: 'project preview image',
    },
    technologies: ['html', 'css', 'javaScript'],
    liveUrl: 'TonicLive.html',
    soureUrl: 'Tonic.html',
  },
  {
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
      imageAlt: 'project preview image',
    },
    technologies: ['html', 'css', 'javaScript'],
    liveUrl: 'mpStoriesLive.html',
    soureUrl: 'mpStories.html',
  },
];

const portfolioContainer = document.getElementById('Portfolio');

function createCard(object, index) {
  let article = document.createElement('article');
  article.classList.add('df', 'work_card', 'gap12', 'bg_white')
  article.innerHTML = `<div class="df img">
<img src="${object.image.imageUrl}" alt="${object.image.imageAlt}" />
</div>
<div class="df card_details">
  <div class="df project_details_wrapper">
    <h3 class="project_title neutral_b">${object.title}</h3>
    <ul class="df project_details gap12"> 
      <li title="client" class="project_info_txt upper neutral_n">${object.details.client}</li>
      <li><i class="material-icons small light_grey">circle</i></li>
      <li title="role" class="project_info_txt dark_grey">${object.details.role}</li>
      <li><i class="material-icons small light_grey">circle</i></li>
      <li title="year" class="project_info_txt dark_grey">${object.details.year}</li>
    </ul>
  </div>
  <p class="descriptive_txt fs_15 neutral_n">
   ${object.shortDescription}
  </p>
  <ul class="df tags">
  ${object.technologies.map((tech) => `<li class="btn tag_btn"> 
  ${tech}</li>`)}
  </ul>
  <div class="df action">
    <a href="#Modal_${index + 1}" class="btn action_btn enabled">See Project</a>
  </div>
</div>`
return article;
}

projects.forEach(project => {
  portfolioContainer.appendChild(createCard(project, 0));
});
