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
/******/ 	__webpack_require__.p = "/dist";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _cssBaseLess = __webpack_require__(1);

	var _cssBaseLess2 = _interopRequireDefault(_cssBaseLess);

	$(function () {
	    function initScreenHeight($dom) {
	        var height = $(window).height();
	        $dom.height(height);
	    }

	    var $dom = $('#home_main');
	    initScreenHeight($dom);
	    $dom.css('opacity', 1);

	    // doc nav
	    $('#api_doc').on('click', '.chapter>.item', function () {
	        $(this).siblings('li').removeClass('active');
	        $(this).addClass('active');
	    });

	    // resize window
	    $(window).on('resize', function () {
	        initScreenHeight($dom);
	    });

	    // arrow down
	    $('.arrow-down').on('click', function () {
	        $("body").stop().animate({ scrollTop: 475 }, 500);
	        return false;
	    });
	});

/***/ },
/* 1 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }
/******/ ]);