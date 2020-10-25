$(document).ready(function () {    
    var hHeader = $('header').height();
    $(window).scroll(function () {
        var scroll = getCurrentScroll();
        if (scroll >= hHeader) {
            $('header').addClass('white-bg-scroll');
            $('.header-content').css({
                'padding': '0 40px'
            });
            $('#logo').attr('src', 'images/logo-black.png')
            $('.menu li a').css({
                'color': '#000'
            })
            $(' #book').css({
                'color': '#000'
            })
            $('.sidenav-trigger').css({
                'color': '#000'
            })
            $('header').css({
                'position': 'fixed'
            })
        }
        else {
            $('.header-content').css({
                'padding': '10px 40px'
            })
            $('#logo').attr('src', 'images/logo-black.png')
            $('.menu li a').css({
                'color': '#000'
            })
            $(' #book').css({
                'color': '#000'
            })
            $('.sidenav-trigger').css({
                'color': '#000'
            })
            $('header').css({
                'position': 'static'
            })
        }
    });

    function getCurrentScroll() {
        return window.pageYOffset || document.documentElement.scrollTop;
    };

    
    /* Header effect */
    

    /* Sorting Img */
    
    $('.gallery-isotope-buttons button').on('click', function () {
        var value = $(this).attr('data-filter');
        $grid.isotope({
            filter: value
        });
    });
    $('.gallery-isotope-buttons  button').click(function () {
        $('.gallery-isotope-buttons button').removeClass('active');
        $(this).addClass('active');
    });

    /* Sorting Img */


    /* Gallery */

    $('.gallery-popup').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
        }
    });


    $("#accordion").accordion();
    $('.sidenav').sidenav();
    $('.parallax').parallax();
    /* Gallery */
    

    
    
    var $grid = $('.grid').isotope({
        itemSelector: '.grid-item',
        layoutMode: 'fitRows',
        transitionDuration: '0.8s'
    });

    $grid.isotope();
    



    /* Owl carousel */

    $('.about-team-wrapper .owl-carousel').owlCarousel({
        loop: true,
        nav: false,
        margin: 20,
        items: 3,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });

/* Owl Carousel */


})//ready