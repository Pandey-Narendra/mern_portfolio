new Swiper('.testimonial-slider',{

loop:true,

spaceBetween:40,

centeredSlides:true,

autoplay:{
delay:5000,
disableOnInteraction:false
},

navigation:{
nextEl:'.swiper-button-next',
prevEl:'.swiper-button-prev'
},

pagination:{
el:'.swiper-pagination',
clickable:true
},

breakpoints:{

0:{slidesPerView:1},
768:{slidesPerView:1},
1024:{slidesPerView:1}

}

});