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
/******/ 	return __webpack_require__(__webpack_require__.s = "./question.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./question.js":
/*!*********************!*\
  !*** ./question.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _vendor_lrn__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vendor/lrn */ \"./vendor/lrn.js\");\n//import '../scss/customReactInput.scss';\n\n/*global LearnosityAmd*/\n\nLearnosityAmd.define(['underscore', 'jquery-v1.10.2'], function (_, $) {\n  // Register Learnosity exposed libraries into LRN util object of vendor/lrn\n  Object(_vendor_lrn__WEBPACK_IMPORTED_MODULE_0__[\"register\"])({\n    $: $,\n    _: _\n  }); // Use require instead of import to ensure by the time we resolve the module \"scorer\",\n  // Learnosity dependencies have been attached to LRN utils in vendor/lrn\n\n  var bundle = __webpack_require__(/*! ./views/question.js */ \"./views/question.js\");\n\n  return {\n    Question: bundle[\"default\"]\n  };\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9xdWVzdGlvbi5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3F1ZXN0aW9uLmpzP2Q4YzciXSwic291cmNlc0NvbnRlbnQiOlsiLy9pbXBvcnQgJy4uL3Njc3MvY3VzdG9tUmVhY3RJbnB1dC5zY3NzJztcclxuXHJcbmltcG9ydCB7IHJlZ2lzdGVyIH0gZnJvbSAnLi92ZW5kb3IvbHJuJztcclxuXHJcbi8qZ2xvYmFsIExlYXJub3NpdHlBbWQqL1xyXG5MZWFybm9zaXR5QW1kLmRlZmluZShbXHJcbiAgICAndW5kZXJzY29yZScsXHJcbiAgICAnanF1ZXJ5LXYxLjEwLjInXHJcbl0sIGZ1bmN0aW9uIChcclxuICAgIF8sXHJcbiAgICAkXHJcbikge1xyXG4gICAgLy8gUmVnaXN0ZXIgTGVhcm5vc2l0eSBleHBvc2VkIGxpYnJhcmllcyBpbnRvIExSTiB1dGlsIG9iamVjdCBvZiB2ZW5kb3IvbHJuXHJcbiAgICByZWdpc3Rlcih7XHJcbiAgICAgICAgJCxcclxuICAgICAgICBfXHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBVc2UgcmVxdWlyZSBpbnN0ZWFkIG9mIGltcG9ydCB0byBlbnN1cmUgYnkgdGhlIHRpbWUgd2UgcmVzb2x2ZSB0aGUgbW9kdWxlIFwic2NvcmVyXCIsXHJcbiAgICAvLyBMZWFybm9zaXR5IGRlcGVuZGVuY2llcyBoYXZlIGJlZW4gYXR0YWNoZWQgdG8gTFJOIHV0aWxzIGluIHZlbmRvci9scm5cclxuICAgIGNvbnN0IGJ1bmRsZSA9IHJlcXVpcmUoJy4vdmlld3MvcXVlc3Rpb24uanMnKTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIFF1ZXN0aW9uOiBidW5kbGUuZGVmYXVsdFxyXG4gICAgfTtcclxufSk7Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFFQTtBQUVBO0FBQ0E7QUFBQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFNQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./question.js\n");

/***/ }),

/***/ "./vendor/lrn.js":
/*!***********************!*\
  !*** ./vendor/lrn.js ***!
  \***********************/
/*! exports provided: register, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"register\", function() { return register; });\nvar LRN = {};\nfunction register(dependencies) {\n  for (var key in dependencies) {\n    if (dependencies.hasOwnProperty(key)) {\n      LRN[key] = dependencies[key];\n    }\n  }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (LRN);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi92ZW5kb3IvbHJuLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vdmVuZG9yL2xybi5qcz8yMDBjIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IExSTiA9IHt9O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlZ2lzdGVyKGRlcGVuZGVuY2llcykge1xyXG4gICAgZm9yIChsZXQga2V5IGluIGRlcGVuZGVuY2llcykge1xyXG4gICAgICAgIGlmIChkZXBlbmRlbmNpZXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xyXG4gICAgICAgICAgICBMUk5ba2V5XSA9IGRlcGVuZGVuY2llc1trZXldO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTFJOOyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./vendor/lrn.js\n");

/***/ }),

