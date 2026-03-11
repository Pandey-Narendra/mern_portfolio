/*-----------------------------------------------------------
* Template Name    : Justin - Personal Portfolio
* Author           : beingeorge
* Version          : 1.0
* Created          : Oct 2019
* File Description : Main Js file of the template
*------------------------------------------------------------
*/

! function($) {
    "use strict";

    /* ---------------------------------------------- /*
    * Preloader
    /* ---------------------------------------------- */

    $(window).on('load', function() {
        $('#preloader').addClass("loaded");
    });

    /* ---------------------------------------------- /*
    * Section Scroll - Navbar
    /* ---------------------------------------------- */
    
    $('.navbar-nav a').on('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 0
        }, 1500, 'easeInOutExpo');

        if($('.navbar').hasClass('active')){
            $('.navbar').removeClass('active')
            $('.ham').removeClass('active')
        }

        event.preventDefault();
    });

    $('.navbar-toggler').on('click', function(){
        $('.aside').toggleClass('aside-open');
        $(".ham").toggleClass('active');
    });


    $(window).on("scroll",function() {
        if ($(this).scrollTop() > 50 ) {
            $('.section-about').addClass("in");
            $('.overlay-wrap').fadeOut(400);
        } else {
            $('.section-about').removeClass("in");
            $('.overlay-wrap').fadeIn(400);
        }

        if ($(this).scrollTop() > 500 ) {
            $('.navbar.fixed-top').fadeIn(400);
        } else {
            $('.navbar.fixed-top').fadeOut(400);
        }


    });

    /* ---------------------------------------------- /*
    * Scroll Spy - init
    /* ---------------------------------------------- */

    $("#navbarCollapse").scrollspy({
        offset:20
    });

    /* ---------------------------------------------- /*
    * Magnific Popup - Init
    /* ---------------------------------------------- */

    $('.simple-ajax-popup').magnificPopup({
        type: 'image',
        closeOnContentClick: true,
        mainClass: 'mfp-fade',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1]
        },
        zoom: {
            enabled: true,

            duration: 300,
            easing: 'ease-in-out',

            opener: function(openerElement) {
                return openerElement.is('img') ? openerElement : openerElement.find('img');
            }
        }
    });

    /* ---------------------------------------------- /*
    * Swipper - Init
    /* ---------------------------------------------- */

    // Portolio init

    var swiper = new Swiper('.swiper-portfolio', {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 3,
        spaceBetween: -30,
        initialSlide: 2,
        coverflowEffect: {
            rotate: 25,
            stretch: 0,
            depth: 150,
            slideShadows : false,
        },
        breakpoints: {
            767: {
                slidesPerView: 2,
            }
        },
        pagination: {
            el: '.portfolio-pagination',
            dynamicBullets: true,
        },
    });

    // Testimony init

    var swipertest = new Swiper('.swiper-testimony', {
        spaceBetween: 30,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    // Blog Init

    var swipert = new Swiper('.swiper-blog', {
        slidesPerView: 'auto',
        spaceBetween: 30,
        pagination: {
            el: '.swiper-progressbar',
            type: 'progressbar',
          },
    });

    // Home Banner Init

    var swiper = new Swiper('.swiper-home', {
        spaceBetween: 3,
        effect: 'fade',
        pagination: {
            el: '.home-pagination',
            clickable: true,
        },
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
    });

    /* ---------------------------------------------- /*
    * Parallax - Init
    /* ---------------------------------------------- */

    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
        $('#home').css({'background-attachment': 'scroll'});
    } else {
        $('#home').parallax('50%', -0.3);
    }

    if($('.section-home').length) {
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
            $('.swiper-slide').css({'background-attachment': 'scroll'});
        } else {
            $('.swiper-slide').parallax('50%', -0.3);
        }        
    }

    /* ---------------------------------------------- /*
    * AnimateOnScroll - Init
    /* ---------------------------------------------- */

    var wow = new WOW(
      {
        boxClass:     'wow',      // animated element css class (default is wow)
        animateClass: 'animated', // animation css class (default is animated)
        offset:       0,          // distance to the element when triggering the animation (default is 0)
        mobile:       true,       // trigger animations on mobile devices (default is true)
        live:         true,       // act on asynchronously loaded content (default is true)
        callback:     function(box) {
          // the callback is fired every time an animation is started
          // the argument that is passed in is the DOM node being animated
        },
        scrollContainer: null,    // optional scroll container selector, otherwise use window,
        resetAnimation: true,     // reset animation on end (default is true)
      }
    );
    wow.init();

    /* ---------------------------------------------- /*
    * Youtub Player
    /* ---------------------------------------------- */


    if($('.youtube-bg').length) {
        $(".youtube-bg").mb_YTPlayer();
    }

    /* ---------------------------------------------- /*
    * Initialize shuffle plugin
    /* ---------------------------------------------- */

    var $portfolioContainer = $('.list-items-container');

    $('#filter li').on('click', function (e) {
        e.preventDefault();

        $('#filter li').removeClass('active');
        $(this).addClass('active');

        var group = $(this).attr('data-group');
        var groupName = $(this).attr('data-group');

        $portfolioContainer.shuffle('shuffle', groupName );
    });


    $(document).ready( function() {

        $('.simple-ajax-popup').magnificPopup({
            type: 'image',
            gallery:{enabled:true}
        });

    });

    /* ---------------------------------------------- /*
    * Switcher
    /* ---------------------------------------------- */

    $('.toggle-theme-panel').on("click",function(e) {
        e.preventDefault();
        $('.settings_panel').toggleClass('active');
    });
    $('.colors-switch a').on("click",function(e) {
        e.preventDefault();
        var attr = $(this).attr("title");
        console.log(attr);
        $('head').append('<link rel="stylesheet" href="assets/css/'+attr+'.css">');
    });


}(window.jQuery);



/**
 * NAVBAR FUNCTIONALITY
 * Handles responsive navbar behavior and scroll effects
 * Includes smooth scrolling, active link highlighting, and accessibility features
 */

document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelector('.navbar');
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

    /**
     * Add scroll effect - add shadow when scrolled
     */
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    /**
     * Close navbar when nav link is clicked
     */
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (navbarToggler.offsetParent !== null) {
                navbarToggler.click();
            }
        });
    });

    /**
     * Active link highlighting based on scroll position
     * Detects which section is in view and highlights corresponding nav link
     */
    function updateActiveLink() {
        let current = '';
        const sections = document.querySelectorAll('section');
        const navbarHeight = navbar.offsetHeight;

        sections.forEach(section => {
            const sectionTop = section.offsetTop - navbarHeight;
            const sectionHeight = section.clientHeight;
            
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').slice(1) === current) {
                link.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', updateActiveLink);

    /**
     * Smooth scrolling for nav links with offset for fixed navbar
     */
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    const navbarHeight = navbar.offsetHeight;
                    const targetPosition = target.offsetTop - navbarHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                    
                    updateActiveLink();
                }
            }
        });
    });

    /**
     * Accessibility: Keyboard navigation
     */
    navbarToggler.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            this.click();
        }
    });

    navLinks.forEach(link => {
        link.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            }
        });
    });

    /**
     * Close mobile menu when clicking outside
     */
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.navbar')) {
            if (navbarToggler.offsetParent !== null && navbarCollapse.classList.contains('show')) {
                navbarToggler.click();
            }
        }
    });

    /**
     * Initialize active link on page load
     */
    updateActiveLink();
});
