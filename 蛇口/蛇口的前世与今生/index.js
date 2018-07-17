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
	    '蛇口，位于珠江出海口东侧的南头半岛，与香港元朗、流浮山隔海相望。直到20世纪70年代，蛇口还是一个荒僻的南海渔村。图为1979年，深圳蛇口六湾全景。', 
	    '1970年代末的蛇口六湾。',
	    '开发前的蛇口码头。', 
	    '蛇口小孩在家门口玩耍。', 
	    '1979年蛇口一隅。'
	    ],
	 	
	    array2: [
	    '蛇口工业区是中国经济特区建设的最早尝试。蛇口工业区建设首先着手于工业区的基础建设，提供良好的投资环境，借鉴国外的“自由贸易区”和“出口加工区”经验，引进外国的资金、技术、设备，内外结合，发挥优势。图为1979年7月，蛇口响起填海建港开山炮，也被称为改革开放的第一炮。', 
	    '随后，蛇口开始了火热朝天干事业的新阶段。图为1979年的蛇口工业区大门口。',
	    '1979年，蛇口开发建设初期平整土地（今蛇口客运港至招港码头一带）。',
	    '1980年，蛇口至南头的公路到处是稻田和荒芜的山头。',
	    '竖立在蛇口街道旁边时间标语牌，“时间就是金钱，效率就是生命”的口号被誉为是打破思想禁锢的第一声春雷。',
	    '1983年11月停泊在蛇口海滨的明华轮局部开业。这是我国第一艘由油轮改装的海上酒店和娱乐中心。',
	    '1980年，大南山下工人人正在测量规划新工地。',
	    '1980年，建设中的蛇口码头也初步成形。',
	    '开发建设中的蛇口码头。'
	    ],

	    array3: [
	    '深圳前海蛇口自贸片区于2015年4月27日挂牌成立。图为前海蛇口自贸片区拱门。',
	    '碧海蓝天的蛇口码头邮轮母港，2017年，招商蛇口太子湾邮轮母港开港首年运营，完成了109艘次指标，将近19万人次邮轮旅客的运载，目的地覆盖9个国家和地区。',
	    '如今的大南山脚下，街道干净，道路规划有序，招商蛇口大楼与香港隔海相望。截至2018年3月，前海蛇口自贸片区累计开业企业7.22万家；累计注册港企8031家，注册资本8937.26亿元。（图片来源于蛇口改革开放博物馆）',
	   	'蛇口工业区纳入中国（广东）自由贸易试验区签约仪式现场。', 
	   	'设计互联（蛇口艺术文化新地标）、游艇会及希尔顿酒店。',
	   	'蛇口海上世界，招商蛇口大楼与香港隔海相望。'
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
	                // freeMode: true,
	                // freeModeSticky: true
	            });

	            var mySwiper2 = new Swiper('.swiper2', {
	                pagination: '.swiper-pagination',
	                paginationType: 'fraction',
	                onTransitionStart: function onTransitionStart(swiper) {
	                    handler.handlerTips1(swiper.activeIndex);
	                }
	            });

	            var mySwiper3 = new Swiper('.swiper3', {
	                pagination: '.swiper-pagination',
	                paginationType: 'fraction',
	                onTransitionStart: function onTransitionStart(swiper) {
	                    handler.handlerTips2(swiper.activeIndex);
	                }
	            });

	            var mySwiper4 = new Swiper('.swiper4', {
	                pagination: '.swiper-pagination',
	                paginationType: 'fraction',
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
