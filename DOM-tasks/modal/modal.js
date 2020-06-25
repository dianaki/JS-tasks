const openBtn = document.querySelector ('#openOverlay');
const body = document.body;

openBtn.addEventListener('click', function(event) {
  const overlayElement = document.createElement('div');
  overlayElement.classList.add('overlay');

  overlayElement.addEventListener('click', function(event){
    if (event.target == overlayElement){
      body.removeChild(overlayElement);
    }
  })

  const containerElement = document.createElement('div');
  containerElement.classList.add('modal-container');

  const closeElement = document.createElement('a');
  closeElement.classList.add('close');
  closeElement.innerHTML = 'Х';
  closeElement.href = '#';

  closeElement.addEventListener ('click', function(event){
    event.preventDefault();
    body.removeChild(overlayElement);
  })

  const contentElement = document.createElement('div');
  contentElement.classList.add('content');
  contentElement.innerHTML = 'Hello, World!';

  body.appendChild(overlayElement);
  overlayElement.appendChild(containerElement);
  containerElement.appendChild(closeElement);
  containerElement.appendChild(contentElement);

  
})