function isHover(sel,num,path){
    $(sel).on('mouseenter',function(){
        var $this = $(this);
        var $parent = $this.parent();
        var index = parseInt($parent.index());
        $this.attr('src',path + index + '.png');
    })
    $(sel).on('mouseleave',function(){
        var $this = $(this);
        var $parent = $this.parent();
        var index = parseInt($parent.index()) + num;
        $this.attr('src',path + index + '.png');
    })
}
isHover('.footer-flag img',4,'/images/pic');

$('.footer-service').on('mouseenter',function(){
    $('.footerPic').css('display','none');
    $('.footerPicClick').css('display','block');
    return false;
})
$('.footer-service').on('mouseleave',function(){
    $('.footerPicClick').css('display','none');
    $('.footerPic').css('display','block');
})


$('.footer-click dl dt').on('click',function(){
    var flag = $(this).nextAll().css('display') === "none"? 1:0;
    flag == 1 ?  $(this).nextAll().css('display','block'): $(this).nextAll().css('display','none');
    flag == 1 ?  $(this).find("span.btn-plus").css('background','url(/images/btnclose.png) 0 0 /cover'):$(this).find("span.btn-plus").css('background','url(/images/btnopen.png) 0 0 /cover');
})

$('.weixin').on('click',function(){
    $('.foot-tanchuang').toggle();
})
