(self["webpackChunk"] = self["webpackChunk"] || []).push([["app"],{

/***/ "./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.[jt]sx?$":
/*!****************************************************************************************************************!*\
  !*** ./assets/controllers/ sync ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \.[jt]sx?$ ***!
  \****************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./hello_controller.js": "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/hello_controller.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.[jt]sx?$";

/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/dist/webpack/loader.js!./assets/controllers.json":
/*!************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/dist/webpack/loader.js!./assets/controllers.json ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
});

/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/hello_controller.js":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/hello_controller.js ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _default)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_reflect_to_string_tag_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.reflect.to-string-tag.js */ "./node_modules/core-js/modules/es.reflect.to-string-tag.js");
/* harmony import */ var core_js_modules_es_reflect_to_string_tag_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_to_string_tag_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @hotwired/stimulus */ "./node_modules/@hotwired/stimulus/dist/stimulus.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }



















function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


/*
 * This is an example Stimulus controller!
 *
 * Any element with a data-controller="hello" attribute will cause
 * this controller to be executed. The name "hello" comes from the filename:
 * hello_controller.js -> "hello"
 *
 * Delete this file or adapt it for your use!
 */
var _default = /*#__PURE__*/function (_Controller) {
  _inherits(_default, _Controller);
  var _super = _createSuper(_default);
  function _default() {
    _classCallCheck(this, _default);
    return _super.apply(this, arguments);
  }
  _createClass(_default, [{
    key: "connect",
    value: function connect() {
      this.element.textContent = 'Hello Stimulus! Edit me in assets/controllers/hello_controller.js';
    }
  }]);
  return _default;
}(_hotwired_stimulus__WEBPACK_IMPORTED_MODULE_19__.Controller);


/***/ }),

/***/ "./assets/app.js":
/*!***********************!*\
  !*** ./assets/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_app_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/app.scss */ "./assets/styles/app.scss");
/* harmony import */ var _bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bootstrap */ "./assets/bootstrap.js");
/* harmony import */ var tw_elements__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tw-elements */ "./node_modules/tw-elements/dist/js/tw-elements.es.min.js");
/* harmony import */ var flowbite__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flowbite */ "./node_modules/flowbite/lib/esm/index.js");
/* harmony import */ var nouislider_dist_nouislider_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! nouislider/dist/nouislider.css */ "./node_modules/nouislider/dist/nouislider.css");
/* harmony import */ var nouislider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! nouislider */ "./node_modules/nouislider/dist/nouislider.mjs");
/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)


// start the Stimulus application


// tailwind elements


// flowbite components


// nouislide / range slide control



// temperature slider
var sliderTemperature = document.getElementById('temperature-slider');
if (sliderTemperature) {
  var temperatureMin = document.getElementById('filter_data_temperatureMin');
  var temperatureMax = document.getElementById('filter_data_temperatureMax');
  var range = nouislider__WEBPACK_IMPORTED_MODULE_5__["default"].create(sliderTemperature, {
    start: [temperatureMin.value || -10, temperatureMax.value || 30],
    connect: true,
    range: {
      'min': -50,
      'max': 50
    }
  });
  // display number in the field 
  range.on('slide', function (values, handle) {
    if (handle === 0) {
      temperatureMin.value = Math.round(values[0]);
    }
    if (handle === 1) {
      temperatureMax.value = Math.round(values[1]);
    }
  });
}

// Demography slider
var sliderDemography = document.getElementById('demography-slider');
if (sliderDemography) {
  var demographyMin = document.getElementById('filter_data_demographyMin');
  var demographyMax = document.getElementById('filter_data_demographyMax');
  var _range = nouislider__WEBPACK_IMPORTED_MODULE_5__["default"].create(sliderDemography, {
    start: [demographyMin.value || 1000000, demographyMax.value || 10000000],
    connect: true,
    step: 1000,
    range: {
      'min': 0,
      'max': 40000000
    }
  });

  // display number rounded in the field 
  _range.on('slide', function (values, handle) {
    if (handle === 0) {
      demographyMin.value = Math.round(values[0]);
    }
    if (handle === 1) {
      demographyMax.value = Math.round(values[1]);
    }
  });
}

