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
                $('#p4_1').addClass('animated fadeIn').fadeIn();
            } else if (index == 6){
                $('#p5_1').addClass('animated fadeIn').fadeIn();
            } else if (index == 7){
                $('#p6_1').addClass('animated vanishIn').fadeIn();
            } else if (index == 8){
                $('#p7_1').addClass('animated vanishIn').fadeIn();			
            } else if (index == 9){
                $('#p8_1').addClass('animated vanishIn').fadeIn();
			} else if (index == 10){
                $('#p9_1').addClass('animated vanishIn').fadeIn();
            } else if (index == 11){
                $('#p10_1').addClass('animated vanishIn').fadeIn();									
			} else if (index == 12){
                $('#p11_1').addClass('animated vanishIn').fadeIn();
            } else if (index == 13){
                $('#p12_1').addClass('animated fadeInUp').fadeIn();
                setTimeout(function () {
                    $('#p12_2').addClass('animated fadeInUp').fadeIn();
                },1000);											
		    } else if (index == 14){
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
