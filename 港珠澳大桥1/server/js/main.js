$(document).ready(function() {
    var dt_i = 0,dt_djs = 15,timer = null,timers = null,score = 0;

    $('#dt_qd_zz').height($('#dt_qd').height());

    $.get('http://newdata.news.cn/dzxsd/jishu/province?'+Date.now(),function (d) {
        data = d.data;
    });

    //数组对象随机排序函数
    function shuffle(arr) {
        var i,j,temp;
        for (i = arr.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
        return arr;
    }

    var dt_list = [
        {
            dt_t:'港珠澳大桥是以公路桥的形式连接香港、珠海及澳门的大型跨海通道，请问它的起点位于？',
            dt_xxA:'A.澳门大潭山',
            dt_xxB:'B.珠海凤凰山',
            dt_xxC:'C.香港狮子山',
            dt_xxD:'D.香港大屿山',
            dt_right:'D'
        },
        {
            dt_t:'港珠澳大桥将采取怎样的通关模式？',
            dt_xxA:'A.“三地两检”',
            dt_xxB:'B.“三地三检”',
            dt_xxC:'C.“三地一检”',
            dt_xxD:'D.“两地三检”',
            dt_right:'B'
        },
        {
            dt_t:'港珠澳大桥原称是？',
            dt_xxA:'A.太平洋大桥',
            dt_xxB:'B.大西洋大桥',
            dt_xxC:'C.伶仃洋大桥',
            dt_xxD:'D.印度洋大桥',
            dt_right:'C'
        },
        {
            dt_t:'第一批已购置的港珠澳大桥穿梭巴士为20辆双层巴士和100辆单层巴士，珠海口岸至香港口岸单程巴士票价初步核定为？（人民币）',
            dt_xxA:'A.44元',
            dt_xxB:'B.53元',
            dt_xxC:'C.64元',
            dt_xxD:'D.72元',
            dt_right:'C'
        },
        {
            dt_t:'人工岛岛区范围内的绿化工程也做得非常好，在海景较美的地方设置海上观景平台和____。',
            dt_xxA:'A.白鳍豚观赏区',
            dt_xxB:'B.中华白海豚观赏区',
            dt_xxC:'C.淡水海豚观赏区',
            dt_xxD:'D.白海豚观赏区',
            dt_right:'B'
        },
        {
            dt_t:'港珠澳大桥的沉管在海平面一下13至44米不等的水深处无人对接，被称为世界最大难度的____。',
            dt_xxA:'A.深水之吻',
            dt_xxB:'B.深海之吻',
            dt_xxC:'C.海底之吻',
            dt_xxD:'D.海洋之吻',
            dt_right:'B'
        },
        {
            dt_t:'港珠澳大桥是粤港澳大湾区的脊梁，请问以下哪个城市不包括在粤港澳大湾区城市群内？',
            dt_xxA:'A.香港特别行政区',
            dt_xxB:'B.佛山',
            dt_xxC:'C.江门',
            dt_xxD:'D.湛江',
            dt_right:'C'
        },
        {
            dt_t:'港珠澳大桥的这是世界上最长的钢结构桥梁，仅主梁钢板用量就达到42万吨，相当于建60座____的重量。',
            dt_xxA:'A.埃菲尔铁塔',
            dt_xxB:'B.纽约帝国大厦',
            dt_xxC:'C.悉尼歌剧院',
            dt_xxD:'D.三峡工程',
            dt_right:'A'
        },
        {
            dt_t:'港珠澳大桥沉管隧道是全球唯一的？',
            dt_xxA:'A.公路沉管隧道',
            dt_xxB:'B.深埋沉管隧道',
            dt_xxC:'C.外海沉管隧道',
            dt_xxD:'D.观光沉管隧道',
            dt_right:'B'
        },
        {
            dt_t:'以下哪个人工岛是大桥主体工程与珠海及澳门两地的衔接中心？',
            dt_xxA:'A.香港口岸人工岛',
            dt_xxB:'B.珠澳口岸人工岛',
            dt_xxC:'C.海底隧道东出入口人工岛',
            dt_xxD:'D.海底隧道西出入口人工岛',
            dt_right:'D'
        },
    ];

    // 将题目顺序打乱
    shuffle(dt_list);

    $('#dt_t').find('p').text(dt_list[dt_i].dt_t);
    $('#dt_xx .opa').find('p').text(dt_list[dt_i].dt_xxA);
    $('#dt_xx .opb').find('p').text(dt_list[dt_i].dt_xxB);
    $('#dt_xx .opc').find('p').text(dt_list[dt_i].dt_xxC);
    $('#dt_xx .opd').find('p').text(dt_list[dt_i].dt_xxD);
    
    if(dt_list[dt_i].dt_right == 'A'){
        $('#dt_xx .opa').addClass('right');
    }else if(dt_list[dt_i].dt_right == 'B'){
        $('#dt_xx .opb').addClass('right');
    }else if(dt_list[dt_i].dt_right == 'C'){
        $('#dt_xx .opc').addClass('right');
    }else if(dt_list[dt_i].dt_right == 'D'){
        $('#dt_xx .opd').addClass('right');
    }

    $('#dt_xx .op').on('click',function () {
        $('#dt_xx .op').find('.dt_xz_yd').removeClass('check').hide();
        $(this).find('.dt_xz_yd').addClass('check').show();
        dt_gd_click();
    });

    function dt_gd_click() {
        $('#dt_qd_zz').show();
        dt_i+=1;

        //选中正确答案
        if($('#dt_xx').find('.right').children().eq(0).hasClass('check')){
            score++;
            $('#dt_xx').find('.right').append('<img src="images/true.png" class="trueAndFalse">');
        }else{
            $('#dt_xx').find('.right').append('<img src="images/true.png" class="trueAndFalse">');
            $('#dt_xx .op').find('.check').next().append('<img src="images/false.png" class="trueAndFalse">');
        }

        setTimeout(function () {
            if(dt_i >= 10){
                if(score>5){
                    $('#dtjg_img').find('img').attr('src','images/dtjg_img2.png');
                }else{
                    $('#dtjg_img').find('img').attr('src','images/dtjg_img1.png');
                }
                $('#dtjg_p').text(score);
                $.fn.fullpage.moveSectionDown();
            }else{
                $('#dt_xx .op').removeClass('right').find('.trueAndFalse').remove();
                $('#dt_xx .op .dt_xz_yd').removeClass('check');
                $('.dt_xz_yd').hide();
                $('#dt_djs_l').stop();
                $('#dt_djs_l').css('width','94%');
                dt_djs = 15;
                clearTimeout(timers);
                clearTimeout(timer);
                time();

                $('#dqts').text(dt_i+1);
                $('#dt_t').find('p').text(dt_list[dt_i].dt_t);
                $('#dt_xx .opa').find('p').text(dt_list[dt_i].dt_xxA);
                $('#dt_xx .opb').find('p').text(dt_list[dt_i].dt_xxB);
                $('#dt_xx .opc').find('p').text(dt_list[dt_i].dt_xxC);
                $('#dt_xx .opd').find('p').text(dt_list[dt_i].dt_xxD);
                if(dt_list[dt_i].dt_right == 'A'){
                    $('#dt_xx .opa').addClass('right');
                }else if(dt_list[dt_i].dt_right == 'B'){
                    $('#dt_xx .opb').addClass('right');
                }else if(dt_list[dt_i].dt_right == 'C'){
                    $('#dt_xx .opc').addClass('right');
                }else if(dt_list[dt_i].dt_right == 'D'){
                    $('#dt_xx .opd').addClass('right');
                }
                $('#dt_qd_zz').hide();
            }

        },1500);
    }

    // $('#dt_qd').on('click',function () {
    //     dt_gd_click();
    // });

    var loader = new window.PxLoader(),
        baseUrl = './';
    var fileList = [
        'images/dt_bg.png',
        'images/fenxiang.jpg',
        'images/dt_bt.png',
        'images/dt_djs_k.png',
        'images/dt_hj.png',
        'images/dt_qd.png',
        'images/dt_xz_yd.png',
        'images/false.png',
        'images/true.png',
        'images/fd_call.png',
        'images/fd_call_p.png',
        'images/fd_cp.png',
        'images/fd_cp.png',
        'images/fm_bg.jpg',
        'images/loading.gif',
        'images/fm_bt.png',
        'images/fm_fj.png',
        'images/fm_logo.png',
        'images/fm_start.png',
        'images/fx_btn.png',
        'images/fx_pyq.png',
        'images/dianzan.png',
        'images/dtjg_bt.png',
        'images/dtjg_img1.png',
        'images/dtjg_img2.png',
        'images/dtjg_next.png',
        'images/fd_bg.jpg'
    ];

    for(var i = 0; i < fileList.length; i++) {
        var pxImage = new PxLoaderImage(baseUrl + fileList[i]);
        pxImage.imageNumber = i + 1;
        loader.add(pxImage);
    }

    loader.addProgressListener(function(e) {
        var num = Math.floor((e.completedCount / e.totalCount) * 100);
        $('#loading_p').find('p').text(num+'%');
    });
    loader.addCompletionListener(function() {
        setTimeout(function(){
            $('#loading').fadeOut(500);
        },500);
        setTimeout(function(){
            $('#fm_logo').addClass('animated fadeInDown').fadeIn();
        },1000);
        setTimeout(function(){
            $('#fm_bt').fadeIn();
        },1300);
        setTimeout(function(){
            $('#fm_fj').addClass('animated fadeInRight').fadeIn();
        },1600);
        setTimeout(function(){
            $('#fm_start').addClass('animated fadeInUp').fadeIn().on('click',function () {
                $.fn.fullpage.moveSectionDown();
            });
        },1900);
    });
    loader.start();

    function time() {
        $('#dt_djs_l').animate({width:'0%'},16000);
        timers = setTimeout(function(){
            dt_gd_click();
        },15000);//15秒
        after();
    }
    //自动刷新页面上的时间
    function after(){
        $("#dt_sj").find('span').empty().append(dt_djs+'s');
        dt_djs=dt_djs-1;
        timer = setTimeout(function(){
            if(dt_djs == -1){
                clearTimeout(timer);
            }else{
                after();
            }
        },1500);
    }

    $('#fullpage').fullpage({
        sectionsColor: [],
        css3:true,
        scrollingSpeed: 1000,
        afterRender: function(){
            if($(window).width() > 600){
                $('#prev').css('display','none');
            }
        },
        afterLoad: function(anchorLink, index){
            if(index == 1){

            }else if(index == 2){
                time();

                $.ajax({type:'post',data:{},url:'http://newdata.news.cn/dzxsd/renwu/'+data[0].name+'?'+Date.now()}).success(function (i) {
                    console.log(i);
                }).error(function (e) {
                    console.log(e);
                });
                // console.log(data);
                $('#fd_num').text(data[0].num);

            }else if (index == 3){

            }else if (index == 4){
                $('#dianzan').addClass('animated infinite hinges flash').one('click',function () {
                    $(this).removeClass('animated infinite hinges flash');
                    $('#fd_num').text(parseInt($('#fd_num').text())+1);
                });
            }
        }
    });

    $.fn.fullpage.setAllowScrolling(false);
    $.fn.fullpage.setKeyboardScrolling(false);

    $('#fx_btn').on('click',function () {
        $('#fx_box').fadeIn().on('click',function () {
            $(this).fadeOut();
        });
    });

    $('#dtjg_next').on('click',function () {
        $.fn.fullpage.moveSectionDown();
    });
});
