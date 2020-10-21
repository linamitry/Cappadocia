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

    // $('.our-trip__slider').slick({
    //     prevArrow:"<img class='our-trip__slider-btn our-trip__slider-btn__back' src='../../images/arrow-back.svg'>",
    //     nextArrow:"<img class='our-trip__slider-btn our-trip__slider-btn__next' src='../../images/arrow-next.svg'>",
    //     infinite: true,
    //     fade: true,
    //     responsive: [
    //         {
    //           breakpoint: 601,
    //           settings: {
    //               arrows: false
    //           }
    //         },
          
    //       ]
    // });

});