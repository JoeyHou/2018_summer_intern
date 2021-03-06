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
        scrollingSpeed: 700,
        afterRender: function(){
            if($(window).width() > 600){
                $('#prev').css('display','none');
            }
            setTimeout(function () {
                $('#fm_1').addClass('animated fadeIn').fadeIn();
            },100);
            setTimeout(function () {
                $('#fm_2').addClass('animated fadeIn').fadeIn();
            },700);
            setTimeout(function () {
                $('#fm_3').addClass('animated fadeInDown').fadeIn();
            },1300);
            setTimeout(function () {
                $('#fm_4').addClass('animated fadeIn').fadeIn();
            },2400);
			setTimeout(function () {
                $('#fm_5').addClass('animated fadeIn').fadeIn();
            },2900);
			setTimeout(function () {
                $('#fm_6').addClass('animated fadeIn').fadeIn();
            },2400);
        },
        afterLoad: function(anchorLink, index){
            if(index == 1){
                if($(window).width() > 600){
                    $('#prev').css('display','none');
                }
            } else if(index == 2){
                if($(window).width() > 600){
                    $('#prev').css('display','block');
                }
                $('#p1_1').addClass('animated fadeIn').fadeIn(); 
                setTimeout(function () {
                    $('#p1_2').addClass('animated fadeIn').fadeIn();
                },900);
                setTimeout(function () {
                    $('#p1_3').addClass('animated fadeInDown').fadeIn();
                },1300);
                setTimeout(function () {
                    $('#p1_4').addClass('animated fadeIn').fadeIn();
                },1900);
                setTimeout(function () {
                    $('#p1_5').addClass('animated zoomIn').fadeIn();
                },2700);

            } else if (index == 3){
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

            } else if (index == 4){
                $('#p3_1').addClass('animated fadeIn').fadeIn();
                setTimeout(function () {
                    $('#p3_2').addClass('animated vanishIn').fadeIn();
                },1000);
				setTimeout(function () {
                    $('#p3_3').addClass('animated vanishIn').fadeIn();
                },1800);
				setTimeout(function () {
                    $('#p3_4').addClass('animated fadeInUp').fadeIn();
                },2200);
				setTimeout(function () {
                    $('#p3_5').addClass('animated zoomIn').fadeIn();
                },3700);
            } else if (index == 5){
                $('#p0_1').addClass('animated zoomIn').fadeIn();
            } else if (index == 6){
                $('#p0_2').addClass('animated zoomIn').fadeIn();
            } else if (index == 7){
                $('#p0_3').addClass('animated zoomIn').fadeIn();
            }

            else if (index == 8){
                $('#p4_1').addClass('animated vanishIn').fadeIn();
                setTimeout(function () {
                    $('#p4_2').addClass('animated vanishIn').fadeIn();
                },300);
				setTimeout(function () {
                    $('#p4_3').addClass('animated fadeIn').fadeIn();
                },1800);
				setTimeout(function () {
                    $('#p4_4').addClass('animated fadeIn').fadeIn();
                },2500);
				setTimeout(function () {
                    $('#p4_5').addClass('animated fadeIn').fadeIn();
                },3700);
            } else if (index == 9){
                $('#p5_1').addClass('animated vanishIn').fadeIn();
                setTimeout(function () {
                    $('#p5_2').addClass('animated vanishIn').fadeIn();
                },1000);
				setTimeout(function () {
                    $('#p5_3').addClass('animated fadeInDown').fadeIn();
                },1300);
				setTimeout(function () {
                    $('#p5_4').addClass('animated vanishIn').fadeIn();
                },1500);				                
                setTimeout(function () {
                    $('#p5_5').addClass('animated fadeIn').fadeIn();
                },2700);
            } else if (index == 10){
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
					
            } else if (index == 11){
                $('#p7_1').addClass('animated vanishIn').fadeIn();
                setTimeout(function () {
                    $('#p7_2').addClass('animated fadeInUp').fadeIn();
                },1000);
				setTimeout(function () {
                    $('#p7_3').addClass('animated fadeInUp').fadeIn();
                },2300);
				setTimeout(function () {
                    $('#p7_4').addClass('animated fadeInUp').fadeIn();
                },2500);
				setTimeout(function () {
                    $('#p7_5').addClass('animated fadeIn').fadeIn();
                },4700);
			
            } else if (index == 12){
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
			
			} else if (index == 13){
                $('#p9_1').addClass('animated vanishIn').fadeIn();
                setTimeout(function () {
                    $('#p9_2').addClass('animated fadeInUp').fadeIn();
                },1000);
				setTimeout(function () {
                    $('#p9_3').addClass('animated fadeInUp').fadeIn();
                },1700);
                setTimeout(function () {
                    $('#p9_4').addClass('animated fadeInUp').fadeIn();
                },2500);
                setTimeout(function () {
                    $('#p9_5').addClass('animated fadeIn').fadeIn();
                },3700);
			 
            } else if (index == 14){
                $('#p10_1').addClass('animated fadeInUp').fadeIn();
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
																
			} else if (index == 15){
                $('#p11_1').addClass('animated fadeInUp').fadeIn();
                setTimeout(function () {
                    $('#p11_2').addClass('animated fadeInUp').fadeIn();
                },1000);
				setTimeout(function () {
                    $('#p11_3').addClass('animated fadeInUp').fadeIn();
                },1800);
				setTimeout(function () {
                    $('#p11_4').addClass('animated fadeIn').fadeIn();
                },2900);
				setTimeout(function () {
                    $('#p11_5').addClass('animated fadeIn').fadeIn();
                },3900);
         
            } else if (index == 16){
                $('#p12_1').addClass('animated fadeInUp').fadeIn();
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
													
		    } else if (index == 17){
                $('#p13_1').addClass('animated fadeInUp').fadeIn();
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


		    } else if (index == 18){
                $('#p14_1').addClass('animated fadeInUp').fadeIn();
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

		    } else if (index == 19){
                $('#p15_1').addClass('animated fadeInUp').fadeIn();
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

		    } else if (index == 20){
                $('#p16_1').addClass('animated fadeInDown').fadeIn();
                setTimeout(function () {
                    $('#p16_2').addClass('animated fadeInUp').fadeIn();
                },1000);
				setTimeout(function () {
                    $('#p16_3').addClass('animated fadeInUp').fadeIn();
                },1200);
				setTimeout(function () {
                    $('#p16_4').addClass('animated fadeInUp').fadeIn();
                },1400);
				setTimeout(function () {
                    $('#p16_5').addClass('animated fadeInUp').fadeIn();
                },1600);

		    } else if (index == 21){
                $('#p17_1').addClass('animated fadeInDown').fadeIn();
                setTimeout(function () {
                    $('#p17_2').addClass('animated fadeInUp').fadeIn();
                },1000);
				setTimeout(function () {
                    $('#p17_3').addClass('animated fadeInUp').fadeIn();
                },1200);
				setTimeout(function () {
                    $('#p17_4').addClass('animated fadeInUp').fadeIn();
                },1400);
				setTimeout(function () {
                    $('#p17_5').addClass('animated fadeInUp').fadeIn();
                },1600);

		    } else if (index == 22){
                $('#p18_1').addClass('animated fadeInDown').fadeIn();
                setTimeout(function () {
                    $('#p18_2').addClass('animated fadeInUp').fadeIn();
                },1000);
				setTimeout(function () {
                    $('#p18_3').addClass('animated vanishIn').fadeIn();
                },1800);
            } else if (index == 23){
                $('#p19_1').addClass('animated fadeInDown').fadeIn();
                setTimeout(function () {
                    $('#p19_2').addClass('animated fadeInUp').fadeIn();
                },1000);
                setTimeout(function () {
                    $('#p19_3').addClass('animated vanishIn').fadeIn();
                },1800);
            } else if (index == 24){
                $('#p20_1').addClass('animated fadeInDown').fadeIn();
                setTimeout(function () {
                    $('#p20_2').addClass('animated fadeInUp').fadeIn();
                },1000);
                setTimeout(function () {
                    $('#p20_3').addClass('animated vanishIn').fadeIn();
                },1800);
            } else if (index == 25){
                $('#p21_1').addClass('animated fadeInDown').fadeIn();
                setTimeout(function () {
                    $('#p18_2').addClass('animated fadeInUp').fadeIn();
                },1000);
                setTimeout(function () {
                    $('#p18_3').addClass('animated vanishIn').fadeIn();
                },1800);
            } else if (index == 26){
                $('#p22_1').addClass('animated fadeInDown').fadeIn();
                setTimeout(function () {
                    $('#p22_2').addClass('animated fadeInUp').fadeIn();
                },300);
                setTimeout(function () {
                    $('#p18_3').addClass('animated vanishIn').fadeIn();
                },1800);
            } else if (index == 27){
                $('#p23_1').addClass('animated vanishIn').fadeIn();
                setTimeout(function () {
                    $('#p18_2').addClass('animated fadeInUp').fadeIn();
                },1000);
                setTimeout(function () {
                    $('#p18_3').addClass('animated vanishIn').fadeIn();
                },1800);
            }
        }
    });

    if($(window).width() > 600){
        $.fn.fullpage.setAllowScrolling(false);
        $.fn.fullpage.setKeyboardScrolling(false);
    }

    $('#next').click(function(){
        $.fn.fullpage.moveSectionDown();
    });
    $('#prev').click(function(){
        $.fn.fullpage.moveSectionUp();
    });

    $("#aud2").get(0).play();
    console.log('1');
    $("#viose").click(function() {
        if ($("#aud2").get(0).paused == false) {
            $(this).addClass("no").find("img").attr("src", "pause.png");
            $("#aud2").get(0).pause();
            console.log('hi!');
        } else {
            $(this).removeClass("no").find("img").attr("src", "music.png");
            $("#aud2").get(0).play();
        }
    });

});
