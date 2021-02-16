$(document).ready(function () {
    $('.icon-bar>a').on('click', function () {
        $('.active').removeClass('active');
        $(this).addClass('active');
    });
})