$(function(){
    var swiper = new Swiper('#recruit-swiper', {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 30
    });
    $('.arrow-left').on('click', function(e){
        e.preventDefault()
        swiper.swipePrev()
    })
    $('.arrow-right').on('click', function(e){
        e.preventDefault()
        swiper.swipeNext()
    })

//     var mySwiperRecruit = new Swiper('#recruit-swiper',{
//         loop: true,
//         paginationClickable: true,
//         nextButton: '.button-img-next',
//         prevButton: '.button-img-prev',
//     })
//     $('.button-img-next').on('click', function(e){
//         e.preventDefault()
//         mySwiper.swipePrev()
//     })
//     $('.button-img-prev').on('click', function(e){
//         e.preventDefault()
//         mySwiper.swipeNext()
//     })

});
