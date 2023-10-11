/* в этот файл добавляет скрипты*/
const headerNav = document.querySelector(`.main-nav__page`);
const headerToggle = headerNav.querySelector(`.main-nav__toogle`);

headerToggle.addEventListener(`click`, () => {
  headerNav.classList.toggle(`main-nav__page--opened`)
  headerToggle.classList.toggle(`main-nav__page--opened`)
});
