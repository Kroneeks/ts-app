"use strict";
(self["webpackChunkfloristby"] = self["webpackChunkfloristby"] || []).push([["src_features_AddCommentForm_ui_AddCommentForm_AddCommentForm_tsx"],{

/***/ "./src/features/AddCommentForm/ui/AddCommentForm/AddCommentForm.tsx":
/*!**************************************************************************!*\
  !*** ./src/features/AddCommentForm/ui/AddCommentForm/AddCommentForm.tsx ***!
  \**************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var shared_lib_classNames_classNames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shared/lib/classNames/classNames */ "./src/shared/lib/classNames/classNames.ts");
/* harmony import */ var _AddCommentForm_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AddCommentForm.module.scss */ "./src/features/AddCommentForm/ui/AddCommentForm/AddCommentForm.module.scss");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var shared_ui_Button_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! shared/ui/Button/Button */ "./src/shared/ui/Button/Button.tsx");
/* harmony import */ var shared_ui_Input_Input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! shared/ui/Input/Input */ "./src/shared/ui/Input/Input.tsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _model_selectors_addCommentFormSelectors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../model/selectors/addCommentFormSelectors */ "./src/features/AddCommentForm/model/selectors/addCommentFormSelectors.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var shared_lib_hooks_useAppDispatch_useAppDispatch__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! shared/lib/hooks/useAppDispatch/useAppDispatch */ "./src/shared/lib/hooks/useAppDispatch/useAppDispatch.ts");
/* harmony import */ var _model_slices_addCommentFormSlice__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../model/slices/addCommentFormSlice */ "./src/features/AddCommentForm/model/slices/addCommentFormSlice.ts");
/* harmony import */ var shared_lib_components_DynamicModuleLoader_DynamicModuleLoader__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! shared/lib/components/DynamicModuleLoader/DynamicModuleLoader */ "./src/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader.tsx");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

var _s = __webpack_require__.$Refresh$.signature();












var reducers = {
  addCommentForm: _model_slices_addCommentFormSlice__WEBPACK_IMPORTED_MODULE_10__.addCommentFormReducer
};
var AddCommentForm = function AddCommentForm(props) {
  _s();
  var _a = props.className,
    className = _a === void 0 ? '' : _a,
    onSendComment = props.onSendComment;
  var t = (0,react_i18next__WEBPACK_IMPORTED_MODULE_3__.useTranslation)().t;
  var text = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector)(_model_selectors_addCommentFormSelectors__WEBPACK_IMPORTED_MODULE_7__.getAddCommentFormText);
  var dispatch = (0,shared_lib_hooks_useAppDispatch_useAppDispatch__WEBPACK_IMPORTED_MODULE_9__.useAppDispatch)();
  var onCommentTextChange = (0,react__WEBPACK_IMPORTED_MODULE_8__.useCallback)(function (value) {
    void dispatch(_model_slices_addCommentFormSlice__WEBPACK_IMPORTED_MODULE_10__.addCommentFormActions.setText(value));
  }, [dispatch]);
  var onSendHandler = (0,react__WEBPACK_IMPORTED_MODULE_8__.useCallback)(function () {
    onSendComment(text !== null && text !== void 0 ? text : '');
    onCommentTextChange('');
  }, [onCommentTextChange, onSendComment, text]);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(shared_lib_components_DynamicModuleLoader_DynamicModuleLoader__WEBPACK_IMPORTED_MODULE_11__.DynamicModuleLoader, {
    reducers: reducers,
    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
      className: (0,shared_lib_classNames_classNames__WEBPACK_IMPORTED_MODULE_1__.classNames)(_AddCommentForm_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].AddCommentForm, {}, [className]),
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(shared_ui_Input_Input__WEBPACK_IMPORTED_MODULE_5__.Input, {
        className: _AddCommentForm_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].input,
        value: text,
        onChange: onCommentTextChange,
        placeholder: t('Введите текст комментария')
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(shared_ui_Button_Button__WEBPACK_IMPORTED_MODULE_4__.Button, {
        onClick: onSendHandler,
        children: t('Отправить')
      })]
    })
  });
};
_s(AddCommentForm, "CoDE77MobCggpFjhV/mIcP6V1Dw=", false, function () {
  return [react_i18next__WEBPACK_IMPORTED_MODULE_3__.useTranslation, react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector, shared_lib_hooks_useAppDispatch_useAppDispatch__WEBPACK_IMPORTED_MODULE_9__.useAppDispatch];
});
_c = AddCommentForm;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AddCommentForm);
var _c;
__webpack_require__.$Refresh$.register(_c, "AddCommentForm");

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

/***/ "./src/shared/ui/Input/Input.tsx":
/*!***************************************!*\
  !*** ./src/shared/ui/Input/Input.tsx ***!
  \***************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Input: () => (/* binding */ Input)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var shared_lib_classNames_classNames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shared/lib/classNames/classNames */ "./src/shared/lib/classNames/classNames.ts");
/* harmony import */ var _Input_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Input.module.scss */ "./src/shared/ui/Input/Input.module.scss");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};




var Input = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_3__.memo)(_c2 = function _c2(props) {
  var _a;
  var _b = props.className,
    className = _b === void 0 ? '' : _b,
    _c = props.value,
    value = _c === void 0 ? '' : _c,
    _d = props.type,
    type = _d === void 0 ? 'text' : _d,
    _e = props.placeholder,
    placeholder = _e === void 0 ? '' : _e,
    onChange = props.onChange,
    _f = props.readonly,
    readonly = _f === void 0 ? false : _f,
    otherProps = __rest(props, ["className", "value", "type", "placeholder", "onChange", "readonly"]);
  var onChangeHandler = function onChangeHandler(e) {
    onChange === null || onChange === void 0 ? void 0 : onChange(e.target.value);
  };
  var mods = (_a = {}, _a[_Input_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].readonly] = readonly, _a);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
    className: (0,shared_lib_classNames_classNames__WEBPACK_IMPORTED_MODULE_1__.classNames)(_Input_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].Input, mods, [className]),
    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", {
      type: type,
      value: value,
      readOnly: readonly,
      onChange: onChangeHandler,
      placeholder: placeholder
    })
  });
});
_c3 = Input;
Input.displayName = 'Input';

