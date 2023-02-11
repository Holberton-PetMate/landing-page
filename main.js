document.addEventListener('DOMContentLoaded', () => {
  const nav = document.querySelector('#mobile-nav');
  const button = document.querySelector('#menu-icon');

  button.addEventListener('click', () => {
    if (nav.classList.contains('show')) {
      nav.classList.remove('show');
    } else {
      nav.classList.add('show');
    }
  });
});
