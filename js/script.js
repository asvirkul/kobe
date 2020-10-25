$(document).ready(function () {


    var hHeader = $('header').height();
    $(window).scroll(function () {
        var scroll = getCurrentScroll();
        if (scroll >= hHeader) {
            $('.white-header header').addClass('white-bg-scroll');
            $('.white-header .header-content').css({
                'padding': '0 40px'
            });
            $('.white-header #logo').attr('src', 'images/logo-black.png')
            $('.menu li a').css({
                'color': '#000'
            })
            $('.white-header #book').css({
                'color': '#000'
            })
            $('.white-header .sidenav-trigger').css({
                'color': '#000'
            })
            $('.white-header').css({
                'position': 'fixed'
            })
        }
        else {
            $('.white-header .header-content').css({
                'padding': '10px 40px'
            })
            $('.white-header #logo').attr('src', 'images/logo-black.png')
            $('.menu li a').css({
                'color': '#000'
            })
            $('.white-header #book').css({
                'color': '#000'
            })
            $('.white-header .sidenav-trigger').css({
                'color': '#000'
            })
            $('.white-header').css({
                'position': 'static'
            })
        }
    });
    var hHeader = $('header').height();
    $(window).scroll(function () {
        var scroll = getCurrentScroll();
        if (scroll >= hHeader) {
            $('header').addClass('bg-scroll');
            $('nav').css({
                'padding': '5px'
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
        }
        else {
            $('header').removeClass('bg-scroll');
            $('nav').css({
                'padding': '15px'
            });
            $('#logo').attr('src', 'images/logo-white.png')
            $('.menu li a').css({
                'color': '#fff'
            })
            $(' #book').css({
                'color': '#fff'
            })
            $('.sidenav-trigger').css({
                'color': '#fff'
            })
        }
    });
    function getCurrentScroll() {
        return window.pageYOffset || document.documentElement.scrollTop;
    }
    function getCurrentScroll() {
        return window.pageYOffset || document.documentElement.scrollTop;
    };
    $('#slides').hide();
    $('.text-slider-list').hide();

    $('#left, #right').click(function (e) {
        e.preventDefault();


    });

    $('.wrapslider').hover(

        function () {
            $('#left, #right').stop().animate({
                'opacity': 1

            });
        },
        function () {

            $('#left, #right').stop().animate({
                'opacity': 0

            });
        }



    );

    var arrayText = [];
    $('.text-slider-list > div').each(function () {
        arrayText.push($(this).children('h2, .line-slider, h1, p, a'));

    });



    var myarray = [];
    $('#slides li  img').each(function () {
        myarray.push($(this).attr('src'));

    });



    var count = 0;
    var countText = 0;
    $('#foto').attr('src', myarray[count]);
    $('.text-slider').prepend(arrayText[countText]);


    function left() {
        if (count != 0 && countText != 0) {
            count--;
            countText--;
            $('#foto').hide();
            $('.text-slider h2, .text-slider h1, .text-slider p, .text-slider a, .text-slider div').remove();
            $('.text-slider').hide();

            $('#foto').attr('src', myarray[count]).fadeIn();
            $('.text-slider').delay(500).fadeIn();
            $('.text-slider').prepend(arrayText[countText]);


        }
        else {
            count = myarray.length - 1;
            countText = arrayText.length - 1;


            $('#foto').hide();
            $('.text-slider h2, .text-slider h1, .text-slider p, .text-slider a, .text-slider div').remove();
            $('.text-slider').hide();


            $('#foto').attr('src', myarray[count]).fadeIn();
            $('.text-slider').delay(500).fadeIn();
            $('.text-slider').prepend(arrayText[countText]);


        }

    };

    function right() {
        if (count != myarray.length - 1 && countText != arrayText.length - 1) {
            count++;
            countText++;
            $('#foto').hide();
            $('.text-slider h2, .text-slider h1, .text-slider p, .text-slider a, .text-slider div').remove();
            $('.text-slider').hide();
            $('#foto').attr('src', myarray[count]).fadeIn();
            $('.text-slider').delay(500).fadeIn();
            $('.text-slider').prepend(arrayText[countText]);



        }
        else {
            count = 0;
            countText = 0;
            $('#foto').hide();
            $('.text-slider h2, .text-slider h1, .text-slider p, .text-slider a, .text-slider div').remove();
            $('.text-slider').hide();
            $('#foto').attr('src', myarray[count]).fadeIn();
            $('.text-slider').delay(500).fadeIn();
            $('.text-slider').prepend(arrayText[countText]);


        }

    };

    $('#left').click(left);
    $('#right').click(right);




    jQuery(window).trigger('resize').trigger('scroll');




    $('.parallax').parallax();

    $('.services-wrapper .owl-carousel').owlCarousel({
        loop: true,
        margin: 30,
        nav: false,
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
    $('.gallery-wrapper .owl-carousel').owlCarousel({
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

    $('.gallery-popup').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
        }
    });
    $('.sidenav').sidenav();
    $('.reviews-wrapper .owl-carousel').owlCarousel({
        loop: true,
        nav: false,
        margin: 20,
        items: 1
    });


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


});//ready