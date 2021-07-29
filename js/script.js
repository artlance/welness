$(document).ready(function () {

    //ready

    //nojs
    $('body').removeClass('no-js');

    //------------------------------------------------------------------------//

    //fakelink
    $('a[href="#"]').on('click', function (event) {
        event.preventDefault();
    });

    //------------------------------------------------------------------------//

    $(document).on('click', '.navigation-toggle', function (event) {
        event.preventDefault();
        $('body').toggleClass('navigation-open');
    });

    //------------------------------------------------------------------------//

    $(document).on('click', '.faq-question a', function (event) {
        event.preventDefault();
        $(this).parents('.faq-item').toggleClass('active');
        $(this).parents('.faq-item').siblings('.faq-item').removeClass('active');
    });

    //------------------------------------------------------------------------//

    $(document).on('click', '.add-fav', function (event) {
        event.preventDefault();
        $(this).toggleClass('active');
    });

    $(document).on('click', '.favorite', function (event) {
        event.preventDefault();
        $(this).toggleClass('active');
    });

    //------------------------------------------------------------------------//

    if ($('#terms-sidebar').length) {
        var stickySidebar = new StickySidebar('#terms-sidebar', {
            bottomSpacing: 20,
            topSpacing: 100,
            resizeSensor: true,
            containerSelector: '.terms-container',
            innerWrapperSelector: '.terms-sidebar-inner'
        });
    }

    //------------------------------------------------------------------------//

    $('a[href*=#]:not([href=#])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top - 100
                }, 500);
                return false;
            }
        }
    });

    //------------------------------------------------------------------------//

    var swiper = new Swiper('.block-slider .swiper-container', {
        spaceBetween: 24,
        slidesPerView: 'auto',
        preloadImages: false,
        lazy: true,
        //loop: true,
        watchSlidesProgress: true,
        watchSlidesVisibility: true,
        slidesPerGroup: 1,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            1200: {
                slidesPerView: 4,
                spaceBetween: 48,
                loopAdditionalSlides: 9
            }
        }
    });

    //------------------------------------------------------------------------//

    $(document).on('click', '.quantity-button', function (event) {
        event.preventDefault();
        var thisParent = $(this).parents('.quantity');
        var thisParentInput = thisParent.find('.quantity-val');
        if ($(this).hasClass('quantity-plus')) {
            thisParentInput.val(parseInt(thisParentInput.val()) + 1);
        }
        if ($(this).hasClass('quantity-minus') && thisParentInput.val() > 1) {
            thisParentInput.val(parseInt(thisParentInput.val()) - 1);
        }
    });

    //------------------------------------------------------------------------//

    var galleryThumbs = new Swiper('.gallery-thumbs', {
        spaceBetween: 10,
        slidesPerView: 3,
        freeMode: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        breakpoints: {
            768: {
                slidesPerView: 4,
            }
        }
    });
    var galleryTop = new Swiper('.gallery-top', {
        spaceBetween: 10,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        thumbs: {
            swiper: galleryThumbs
        }
    });

    //------------------------------------------------------------------------//

    function fromTop() {
        if ($(window).scrollTop() > 1) {
            $('.header-global').addClass('from-top');
        } else {
            $('.header-global').removeClass('from-top');
        }
    }

    fromTop();

    $(window).scroll(function (event) {
        fromTop();
    });

    //------------------------------------------------------------------------//

    var swiperCalendar = new Swiper('.swiper-container-calendar', {
        navigation: {
            nextEl: '.calendar-slider .swiper-button-next',
            prevEl: '.calendar-slider .swiper-button-prev',
        },
        slidesPerView: 7,
    });
    swiperCalendar.on('touchStart', function () {
        console.log('slide touchStart');
    });
    swiperCalendar.on('touchMove', function () {
        console.log('slide touchMove');
    });
    swiperCalendar.on('transitionEnd', function () {
        console.log('slide transitionEnd');
    });

    //------------------------------------------------------------------------//

    $(document).on('click', '.daily-calendar-fav-link', function (event) {
        event.preventDefault();
        $(this).toggleClass('active');
    });

    //------------------------------------------------------------------------//

    var swiperTestimonials = new Swiper('.swiper-container-testimonials', {
        spaceBetween: 20,
        slidesPerView: 'auto',
        preloadImages: false,
        lazy: true,
        watchSlidesProgress: true,
        watchSlidesVisibility: true,
        slidesPerGroup: 1,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            768: {
                slidesPerView: 'auto',
                spaceBetween: 24,
            },
            1200: {
                slidesPerView: 3,
                spaceBetween: 32,
            }
        }
    });

    //------------------------------------------------------------------------//

    var swiperHero = new Swiper('.hero', {
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        watchOverflow: true,
    });

    //------------------------------------------------------------------------//

    function fromTop() {
        if ($(window).scrollTop() > 1) {
            $('.header-global').addClass('from-top');
        } else {
            $('.header-global').removeClass('from-top');
        }
    }
    if ($('.home').length) {
        fromTop();
        $(window).scroll(function (event) {
            fromTop();
        });
    }

    //------------------------------------------------------------------------//

    var swiperHomeVideo = new Swiper('.swiper-container-home-video', {
        spaceBetween: 20,
        slidesPerView: 'auto',
        slidesPerColumn: 1,
        slidesPerGroup: 1,
        preloadImages: false,
        lazy: true,
        watchSlidesProgress: true,
        watchSlidesVisibility: true,
        watchOverflow: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            768: {
                slidesPerView: 2,
                slidesPerColumn: 2,
                slidesPerColumnFill: 'row',
                spaceBetween: 30,
            },
            1200: {
                slidesPerView: 4,
                slidesPerColumn: 1,
                spaceBetween: 48,
            }
        }
    });

    //------------------------------------------------------------------------//

    var swiperHomeProducts = new Swiper('.home-products-list', {
        spaceBetween: 20,
        slidesPerView: 'auto',
        preloadImages: false,
        lazy: true,
        watchSlidesProgress: true,
        watchSlidesVisibility: true,
        slidesPerGroup: 1,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            768: {
                slidesPerView: 'auto',
                spaceBetween: 30,
            },
            1200: {
                slidesPerView: 4,
                spaceBetween: 48,
            }
        }
    });

    //------------------------------------------------------------------------//


    $(document).on('click', '.new-profile-toggle', function (event) {
        event.preventDefault();
        $('.new-profile-extra').slideToggle(100);
        $(this).toggleClass('active');
    });

    //------------------------------------------------------------------------//

    //tab
    $('.tabs').delegate('li:not(.active)', 'click', function () {
        $(this).addClass('active').siblings().removeClass('active').parents('.tab').find('.box').hide().eq($(this).index()).fadeIn(250, function () { });
    });

    //------------------------------------------------------------------------//

    // var classSingleGallerySidebar = new Swiper(".class-single-gallery-sidebar-js", {
    //     spaceBetween: 10,
    //     slidesPerView: 3,
    //     watchSlidesVisibility: true,
    //     watchSlidesProgress: true,
    //     direction: "horizontal",
    //     navigation: {
    //         nextEl: ".swiper-button-next",
    //         prevEl: ".swiper-button-prev",
    //     },
    //     breakpoints: {
    //         767: {
    //             slidesPerView: 4,
    //             direction: "horizontal",
    //         },
    //         992: {
    //             slidesPerView: 5,
    //             direction: "vertical",
    //         },
    //     }
    // });
    var classSingleGalleryMain = new Swiper(".class-single-gallery-main-js", {
        spaceBetween: 20,
        slidesPerView: "auto",
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        // thumbs: {
        //     swiper: classSingleGallerySidebar,
        // },
    });

    //------------------------------------------------------------------------//

    //drop
    activePop = null;
    dropClass = $('.drop-wrap');
    function closeInactivePop() {
        dropClass.each(function (index) {
            if ($(this).hasClass('drop-opened') && index != activePop) {
                $(this).removeClass('drop-opened');
            }
        });
        return false;
    }
    $(document).on('mouseover', '.drop-wrap', function () {
        activePop = dropClass.index(this);
    });
    $(document).on('mouseout', '.drop-wrap', function () {
        activePop = null;
    });
    $(document.body).on('click', function (event) {
        closeInactivePop();
    });
    $(document).on('click', '.drop-toggle', function (event) {
        event.preventDefault();
        $(this).parents(dropClass).toggleClass('drop-opened');
    });
    $(document).on('click', '.drop-close', function (event) {
        event.preventDefault();
        activePop = null;
        closeInactivePop();
    });

    //------------------------------------------------------------------------//

    if ($('.class-single-book-wrapper').length) {
        var sidebarElement = new StickySidebar('.class-single-book-wrapper', {
            topSpacing: 100,
            // bottomSpacing: 20,
            containerSelector: '.class-single-content-container',
            innerWrapperSelector: '.class-single-book'
        });
    }

    //------------------------------------------------------------------------//

    var dates = ["20/06/2021", "22/06/2021", "23/06/2021"];

    function DisableDates(date) {
        var string = jQuery.datepicker.formatDate('dd/mm/yy', date);
        return [dates.indexOf(string) == -1];
    }

    //class-single-book-datepicker
    $(".class-single-book-datepicker").datepicker({
        beforeShowDay: DisableDates
    });

    //------------------------------------------------------------------------//

    $(document).on('click', '.class-single-book-selected-delete', function (event) {
        event.preventDefault();
        $(this).parents('.class-single-book-selected-item').fadeOut('300');
    });

    $(document).on('click', '.class-single-book-panel-add', function (event) {
        event.preventDefault();
        var thisTemplate = $('#class-single-book-selected-template').html();
        thisTemplate = $(thisTemplate);

        var thisDate = $('.class-single-book-datepicker').datepicker('getDate');

        thisTemplate.find('.class-single-book-selected-title').text($.datepicker.formatDate("D, MM dd", thisDate));
        thisTemplate.find('.class-single-book-selected-time').text($('[name="class-time"]:checked').val());
        thisTemplate.find('.class-single-book-selected-price').text('$15.00');
        $(thisTemplate).appendTo('.class-single-book-selected');

        activePop = null;
        closeInactivePop();
    });

    $(document).on('click', '.drop-mobile-mask', function (event) {
        event.preventDefault();
        activePop = null;
        closeInactivePop();
    });

    // $('.class-single-book-panel-add').trigger('click');

    //------------------------------------------------------------------------//

    //$.fancybox.open($('#reviewsModal'));

    $(document).on('click', '.class-single-more-options-show', function (event) {
        event.preventDefault();
        $('.class-single-more-options').toggleClass('drop-opened');
    });

    $(document).on('click', '.class-single-mobile-select a', function (event) {
        event.preventDefault();
        $('.class-single-more-options').toggleClass('drop-opened');
    });

    $(document).on('click', '.class-single-mobile-date a', function (event) {
        event.preventDefault();
        $('.class-single-book-drop').toggleClass('drop-opened');
    });

    $(document).on('click', '.class-single-mobile-price a', function (event) {
        event.preventDefault();
        $('.class-single-prices-all').toggleClass('drop-opened');
    });

    //------------------------------------------------------------------------//

    $(document).on('click', '.calendar-date-number', function (event) {
        event.preventDefault();
        var thisParent = $(this).parents('.calendar-slider');
        $(this).addClass('active');
        $(this).parents('.swiper-slide').siblings('.swiper-slide').find('.calendar-date-number').removeClass('active');
        console.log('click');
    });

    //------------------------------------------------------------------------//

    //countdown
    if ($('.countdown').length) {
        $('.countdown').downCount({
            date: '08/01/2021 12:00:00',
            offset: -4
        }, function () {
            //callback
        });
    }

    //------------------------------------------------------------------------//

});//document ready

//*********************************************************************//

$(window).load(function () {

    //load

});//window load

//*********************************************************************//

$(window).resize(function () {

    //resize

});//window resize