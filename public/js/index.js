
let searchForm = document.querySelector('.search');
let videoElem = document.querySelector('.bg-video__content');
let searchButton = document.querySelector('.search__icon');

// TODO: need changes, to play video as preloader for api search!
searchForm.addEventListener('submit', e => {
  e.preventDefault();
  console.log('work');
});

searchButton.addEventListener("click", () => {
  videoElem.play();
});

document.addEventListener('keypress', function(event) {
  if (event.keyCode === 13 || event.which === 13) {
      videoElem.play();
    }
});
