"use strict";
(self["webpackChunkfloristby"] = self["webpackChunkfloristby"] || []).push([["src_widgets_Page_Page_tsx"],{

/***/ "./src/widgets/Page/Page.tsx":
/*!***********************************!*\
  !*** ./src/widgets/Page/Page.tsx ***!
  \***********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Page: () => (/* binding */ Page)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var shared_lib_classNames_classNames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shared/lib/classNames/classNames */ "./src/shared/lib/classNames/classNames.ts");
/* harmony import */ var _Page_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Page.module.scss */ "./src/widgets/Page/Page.module.scss");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var shared_lib_hooks_useInfiniteScroll_useInfiniteScroll__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! shared/lib/hooks/useInfiniteScroll/useInfiniteScroll */ "./src/shared/lib/hooks/useInfiniteScroll/useInfiniteScroll.ts");
/* harmony import */ var shared_lib_hooks_useAppDispatch_useAppDispatch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! shared/lib/hooks/useAppDispatch/useAppDispatch */ "./src/shared/lib/hooks/useAppDispatch/useAppDispatch.ts");
/* harmony import */ var features_UI__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! features/UI */ "./src/features/UI/index.ts");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var shared_lib_hooks_useInitialEffect_useInitialEffect__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! shared/lib/hooks/useInitialEffect/useInitialEffect */ "./src/shared/lib/hooks/useInitialEffect/useInitialEffect.ts");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var shared_lib_hooks_useThrottle_useThrottle__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! shared/lib/hooks/useThrottle/useThrottle */ "./src/shared/lib/hooks/useThrottle/useThrottle.ts");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

var _s = __webpack_require__.$Refresh$.signature();











var Page = /*#__PURE__*/_s( /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_3__.memo)(_c = _s(function (props) {
  _s();
  var _a = props.className,
    className = _a === void 0 ? '' : _a,
    children = props.children,
    onScrollEnd = props.onScrollEnd;
  var wrapperRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)();
  var triggerRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)();
  var dispatch = (0,shared_lib_hooks_useAppDispatch_useAppDispatch__WEBPACK_IMPORTED_MODULE_5__.useAppDispatch)();
  var pathname = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_10__.useLocation)().pathname;
  var scrollPosition = (0,react_redux__WEBPACK_IMPORTED_MODULE_8__.useSelector)(function (state) {
    return (0,features_UI__WEBPACK_IMPORTED_MODULE_6__.getUIScrollByPath)(state, pathname);
  });
  (0,shared_lib_hooks_useInfiniteScroll_useInfiniteScroll__WEBPACK_IMPORTED_MODULE_4__.useInfiniteScroll)({
    triggerRef: triggerRef,
    wrapperRef: wrapperRef,
    callback: onScrollEnd
  });
  (0,shared_lib_hooks_useInitialEffect_useInitialEffect__WEBPACK_IMPORTED_MODULE_7__.useInitialEffect)(function () {
    wrapperRef.current.scrollTop = scrollPosition;
  });
  var onScroll = (0,shared_lib_hooks_useThrottle_useThrottle__WEBPACK_IMPORTED_MODULE_9__.useThrottle)(function (e) {
    console.log('SCROLL');
    dispatch(features_UI__WEBPACK_IMPORTED_MODULE_6__.uiActions.setScrollPosition({
      position: e.currentTarget.scrollTop,
      path: pathname
    }));
  }, 500);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
    ref: wrapperRef,
    className: (0,shared_lib_classNames_classNames__WEBPACK_IMPORTED_MODULE_1__.classNames)(_Page_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].Page, {}, [className]),
    onScroll: onScroll,
    children: [children, onScrollEnd ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
      className: _Page_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].trigger,
      ref: triggerRef
    }) : null]
  });
}, "j7Iv05o+BXQWF1Dyngv/uIrXZpQ=", false, function () {
  return [shared_lib_hooks_useAppDispatch_useAppDispatch__WEBPACK_IMPORTED_MODULE_5__.useAppDispatch, react_router_dom__WEBPACK_IMPORTED_MODULE_10__.useLocation, react_redux__WEBPACK_IMPORTED_MODULE_8__.useSelector, shared_lib_hooks_useInfiniteScroll_useInfiniteScroll__WEBPACK_IMPORTED_MODULE_4__.useInfiniteScroll, shared_lib_hooks_useInitialEffect_useInitialEffect__WEBPACK_IMPORTED_MODULE_7__.useInitialEffect, shared_lib_hooks_useThrottle_useThrottle__WEBPACK_IMPORTED_MODULE_9__.useThrottle];
})), "j7Iv05o+BXQWF1Dyngv/uIrXZpQ=", false, function () {
  return [shared_lib_hooks_useAppDispatch_useAppDispatch__WEBPACK_IMPORTED_MODULE_5__.useAppDispatch, react_router_dom__WEBPACK_IMPORTED_MODULE_10__.useLocation, react_redux__WEBPACK_IMPORTED_MODULE_8__.useSelector, shared_lib_hooks_useInfiniteScroll_useInfiniteScroll__WEBPACK_IMPORTED_MODULE_4__.useInfiniteScroll, shared_lib_hooks_useInitialEffect_useInitialEffect__WEBPACK_IMPORTED_MODULE_7__.useInitialEffect, shared_lib_hooks_useThrottle_useThrottle__WEBPACK_IMPORTED_MODULE_9__.useThrottle];
});
_c2 = Page;
Page.displayName = 'Page';

