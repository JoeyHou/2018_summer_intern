/**
*
@Author: hover-hou
@Date: Wed Jun 13 2018 12:12:55 GMT+0800 (DST)
*
*/
'use strict';

(function () {
    //cover.js
    /*
        动画顺序
        底色3块 y轴交错进入
        中间 - 球员入场 透明度 进入
        文字 - 擦除式 入场
        烟花 - scale进入*4
        足球入场
          要求：节奏紧凑，整个时长大约 3-5s
          pic
        	.cover-bg
        	.cover-wrap-bg
        	.cover-txt-bg
        	.cover-ball-bg
        	.cover-fire-items-bg
          ani
        	.cover-bg-end
        	.cover-opacity-1
        	.cover-txt-w / .cover-txt-scale
        	.cover-ball-fallIn
        	.cover-fire-items-open
        	.cover-fire-items-bg
        	.cover-bg-out
    */

    var browserType = function browserType() {
            var ua = window.navigator.userAgent.toLowerCase(),
                isM = ua.indexOf("mobile") !== -1 ? true : false,
                isIe = ua.indexOf("ie") !== -1 ? true : false,
                isIe8 = ua.indexOf("msie 8") !== -1 ? true : false,
                isIe9 = ua.indexOf("msie 9") !== -1 ? true : false,
                isLteIe9 = isIe8 || isIe9;
                // alert(isLteIe9)
            return {
                ua: ua,
                ism: isM,
                ie: isIe,
                ie8: isIe8,
                isLteIe9: isLteIe9
            };
        },
        imgLoad = function imgLoad(_arr, _loadingBarName, cb, cbContext, cbData) {
            for (var _len = arguments.length, otherArgus = Array(_len > 5 ? _len - 5 : 0), _key = 5; _key < _len; _key++) {
                otherArgus[_key - 5] = arguments[_key];
            }
            // console.log(_loadingBarName);
            // console.log(cb);
            // console.log(cbContext);
            // console.log(cbData);
            var arr = _arr || [],
                len = arr.length,
                i = 0,
                imgs = [],
                tmp = null,
                loadNum = 0,
                allLoaded = false,
                loadingStatus = !!_loadingBarName ? document.querySelector(_loadingBarName) : null,
                loadStatus = !!loadingStatus || null,
                _cbCont = cbContext || undefined,
                _cbData = cbData || null,
                _otherArgu = otherArgus;

            var _loadedImg = function loadedImg() {
                ++loadNum;
                if (!!loadStatus) {
                    loadingStatus.style.width = (loadNum / len).toFixed(2) * 100 + "%";
                }
                if (loadNum >= len) {
                    allLoaded = true;
                    // console.log("图片加载完成,在此处加载其余模块");
                    loadNum = null;
                    _loadedImg = null;
                    cb && cb.call(_cbCont, _cbData);
                    // console.log(_loadingBarName);
                    console.log(cb);
                    // console.log(_cbCont);
                    // console.log(_cbData);
                }
            };

            for (; i < len; i++) {
                tmp = new Image();
                tmp.src = arr[i];
                tmp.onload = _loadedImg;
                console.log(tmp);
                // imgs.push(tmp);
            }
        },

        // mozWebkit(coverWrap, "transitionEnd", coverIn);
        mozWebkit = function mozWebkit(obj, evName, cb) {
            var eName = evName.substr(0, 1).toUpperCase() + evName.substr(1);
            obj.addEventListener("moz" + eName, cb);
            obj.addEventListener("webkit" + eName, cb);
            // console.log(cb);
            // obj.addEventListener("webkit"+eName,cb);
            return obj;
        },
        disMozWebkit = function disMozWebkit(obj, evName, cb) {
            var eName = evName.substr(0, 1).toUpperCase() + evName.substr(1);
            obj.removeEventListener("moz" + eName, cb);
            obj.removeEventListener("webkit" + eName, cb);
            obj.removeEventListener(evName, cb);
            // console.log(cb);
        };

    ///------------------------------------------------


    var imgPath = "http://www.xinhuanet.com/topic/2018worldcup/img/",
        imgPreLoad = [imgPath + "cover_bg_left.png", imgPath + "cover_bg_mid.png", imgPath + "cover_bg_red.png", imgPath + "cover_athleter.png", imgPath + "cover_txt.png", imgPath + "cover_fire_l1.png", imgPath + "cover_ball_cricle.png"],
        body = document.querySelector("body"),
        cover = document.querySelector(".cover"),
        coverVideo = cover.querySelector(".cover-video"),
        coverVideoTag = coverVideo.querySelector("video"),
        coverWrap = cover.querySelector(".cover-wrap"),
        coverTxt1 = cover.querySelector(".cover-txt1"),
        coverTxt2 = cover.querySelector(".cover-txt2"),
        coverFlag = cover.querySelector(".cover-flag"),
        coverLogo = cover.querySelector(".cover-logo"),
        coverLogoCont = cover.querySelector(".cover-logo-cont"),
        coverFire = cover.querySelector(".cover-fire"),
        coverFireItems = cover.querySelectorAll(".cover-fire-items"),
        videoSrc = (coverVideoTag && coverVideoTag.getAttribute("data-src")) || "";

    var delayAddClm = function delayAddClm() {
            for (var _len2 = arguments.length, argus = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                argus[_key2] = arguments[_key2];
            }

            setTimeout(function () {
                argus[0].classList.add(argus[1]);
            }, 10);
        },
        ieCoverIn = function ieCoverIn() {
            var cover = $(".cover"),
                ieDur = 1000,
                ieShow = 2000;

            cover.addClass("cover-ie");

            setTimeout(function () {
                cover.slideUp(ieDur, function () {
                    cover.remove();
                });
            }, ieShow);
        },

        // 9
        lhr = function lhr() {
            var znmsb = $(".znmsb"),
                znmsbcon = $(".znmsb-con"),
                znmsbvideo = $(".znmsb .video0225-box"),
                znmsbclose = $(".znmsb .video0225-close"),
                vsrc = $.trim(znmsbcon.attr("data-vsrc"));

            var ifr = '<iframe src="' + vsrc + '" frameborder="0" noscrolling="" class="video0225"></iframe>';

            znmsb.show();
            znmsbvideo.prepend(ifr);
            $("body").css({
                "overflow-x": "hidden",
                "overflow-y": "hidden"
            });
            $(window).one("click", function () {
                var iframe = znmsbvideo.find("iframe");
                iframe.attr("src", "");
                znmsbvideo.html("");
                znmsbvideo.html('<div class="video0225-close"> </div>');
                znmsb.hide();
                znmsbvideo.hide();
                $("body").css({
                    "overflow-x": "auto",
                    "overflow-y": "auto"
                });
            });
            setTimeout(function () {
                $(window).click()
            }, 90 * 1000);
            
        },

        // 8
        coverOff = function coverOff() {
            disMozWebkit(cover, "transitionEnd", coverOff);
            cover.parentNode.removeChild(cover);
            body.classList.remove("overflowhidden");
            $("body").removeClass("overflowhidden");
            lhr();
        },

        // 7
        coverOut = function coverOut() {
            // return;
            // disMozWebkit(coverBall, "AnimationEnd", coverOut);
            // mozWebkit(cover, "transitionEnd", coverOff);
            // cover.classList.add("cover-bg-out");
        },

        // 6
        logoIn = function logoIn() {
            disMozWebkit(coverFire, "transitionEnd");
            mozWebkit(coverLogo, "AnimationEnd", coverOut);
            coverLogo.classList.add("cover-logo-fallIn");
            coverLogoCont.classList.add("cover-logo-bg");

        },

        // 5
        fireIn = function fireIn() {
            console.log('Fire in');
            disMozWebkit(coverTxt1, "transitionEnd");
            coverFire.classList.add("cover-fire-items-bg");
            mozWebkit(coverFire, "transitionEnd", logoIn);
            delayAddClm(coverFire, "cover-fire-items-open");
        },


        // 4.2
        textIn = function textIn() {
            coverTxt1.classList.add("cover-txt1-bg");
            delayAddClm(coverTxt1, "cover-txt1-scale");
            setTimeout(function(){
                coverTxt2.classList.add("cover-txt2-bg");
                delayAddClm(coverTxt2, "cover-txt2-scale");
            }, 1000);
            setTimeout(function(){
                fireIn();
            }, 1500);
        },

        // 4.1
        flagIn = function flagIn() {
            disMozWebkit(coverWrap, "transitionEnd", textIn);
            delayAddClm(coverFlag, "cover-flag-scale");
            setTimeout(textIn, 1000);
        },

        // 3
        coverIn = function coverIn() {
            disMozWebkit(cover, "transitionEnd", coverIn);
            cover.classList.add("cover-bg");
            mozWebkit(cover, "transitionEnd", flagIn);
            delayAddClm(cover, "cover-bg-end");
        },

        // 2
        athleterIn = function athleterIn() {
            coverWrap.classList.add("cover-wrap-bg");
            mozWebkit(coverWrap, "transitionEnd", coverIn);
            delayAddClm(coverWrap, "cover-opacity-1");
        },

        // 1
        aniIn = function aniIn() {

            setTimeout(function () {
                window.scrollTo(0, -1);
                body.classList.add("overflowhidden");
                athleterIn();
            }, 0);
        },


        switchToAni = function switchToAni() {
            mozWebkit(coverVideo, "transitionEnd", aniIn);
            coverVideo.classList.add("cover-opacity-0");
        },
        videoPlay = function videoPlay() {
            // console.log("play!!");
            coverVideoTag.play();
        },
        videoSetSrc = function videoSetSrc() {
            setTimeout(function () {
                // window.scrollTo(0, -1);
                body.classList.add("overflowhidden");
                if (!videoSrc) aniIn();
                coverVideoTag.addEventListener("canplaythrough", videoPlay);
                coverVideoTag.addEventListener("ended", switchToAni);
                coverVideoTag.addEventListener("error", switchToAni);
                coverVideoTag.src = videoSrc;
            }, 0);
        },
        
        init = function init() {
            // coverVideo.style.display="none";
            history.scrollRestoration && (history.scrollRestoration = "manual");
            // window.scrollTo(0, -1);
            setTimeout(function () {
                window.scrollTo(0, -1);
            });
            // alert(browserType().isLteIe9);
            if (browserType().isLteIe9) {
                ieCoverIn();
                return;
            }
            imgLoad(imgPreLoad, "", aniIn);
            //
        };

    init();
})();
//# sourceMappingURL=maps/cover.js.map