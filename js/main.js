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
