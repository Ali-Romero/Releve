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

function initSwiperSupport() {
  const swiper = new Swiper('.swiper-support', {
    speed: 400,
    effect: 'coverflow',
    pagination: {
      el: '.support-pagination',
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

function initSwiperGallery() {
  const swiper = new Swiper('.swiper-gallery', {
    speed: 400,
    effect: 'coverflow',
    initialSlide: 1,
    grabCursor: true,
    coverflowEffect: {
      rotate: 60,
      stretch: 0,
      scale: 0.7,
      depth: 400,
      modifier: 1,
    },
    navigation: {
      nextEl: '.gallery-button-next',
      prevEl: '.gallery-button-prev',
    },
  })
}

$(document).ready(function () {
  initSwiperFinance()
  initSwiperGallery()
  initSwiperSupport()
})