var _c2, _c3;
__webpack_require__.$Refresh$.register(_c2, "Input$memo");
__webpack_require__.$Refresh$.register(_c3, "Input");

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

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/features/AddCommentForm/ui/AddCommentForm/AddCommentForm.module.scss":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/features/AddCommentForm/ui/AddCommentForm/AddCommentForm.module.scss ***!
  \*******************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.src-features-AddCommentForm-ui-AddCommentForm-AddCommentForm-module__AddCommentForm--nkW6H {
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid var(--primary-color);
}

.src-features-AddCommentForm-ui-AddCommentForm-AddCommentForm-module__input--HKMyW {
  flex-grow: 1;
}`, "",{"version":3,"sources":["webpack://./src/features/AddCommentForm/ui/AddCommentForm/AddCommentForm.module.scss"],"names":[],"mappings":"AAAA;EACI,aAAA;EACA,aAAA;EACA,8BAAA;EACA,mBAAA;EACA,sCAAA;AACJ;;AAEA;EACI,YAAA;AACJ","sourcesContent":[".AddCommentForm {\r\n    padding: 20px;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    border: 1px solid var(--primary-color)\r\n}\r\n\r\n.input {\r\n    flex-grow: 1;\r\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"AddCommentForm": `src-features-AddCommentForm-ui-AddCommentForm-AddCommentForm-module__AddCommentForm--nkW6H`,
	"input": `src-features-AddCommentForm-ui-AddCommentForm-AddCommentForm-module__input--HKMyW`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/shared/ui/Input/Input.module.scss":
/*!********************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/shared/ui/Input/Input.module.scss ***!
  \********************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.src-shared-ui-Input-Input-module__Input--X8EVb {
  margin-top: 10px;
}

.src-shared-ui-Input-Input-module__Input--X8EVb input {
  padding: 10px;
  border: 2px solid var(--primary-color);
  border-radius: 10px;
}

.src-shared-ui-Input-Input-module__readonly--fTN1P {
  border: 2px solid transparent;
  opacity: 0.7;
}
.src-shared-ui-Input-Input-module__readonly--fTN1P input {
  border: none;
  background: none;
  outline: none;
}`, "",{"version":3,"sources":["webpack://./src/shared/ui/Input/Input.module.scss"],"names":[],"mappings":"AAAA;EACI,gBAAA;AACJ;;AAEA;EACI,aAAA;EACA,sCAAA;EACA,mBAAA;AACJ;;AAEA;EACI,6BAAA;EACA,YAAA;AACJ;AACI;EACI,YAAA;EACA,gBAAA;EACA,aAAA;AACR","sourcesContent":[".Input {\r\n    margin-top: 10px;\r\n}\r\n\r\n.Input input {\r\n    padding: 10px;\r\n    border: 2px solid var(--primary-color);\r\n    border-radius: 10px;\r\n}\r\n\r\n.readonly {\r\n    border: 2px solid transparent;\r\n    opacity: 0.7;\r\n\r\n    input {\r\n        border: none;\r\n        background: none;\r\n        outline: none;\r\n    }\r\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"Input": `src-shared-ui-Input-Input-module__Input--X8EVb`,
	"readonly": `src-shared-ui-Input-Input-module__readonly--fTN1P`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/features/AddCommentForm/ui/AddCommentForm/AddCommentForm.module.scss":
/*!**********************************************************************************!*\
  !*** ./src/features/AddCommentForm/ui/AddCommentForm/AddCommentForm.module.scss ***!
  \**********************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_AddCommentForm_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!../../../../../node_modules/sass-loader/dist/cjs.js!./AddCommentForm.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/features/AddCommentForm/ui/AddCommentForm/AddCommentForm.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_AddCommentForm_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);


if (true) {
  if (!_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_AddCommentForm_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals || module.hot.invalidate) {
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
    var isNamedExport = !_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_AddCommentForm_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;
    var oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_AddCommentForm_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_AddCommentForm_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

    module.hot.accept(
      /*! !!../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!../../../../../node_modules/sass-loader/dist/cjs.js!./AddCommentForm.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/features/AddCommentForm/ui/AddCommentForm/AddCommentForm.module.scss",
      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_AddCommentForm_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!../../../../../node_modules/sass-loader/dist/cjs.js!./AddCommentForm.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/features/AddCommentForm/ui/AddCommentForm/AddCommentForm.module.scss");
(function () {
        if (!isEqualLocals(oldLocals, isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_AddCommentForm_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_AddCommentForm_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals, isNamedExport)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_AddCommentForm_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_AddCommentForm_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

              update(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_AddCommentForm_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"]);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}



       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_AddCommentForm_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_AddCommentForm_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_AddCommentForm_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/shared/ui/Input/Input.module.scss":
/*!***********************************************!*\
  !*** ./src/shared/ui/Input/Input.module.scss ***!
  \***********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Input_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!../../../../node_modules/sass-loader/dist/cjs.js!./Input.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/shared/ui/Input/Input.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Input_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);


if (true) {
  if (!_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Input_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals || module.hot.invalidate) {
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
    var isNamedExport = !_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Input_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;
    var oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Input_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Input_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

    module.hot.accept(
      /*! !!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!../../../../node_modules/sass-loader/dist/cjs.js!./Input.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/shared/ui/Input/Input.module.scss",
      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Input_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!../../../../node_modules/sass-loader/dist/cjs.js!./Input.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/shared/ui/Input/Input.module.scss");
(function () {
        if (!isEqualLocals(oldLocals, isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Input_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Input_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals, isNamedExport)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Input_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Input_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

              update(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Input_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"]);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}



       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Input_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Input_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Input_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/features/AddCommentForm/model/selectors/addCommentFormSelectors.ts":
/*!********************************************************************************!*\
  !*** ./src/features/AddCommentForm/model/selectors/addCommentFormSelectors.ts ***!
  \********************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getAddCommentFormError: () => (/* binding */ getAddCommentFormError),
/* harmony export */   getAddCommentFormIsLoading: () => (/* binding */ getAddCommentFormIsLoading),
/* harmony export */   getAddCommentFormText: () => (/* binding */ getAddCommentFormText)
/* harmony export */ });
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

