$(document).ready(function(){

$('.testimonial-carousel').owlCarousel({
animateOut:'slideOutDown',
animateIn:'zoomIn',
loop:true,
margin:0,
nav:true,
smartSpeed:300,
autoplay:7000,
navText:[
'<span class="arrow-left"></span>',
'<span class="arrow-right"></span>'
],
responsive:{
0:{items:1},
600:{items:1},
800:{items:1},
1024:{items:1}
}
});

});