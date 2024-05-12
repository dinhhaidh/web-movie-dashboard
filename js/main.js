$(document).ready(function(){
    $("#header-menu").click(function(){
        $("#nav").addClass("show-menu");
    });
    $("#nav-close").click(function(){
        $('#nav').removeClass("show-menu");
    });
    
    $(window).scroll(function(){
        $("#header").toggleClass("blur-header", $(this).scrollTop() >= 50);
    })
});


// ===============  SWIPER MOVIE ================//
let swiperMovie = new Swiper('.movie__swiper', {
    loop: true,
    grabCursor: true,
    slidesPerView: 2,
    spaceBetween: 24,

    breakpoints:{
        440:{
            slidesPerView: 'auto'
        },

        768:{
            slidesPerView: '4'
        },

        1200:{
            slidesPerView: '5'
        },

    }
});

// ===============  SWIPER MOVIE ================//
let swiperNew = new Swiper('.new__swiper', {
    loop: true,
    grabCursor: true,
    slidesPerView: 2,

    // đoạn mã này lè căn giữa
    centeredSlides: true,

    pagination: {
        el: '.swiper-pagination',
        
        // đoạn mã này kích dc vào đốt vẫn chạy
        clickable: true,
    },

    breakpoints:{
        440:{
            slidesPerView: 'auto',
            centeredSlides: false,
        },

        768:{
            slidesPerView: '4',
            centeredSlides: false,
        },

        1200:{
            slidesPerView: '5',
            centeredSlides: false,
        },

    }

});

// =================== ADD BLUR HEADER=====================//