var getAddCommentFormText = function (state) { var _a, _b; return (_b = (_a = state === null || state === void 0 ? void 0 : state.addCommentForm) === null || _a === void 0 ? void 0 : _a.text) !== null && _b !== void 0 ? _b : ''; };
var getAddCommentFormError = function (state) { var _a; return (_a = state === null || state === void 0 ? void 0 : state.addCommentForm) === null || _a === void 0 ? void 0 : _a.error; };
var getAddCommentFormIsLoading = function (state) { var _a; return (_a = state === null || state === void 0 ? void 0 : state.addCommentForm) === null || _a === void 0 ? void 0 : _a.isLoading; };


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

/***/ "./src/features/AddCommentForm/model/slices/addCommentFormSlice.ts":
/*!*************************************************************************!*\
  !*** ./src/features/AddCommentForm/model/slices/addCommentFormSlice.ts ***!
  \*************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addCommentFormActions: () => (/* binding */ addCommentFormActions),
/* harmony export */   addCommentFormReducer: () => (/* binding */ addCommentFormReducer),
/* harmony export */   addCommentFormSlice: () => (/* binding */ addCommentFormSlice)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");


var initialState = {
    text: undefined,
    error: undefined,
    isLoading: false
};
var addCommentFormSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: 'addCommentForm',
    initialState: initialState,
    reducers: {
        setText: function (state, action) {
            state.text = action.payload;
        },
        setError: function (state, action) {
            state.error = action.payload;
        }
    }
    // extraReducers: (builder) => {
    // builder.addCase(loginByUsername.pending, (state, action) => {
    // state.error = undefined
    // state.isLoading = true
    // })
    // builder.addCase(loginByUsername.fulfilled, (state, action) => {
    // state.isLoading = false
    // })
    // builder.addCase(loginByUsername.rejected, (state, action) => {
    // state.isLoading = false
    // state.error = action.payload as string
    // })
    // }
});
var addCommentFormActions = addCommentFormSlice.actions;
var addCommentFormReducer = addCommentFormSlice.reducer;


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2ZlYXR1cmVzX0FkZENvbW1lbnRGb3JtX3VpX0FkZENvbW1lbnRGb3JtX0FkZENvbW1lbnRGb3JtX3RzeC41MTY4NmI0NzgwMTBhZDI5NTY1Mi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUE2RDtBQUNmO0FBQ0E7QUFDRTtBQUNIO0FBQ0o7QUFDNEM7QUFDbEQ7QUFDNEM7QUFDc0I7QUFDaUI7QUFPdEgsSUFBTVksUUFBUSxHQUFpQjtFQUM3QkMsY0FBYyxFQUFFSCxxRkFBcUJBO0NBQ3RDO0FBRUQsSUFBTUksY0FBYyxHQUFHLFNBQWpCQSxjQUFjQSxDQUFJQyxLQUEwQjtFQUFBQyxFQUFBO0VBQ3hDLElBQUFDLEVBQUEsR0FBa0NGLEtBQUssQ0FBQUcsU0FBekI7SUFBZEEsU0FBUyxHQUFBRCxFQUFBLGNBQUcsRUFBRSxHQUFBQSxFQUFBO0lBQUVFLGFBQWEsR0FBS0osS0FBSyxDQUFBSSxhQUFWO0VBQzdCLElBQUFDLENBQUMsR0FBS2xCLDZEQUFjLEVBQUUsQ0FBQWtCLENBQXJCO0VBQ1QsSUFBTUMsSUFBSSxHQUFHaEIsd0RBQVcsQ0FBQ0MsMkZBQXFCLENBQUM7RUFDL0MsSUFBTWdCLFFBQVEsR0FBR2QsOEZBQWMsRUFBRTtFQUVqQyxJQUFNZSxtQkFBbUIsR0FBR2hCLGtEQUFXLENBQUMsVUFBQ2lCLEtBQWE7SUFDcEQsS0FBS0YsUUFBUSxDQUFDYixxRkFBcUIsQ0FBQ2dCLE9BQU8sQ0FBQ0QsS0FBSyxDQUFDLENBQUM7RUFDckQsQ0FBQyxFQUFFLENBQUNGLFFBQVEsQ0FBQyxDQUFDO0VBRWQsSUFBTUksYUFBYSxHQUFHbkIsa0RBQVcsQ0FBQztJQUNoQ1ksYUFBYSxDQUFDRSxJQUFJLGFBQUpBLElBQUksY0FBSkEsSUFBSSxHQUFJLEVBQUUsQ0FBQztJQUN6QkUsbUJBQW1CLENBQUMsRUFBRSxDQUFDO0VBQ3pCLENBQUMsRUFBRSxDQUFDQSxtQkFBbUIsRUFBRUosYUFBYSxFQUFFRSxJQUFJLENB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Q0poQztBQUdsRSxJQUFNLFlBQVksR0FBeUI7SUFDekMsSUFBSSxFQUFFLFNBQVM7SUFDZixLQUFLLEVBQUUsU0FBUztJQUNoQixTQUFTLEVBQUUsS0FBSztDQUNqQjtBQUVNLElBQU0sbUJBQW1CLEdBQUcsNkRBQVcsQ0FBQztJQUM3QyxJQUFJLEVBQUUsZ0JBQWdCO0lBQ3RCLFlBQVk7SUFDWixRQUFRLEVBQUU7UUFDUixPQUFPLEVBQUUsVUFBQyxLQUFLLEVBQUUsTUFBNkI7WUFDNUMsS0FBSyxDQUFDLElBQUksR0FBRyxNQUFNLENBQUMsT0FBTztRQUM3QixDQUFDO1FBQ0QsUUFBUSxFQUFFLFVBQUMsS0FBSyxFQUFFLE1BQTZCO1lBQzdDLEtBQUssQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLE9BQU87UUFDOUIsQ0FBQztLQUNGO0lBQ0QsZ0NBQWdDO0lBQ2hDLGdFQUFnRTtJQUNoRSwwQkFBMEI7SUFDMUIseUJBQXlCO0lBQ3pCLEtBQUs7SUFDTCxrRUFBa0U7SUFDbEUsMEJBQTBCO0lBQzFCLEtBQUs7SUFDTCxpRUFBaUU7SUFDakUsMEJBQTBCO0lBQzFCLHlDQUF5QztJQUN6QyxLQUFLO0lBQ0wsSUFBSTtDQUNMLENBQUM7QUFFYSxJQUFTLHFCQUFxQixHQUFLLG1CQUFtQixRQUF4QixDQUF3QjtBQUN0RCxJQUFTLHFCQUFxQixHQUFLLG1CQUFtQixRQUF4QixDQUF3QiIsInNvdXJjZXMiOlsid2VicGFjazovL2Zsb3Jpc3RieS8uL3NyYy9mZWF0dXJlcy9BZGRDb21tZW50Rm9ybS91aS9BZGRDb21tZW50Rm9ybS9BZGRDb21tZW50Rm9ybS50c3giLCJ3ZWJwYWNrOi8vZmxvcmlzdGJ5Ly4vc3JjL3NoYXJlZC91aS9JbnB1dC9JbnB1dC50c3giLCJ3ZWJwYWNrOi8vZmxvcmlzdGJ5Ly4vc3JjL2ZlYXR1cmVzL0FkZENvbW1lbnRGb3JtL3VpL0FkZENvbW1lbnRGb3JtL0FkZENvbW1lbnRGb3JtLm1vZHVsZS5zY3NzIiwid2VicGFjazovL2Zsb3Jpc3RieS8uL3NyYy9zaGFyZWQvdWkvSW5wdXQvSW5wdXQubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vZmxvcmlzdGJ5Ly4vc3JjL2ZlYXR1cmVzL0FkZENvbW1lbnRGb3JtL3VpL0FkZENvbW1lbnRGb3JtL0FkZENvbW1lbnRGb3JtLm1vZHVsZS5zY3NzPzI2OWUiLCJ3ZWJwYWNrOi8vZmxvcmlzdGJ5Ly4vc3JjL3NoYXJlZC91aS9JbnB1dC9JbnB1dC5tb2R1bGUuc2Nzcz80ZTIxIiwid2VicGFjazovL2Zsb3Jpc3RieS8uL3NyYy9mZWF0dXJlcy9BZGRDb21tZW50Rm9ybS9tb2RlbC9zZWxlY3RvcnMvYWRkQ29tbWVudEZvcm1TZWxlY3RvcnMudHMiLCJ3ZWJwYWNrOi8vZmxvcmlzdGJ5Ly4vc3JjL2ZlYXR1cmVzL0FkZENvbW1lbnRGb3JtL21vZGVsL3NsaWNlcy9hZGRDb21tZW50Rm9ybVNsaWNlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNsYXNzTmFtZXMgfSBmcm9tICdzaGFyZWQvbGliL2NsYXNzTmFtZXMvY2xhc3NOYW1lcydcclxuaW1wb3J0IGNscyBmcm9tICcuL0FkZENvbW1lbnRGb3JtLm1vZHVsZS5zY3NzJ1xyXG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJ3JlYWN0LWkxOG5leHQnXHJcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJ3NoYXJlZC91aS9CdXR0b24vQnV0dG9uJ1xyXG5pbXBvcnQgeyBJbnB1dCB9IGZyb20gJ3NoYXJlZC91aS9JbnB1dC9JbnB1dCdcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuaW1wb3J0IHsgZ2V0QWRkQ29tbWVudEZvcm1UZXh0IH0gZnJvbSAnLi4vLi4vbW9kZWwvc2VsZWN0b3JzL2FkZENvbW1lbnRGb3JtU2VsZWN0b3JzJ1xyXG5pbXBvcnQgeyB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyB1c2VBcHBEaXNwYXRjaCB9IGZyb20gJ3NoYXJlZC9saWIvaG9va3MvdXNlQXBwRGlzcGF0Y2gvdXNlQXBwRGlzcGF0Y2gnXHJcbmltcG9ydCB7IGFkZENvbW1lbnRGb3JtQWN0aW9ucywgYWRkQ29tbWVudEZvcm1SZWR1Y2VyIH0gZnJvbSAnLi4vLi4vbW9kZWwvc2xpY2VzL2FkZENvbW1lbnRGb3JtU2xpY2UnXHJcbmltcG9ydCB7IER5bmFtaWNNb2R1bGVMb2FkZXIsIHR5cGUgUmVkdWNlcnNMaXN0IH0gZnJvbSAnc2hhcmVkL2xpYi9jb21wb25lbnRzL0R5bmFtaWNNb2R1bGVMb2FkZXIvRHluYW1pY01vZHVsZUxvYWRlcidcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQWRkQ29tbWVudEZvcm1Qcm9wcyB7XHJcbiAgY2xhc3NOYW1lPzogc3RyaW5nXHJcbiAgb25TZW5kQ29tbWVudDogKHRleHQ6IHN0cmluZykgPT4gdm9pZFxyXG59XHJcblxyXG5jb25zdCByZWR1Y2VyczogUmVkdWNlcnNMaXN0ID0ge1xyXG4gIGFkZENvbW1lbnRGb3JtOiBhZGRDb21tZW50Rm9ybVJlZHVjZXJcclxufVxyXG5cclxuY29uc3QgQWRkQ29tbWVudEZvcm0gPSAocHJvcHM6IEFkZENvbW1lbnRGb3JtUHJvcHMpID0+IHtcclxuICBjb25zdCB7IGNsYXNzTmFtZSA9ICcnLCBvblNlbmRDb21tZW50IH0gPSBwcm9wc1xyXG4gIGNvbnN0IHsgdCB9ID0gdXNlVHJhbnNsYXRpb24oKVxyXG4gIGNvbnN0IHRleHQgPSB1c2VTZWxlY3RvcihnZXRBZGRDb21tZW50Rm9ybVRleHQpXHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VBcHBEaXNwYXRjaCgpXHJcblxyXG4gIGNvbnN0IG9uQ29tbWVudFRleHRDaGFuZ2UgPSB1c2VDYWxsYmFjaygodmFsdWU6IHN0cmluZykgPT4ge1xyXG4gICAgdm9pZCBkaXNwYXRjaChhZGRDb21tZW50Rm9ybUFjdGlvbnMuc2V0VGV4dCh2YWx1ZSkpXHJcbiAgfSwgW2Rpc3BhdGNoXSlcclxuXHJcbiAgY29uc3Qgb25TZW5kSGFuZGxlciA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIG9uU2VuZENvbW1lbnQodGV4dCA/PyAnJylcclxuICAgIG9uQ29tbWVudFRleHRDaGFuZ2UoJycpXHJcbiAgfSwgW29uQ29tbWVudFRleHRDaGFuZ2UsIG9uU2VuZENvbW1lbnQsIHRleHRdKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgICA8RHluYW1pY01vZHVsZUxvYWRlciByZWR1Y2Vycz17cmVkdWNlcnN9PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZXMoY2xzLkFkZENvbW1lbnRGb3JtLCB7fSwgW2NsYXNzTmFtZV0pfT5cclxuICAgICAgICAgICAgICA8SW5wdXQgY2xhc3NOYW1lPXtjbHMuaW5wdXR9IHZhbHVlPXt0ZXh0fSBvbkNoYW5nZT17b25Db21tZW50VGV4dENoYW5nZX0gcGxhY2Vob2xkZXI9e3QoJ9CS0LLQtdC00LjRgtC1INGC0LXQutGB0YIg0LrQvtC80LzQtdC90YLQsNGA0LjRjycpfSAvPlxyXG4gICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17b25TZW5kSGFuZGxlcn0+e3QoJ9Ce0YLQv9GA0LDQstC40YLRjCcpfTwvQnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvRHluYW1pY01vZHVsZUxvYWRlcj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFkZENvbW1lbnRGb3JtXHJcbiIsImltcG9ydCB7IHR5cGUgTW9kcywgY2xhc3NOYW1lcyB9IGZyb20gJ3NoYXJlZC9saWIvY2xhc3NOYW1lcy9jbGFzc05hbWVzJ1xyXG5pbXBvcnQgY2xzIGZyb20gJy4vSW5wdXQubW9kdWxlLnNjc3MnXHJcbmltcG9ydCB7IG1lbW8sIHR5cGUgSW5wdXRIVE1MQXR0cmlidXRlcywgdHlwZSBGQyB9IGZyb20gJ3JlYWN0J1xyXG5cclxudHlwZSBIVE1MSW5wdXRQcm9wcyA9IE9taXQ8SW5wdXRIVE1MQXR0cmlidXRlczxIVE1MSW5wdXRFbGVtZW50PiwgJ3ZhbHVlJyB8ICdvbkNoYW5nZScgfCAndHlwZScgfCAncmVhZE9ubHknPlxyXG5cclxuaW50ZXJmYWNlIElucHV0UHJvcHMgZXh0ZW5kcyBIVE1MSW5wdXRQcm9wcyB7XHJcbiAgY2xhc3NOYW1lPzogc3RyaW5nXHJcbiAgdmFsdWU/OiBzdHJpbmcgfCBudW1iZXJcclxuICB0eXBlPzogc3RyaW5nXHJcbiAgb25DaGFuZ2U/OiAodmFsdWU6IHN0cmluZykgPT4gdm9pZFxyXG4gIHJlYWRvbmx5PzogYm9vbGVhblxyXG4gIHBsYWNlaG9sZGVyPzogc3RyaW5nXHJcbn1cclxuXHJcbmNvbnN0IElucHV0OiBGQzxJbnB1dFByb3BzPiA9IG1lbW8oKHByb3BzOiBJbnB1dFByb3BzKSA9PiB7XHJcbiAgY29uc3QgeyBjbGFzc05hbWUgPSAnJywgdmFsdWUgPSAnJywgdHlwZSA9ICd0ZXh0JywgcGxhY2Vob2xkZXIgPSAnJywgb25DaGFuZ2UsIHJlYWRvbmx5ID0gZmFsc2UsIC4uLm90aGVyUHJvcHMgfSA9IHByb3BzXHJcblxyXG4gIGNvbnN0IG9uQ2hhbmdlSGFuZGxlciA9IChlOiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xyXG4gICAgb25DaGFuZ2U/LihlLnRhcmdldC52YWx1ZSlcclxuICB9XHJcblxyXG4gIGNvbnN0IG1vZHM6IE1vZHMgPSB7XHJcbiAgICBbY2xzLnJlYWRvbmx5XTogcmVhZG9ubHlcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWVzKGNscy5JbnB1dCwgbW9kcywgW2NsYXNzTmFtZV0pfT5cclxuICAgICAgICAgIDxpbnB1dCB0eXBlPXt0eXBlfSB2YWx1ZT17dmFsdWV9IHJlYWRPbmx5PXtyZWFkb25seX0gb25DaGFuZ2U9e29uQ2hhbmdlSGFuZGxlcn0gcGxhY2Vob2xkZXI9e3BsYWNlaG9sZGVyfSAvPlxyXG4gICAgICA8L2Rpdj5cclxuICApXHJcbn0pXHJcblxyXG5JbnB1dC5kaXNwbGF5TmFtZSA9ICdJbnB1dCdcclxuXHJcbmV4cG9ydCB7IElucHV0IH1cclxuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5zcmMtZmVhdHVyZXMtQWRkQ29tbWVudEZvcm0tdWktQWRkQ29tbWVudEZvcm0tQWRkQ29tbWVudEZvcm0tbW9kdWxlX19BZGRDb21tZW50Rm9ybS0tbmtXNkgge1xuICBwYWRkaW5nOiAyMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXByaW1hcnktY29sb3IpO1xufVxuXG4uc3JjLWZlYXR1cmVzLUFkZENvbW1lbnRGb3JtLXVpLUFkZENvbW1lbnRGb3JtLUFkZENvbW1lbnRGb3JtLW1vZHVsZV9faW5wdXQtLUhLTXlXIHtcbiAgZmxleC1ncm93OiAxO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2ZlYXR1cmVzL0FkZENvbW1lbnRGb3JtL3VpL0FkZENvbW1lbnRGb3JtL0FkZENvbW1lbnRGb3JtLm1vZHVsZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0ksYUFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0NBQUE7QUFDSjs7QUFFQTtFQUNJLFlBQUE7QUFDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuQWRkQ29tbWVudEZvcm0ge1xcclxcbiAgICBwYWRkaW5nOiAyMHB4O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXByaW1hcnktY29sb3IpXFxyXFxufVxcclxcblxcclxcbi5pbnB1dCB7XFxyXFxuICAgIGZsZXgtZ3JvdzogMTtcXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwiQWRkQ29tbWVudEZvcm1cIjogYHNyYy1mZWF0dXJlcy1BZGRDb21tZW50Rm9ybS11aS1BZGRDb21tZW50Rm9ybS1BZGRDb21tZW50Rm9ybS1tb2R1bGVfX0FkZENvbW1lbnRGb3JtLS1ua1c2SGAsXG5cdFwiaW5wdXRcIjogYHNyYy1mZWF0dXJlcy1BZGRDb21tZW50Rm9ybS11aS1BZGRDb21tZW50Rm9ybS1BZGRDb21tZW50Rm9ybS1tb2R1bGVfX2lucHV0LS1IS015V2Bcbn07XG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAuc3JjLXNoYXJlZC11aS1JbnB1dC1JbnB1dC1tb2R1bGVfX0lucHV0LS1YOEVWYiB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi5zcmMtc2hhcmVkLXVpLUlucHV0LUlucHV0LW1vZHVsZV9fSW5wdXQtLVg4RVZiIGlucHV0IHtcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbi5zcmMtc2hhcmVkLXVpLUlucHV0LUlucHV0LW1vZHVsZV9fcmVhZG9ubHktLWZUTjFQIHtcbiAgYm9yZGVyOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIG9wYWNpdHk6IDAuNztcbn1cbi5zcmMtc2hhcmVkLXVpLUlucHV0LUlucHV0LW1vZHVsZV9fcmVhZG9ubHktLWZUTjFQIGlucHV0IHtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3NoYXJlZC91aS9JbnB1dC9JbnB1dC5tb2R1bGUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNJLGdCQUFBO0FBQ0o7O0FBRUE7RUFDSSxhQUFBO0VBQ0Esc0NBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUVBO0VBQ0ksNkJBQUE7RUFDQSxZQUFBO0FBQ0o7QUFDSTtFQUNJLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7QUFDUlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuSW5wdXQge1xcclxcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uSW5wdXQgaW5wdXQge1xcclxcbiAgICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnJlYWRvbmx5IHtcXHJcXG4gICAgYm9yZGVyOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XFxyXFxuICAgIG9wYWNpdHk6IDAuNztcXHJcXG5cXHJcXG4gICAgaW5wdXQge1xcclxcbiAgICAgICAgYm9yZGVyOiBub25lO1xcclxcbiAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcXHJcXG4gICAgICAgIG91dGxpbmU6IG5vbmU7XFxyXFxuICAgIH1cXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwiSW5wdXRcIjogYHNyYy1zaGFyZWQtdWktSW5wdXQtSW5wdXQtbW9kdWxlX19JbnB1dC0tWDhFVmJgLFxuXHRcInJlYWRvbmx5XCI6IGBzcmMtc2hhcmVkLXVpLUlucHV0LUlucHV0LW1vZHVsZV9fcmVhZG9ubHktLWZUTjFQYFxufTtcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1s0XS51c2VbMV0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vQWRkQ29tbWVudEZvcm0ubW9kdWxlLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgaWYgKCFjb250ZW50LmxvY2FscyB8fCBtb2R1bGUuaG90LmludmFsaWRhdGUpIHtcbiAgICB2YXIgaXNFcXVhbExvY2FscyA9IGZ1bmN0aW9uIGlzRXF1YWxMb2NhbHMoYSwgYiwgaXNOYW1lZEV4cG9ydCkge1xuICBpZiAoIWEgJiYgYiB8fCBhICYmICFiKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHZhciBwO1xuICBmb3IgKHAgaW4gYSkge1xuICAgIGlmIChpc05hbWVkRXhwb3J0ICYmIHAgPT09IFwiZGVmYXVsdFwiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICBpZiAoYVtwXSAhPT0gYltwXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICBmb3IgKHAgaW4gYikge1xuICAgIGlmIChpc05hbWVkRXhwb3J0ICYmIHAgPT09IFwiZGVmYXVsdFwiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICBpZiAoIWFbcF0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59O1xuICAgIHZhciBpc05hbWVkRXhwb3J0ID0gIWNvbnRlbnQubG9jYWxzO1xuICAgIHZhciBvbGRMb2NhbHMgPSBpc05hbWVkRXhwb3J0ID8gbmFtZWRFeHBvcnQgOiBjb250ZW50LmxvY2FscztcblxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFxuICAgICAgXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzRdLnVzZVsxXSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9BZGRDb21tZW50Rm9ybS5tb2R1bGUuc2Nzc1wiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIWlzRXF1YWxMb2NhbHMob2xkTG9jYWxzLCBpc05hbWVkRXhwb3J0ID8gbmFtZWRFeHBvcnQgOiBjb250ZW50LmxvY2FscywgaXNOYW1lZEV4cG9ydCkpIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUuaG90LmludmFsaWRhdGUoKTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIG9sZExvY2FscyA9IGlzTmFtZWRFeHBvcnQgPyBuYW1lZEV4cG9ydCA6IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgICAgICAgICAgIHVwZGF0ZShjb250ZW50KTtcbiAgICAgIH1cbiAgICApXG4gIH1cblxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7XG4gICAgdXBkYXRlKCk7XG4gIH0pO1xufVxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzRdLnVzZVsxXSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9BZGRDb21tZW50Rm9ybS5tb2R1bGUuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbNF0udXNlWzFdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL0lucHV0Lm1vZHVsZS5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cbmlmIChtb2R1bGUuaG90KSB7XG4gIGlmICghY29udGVudC5sb2NhbHMgfHwgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKSB7XG4gICAgdmFyIGlzRXF1YWxMb2NhbHMgPSBmdW5jdGlvbiBpc0VxdWFsTG9jYWxzKGEsIGIsIGlzTmFtZWRFeHBvcnQpIHtcbiAgaWYgKCFhICYmIGIgfHwgYSAmJiAhYikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgcDtcbiAgZm9yIChwIGluIGEpIHtcbiAgICBpZiAoaXNOYW1lZEV4cG9ydCAmJiBwID09PSBcImRlZmF1bHRcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgaWYgKGFbcF0gIT09IGJbcF0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgZm9yIChwIGluIGIpIHtcbiAgICBpZiAoaXNOYW1lZEV4cG9ydCAmJiBwID09PSBcImRlZmF1bHRcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgaWYgKCFhW3BdKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIHJldHVybiB0cnVlO1xufTtcbiAgICB2YXIgaXNOYW1lZEV4cG9ydCA9ICFjb250ZW50LmxvY2FscztcbiAgICB2YXIgb2xkTG9jYWxzID0gaXNOYW1lZEV4cG9ydCA/IG5hbWVkRXhwb3J0IDogY29udGVudC5sb2NhbHM7XG5cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcbiAgICAgIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1s0XS51c2VbMV0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vSW5wdXQubW9kdWxlLnNjc3NcIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCFpc0VxdWFsTG9jYWxzKG9sZExvY2FscywgaXNOYW1lZEV4cG9ydCA/IG5hbWVkRXhwb3J0IDogY29udGVudC5sb2NhbHMsIGlzTmFtZWRFeHBvcnQpKSB7XG4gICAgICAgICAgICAgICAgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKCk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBvbGRMb2NhbHMgPSBpc05hbWVkRXhwb3J0ID8gbmFtZWRFeHBvcnQgOiBjb250ZW50LmxvY2FscztcblxuICAgICAgICAgICAgICB1cGRhdGUoY29udGVudCk7XG4gICAgICB9XG4gICAgKVxuICB9XG5cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkge1xuICAgIHVwZGF0ZSgpO1xuICB9KTtcbn1cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1s0XS51c2VbMV0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vSW5wdXQubW9kdWxlLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJpbXBvcnQgeyB0eXBlIFN0YXRlU2NoZW1hIH0gZnJvbSAnYXBwL3Byb3ZpZGVycy9TdG9yZVByb3ZpZGVyJ1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldEFkZENvbW1lbnRGb3JtVGV4dCA9IChzdGF0ZTogU3RhdGVTY2hlbWEpID0+IHN0YXRlPy5hZGRDb21tZW50Rm9ybT8udGV4dCA/PyAnJ1xyXG5leHBvcnQgY29uc3QgZ2V0QWRkQ29tbWVudEZvcm1FcnJvciA9IChzdGF0ZTogU3RhdGVTY2hlbWEpID0+IHN0YXRlPy5hZGRDb21tZW50Rm9ybT8uZXJyb3JcclxuZXhwb3J0IGNvbnN0IGdldEFkZENvbW1lbnRGb3JtSXNMb2FkaW5nID0gKHN0YXRlOiBTdGF0ZVNjaGVtYSkgPT4gc3RhdGU/LmFkZENvbW1lbnRGb3JtPy5pc0xvYWRpbmdcclxuIiwiaW1wb3J0IHsgdHlwZSBQYXlsb2FkQWN0aW9uLCBjcmVhdGVTbGljZSB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQnXHJcbmltcG9ydCB7IHR5cGUgQWRkQ29tbWVudEZvcm1TY2hlbWEgfSBmcm9tICcuLi90eXBlcy9hZGRDb21tZW50Rm9ybSdcclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZTogQWRkQ29tbWVudEZvcm1TY2hlbWEgPSB7XHJcbiAgdGV4dDogdW5kZWZpbmVkLFxyXG4gIGVycm9yOiB1bmRlZmluZWQsXHJcbiAgaXNMb2FkaW5nOiBmYWxzZVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgYWRkQ29tbWVudEZvcm1TbGljZSA9IGNyZWF0ZVNsaWNlKHtcclxuICBuYW1lOiAnYWRkQ29tbWVudEZvcm0nLFxyXG4gIGluaXRpYWxTdGF0ZSxcclxuICByZWR1Y2Vyczoge1xyXG4gICAgc2V0VGV4dDogKHN0YXRlLCBhY3Rpb246IFBheWxvYWRBY3Rpb248c3RyaW5nPikgPT4ge1xyXG4gICAgICBzdGF0ZS50ZXh0ID0gYWN0aW9uLnBheWxvYWRcclxuICAgIH0sXHJcbiAgICBzZXRFcnJvcjogKHN0YXRlLCBhY3Rpb246IFBheWxvYWRBY3Rpb248c3RyaW5nPikgPT4ge1xyXG4gICAgICBzdGF0ZS5lcnJvciA9IGFjdGlvbi5wYXlsb2FkXHJcbiAgICB9XHJcbiAgfVxyXG4gIC8vIGV4dHJhUmVkdWNlcnM6IChidWlsZGVyKSA9PiB7XHJcbiAgLy8gYnVpbGRlci5hZGRDYXNlKGxvZ2luQnlVc2VybmFtZS5wZW5kaW5nLCAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIC8vIHN0YXRlLmVycm9yID0gdW5kZWZpbmVkXHJcbiAgLy8gc3RhdGUuaXNMb2FkaW5nID0gdHJ1ZVxyXG4gIC8vIH0pXHJcbiAgLy8gYnVpbGRlci5hZGRDYXNlKGxvZ2luQnlVc2VybmFtZS5mdWxmaWxsZWQsIChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgLy8gc3RhdGUuaXNMb2FkaW5nID0gZmFsc2VcclxuICAvLyB9KVxyXG4gIC8vIGJ1aWxkZXIuYWRkQ2FzZShsb2dpbkJ5VXNlcm5hbWUucmVqZWN0ZWQsIChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgLy8gc3RhdGUuaXNMb2FkaW5nID0gZmFsc2VcclxuICAvLyBzdGF0ZS5lcnJvciA9IGFjdGlvbi5wYXlsb2FkIGFzIHN0cmluZ1xyXG4gIC8vIH0pXHJcbiAgLy8gfVxyXG59KVxyXG5cclxuZXhwb3J0IGNvbnN0IHsgYWN0aW9uczogYWRkQ29tbWVudEZvcm1BY3Rpb25zIH0gPSBhZGRDb21tZW50Rm9ybVNsaWNlXHJcbmV4cG9ydCBjb25zdCB7IHJlZHVjZXI6IGFkZENvbW1lbnRGb3JtUmVkdWNlciB9ID0gYWRkQ29tbWVudEZvcm1TbGljZVxyXG4iXSwibmFtZXMiOlsiY2xhc3NOYW1lcyIsImNscyIsInVzZVRyYW5zbGF0aW9uIiwiQnV0dG9uIiwiSW5wdXQiLCJ1c2VTZWxlY3RvciIsImdldEFkZENvbW1lbnRGb3JtVGV4dCIsInVzZUNhbGxiYWNrIiwidXNlQXBwRGlzcGF0Y2giLCJhZGRDb21tZW50Rm9ybUFjdGlvbnMiLCJhZGRDb21tZW50Rm9ybVJlZHVjZXIiLCJEeW5hbWljTW9kdWxlTG9hZGVyIiwicmVkdWNlcnMiLCJhZGRDb21tZW50Rm9ybSIsIkFkZENvbW1lbnRGb3JtIiwicHJvcHMiLCJfcyIsIl9hIiwiY2xhc3NOYW1lIiwib25TZW5kQ29tbWVudCIsInQiLCJ0ZXh0IiwiZGlzcGF0Y2giLCJvbkNvbW1lbnRUZXh0Q2hhbmdlIiwidmFsdWUiLCJzZXRUZXh0Iiwib25TZW5kSGFuZGxlciIsIl9qc3giLCJjaGlsZHJlbiIsIl9qc3hzIiwiaW5wdXQiLCJvbkNoYW5nZSIsInBsYWNlaG9sZGVyIiwib25DbGljayIsIl9jIiwiJFJlZnJlc2hSZWckIiwibWVtbyIsIl9jMiIsIl9iIiwiX2QiLCJ0eXBlIiwiX2UiLCJfZiIsInJlYWRvbmx5Iiwib3RoZXJQcm9wcyIsIl9fcmVzdCIsIm9uQ2hhbmdlSGFuZGxlciIsImUiLCJ0YXJnZXQiLCJtb2RzIiwicmVhZE9ubHkiLCJfYzMiLCJkaXNwbGF5TmFtZSJdLCJzb3VyY2VSb290IjoiIn0=