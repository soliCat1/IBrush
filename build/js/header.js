const buttons = document.querySelectorAll('.nav__title--arrow-mod');

const buttonClickHandler = ({target}) => {
  const activeButton = document.querySelector('.nav__title--active');
  if (activeButton && activeButton !== target) {
    activeButton.classList.remove('nav__title--active')
  } 
  target.classList.toggle('nav__title--active')
};

const initButtons = () => {
  buttons.forEach(button => {
    button.addEventListener('click', buttonClickHandler)
  })
};

export {initButtons}