/***/ "./views/question.js":
/*!***************************!*\
  !*** ./views/question.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Question; });\n/* harmony import */ var _vendor_lrn__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../vendor/lrn */ \"./vendor/lrn.js\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n// import React from 'react';\n// import ReactDOM from 'react-dom';\n //import ReactInput from './components/reactInput';\n// When this module is resolved you should be able to access all libraries provided by Learnosity through\n// LRN util object in 'vendor/lrn'\n\nconsole.log('LRN._.isString:', _vendor_lrn__WEBPACK_IMPORTED_MODULE_0__[\"default\"]._.isString('string'));\n\nvar Question = /*#__PURE__*/function () {\n  function Question(init) {\n    var _this = this;\n\n    _classCallCheck(this, Question);\n\n    _defineProperty(this, \"onInputChange\", function (value) {\n      _this.events.trigger('changed', value);\n    });\n\n    _defineProperty(this, \"requestToClearValidationUI\", function () {\n      _this.state = _objectSpread(_objectSpread({}, _this.state), {}, {\n        isValid: null,\n        showCorrectAnswers: false,\n        validationUIVisible: false\n      });\n\n      _this.render();\n    });\n\n    var state = init.state;\n    this.init = init;\n    this.events = init.events;\n    this.el = init.$el.get(0);\n    this.state = _objectSpread(_objectSpread({}, init.question), {}, {\n      disabled: state === 'review' || state === 'preview',\n      defaultValue: init.response,\n      validationUIVisible: false,\n      isValid: null\n    });\n    this.render(); // \"validate\" event can be triggered when Check Answer button is clicked or when public method .validate() is called\n    // so developer needs to listen to this event to decide if he wants to display the correct answers to user or not\n    // options.showCorrectAnswers will tell if correct answers for this question should be display or not.\n    // The value showCorrectAnswers by default is the value of showCorrectAnswers inside initOptions object that is used\n    // to initialize question app or the value of the options that is passed into public method validate (like question.validate({showCorrectAnswers: false}))\n\n    init.events.on('validate', function (options) {\n      var isValid = init.getFacade().isValid();\n      _this.state = _objectSpread(_objectSpread({}, _this.state), {}, {\n        isValid: isValid,\n        validationUIVisible: true,\n        showCorrectAnswers: options.showCorrectAnswers\n      });\n\n      _this.render();\n    });\n    init.events.trigger('ready');\n  }\n\n  _createClass(Question, [{\n    key: \"render\",\n    value: function render() {\n      this.el.innerHTML = \"Welcome Ankush\";\n    }\n  }]);\n\n  return Question;\n}();\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi92aWV3cy9xdWVzdGlvbi5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3ZpZXdzL3F1ZXN0aW9uLmpzPzA5NTUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuLy8gaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XHJcbmltcG9ydCBMUk4gZnJvbSAnLi4vdmVuZG9yL2xybic7XHJcbi8vaW1wb3J0IFJlYWN0SW5wdXQgZnJvbSAnLi9jb21wb25lbnRzL3JlYWN0SW5wdXQnO1xyXG5cclxuLy8gV2hlbiB0aGlzIG1vZHVsZSBpcyByZXNvbHZlZCB5b3Ugc2hvdWxkIGJlIGFibGUgdG8gYWNjZXNzIGFsbCBsaWJyYXJpZXMgcHJvdmlkZWQgYnkgTGVhcm5vc2l0eSB0aHJvdWdoXHJcbi8vIExSTiB1dGlsIG9iamVjdCBpbiAndmVuZG9yL2xybidcclxuY29uc29sZS5sb2coJ0xSTi5fLmlzU3RyaW5nOicsTFJOLl8uaXNTdHJpbmcoJ3N0cmluZycpKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFF1ZXN0aW9uIHtcclxuICAgIGNvbnN0cnVjdG9yKGluaXQpIHtcclxuICAgICAgICBjb25zdCB7IHN0YXRlIH0gPSBpbml0O1xyXG5cclxuICAgICAgICB0aGlzLmluaXQgPSBpbml0O1xyXG4gICAgICAgIHRoaXMuZXZlbnRzID0gaW5pdC5ldmVudHM7XHJcbiAgICAgICAgdGhpcy5lbCA9IGluaXQuJGVsLmdldCgwKTtcclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgLi4uaW5pdC5xdWVzdGlvbixcclxuICAgICAgICAgICAgZGlzYWJsZWQ6IHN0YXRlID09PSAncmV2aWV3JyB8fCBzdGF0ZSA9PT0gJ3ByZXZpZXcnLFxyXG4gICAgICAgICAgICBkZWZhdWx0VmFsdWU6IGluaXQucmVzcG9uc2UsXHJcbiAgICAgICAgICAgIHZhbGlkYXRpb25VSVZpc2libGU6IGZhbHNlLFxyXG4gICAgICAgICAgICBpc1ZhbGlkOiBudWxsLFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHRoaXMucmVuZGVyKCk7XHJcblxyXG4gICAgICAgIC8vIFwidmFsaWRhdGVcIiBldmVudCBjYW4gYmUgdHJpZ2dlcmVkIHdoZW4gQ2hlY2sgQW5zd2VyIGJ1dHRvbiBpcyBjbGlja2VkIG9yIHdoZW4gcHVibGljIG1ldGhvZCAudmFsaWRhdGUoKSBpcyBjYWxsZWRcclxuICAgICAgICAvLyBzbyBkZXZlbG9wZXIgbmVlZHMgdG8gbGlzdGVuIHRvIHRoaXMgZXZlbnQgdG8gZGVjaWRlIGlmIGhlIHdhbnRzIHRvIGRpc3BsYXkgdGhlIGNvcnJlY3QgYW5zd2VycyB0byB1c2VyIG9yIG5vdFxyXG4gICAgICAgIC8vIG9wdGlvbnMuc2hvd0NvcnJlY3RBbnN3ZXJzIHdpbGwgdGVsbCBpZiBjb3JyZWN0IGFuc3dlcnMgZm9yIHRoaXMgcXVlc3Rpb24gc2hvdWxkIGJlIGRpc3BsYXkgb3Igbm90LlxyXG4gICAgICAgIC8vIFRoZSB2YWx1ZSBzaG93Q29ycmVjdEFuc3dlcnMgYnkgZGVmYXVsdCBpcyB0aGUgdmFsdWUgb2Ygc2hvd0NvcnJlY3RBbnN3ZXJzIGluc2lkZSBpbml0T3B0aW9ucyBvYmplY3QgdGhhdCBpcyB1c2VkXHJcbiAgICAgICAgLy8gdG8gaW5pdGlhbGl6ZSBxdWVzdGlvbiBhcHAgb3IgdGhlIHZhbHVlIG9mIHRoZSBvcHRpb25zIHRoYXQgaXMgcGFzc2VkIGludG8gcHVibGljIG1ldGhvZCB2YWxpZGF0ZSAobGlrZSBxdWVzdGlvbi52YWxpZGF0ZSh7c2hvd0NvcnJlY3RBbnN3ZXJzOiBmYWxzZX0pKVxyXG4gICAgICAgIGluaXQuZXZlbnRzLm9uKCd2YWxpZGF0ZScsIG9wdGlvbnMgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBpc1ZhbGlkID0gaW5pdC5nZXRGYWNhZGUoKS5pc1ZhbGlkKCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICAgICAgLi4udGhpcy5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGlzVmFsaWQsXHJcbiAgICAgICAgICAgICAgICB2YWxpZGF0aW9uVUlWaXNpYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgc2hvd0NvcnJlY3RBbnN3ZXJzOiBvcHRpb25zLnNob3dDb3JyZWN0QW5zd2Vyc1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB0aGlzLnJlbmRlcigpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGluaXQuZXZlbnRzLnRyaWdnZXIoJ3JlYWR5Jyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgdGhpcy5lbC5pbm5lckhUTUwgID0gXCJXZWxjb21lIEFua3VzaFwiXHJcbiAgICB9XHJcblxyXG4gICAgb25JbnB1dENoYW5nZSA9IHZhbHVlID0+IHtcclxuICAgICAgICB0aGlzLmV2ZW50cy50cmlnZ2VyKCdjaGFuZ2VkJywgdmFsdWUpO1xyXG4gICAgfTtcclxuXHJcbiAgICByZXF1ZXN0VG9DbGVhclZhbGlkYXRpb25VSSA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICAuLi50aGlzLnN0YXRlLFxyXG4gICAgICAgICAgICBpc1ZhbGlkOiBudWxsLFxyXG4gICAgICAgICAgICBzaG93Q29ycmVjdEFuc3dlcnM6IGZhbHNlLFxyXG4gICAgICAgICAgICB2YWxpZGF0aW9uVUlWaXNpYmxlOiBmYWxzZSxcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB0aGlzLnJlbmRlcigpO1xyXG4gICAgfTtcclxufSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBeUNBO0FBQ0E7QUFDQTtBQTNDQTtBQTZDQTtBQUVBO0FBQ0E7QUFDQTtBQUpBO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUF0REE7QUFHQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFRQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFKQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./views/question.js\n");

/***/ })

/******/ });