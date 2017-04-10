/*---------------------
Mainin Scripts

Project:   Chamele
Author:    -
---------------------*/

;(function () {

    "use strict"; // use strict to start

    /* ---------------------------------------------
     tb preloader init
     --------------------------------------------- */
    $(window).on('load', function() {
        $("body").imagesLoaded(function(){
            $(".tb-preloader-wave").fadeOut();
            $("#tb-preloader").delay(200).fadeOut("slow").remove();
        });
    });

        /* ---------------------------------------------
         nav sticky header
         --------------------------------------------- */

        var navBottom = $(".nav-bottom").offset();

        $(window).scroll(function () {
            var w = $(window).width();
            if ($(".nav-bottom").length == 0) {
            } else {
                if (w > 768) {
                    if ($(this).scrollTop() > navBottom.top + 100) {
                        $('header').addClass("sticky");
                    }
                    else {
                        $('header').removeClass("sticky");
                    }
                }
            }
        });

        /* ---------------------------------------------
         Back To Top
         --------------------------------------------- */

        $('body').append('<a id="tb-scroll-to-top" data-scroll class="tb-scroll-to-top-hide" href="#"><i class="fa fa-angle-up"></i></a>');

        var $tbScrollBack = $('#tb-scroll-to-top');
        $(window).on('scroll', function() {
            if($(this).scrollTop() > $(this).height()) {
                $tbScrollBack
                .addClass('tb-scroll-to-top-show')
                .removeClass('tb-scroll-to-top-hide');
            } else {
                $tbScrollBack
                .addClass('tb-scroll-to-top-hide')
                .removeClass('tb-scroll-to-top-show');
            }
        });

})(jQuery);
