"use strict";
(self["webpackChunkfloristby"] = self["webpackChunkfloristby"] || []).push([["src_features_AuthByUsername_ui_LoginForm_LoginForm_tsx"],{

/***/ "./src/features/AuthByUsername/ui/LoginForm/LoginForm.tsx":
/*!****************************************************************!*\
  !*** ./src/features/AuthByUsername/ui/LoginForm/LoginForm.tsx ***!
  \****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var shared_lib_classNames_classNames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shared/lib/classNames/classNames */ "./src/shared/lib/classNames/classNames.ts");
/* harmony import */ var _LoginForm_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LoginForm.module.scss */ "./src/features/AuthByUsername/ui/LoginForm/LoginForm.module.scss");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var shared_ui_Button_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! shared/ui/Button/Button */ "./src/shared/ui/Button/Button.tsx");
/* harmony import */ var shared_ui_Input_Input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! shared/ui/Input/Input */ "./src/shared/ui/Input/Input.tsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _model_slice_loginSlice__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../model/slice/loginSlice */ "./src/features/AuthByUsername/model/slice/loginSlice.ts");
/* harmony import */ var _model_services_loginByUsername_loginByUsername__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../model/services/loginByUsername/loginByUsername */ "./src/features/AuthByUsername/model/services/loginByUsername/loginByUsername.ts");
/* harmony import */ var shared_ui_Text_Text__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! shared/ui/Text/Text */ "./src/shared/ui/Text/Text.tsx");
/* harmony import */ var _model_selectors_getLoginUsername_getLoginUsername__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../model/selectors/getLoginUsername/getLoginUsername */ "./src/features/AuthByUsername/model/selectors/getLoginUsername/getLoginUsername.ts");
/* harmony import */ var _model_selectors_getLoginPassword_getLoginPassword__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../model/selectors/getLoginPassword/getLoginPassword */ "./src/features/AuthByUsername/model/selectors/getLoginPassword/getLoginPassword.ts");
/* harmony import */ var _model_selectors_getLoginErrror_getLoginError__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../model/selectors/getLoginErrror/getLoginError */ "./src/features/AuthByUsername/model/selectors/getLoginErrror/getLoginError.ts");
/* harmony import */ var _model_selectors_getLoginIsLoading_getLoginIsLoading__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../model/selectors/getLoginIsLoading/getLoginIsLoading */ "./src/features/AuthByUsername/model/selectors/getLoginIsLoading/getLoginIsLoading.ts");
/* harmony import */ var shared_lib_components_DynamicModuleLoader_DynamicModuleLoader__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! shared/lib/components/DynamicModuleLoader/DynamicModuleLoader */ "./src/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader.tsx");
/* harmony import */ var shared_lib_hooks_useAppDispatch_useAppDispatch__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! shared/lib/hooks/useAppDispatch/useAppDispatch */ "./src/shared/lib/hooks/useAppDispatch/useAppDispatch.ts");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

var _s = __webpack_require__.$Refresh$.signature();
var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var __generator = undefined && undefined.__generator || function (thisArg, body) {
  var _ = {
      label: 0,
      sent: function sent() {
        if (t[0] & 1) throw t[1];
        return t[1];
      },
      trys: [],
      ops: []
    },
    f,
    y,
    t,
    g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;
  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }
  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");
    while (g && (g = 0, op[0] && (_ = 0)), _) try {
      if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
      if (y = 0, t) op = [op[0] & 2, t.value];
      switch (op[0]) {
        case 0:
        case 1:
          t = op;
          break;
        case 4:
          _.label++;
          return {
            value: op[1],
            done: false
          };
        case 5:
          _.label++;
          y = op[1];
          op = [0];
          continue;
        case 7:
          op = _.ops.pop();
          _.trys.pop();
          continue;
        default:
          if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
            _ = 0;
            continue;
          }
          if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
            _.label = op[1];
            break;
          }
          if (op[0] === 6 && _.label < t[1]) {
            _.label = t[1];
            t = op;
            break;
          }
          if (t && _.label < t[2]) {
            _.label = t[2];
            _.ops.push(op);
            break;
          }
          if (t[2]) _.ops.pop();
          _.trys.pop();
          continue;
      }
      op = body.call(thisArg, _);
    } catch (e) {
      op = [6, e];
      y = 0;
    } finally {
      f = t = 0;
    }
    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};

















var initialReducers = {
  loginForm: _model_slice_loginSlice__WEBPACK_IMPORTED_MODULE_8__.loginReducer
};
var LoginForm = /*#__PURE__*/_s( /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_7__.memo)(_c = _s(function (_a) {
  _s();
  var _b = _a.className,
    className = _b === void 0 ? '' : _b,
    onSuccess = _a.onSuccess;
  var t = (0,react_i18next__WEBPACK_IMPORTED_MODULE_3__.useTranslation)('loginForm').t;
  var dispatch = (0,shared_lib_hooks_useAppDispatch_useAppDispatch__WEBPACK_IMPORTED_MODULE_16__.useAppDispatch)();
  var username = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector)(_model_selectors_getLoginUsername_getLoginUsername__WEBPACK_IMPORTED_MODULE_11__.getLoginUsername);
  var password = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector)(_model_selectors_getLoginPassword_getLoginPassword__WEBPACK_IMPORTED_MODULE_12__.getLoginPassword);
  var error = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector)(_model_selectors_getLoginErrror_getLoginError__WEBPACK_IMPORTED_MODULE_13__.getLoginError);
  var isLoading = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector)(_model_selectors_getLoginIsLoading_getLoginIsLoading__WEBPACK_IMPORTED_MODULE_14__.getLoginIsLoading);
  var onChangeUsername = (0,react__WEBPACK_IMPORTED_MODULE_7__.useCallback)(function (value) {
    dispatch(_model_slice_loginSlice__WEBPACK_IMPORTED_MODULE_8__.loginActions.setUsername(value));
  }, [dispatch]);
  var onChangePassword = (0,react__WEBPACK_IMPORTED_MODULE_7__.useCallback)(function (value) {
    dispatch(_model_slice_loginSlice__WEBPACK_IMPORTED_MODULE_8__.loginActions.setPassword(value));
  }, [dispatch]);
  var onLoginClick = (0,react__WEBPACK_IMPORTED_MODULE_7__.useCallback)(function () {
    return __awaiter(void 0, void 0, void 0, function () {
      var result;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [4 /*yield*/, dispatch((0,_model_services_loginByUsername_loginByUsername__WEBPACK_IMPORTED_MODULE_9__.loginByUsername)({
              username: username,
              password: password
            }))];
          case 1:
            result = _a.sent();
            if (result.meta.requestStatus === 'fulfilled') {
              onSuccess();
            }
            return [2 /*return*/];
        }
      });
    });
  }, [onSuccess, dispatch, username, password]);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(shared_lib_components_DynamicModuleLoader_DynamicModuleLoader__WEBPACK_IMPORTED_MODULE_15__.DynamicModuleLoader, {
    reducers: initialReducers,
    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
      className: (0,shared_lib_classNames_classNames__WEBPACK_IMPORTED_MODULE_1__.classNames)(_LoginForm_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].LoginForm, {}, [className]),
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(shared_ui_Text_Text__WEBPACK_IMPORTED_MODULE_10__.Text, {
        title: t('Форма авторизации'),
        className: _LoginForm_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].loginTitle
      }), error && (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(shared_ui_Text_Text__WEBPACK_IMPORTED_MODULE_10__.Text, {
        text: t('Вы ввели неверный логин или пароль'),
        theme: shared_ui_Text_Text__WEBPACK_IMPORTED_MODULE_10__.TextTheme.ERROR,
        className: _LoginForm_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].loginError
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(shared_ui_Input_Input__WEBPACK_IMPORTED_MODULE_5__.Input, {
        value: username,
        onChange: onChangeUsername,
        placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043B\u043E\u0433\u0438\u043D"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(shared_ui_Input_Input__WEBPACK_IMPORTED_MODULE_5__.Input, {
        value: password,
        onChange: onChangePassword,
        placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043F\u0430\u0440\u043E\u043B\u044C"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(shared_ui_Button_Button__WEBPACK_IMPORTED_MODULE_4__.Button, {
        onClick: onLoginClick,
        className: _LoginForm_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].loginBtn,
        disabled: isLoading,
        children: t('Войти')
      })]
    })
  });
}, "VoZoD+lEUKMmXFohTd/M6Vfmee4=", false, function () {
  return [react_i18next__WEBPACK_IMPORTED_MODULE_3__.useTranslation, shared_lib_hooks_useAppDispatch_useAppDispatch__WEBPACK_IMPORTED_MODULE_16__.useAppDispatch, react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector, react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector, react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector, react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector];
})), "VoZoD+lEUKMmXFohTd/M6Vfmee4=", false, function () {
  return [react_i18next__WEBPACK_IMPORTED_MODULE_3__.useTranslation, shared_lib_hooks_useAppDispatch_useAppDispatch__WEBPACK_IMPORTED_MODULE_16__.useAppDispatch, react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector, react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector, react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector, react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector];
});
_c2 = LoginForm;
LoginForm.displayName = 'LoginForm';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LoginForm);
var _c, _c2;
__webpack_require__.$Refresh$.register(_c, "LoginForm$memo");
__webpack_require__.$Refresh$.register(_c2, "LoginForm");

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

