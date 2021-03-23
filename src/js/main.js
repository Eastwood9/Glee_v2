$(function() {

  $('.top-slider__inner').slick({
    arrows: false,
    dots: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 6000
  })

  $(".week__item").hover(function () {
    $(this).toggleClass('week__item--active');
  });

  var mixer = mixitup('.week__content');
});