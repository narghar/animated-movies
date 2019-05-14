
let searchForm = document.querySelector('.search');
let videoElem = document.querySelector('.bg-video__content');
let searchButton = document.querySelector('.search__icon');


// searchForm.addEventListener('submit', e => {
//   e.preventDefault();
//   console.log('work');
// });
if (window.location.pathname=='/search') {
  videoElem.play();
}
// searchButton.addEventListener("click", () => {
//   videoElem.play();

// });

// searchForm.addEventListener('keypress', function(event) {
//   if (event.keyCode === 13 || event.which === 13) {
//       videoElem.play();
//     }
// });
