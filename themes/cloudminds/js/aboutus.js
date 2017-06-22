$(function(){
    var cnt = $('.contact-tab-nav-indi .nav li.active').length;
    if (cnt == 0) {
        $('.contact-tab-nav-indi .nav li:first-child').addClass('active');
    }
});
