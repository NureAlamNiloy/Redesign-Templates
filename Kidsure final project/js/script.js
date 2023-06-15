$(function (){

    // preloader part

    $(window).on('load',function(){
        $('.praloder_main').delay(100).fadeOut(1000);
    });


     //	menufix starts

     var navOffset = $('.menu').offset().top;
     $(window).scroll(function () {
         var scrolling = $(this).scrollTop();
         if (scrolling > navOffset) {
             $('.menu').addClass('menufixed');
         } else {
             $('.menu').removeClass('menufixed');
         }
     });
 
     //	menufix ends

     //	counter starts
    $('.counter_number1').counterUp({
        delay: 20,
        time: 1000
    });
    $('.counter_number2').counterUp({
        delay: 20,
        time: 2000
    });
    $('.counter_number3').counterUp({
        delay: 20,
        time: 3000
    });
    $('.counter_number4').counterUp({
        delay: 20,
        time: 4000
    });

    //	counter ends


     //	teacher starts
     $('.one').on("click", function () {
        $('.teacher1').toggleClass('teacher-click1');
        $('.tech-button1 i').toggleClass('fas fa-times');
        $('.tech-button1 i').toggleClass('fas fa-ellipsis-h');
        $('.teacher_media1').slideToggle('slow');
    });

    $('.two').on("click", function () {
        $('.teacher2').toggleClass('teacher-click2');
        $('.tech-button2 i').toggleClass('fas fa-times');
        $('.tech-button2 i').toggleClass('fas fa-ellipsis-h');
        $('.teacher_media2').slideToggle('slow');
    });

    $('.three').on("click", function () {
        $('.teacher3').toggleClass('teacher-click3');
        $('.tech-button3 i').toggleClass('fas fa-times');
        $('.tech-button3 i').toggleClass('fas fa-ellipsis-h');
        $('.teacher_media3').slideToggle('slow');
    });


    $('.fure').on("click", function () {
        $('.teacher4').toggleClass('teacher-click4');
        $('.tech-button4 i').toggleClass('fas fa-times');
        $('.tech-button4 i').toggleClass('fas fa-ellipsis-h');
        $('.teacher_media4').slideToggle('slow');
    });


      //  student venobox plugin
      $('.venobox').venobox(); 

    // student slick slider

    $('.student_slider').slick({
        slidesToShow: 6,
        slidesToScroll: 1, 
        dots:false,
        nextArrow:$('.studentarrow_left'),
        prevArrow:$('.studentarrow_right'),
        responsive: [
            {
                breakpoint: 1201,
                settings: {
                    slidesToShow: 4,
                }
            },

            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    arrows:false,
                }
            },

            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                    arrows:false,
                }
            },
            {
                breakpoint: 325,
                settings: {
                    slidesToShow: 1,
                    arrows:false,
                }
            }
        ]
       
    });



    // feedback slick slider

    $('.feedback_slider').slick({
        slidesToShow: 2,
        slidesToScroll: 1, 
        dots:false,
        nextArrow:$('.feedbackarrow_left'),
        prevArrow:$('.feedbackarrow_right'),
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]    
       
    });


    //  top-to-button starts
    $('.top_icon').click(function () {
        $('html,body').animate({
            scrollTop: 0
        }, 100);
    });






})