var _c, _c2;
__webpack_require__.$Refresh$.register(_c, "Page$memo");
__webpack_require__.$Refresh$.register(_c2, "Page");

const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (true) {
		let errorOverlay;
		if (typeof __react_refresh_error_overlay__ !== 'undefined') {
			errorOverlay = __react_refresh_error_overlay__;
		}
		let testMode;
		if (typeof __react_refresh_test__ !== 'undefined') {
			testMode = __react_refresh_test__;
		}
		return __react_refresh_utils__.executeRuntime(
			exports,
			$ReactRefreshModuleId$,
			module.hot,
			errorOverlay,
			testMode
		);
	}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/widgets/Page/Page.module.scss":
/*!****************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/widgets/Page/Page.module.scss ***!
  \****************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.src-widgets-Page-Page-module__Page--a83jD {
  flex-grow: 1;
  flex-shrink: 100;
  padding: 20px 20px 20px 45px;
  height: calc(100vh - var(--navbar-height));
  overflow-y: auto;
  overflow-x: hidden;
}

.src-widgets-Page-Page-module__trigger--VaPQ_ {
  height: 20px;
  margin: 10px;
}`, "",{"version":3,"sources":["webpack://./src/widgets/Page/Page.module.scss"],"names":[],"mappings":"AAAA;EACI,YAAA;EACA,gBAAA;EACA,4BAAA;EACA,0CAAA;EACA,gBAAA;EACA,kBAAA;AACJ;;AAEA;EACI,YAAA;EACA,YAAA;AACJ","sourcesContent":[".Page {\r\n    flex-grow: 1;\r\n    flex-shrink: 100;\r\n    padding: 20px 20px 20px 45px;\r\n    height: calc(100vh - var(--navbar-height));\r\n    overflow-y: auto;\r\n    overflow-x: hidden;\r\n}\r\n\r\n.trigger {\r\n    height: 20px;\r\n    margin: 10px;\r\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"Page": `src-widgets-Page-Page-module__Page--a83jD`,
	"trigger": `src-widgets-Page-Page-module__trigger--VaPQ_`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/widgets/Page/Page.module.scss":
/*!*******************************************!*\
  !*** ./src/widgets/Page/Page.module.scss ***!
  \*******************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Page_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!../../../node_modules/sass-loader/dist/cjs.js!./Page.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/widgets/Page/Page.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Page_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);


if (true) {
  if (!_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Page_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }
  var p;
  for (p in a) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }
    if (a[p] !== b[p]) {
      return false;
    }
  }
  for (p in b) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }
    if (!a[p]) {
      return false;
    }
  }
  return true;
};
    var isNamedExport = !_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Page_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;
    var oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Page_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Page_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

    module.hot.accept(
      /*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!../../../node_modules/sass-loader/dist/cjs.js!./Page.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/widgets/Page/Page.module.scss",
      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Page_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!../../../node_modules/sass-loader/dist/cjs.js!./Page.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/widgets/Page/Page.module.scss");
(function () {
        if (!isEqualLocals(oldLocals, isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Page_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Page_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals, isNamedExport)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Page_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Page_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

              update(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Page_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"]);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}



       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Page_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Page_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Page_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/shared/lib/hooks/useInfiniteScroll/useInfiniteScroll.ts":
/*!*********************************************************************!*\
  !*** ./src/shared/lib/hooks/useInfiniteScroll/useInfiniteScroll.ts ***!
  \*********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useInfiniteScroll: () => (/* binding */ useInfiniteScroll)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");


