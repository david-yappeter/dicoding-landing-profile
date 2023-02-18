document.addEventListener('DOMContentLoaded', function () {
  onScroll();
  document.addEventListener('scroll', onScroll);
});

function onScroll() {
  if (window.scrollY > 0) {
    document.querySelector('#header').classList.remove('at-top');
  } else {
    document.querySelector('#header').classList.add('at-top');
  }
}
