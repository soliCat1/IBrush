const posts = document.querySelector('.posts');
const pagination = document.querySelector('.posts__pagination');

const initSwiper = () => {
  if (posts && pagination) {
    new Swiper(posts, {
      direction: 'horizontal',
      loop: true,
      spaceBetween: 30,
      breakpoints: {
        320: {
          pagination: {
            el: pagination,
            clickable: true
          },
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 3,
          pagination: false,
        }
      }});
  }
};

export {initSwiper}