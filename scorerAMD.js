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
/******/ 	return __webpack_require__(__webpack_require__.s = "./scorerAMD.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./scorerAMD.js":
/*!**********************!*\
  !*** ./scorerAMD.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("LearnosityAmd.define([''], function () {\n  /* Constructor for the scorer\r\n       * @param question The question object\r\n       * @param response The response data\r\n       */\n  function CustomScorer(question, response) {\n    console.log(question);\n    console.log(response);\n  }\n  /* Is the response correct?\r\n       * @return boolean\r\n       */\n\n\n  CustomScorer.prototype.isValid = function () {\n    return true;\n  };\n  /* The score for the current response.\r\n       * @return float\r\n       */\n\n\n  CustomScorer.prototype.score = function () {\n    return 18;\n  };\n  /* The maximum score for this question.\r\n       * @return float\r\n       */\n\n\n  CustomScorer.prototype.maxScore = function () {\n    return 20;\n  };\n  /* Is the provided question json valid to be validated?\r\n       * If this method returns \"false\" then Check Answer button\r\n       * will not be visible and dispatching public method \"validate\"\r\n       * will not validate the current question - as the provided question\r\n       * is not validatable.\r\n       * @return boolean\r\n       */\n\n\n  CustomScorer.prototype.canValidate = function () {\n    return true;\n  };\n\n  return {\n    Scorer: CustomScorer\n  };\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zY29yZXJBTUQuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zY29yZXJBTUQuanM/OTliMSJdLCJzb3VyY2VzQ29udGVudCI6WyJMZWFybm9zaXR5QW1kLmRlZmluZShbJyddLGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICBcclxuICAgIC8qIENvbnN0cnVjdG9yIGZvciB0aGUgc2NvcmVyXHJcbiAgICAgICAgICogQHBhcmFtIHF1ZXN0aW9uIFRoZSBxdWVzdGlvbiBvYmplY3RcclxuICAgICAgICAgKiBAcGFyYW0gcmVzcG9uc2UgVGhlIHJlc3BvbnNlIGRhdGFcclxuICAgICAgICAgKi9cclxuICAgIFxyXG4gICAgICAgIGZ1bmN0aW9uIEN1c3RvbVNjb3JlcihxdWVzdGlvbiwgcmVzcG9uc2UpIHsgXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHF1ZXN0aW9uKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICBcclxuICAgIC8qIElzIHRoZSByZXNwb25zZSBjb3JyZWN0P1xyXG4gICAgICAgICAqIEByZXR1cm4gYm9vbGVhblxyXG4gICAgICAgICAqL1xyXG4gICAgXHJcbiAgICAgICAgQ3VzdG9tU2NvcmVyLnByb3RvdHlwZS5pc1ZhbGlkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9O1xyXG4gICAgXHJcbiAgICAgICAgXHJcbiAgICAvKiBUaGUgc2NvcmUgZm9yIHRoZSBjdXJyZW50IHJlc3BvbnNlLlxyXG4gICAgICAgICAqIEByZXR1cm4gZmxvYXRcclxuICAgICAgICAgKi9cclxuICAgIFxyXG4gICAgICAgIEN1c3RvbVNjb3Jlci5wcm90b3R5cGUuc2NvcmUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAxODtcclxuICAgICAgICB9O1xyXG4gICAgXHJcbiAgICAgICAgXHJcbiAgICAvKiBUaGUgbWF4aW11bSBzY29yZSBmb3IgdGhpcyBxdWVzdGlvbi5cclxuICAgICAgICAgKiBAcmV0dXJuIGZsb2F0XHJcbiAgICAgICAgICovXHJcbiAgICBcclxuICAgICAgICBDdXN0b21TY29yZXIucHJvdG90eXBlLm1heFNjb3JlID0gZnVuY3Rpb24gKCkgeyBcclxuICAgICAgICAgICAgcmV0dXJuIDIwO1xyXG4gICAgICAgICB9O1xyXG4gICAgXHJcbiAgICBcclxuICAgICAgICBcclxuICAgIC8qIElzIHRoZSBwcm92aWRlZCBxdWVzdGlvbiBqc29uIHZhbGlkIHRvIGJlIHZhbGlkYXRlZD9cclxuICAgICAgICAgKiBJZiB0aGlzIG1ldGhvZCByZXR1cm5zIFwiZmFsc2VcIiB0aGVuIENoZWNrIEFuc3dlciBidXR0b25cclxuICAgICAgICAgKiB3aWxsIG5vdCBiZSB2aXNpYmxlIGFuZCBkaXNwYXRjaGluZyBwdWJsaWMgbWV0aG9kIFwidmFsaWRhdGVcIlxyXG4gICAgICAgICAqIHdpbGwgbm90IHZhbGlkYXRlIHRoZSBjdXJyZW50IHF1ZXN0aW9uIC0gYXMgdGhlIHByb3ZpZGVkIHF1ZXN0aW9uXHJcbiAgICAgICAgICogaXMgbm90IHZhbGlkYXRhYmxlLlxyXG4gICAgICAgICAqIEByZXR1cm4gYm9vbGVhblxyXG4gICAgICAgICAqL1xyXG4gICAgXHJcbiAgICAgICAgQ3VzdG9tU2NvcmVyLnByb3RvdHlwZS5jYW5WYWxpZGF0ZSA9IGZ1bmN0aW9uICgpIHsgXHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICB9O1xyXG4gICAgXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgU2NvcmVyOiAgIEN1c3RvbVNjb3JlclxyXG4gICAgICAgIH07XHJcbiAgICB9KTsiXSwibWFwcGluZ3MiOiJBQUFBO0FBR0E7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUdBOzs7OztBQUlBO0FBQ0E7QUFDQTtBQUdBOzs7OztBQUlBO0FBQ0E7QUFDQTtBQUdBOzs7OztBQUlBO0FBQ0E7QUFDQTtBQUlBOzs7Ozs7Ozs7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./scorerAMD.js\n");

/***/ })

/******/ });