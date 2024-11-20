'use strict';

const BUTTON_HIDE_SHOW = document.querySelector('.dashboard__button-hide-show');
const DASHBOARD = document.querySelector('.dashboard');
const BG_BUTTON = document.querySelector('.dashboard__button-hide-show-bg');
const MODULE = document.querySelector('.body__module');
const BODY = document.querySelector('.body');

BUTTON_HIDE_SHOW.addEventListener('click', () => {
  DASHBOARD.classList.toggle('dashboard--visible');

  BG_BUTTON.classList.toggle('dashboard__button-hide-show-bg--active');

  MODULE.classList.toggle('body__module--active');

  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });

  BODY.classList.toggle('no-scroll');
});
