const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
});

const swiper2 = new Swiper('.reviews-swiper', {

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const menuBtn = document.querySelector('.burger-menu');
const navigation = document.querySelector('.nav');
const body = document.querySelector('body');

menuBtn.addEventListener('click', () => {
  navigation.classList.toggle('nav_mobile_visible');
  body.classList.toggle('lock');
}); 

const modalButton = document.querySelector('.booking__button');
const modal = document.querySelector('.modal');
const modalClose = document.querySelector('.modal__close');

modalButton.addEventListener('click', () => {
  modal.classList.add('modal_visible');
  body.classList.add('lock');
});

modalClose.addEventListener('click', () => {
  modal.classList.remove('modal_visible');
  body.classList.remove('lock');
});

document.addEventListener('keydown', (e) => {
  if (e.code == 'Escape') { 
    modal.classList.remove('modal_visible');
    body.classList.remove('lock');
  }
});
