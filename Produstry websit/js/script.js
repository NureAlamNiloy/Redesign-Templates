$(function(){


    $(window).on('load',function(){
        $('.praloder_main').delay(100).fadeOut(1000);
    });


    // manu part js
    
    $('.nav_icon').click(function(){
        $('#mynav a').fadeToggle(500);
        $(this).find("i").toggleClass('fa-bars fa-times');
    });

    $('.nav_icon').click(function(){
        $('.navbar-brand').toggleClass('logo_move');
    });

    

    // service slick slider

    $('.service_slider').slick({
        autoplay: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1, 
        arrows: false,
        dots:false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
  ]
    });


    // portfolio slick slider

    $('.portfolio_content').slick({
        autoplay: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1, 
        arrows: false,
        dots:false, 
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 440,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
  ]
    });

    
    // Blog slick slider

    $('.blog_slider').slick({
        centerMode: true,
        centerPadding: '0px',
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1, 
        dots:false,
        nextArrow:$('.blogicon_left'),
        prevArrow:$('.blogicon_right'),
        responsive: [
            {
                breakpoint: 726,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
  ]
    });


    // Counter js
    $('.counter_number').counterUp({
		time: 3000
	});


    // testimonial_text_slider slick 

    $('.testimonial_text_slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1, 
        dots:false,
        autoplay: false,
        arrows:false,
        asNavFor: '.testimonial_img_slider'
    });


     // testimonial_img_slider

     $('.testimonial_img_slider').slick({
        centerMode: true,
        centerPadding: '0px',
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false, 
        dots:false,
        asNavFor: '.testimonial_text_slider',
        nextArrow:$('.testimonialicon_left'),
        prevArrow:$('.testimonialicon_right'),
    });


      // logo slick slider

      $('.logo_slick').slick({
        centerMode: true,
        centerPadding: '0px',
        autoplay: true,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        dots:false, 
        nextArrow:$('.logo_slidericon_left'),
        prevArrow:$('.logo_slidericon_right'),
        responsive: [
            {
                breakpoint: 1016,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
  ]
    });


      // team slick slider

      $('.team_slider').slick({
        centerMode: true,
        centerPadding: '0px',
        autoplay: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots:false, 
        nextArrow:$('.teamicon_left'),
        prevArrow:$('.teamicon_right'),
        responsive: [
            {
                breakpoint: 1016,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
  ]
    });
    



















    // pogo slider

    $('#banner').pogoSlider({
        autoplay: true,
        autoplayTimeout: 7000,
        displayProgess: true,
        preserveTargetSize: true,
        targetWidth: 1000,
        targetHeight: 450,
        responsive: true,
        generateNav: false,
      }).data('plugin_pogoSlider');

    

     

   









});