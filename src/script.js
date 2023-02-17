document.addEventListener('DOMContentLoaded', function () {
  document.addEventListener('scroll', function () {
    if (window.scrollY > 0) {
      document.querySelector('#header').classList.remove('at-top');
    } else {
      document.querySelector('#header').classList.add('at-top');
    }
  });
});
