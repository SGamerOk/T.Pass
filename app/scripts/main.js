$(function () {
  $(".info__content").slick({
    dots: true,
    arrows: false,
    autoplay: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
  });

  $(".gifts__content").slick({
    dots: true,
    arrows: false,
    autoplay: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
  });

  $(".menu__btn").on("click", function () {
    $(".header__inner").toggleClass("header__inner--active"),
    $(".menu__btn").toggleClass("menu__btn--active");
    $("body").toggleClass("no-scroll");
  });
});
