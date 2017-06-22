$('.recruit-tab-nav-indi .nav li').eq(0).addClass('active');
function tablist(i) {
    $('.recruit-tab-nav-indi .nav li').removeClass('active');
    $('.recruit-tab-nav-indi .nav li').eq(i).addClass('active');
    $('.container1 .section').hide();
    $('.container1 .section').eq(i).show();
}
var Url = window.location.href;

if(Url.indexOf('beijing')!=-1){
    tablist(0);
}
if(Url.indexOf('chengdu')!=-1){
    tablist(1);
}
if(Url.indexOf('shenzhen')!=-1){
    tablist(2);
}
