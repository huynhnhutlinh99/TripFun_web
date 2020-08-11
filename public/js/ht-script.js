$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    dots: false,
    margin: 14,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: true
      },
      600: {
        items: 3,
        nav: false
      },
      1000: {
        items: 4,
        nav: true,
        loop: false
      }
    }
  });
});