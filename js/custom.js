(function ($) {
    "use strict";
    $(document).ready(function () {

        $('.mobile-menu-toggle').on('click', function () {
            $('.student-sidebar').addClass('show-sidebar');
            $('body').toggleClass('menu-has-opened');
        });

        $('.schedule-tabs .schedule-tab').on('click', function () {
            $('.time-table').hide();
            var dataId = $(this).data('id');
            $('#' + dataId).slideDown();
            $('.schedule-tabs .schedule-tab').removeClass('active');
            $(this).addClass('active');
        });

        $('.testimonial-slider').owlCarousel({
            loop: true,
            margin: 0,
            nav: true,
            autoplay: true,
            autoplayHoverPause: true,
            navText: '',
            controls: true,
            responsive: {
                0: {
                    items: 1
                }
            }
        });

        //primary slider
        $('.primary-slider').bxSlider({
            auto: true,
            autoControls: false,
            stopAutoOnClick: true,
            pager: false,
            nextText: '<i class="fa fa-angle-right"></i>',
            prevText: '<i class="fa fa-angle-left"></i>'
        });


        // brands carousel
        $('.brands-carousel').owlCarousel({
            loop: true,
            margin: 0,
            nav: false,
            autoplay: true,
            autoplayHoverPause: true,
            navText: ['Prev','Next'],
            controls: false,
            // center:true,
            autoplayTimeout:2000,
            responsive: {
                0: {
                    items: 1
                },
                415: {
                    items: 1
                },
                480: {
                    items: 2
                },
                600: {
                    items: 3
                },
                767: {
                    items: 5
                },
                992: {
                    items: 6
                },
                1199: {
                    items: 6
                },
                2000: {
                    items: 6
                }
            }
        });


    });
})(jQuery);