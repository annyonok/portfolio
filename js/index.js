new Swiper('.swiper', {
    navigation: {
        nextEl: '.portfolio__arrow_right',
        prevEl: '.portfolio__arrow_left',
        disabledClass: 'portfolio__arrow_disable',
      },
      // Responsive breakpoints
    breakpoints: {
    // when window width is >= 480px
    480: {
      grid: {
        fill: 'row',
        rows: 1
      }
    },
    // when window width is >= 768px
    768: {
        slidesPerView: 2,
        grid: {
            fill: 'row',
            rows: 2
          }        
        },
    // when window width is >= 1440px
    1440: {
        slidesPerView: 2,
        grid: {
            fill: 'row',
            rows: 2
          }        
        }
  }
});

// Menu
$('.header__contacts-burger').click(() => {
    $('.header__contacts').slideToggle().css('display', 'flex');
})