/***/ "./src/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader.tsx":
/*!*******************************************************************************!*\
  !*** ./src/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader.tsx ***!
  \*******************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DynamicModuleLoader: () => (/* binding */ DynamicModuleLoader)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var shared_lib_hooks_useAppDispatch_useAppDispatch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! shared/lib/hooks/useAppDispatch/useAppDispatch */ "./src/shared/lib/hooks/useAppDispatch/useAppDispatch.ts");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

var _s = __webpack_require__.$Refresh$.signature();




var DynamicModuleLoader = function DynamicModuleLoader(props) {
  _s();
  var children = props.children,
    reducers = props.reducers,
    _a = props.removeAfterUnmount,
    removeAfterUnmount = _a === void 0 ? true : _a;
  var store = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useStore)();
  var dispatch = (0,shared_lib_hooks_useAppDispatch_useAppDispatch__WEBPACK_IMPORTED_MODULE_3__.useAppDispatch)();
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    var mountedReducers = store.reducerManager.getMountedReducers();
    Object.entries(reducers).forEach(function (_a) {
      var reducerName = _a[0],
        reducer = _a[1];
      var mounted = mountedReducers[reducerName];
      if (!mounted) {
        store.reducerManager.add(reducerName, reducer);
        dispatch({
          type: "@INIT ".concat(reducerName, " reducer")
        });
      }
    });
    return function () {
      if (removeAfterUnmount) {
        Object.entries(reducers).forEach(function (_a) {
          var reducerName = _a[0],
            reducer = _a[1];
          store.reducerManager.remove(reducerName);
          dispatch({
            type: "@DESTROY ".concat(reducerName, " reducer")
          });
        });
      }
    };
  }, [dispatch, reducers, removeAfterUnmount, store.reducerManager]);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: children
  });
};
_s(DynamicModuleLoader, "QCiRKE8uWs3PcuOgAcBci+U6b58=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_2__.useStore, shared_lib_hooks_useAppDispatch_useAppDispatch__WEBPACK_IMPORTED_MODULE_3__.useAppDispatch];
});
_c = DynamicModuleLoader;

var _c;
__webpack_require__.$Refresh$.register(_c, "DynamicModuleLoader");

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

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/features/AuthByUsername/ui/LoginForm/LoginForm.module.scss":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/features/AuthByUsername/ui/LoginForm/LoginForm.module.scss ***!
  \*********************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, `.src-features-AuthByUsername-ui-LoginForm-LoginForm-module__LoginForm--xYNEf {
  display: flex;
  flex-direction: column;
  width: 400px;
  align-items: center;
}

.src-features-AuthByUsername-ui-LoginForm-LoginForm-module__loginTitle--tNHSr {
  margin-bottom: 20px;
}

.src-features-AuthByUsername-ui-LoginForm-LoginForm-module__loginError--eMRip {
  margin: 15px 0;
  text-align: center;
}

.src-features-AuthByUsername-ui-LoginForm-LoginForm-module__loginBtn--Ok_5a {
  margin-top: 20px;
}`, "",{"version":3,"sources":["webpack://./src/features/AuthByUsername/ui/LoginForm/LoginForm.module.scss"],"names":[],"mappings":"AAAA;EACI,aAAA;EACA,sBAAA;EACA,YAAA;EACA,mBAAA;AACJ;;AAEA;EACI,mBAAA;AACJ;;AAEA;EACI,cAAA;EACA,kBAAA;AACJ;;AAEA;EACI,gBAAA;AACJ","sourcesContent":[".LoginForm {\r\n    display: flex;\r\n    flex-direction: column;\r\n    width: 400px;\r\n    align-items: center;\r\n}\r\n\r\n.loginTitle {\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.loginError {\r\n    margin: 15px 0;\r\n    text-align: center;\r\n}\r\n\r\n.loginBtn {\r\n    margin-top: 20px;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"LoginForm": `src-features-AuthByUsername-ui-LoginForm-LoginForm-module__LoginForm--xYNEf`,
	"loginTitle": `src-features-AuthByUsername-ui-LoginForm-LoginForm-module__loginTitle--tNHSr`,
	"loginError": `src-features-AuthByUsername-ui-LoginForm-LoginForm-module__loginError--eMRip`,
	"loginBtn": `src-features-AuthByUsername-ui-LoginForm-LoginForm-module__loginBtn--Ok_5a`
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

/***/ "./src/features/AuthByUsername/ui/LoginForm/LoginForm.module.scss":
/*!************************************************************************!*\
  !*** ./src/features/AuthByUsername/ui/LoginForm/LoginForm.module.scss ***!
  \************************************************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_LoginForm_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!../../../../../node_modules/sass-loader/dist/cjs.js!./LoginForm.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/features/AuthByUsername/ui/LoginForm/LoginForm.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_LoginForm_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);


if (true) {
  if (!_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_LoginForm_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals || module.hot.invalidate) {
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
    var isNamedExport = !_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_LoginForm_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;
    var oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_LoginForm_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_LoginForm_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

    module.hot.accept(
      /*! !!../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!../../../../../node_modules/sass-loader/dist/cjs.js!./LoginForm.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/features/AuthByUsername/ui/LoginForm/LoginForm.module.scss",
      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_LoginForm_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!../../../../../node_modules/sass-loader/dist/cjs.js!./LoginForm.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/features/AuthByUsername/ui/LoginForm/LoginForm.module.scss");
(function () {
        if (!isEqualLocals(oldLocals, isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_LoginForm_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_LoginForm_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals, isNamedExport)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_LoginForm_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_LoginForm_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

              update(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_LoginForm_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"]);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}



       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_LoginForm_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_LoginForm_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_LoginForm_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "./src/features/AuthByUsername/model/selectors/getLoginErrror/getLoginError.ts":
/*!*************************************************************************************!*\
  !*** ./src/features/AuthByUsername/model/selectors/getLoginErrror/getLoginError.ts ***!
  \*************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getLoginError: () => (/* binding */ getLoginError)
/* harmony export */ });
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

var getLoginError = function (state) { var _a; return (_a = state === null || state === void 0 ? void 0 : state.loginForm) === null || _a === void 0 ? void 0 : _a.error; };


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

/***/ "./src/features/AuthByUsername/model/selectors/getLoginIsLoading/getLoginIsLoading.ts":
/*!********************************************************************************************!*\
  !*** ./src/features/AuthByUsername/model/selectors/getLoginIsLoading/getLoginIsLoading.ts ***!
  \********************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getLoginIsLoading: () => (/* binding */ getLoginIsLoading)
/* harmony export */ });
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

var getLoginIsLoading = function (state) { var _a; return ((_a = state === null || state === void 0 ? void 0 : state.loginForm) === null || _a === void 0 ? void 0 : _a.isLoading) || false; };


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

/***/ "./src/features/AuthByUsername/model/selectors/getLoginPassword/getLoginPassword.ts":
/*!******************************************************************************************!*\
  !*** ./src/features/AuthByUsername/model/selectors/getLoginPassword/getLoginPassword.ts ***!
  \******************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getLoginPassword: () => (/* binding */ getLoginPassword)
/* harmony export */ });
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

