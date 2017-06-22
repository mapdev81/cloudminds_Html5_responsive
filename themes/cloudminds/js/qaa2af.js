$(function () {
    $('.qa-item .post-title').on('click', function () {
        $(this).parent().next().toggleClass('post-content-hide');
        $(this).next().toggleClass('jiantou1');
        $(this).toggleClass('post-content-color');
    });

    $('.qa-item .post-retract').on('click', function () {
        $(this).parent().addClass('post-content-hide');
        $(this).parent().prev().find('h2').removeClass('post-content-color');
    })
})
