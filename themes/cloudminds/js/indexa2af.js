// // 主页轮播图

    var mySwiperBanner = new Swiper('.index-banner',{
        loop: true,
        autoplay: 4000,
        autoplayDisableOnInteraction: false,
        pagination: '.index-banner-pagination',
        centeredSlides: true,
        paginationClickable: true,
        slidesPerView: 1,
        spaceBetween: 30,
        onSlideChangeStart: function(swiper){
            var newSlide=mySwiperBanner.activeSlide(); //获取当前块
        }
    })
// 主页解决方案
    var mySwiper = new Swiper('.i-solution-case',{
        pagination: '.solution-pagination',
        loop:true,
        grabCursor: true,
        paginationClickable: true,

    })
    $('.swiper-button-prev').on('click', function(e){
        e.preventDefault()
        mySwiper.swipePrev()
    })
    $('.swiper-button-next').on('click', function(e){
        e.preventDefault()
        mySwiper.swipeNext()
    })

