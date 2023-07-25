function initSwiperMain() {
  const swiper = new Swiper('.swiper-main', {
    speed: 400,
    effect: 'coverflow',
    pagination: {
      el: '.main-pagination',
      type: 'progressbar',
    },
    breakpoints: {
      200: {
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 300,
          modifier: 1,
          slideShadows: false,
        },
        allowTouchMove: true,
      },
      768: {
        coverflowEffect: {
          rotate: 0,
          stretch: 0,
          depth: 0,
          modifier: 0,
          slideShadows: false,
        },
        allowTouchMove: false,
      },
    },
  })
}

function initSwiperStages() {
  const swiper = new Swiper('.swiper-stages', {
    speed: 400,
    effect: 'coverflow',
    pagination: {
      el: '.stages-pagination',
      type: 'progressbar',
    },
    breakpoints: {
      200: {
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 300,
          modifier: 1,
          slideShadows: false,
        },
        allowTouchMove: true,
      },
      768: {
        coverflowEffect: {
          rotate: 0,
          stretch: 0,
          depth: 0,
          modifier: 0,
          slideShadows: false,
        },
        allowTouchMove: false,
      },
    },
  })
}

$(document).ready(function () {
  initSwiperMain()
  initSwiperStages()
})
