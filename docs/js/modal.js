const openButton = document.querySelector('#open-button');
const modal = document.querySelector('.modal');

const openModal = () => {
  modal.classList.add('modal--active');
  document.body.classList.add('modal-open');
}

const closeModal = () => {
  modal.classList.remove('modal--active');
  document.body.classList.remove('modal-open');
}

const modalClickHandler = (evt) => {
  if (evt.target.closest('#close-button') || !evt.target.closest('.modal__container')) {
    closeModal()
  }
};

const bodyKeydownHandler = (evt) => {
  if (evt.key === "Escape" && modal.classList.contains('modal--active')) {
    closeModal()
  };
}

const openButtonClickHandler = () => {
  openModal()
};

const initModal = () => {
  if (openButton && modal) {
    openButton.addEventListener('click', openButtonClickHandler);
    modal.addEventListener('click', modalClickHandler);
    document.body.addEventListener('keydown', bodyKeydownHandler);
  }
};

export {initModal}