// Cost slider
var sliderCost = document.getElementById('cost-slider');
if (sliderDemography) {
  var costMin = document.getElementById('filter_data_costMin');
  var costMax = document.getElementById('filter_data_costMax');
  var _range2 = nouislider__WEBPACK_IMPORTED_MODULE_5__["default"].create(sliderCost, {
    start: [costMin.value || 10000, costMax.value || 500000],
    step: 50,
    connect: true,
    range: {
      'min': 1000,
      'max': 1000000
    }
  });

  // display number rounded in the field 
  _range2.on('slide', function (values, handle) {
    if (handle === 0) {
      costMin.value = Math.round(values[0]);
    }
    if (handle === 1) {
      costMax.value = Math.round(values[1]);
    }
  });
}

// Area slider
var sliderArea = document.getElementById('area-slider');
if (sliderArea) {
  var areaMin = document.getElementById('filter_data_areaMin');
  var areaMax = document.getElementById('filter_data_areaMax');
  var _range3 = nouislider__WEBPACK_IMPORTED_MODULE_5__["default"].create(sliderArea, {
    start: [areaMin.value || 10000, areaMax.value || 100000],
    connect: true,
    step: 1000,
    range: {
      'min': 500,
      'max': 400000
    }
  });

  // display number rounded in the field 
  _range3.on('slide', function (values, handle) {
    if (handle === 0) {
      areaMin.value = Math.round(values[0]);
    }
    if (handle === 1) {
      areaMax.value = Math.round(values[1]);
    }
  });
}

/***/ }),

/***/ "./assets/bootstrap.js":
/*!*****************************!*\
  !*** ./assets/bootstrap.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   app: () => (/* binding */ app)
/* harmony export */ });
/* harmony import */ var _symfony_stimulus_bridge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @symfony/stimulus-bridge */ "./node_modules/@symfony/stimulus-bridge/dist/index.js");


// Registers Stimulus controllers from controllers.json and in the controllers/ directory
var app = (0,_symfony_stimulus_bridge__WEBPACK_IMPORTED_MODULE_0__.startStimulusApp)(__webpack_require__("./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.[jt]sx?$"));

// register any custom, 3rd party controllers here
// app.register('some_controller_name', SomeImportedController);

/***/ }),

