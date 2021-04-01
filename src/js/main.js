$(function() {

  $('.top-slider__outer').slick({
    arrows: false,
    dots: true,
    speed: 1000,
    // autoplay: true,
    // autoplaySpeed: 6000
    responsive: [
      {
        breakpoint: 993,
        settings: {
          dots: false
        }
      }
    ],
  })

  $('.partners__content').slick({
    arrows: false,
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 5,
    // autoplay: true,
    // autoplaySpeed: 6000

    responsive: [
      {
        breakpoint: 1221,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        }
      },
      {
        breakpoint: 1040,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 531,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 361,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ],
  });

  $('.user-nav__menu, .overlay').on('click', function () {
    $('.menu').toggleClass('menu--active');
    $('.user-nav__menu .icon').toggleClass('icon--hidden');
    $('.overlay').toggleClass('overlay--hidden');
    $('.user-nav__btn').toggleClass('user-nav__btn--active');
    $('.header__logo').toggleClass('header__logo--hidden');
  });

  var mixConfig = {
    controls: {
      scope: 'local'
    }
  };

  var mixer = mixitup('.week__content', mixConfig);
  var mixer1 = mixitup('.new-design__content', mixConfig);
});