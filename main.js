document.addEventListener('DOMContentLoaded', () => {
  const nav = document.querySelector('#mobile-nav');
  const button = document.querySelector('#menu-icon');
  const prodli = document.querySelector('#prod-link');
  const aboutli = document.querySelector('#about-link');
  const contactli = document.querySelector('#contact-link');


  button.addEventListener('click', () => {
    if (nav.classList.contains('show')) {
      nav.classList.remove('show');
    } else {
      nav.classList.add('show');
    }
  });

  prodli.addEventListener('click', () => {
    nav.classList.remove('show');
  });

  aboutli.addEventListener('click', () => {
    nav.classList.remove('show');
  });

  contactli.addEventListener('click', () => {
    nav.classList.remove('show');
  });
});
