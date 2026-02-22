(function ($) {
  $(function () {


    $('.js-timeline-carousel_nav').slick({
      infinite: true,
      autoplay: true,
      autoplaySpeed: 3000,
      slidesToScroll: 1,
      arrows: false,

      variableWidth: true,
      centerMode: true,

      asNavFor: '.js-timeline-carousel',
      focusOnSelect: true,
      mobileFirst: true,
      responsive: [
        {
          breakpoint: 768,
          settings: {

            slidesToShow: 8
          }
        },
        {
          breakpoint: 0,
          settings: {
            centerMode: false
          }
        }
      ]
    });

    $('.js-timeline-carousel').slick({
      autoplay: true,
      autoplaySpeed: 3000,

      slidesToShow: 1,
      slidesToScroll: 1,

      prevArrow: '.js-ag-timeline-carousel-arrow_prev',
      nextArrow: '.js-ag-timeline-carousel-arrow_next',

      asNavFor: '.js-timeline-carousel_nav',
      speed: 500,
      responsive: [
        {
          breakpoint: 0,
          settings: {
            centerMode: false
          }
        }
      ]
    });


  });
})(jQuery);