// Swiper Gallery
const swiperGallery = new Swiper(".gallery__swiper-container", {
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

// Accordeon
  $(function () {
        $("#catalogue-accordeon").accordion({
          heightStyle: "content",
          header: ".accordeon__header",
          collapsible: true,
          active: false,
        });
      });

document.addEventListener('DOMContentLoaded', function() {

// Flag Buttons

  const container = document.querySelector('.language-list')
  let buttons = document.querySelectorAll('.language-list__item');

  container.addEventListener('click', function(e) {
    const target = e.target;
    Array.from(buttons).forEach(function(button) {
      button.classList.remove('active');
    })
    target.classList.add('active');
  })


  // Catalogue Tabs
  let tabsItem = document.querySelectorAll('.accordeon__link');
  let tab = document.querySelectorAll('.catalogue-tab');

  tabsItem.forEach(function(tabsBtn) {
    tabsBtn.addEventListener('click', function(event) {
      const path = event.currentTarget.dataset.path;

      tab.forEach(function(tabContent) {
        tabContent.classList.remove('active-tab');
        document.querySelector(`[data-target = "${path}"]`).classList.add('active-tab');
      })
    })
  })

  // Tabs Items
  const cont = document.querySelector('.accordeon__list')
  let btns = document.querySelectorAll('.accordeon__link');

  cont.addEventListener('click', function(e) {
    const target = e.target;
    Array.from(btns).forEach(function(btn) {
      btn.classList.remove('accordeon-link-active');
    })
    target.classList.add('accordeon-link-active');
  })

  // Hide Events
  const hiddenEvents = document.querySelector('.events__hidden');
  const hiddenButton = document.querySelector('.events__btn--show');

  hiddenButton.addEventListener('click', function() {
    hiddenEvents.classList.add('events-active');
    hiddenButton.classList.add('btn-hidden');
  })

})

// Books Swiper
const swiperBooks = new Swiper('.books__swiper-container', {
      slidesPerView: 3,
      spaceBetween: 40,
      navigation: {
        nextEl: ".books__next",
        prevEl: ".books__prev"
      },
      loop: true,
      pagination: {
        el: '.books__pagination-item',
        type: 'fraction',
        clickable: true,
      },
    });

// Tooltips
tippy("#tooltip-one", {
        content:
          "Пример современных тенденций - современная методология разработки",
        theme: "grey",
      });
      tippy("#tooltip-two", {
        content:
          "Приятно, граждане, наблюдать, как сделанные на базе аналитики выводы вызывают у вас эмоции",
        theme: "grey",
      });
      tippy("#tooltip-three", {
        content: "В стремлении повысить качество",
        theme: "grey",
      });

// Partners Swiper
const swiperPartners = new Swiper('.partners__swiper-container', {
  slidesPerView: 3,
  spaceBetween: 50,
  navigation: {
    nextEl: ".partners__next",
    prevEl: ".partners__prev"
  },
  loop: true,
});

// Map
ymaps.ready(init);
    function init(){
        var myMap = new ymaps.Map("map", {
            center: [55.75846306898368,37.601079499999905],
            zoom: 16,
            controls: [],
        });
        myMap.controls.add('zoomControl', {
          position: {
            bottom: '332px',
            right: '10px',
          },
          size: 'small',
        });
        myMap.controls.add('geolocationControl', {
          position: {
            bottom: '300px',
            right: '10px',
          }
        })
        let myPlacemark = new ymaps.Placemark ([
          55.75846306898368,37.601079499999905
        ], {}, {
          iconLayout: 'default#image',
          iconImageHref: '/img/map_marker.svg',
          iconImageSize: [20, 20],
        })
        myMap.geoObjects.add(myPlacemark);
    }

// Inputmask Plugin
const input = document.querySelector('.map__form-phone');
const mask = new Inputmask("+7 (999) 999-99-99");
mask.mask(input);

// JustValidate Plugin
new JustValidate('.map__form', {
  rules: {
    name: {
      required: true,
      minLenght: 2,
      maxLenght: 20,
    },
    phone: {
      required: true,
      function: (name, value) => {
        const phone = input.Inputmask.unmaskedvalue()

        return Number(phone) && phone.lenght === 10;
      }
    }
  }
})

// Smooth Scroll
document.querySelectorAll('.nav__link').forEach(link => {

    link.addEventListener('click', function(e) {
        e.preventDefault();

        let href = this.getAttribute('href').substring(1);

        const scrollTarget = document.getElementById(href);
        const topOffset = 0;
        const elementPosition = scrollTarget.getBoundingClientRect().top;
        const offsetPosition = elementPosition - topOffset;

        window.scrollBy({
            top: offsetPosition,
            behavior: 'smooth'
        });
    });
});
