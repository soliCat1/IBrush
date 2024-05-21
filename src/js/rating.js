const rating = document.querySelector('#rating');
const stars = document.querySelector('#stars');

const starsChangeHandler = (evt) => {
  rating.textContent = evt.target.value
}

const initRating = () => {
  stars.addEventListener('change', starsChangeHandler)
};

export {initRating}