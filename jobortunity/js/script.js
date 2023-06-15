$(function () {
	"use strict";
  // team Slider
    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
         asNavFor: '.slider-nav',
         dotsClass:'banner-dots'
      });
      $('.slider-nav').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: true,
        centerMode: true,
        focusOnSelect: true,
        centerPadding: '0px',
        arrows:false,
        dotsClass:'banner-dots'
      });


    // Counter js
    $('.counteer').counterUp({
      delay: 20,
      time: 2000
    });

      // back to top

     $(window).scroll(function(){

      if($(window).scrollTop() > 700){
          $(".backTop").slideDown(100);
          $(".backTop").css({
              "display": "block"
          });
      }
      else( 
          $(".backTop").css({
          "display": "none"
      }))

   });
   
           $(".backTop").click(function() {
               $('html, body').animate({
                   scrollTop:0,
               });
           });


});    
