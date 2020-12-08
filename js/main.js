// Swiper
const swiperGallery = new Swiper(".swiper-container", {
        navigation: {
          nextEl: ".gallery__next",
          prevEl: ".gallery__prev",
        },
        loop: true,
        pagination: {
        el: '.gallery__pagination-item',
        type: 'fraction',
      },
      spaceBetween: 30,
      });

// Choices
const elementChoices = document.querySelector('.gallery__select');
const choices = new Choices(elementChoices, {
  position: 'bottom',
  searchEnabled: false,
  itemSelectText: '',
})
