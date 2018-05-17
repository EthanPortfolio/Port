$(window).on('load', function () {
    $('.loader .inner').fadeOut(1000, function () {
        $('.loader').fadeOut(1000);
    });
});

$(document).ready(function () {
    $('#slides').superslides({
        animation: 'fade',
        animation_speed: 'slow',
        play: 8000,
        pagination: false
    });
    var typed = new Typed('.typed1', {
        strings: ['ETHAN KREIN'],
        typeSpeed: 80,
        loop: false,
        startDelay: 3000,
        showCursor: false
    });

    var typed = new Typed('.typed2', {
        strings: ["Sorta knows what he's doing"],
        typeSpeed: 80,
        loop: false,
        startDelay: 5000,
        showCursor: false
    });

    $('.owl-carousel').owlCarousel({
        loop: true,
        items: 12,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: false,
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 2
            },
            768: {
                items: 4
            },
            938: {
                items: 4
            },
            1200: {
                items: 6
            },
        }
    });

    var skillsTopOffset = $('.skillsSection').offset().top;


    $(window).scroll(function () {

        if (window.pageYOffset > skillsTopOffset - $(window).height() + 300) {
            $(function () {
                $('.chart').easyPieChart({
                    easing: 'eadeInOut',
                    barColor: '#fff',
                    trackColor: false,
                    scaleColor: false,
                    lineWidth: 5,
                    size: 152,
                    // onStep: function (from, to, percent) {
                    //     $(this.el).find('.percent').text('dgdfgdfg');
                    // }
                });
            });
        }
    });

    $("[data-fancybox]").fancybox(
        {
            transitionEffect: "slide",
            transitionDuration: 1500,
        }
    );

    $(".items").isotope({
        filter: '*',
        animationOptions: {
            duration: 1500,
            easing: 'linear',
            queue: false
        }
    });

    $("#filters a").click(function () {
        $('#filters .current').removeClass('current');
        $(this).addClass('current');

        var selector = $(this).attr('data-filter');

        $(".items").isotope({
            filter: selector,
            animationOptions: {
                duration: 1500,
                easing: 'linear',
                queue: false
            }
        });
        return false;
    });

    // $('#navigation li a').click(function (e) {
    //     e.preventDefault();

    //     var targetElement = $(this).attr('href');
    //     var targetPosition = $(targetElement).offset().top;
    //     $('html, body').animate({ scrollTop: targetPosition - 50 }, 'slow')
    // });

    // const nav = $("#navigation");
    // const navTop = nav.offset().top;

    // $(window).on('scroll', stickyNavigation);

    // function stickyNavigation() {
    //     var body = $('body');

    //     if ($(window).scrollTop() >= navTop) {
    //         body.css('padding-top', nav.outerHeight() + 'px');
    //         body.addClass('fixedNav');
    //     }
    //     else {
    //         body.css('padding-top', 0);
    //         body.removeClass('fixedNav');
    //     }
    // };

    // $('.show_hide').showHide({
    //     speed: 1000, // speed you want the toggle to happen
    //     easing: '', // the animation effect you want. Remove this line if you dont want an effect and if you haven't included jQuery UI
    //     changeText: 0, // if you dont want the button text to change, set this to 0
    //     showText: 'View',// the button text to show when a div is closed
    //     hideText: 'Close' // the button text to show when a div is open

    // });

    $('#fullpage').fullpage({
        verticalCentered: true,
    });

});
