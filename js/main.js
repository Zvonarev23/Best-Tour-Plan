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

var menuBtn = document.querySelector('.burger-menu');
menuBtn.addEventListener('click', function () {

  document.querySelector('.nav').classList.toggle('nav_mobile_visible')
  document.querySelector('body').classList.toggle('lock')

}); 