function useInfiniteScroll(_a) {
    var callback = _a.callback, wrapperRef = _a.wrapperRef, triggerRef = _a.triggerRef;
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
        var observer = null;
        if (callback) {
            var options = {
                root: wrapperRef.current,
                rootMargin: '0px',
                threshold: 1.0
            };
            observer = new IntersectionObserver(function (_a) {
                var entry = _a[0];
                if (entry.isIntersecting) {
                    callback();
                }
            }, options);
            observer.observe(triggerRef.current);
            return function () {
                if (observer && triggerRef.current) {
                    // eslint-disable-next-line react-hooks/exhaustive-deps
                    observer.unobserve(triggerRef.current);
                }
            };
        }
    }, [wrapperRef, triggerRef, callback]);
}


const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (true) {
		let errorOverlay;
		if (typeof __react_refresh_error_overlay__ !== 'undefined') {
			errorOverlay = __react_refresh_error_overlay__;
		}
		let testMode;
		if (typeof __react_refresh_test__ !== 'undefined') {
			testMode = __react_refresh_test__;
		}
		return __react_refresh_utils__.executeRuntime(
			exports,
			$ReactRefreshModuleId$,
			module.hot,
			errorOverlay,
			testMode
		);
	}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ }),

/***/ "./src/shared/lib/hooks/useInitialEffect/useInitialEffect.ts":
/*!*******************************************************************!*\
  !*** ./src/shared/lib/hooks/useInitialEffect/useInitialEffect.ts ***!
  \*******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useInitialEffect: () => (/* binding */ useInitialEffect)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");


function useInitialEffect(callback) {
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
        if (true) {
            callback();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
}


const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (true) {
		let errorOverlay;
		if (typeof __react_refresh_error_overlay__ !== 'undefined') {
			errorOverlay = __react_refresh_error_overlay__;
		}
		let testMode;
		if (typeof __react_refresh_test__ !== 'undefined') {
			testMode = __react_refresh_test__;
		}
		return __react_refresh_utils__.executeRuntime(
			exports,
			$ReactRefreshModuleId$,
			module.hot,
			errorOverlay,
			testMode
		);
	}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ }),

/***/ "./src/shared/lib/hooks/useThrottle/useThrottle.ts":
/*!*********************************************************!*\
  !*** ./src/shared/lib/hooks/useThrottle/useThrottle.ts ***!
  \*********************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useThrottle: () => (/* binding */ useThrottle)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");


function useThrottle(callback, delay) {
    var throttleRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (!throttleRef.current) {
            callback.apply(void 0, args);
            throttleRef.current = true;
            setTimeout(function () {
                throttleRef.current = false;
            }, delay);
        }
    }, [callback, delay]);
}