/***/ "./assets/styles/app.scss":
/*!********************************!*\
  !*** ./assets/styles/app.scss ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_symfony_stimulus-bridge_dist_index_js-node_modules_core-js_modules_es_da-a26c70"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SUFBSUEsTUFBTSxLQUFLLENBQUMsRUFBRTtNQUNkVyxPQUFPLENBQUMzQixLQUFLLEdBQUdpQixJQUFJLENBQUNDLEtBQUssQ0FBQ0gsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3pDO0lBQ0EsSUFBSUMsTUFBTSxLQUFLLENBQUMsRUFBRTtNQUNkWSxPQUFPLENBQUM1QixLQUFLLEdBQUdpQixJQUFJLENBQUNDLEtBQUssQ0FBQ0gsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3pDO0VBQ0osQ0FBQyxDQUFDO0FBQ047Ozs7Ozs7Ozs7Ozs7Ozs7QUNoSTREOztBQUU1RDtBQUNPLElBQU1lLEdBQUcsR0FBR0QsMEVBQWdCLENBQUNFLHlJQUluQyxDQUFDOztBQUVGO0FBQ0E7Ozs7Ozs7Ozs7OztBQ1ZBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLyBcXC5banRdc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbnRyb2xsZXJzLmpzb24iLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbnRyb2xsZXJzL2hlbGxvX2NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYm9vdHN0cmFwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zdHlsZXMvYXBwLnNjc3MiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIG1hcCA9IHtcblx0XCIuL2hlbGxvX2NvbnRyb2xsZXIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9Ac3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlci5qcyEuL2Fzc2V0cy9jb250cm9sbGVycy9oZWxsb19jb250cm9sbGVyLmpzXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vYXNzZXRzL2NvbnRyb2xsZXJzIHN5bmMgcmVjdXJzaXZlIC4vbm9kZV9tb2R1bGVzL0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyLmpzISBcXFxcLltqdF1zeD8kXCI7IiwiZXhwb3J0IGRlZmF1bHQge1xufTsiLCJpbXBvcnQgeyBDb250cm9sbGVyIH0gZnJvbSAnQGhvdHdpcmVkL3N0aW11bHVzJztcblxuLypcbiAqIFRoaXMgaXMgYW4gZXhhbXBsZSBTdGltdWx1cyBjb250cm9sbGVyIVxuICpcbiAqIEFueSBlbGVtZW50IHdpdGggYSBkYXRhLWNvbnRyb2xsZXI9XCJoZWxsb1wiIGF0dHJpYnV0ZSB3aWxsIGNhdXNlXG4gKiB0aGlzIGNvbnRyb2xsZXIgdG8gYmUgZXhlY3V0ZWQuIFRoZSBuYW1lIFwiaGVsbG9cIiBjb21lcyBmcm9tIHRoZSBmaWxlbmFtZTpcbiAqIGhlbGxvX2NvbnRyb2xsZXIuanMgLT4gXCJoZWxsb1wiXG4gKlxuICogRGVsZXRlIHRoaXMgZmlsZSBvciBhZGFwdCBpdCBmb3IgeW91ciB1c2UhXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQ29udHJvbGxlciB7XG4gICAgY29ubmVjdCgpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LnRleHRDb250ZW50ID0gJ0hlbGxvIFN0aW11bHVzISBFZGl0IG1lIGluIGFzc2V0cy9jb250cm9sbGVycy9oZWxsb19jb250cm9sbGVyLmpzJztcbiAgICB9XG59XG4iLCIvKlxuICogV2VsY29tZSB0byB5b3VyIGFwcCdzIG1haW4gSmF2YVNjcmlwdCBmaWxlIVxuICpcbiAqIFdlIHJlY29tbWVuZCBpbmNsdWRpbmcgdGhlIGJ1aWx0IHZlcnNpb24gb2YgdGhpcyBKYXZhU2NyaXB0IGZpbGVcbiAqIChhbmQgaXRzIENTUyBmaWxlKSBpbiB5b3VyIGJhc2UgbGF5b3V0IChiYXNlLmh0bWwudHdpZykuXG4gKi9cblxuLy8gYW55IENTUyB5b3UgaW1wb3J0IHdpbGwgb3V0cHV0IGludG8gYSBzaW5nbGUgY3NzIGZpbGUgKGFwcC5jc3MgaW4gdGhpcyBjYXNlKVxuaW1wb3J0ICcuL3N0eWxlcy9hcHAuc2Nzcyc7XG5cbi8vIHN0YXJ0IHRoZSBTdGltdWx1cyBhcHBsaWNhdGlvblxuaW1wb3J0ICcuL2Jvb3RzdHJhcCc7XG5cbi8vIHRhaWx3aW5kIGVsZW1lbnRzXG5pbXBvcnQgJ3R3LWVsZW1lbnRzJztcblxuLy8gZmxvd2JpdGUgY29tcG9uZW50c1xuaW1wb3J0ICdmbG93Yml0ZSc7XG5cbi8vIG5vdWlzbGlkZSAvIHJhbmdlIHNsaWRlIGNvbnRyb2xcbmltcG9ydCAnbm91aXNsaWRlci9kaXN0L25vdWlzbGlkZXIuY3NzJztcbmltcG9ydCBub1VpU2xpZGVyIGZyb20gJ25vdWlzbGlkZXInO1xuXG5cbi8vIHRlbXBlcmF0dXJlIHNsaWRlclxuY29uc3Qgc2xpZGVyVGVtcGVyYXR1cmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGVtcGVyYXR1cmUtc2xpZGVyJyk7XG5cbmlmIChzbGlkZXJUZW1wZXJhdHVyZSkge1xuICAgIGNvbnN0IHRlbXBlcmF0dXJlTWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZpbHRlcl9kYXRhX3RlbXBlcmF0dXJlTWluJylcbiAgICBjb25zdCB0ZW1wZXJhdHVyZU1heCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmaWx0ZXJfZGF0YV90ZW1wZXJhdHVyZU1heCcpXG4gICAgY29uc3QgcmFuZ2UgPSBub1VpU2xpZGVyLmNyZWF0ZShzbGlkZXJUZW1wZXJhdHVyZSwge1xuICAgICAgICBzdGFydDogW3RlbXBlcmF0dXJlTWluLnZhbHVlIHx8IC0xMCwgdGVtcGVyYXR1cmVNYXgudmFsdWUgfHwgMzBdLFxuICAgICAgICBjb25uZWN0OiB0cnVlLFxuICAgICAgICByYW5nZToge1xuICAgICAgICAgICAgJ21pbic6IC01MCxcbiAgICAgICAgICAgICdtYXgnOiA1MFxuICAgICAgICB9XG4gICAgfSlcbiAgICAvLyBkaXNwbGF5IG51bWJlciBpbiB0aGUgZmllbGQgXG4gICAgcmFuZ2Uub24oJ3NsaWRlJywgZnVuY3Rpb24gKHZhbHVlcywgaGFuZGxlKSB7XG4gICAgICAgIGlmIChoYW5kbGUgPT09IDApIHtcbiAgICAgICAgICAgIHRlbXBlcmF0dXJlTWluLnZhbHVlID0gTWF0aC5yb3VuZCh2YWx1ZXNbMF0pXG4gICAgICAgIH1cbiAgICAgICAgaWYgKGhhbmRsZSA9PT0gMSkge1xuICAgICAgICAgICAgdGVtcGVyYXR1cmVNYXgudmFsdWUgPSBNYXRoLnJvdW5kKHZhbHVlc1sxXSlcbiAgICAgICAgfVxuICAgIH0pXG59XG5cbi8vIERlbW9ncmFwaHkgc2xpZGVyXG5jb25zdCBzbGlkZXJEZW1vZ3JhcGh5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RlbW9ncmFwaHktc2xpZGVyJyk7XG5cbmlmIChzbGlkZXJEZW1vZ3JhcGh5KSB7XG4gICAgY29uc3QgZGVtb2dyYXBoeU1pbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmaWx0ZXJfZGF0YV9kZW1vZ3JhcGh5TWluJylcbiAgICBjb25zdCBkZW1vZ3JhcGh5TWF4ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZpbHRlcl9kYXRhX2RlbW9ncmFwaHlNYXgnKVxuICAgIGNvbnN0IHJhbmdlID0gbm9VaVNsaWRlci5jcmVhdGUoc2xpZGVyRGVtb2dyYXBoeSwge1xuICAgICAgICBzdGFydDogW2RlbW9ncmFwaHlNaW4udmFsdWUgfHwgMTAwMDAwMCwgZGVtb2dyYXBoeU1heC52YWx1ZSB8fCAxMDAwMDAwMF0sXG4gICAgICAgIGNvbm5lY3Q6IHRydWUsXG4gICAgICAgIHN0ZXA6IDEwMDAsXG4gICAgICAgIHJhbmdlOiB7XG4gICAgICAgICAgICAnbWluJzogMCxcbiAgICAgICAgICAgICdtYXgnOiA0MDAwMDAwMFxuICAgICAgICB9XG4gICAgfSlcblxuICAgIC8vIGRpc3BsYXkgbnVtYmVyIHJvdW5kZWQgaW4gdGhlIGZpZWxkIFxuICAgIHJhbmdlLm9uKCdzbGlkZScsIGZ1bmN0aW9uICh2YWx1ZXMsIGhhbmRsZSkge1xuICAgICAgICBpZiAoaGFuZGxlID09PSAwKSB7XG4gICAgICAgICAgICBkZW1vZ3JhcGh5TWluLnZhbHVlID0gTWF0aC5yb3VuZCh2YWx1ZXNbMF0pXG4gICAgICAgIH1cbiAgICAgICAgaWYgKGhhbmRsZSA9PT0gMSkge1xuICAgICAgICAgICAgZGVtb2dyYXBoeU1heC52YWx1ZSA9IE1hdGgucm91bmQodmFsdWVzWzFdKVxuICAgICAgICB9XG4gICAgfSlcbn1cblxuLy8gQ29zdCBzbGlkZXJcbmNvbnN0IHNsaWRlckNvc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29zdC1zbGlkZXInKTtcblxuaWYgKHNsaWRlckRlbW9ncmFwaHkpIHtcbiAgICBjb25zdCBjb3N0TWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZpbHRlcl9kYXRhX2Nvc3RNaW4nKVxuICAgIGNvbnN0IGNvc3RNYXggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmlsdGVyX2RhdGFfY29zdE1heCcpXG4gICAgY29uc3QgcmFuZ2UgPSBub1VpU2xpZGVyLmNyZWF0ZShzbGlkZXJDb3N0LCB7XG4gICAgICAgIHN0YXJ0OiBbY29zdE1pbi52YWx1ZSB8fCAxMDAwMCwgY29zdE1heC52YWx1ZSB8fCA1MDAwMDBdLFxuICAgICAgICBzdGVwOiA1MCxcbiAgICAgICAgY29ubmVjdDogdHJ1ZSxcbiAgICAgICAgcmFuZ2U6IHtcbiAgICAgICAgICAgICdtaW4nOiAxMDAwLFxuICAgICAgICAgICAgJ21heCc6IDEwMDAwMDBcbiAgICAgICAgfVxuICAgIH0pXG5cbiAgICAvLyBkaXNwbGF5IG51bWJlciByb3VuZGVkIGluIHRoZSBmaWVsZCBcbiAgICByYW5nZS5vbignc2xpZGUnLCBmdW5jdGlvbiAodmFsdWVzLCBoYW5kbGUpIHtcbiAgICAgICAgaWYgKGhhbmRsZSA9PT0gMCkge1xuICAgICAgICAgICAgY29zdE1pbi52YWx1ZSA9IE1hdGgucm91bmQodmFsdWVzWzBdKVxuICAgICAgICB9XG4gICAgICAgIGlmIChoYW5kbGUgPT09IDEpIHtcbiAgICAgICAgICAgIGNvc3RNYXgudmFsdWUgPSBNYXRoLnJvdW5kKHZhbHVlc1sxXSlcbiAgICAgICAgfVxuICAgIH0pXG59XG5cbi8vIEFyZWEgc2xpZGVyXG5jb25zdCBzbGlkZXJBcmVhID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FyZWEtc2xpZGVyJyk7XG5cbmlmIChzbGlkZXJBcmVhKSB7XG4gICAgY29uc3QgYXJlYU1pbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmaWx0ZXJfZGF0YV9hcmVhTWluJylcbiAgICBjb25zdCBhcmVhTWF4ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZpbHRlcl9kYXRhX2FyZWFNYXgnKVxuICAgIGNvbnN0IHJhbmdlID0gbm9VaVNsaWRlci5jcmVhdGUoc2xpZGVyQXJlYSwge1xuICAgICAgICBzdGFydDogW2FyZWFNaW4udmFsdWUgfHwgMTAwMDAsIGFyZWFNYXgudmFsdWUgfHwgMTAwMDAwXSxcbiAgICAgICAgY29ubmVjdDogdHJ1ZSxcbiAgICAgICAgc3RlcDogMTAwMCxcbiAgICAgICAgcmFuZ2U6IHtcbiAgICAgICAgICAgICdtaW4nOiA1MDAsXG4gICAgICAgICAgICAnbWF4JzogNDAwMDAwXG4gICAgICAgIH1cbiAgICB9KVxuXG4gICAgLy8gZGlzcGxheSBudW1iZXIgcm91bmRlZCBpbiB0aGUgZmllbGQgXG4gICAgcmFuZ2Uub24oJ3NsaWRlJywgZnVuY3Rpb24gKHZhbHVlcywgaGFuZGxlKSB7XG4gICAgICAgIGlmIChoYW5kbGUgPT09IDApIHtcbiAgICAgICAgICAgIGFyZWFNaW4udmFsdWUgPSBNYXRoLnJvdW5kKHZhbHVlc1swXSlcbiAgICAgICAgfVxuICAgICAgICBpZiAoaGFuZGxlID09PSAxKSB7XG4gICAgICAgICAgICBhcmVhTWF4LnZhbHVlID0gTWF0aC5yb3VuZCh2YWx1ZXNbMV0pXG4gICAgICAgIH1cbiAgICB9KVxufSIsImltcG9ydCB7IHN0YXJ0U3RpbXVsdXNBcHAgfSBmcm9tICdAc3ltZm9ueS9zdGltdWx1cy1icmlkZ2UnO1xuXG4vLyBSZWdpc3RlcnMgU3RpbXVsdXMgY29udHJvbGxlcnMgZnJvbSBjb250cm9sbGVycy5qc29uIGFuZCBpbiB0aGUgY29udHJvbGxlcnMvIGRpcmVjdG9yeVxuZXhwb3J0IGNvbnN0IGFwcCA9IHN0YXJ0U3RpbXVsdXNBcHAocmVxdWlyZS5jb250ZXh0KFxuICAgICdAc3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlciEuL2NvbnRyb2xsZXJzJyxcbiAgICB0cnVlLFxuICAgIC9cXC5banRdc3g/JC9cbikpO1xuXG4vLyByZWdpc3RlciBhbnkgY3VzdG9tLCAzcmQgcGFydHkgY29udHJvbGxlcnMgaGVyZVxuLy8gYXBwLnJlZ2lzdGVyKCdzb21lX2NvbnRyb2xsZXJfbmFtZScsIFNvbWVJbXBvcnRlZENvbnRyb2xsZXIpO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbIkNvbnRyb2xsZXIiLCJfZGVmYXVsdCIsIl9Db250cm9sbGVyIiwiX2luaGVyaXRzIiwiX3N1cGVyIiwiX2NyZWF0ZVN1cGVyIiwiX2NsYXNzQ2FsbENoZWNrIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJfY3JlYXRlQ2xhc3MiLCJrZXkiLCJ2YWx1ZSIsImNvbm5lY3QiLCJlbGVtZW50IiwidGV4dENvbnRlbnQiLCJkZWZhdWx0Iiwibm9VaVNsaWRlciIsInNsaWRlclRlbXBlcmF0dXJlIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInRlbXBlcmF0dXJlTWluIiwidGVtcGVyYXR1cmVNYXgiLCJyYW5nZSIsImNyZWF0ZSIsInN0YXJ0Iiwib24iLCJ2YWx1ZXMiLCJoYW5kbGUiLCJNYXRoIiwicm91bmQiLCJzbGlkZXJEZW1vZ3JhcGh5IiwiZGVtb2dyYXBoeU1pbiIsImRlbW9ncmFwaHlNYXgiLCJzdGVwIiwic2xpZGVyQ29zdCIsImNvc3RNaW4iLCJjb3N0TWF4Iiwic2xpZGVyQXJlYSIsImFyZWFNaW4iLCJhcmVhTWF4Iiwic3RhcnRTdGltdWx1c0FwcCIsImFwcCIsInJlcXVpcmUiLCJjb250ZXh0Il0sInNvdXJjZVJvb3QiOiIifQ==