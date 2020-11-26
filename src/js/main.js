$(function(){

    $('.fairy-tail__slider, .our-trip__slider').slick({
        prevArrow:'<button type="button" class="slick-btn slick-btn__back"><img src="../../images/arrow-back.svg" alt=""></button>',
        nextArrow:'<button type="button" class="slick-btn slick-btn__next"><img src="../../images/arrow-next.svg" alt=""></button>',
        infinite: true,
        fade: true,
        responsive: [
            {
              breakpoint: 601,
              settings: {
                  arrows: false
              }
            },
          
          ]
    });
});