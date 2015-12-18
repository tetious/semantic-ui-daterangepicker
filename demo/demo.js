$(document).ready(function () {
    $('#main-menu a.item').click(function () {
        $('#main-menu a.item').removeClass('active');
        $(this).addClass('active');
    });
});
