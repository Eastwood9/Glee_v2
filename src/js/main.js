$(function() {

  $('.top-slider__outer').slick({
    arrows: false,
    dots: true,
    speed: 1000,
    // autoplay: true,
    // autoplaySpeed: 6000
  })

  $(".card").hover(function () {
    $(this).toggleClass('card--active');
  });

  var mixConfig = {
    controls: {
      scope: 'local'
    }
  };

  var mixer = mixitup('.week__content', mixConfig);
  var mixer1 = mixitup('.new__content', mixConfig);
});