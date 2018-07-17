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
	    '湖光山色、沃野千里……广东省梅州市丰顺县汤南镇新楼村正在打造民宿和客潮历史文化交融的艺术家村落，以文旅产业助推群众脱贫。', 
	    '新楼村总人口约10320人，下辖10个自然村。2016年核定相对贫困户156户531人，2016和2017两年累计达到脱贫标准131户415人。', 
	    '自从开展了“三清三拆三整治”，该村以创建社会主义新农村示范村为总基调，从修路、治水和危房改造等多方面着手进行改善，环境有了较大变化，为发展和培育旅游品牌筑牢了基石。', 
	    '无论是修缮整齐的公祠，雕琢精美的檐角，还是白墙黛瓦的房屋，都彰显着客潮文化相互交融和渗透的底蕴和魅力。'
	    ],
	 	
	    array2: [
	    '河源市义都镇桂林村目前共计有贫困户52户，贫困人口147人，村民主要以种植茶叶、水稻等农作物为主。由于具备独特的地理环境和优良的气候条件，村民们广泛种茶，发展茶产业。截至2017年下半年，该村集体经济收入已超过4万元。', 
	    '通过为茶农讲解专业知识、传授先进经验、科学制作技术等，指导农户进行合理修剪、科学施肥和绿色防治，能够提高桂林村茶叶的产量和品质。'
	    ],

	    array3: [
	    '灵潭村被称为“腐竹之乡”，也是珠玑镇重要的黄烟产区。据悉，灵谭村下辖11个自然村，共有贫困户44户119人，贫困户主要收入来源为种植黄烟、养殖家禽、生产腐竹等。',
	    '灵潭村一方面通过带动村民种植黄豆，计划成立一家“灵潭腐竹食品发展有限公司”，传承灵潭腐竹技艺，发挥“灵潭腐竹”品牌效应，促进村民增收。另一方面，灵潭村将新建20间烤烟房，以租赁的形式租给村民，同时开展黄烟种植、烘烤技术培训，既解决了烤烟房短缺问题，也提高村民对这方面的积极性。图为一位村民正在整理黄烟。'
	    ],
	 	
	    array4: [
	    '清远市连南安田村以兰花种植为抓手，助力贫困户脱贫摘帽。',
	    '媒体采访团走访了清远市连南安田村，深入探讨兰花种植扶贫项目，了解安田村帮扶工作新成果。',
	    '据悉，安田村依托11亩兰花基地，种植销售兰花，三年来销售额50余万元，实现利润32万元，全村24户精准扶贫户2017年平均分红达3000元。',
	    '今年计划扩种，贫困户从中得到的收益将更高。' 
	    ],
	    
	    init: function init() {
	        
	    	// Define HTML file
	        var html1 = '';
	        var html2 = '';
	        var html3 = '';
	        var html4 = '';

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

	        for (var i = 1; i < handler.array4.length + 1; i++) {
	            var index4 = i + 40;
	            html4 += '<div class="swiper-slide slide-' + index4 + '"></div>';
	        }

	        $('.swiper-photos1').html(html1);
	        $('.swiper-photos2').html(html2);
	        $('.swiper-photos3').html(html3);
	        $('.swiper-photos4').html(html4);

	        // Initialize Swipers
	        setTimeout(function () {

	            var mySwiper1 = new Swiper('.swiper1', {
	                //autoplay: 5000,//可选选项，自动滑动
	                direction: 'vertical',
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

	            var mySwiper5 = new Swiper('.swiper5', {
	                pagination: '.swiper-pagination',
	                paginationType: 'fraction',
	                onTransitionStart: function onTransitionStart(swiper) {
	                    handler.handlerTips4(swiper.activeIndex);
	                }
	            });

	        }, 200);

	        $('.swiperClick').click(function () {
	            window.location.href = "http://m.mp.oeeee.com/a/BAAFRD00002017071143370.html";
	        });

	        $('.swiper-tips1').html('<div class="tips-left">1/' + handler.array1.length + '</div>\n            <div class="tips-right">' + handler.array1[0] + '</div>');

	        $('.swiper-tips2').html('<div class="tips-left">1/' + handler.array2.length + '</div>\n            <div class="tips-right">' + handler.array2[0] + '</div>');

	        $('.swiper-tips3').html('<div class="tips-left">1/' + handler.array3.length + '</div>\n            <div class="tips-right">' + handler.array3[0] + '</div>');

	        $('.swiper-tips4').html('<div class="tips-left">1/' + handler.array4.length + '</div>\n            <div class="tips-right">' + handler.array4[0] + '</div>');

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

	    handlerTips4: function handlerTips4(index) {
	        $('.swiper-tips4').html('<div class="tips-left">' + (index + 1) + '/' + handler.array4.length + '</div>\n            <div class="tips-right">' + handler.array4[index] + '</div>');

	        if (index !== 0) {
	            $(".hand-tips").hide();
	        } else {
	            $(".hand-tips").show();
	        }
	    }
	};

	handler.init();

/***/ },
/* 1 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }
/******/ ]);
