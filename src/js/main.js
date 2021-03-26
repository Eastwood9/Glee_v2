$(function() {

  $('.top-slider__outer').slick({
    arrows: false,
    dots: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 6000
  })

  $('.insights__content').slick({
    arrows: false,
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000
  });

  var mixConfig = {
    controls: {
      scope: 'local'
    }
  };

  var mixer = mixitup('.week__content', mixConfig);
  var mixer1 = mixitup('.new__content', mixConfig);
});