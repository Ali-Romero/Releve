function initSwiperFinance() {
  const swiper = new Swiper('.swiper-finance', {
    speed: 400,
    effect: 'coverflow',
    pagination: {
      el: '.finance-pagination',
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
  initSwiperFinance()
})
