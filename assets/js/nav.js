$(document).ready(function () {
    if ($(window).width() <= 768) {
        let $burger = $('.burger');
        let $nav = $('header nav');
        let $header = $('header');

        $burger.on('click', function () {
            $nav.toggleClass('active');
            $burger.toggleClass('active');
        });

        $(window).scroll(function (event) {
            let $scroll = $(window).scrollTop();
            
            if ($scroll > 200) {
                $header.addClass('sticky');
            } else {
                $header.removeClass('sticky');
            }
        });
    }
});