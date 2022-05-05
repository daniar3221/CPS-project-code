/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/style.scss */ \"./src/scss/style.scss\");\n/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scss_style_scss__WEBPACK_IMPORTED_MODULE_0__);\n // sliders\n\nvar menuSwiper = document.querySelector('.about__swiper-container');\nvar brandSwiper = document.querySelector('.brand__swiper-container');\nvar electronicSwiper = document.querySelector('.electronic__swiper-container');\nvar priceSwiper = document.querySelector('.price__swiper-container');\nvar aboutTextButton = document.getElementById(\"about_text_button\");\nvar heightTextBlock = document.querySelector('.about__text__visible').clientHeight;\nvar aboutSpanButton = document.getElementById('about_span_button');\nvar aboutText = document.querySelector('.about__text');\nvar brandBlock = document.querySelector('.brand__block');\nvar brandItemsButton = document.getElementById('brant_text_button');\nvar brandSpanButton = document.getElementById(\"brand__span__button\");\nvar electronicBlock = document.querySelector('.electronic__block');\nvar electronicItemsButton = document.querySelector('.electronic__show-btn');\nvar electronicSpanButton = document.querySelector('.electronic__span__button');\naboutText.style.height = heightTextBlock + 14 + \"px\";\nbrandBlock.style.height = \"50px\";\nelectronicBlock.style.height = \"190px\";\n\nfunction openTextBlock() {\n  if (aboutText.style.height === heightTextBlock + 14 + \"px\") {\n    aboutText.style.height = 'auto';\n    aboutSpanButton.textContent = \"Свернуть\";\n  } else {\n    aboutText.style.height = heightTextBlock + 14 + \"px\";\n    aboutSpanButton.textContent = \"Читать далее\";\n  }\n}\n\nfunction openBrandBlock() {\n  if (brandBlock.style.height == \"50px\") {\n    brandBlock.style.height = \"auto\";\n    brandSpanButton.textContent = \"Свернуть\";\n  } else {\n    brandBlock.style.height = \"50px\";\n    brandSpanButton.textContent = \"Показать все\";\n  }\n}\n\nfunction openElectronicBlock() {\n  if (electronicBlock.style.height == \"190px\") {\n    electronicBlock.style.height = \"400px\";\n    electronicSpanButton.textContent = \"Свернуть\";\n  } else {\n    electronicBlock.style.height = \"190px\";\n    electronicSpanButton.textContent = \"Показать все\";\n  }\n}\n\nwindow.addEventListener(\"resize\", function (e) {\n  heightTextBlock = document.querySelector('.about__text__visible').clientHeight;\n  aboutText.style.height = heightTextBlock + 14 + \"px\";\n});\naboutTextButton.addEventListener(\"click\", openTextBlock);\nbrandItemsButton.addEventListener(\"click\", openBrandBlock);\nelectronicItemsButton.addEventListener(\"click\", openElectronicBlock);\nvar myMenuSwiper;\nvar myBrandSwiper;\nvar myElectronicSwiper;\nvar myPriceSwiper;\n\nvar slidersInit320 = function slidersInit320() {\n  myMenuSwiper = new Swiper(menuSwiper, {\n    spaceBetween: 16\n  });\n  myBrandSwiper = new Swiper(brandSwiper, {\n    slidesPerView: 1,\n    spaceBetween: 16,\n    pagination: {\n      el: '.brand__swiper-pagination'\n    }\n  });\n  myElectronicSwiper = new Swiper(electronicSwiper, {\n    slidesPerView: 1,\n    spaceBetween: 16,\n    pagination: {\n      el: '.electronic__swiper-pagination'\n    }\n  });\n  myPriceSwiper = new Swiper(priceSwiper, {\n    slidesPerView: 1,\n    spaceBetween: 16,\n    pagination: {\n      el: '.price__swiper-pagination'\n    }\n  });\n};\n\nslidersInit320();\nvar leftBlockChatBtn = document.querySelector('.left-block__button__chat');\nvar rightPopup = document.querySelector('.popup-right');\nvar closePopupBtn = document.querySelector('.popup-right__close');\nvar rightPopupContent = document.querySelector('.popup-right__content');\nvar navChatBtn = document.querySelector('.nav__chat');\nvar leftPopupChatBtn = document.querySelector('.popup-left__button__chat');\n\nleftPopupChatBtn.onclick = function () {\n  rightPopup.style.visibility = 'visible';\n  rightPopup.style.opacity = '1';\n  rightPopupContent.style.transform = \"translate(0px,0px)\";\n  rightPopupContent.style.opacity = \"1\";\n  closePopupBtn.style.position = 'unset';\n};\n\nleftBlockChatBtn.onclick = function openRightPopup() {\n  rightPopup.style.visibility = 'visible';\n  rightPopup.style.opacity = '1';\n  rightPopupContent.style.transform = \"translate(0px,0px)\";\n  rightPopupContent.style.opacity = \"1\";\n};\n\nnavChatBtn.onclick = function openRightPopup() {\n  rightPopup.style.visibility = 'visible';\n  rightPopup.style.opacity = '1';\n  rightPopupContent.style.transform = \"translate(0px,0px)\";\n  rightPopupContent.style.opacity = \"1\";\n};\n\nclosePopupBtn.onclick = function closeRightPopup() {\n  rightPopup.style.visibility = 'hidden';\n  rightPopup.style.opacity = '0';\n  rightPopupContent.style.transform = \"translate(120%,0px)\";\n  rightPopupContent.style.opacity = \"0\";\n};\n\nvar openMenuBtn = document.querySelector('.nav__menu');\nvar leftPopup = document.querySelector('.popup-left');\nvar closeLeftPopupBtn = document.querySelector('.popup-left__close');\nvar leftPopupContent = document.querySelector('.popup-left__content');\n\nopenMenuBtn.onclick = function () {\n  leftPopup.style.visibility = 'visible';\n  leftPopup.style.opacity = \"1\";\n  leftPopupContent.style.transform = \"translate(0px,0px)\";\n  leftPopupContent.style.opacity = \"1\";\n};\n\ncloseLeftPopupBtn.onclick = function () {\n  leftPopup.style.visibility = 'hidden';\n  leftPopup.style.opacity = \"0\";\n  leftPopupContent.style.transform = \"translate(-100%,0px)\";\n  leftPopupContent.style.opacity = \"0\";\n};\n\nvar leftPopupPhoneBtn = document.querySelector('.popup-left__button__phone');\nvar rightPopupCall = document.querySelector('.popup-right-call');\nvar closeRightPopupCall = document.querySelector('.popup-right-call__close');\nvar rightPopupCallContent = document.querySelector('.popup-right-call__content');\nvar navCallBtn = document.querySelector('.nav__phone');\nvar leftBlockCallBtn = document.querySelector('.left-block__button__phone');\n\nleftBlockCallBtn.onclick = function () {\n  rightPopupCall.style.visibility = 'visible';\n  rightPopupCall.style.opacity = '1';\n  rightPopupCallContent.style.transform = \"translate(0px,0px)\";\n  rightPopupCallContent.style.opacity = \"1\";\n};\n\nnavCallBtn.onclick = function () {\n  rightPopupCall.style.visibility = 'visible';\n  rightPopupCall.style.opacity = '1';\n  rightPopupCallContent.style.transform = \"translate(0px,0px)\";\n  rightPopupCallContent.style.opacity = \"1\";\n};\n\nleftPopupPhoneBtn.onclick = function () {\n  rightPopupCall.style.visibility = 'visible';\n  rightPopupCall.style.opacity = '1';\n  rightPopupCallContent.style.transform = \"translate(0px,0px)\";\n  rightPopupCallContent.style.opacity = \"1\";\n  closeRightPopupCall.style.position = 'unset';\n};\n\ncloseRightPopupCall.onclick = function () {\n  rightPopupCall.style.visibility = 'hidden';\n  rightPopupCall.style.opacity = '0';\n  rightPopupCallContent.style.transform = \"translate(120%,0px)\";\n  rightPopupCallContent.style.opacity = \"0\";\n};\n\nconsole.log('Works!');\n\n//# sourceURL=webpack:///./src/js/index.js?");

/***/ }),

/***/ "./src/scss/style.scss":
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/scss/style.scss?");

/***/ }),

/***/ 0:
/*!*******************************!*\
  !*** multi ./src/js/index.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./src/js/index.js */\"./src/js/index.js\");\n\n\n//# sourceURL=webpack:///multi_./src/js/index.js?");

/***/ })

/******/ });