/* в этот файл добавляет скрипты*/

/* Бургер в шапке мобильного меню */

const headerNav = document.querySelector(`.main-nav__page`);
const headerToggle = headerNav.querySelector(`.main-nav__toogle`);

const onBurgerClick = () => {
  headerToggle.addEventListener(`click`, () => {
    headerNav.classList.toggle(`main-nav__page--opened`)
    headerToggle.classList.toggle(`main-nav__page--opened`);
  });
};

onBurgerClick();


/* Слайдер */

const buttonPrev = document.querySelector('.slider-button-prev');
const buttonNext = document.querySelector('.slider-button-next');
const slides = document.querySelectorAll('.slider__item');
const steps = document.querySelectorAll('.slider__step');
const stopIndex = slides.length - 1;

let currentIndex = 0;

function resetSlider () {
  const currentSlaid = document.querySelector('.slider__item--current');
  currentSlaid.classList.remove('slider__item--current');
  const currentStep = document.querySelector('.slider__step--current');
  currentStep.classList.remove('slider__step--current');
 }

buttonPrev.addEventListener('click', () => {
  resetSlider();
   currentIndex --;
   if (currentIndex === 0) {
     buttonPrev.setAttribute("disabled", "disabled");
   } else if (currentIndex < stopIndex) {
     buttonNext.removeAttribute("disabled", "disabled");
   }
   slides[currentIndex].classList.add('slider__item--current');
   steps[currentIndex].classList.add('slider__step--current');
 });

buttonNext.addEventListener('click', () => {
  resetSlider();
  currentIndex ++;
  if (currentIndex === stopIndex) {
    buttonNext.setAttribute("disabled", "disabled");
  } else if (currentIndex > 0) {
    buttonPrev.removeAttribute("disabled", "disabled");
  }
  slides[currentIndex].classList.add('slider__item--current');
  steps[currentIndex].classList.add('slider__step--current');

  console.log("текущий интдекс - " + currentIndex, "количество слайдов - " + slideCount);
});

steps.forEach((step, i) => {
  step.addEventListener('click', () => {
  resetSlider();
  currentIndex = i;
  if (currentIndex === 0 && buttonPrev.hasAttribute('disable') && buttonNext.hasAttribute('disabled') ) {
    buttonNext.removeAttribute("disabled", "disabled");
  } else if (currentIndex === 0 && !buttonPrev.hasAttribute('disable')) {
    buttonPrev.setAttribute("disabled", "disabled");
  } else if (0 < currentIndex && buttonPrev.hasAttribute('disabled')) {
    buttonPrev.removeAttribute('disabled');
  } else if (currentIndex < stopIndex && buttonNext.hasAttribute('disabled')) {
    buttonNext.removeAttribute('disabled');
  } else if (currentIndex === stopIndex && !buttonNext.hasAttribute('disabled')) {
    buttonNext.setAttribute("disabled", "disabled");
  }
    steps[currentIndex].classList.add('slider__step--current');
    slides[currentIndex].classList.add('slider__item--current');
  })
})