var getLoginPassword = function (state) { var _a; return ((_a = state === null || state === void 0 ? void 0 : state.loginForm) === null || _a === void 0 ? void 0 : _a.password) || ''; };


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

/***/ "./src/features/AuthByUsername/model/selectors/getLoginUsername/getLoginUsername.ts":
/*!******************************************************************************************!*\
  !*** ./src/features/AuthByUsername/model/selectors/getLoginUsername/getLoginUsername.ts ***!
  \******************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getLoginUsername: () => (/* binding */ getLoginUsername)
/* harmony export */ });
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

var getLoginUsername = function (state) { var _a; return ((_a = state === null || state === void 0 ? void 0 : state.loginForm) === null || _a === void 0 ? void 0 : _a.username) || ''; };


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

/***/ "./src/features/AuthByUsername/model/services/loginByUsername/loginByUsername.ts":
/*!***************************************************************************************!*\
  !*** ./src/features/AuthByUsername/model/services/loginByUsername/loginByUsername.ts ***!
  \***************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loginByUsername: () => (/* binding */ loginByUsername)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");
/* harmony import */ var entities_User__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! entities/User */ "./src/entities/User/index.ts");
/* harmony import */ var shared_const_localstorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shared/const/localstorage */ "./src/shared/const/localstorage.ts");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var loginByUsername = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__.createAsyncThunk)('login/loginByUsername', function (authData, thunkApi) { return __awaiter(void 0, void 0, void 0, function () {
    var dispatch, extra, rejectWithValue, response, err_1;
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                dispatch = thunkApi.dispatch, extra = thunkApi.extra, rejectWithValue = thunkApi.rejectWithValue;
                _b.label = 1;
            case 1:
                _b.trys.push([1, 3, , 4]);
                return [4 /*yield*/, extra.api.post('/login', authData)];
            case 2:
                response = _b.sent();
                if (!response.data) {
                    console.log(response);
                    throw new Error();
                }
                console.log(response.data);
                localStorage.setItem(shared_const_localstorage__WEBPACK_IMPORTED_MODULE_1__.USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));
                dispatch(entities_User__WEBPACK_IMPORTED_MODULE_0__.userActions.setAuthData(response.data));
                (_a = extra.navigate) === null || _a === void 0 ? void 0 : _a.call(extra, '/about');
                return [2 /*return*/, response.data];
            case 3:
                err_1 = _b.sent();
                return [2 /*return*/, rejectWithValue('error')];
            case 4: return [2 /*return*/];
        }
    });
}); });


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

/***/ "./src/features/AuthByUsername/model/slice/loginSlice.ts":
/*!***************************************************************!*\
  !*** ./src/features/AuthByUsername/model/slice/loginSlice.ts ***!
  \***************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loginActions: () => (/* binding */ loginActions),
/* harmony export */   loginReducer: () => (/* binding */ loginReducer),
/* harmony export */   loginSlice: () => (/* binding */ loginSlice)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");
/* harmony import */ var _services_loginByUsername_loginByUsername__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/loginByUsername/loginByUsername */ "./src/features/AuthByUsername/model/services/loginByUsername/loginByUsername.ts");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");



