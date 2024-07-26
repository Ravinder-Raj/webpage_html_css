



document.addEventListener('DOMContentLoaded', () => {
 
  document.querySelectorAll('.dropdown-toggle').forEach(button => {
      button.addEventListener('click', () => {
          button.classList.toggle('active');
          const content = button.nextElementSibling;
          content.style.display = content.style.display === 'block' ? 'none' : 'block';
      });
  });


  const toggleButton = document.getElementById('toggle-icon');
  const sidebar = document.querySelector('.left-toggle');
  const sidebarHeading = document.getElementById('sidebar-heading');
  let isCollapsed = false;

  if (toggleButton) {
      toggleButton.addEventListener('click', () => {
          isCollapsed = !isCollapsed;

          if (isCollapsed) {
              sidebar.classList.add('collapsed');
              toggleButton.textContent = 'arrow_forward'; 
              sidebarHeading.textContent = ''; 
          } else {
              sidebar.classList.remove('collapsed');
              toggleButton.textContent = 'arrow_back'; 
              sidebarHeading.textContent = 'Journey Board'; 
          }
      });
  }



  
  
  function createAssetContainer(title, description, mediaLink) {
      const container = document.createElement('div');
      container.className = 'assest-container';

      const head = document.createElement('div');
      head.className = 'assest-container-head';

      const h1 = document.createElement('h1');
      h1.textContent = title;

      const icon = document.createElement('li');
      const iconSpan = document.createElement('span');
      iconSpan.className = 'material-symbols-outlined asset-icon';
      iconSpan.textContent = 'priority_high'; 
      icon.appendChild(iconSpan);

      head.appendChild(h1);
      head.appendChild(icon);

      const desc = document.createElement('div');
      desc.className = 'assest-container-des';
      const p = document.createElement('p');
      p.innerHTML = `<b>Description:</b> ${description}`;
      desc.appendChild(p);

      const main = document.createElement('div');
      main.className = 'assest-container-main';

      const videoContainer = document.createElement('div');
      videoContainer.className = 'video-container';

      const iframe = document.createElement('iframe');
      iframe.className = 'video-container-video';
      iframe.src = mediaLink;
      iframe.frameBorder = '0';
      iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
      iframe.allowFullscreen = true;

      videoContainer.appendChild(iframe);
      main.appendChild(videoContainer);

      container.appendChild(head);
      container.appendChild(desc);
      container.appendChild(main);

      return container;
  }

  const assetContainersDiv = document.getElementById('asset-containers');
  const data = [
      {
          title: 'Technical Project Management',
          description: 'Story of Alignment Scope of Agility Specific Accountable Staggering Approach',
          mediaLink: 'https://www.youtube.com/watch?v=WNwkhFi6JFs'
      },
      {
        title: 'Threadbuild',
        description: 'Watch the video and thread build, and jot out key threads while watching that video',
        mediaLink: ''
    },
    {
      title: 'Structure you pointers',
      description: 'Write a 400-500 word article, from your thread. Publish your understanding, and showcase your learning to the entire world.',
       mediaLink: ''
  },
  {
    title: '4SA Method',
    description: 'To explore more read more',
    mediaLink: ''
},
     
  ];

  if (assetContainersDiv) {
      data.forEach(item => {
          const newContainer = createAssetContainer(item.title, item.description, item.mediaLink);
          assetContainersDiv.appendChild(newContainer);
      });
  }
});


