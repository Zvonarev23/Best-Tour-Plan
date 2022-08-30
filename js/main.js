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

const footerForm = document.querySelector('.footer__form');
const footerTelSelector = footerForm.querySelector('input[type="tel"]');
const footerInputMask = new Inputmask('+7 (999) 999-99-99');
footerInputMask.mask(footerTelSelector);

const modalForm = document.querySelector('.modal__form');
const modalTelSelector = modalForm.querySelector('input[type="tel"]');
const modalInputMask = new Inputmask('+7 (999) 999-99-99');
modalInputMask.mask(modalTelSelector);

const footerValidation = new JustValidate('.footer__form');

footerValidation
  .addField('.footer__input-name', [
    {
      rule: 'minLength',
      value: 3,
    },
    {
      rule:'required',
      value: true,
      errorMessage: 'Please specify your name',
    }
  ])

  .addField('.footer__input-phone', [
    {
      rule: 'required',
      value: true,
      errorMessage: 'Please specify your phone number',
    },
    {
      rule: 'function',
      validator: function() {
        const phone = footerTelSelector.inputmask.unmaskedvalue();
        return phone.length === 10;
      },
      errorMessage: 'Please enter a valid phone number',
    },
  ])

const modalValidation = new JustValidate('.modal__form');

modalValidation

  .addField('.modal__input-name', [
    {
      rule: 'minLength',
      value: 3,
    },
    {
      rule:'required',
      value: true,
      errorMessage: 'Please specify your name',
    }
  ])

  .addField('.modal__input-phone', [
    {
      rule: 'required',
      value: true,
      errorMessage: 'Please specify your phone number',
    },
    {
      rule: 'function',
      validator: function() {
        const phone = modalTelSelector.inputmask.unmaskedvalue();
        return phone.length === 10;
      },
      errorMessage: 'Please enter a valid phone number',
    },
  ])

  .addField('.modal__input-mail', [
    {
      rule: 'required',
      value: true,
      errorMessage: 'Please specify your Email',
    },
    {
      rule: 'email',
      value: true,
      errorMessage: 'Please enter a valid Email',
    }, 
  ])

const newsletterValidation = new JustValidate('.newsletter__send-form');

newsletterValidation

  .addField('.send-form__input', [
    {
      rule: 'required',
      value: true,
      errorMessage: 'Please specify your Email',
    },
    {
      rule: 'email',
      value: true,
      errorMessage: 'Please enter a valid Email',
    }, 
  ])