var initialState = {
    isLoading: false,
    username: '',
    password: ''
};
var loginSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createSlice)({
    name: 'login',
    initialState: initialState,
    reducers: {
        setUsername: function (state, action) {
            state.username = action.payload;
        },
        setPassword: function (state, action) {
            state.password = action.payload;
        }
    },
    extraReducers: function (builder) {
        builder.addCase(_services_loginByUsername_loginByUsername__WEBPACK_IMPORTED_MODULE_0__.loginByUsername.pending, function (state, action) {
            state.error = undefined;
            state.isLoading = true;
        });
        builder.addCase(_services_loginByUsername_loginByUsername__WEBPACK_IMPORTED_MODULE_0__.loginByUsername.fulfilled, function (state, action) {
            state.isLoading = false;
        });
        builder.addCase(_services_loginByUsername_loginByUsername__WEBPACK_IMPORTED_MODULE_0__.loginByUsername.rejected, function (state, action) {
            state.isLoading = false;
            state.error = action.payload;
        });
    }
});
var loginActions = loginSlice.actions;
var loginReducer = loginSlice.reducer;


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2ZlYXR1cmVzX0F1dGhCeVVzZXJuYW1lX3VpX0xvZ2luRm9ybV9Mb2dpbkZvcm1fdHN4LjE3M2Y1YWYyNWM2MGUzMWM4MThmLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTZEO0FBQ3BCO0FBQ0s7QUFDRTtBQUNIO0FBQ0o7QUFDQTtBQUNnQztBQUNhO0FBQ2pDO0FBQ3FDO0FBQ0E7QUFDUjtBQUNXO0FBQ3lCO0FBQ3ZDO0FBTy9FLElBQU1tQixlQUFlLEdBQWlCO0VBQ3BDQyxTQUFTLEVBQUVYLGlFQUFZQTtDQUN4QjtBQUVELElBQU1ZLFNBQVMsZ0JBQUFDLEVBQUEsZUFBR2hCLDJDQUFJLENBQUFpQixFQUFBLEdBQUFELEVBQUEsQ0FBQyxVQUFDRSxFQUE2QztFQUFBRixFQUFBO01BQTNDRyxFQUFBLEdBQUFELEVBQUEsQ0FBQUUsU0FBYztJQUFkQSxTQUFTLEdBQUFELEVBQUEsY0FBRyxFQUFFLEdBQUFBLEVBQUE7SUFBRUUsU0FBUyxHQUFBSCxFQUFBLENBQUFHLFNBQUE7RUFDekMsSUFBQUMsQ0FBQyxHQUFLMUIsNkRBQWMsQ0FBQyxXQUFXLENBQUMsQ0FBQTBCLENBQWhDO0VBQ1QsSUFBTUMsUUFBUSxHQUFHWCwrRkFBYyxFQUFFO0VBQ2pDLElBQU1ZLFFBQVEsR0FBR3pCLHdEQUFXLENBQUNRLGlHQUFnQixDQUFDO0VBQzlDLElBQU1rQixRQUFRLEdBQUcxQix3REFBVyxDQUFDUyxpR0FBZ0IsQ0FBQztFQUM5QyxJQUFNa0IsS0FBSyxHQUFHM0Isd0RBQVcsQ0FBQ1UseUZBQWEsQ0FBQztFQUN4QyxJQUFNa0IsU0FBUyxHQUFHNUIsd0RBQVcsQ0FBQ1csb0dBQWlCLENBQUM7RUFFaEQs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Q0FBQztJQUNKLENBQUM7Q0FDRixDQUFDO0FBRWEsSUFBUyxZQUFZLEdBQUssVUFBVSxRQUFmLENBQWU7QUFDcEMsSUFBUyxZQUFZLEdBQUssVUFBVSxRQUFmLENBQWUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mbG9yaXN0YnkvLi9zcmMvZmVhdHVyZXMvQXV0aEJ5VXNlcm5hbWUvdWkvTG9naW5Gb3JtL0xvZ2luRm9ybS50c3giLCJ3ZWJwYWNrOi8vZmxvcmlzdGJ5Ly4vc3JjL3NoYXJlZC9saWIvY29tcG9uZW50cy9EeW5hbWljTW9kdWxlTG9hZGVyL0R5bmFtaWNNb2R1bGVMb2FkZXIudHN4Iiwid2VicGFjazovL2Zsb3Jpc3RieS8uL3NyYy9zaGFyZWQvdWkvSW5wdXQvSW5wdXQudHN4Iiwid2VicGFjazovL2Zsb3Jpc3RieS8uL3NyYy9mZWF0dXJlcy9BdXRoQnlVc2VybmFtZS91aS9Mb2dpbkZvcm0vTG9naW5Gb3JtLm1vZHVsZS5zY3NzIiwid2VicGFjazovL2Zsb3Jpc3RieS8uL3NyYy9zaGFyZWQvdWkvSW5wdXQvSW5wdXQubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vZmxvcmlzdGJ5Ly4vc3JjL2ZlYXR1cmVzL0F1dGhCeVVzZXJuYW1lL3VpL0xvZ2luRm9ybS9Mb2dpbkZvcm0ubW9kdWxlLnNjc3M/OGQ5NiIsIndlYnBhY2s6Ly9mbG9yaXN0YnkvLi9zcmMvc2hhcmVkL3VpL0lucHV0L0lucHV0Lm1vZHVsZS5zY3NzPzRlMjEiLCJ3ZWJwYWNrOi8vZmxvcmlzdGJ5Ly4vc3JjL2ZlYXR1cmVzL0F1dGhCeVVzZXJuYW1lL21vZGVsL3NlbGVjdG9ycy9nZXRMb2dpbkVycnJvci9nZXRMb2dpbkVycm9yLnRzIiwid2VicGFjazovL2Zsb3Jpc3RieS8uL3NyYy9mZWF0dXJlcy9BdXRoQnlVc2VybmFtZS9tb2RlbC9zZWxlY3RvcnMvZ2V0TG9naW5Jc0xvYWRpbmcvZ2V0TG9naW5Jc0xvYWRpbmcudHMiLCJ3ZWJwYWNrOi8vZmxvcmlzdGJ5Ly4vc3JjL2ZlYXR1cmVzL0F1dGhCeVVzZXJuYW1lL21vZGVsL3NlbGVjdG9ycy9nZXRMb2dpblBhc3N3b3JkL2dldExvZ2luUGFzc3dvcmQudHMiLCJ3ZWJwYWNrOi8vZmxvcmlzdGJ5Ly4vc3JjL2ZlYXR1cmVzL0F1dGhCeVVzZXJuYW1lL21vZGVsL3NlbGVjdG9ycy9nZXRMb2dpblVzZXJuYW1lL2dldExvZ2luVXNlcm5hbWUudHMiLCJ3ZWJwYWNrOi8vZmxvcmlzdGJ5Ly4vc3JjL2ZlYXR1cmVzL0F1dGhCeVVzZXJuYW1lL21vZGVsL3NlcnZpY2VzL2xvZ2luQnlVc2VybmFtZS9sb2dpbkJ5VXNlcm5hbWUudHMiLCJ3ZWJwYWNrOi8vZmxvcmlzdGJ5Ly4vc3JjL2ZlYXR1cmVzL0F1dGhCeVVzZXJuYW1lL21vZGVsL3NsaWNlL2xvZ2luU2xpY2UudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY2xhc3NOYW1lcyB9IGZyb20gJ3NoYXJlZC9saWIvY2xhc3NOYW1lcy9jbGFzc05hbWVzJ1xyXG5pbXBvcnQgY2xzIGZyb20gJy4vTG9naW5Gb3JtLm1vZHVsZS5zY3NzJ1xyXG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJ3JlYWN0LWkxOG5leHQnXHJcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJ3NoYXJlZC91aS9CdXR0b24vQnV0dG9uJ1xyXG5pbXBvcnQgeyBJbnB1dCB9IGZyb20gJ3NoYXJlZC91aS9JbnB1dC9JbnB1dCdcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuaW1wb3J0IHsgbWVtbywgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgbG9naW5BY3Rpb25zLCBsb2dpblJlZHVjZXIgfSBmcm9tICcuLi8uLi9tb2RlbC9zbGljZS9sb2dpblNsaWNlJ1xyXG5pbXBvcnQgeyBsb2dpbkJ5VXNlcm5hbWUgfSBmcm9tICcuLi8uLi9tb2RlbC9zZXJ2aWNlcy9sb2dpbkJ5VXNlcm5hbWUvbG9naW5CeVVzZXJuYW1lJ1xyXG5pbXBvcnQgeyBUZXh0LCBUZXh0VGhlbWUgfSBmcm9tICdzaGFyZWQvdWkvVGV4dC9UZXh0J1xyXG5pbXBvcnQgeyBnZXRMb2dpblVzZXJuYW1lIH0gZnJvbSAnLi4vLi4vbW9kZWwvc2VsZWN0b3JzL2dldExvZ2luVXNlcm5hbWUvZ2V0TG9naW5Vc2VybmFtZSdcclxuaW1wb3J0IHsgZ2V0TG9naW5QYXNzd29yZCB9IGZyb20gJy4uLy4uL21vZGVsL3NlbGVjdG9ycy9nZXRMb2dpblBhc3N3b3JkL2dldExvZ2luUGFzc3dvcmQnXHJcbmltcG9ydCB7IGdldExvZ2luRXJyb3IgfSBmcm9tICcuLi8uLi9tb2RlbC9zZWxlY3RvcnMvZ2V0TG9naW5FcnJyb3IvZ2V0TG9naW5FcnJvcidcclxuaW1wb3J0IHsgZ2V0TG9naW5Jc0xvYWRpbmcgfSBmcm9tICcuLi8uLi9tb2RlbC9zZWxlY3RvcnMvZ2V0TG9naW5Jc0xvYWRpbmcvZ2V0TG9naW5Jc0xvYWRpbmcnXHJcbmltcG9ydCB7IER5bmFtaWNNb2R1bGVMb2FkZXIsIHR5cGUgUmVkdWNlcnNMaXN0IH0gZnJvbSAnc2hhcmVkL2xpYi9jb21wb25lbnRzL0R5bmFtaWNNb2R1bGVMb2FkZXIvRHluYW1pY01vZHVsZUxvYWRlcidcclxuaW1wb3J0IHsgdXNlQXBwRGlzcGF0Y2ggfSBmcm9tICdzaGFyZWQvbGliL2hvb2tzL3VzZUFwcERpc3BhdGNoL3VzZUFwcERpc3BhdGNoJ1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBMb2dpbkZvcm1Qcm9wcyB7XHJcbiAgY2xhc3NOYW1lPzogc3RyaW5nXHJcbiAgb25TdWNjZXNzOiAoKSA9PiB2b2lkXHJcbn1cclxuXHJcbmNvbnN0IGluaXRpYWxSZWR1Y2VyczogUmVkdWNlcnNMaXN0ID0ge1xyXG4gIGxvZ2luRm9ybTogbG9naW5SZWR1Y2VyXHJcbn1cclxuXHJcbmNvbnN0IExvZ2luRm9ybSA9IG1lbW8oKHsgY2xhc3NOYW1lID0gJycsIG9uU3VjY2VzcyB9OiBMb2dpbkZvcm1Qcm9wcykgPT4ge1xyXG4gIGNvbnN0IHsgdCB9ID0gdXNlVHJhbnNsYXRpb24oJ2xvZ2luRm9ybScpXHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VBcHBEaXNwYXRjaCgpXHJcbiAgY29uc3QgdXNlcm5hbWUgPSB1c2VTZWxlY3RvcihnZXRMb2dpblVzZXJuYW1lKVxyXG4gIGNvbnN0IHBhc3N3b3JkID0gdXNlU2VsZWN0b3IoZ2V0TG9naW5QYXNzd29yZClcclxuICBjb25zdCBlcnJvciA9IHVzZVNlbGVjdG9yKGdldExvZ2luRXJyb3IpXHJcbiAgY29uc3QgaXNMb2FkaW5nID0gdXNlU2VsZWN0b3IoZ2V0TG9naW5Jc0xvYWRpbmcpXHJcblxyXG4gIGNvbnN0IG9uQ2hhbmdlVXNlcm5hbWUgPSB1c2VDYWxsYmFjaygodmFsdWU6IHN0cmluZykgPT4ge1xyXG4gICAgZGlzcGF0Y2gobG9naW5BY3Rpb25zLnNldFVzZXJuYW1lKHZhbHVlKSlcclxuICB9LCBbZGlzcGF0Y2hdKVxyXG5cclxuICBjb25zdCBvbkNoYW5nZVBhc3N3b3JkID0gdXNlQ2FsbGJhY2soKHZhbHVlOiBzdHJpbmcpID0+IHtcclxuICAgIGRpc3BhdGNoKGxvZ2luQWN0aW9ucy5zZXRQYXNzd29yZCh2YWx1ZSkpXHJcbiAgfSwgW2Rpc3BhdGNoXSlcclxuXHJcbiAgY29uc3Qgb25Mb2dpbkNsaWNrID0gdXNlQ2FsbGJhY2soYXN5bmMgKCkgPT4ge1xyXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZGlzcGF0Y2gobG9naW5CeVVzZXJuYW1lKHsgdXNlcm5hbWUsIHBhc3N3b3JkIH0pKVxyXG4gICAgaWYgKHJlc3VsdC5tZXRhLnJlcXVlc3RTdGF0dXMgPT09ICdmdWxmaWxsZWQnKSB7XHJcbiAgICAgIG9uU3VjY2VzcygpXHJcbiAgICB9XHJcbiAgfSwgW29uU3VjY2VzcywgZGlzcGF0Y2gsIHVzZXJuYW1lLCBwYXNzd29yZF0pXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICAgIDxEeW5hbWljTW9kdWxlTG9hZGVyIHJlZHVjZXJzPXtpbml0aWFsUmVkdWNlcnN9PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZXMoY2xzLkxvZ2luRm9ybSwge30sIFtjbGFzc05hbWVdKX0+XHJcbiAgICAgICAgICAgICAgPFRleHQgdGl0bGU9e3QoJ9Ck0L7RgNC80LAg0LDQstGC0L7RgNC40LfQsNGG0LjQuCcpfSBjbGFzc05hbWU9e2Nscy5sb2dpblRpdGxlfSAvPlxyXG4gICAgICAgICAgICAgIHtlcnJvciAmJiA8VGV4dCB0ZXh0PXt0KCfQktGLINCy0LLQtdC70Lgg0L3QtdCy0LXRgNC90YvQuSDQu9C+0LPQuNC9INC40LvQuCDQv9Cw0YDQvtC70YwnKX0gdGhlbWU9e1RleHRUaGVtZS5FUlJPUn0gY2xhc3NOYW1lPXtjbHMubG9naW5FcnJvcn0gLz59XHJcbiAgICAgICAgICAgICAgPElucHV0IHZhbHVlPXt1c2VybmFtZX0gb25DaGFuZ2U9e29uQ2hhbmdlVXNlcm5hbWV9IHBsYWNlaG9sZGVyPSfQktCy0LXQtNC40YLQtSDQu9C+0LPQuNC9JyAvPlxyXG4gICAgICAgICAgICAgIDxJbnB1dCB2YWx1ZT17cGFzc3dvcmR9IG9uQ2hhbmdlPXtvbkNoYW5nZVBhc3N3b3JkfSBwbGFjZWhvbGRlcj0n0JLQstC10LTQuNGC0LUg0L/QsNGA0L7Qu9GMJy8+XHJcbiAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtvbkxvZ2luQ2xpY2t9IGNsYXNzTmFtZT17Y2xzLmxvZ2luQnRufSBkaXNhYmxlZD17aXNMb2FkaW5nfT57dCgn0JLQvtC50YLQuCcpfTwvQnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvRHluYW1pY01vZHVsZUxvYWRlcj5cclxuICApXHJcbn0pXHJcblxyXG5Mb2dpbkZvcm0uZGlzcGxheU5hbWUgPSAnTG9naW5Gb3JtJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9naW5Gb3JtXHJcbiIsImltcG9ydCB7IHR5cGUgUmVkdWNlciB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQnXHJcbmltcG9ydCB7IHR5cGUgUmVkdXhTdG9yZVdpdGhNYW5hZ2VyIH0gZnJvbSAnYXBwL3Byb3ZpZGVycy9TdG9yZVByb3ZpZGVyJ1xyXG5pbXBvcnQgeyB0eXBlIFN0YXRlU2NoZW1hLCB0eXBlIFN0YXRlU2NoZW1hS2V5IH0gZnJvbSAnYXBwL3Byb3ZpZGVycy9TdG9yZVByb3ZpZGVyL2NvbmZpZy9TdGF0ZVNjaGVtYSdcclxuaW1wb3J0IHsgdHlwZSBSZWFjdE5vZGUsIHR5cGUgRkMsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyB1c2VTdG9yZSB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQgeyB1c2VBcHBEaXNwYXRjaCB9IGZyb20gJ3NoYXJlZC9saWIvaG9va3MvdXNlQXBwRGlzcGF0Y2gvdXNlQXBwRGlzcGF0Y2gnXHJcblxyXG5leHBvcnQgdHlwZSBSZWR1Y2Vyc0xpc3QgPSB7XHJcbiAgW25hbWUgaW4gU3RhdGVTY2hlbWFLZXldPzogUmVkdWNlcjxOb25OdWxsYWJsZTxTdGF0ZVNjaGVtYVtuYW1lXT4+XHJcbn1cclxuXHJcbnR5cGUgUmVkdWNlcnNMaXN0RW50cnkgPSBbU3RhdGVTY2hlbWFLZXksIFJlZHVjZXJdXHJcblxyXG5pbnRlcmZhY2UgRHluYW1pY01vZHVsZUxvYWRlclByb3BzIHtcclxuICByZWR1Y2VyczogUmVkdWNlcnNMaXN0XHJcbiAgY2hpbGRyZW46IFJlYWN0Tm9kZVxyXG4gIHJlbW92ZUFmdGVyVW5tb3VudD86IGJvb2xlYW5cclxufVxyXG5cclxuY29uc3QgRHluYW1pY01vZHVsZUxvYWRlcjogRkM8RHluYW1pY01vZHVsZUxvYWRlclByb3BzPiA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHsgY2hpbGRyZW4sIHJlZHVjZXJzLCByZW1vdmVBZnRlclVubW91bnQgPSB0cnVlIH0gPSBwcm9wc1xyXG4gIGNvbnN0IHN0b3JlID0gdXNlU3RvcmUoKSBhcyBSZWR1eFN0b3JlV2l0aE1hbmFnZXJcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZUFwcERpc3BhdGNoKClcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IG1vdW50ZWRSZWR1Y2VycyA9IHN0b3JlLnJlZHVjZXJNYW5hZ2VyLmdldE1vdW50ZWRSZWR1Y2VycygpXHJcbiAgICBPYmplY3QuZW50cmllcyhyZWR1Y2VycykuZm9yRWFjaCgoW3JlZHVjZXJOYW1lLCByZWR1Y2VyXSkgPT4ge1xyXG4gICAgICBjb25zdCBtb3VudGVkID0gbW91bnRlZFJlZHVjZXJzW3JlZHVjZXJOYW1lIGFzIFN0YXRlU2NoZW1hS2V5XVxyXG4gICAgICBpZiAoIW1vdW50ZWQpIHtcclxuICAgICAgICBzdG9yZS5yZWR1Y2VyTWFuYWdlci5hZGQocmVkdWNlck5hbWUgYXMgU3RhdGVTY2hlbWFLZXksIHJlZHVjZXIpXHJcbiAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiBgQElOSVQgJHtyZWR1Y2VyTmFtZX0gcmVkdWNlcmAgfSlcclxuICAgICAgfVxyXG4gICAgfSlcclxuXHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICBpZiAocmVtb3ZlQWZ0ZXJVbm1vdW50KSB7XHJcbiAgICAgICAgT2JqZWN0LmVudHJpZXMocmVkdWNlcnMpLmZvckVhY2goKFtyZWR1Y2VyTmFtZSwgcmVkdWNlcl0pID0+IHtcclxuICAgICAgICAgIHN0b3JlLnJlZHVjZXJNYW5hZ2VyLnJlbW92ZShyZWR1Y2VyTmFtZSBhcyBTdGF0ZVNjaGVtYUtleSlcclxuICAgICAgICAgIGRpc3BhdGNoKHsgdHlwZTogYEBERVNUUk9ZICR7cmVkdWNlck5hbWV9IHJlZHVjZXJgIH0pXHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sIFtkaXNwYXRjaCwgcmVkdWNlcnMsIHJlbW92ZUFmdGVyVW5tb3VudCwgc3RvcmUucmVkdWNlck1hbmFnZXJdKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgICA8PlxyXG4gICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICA8Lz5cclxuXHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgeyBEeW5hbWljTW9kdWxlTG9hZGVyIH1cclxuIiwiaW1wb3J0IHsgdHlwZSBNb2RzLCBjbGFzc05hbWVzIH0gZnJvbSAnc2hhcmVkL2xpYi9jbGFzc05hbWVzL2NsYXNzTmFtZXMnXHJcbmltcG9ydCBjbHMgZnJvbSAnLi9JbnB1dC5tb2R1bGUuc2NzcydcclxuaW1wb3J0IHsgbWVtbywgdHlwZSBJbnB1dEhUTUxBdHRyaWJ1dGVzLCB0eXBlIEZDIH0gZnJvbSAncmVhY3QnXHJcblxyXG50eXBlIEhUTUxJbnB1dFByb3BzID0gT21pdDxJbnB1dEhUTUxBdHRyaWJ1dGVzPEhUTUxJbnB1dEVsZW1lbnQ+LCAndmFsdWUnIHwgJ29uQ2hhbmdlJyB8ICd0eXBlJyB8ICdyZWFkT25seSc+XHJcblxyXG5pbnRlcmZhY2UgSW5wdXRQcm9wcyBleHRlbmRzIEhUTUxJbnB1dFByb3BzIHtcclxuICBjbGFzc05hbWU/OiBzdHJpbmdcclxuICB2YWx1ZT86IHN0cmluZyB8IG51bWJlclxyXG4gIHR5cGU/OiBzdHJpbmdcclxuICBvbkNoYW5nZT86ICh2YWx1ZTogc3RyaW5nKSA9PiB2b2lkXHJcbiAgcmVhZG9ubHk/OiBib29sZWFuXHJcbiAgcGxhY2Vob2xkZXI/OiBzdHJpbmdcclxufVxyXG5cclxuY29uc3QgSW5wdXQ6IEZDPElucHV0UHJvcHM+ID0gbWVtbygocHJvcHM6IElucHV0UHJvcHMpID0+IHtcclxuICBjb25zdCB7IGNsYXNzTmFtZSA9ICcnLCB2YWx1ZSA9ICcnLCB0eXBlID0gJ3RleHQnLCBwbGFjZWhvbGRlciA9ICcnLCBvbkNoYW5nZSwgcmVhZG9ubHkgPSBmYWxzZSwgLi4ub3RoZXJQcm9wcyB9ID0gcHJvcHNcclxuXHJcbiAgY29uc3Qgb25DaGFuZ2VIYW5kbGVyID0gKGU6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XHJcbiAgICBvbkNoYW5nZT8uKGUudGFyZ2V0LnZhbHVlKVxyXG4gIH1cclxuXHJcbiAgY29uc3QgbW9kczogTW9kcyA9IHtcclxuICAgIFtjbHMucmVhZG9ubHldOiByZWFkb25seVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZXMoY2xzLklucHV0LCBtb2RzLCBbY2xhc3NOYW1lXSl9PlxyXG4gICAgICAgICAgPGlucHV0IHR5cGU9e3R5cGV9IHZhbHVlPXt2YWx1ZX0gcmVhZE9ubHk9e3JlYWRvbmx5fSBvbkNoYW5nZT17b25DaGFuZ2VIYW5kbGVyfSBwbGFjZWhvbGRlcj17cGxhY2Vob2xkZXJ9IC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gIClcclxufSlcclxuXHJcbklucHV0LmRpc3BsYXlOYW1lID0gJ0lucHV0J1xyXG5cclxuZXhwb3J0IHsgSW5wdXQgfVxyXG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLnNyYy1mZWF0dXJlcy1BdXRoQnlVc2VybmFtZS11aS1Mb2dpbkZvcm0tTG9naW5Gb3JtLW1vZHVsZV9fTG9naW5Gb3JtLS14WU5FZiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHdpZHRoOiA0MDBweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnNyYy1mZWF0dXJlcy1BdXRoQnlVc2VybmFtZS11aS1Mb2dpbkZvcm0tTG9naW5Gb3JtLW1vZHVsZV9fbG9naW5UaXRsZS0tdE5IU3Ige1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4uc3JjLWZlYXR1cmVzLUF1dGhCeVVzZXJuYW1lLXVpLUxvZ2luRm9ybS1Mb2dpbkZvcm0tbW9kdWxlX19sb2dpbkVycm9yLS1lTVJpcCB7XG4gIG1hcmdpbjogMTVweCAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5zcmMtZmVhdHVyZXMtQXV0aEJ5VXNlcm5hbWUtdWktTG9naW5Gb3JtLUxvZ2luRm9ybS1tb2R1bGVfX2xvZ2luQnRuLS1Pa181YSB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvZmVhdHVyZXMvQXV0aEJ5VXNlcm5hbWUvdWkvTG9naW5Gb3JtL0xvZ2luRm9ybS5tb2R1bGUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUVBO0VBQ0ksbUJBQUE7QUFDSjs7QUFFQTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUVBO0VBQ0ksZ0JBQUE7QUFDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuTG9naW5Gb3JtIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgd2lkdGg6IDQwMHB4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubG9naW5UaXRsZSB7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5sb2dpbkVycm9yIHtcXHJcXG4gICAgbWFyZ2luOiAxNXB4IDA7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmxvZ2luQnRuIHtcXHJcXG4gICAgbWFyZ2luLXRvcDogMjBweDtcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwiTG9naW5Gb3JtXCI6IGBzcmMtZmVhdHVyZXMtQXV0aEJ5VXNlcm5hbWUtdWktTG9naW5Gb3JtLUxvZ2luRm9ybS1tb2R1bGVfX0xvZ2luRm9ybS0teFlORWZgLFxuXHRcImxvZ2luVGl0bGVcIjogYHNyYy1mZWF0dXJlcy1BdXRoQnlVc2VybmFtZS11aS1Mb2dpbkZvcm0tTG9naW5Gb3JtLW1vZHVsZV9fbG9naW5UaXRsZS0tdE5IU3JgLFxuXHRcImxvZ2luRXJyb3JcIjogYHNyYy1mZWF0dXJlcy1BdXRoQnlVc2VybmFtZS11aS1Mb2dpbkZvcm0tTG9naW5Gb3JtLW1vZHVsZV9fbG9naW5FcnJvci0tZU1SaXBgLFxuXHRcImxvZ2luQnRuXCI6IGBzcmMtZmVhdHVyZXMtQXV0aEJ5VXNlcm5hbWUtdWktTG9naW5Gb3JtLUxvZ2luRm9ybS1tb2R1bGVfX2xvZ2luQnRuLS1Pa181YWBcbn07XG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAuc3JjLXNoYXJlZC11aS1JbnB1dC1JbnB1dC1tb2R1bGVfX0lucHV0LS1YOEVWYiB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi5zcmMtc2hhcmVkLXVpLUlucHV0LUlucHV0LW1vZHVsZV9fSW5wdXQtLVg4RVZiIGlucHV0IHtcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbi5zcmMtc2hhcmVkLXVpLUlucHV0LUlucHV0LW1vZHVsZV9fcmVhZG9ubHktLWZUTjFQIHtcbiAgYm9yZGVyOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIG9wYWNpdHk6IDAuNztcbn1cbi5zcmMtc2hhcmVkLXVpLUlucHV0LUlucHV0LW1vZHVsZV9fcmVhZG9ubHktLWZUTjFQIGlucHV0IHtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3NoYXJlZC91aS9JbnB1dC9JbnB1dC5tb2R1bGUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNJLGdCQUFBO0FBQ0o7O0FBRUE7RUFDSSxhQUFBO0VBQ0Esc0NBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUVBO0VBQ0ksNkJBQUE7RUFDQSxZQUFBO0FBQ0o7QUFDSTtFQUNJLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7QUFDUlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuSW5wdXQge1xcclxcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uSW5wdXQgaW5wdXQge1xcclxcbiAgICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnJlYWRvbmx5IHtcXHJcXG4gICAgYm9yZGVyOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XFxyXFxuICAgIG9wYWNpdHk6IDAuNztcXHJcXG5cXHJcXG4gICAgaW5wdXQge1xcclxcbiAgICAgICAgYm9yZGVyOiBub25lO1xcclxcbiAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcXHJcXG4gICAgICAgIG91dGxpbmU6IG5vbmU7XFxyXFxuICAgIH1cXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwiSW5wdXRcIjogYHNyYy1zaGFyZWQtdWktSW5wdXQtSW5wdXQtbW9kdWxlX19JbnB1dC0tWDhFVmJgLFxuXHRcInJlYWRvbmx5XCI6IGBzcmMtc2hhcmVkLXVpLUlucHV0LUlucHV0LW1vZHVsZV9fcmVhZG9ubHktLWZUTjFQYFxufTtcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1s0XS51c2VbMV0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vTG9naW5Gb3JtLm1vZHVsZS5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cbmlmIChtb2R1bGUuaG90KSB7XG4gIGlmICghY29udGVudC5sb2NhbHMgfHwgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKSB7XG4gICAgdmFyIGlzRXF1YWxMb2NhbHMgPSBmdW5jdGlvbiBpc0VxdWFsTG9jYWxzKGEsIGIsIGlzTmFtZWRFeHBvcnQpIHtcbiAgaWYgKCFhICYmIGIgfHwgYSAmJiAhYikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgcDtcbiAgZm9yIChwIGluIGEpIHtcbiAgICBpZiAoaXNOYW1lZEV4cG9ydCAmJiBwID09PSBcImRlZmF1bHRcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgaWYgKGFbcF0gIT09IGJbcF0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgZm9yIChwIGluIGIpIHtcbiAgICBpZiAoaXNOYW1lZEV4cG9ydCAmJiBwID09PSBcImRlZmF1bHRcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgaWYgKCFhW3BdKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIHJldHVybiB0cnVlO1xufTtcbiAgICB2YXIgaXNOYW1lZEV4cG9ydCA9ICFjb250ZW50LmxvY2FscztcbiAgICB2YXIgb2xkTG9jYWxzID0gaXNOYW1lZEV4cG9ydCA/IG5hbWVkRXhwb3J0IDogY29udGVudC5sb2NhbHM7XG5cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcbiAgICAgIFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1s0XS51c2VbMV0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vTG9naW5Gb3JtLm1vZHVsZS5zY3NzXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghaXNFcXVhbExvY2FscyhvbGRMb2NhbHMsIGlzTmFtZWRFeHBvcnQgPyBuYW1lZEV4cG9ydCA6IGNvbnRlbnQubG9jYWxzLCBpc05hbWVkRXhwb3J0KSkge1xuICAgICAgICAgICAgICAgIG1vZHVsZS5ob3QuaW52YWxpZGF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgb2xkTG9jYWxzID0gaXNOYW1lZEV4cG9ydCA/IG5hbWVkRXhwb3J0IDogY29udGVudC5sb2NhbHM7XG5cbiAgICAgICAgICAgICAgdXBkYXRlKGNvbnRlbnQpO1xuICAgICAgfVxuICAgIClcbiAgfVxuXG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHtcbiAgICB1cGRhdGUoKTtcbiAgfSk7XG59XG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbNF0udXNlWzFdIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL0xvZ2luRm9ybS5tb2R1bGUuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbNF0udXNlWzFdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL0lucHV0Lm1vZHVsZS5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cbmlmIChtb2R1bGUuaG90KSB7XG4gIGlmICghY29udGVudC5sb2NhbHMgfHwgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKSB7XG4gICAgdmFyIGlzRXF1YWxMb2NhbHMgPSBmdW5jdGlvbiBpc0VxdWFsTG9jYWxzKGEsIGIsIGlzTmFtZWRFeHBvcnQpIHtcbiAgaWYgKCFhICYmIGIgfHwgYSAmJiAhYikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgcDtcbiAgZm9yIChwIGluIGEpIHtcbiAgICBpZiAoaXNOYW1lZEV4cG9ydCAmJiBwID09PSBcImRlZmF1bHRcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgaWYgKGFbcF0gIT09IGJbcF0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgZm9yIChwIGluIGIpIHtcbiAgICBpZiAoaXNOYW1lZEV4cG9ydCAmJiBwID09PSBcImRlZmF1bHRcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgaWYgKCFhW3BdKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIHJldHVybiB0cnVlO1xufTtcbiAgICB2YXIgaXNOYW1lZEV4cG9ydCA9ICFjb250ZW50LmxvY2FscztcbiAgICB2YXIgb2xkTG9jYWxzID0gaXNOYW1lZEV4cG9ydCA/IG5hbWVkRXhwb3J0IDogY29udGVudC5sb2NhbHM7XG5cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcbiAgICAgIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1s0XS51c2VbMV0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vSW5wdXQubW9kdWxlLnNjc3NcIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCFpc0VxdWFsTG9jYWxzKG9sZExvY2FscywgaXNOYW1lZEV4cG9ydCA/IG5hbWVkRXhwb3J0IDogY29udGVudC5sb2NhbHMsIGlzTmFtZWRFeHBvcnQpKSB7XG4gICAgICAgICAgICAgICAgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKCk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBvbGRMb2NhbHMgPSBpc05hbWVkRXhwb3J0ID8gbmFtZWRFeHBvcnQgOiBjb250ZW50LmxvY2FscztcblxuICAgICAgICAgICAgICB1cGRhdGUoY29udGVudCk7XG4gICAgICB9XG4gICAgKVxuICB9XG5cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkge1xuICAgIHVwZGF0ZSgpO1xuICB9KTtcbn1cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1s0XS51c2VbMV0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vSW5wdXQubW9kdWxlLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJpbXBvcnQgeyB0eXBlIFN0YXRlU2NoZW1hIH0gZnJvbSAnYXBwL3Byb3ZpZGVycy9TdG9yZVByb3ZpZGVyJ1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldExvZ2luRXJyb3IgPSAoc3RhdGU6IFN0YXRlU2NoZW1hKSA9PiBzdGF0ZT8ubG9naW5Gb3JtPy5lcnJvclxyXG4iLCJpbXBvcnQgeyB0eXBlIFN0YXRlU2NoZW1hIH0gZnJvbSAnYXBwL3Byb3ZpZGVycy9TdG9yZVByb3ZpZGVyJ1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldExvZ2luSXNMb2FkaW5nID0gKHN0YXRlOiBTdGF0ZVNjaGVtYSkgPT4gc3RhdGU/LmxvZ2luRm9ybT8uaXNMb2FkaW5nIHx8IGZhbHNlXHJcbiIsImltcG9ydCB7IHR5cGUgU3RhdGVTY2hlbWEgfSBmcm9tICdhcHAvcHJvdmlkZXJzL1N0b3JlUHJvdmlkZXInXHJcblxyXG5leHBvcnQgY29uc3QgZ2V0TG9naW5QYXNzd29yZCA9IChzdGF0ZTogU3RhdGVTY2hlbWEpID0+IHN0YXRlPy5sb2dpbkZvcm0/LnBhc3N3b3JkIHx8ICcnXHJcbiIsImltcG9ydCB7IHR5cGUgU3RhdGVTY2hlbWEgfSBmcm9tICdhcHAvcHJvdmlkZXJzL1N0b3JlUHJvdmlkZXInXHJcblxyXG5leHBvcnQgY29uc3QgZ2V0TG9naW5Vc2VybmFtZSA9IChzdGF0ZTogU3RhdGVTY2hlbWEpID0+IHN0YXRlPy5sb2dpbkZvcm0/LnVzZXJuYW1lIHx8ICcnXHJcbiIsImltcG9ydCB7IGNyZWF0ZUFzeW5jVGh1bmsgfSBmcm9tICdAcmVkdXhqcy90b29sa2l0J1xyXG5pbXBvcnQgeyB0eXBlIFRodW5rQ29uZmlnIH0gZnJvbSAnYXBwL3Byb3ZpZGVycy9TdG9yZVByb3ZpZGVyJ1xyXG5pbXBvcnQgeyB1c2VyQWN0aW9ucyB9IGZyb20gJ2VudGl0aWVzL1VzZXInXHJcbmltcG9ydCB7IHR5cGUgVXNlciB9IGZyb20gJ2VudGl0aWVzL1VzZXIvbW9kZWwvdHlwZXMvdXNlcidcclxuaW1wb3J0IHsgVVNFUl9MT0NBTFNUT1JBR0VfS0VZIH0gZnJvbSAnc2hhcmVkL2NvbnN0L2xvY2Fsc3RvcmFnZSdcclxuXHJcbmludGVyZmFjZSBMb2dpbkJ5VXNlcm5hbWVQcm9wcyB7XHJcbiAgdXNlcm5hbWU6IHN0cmluZ1xyXG4gIHBhc3N3b3JkOiBzdHJpbmdcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGxvZ2luQnlVc2VybmFtZSA9IGNyZWF0ZUFzeW5jVGh1bms8VXNlciwgTG9naW5CeVVzZXJuYW1lUHJvcHMsIFRodW5rQ29uZmlnPHN0cmluZz4+KFxyXG4gICdsb2dpbi9sb2dpbkJ5VXNlcm5hbWUnLFxyXG4gIGFzeW5jIChhdXRoRGF0YSwgdGh1bmtBcGkpID0+IHtcclxuICAgIGNvbnN0IHsgZGlzcGF0Y2gsIGV4dHJhLCByZWplY3RXaXRoVmFsdWUgfSA9IHRodW5rQXBpXHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBleHRyYS5hcGkucG9zdDxVc2VyPignL2xvZ2luJywgYXV0aERhdGEpXHJcblxyXG4gICAgICBpZiAoIXJlc3BvbnNlLmRhdGEpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSlcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoKVxyXG4gICAgICB9XHJcbiAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEpXHJcblxyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShVU0VSX0xPQ0FMU1RPUkFHRV9LRVksIEpTT04uc3RyaW5naWZ5KHJlc3BvbnNlLmRhdGEpKVxyXG4gICAgICBkaXNwYXRjaCh1c2VyQWN0aW9ucy5zZXRBdXRoRGF0YShyZXNwb25zZS5kYXRhKSlcclxuXHJcbiAgICAgIGV4dHJhLm5hdmlnYXRlPy4oJy9hYm91dCcpXHJcblxyXG4gICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YVxyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIHJldHVybiByZWplY3RXaXRoVmFsdWUoJ2Vycm9yJylcclxuICAgIH1cclxuICB9XHJcbilcclxuIiwiaW1wb3J0IHsgdHlwZSBQYXlsb2FkQWN0aW9uLCBjcmVhdGVTbGljZSB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQnXHJcbmltcG9ydCB7IHR5cGUgTG9naW5TY2hlbWEgfSBmcm9tICcuLi90eXBlcy9sb2dpblNjaGVtYSdcclxuaW1wb3J0IHsgbG9naW5CeVVzZXJuYW1lIH0gZnJvbSAnLi4vc2VydmljZXMvbG9naW5CeVVzZXJuYW1lL2xvZ2luQnlVc2VybmFtZSdcclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZTogTG9naW5TY2hlbWEgPSB7XHJcbiAgaXNMb2FkaW5nOiBmYWxzZSxcclxuICB1c2VybmFtZTogJycsXHJcbiAgcGFzc3dvcmQ6ICcnXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBsb2dpblNsaWNlID0gY3JlYXRlU2xpY2Uoe1xyXG4gIG5hbWU6ICdsb2dpbicsXHJcbiAgaW5pdGlhbFN0YXRlLFxyXG4gIHJlZHVjZXJzOiB7XHJcbiAgICBzZXRVc2VybmFtZTogKHN0YXRlLCBhY3Rpb246IFBheWxvYWRBY3Rpb248c3RyaW5nPikgPT4ge1xyXG4gICAgICBzdGF0ZS51c2VybmFtZSA9IGFjdGlvbi5wYXlsb2FkXHJcbiAgICB9LFxyXG4gICAgc2V0UGFzc3dvcmQ6IChzdGF0ZSwgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPHN0cmluZz4pID0+IHtcclxuICAgICAgc3RhdGUucGFzc3dvcmQgPSBhY3Rpb24ucGF5bG9hZFxyXG4gICAgfVxyXG4gIH0sXHJcbiAgZXh0cmFSZWR1Y2VyczogKGJ1aWxkZXIpID0+IHtcclxuICAgIGJ1aWxkZXIuYWRkQ2FzZShsb2dpbkJ5VXNlcm5hbWUucGVuZGluZywgKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgICAgc3RhdGUuZXJyb3IgPSB1bmRlZmluZWRcclxuICAgICAgc3RhdGUuaXNMb2FkaW5nID0gdHJ1ZVxyXG4gICAgfSlcclxuICAgIGJ1aWxkZXIuYWRkQ2FzZShsb2dpbkJ5VXNlcm5hbWUuZnVsZmlsbGVkLCAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgICBzdGF0ZS5pc0xvYWRpbmcgPSBmYWxzZVxyXG4gICAgfSlcclxuICAgIGJ1aWxkZXIuYWRkQ2FzZShsb2dpbkJ5VXNlcm5hbWUucmVqZWN0ZWQsIChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgIHN0YXRlLmlzTG9hZGluZyA9IGZhbHNlXHJcbiAgICAgIHN0YXRlLmVycm9yID0gYWN0aW9uLnBheWxvYWQgYXMgc3RyaW5nXHJcbiAgICB9KVxyXG4gIH1cclxufSlcclxuXHJcbmV4cG9ydCBjb25zdCB7IGFjdGlvbnM6IGxvZ2luQWN0aW9ucyB9ID0gbG9naW5TbGljZVxyXG5leHBvcnQgY29uc3QgeyByZWR1Y2VyOiBsb2dpblJlZHVjZXIgfSA9IGxvZ2luU2xpY2VcclxuIl0sIm5hbWVzIjpbImNsYXNzTmFtZXMiLCJjbHMiLCJ1c2VUcmFuc2xhdGlvbiIsIkJ1dHRvbiIsIklucHV0IiwidXNlU2VsZWN0b3IiLCJtZW1vIiwidXNlQ2FsbGJhY2siLCJsb2dpbkFjdGlvbnMiLCJsb2dpblJlZHVjZXIiLCJsb2dpbkJ5VXNlcm5hbWUiLCJUZXh0IiwiVGV4dFRoZW1lIiwiZ2V0TG9naW5Vc2VybmFtZSIsImdldExvZ2luUGFzc3dvcmQiLCJnZXRMb2dpbkVycm9yIiwiZ2V0TG9naW5Jc0xvYWRpbmciLCJEeW5hbWljTW9kdWxlTG9hZGVyIiwidXNlQXBwRGlzcGF0Y2giLCJpbml0aWFsUmVkdWNlcnMiLCJsb2dpbkZvcm0iLCJMb2dpbkZvcm0iLCJfcyIsIl9jIiwiX2EiLCJfYiIsImNsYXNzTmFtZSIsIm9uU3VjY2VzcyIsInQiLCJkaXNwYXRjaCIsInVzZXJuYW1lIiwicGFzc3dvcmQiLCJlcnJvciIsImlzTG9hZGluZyIsIm9uQ2hhbmdlVXNlcm5hbWUiLCJ2YWx1ZSIsInNldFVzZXJuYW1lIiwib25DaGFuZ2VQYXNzd29yZCIsInNldFBhc3N3b3JkIiwib25Mb2dpbkNsaWNrIiwiX19hd2FpdGVyIiwicmVzdWx0Iiwic2VudCIsIm1ldGEiLCJyZXF1ZXN0U3RhdHVzIiwiX2pzeCIsInJlZHVjZXJzIiwiY2hpbGRyZW4iLCJfanN4cyIsInRpdGxlIiwibG9naW5UaXRsZSIsInRleHQiLCJ0aGVtZSIsIkVSUk9SIiwibG9naW5FcnJvciIsIm9uQ2hhbmdlIiwicGxhY2Vob2xkZXIiLCJvbkNsaWNrIiwibG9naW5CdG4iLCJkaXNhYmxlZCIsIl9jMiIsImRpc3BsYXlOYW1lIiwiJFJlZnJlc2hSZWckIiwidXNlRWZmZWN0IiwidXNlU3RvcmUiLCJwcm9wcyIsInJlbW92ZUFmdGVyVW5tb3VudCIsInN0b3JlIiwibW91bnRlZFJlZHVjZXJzIiwicmVkdWNlck1hbmFnZXIiLCJnZXRNb3VudGVkUmVkdWNlcnMiLCJPYmplY3QiLCJlbnRyaWVzIiwiZm9yRWFjaCIsInJlZHVjZXJOYW1lIiwicmVkdWNlciIsIm1vdW50ZWQiLCJhZGQiLCJ0eXBlIiwiY29uY2F0IiwicmVtb3ZlIiwiX0ZyYWdtZW50IiwiX2QiLCJfZSIsIl9mIiwicmVhZG9ubHkiLCJvdGhlclByb3BzIiwiX19yZXN0Iiwib25DaGFuZ2VIYW5kbGVyIiwiZSIsInRhcmdldCIsIm1vZHMiLCJyZWFkT25seSIsIl9jMyJdLCJzb3VyY2VSb290IjoiIn0=