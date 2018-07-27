$(document).ready(function() {
    if($(window).width()<600){
        $('#loading_img').attr('class','la-square-jelly-box la-2x');
    };
    //loading
    setTimeout(function(){
        $('#loading').fadeOut(1000);
    },1200);


    $('#fullpage').fullpage({
        sectionsColor: [],
        css3:true,
        scrollingSpeed: 500,
        lockAnchors: true,
        anchors: ['fm', 'page0', 'page1', 'page2', 'page3', 'page4', 'page5', 'page6', 'page7', 'page8', 'page9', 'page10'],
        afterRender: function(){
            if($(window).width() > 600){
                $('#prev').css('display','none');
            }
            setTimeout(function () {
                $('#fm_1').addClass('animated fadeIn').fadeIn();
            },900);
        },
        afterLoad: function(anchorLink, index){
            if(index == 1){
                if($(window).width() > 600){
                    $('#prev').css('display','none');
                }
                
            } else if(index == 2){
                // $.fn.fullpage.setAllowScrolling(false);
                // $.fn.fullpage.setKeyboardScrolling(false);
                $('#p0_1').addClass('animated fadeIn').fadeIn(); 
                setTimeout(function () {
                    $('#p0_2').addClass('animated fadeIn').fadeIn();
                },900);

            } else if (index == 3){
                if($(window).width() > 600){
                    $('#prev').css('display','block');
                }
                $('#p1_1').addClass('animated fadeIn').fadeIn(); 
                setTimeout(function () {
                    $('#p1_2').addClass('animated fadeInDown').fadeIn();
                },1000);
                setTimeout(function () {
                    $('#p1_3').addClass('animated fadeInDown').fadeIn();
                },1000);
                setTimeout(function () {
                    $('#p1_4').addClass('animated fadeInDown').fadeIn();
                },1000);
                setTimeout(function () {
                    $('#p1_5').addClass('animated fadeInDown').fadeIn();
                },1000);

            } else if (index == 4){
                // $.fn.fullpage.setAllowScrolling(true);
                // $.fn.fullpage.setKeyboardScrolling(true);
                $('#p2_1').addClass('animated fadeIn').fadeIn();
                setTimeout(function () {
                    $('#p2_2').addClass('animated vanishIn').fadeIn();
                },600);
                setTimeout(function () {
                    $('#p2_3').addClass('animated fadeIn').fadeIn();
                },1800);
                setTimeout(function () {
                    $('#p2_4').addClass('animated fadeIn').fadeIn();
                },2300);
                setTimeout(function () {
                    $('#p2_5').addClass('animated zoomIn').fadeIn();
                },3200);
                setTimeout(function () {
                    $('#p2_6').addClass('animated zoomIn').fadeIn();
                },3700);
                
            } else if (index == 5){
                // $.fn.fullpage.setAllowScrolling(false);
                // $.fn.fullpage.setKeyboardScrolling(false);
                $('#p3_1').addClass('animated vanishIn').fadeIn();
                setTimeout(function () {
                    $('#p3_2').addClass('animated fadeInDown').fadeIn();
                },1000);
                setTimeout(function () {
                    $('#p3_3').addClass('animated fadeInDown').fadeIn();
                },1000);
                setTimeout(function () {
                    $('#p3_4').addClass('animated fadeInDown').fadeIn();
                },1000);
                setTimeout(function () {
                    $('#p3_5').addClass('animated fadeInDown').fadeIn();
                },1000);

                
            } else if (index == 6){
                // $.fn.fullpage.setAllowScrolling(true);
                // $.fn.fullpage.setKeyboardScrolling(true);
                $('#p4_1').addClass('animated vanishIn').fadeIn();
                setTimeout(function () {
                    $('#p4_2').addClass('animated fadeInUp').fadeIn();
                },1000);
                setTimeout(function () {
                    $('#p4_3').addClass('animated fadeIn').fadeIn();
                },1800);
                setTimeout(function () {
                    $('#p4_4').addClass('animated fadeIn').fadeIn();
                },2500);
                setTimeout(function () {
                    $('#p4_5').addClass('animated fadeIn').fadeIn();
                },3700);
                
            } else if (index == 7){
                // $.fn.fullpage.setAllowScrolling(false);
                // $.fn.fullpage.setKeyboardScrolling(false);
                $('#p5_1').addClass('animated fadeInDown').fadeIn();
                setTimeout(function () {
                    $('#p5_2').addClass('animated fadeInDown').fadeIn();
                },1000);
                setTimeout(function () {
                    $('#p5_3').addClass('animated fadeInDown').fadeIn();
                },1000);
                setTimeout(function () {
                    $('#p5_4').addClass('animated fadeInDown').fadeIn();
                },1000);                                
                setTimeout(function () {
                    $('#p5_5').addClass('animated fadeInDown').fadeIn();
                },1000);

					
            } else if (index == 8){
                // $.fn.fullpage.setAllowScrolling(true);
                // $.fn.fullpage.setKeyboardScrolling(true);
                $('#p6_1').addClass('animated vanishIn').fadeIn();
                setTimeout(function () {
                    $('#p6_2').addClass('animated fadeInUp').fadeIn();
                },1000);
                setTimeout(function () {
                    $('#p6_3').addClass('animated fadeInUp').fadeIn();
                },1900);
                setTimeout(function () {
                    $('#p6_4').addClass('animated fadeInUp').fadeIn();
                },2500);
                setTimeout(function () {
                    $('#p6_5').addClass('animated fadeIn').fadeIn();
                },3700);
                

			} else if (index == 9){
                // $.fn.fullpage.setAllowScrolling(false);
                // $.fn.fullpage.setKeyboardScrolling(false);
                $('#p7_1').addClass('animated vanishIn').fadeIn();
                setTimeout(function () {
                    $('#p7_2').addClass('animated fadeInDown').fadeIn();
                },1000);
                setTimeout(function () {
                    $('#p7_3').addClass('animated fadeInDown').fadeIn();
                },1000);
                setTimeout(function () {
                    $('#p7_4').addClass('animated fadeInDown').fadeIn();
                },1000);
                setTimeout(function () {
                    $('#p7_5').addClass('animated fadeInDown').fadeIn();
                },1000);
			
			} else if (index == 10){
                // $.fn.fullpage.setAllowScrolling(true);
                // $.fn.fullpage.setKeyboardScrolling(true);
                
                $('#p8_1').addClass('animated vanishIn').fadeIn();
                setTimeout(function () {
                    $('#p8_2').addClass('animated fadeInUp').fadeIn();
                },1000);
                setTimeout(function () {
                    $('#p8_3').addClass('animated fadeInUp').fadeIn();
                },1700);
                setTimeout(function () {
                    $('#p8_4').addClass('animated fadeInUp').fadeIn();
                },2000);
                setTimeout(function () {
                    $('#p8_5').addClass('animated fadeIn').fadeIn();
                },3700);
			 
            } else if (index == 11){
                // $.fn.fullpage.setAllowScrolling(false);
                // $.fn.fullpage.setKeyboardScrolling(false);
                $('#p9_1').addClass('animated vanishIn').fadeIn();
                setTimeout(function () {
                    $('#p9_2').addClass('animated fadeInDown').fadeIn();
                },1000);
                setTimeout(function () {
                    $('#p9_3').addClass('animated fadeInDown').fadeIn();
                },1000);
                setTimeout(function () {
                    $('#p9_4').addClass('animated fadeInDown').fadeIn();
                },1000);
                setTimeout(function () {
                    $('#p9_5').addClass('animated fadeInDown').fadeIn();
                },1000);

																
			} else if (index == 12){
                // $.fn.fullpage.setAllowScrolling(true);
                // $.fn.fullpage.setKeyboardScrolling(true);
                $('#p10_1').addClass('animated vanishIn').fadeIn();
                setTimeout(function () {
                    $('#p10_2').addClass('animated vanishIn').fadeIn();
                },1000);
                setTimeout(function () {
                    $('#p10_3').addClass('animated fadeInUp').fadeIn();
                },1800);
                setTimeout(function () {
                    $('#p10_4').addClass('animated fadeInUp').fadeIn();
                },2400);
                setTimeout(function () {
                    $('#p10_5').addClass('animated fadeIn').fadeIn();
                },3600);

         
            } else if (index == 13){
                $('#p11_1').addClass('animated vanishIn').fadeIn();
                setTimeout(function () {
                    $('#p11_2').addClass('animated fadeInDown').fadeIn();
                },1000);
                setTimeout(function () {
                    $('#p11_3').addClass('animated fadeInDown').fadeIn();
                },1000);
                setTimeout(function () {
                    $('#p11_4').addClass('animated fadeInDown').fadeIn();
                },1000);
                setTimeout(function () {
                    $('#p11_5').addClass('animated fadeInDown').fadeIn();
                },1000);									
		    } else if (index == 14){
                $('#p12_1').addClass('animated vanishIn').fadeIn();
                setTimeout(function () {
                    $('#p12_2').addClass('animated fadeInUp').fadeIn();
                },1000);
                setTimeout(function () {
                    $('#p12_3').addClass('animated fadeInUp').fadeIn();
                },1700);
                setTimeout(function () {
                    $('#p12_4').addClass('animated fadeInUp').fadeIn();
                },3400);
                setTimeout(function () {
                    $('#p12_5').addClass('animated fadeIn').fadeIn();
                },4000);
                
		    } else if (index == 15){
                $('#p13_1').addClass('animated vanishIn').fadeIn();
                setTimeout(function () {
                    $('#p13_2').addClass('animated fadeInUp').fadeIn();
                },1000);
                setTimeout(function () {
                    $('#p13_3').addClass('animated fadeInUp').fadeIn();
                },1200);
                setTimeout(function () {
                    $('#p13_4').addClass('animated fadeInUp').fadeIn();
                },1400);
                setTimeout(function () {
                    $('#p13_5').addClass('animated fadeInUp').fadeIn();
                },1600);
                

		    } else if (index == 16){
                $('#p14_1').addClass('animated vanishIn').fadeIn();
                setTimeout(function () {
                    $('#p14_2').addClass('animated fadeInUp').fadeIn();
                },1000);
                setTimeout(function () {
                    $('#p14_3').addClass('animated fadeInUp').fadeIn();
                },1200);
                setTimeout(function () {
                    $('#p14_4').addClass('animated fadeInUp').fadeIn();
                },1400);
                setTimeout(function () {
                    $('#p14_5').addClass('animated fadeInUp').fadeIn();
                },1600);
                

		    } else if (index == 17){
                $('#p15_1').addClass('animated vanishIn').fadeIn();
                setTimeout(function () {
                    $('#p15_2').addClass('animated fadeInUp').fadeIn();
                },1000);
                setTimeout(function () {
                    $('#p15_3').addClass('animated fadeInUp').fadeIn();
                },1200);
                setTimeout(function () {
                    $('#p15_4').addClass('animated fadeInUp').fadeIn();
                },1400);
                setTimeout(function () {
                    $('#p15_5').addClass('animated fadeInUp').fadeIn();
                },1600);
		    } 
        }
    });

    //music
    // $("#aud2").get(0).play();
    // $("#viose").click(function() {
    //     if ($("#aud2").get(0).paused == false) {
    //         $(this).addClass("no").find("img").attr("src", "pause.png");
    //         $("#aud2").get(0).pause();
    //     } else {
    //         $(this).removeClass("no").find("img").attr("src", "music.png");
    //         $("#aud2").get(0).play();
    //     }
    // });

    // Start
    $(document).on('click', '#p0_2', function(){
        $.fn.fullpage.moveTo('page1');
        // console.log('hi!');
    });

    $(document).on('click', '.to_page2', function(){
        $.fn.fullpage.moveTo('page2');
    });

    $(document).on('click', '.to_page4', function(){
        $.fn.fullpage.moveTo('page4');
    });

    $(document).on('click', '.to_page6', function(){
        $.fn.fullpage.moveTo('page6');
    });

    $(document).on('click', '.to_page8', function(){
        $.fn.fullpage.moveTo('page8');
    });

    $(document).on('click', '.to_page10', function(){
        $.fn.fullpage.moveTo('page10');
    });   

    $(document).on('click', '.to_page12', function(){
        $.fn.fullpage.moveTo('page12');
    });  

});