const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (true) {
		let errorOverlay;
		if (typeof __react_refresh_error_overlay__ !== 'undefined') {
			errorOverlay = __react_refresh_error_overlay__;
		}
		let testMode;
		if (typeof __react_refresh_test__ !== 'undefined') {
			testMode = __react_refresh_test__;
		}
		return __react_refresh_utils__.executeRuntime(
			exports,
			$ReactRefreshModuleId$,
			module.hot,
			errorOverlay,
			testMode
		);
	}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX3dpZGdldHNfUGFnZV9QYWdlX3RzeC5lOTQ4YzZlYmM5MDA3OTNmNWY1MS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTZEO0FBQ3pCO0FBQ3FEO0FBQ0Q7QUFDVDtBQUNyQjtBQUNaO0FBQ3VDO0FBQzVDO0FBRTZCO0FBUXRFLElBQU1ZLElBQUksZ0JBQUFDLEVBQUEsZUFBR1gsMkNBQUksQ0FBQVksRUFBQSxHQUFBRCxFQUFBLENBQUMsVUFBQ0UsS0FBZ0I7RUFBQUYsRUFBQTtFQUN6QixJQUFBRyxFQUFBLEdBQTBDRCxLQUFLLENBQUFFLFNBQWpDO0lBQWRBLFNBQVMsR0FBQUQsRUFBQSxjQUFHLEVBQUUsR0FBQUEsRUFBQTtJQUFFRSxRQUFRLEdBQWtCSCxLQUFLLENBQUFHLFFBQXZCO0lBQUVDLFdBQVcsR0FBS0osS0FBSyxDQUFBSSxXQUFWO0VBQzdDLElBQU1DLFVBQVUsR0FBR2pCLDZDQUFNLEVBQXNDO0VBQy9ELElBQU1rQixVQUFVLEdBQUdsQiw2Q0FBTSxFQUFzQztFQUMvRCxJQUFNbUIsUUFBUSxHQUFHakIsOEZBQWMsRUFBRTtFQUN6QixJQUFBa0IsUUFBUSxHQUFLZiw4REFBVyxFQUFFLENBQUFlLFFBQWxCO0VBQ2hCLElBQU1DLGNBQWMsR0FBR2Qsd0RBQVcsQ0FBQyxVQUFDZSxLQUFrQjtJQUFLLE9BQUFuQiw4REFBaUIsQ0FBQ21CLEtBQUssRUFBRUYsUUFBUSxDQUFDO0VBQWxDLENBQWtDLENBQUM7RUFFOUZuQix1R0FBaUIsQ0FBQztJQUNoQmlCLFVBQVUsRUFBQUEsVUFBQTtJQUNWRCxVQUFVLEVBQUFBLFVBQUE7SUFDVk0sUUFBUSxFQUFFUDtHQUNYLENBQUM7RUFFRlYsb0dBQWdCLENBQUM7SUFDZlcsVUFBVSxDQUFDTyxPQUFPLENBQUNDLFNBQVMsR0FBR0osY0FBYztFQUMvQyxDQUFDLENBQUM7RUFFRixJQUFNSyxRQUFRLEdBQUdsQixxRkFBVyxDQUFDLFVBQUNtQixDQUEwQjtJ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Qy9CLFFBQVEsRUFBRTtTQUNYO1FBQ0gsdURBQXVEO0lBQ3ZELENBQUMsRUFBRSxFQUFFLENBQUM7QUFDUixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVDBDO0FBRXBDLFNBQVMsV0FBVyxDQUFFLFFBQWtDLEVBQUUsS0FBYTtJQUM1RSxJQUFNLFdBQVcsR0FBRyw2Q0FBTSxDQUFDLEtBQUssQ0FBQztJQUNqQyxPQUFPLGtEQUFXLENBQUM7UUFBQyxjQUFjO2FBQWQsVUFBYyxFQUFkLHFCQUFjLEVBQWQsSUFBYztZQUFkLHlCQUFjOztRQUNoQyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRTtZQUN4QixRQUFRLGVBQUksSUFBSSxFQUFDO1lBQ2pCLFdBQVcsQ0FBQyxPQUFPLEdBQUcsSUFBSTtZQUUxQixVQUFVLENBQUM7Z0JBQ1QsV0FBVyxDQUFDLE9BQU8sR0FBRyxLQUFLO1lBQzdCLENBQUMsRUFBRSxLQUFLLENBQUM7U0FDVjtJQUNILENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUMsQ0FBQztBQUN2QixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZmxvcmlzdGJ5Ly4vc3JjL3dpZGdldHMvUGFnZS9QYWdlLnRzeCIsIndlYnBhY2s6Ly9mbG9yaXN0YnkvLi9zcmMvd2lkZ2V0cy9QYWdlL1BhZ2UubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vZmxvcmlzdGJ5Ly4vc3JjL3dpZGdldHMvUGFnZS9QYWdlLm1vZHVsZS5zY3NzPzExMzQiLCJ3ZWJwYWNrOi8vZmxvcmlzdGJ5Ly4vc3JjL3NoYXJlZC9saWIvaG9va3MvdXNlSW5maW5pdGVTY3JvbGwvdXNlSW5maW5pdGVTY3JvbGwudHMiLCJ3ZWJwYWNrOi8vZmxvcmlzdGJ5Ly4vc3JjL3NoYXJlZC9saWIvaG9va3MvdXNlSW5pdGlhbEVmZmVjdC91c2VJbml0aWFsRWZmZWN0LnRzIiwid2VicGFjazovL2Zsb3Jpc3RieS8uL3NyYy9zaGFyZWQvbGliL2hvb2tzL3VzZVRocm90dGxlL3VzZVRocm90dGxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNsYXNzTmFtZXMgfSBmcm9tICdzaGFyZWQvbGliL2NsYXNzTmFtZXMvY2xhc3NOYW1lcydcclxuaW1wb3J0IGNscyBmcm9tICcuL1BhZ2UubW9kdWxlLnNjc3MnXHJcbmltcG9ydCB7IHR5cGUgUmVhY3ROb2RlLCBtZW1vLCB1c2VSZWYsIHR5cGUgTXV0YWJsZVJlZk9iamVjdCwgdHlwZSBVSUV2ZW50IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IHVzZUluZmluaXRlU2Nyb2xsIH0gZnJvbSAnc2hhcmVkL2xpYi9ob29rcy91c2VJbmZpbml0ZVNjcm9sbC91c2VJbmZpbml0ZVNjcm9sbCdcclxuaW1wb3J0IHsgdXNlQXBwRGlzcGF0Y2ggfSBmcm9tICdzaGFyZWQvbGliL2hvb2tzL3VzZUFwcERpc3BhdGNoL3VzZUFwcERpc3BhdGNoJ1xyXG5pbXBvcnQgeyBnZXRVSVNjcm9sbEJ5UGF0aCwgdWlBY3Rpb25zIH0gZnJvbSAnZmVhdHVyZXMvVUknXHJcbmltcG9ydCB7IHVzZUxvY2F0aW9uIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcclxuaW1wb3J0IHsgdXNlSW5pdGlhbEVmZmVjdCB9IGZyb20gJ3NoYXJlZC9saWIvaG9va3MvdXNlSW5pdGlhbEVmZmVjdC91c2VJbml0aWFsRWZmZWN0J1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQgeyB0eXBlIFN0YXRlU2NoZW1hIH0gZnJvbSAnYXBwL3Byb3ZpZGVycy9TdG9yZVByb3ZpZGVyJ1xyXG5pbXBvcnQgeyB1c2VUaHJvdHRsZSB9IGZyb20gJ3NoYXJlZC9saWIvaG9va3MvdXNlVGhyb3R0bGUvdXNlVGhyb3R0bGUnXHJcblxyXG5pbnRlcmZhY2UgUGFnZVByb3BzIHtcclxuICBjbGFzc05hbWU/OiBzdHJpbmdcclxuICBjaGlsZHJlbjogUmVhY3ROb2RlXHJcbiAgb25TY3JvbGxFbmQ/OiAoKSA9PiB2b2lkXHJcbn1cclxuXHJcbmNvbnN0IFBhZ2UgPSBtZW1vKChwcm9wczogUGFnZVByb3BzKSA9PiB7XHJcbiAgY29uc3QgeyBjbGFzc05hbWUgPSAnJywgY2hpbGRyZW4sIG9uU2Nyb2xsRW5kIH0gPSBwcm9wc1xyXG4gIGNvbnN0IHdyYXBwZXJSZWYgPSB1c2VSZWYoKSBhcyBNdXRhYmxlUmVmT2JqZWN0PEhUTUxEaXZFbGVtZW50PlxyXG4gIGNvbnN0IHRyaWdnZXJSZWYgPSB1c2VSZWYoKSBhcyBNdXRhYmxlUmVmT2JqZWN0PEhUTUxEaXZFbGVtZW50PlxyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlQXBwRGlzcGF0Y2goKVxyXG4gIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHVzZUxvY2F0aW9uKClcclxuICBjb25zdCBzY3JvbGxQb3NpdGlvbiA9IHVzZVNlbGVjdG9yKChzdGF0ZTogU3RhdGVTY2hlbWEpID0+IGdldFVJU2Nyb2xsQnlQYXRoKHN0YXRlLCBwYXRobmFtZSkpXHJcblxyXG4gIHVzZUluZmluaXRlU2Nyb2xsKHtcclxuICAgIHRyaWdnZXJSZWYsXHJcbiAgICB3cmFwcGVyUmVmLFxyXG4gICAgY2FsbGJhY2s6IG9uU2Nyb2xsRW5kXHJcbiAgfSlcclxuXHJcbiAgdXNlSW5pdGlhbEVmZmVjdCgoKSA9PiB7XHJcbiAgICB3cmFwcGVyUmVmLmN1cnJlbnQuc2Nyb2xsVG9wID0gc2Nyb2xsUG9zaXRpb25cclxuICB9KVxyXG5cclxuICBjb25zdCBvblNjcm9sbCA9IHVzZVRocm90dGxlKChlOiBVSUV2ZW50PEhUTUxEaXZFbGVtZW50PikgPT4ge1xyXG4gICAgY29uc29sZS5sb2coJ1NDUk9MTCcpXHJcbiAgICBkaXNwYXRjaCh1aUFjdGlvbnMuc2V0U2Nyb2xsUG9zaXRpb24oe1xyXG4gICAgICBwb3NpdGlvbjogZS5jdXJyZW50VGFyZ2V0LnNjcm9sbFRvcCxcclxuICAgICAgcGF0aDogcGF0aG5hbWVcclxuICAgIH0pKVxyXG4gIH0sIDUwMClcclxuXHJcbiAgcmV0dXJuIChcclxuICAgICAgPHNlY3Rpb25cclxuICAgICAgICAgIHJlZj17d3JhcHBlclJlZn1cclxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhjbHMuUGFnZSwge30sIFtjbGFzc05hbWVdKX1cclxuICAgICAgICAgIG9uU2Nyb2xsPXtvblNjcm9sbH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgICB7b25TY3JvbGxFbmRcclxuICAgICAgICAgICAgPyA8ZGl2IGNsYXNzTmFtZT17Y2xzLnRyaWdnZXJ9IHJlZj17dHJpZ2dlclJlZn0gLz5cclxuICAgICAgICAgICAgOiBudWxsXHJcbiAgICAgICAgICB9XHJcbiAgICAgIDwvc2VjdGlvbj5cclxuICApXHJcbn0pXHJcblxyXG5QYWdlLmRpc3BsYXlOYW1lID0gJ1BhZ2UnXHJcblxyXG5leHBvcnQgeyBQYWdlIH1cclxuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5zcmMtd2lkZ2V0cy1QYWdlLVBhZ2UtbW9kdWxlX19QYWdlLS1hODNqRCB7XG4gIGZsZXgtZ3JvdzogMTtcbiAgZmxleC1zaHJpbms6IDEwMDtcbiAgcGFkZGluZzogMjBweCAyMHB4IDIwcHggNDVweDtcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gdmFyKC0tbmF2YmFyLWhlaWdodCkpO1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG59XG5cbi5zcmMtd2lkZ2V0cy1QYWdlLVBhZ2UtbW9kdWxlX190cmlnZ2VyLS1WYVBRXyB7XG4gIGhlaWdodDogMjBweDtcbiAgbWFyZ2luOiAxMHB4O1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3dpZGdldHMvUGFnZS9QYWdlLm1vZHVsZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0ksWUFBQTtFQUNBLGdCQUFBO0VBQ0EsNEJBQUE7RUFDQSwwQ0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFFQTtFQUNJLFlBQUE7RUFDQSxZQUFBO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLlBhZ2Uge1xcclxcbiAgICBmbGV4LWdyb3c6IDE7XFxyXFxuICAgIGZsZXgtc2hyaW5rOiAxMDA7XFxyXFxuICAgIHBhZGRpbmc6IDIwcHggMjBweCAyMHB4IDQ1cHg7XFxyXFxuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIHZhcigtLW5hdmJhci1oZWlnaHQpKTtcXHJcXG4gICAgb3ZlcmZsb3cteTogYXV0bztcXHJcXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xcclxcbn1cXHJcXG5cXHJcXG4udHJpZ2dlciB7XFxyXFxuICAgIGhlaWdodDogMjBweDtcXHJcXG4gICAgbWFyZ2luOiAxMHB4O1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJQYWdlXCI6IGBzcmMtd2lkZ2V0cy1QYWdlLVBhZ2UtbW9kdWxlX19QYWdlLS1hODNqRGAsXG5cdFwidHJpZ2dlclwiOiBgc3JjLXdpZGdldHMtUGFnZS1QYWdlLW1vZHVsZV9fdHJpZ2dlci0tVmFQUV9gXG59O1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzRdLnVzZVsxXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9QYWdlLm1vZHVsZS5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cbmlmIChtb2R1bGUuaG90KSB7XG4gIGlmICghY29udGVudC5sb2NhbHMgfHwgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKSB7XG4gICAgdmFyIGlzRXF1YWxMb2NhbHMgPSBmdW5jdGlvbiBpc0VxdWFsTG9jYWxzKGEsIGIsIGlzTmFtZWRFeHBvcnQpIHtcbiAgaWYgKCFhICYmIGIgfHwgYSAmJiAhYikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgcDtcbiAgZm9yIChwIGluIGEpIHtcbiAgICBpZiAoaXNOYW1lZEV4cG9ydCAmJiBwID09PSBcImRlZmF1bHRcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgaWYgKGFbcF0gIT09IGJbcF0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgZm9yIChwIGluIGIpIHtcbiAgICBpZiAoaXNOYW1lZEV4cG9ydCAmJiBwID09PSBcImRlZmF1bHRcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgaWYgKCFhW3BdKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIHJldHVybiB0cnVlO1xufTtcbiAgICB2YXIgaXNOYW1lZEV4cG9ydCA9ICFjb250ZW50LmxvY2FscztcbiAgICB2YXIgb2xkTG9jYWxzID0gaXNOYW1lZEV4cG9ydCA/IG5hbWVkRXhwb3J0IDogY29udGVudC5sb2NhbHM7XG5cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcbiAgICAgIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1s0XS51c2VbMV0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vUGFnZS5tb2R1bGUuc2Nzc1wiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIWlzRXF1YWxMb2NhbHMob2xkTG9jYWxzLCBpc05hbWVkRXhwb3J0ID8gbmFtZWRFeHBvcnQgOiBjb250ZW50LmxvY2FscywgaXNOYW1lZEV4cG9ydCkpIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUuaG90LmludmFsaWRhdGUoKTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIG9sZExvY2FscyA9IGlzTmFtZWRFeHBvcnQgPyBuYW1lZEV4cG9ydCA6IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgICAgICAgICAgIHVwZGF0ZShjb250ZW50KTtcbiAgICAgIH1cbiAgICApXG4gIH1cblxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7XG4gICAgdXBkYXRlKCk7XG4gIH0pO1xufVxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzRdLnVzZVsxXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9QYWdlLm1vZHVsZS5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiaW1wb3J0IHsgdHlwZSBNdXRhYmxlUmVmT2JqZWN0LCB1c2VSZWYsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBVc2VJbmZpbml0ZVNjcm9sbE9wdGlvbnMge1xyXG4gIGNhbGxiYWNrPzogKCkgPT4gdm9pZFxyXG4gIHRyaWdnZXJSZWY6IE11dGFibGVSZWZPYmplY3Q8SFRNTEVsZW1lbnQ+XHJcbiAgd3JhcHBlclJlZjogTXV0YWJsZVJlZk9iamVjdDxIVE1MRWxlbWVudD5cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VJbmZpbml0ZVNjcm9sbCAoeyBjYWxsYmFjaywgd3JhcHBlclJlZiwgdHJpZ2dlclJlZiB9OiBVc2VJbmZpbml0ZVNjcm9sbE9wdGlvbnMpIHtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbGV0IG9ic2VydmVyOiBJbnRlcnNlY3Rpb25PYnNlcnZlciB8IG51bGwgPSBudWxsXHJcblxyXG4gICAgaWYgKGNhbGxiYWNrKSB7XHJcbiAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XHJcbiAgICAgICAgcm9vdDogd3JhcHBlclJlZi5jdXJyZW50LFxyXG4gICAgICAgIHJvb3RNYXJnaW46ICcwcHgnLFxyXG4gICAgICAgIHRocmVzaG9sZDogMS4wXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKChbZW50cnldKSA9PiB7XHJcbiAgICAgICAgaWYgKGVudHJ5LmlzSW50ZXJzZWN0aW5nKSB7XHJcbiAgICAgICAgICBjYWxsYmFjaygpXHJcbiAgICAgICAgfVxyXG4gICAgICB9LCBvcHRpb25zKVxyXG5cclxuICAgICAgb2JzZXJ2ZXIub2JzZXJ2ZSh0cmlnZ2VyUmVmLmN1cnJlbnQpXHJcblxyXG4gICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgIGlmIChvYnNlcnZlciAmJiB0cmlnZ2VyUmVmLmN1cnJlbnQpIHtcclxuICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9leGhhdXN0aXZlLWRlcHNcclxuICAgICAgICAgIG9ic2VydmVyLnVub2JzZXJ2ZSh0cmlnZ2VyUmVmLmN1cnJlbnQpXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSwgW3dyYXBwZXJSZWYsIHRyaWdnZXJSZWYsIGNhbGxiYWNrXSlcclxufVxyXG4iLCJpbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VJbml0aWFsRWZmZWN0IChjYWxsYmFjazogKCkgPT4gdm9pZCkge1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoX19QUk9KRUNUX18gIT09ICdzdG9yeWJvb2snKSB7XHJcbiAgICAgIGNhbGxiYWNrKClcclxuICAgIH1cclxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvZXhoYXVzdGl2ZS1kZXBzXHJcbiAgfSwgW10pXHJcbn1cclxuIiwiaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZVJlZiB9IGZyb20gJ3JlYWN0J1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHVzZVRocm90dGxlIChjYWxsYmFjazogKC4uLmFyZ3M6IGFueVtdKSA9PiB2b2lkLCBkZWxheTogbnVtYmVyKSB7XHJcbiAgY29uc3QgdGhyb3R0bGVSZWYgPSB1c2VSZWYoZmFsc2UpXHJcbiAgcmV0dXJuIHVzZUNhbGxiYWNrKCguLi5hcmdzOiBhbnlbXSkgPT4ge1xyXG4gICAgaWYgKCF0aHJvdHRsZVJlZi5jdXJyZW50KSB7XHJcbiAgICAgIGNhbGxiYWNrKC4uLmFyZ3MpXHJcbiAgICAgIHRocm90dGxlUmVmLmN1cnJlbnQgPSB0cnVlXHJcblxyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICB0aHJvdHRsZVJlZi5jdXJyZW50ID0gZmFsc2VcclxuICAgICAgfSwgZGVsYXkpXHJcbiAgICB9XHJcbiAgfSwgW2NhbGxiYWNrLCBkZWxheV0pXHJcbn1cclxuIl0sIm5hbWVzIjpbImNsYXNzTmFtZXMiLCJjbHMiLCJtZW1vIiwidXNlUmVmIiwidXNlSW5maW5pdGVTY3JvbGwiLCJ1c2VBcHBEaXNwYXRjaCIsImdldFVJU2Nyb2xsQnlQYXRoIiwidWlBY3Rpb25zIiwidXNlTG9jYXRpb24iLCJ1c2VJbml0aWFsRWZmZWN0IiwidXNlU2VsZWN0b3IiLCJ1c2VUaHJvdHRsZSIsIlBhZ2UiLCJfcyIsIl9jIiwicHJvcHMiLCJfYSIsImNsYXNzTmFtZSIsImNoaWxkcmVuIiwib25TY3JvbGxFbmQiLCJ3cmFwcGVyUmVmIiwidHJpZ2dlclJlZiIsImRpc3BhdGNoIiwicGF0aG5hbWUiLCJzY3JvbGxQb3NpdGlvbiIsInN0YXRlIiwiY2FsbGJhY2siLCJjdXJyZW50Iiwic2Nyb2xsVG9wIiwib25TY3JvbGwiLCJlIiwiY29uc29sZSIsImxvZyIsInNldFNjcm9sbFBvc2l0aW9uIiwicG9zaXRpb24iLCJjdXJyZW50VGFyZ2V0IiwicGF0aCIsIl9qc3hzIiwicmVmIiwiX2pzeCIsInRyaWdnZXIiLCJfYzIiLCJkaXNwbGF5TmFtZSIsIiRSZWZyZXNoUmVnJCJdLCJzb3VyY2VSb290IjoiIn0=