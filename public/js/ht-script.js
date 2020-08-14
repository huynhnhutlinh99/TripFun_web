$(document).ready(function () {
    //page 1.6
    $(".owl-carousel.type-1").owlCarousel({
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


    //page 1.1
    $(".ht-slider.type-2").owlCarousel({
        loop: true,
        dots: false,
        margin: 25,
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
                items: 5,
                nav: true,
                loop: false
            }
        }
    });

    $(".ht-banners").owlCarousel({
        loop: true,
        dots: false,
        margin: 40,
        responsiveClass: true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            }
        }
    });

    var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (isMobile) {
        $(".ht-menu").owlCarousel({
            loop: true,
            dots: false,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 3,
                    nav: true
                },
                768: {
                    items: 4,
                    nav: false
                },
                1160: {
                    items: 7,
                    nav: false
                },
            }
        });
    } else {

    }


});
