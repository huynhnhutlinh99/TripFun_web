$(document).ready(function () {
  //page 1.6
  $(".owl-carousel").owlCarousel({
    loop: true,
    dots: false,
    margin: 23,
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

  $(".ht-list-box-1 .box-1").on('click', function () {
    $(".ht-list-box-1 .box-1").removeClass('active');
    $(this).addClass('active');
  })

  $(".ht-slider .ht-1").on('click', function () {
    $(".ht-slider .ht-1").removeClass('active');
    $(this).addClass('active');
  })
});