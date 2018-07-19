/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(1);

	window.handler = {
	    array1: [
	    '2018年7月4日，“保护三江源 共建国家公园”广汽传祺——三江源国家公园管理局交车仪式在青海西宁举行。',
	    '2018年7月4日，“保护三江源 共建国家公园”广汽传祺——三江源国家公园管理局交车仪式在青海西宁举行。',
	    '“中华水塔”是国家的生命之源，所以从2016年起，广汽传祺作为首家社会化企业，携手三江源国家公园管理局、世界自然基金会开启了“诞生在三江源-国家公园创行”项目，共建我国首个国家公园，开创了社会参与中国国家公园建设的先河。',
	    '广汽乘用车总经理郁俊向青海省发改委副主任李晓南交付传祺GS8钥匙。',
	    '这一次，广汽传祺向三江源国家公园管理局捐赠了二十辆传祺GS8，为三江源国家公园巡查巡护工作保驾护航。',
	    '这一次，广汽传祺向三江源国家公园管理局捐赠了二十辆传祺GS8，为三江源国家公园巡查巡护工作保驾护航。',
	    '这一次，广汽传祺向三江源国家公园管理局捐赠了二十辆传祺GS8，为三江源国家公园巡查巡护工作保驾护航。'
	    ],
	 	
	    array2: [
	    '7月6日，广汽传祺“护源有我”湿地使者一行，驾驶传祺GS8巡查巡护车，首度进入长江源园区的腹地可可西里，开展生态保护体验活动，溯源中华文明。',
	    '传祺GS8组成的湿地使者车队。',
	    '向南穿过100多公里宽的山脉，便来到了昆仑山口。',
	    '昆仑山是中华民族的象征，也是中华民族神话传说的摇篮，古人尊为“万山之宗”、“龙脉之祖”。',
	    '昆仑山口位于昆仑山中段，是青藏公路上的一大关隘，海拔达到了4768米。',
	    '高海拔对于车辆的性能是极大的考验，传祺GS8凭借全地形控制，从容应对高原地区巨大的温差和多变地形。',
	    '高海拔对于车辆的性能是极大的考验，传祺GS8凭借全地形控制，从容应对高原地区巨大的温差和多变地形。',
	    '翻越昆仑山口，感受高原情怀'
	    ],

	    array3: [
	    '在索南达杰保护站，湿地使者们举行了“溯源文明，共护长江”取水仪式，将取自楚玛尔河的长江源之水，装入特制的容器中。',
	    '广汽传祺湿地使者将把其带回广汽传祺广州工厂，呼吁更多的人溯源文明，共护长江。',
	    '未来，广汽传祺还将积极，作为生态文明保护的践行者、推动者，未来，广汽传祺将继续发挥标杆企业的力量。',
	   	'以积极的行动和作为，探索生态文明建设新模式，共同谱写美丽中国新篇章！'
	   	],
	    
	    init: function init() {
	        
	    	// Define HTML file
	        var html1 = '';
	        var html2 = '';
	        var html3 = '';

	        for (var i = 1; i < handler.array1.length + 1; i++) {
	            var index1 = i + 10;
	            html1 += '<div class="swiper-slide slide-' + index1 + '"></div>';
	        }

	        for (var i = 1; i < handler.array2.length + 1; i++) {
	            var index2 = i + 20;
	            html2 += '<div class="swiper-slide slide-' + index2 + '"></div>';
	        }

	        for (var i = 1; i < handler.array3.length + 1; i++) {
	            var index3 = i + 30;
	            html3 += '<div class="swiper-slide slide-' + index3 + '"></div>';
	        }

	        $('.swiper-photos1').html(html1);
	        $('.swiper-photos2').html(html2);
	        $('.swiper-photos3').html(html3);

	        // Initialize Swipers
	        setTimeout(function () {
	        	var mySwiper1 = new Swiper('.swiper1', {
	                //autoplay: 5000,//可选选项，自动滑动
	                direction: 'vertical',
	                speed: 700,
	                // freeMode: true,
	                // freeModeSticky: true
	            });

	            var mySwiper2 = new Swiper('.swiper2', {
	                pagination: '.swiper-pagination',
	                paginationType: 'fraction',
	                speed: 700,
	                effect : 'fade',
					fade: {
  						crossFade: true,
					},
	                onTransitionStart: function onTransitionStart(swiper) {
	                    handler.handlerTips1(swiper.activeIndex);
	                    console.log(swiper.activeIndex)
	                }
	            });

	            var mySwiper3 = new Swiper('.swiper3', {
	                pagination: '.swiper-pagination',
	                paginationType: 'fraction',
	                speed: 700,
	                effect : 'fade',
					fade: {
  						crossFade: true,
					},
	                onTransitionStart: function onTransitionStart(swiper) {
	                    handler.handlerTips2(swiper.activeIndex);
	                }
	            });

	            var mySwiper4 = new Swiper('.swiper4', {
	                pagination: '.swiper-pagination',
	                paginationType: 'fraction',
	                speed: 700,
	                effect : 'fade',
					fade: {
  						crossFade: true,
					},
	                onTransitionStart: function onTransitionStart(swiper) {
	                    handler.handlerTips3(swiper.activeIndex);
	                }
	            });

	        }, 200);

	        $('.swiperClick').click(function () {
	            window.location.href = "http://m.mp.oeeee.com/a/BAAFRD00002017071143370.html";
	        });

	        $('.swiper-tips1').html('<div class="tips-left">1/' + handler.array1.length + '</div>\n            <div class="tips-right">' + handler.array1[0] + '</div>');

	        $('.swiper-tips2').html('<div class="tips-left">1/' + handler.array2.length + '</div>\n            <div class="tips-right">' + handler.array2[0] + '</div>');

	        $('.swiper-tips3').html('<div class="tips-left">1/' + handler.array3.length + '</div>\n            <div class="tips-right">' + handler.array3[0] + '</div>');

	    },

	    handlerTips1: function handlerTips1(index) {
	        $('.swiper-tips1').html('<div class="tips-left">' + (index + 1) + '/' + handler.array1.length + '</div>\n            <div class="tips-right">' + handler.array1[index] + '</div>');
	        // console.log('hi');
	        if (index !== 0) {
	            $(".hand-tips").hide();
	        } else {
	            $(".hand-tips").show();
	        }
	    },

	    handlerTips2: function handlerTips2(index) {
	        $('.swiper-tips2').html('<div class="tips-left">' + (index + 1) + '/' + handler.array2.length + '</div>\n            <div class="tips-right">' + handler.array2[index] + '</div>');

	        if (index !== 0) {
	            $(".hand-tips").hide();
	        } else {
	            $(".hand-tips").show();
	        }
	    },

	    handlerTips3: function handlerTips3(index) {
	        $('.swiper-tips3').html('<div class="tips-left">' + (index + 1) + '/' + handler.array3.length + '</div>\n            <div class="tips-right">' + handler.array3[index] + '</div>');

	        if (index !== 0) {
	            $(".hand-tips").hide();
	        } else {
	            $(".hand-tips").show();
	        }
	    },

	};

	handler.init();

/***/ },
/* 1 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }
/******/ ]);
