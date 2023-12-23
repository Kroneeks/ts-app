"use strict";
(self["webpackChunkfloristby"] = self["webpackChunkfloristby"] || []).push([["src_pages_ArticlePage_ui_ArticlePage_ArticlePage_tsx"],{

/***/ "./src/pages/ArticlePage/ui/ArticlePageFilters/ArticlePageFilters.tsx":
/*!****************************************************************************!*\
  !*** ./src/pages/ArticlePage/ui/ArticlePageFilters/ArticlePageFilters.tsx ***!
  \****************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ArticlePageFilters: () => (/* binding */ ArticlePageFilters)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var shared_lib_classNames_classNames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shared/lib/classNames/classNames */ "./src/shared/lib/classNames/classNames.ts");
/* harmony import */ var _ArticlePageFilters_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ArticlePageFilters.module.scss */ "./src/pages/ArticlePage/ui/ArticlePageFilters/ArticlePageFilters.module.scss");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var entities_Article__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! entities/Article */ "./src/entities/Article/index.ts");
/* harmony import */ var _model_slices_articlesPageSlice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../model/slices/articlesPageSlice */ "./src/pages/ArticlePage/model/slices/articlesPageSlice.ts");
/* harmony import */ var shared_lib_hooks_useAppDispatch_useAppDispatch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! shared/lib/hooks/useAppDispatch/useAppDispatch */ "./src/shared/lib/hooks/useAppDispatch/useAppDispatch.ts");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _model_selectors_articlesPageSelector__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../model/selectors/articlesPageSelector */ "./src/pages/ArticlePage/model/selectors/articlesPageSelector.ts");
/* harmony import */ var shared_ui_Card_Card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! shared/ui/Card/Card */ "./src/shared/ui/Card/Card.tsx");
/* harmony import */ var shared_ui_Input_Input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! shared/ui/Input/Input */ "./src/shared/ui/Input/Input.tsx");
/* harmony import */ var _model_services_fetchArticlesList_fetchArticlesList__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../model/services/fetchArticlesList/fetchArticlesList */ "./src/pages/ArticlePage/model/services/fetchArticlesList/fetchArticlesList.ts");
/* harmony import */ var shared_lib_hooks_useDebounce_useDebounce__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! shared/lib/hooks/useDebounce/useDebounce */ "./src/shared/lib/hooks/useDebounce/useDebounce.ts");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

var _s = __webpack_require__.$Refresh$.signature();














var ArticlePageFilters = /*#__PURE__*/_s( /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_4__.memo)(_c = _s(function (props) {
  _s();
  var _a = props.className,
    className = _a === void 0 ? '' : _a;
  var t = (0,react_i18next__WEBPACK_IMPORTED_MODULE_3__.useTranslation)('article').t;
  var dispatch = (0,shared_lib_hooks_useAppDispatch_useAppDispatch__WEBPACK_IMPORTED_MODULE_7__.useAppDispatch)();
  var view = (0,react_redux__WEBPACK_IMPORTED_MODULE_8__.useSelector)(_model_selectors_articlesPageSelector__WEBPACK_IMPORTED_MODULE_9__.getArticlesPageView);
  var sort = (0,react_redux__WEBPACK_IMPORTED_MODULE_8__.useSelector)(_model_selectors_articlesPageSelector__WEBPACK_IMPORTED_MODULE_9__.getArticlesPageSort);
  var order = (0,react_redux__WEBPACK_IMPORTED_MODULE_8__.useSelector)(_model_selectors_articlesPageSelector__WEBPACK_IMPORTED_MODULE_9__.getArticlesPageOrder);
  var search = (0,react_redux__WEBPACK_IMPORTED_MODULE_8__.useSelector)(_model_selectors_articlesPageSelector__WEBPACK_IMPORTED_MODULE_9__.getArticlesPageSearch);
  var type = (0,react_redux__WEBPACK_IMPORTED_MODULE_8__.useSelector)(_model_selectors_articlesPageSelector__WEBPACK_IMPORTED_MODULE_9__.getArticlesPageType);
  var fetchData = (0,react__WEBPACK_IMPORTED_MODULE_4__.useCallback)(function () {
    void dispatch((0,_model_services_fetchArticlesList_fetchArticlesList__WEBPACK_IMPORTED_MODULE_12__.fetchArticlesList)({
      replace: true
    }));
  }, [dispatch]);
  var debouncedFetchData = (0,shared_lib_hooks_useDebounce_useDebounce__WEBPACK_IMPORTED_MODULE_13__.useDebounce)(fetchData, 500);
  var onChangeView = (0,react__WEBPACK_IMPORTED_MODULE_4__.useCallback)(function (newView) {
    dispatch(_model_slices_articlesPageSlice__WEBPACK_IMPORTED_MODULE_6__.articlesPageActions.setView(newView));
    dispatch(_model_slices_articlesPageSlice__WEBPACK_IMPORTED_MODULE_6__.articlesPageActions.setPage(1));
    fetchData();
  }, [dispatch, fetchData]);
  var onChangeOrder = (0,react__WEBPACK_IMPORTED_MODULE_4__.useCallback)(function (newOrder) {
    dispatch(_model_slices_articlesPageSlice__WEBPACK_IMPORTED_MODULE_6__.articlesPageActions.setOrder(newOrder));
    dispatch(_model_slices_articlesPageSlice__WEBPACK_IMPORTED_MODULE_6__.articlesPageActions.setPage(1));
    fetchData();
  }, [dispatch, fetchData]);
  var onChangeSort = (0,react__WEBPACK_IMPORTED_MODULE_4__.useCallback)(function (newSort) {
    dispatch(_model_slices_articlesPageSlice__WEBPACK_IMPORTED_MODULE_6__.articlesPageActions.setSort(newSort));
    dispatch(_model_slices_articlesPageSlice__WEBPACK_IMPORTED_MODULE_6__.articlesPageActions.setPage(1));
    fetchData();
  }, [dispatch, fetchData]);
  var onChangeSearch = (0,react__WEBPACK_IMPORTED_MODULE_4__.useCallback)(function (search) {
    dispatch(_model_slices_articlesPageSlice__WEBPACK_IMPORTED_MODULE_6__.articlesPageActions.setSearch(search));
    dispatch(_model_slices_articlesPageSlice__WEBPACK_IMPORTED_MODULE_6__.articlesPageActions.setPage(1));
    debouncedFetchData();
  }, [dispatch, debouncedFetchData]);
  var onChangeType = (0,react__WEBPACK_IMPORTED_MODULE_4__.useCallback)(function (value) {
    dispatch(_model_slices_articlesPageSlice__WEBPACK_IMPORTED_MODULE_6__.articlesPageActions.setType(value));
    dispatch(_model_slices_articlesPageSlice__WEBPACK_IMPORTED_MODULE_6__.articlesPageActions.setPage(1));
    fetchData();
  }, [dispatch, fetchData]);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
    className: (0,shared_lib_classNames_classNames__WEBPACK_IMPORTED_MODULE_1__.classNames)(_ArticlePageFilters_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].ArticlePageFilters, {}, [className]),
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
      className: _ArticlePageFilters_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].sortWrapper,
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(entities_Article__WEBPACK_IMPORTED_MODULE_5__.ArticleSortSelector, {
        order: order,
        sort: sort,
        onChangeOrder: onChangeOrder,
        onChangeSort: onChangeSort
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(entities_Article__WEBPACK_IMPORTED_MODULE_5__.ArticleViewSelector, {
        view: entities_Article__WEBPACK_IMPORTED_MODULE_5__.ArticleView.BLOCK,
        onViewClick: onChangeView
      })]
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(shared_ui_Card_Card__WEBPACK_IMPORTED_MODULE_10__.Card, {
      className: _ArticlePageFilters_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].search,
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(shared_ui_Input_Input__WEBPACK_IMPORTED_MODULE_11__.Input, {
        onChange: onChangeSearch,
        value: search,
        placeholder: t('Поиск')
      })
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(entities_Article__WEBPACK_IMPORTED_MODULE_5__.ArticleTypeTabs, {
      value: type,
      onChangeType: onChangeType,
      className: _ArticlePageFilters_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].tabs
    })]
  });
}, "JOsLzejHQ2Mmw4GZH596xurppfs=", false, function () {
  return [react_i18next__WEBPACK_IMPORTED_MODULE_3__.useTranslation, shared_lib_hooks_useAppDispatch_useAppDispatch__WEBPACK_IMPORTED_MODULE_7__.useAppDispatch, react_redux__WEBPACK_IMPORTED_MODULE_8__.useSelector, react_redux__WEBPACK_IMPORTED_MODULE_8__.useSelector, react_redux__WEBPACK_IMPORTED_MODULE_8__.useSelector, react_redux__WEBPACK_IMPORTED_MODULE_8__.useSelector, react_redux__WEBPACK_IMPORTED_MODULE_8__.useSelector, shared_lib_hooks_useDebounce_useDebounce__WEBPACK_IMPORTED_MODULE_13__.useDebounce];
})), "JOsLzejHQ2Mmw4GZH596xurppfs=", false, function () {
  return [react_i18next__WEBPACK_IMPORTED_MODULE_3__.useTranslation, shared_lib_hooks_useAppDispatch_useAppDispatch__WEBPACK_IMPORTED_MODULE_7__.useAppDispatch, react_redux__WEBPACK_IMPORTED_MODULE_8__.useSelector, react_redux__WEBPACK_IMPORTED_MODULE_8__.useSelector, react_redux__WEBPACK_IMPORTED_MODULE_8__.useSelector, react_redux__WEBPACK_IMPORTED_MODULE_8__.useSelector, react_redux__WEBPACK_IMPORTED_MODULE_8__.useSelector, shared_lib_hooks_useDebounce_useDebounce__WEBPACK_IMPORTED_MODULE_13__.useDebounce];
});
_c2 = ArticlePageFilters;
ArticlePageFilters.displayName = 'ArticlePageFilters';

var _c, _c2;
__webpack_require__.$Refresh$.register(_c, "ArticlePageFilters$memo");
__webpack_require__.$Refresh$.register(_c2, "ArticlePageFilters");

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

/***/ "./src/pages/ArticlePage/ui/ArticlePage/ArticlePage.tsx":
/*!**************************************************************!*\
  !*** ./src/pages/ArticlePage/ui/ArticlePage/ArticlePage.tsx ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var _ArticlePage_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ArticlePage.module.scss */ "./src/pages/ArticlePage/ui/ArticlePage/ArticlePage.module.scss");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var entities_Article__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! entities/Article */ "./src/entities/Article/index.ts");
/* harmony import */ var _model_slices_articlesPageSlice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../model/slices/articlesPageSlice */ "./src/pages/ArticlePage/model/slices/articlesPageSlice.ts");
/* harmony import */ var shared_lib_components_DynamicModuleLoader_DynamicModuleLoader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! shared/lib/components/DynamicModuleLoader/DynamicModuleLoader */ "./src/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader.tsx");
/* harmony import */ var shared_lib_hooks_useInitialEffect_useInitialEffect__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! shared/lib/hooks/useInitialEffect/useInitialEffect */ "./src/shared/lib/hooks/useInitialEffect/useInitialEffect.ts");
/* harmony import */ var shared_lib_hooks_useAppDispatch_useAppDispatch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! shared/lib/hooks/useAppDispatch/useAppDispatch */ "./src/shared/lib/hooks/useAppDispatch/useAppDispatch.ts");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _model_selectors_articlesPageSelector__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../model/selectors/articlesPageSelector */ "./src/pages/ArticlePage/model/selectors/articlesPageSelector.ts");
/* harmony import */ var _model_services_fetchNextArticlesPage_fetchNextArticlesPage__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../model/services/fetchNextArticlesPage/fetchNextArticlesPage */ "./src/pages/ArticlePage/model/services/fetchNextArticlesPage/fetchNextArticlesPage.ts");
/* harmony import */ var _model_services_initArticlesPage_initArticlesPage__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../model/services/initArticlesPage/initArticlesPage */ "./src/pages/ArticlePage/model/services/initArticlesPage/initArticlesPage.ts");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var _ArticlePageFilters_ArticlePageFilters__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../ArticlePageFilters/ArticlePageFilters */ "./src/pages/ArticlePage/ui/ArticlePageFilters/ArticlePageFilters.tsx");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

var _s = __webpack_require__.$Refresh$.signature();















var reducers = {
  articlesPage: _model_slices_articlesPageSlice__WEBPACK_IMPORTED_MODULE_5__.articlesPageReducer
};
var ArticlePage = /*#__PURE__*/_s( /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_3__.memo)(_c = _s(function (_a) {
  _s();
  var _b = _a.className,
    className = _b === void 0 ? '' : _b;
  var t = (0,react_i18next__WEBPACK_IMPORTED_MODULE_2__.useTranslation)().t;
  var dispatch = (0,shared_lib_hooks_useAppDispatch_useAppDispatch__WEBPACK_IMPORTED_MODULE_8__.useAppDispatch)();
  var articles = (0,react_redux__WEBPACK_IMPORTED_MODULE_9__.useSelector)(_model_slices_articlesPageSlice__WEBPACK_IMPORTED_MODULE_5__.getArticles.selectAll);
  var isLoading = (0,react_redux__WEBPACK_IMPORTED_MODULE_9__.useSelector)(_model_selectors_articlesPageSelector__WEBPACK_IMPORTED_MODULE_10__.getArticlesPageIsLoading);
  var error = (0,react_redux__WEBPACK_IMPORTED_MODULE_9__.useSelector)(_model_selectors_articlesPageSelector__WEBPACK_IMPORTED_MODULE_10__.getArticlesPageError);
  var view = (0,react_redux__WEBPACK_IMPORTED_MODULE_9__.useSelector)(_model_selectors_articlesPageSelector__WEBPACK_IMPORTED_MODULE_10__.getArticlesPageView);
  var inited = (0,react_redux__WEBPACK_IMPORTED_MODULE_9__.useSelector)(_model_selectors_articlesPageSelector__WEBPACK_IMPORTED_MODULE_10__.getArticlesPageInited);
  var searchParams = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_14__.useSearchParams)()[0];
  var onLoadNextPart = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(function () {
    void dispatch((0,_model_services_fetchNextArticlesPage_fetchNextArticlesPage__WEBPACK_IMPORTED_MODULE_11__.fetchNextArticlesPage)());
  }, [dispatch]);
  (0,shared_lib_hooks_useInitialEffect_useInitialEffect__WEBPACK_IMPORTED_MODULE_7__.useInitialEffect)(function () {
    void dispatch((0,_model_services_initArticlesPage_initArticlesPage__WEBPACK_IMPORTED_MODULE_12__.initArticlesPage)(searchParams));
  });
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(shared_lib_components_DynamicModuleLoader_DynamicModuleLoader__WEBPACK_IMPORTED_MODULE_6__.DynamicModuleLoader, {
    reducers: reducers,
    removeAfterUnmount: false,
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_ArticlePageFilters_ArticlePageFilters__WEBPACK_IMPORTED_MODULE_13__.ArticlePageFilters, {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(entities_Article__WEBPACK_IMPORTED_MODULE_4__.ArticleList, {
      view: view,
      isLoading: isLoading,
      articles: articles,
      className: _ArticlePage_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].list,
      onLoadNextPart: onLoadNextPart
    })]
  });
}, "SGCsc60EIjHc6yzQ6GD5DTfxmh8=", false, function () {
  return [react_i18next__WEBPACK_IMPORTED_MODULE_2__.useTranslation, shared_lib_hooks_useAppDispatch_useAppDispatch__WEBPACK_IMPORTED_MODULE_8__.useAppDispatch, react_redux__WEBPACK_IMPORTED_MODULE_9__.useSelector, react_redux__WEBPACK_IMPORTED_MODULE_9__.useSelector, react_redux__WEBPACK_IMPORTED_MODULE_9__.useSelector, react_redux__WEBPACK_IMPORTED_MODULE_9__.useSelector, react_redux__WEBPACK_IMPORTED_MODULE_9__.useSelector, react_router_dom__WEBPACK_IMPORTED_MODULE_14__.useSearchParams, shared_lib_hooks_useInitialEffect_useInitialEffect__WEBPACK_IMPORTED_MODULE_7__.useInitialEffect];
})), "SGCsc60EIjHc6yzQ6GD5DTfxmh8=", false, function () {
  return [react_i18next__WEBPACK_IMPORTED_MODULE_2__.useTranslation, shared_lib_hooks_useAppDispatch_useAppDispatch__WEBPACK_IMPORTED_MODULE_8__.useAppDispatch, react_redux__WEBPACK_IMPORTED_MODULE_9__.useSelector, react_redux__WEBPACK_IMPORTED_MODULE_9__.useSelector, react_redux__WEBPACK_IMPORTED_MODULE_9__.useSelector, react_redux__WEBPACK_IMPORTED_MODULE_9__.useSelector, react_redux__WEBPACK_IMPORTED_MODULE_9__.useSelector, react_router_dom__WEBPACK_IMPORTED_MODULE_14__.useSearchParams, shared_lib_hooks_useInitialEffect_useInitialEffect__WEBPACK_IMPORTED_MODULE_7__.useInitialEffect];
});
_c2 = ArticlePage;
ArticlePage.displayName = 'ArticlePage';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ArticlePage);
var _c, _c2;
__webpack_require__.$Refresh$.register(_c, "ArticlePage$memo");
__webpack_require__.$Refresh$.register(_c2, "ArticlePage");

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

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/ArticlePage/ui/ArticlePageFilters/ArticlePageFilters.module.scss":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/ArticlePage/ui/ArticlePageFilters/ArticlePageFilters.module.scss ***!
  \*********************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, `.src-pages-ArticlePage-ui-ArticlePageFilters-ArticlePageFilters-module__sortWrapper--gpeOu {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.src-pages-ArticlePage-ui-ArticlePageFilters-ArticlePageFilters-module__search--bEEsZ {
  margin-top: 16px;
}

.src-pages-ArticlePage-ui-ArticlePageFilters-ArticlePageFilters-module__tabs--PRsfw {
  margin-top: 16px;
}`, "",{"version":3,"sources":["webpack://./src/pages/ArticlePage/ui/ArticlePageFilters/ArticlePageFilters.module.scss"],"names":[],"mappings":"AAAA;EACI,aAAA;EACA,mBAAA;EACA,8BAAA;AACJ;;AAEA;EACI,gBAAA;AACJ;;AAEA;EACI,gBAAA;AACJ","sourcesContent":[".sortWrapper {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n}\r\n\r\n.search {\r\n    margin-top: 16px;\r\n}\r\n\r\n.tabs {\r\n    margin-top: 16px;\r\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"sortWrapper": `src-pages-ArticlePage-ui-ArticlePageFilters-ArticlePageFilters-module__sortWrapper--gpeOu`,
	"search": `src-pages-ArticlePage-ui-ArticlePageFilters-ArticlePageFilters-module__search--bEEsZ`,
	"tabs": `src-pages-ArticlePage-ui-ArticlePageFilters-ArticlePageFilters-module__tabs--PRsfw`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/ArticlePage/ui/ArticlePage/ArticlePage.module.scss":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/ArticlePage/ui/ArticlePage/ArticlePage.module.scss ***!
  \*******************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, `.src-pages-ArticlePage-ui-ArticlePage-ArticlePage-module__ArticlePage--qHZ74 {
  min-height: 100%;
}

.src-pages-ArticlePage-ui-ArticlePage-ArticlePage-module__list--lzD_h {
  margin-top: 30px;
}`, "",{"version":3,"sources":["webpack://./src/pages/ArticlePage/ui/ArticlePage/ArticlePage.module.scss"],"names":[],"mappings":"AAAA;EACI,gBAAA;AACJ;;AAEA;EACI,gBAAA;AACJ","sourcesContent":[".ArticlePage {\r\n    min-height: 100%;\r\n}\r\n\r\n.list {\r\n    margin-top: 30px;\r\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"ArticlePage": `src-pages-ArticlePage-ui-ArticlePage-ArticlePage-module__ArticlePage--qHZ74`,
	"list": `src-pages-ArticlePage-ui-ArticlePage-ArticlePage-module__list--lzD_h`
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

/***/ "./src/pages/ArticlePage/ui/ArticlePageFilters/ArticlePageFilters.module.scss":
/*!************************************************************************************!*\
  !*** ./src/pages/ArticlePage/ui/ArticlePageFilters/ArticlePageFilters.module.scss ***!
  \************************************************************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ArticlePageFilters_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!../../../../../node_modules/sass-loader/dist/cjs.js!./ArticlePageFilters.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/ArticlePage/ui/ArticlePageFilters/ArticlePageFilters.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ArticlePageFilters_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);


if (true) {
  if (!_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ArticlePageFilters_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals || module.hot.invalidate) {
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
    var isNamedExport = !_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ArticlePageFilters_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;
    var oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ArticlePageFilters_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ArticlePageFilters_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

    module.hot.accept(
      /*! !!../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!../../../../../node_modules/sass-loader/dist/cjs.js!./ArticlePageFilters.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/ArticlePage/ui/ArticlePageFilters/ArticlePageFilters.module.scss",
      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ArticlePageFilters_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!../../../../../node_modules/sass-loader/dist/cjs.js!./ArticlePageFilters.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/ArticlePage/ui/ArticlePageFilters/ArticlePageFilters.module.scss");
(function () {
        if (!isEqualLocals(oldLocals, isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ArticlePageFilters_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ArticlePageFilters_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals, isNamedExport)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ArticlePageFilters_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ArticlePageFilters_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

              update(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ArticlePageFilters_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"]);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}



       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ArticlePageFilters_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ArticlePageFilters_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ArticlePageFilters_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/pages/ArticlePage/ui/ArticlePage/ArticlePage.module.scss":
/*!**********************************************************************!*\
  !*** ./src/pages/ArticlePage/ui/ArticlePage/ArticlePage.module.scss ***!
  \**********************************************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ArticlePage_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!../../../../../node_modules/sass-loader/dist/cjs.js!./ArticlePage.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/ArticlePage/ui/ArticlePage/ArticlePage.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ArticlePage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);


if (true) {
  if (!_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ArticlePage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals || module.hot.invalidate) {
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
    var isNamedExport = !_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ArticlePage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;
    var oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ArticlePage_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ArticlePage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

    module.hot.accept(
      /*! !!../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!../../../../../node_modules/sass-loader/dist/cjs.js!./ArticlePage.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/ArticlePage/ui/ArticlePage/ArticlePage.module.scss",
      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ArticlePage_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!../../../../../node_modules/sass-loader/dist/cjs.js!./ArticlePage.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/ArticlePage/ui/ArticlePage/ArticlePage.module.scss");
(function () {
        if (!isEqualLocals(oldLocals, isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ArticlePage_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ArticlePage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals, isNamedExport)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ArticlePage_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ArticlePage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

              update(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ArticlePage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"]);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}



       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ArticlePage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ArticlePage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ArticlePage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "./src/pages/ArticlePage/model/services/initArticlesPage/initArticlesPage.ts":
/*!***********************************************************************************!*\
  !*** ./src/pages/ArticlePage/model/services/initArticlesPage/initArticlesPage.ts ***!
  \***********************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initArticlesPage: () => (/* binding */ initArticlesPage)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");
/* harmony import */ var _selectors_articlesPageSelector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../selectors/articlesPageSelector */ "./src/pages/ArticlePage/model/selectors/articlesPageSelector.ts");
/* harmony import */ var _slices_articlesPageSlice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../slices/articlesPageSlice */ "./src/pages/ArticlePage/model/slices/articlesPageSlice.ts");
/* harmony import */ var _fetchArticlesList_fetchArticlesList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../fetchArticlesList/fetchArticlesList */ "./src/pages/ArticlePage/model/services/fetchArticlesList/fetchArticlesList.ts");
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




var initArticlesPage = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_3__.createAsyncThunk)('articlesPage/initArticlesPage', function (searchParams, thunkApi) { return __awaiter(void 0, void 0, void 0, function () {
    var getState, dispatch, inited, orderFromURL, sortFromURL, searchFromURL;
    return __generator(this, function (_a) {
        getState = thunkApi.getState, dispatch = thunkApi.dispatch;
        inited = (0,_selectors_articlesPageSelector__WEBPACK_IMPORTED_MODULE_0__.getArticlesPageInited)(getState());
        if (!inited) {
            orderFromURL = searchParams.get('order');
            sortFromURL = searchParams.get('sort');
            searchFromURL = searchParams.get('search');
            if (orderFromURL) {
                dispatch(_slices_articlesPageSlice__WEBPACK_IMPORTED_MODULE_1__.articlesPageActions.setOrder(orderFromURL));
            }
            if (sortFromURL) {
                dispatch(_slices_articlesPageSlice__WEBPACK_IMPORTED_MODULE_1__.articlesPageActions.setSort(sortFromURL));
            }
            if (searchFromURL) {
                dispatch(_slices_articlesPageSlice__WEBPACK_IMPORTED_MODULE_1__.articlesPageActions.setSearch(searchFromURL));
            }
            dispatch(_slices_articlesPageSlice__WEBPACK_IMPORTED_MODULE_1__.articlesPageActions.initState());
            void dispatch((0,_fetchArticlesList_fetchArticlesList__WEBPACK_IMPORTED_MODULE_2__.fetchArticlesList)({}));
        }
        return [2 /*return*/];
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

/***/ "./src/shared/lib/hooks/useDebounce/useDebounce.ts":
/*!*********************************************************!*\
  !*** ./src/shared/lib/hooks/useDebounce/useDebounce.ts ***!
  \*********************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useDebounce: () => (/* binding */ useDebounce)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");


function useDebounce(callback, delay) {
    var timer = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
    console.log(timer);
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (timer.current) {
            clearTimeout(timer.current);
        }
        timer.current = setTimeout(function () {
            callback.apply(void 0, args);
        }, delay);
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

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX3BhZ2VzX0FydGljbGVQYWdlX3VpX0FydGljbGVQYWdlX0FydGljbGVQYWdlX3RzeC5mODk2ZTgwZGI1ZDgwYzcwMzYwYy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTZEO0FBQ1g7QUFDSjtBQUNJO0FBQzhFO0FBQ3REO0FBQ0s7QUFDdEM7QUFDOEg7QUFDN0g7QUFDRztBQUUrQztBQUN0QjtBQU90RSxJQUFNcUIsa0JBQWtCLGdCQUFBQyxFQUFBLGVBQUduQiwyQ0FBSSxDQUFBb0IsRUFBQSxHQUFBRCxFQUFBLENBQUMsVUFBQ0UsS0FBOEI7RUFBQUYsRUFBQTtFQUNyRCxJQUFBRyxFQUFBLEdBQW1CRCxLQUFLLENBQUFFLFNBQVY7SUFBZEEsU0FBUyxHQUFBRCxFQUFBLGNBQUcsRUFBRSxHQUFBQSxFQUFBO0VBQ2QsSUFBQUUsQ0FBQyxHQUFLekIsNkRBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQXlCLENBQTlCO0VBQ1QsSUFBTUMsUUFBUSxHQUFHbEIsOEZBQWMsRUFBRTtFQUNqQyxJQUFNbUIsSUFBSSxHQUFHbEIsd0RBQVcsQ0FBQ0csc0ZBQW1CLENBQUM7RUFDN0MsSUFBTWdCLElBQUksR0FBR25CLHdEQUFXLENBQUNFLHNGQUFtQixDQUFDO0VBQzdDLElBQU1rQixLQUFLLEdBQUdwQix3REFBVyxDQUFDQyx1RkFBb0IsQ0FBQztFQUMvQyxJQUFNb0IsTUFBTSxHQUFHckIsd0RBQVcsQ0FBQ0ksd0ZBQXFCLENBQUM7RUFDakQsSUFBTWtCLElBQUksR0FBR3RCLHdEQUFXLENBQUNLLHNGQUFtQixDQUFDO0VBRTdDLElBQU1rQixTQUFTLEdBQUc5QixrREFBVyxDQUFDO0lBQzVCLEtBQUt3QixRQUFRLENBQUNULHVHQUFpQixDQUFDO01BQUVnQixPQUFPLEVBQUU7SUFBSSxDQUFFLENBQUMsQ0FBQztFQUNyRCxDQUFDLEVBQUUsQ0FBQ1AsUUFBUSxDQUFDLENBQUM7RUFFZCxJQUFNUSxrQkFBa0IsR0FB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SSxJQUEyQixFQUFFO1lBQy9CLFFBQVEsRUFBRTtTQUNYO1FBQ0gsdURBQXVEO0lBQ3ZELENBQUMsRUFBRSxFQUFFLENBQUM7QUFDUixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZmxvcmlzdGJ5Ly4vc3JjL3BhZ2VzL0FydGljbGVQYWdlL3VpL0FydGljbGVQYWdlRmlsdGVycy9BcnRpY2xlUGFnZUZpbHRlcnMudHN4Iiwid2VicGFjazovL2Zsb3Jpc3RieS8uL3NyYy9wYWdlcy9BcnRpY2xlUGFnZS91aS9BcnRpY2xlUGFnZS9BcnRpY2xlUGFnZS50c3giLCJ3ZWJwYWNrOi8vZmxvcmlzdGJ5Ly4vc3JjL3NoYXJlZC91aS9JbnB1dC9JbnB1dC50c3giLCJ3ZWJwYWNrOi8vZmxvcmlzdGJ5Ly4vc3JjL3BhZ2VzL0FydGljbGVQYWdlL3VpL0FydGljbGVQYWdlRmlsdGVycy9BcnRpY2xlUGFnZUZpbHRlcnMubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vZmxvcmlzdGJ5Ly4vc3JjL3BhZ2VzL0FydGljbGVQYWdlL3VpL0FydGljbGVQYWdlL0FydGljbGVQYWdlLm1vZHVsZS5zY3NzIiwid2VicGFjazovL2Zsb3Jpc3RieS8uL3NyYy9zaGFyZWQvdWkvSW5wdXQvSW5wdXQubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vZmxvcmlzdGJ5Ly4vc3JjL3BhZ2VzL0FydGljbGVQYWdlL3VpL0FydGljbGVQYWdlRmlsdGVycy9BcnRpY2xlUGFnZUZpbHRlcnMubW9kdWxlLnNjc3M/OTkwNSIsIndlYnBhY2s6Ly9mbG9yaXN0YnkvLi9zcmMvcGFnZXMvQXJ0aWNsZVBhZ2UvdWkvQXJ0aWNsZVBhZ2UvQXJ0aWNsZVBhZ2UubW9kdWxlLnNjc3M/ODNhYiIsIndlYnBhY2s6Ly9mbG9yaXN0YnkvLi9zcmMvc2hhcmVkL3VpL0lucHV0L0lucHV0Lm1vZHVsZS5zY3NzPzRlMjEiLCJ3ZWJwYWNrOi8vZmxvcmlzdGJ5Ly4vc3JjL3BhZ2VzL0FydGljbGVQYWdlL21vZGVsL3NlcnZpY2VzL2luaXRBcnRpY2xlc1BhZ2UvaW5pdEFydGljbGVzUGFnZS50cyIsIndlYnBhY2s6Ly9mbG9yaXN0YnkvLi9zcmMvc2hhcmVkL2xpYi9ob29rcy91c2VEZWJvdW5jZS91c2VEZWJvdW5jZS50cyIsIndlYnBhY2s6Ly9mbG9yaXN0YnkvLi9zcmMvc2hhcmVkL2xpYi9ob29rcy91c2VJbml0aWFsRWZmZWN0L3VzZUluaXRpYWxFZmZlY3QudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY2xhc3NOYW1lcyB9IGZyb20gJ3NoYXJlZC9saWIvY2xhc3NOYW1lcy9jbGFzc05hbWVzJ1xyXG5pbXBvcnQgY2xzIGZyb20gJy4vQXJ0aWNsZVBhZ2VGaWx0ZXJzLm1vZHVsZS5zY3NzJ1xyXG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJ3JlYWN0LWkxOG5leHQnXHJcbmltcG9ydCB7IG1lbW8sIHVzZUNhbGxiYWNrLCB1c2VNZW1vIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IEFydGljbGVWaWV3U2VsZWN0b3IsIEFydGljbGVWaWV3LCBBcnRpY2xlU29ydFNlbGVjdG9yLCB0eXBlIEFydGljbGVTb3J0RmllbGQsIEFydGljbGVUeXBlVGFicyB9IGZyb20gJ2VudGl0aWVzL0FydGljbGUnXHJcbmltcG9ydCB7IGFydGljbGVzUGFnZUFjdGlvbnMgfSBmcm9tICcuLi8uLi9tb2RlbC9zbGljZXMvYXJ0aWNsZXNQYWdlU2xpY2UnXHJcbmltcG9ydCB7IHVzZUFwcERpc3BhdGNoIH0gZnJvbSAnc2hhcmVkL2xpYi9ob29rcy91c2VBcHBEaXNwYXRjaC91c2VBcHBEaXNwYXRjaCdcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuaW1wb3J0IHsgZ2V0QXJ0aWNsZXNQYWdlT3JkZXIsIGdldEFydGljbGVzUGFnZVNvcnQsIGdldEFydGljbGVzUGFnZVZpZXcsIGdldEFydGljbGVzUGFnZVNlYXJjaCwgZ2V0QXJ0aWNsZXNQYWdlVHlwZSB9IGZyb20gJy4uLy4uL21vZGVsL3NlbGVjdG9ycy9hcnRpY2xlc1BhZ2VTZWxlY3RvcidcclxuaW1wb3J0IHsgQ2FyZCB9IGZyb20gJ3NoYXJlZC91aS9DYXJkL0NhcmQnXHJcbmltcG9ydCB7IElucHV0IH0gZnJvbSAnc2hhcmVkL3VpL0lucHV0L0lucHV0J1xyXG5pbXBvcnQgeyB0eXBlIFNvcnRPcmRlciB9IGZyb20gJ3NoYXJlZC90eXBlcydcclxuaW1wb3J0IHsgZmV0Y2hBcnRpY2xlc0xpc3QgfSBmcm9tICcuLi8uLi9tb2RlbC9zZXJ2aWNlcy9mZXRjaEFydGljbGVzTGlzdC9mZXRjaEFydGljbGVzTGlzdCdcclxuaW1wb3J0IHsgdXNlRGVib3VuY2UgfSBmcm9tICdzaGFyZWQvbGliL2hvb2tzL3VzZURlYm91bmNlL3VzZURlYm91bmNlJ1xyXG5pbXBvcnQgeyB0eXBlIEFydGljbGVUeXBlIH0gZnJvbSAnZW50aXRpZXMvQXJ0aWNsZS9tb2RlbC90eXBlcy9hcnRpY2xlJ1xyXG5cclxuaW50ZXJmYWNlIEFydGljbGVQYWdlRmlsdGVyc1Byb3BzIHtcclxuICBjbGFzc05hbWU/OiBzdHJpbmdcclxufVxyXG5cclxuY29uc3QgQXJ0aWNsZVBhZ2VGaWx0ZXJzID0gbWVtbygocHJvcHM6IEFydGljbGVQYWdlRmlsdGVyc1Byb3BzKSA9PiB7XHJcbiAgY29uc3QgeyBjbGFzc05hbWUgPSAnJyB9ID0gcHJvcHNcclxuICBjb25zdCB7IHQgfSA9IHVzZVRyYW5zbGF0aW9uKCdhcnRpY2xlJylcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZUFwcERpc3BhdGNoKClcclxuICBjb25zdCB2aWV3ID0gdXNlU2VsZWN0b3IoZ2V0QXJ0aWNsZXNQYWdlVmlldylcclxuICBjb25zdCBzb3J0ID0gdXNlU2VsZWN0b3IoZ2V0QXJ0aWNsZXNQYWdlU29ydClcclxuICBjb25zdCBvcmRlciA9IHVzZVNlbGVjdG9yKGdldEFydGljbGVzUGFnZU9yZGVyKVxyXG4gIGNvbnN0IHNlYXJjaCA9IHVzZVNlbGVjdG9yKGdldEFydGljbGVzUGFnZVNlYXJjaClcclxuICBjb25zdCB0eXBlID0gdXNlU2VsZWN0b3IoZ2V0QXJ0aWNsZXNQYWdlVHlwZSlcclxuXHJcbiAgY29uc3QgZmV0Y2hEYXRhID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgdm9pZCBkaXNwYXRjaChmZXRjaEFydGljbGVzTGlzdCh7IHJlcGxhY2U6IHRydWUgfSkpXHJcbiAgfSwgW2Rpc3BhdGNoXSlcclxuXHJcbiAgY29uc3QgZGVib3VuY2VkRmV0Y2hEYXRhID0gdXNlRGVib3VuY2UoZmV0Y2hEYXRhLCA1MDApXHJcblxyXG4gIGNvbnN0IG9uQ2hhbmdlVmlldyA9IHVzZUNhbGxiYWNrKChuZXdWaWV3OiBBcnRpY2xlVmlldykgPT4ge1xyXG4gICAgZGlzcGF0Y2goYXJ0aWNsZXNQYWdlQWN0aW9ucy5zZXRWaWV3KG5ld1ZpZXcpKVxyXG4gICAgZGlzcGF0Y2goYXJ0aWNsZXNQYWdlQWN0aW9ucy5zZXRQYWdlKDEpKVxyXG4gICAgZmV0Y2hEYXRhKClcclxuICB9LCBbZGlzcGF0Y2gsIGZldGNoRGF0YV0pXHJcblxyXG4gIGNvbnN0IG9uQ2hhbmdlT3JkZXIgPSB1c2VDYWxsYmFjaygobmV3T3JkZXI6IFNvcnRPcmRlcikgPT4ge1xyXG4gICAgZGlzcGF0Y2goYXJ0aWNsZXNQYWdlQWN0aW9ucy5zZXRPcmRlcihuZXdPcmRlcikpXHJcbiAgICBkaXNwYXRjaChhcnRpY2xlc1BhZ2VBY3Rpb25zLnNldFBhZ2UoMSkpXHJcbiAgICBmZXRjaERhdGEoKVxyXG4gIH0sIFtkaXNwYXRjaCwgZmV0Y2hEYXRhXSlcclxuXHJcbiAgY29uc3Qgb25DaGFuZ2VTb3J0ID0gdXNlQ2FsbGJhY2soKG5ld1NvcnQ6IEFydGljbGVTb3J0RmllbGQpID0+IHtcclxuICAgIGRpc3BhdGNoKGFydGljbGVzUGFnZUFjdGlvbnMuc2V0U29ydChuZXdTb3J0KSlcclxuICAgIGRpc3BhdGNoKGFydGljbGVzUGFnZUFjdGlvbnMuc2V0UGFnZSgxKSlcclxuICAgIGZldGNoRGF0YSgpXHJcbiAgfSwgW2Rpc3BhdGNoLCBmZXRjaERhdGFdKVxyXG5cclxuICBjb25zdCBvbkNoYW5nZVNlYXJjaCA9IHVzZUNhbGxiYWNrKChzZWFyY2g6IHN0cmluZykgPT4ge1xyXG4gICAgZGlzcGF0Y2goYXJ0aWNsZXNQYWdlQWN0aW9ucy5zZXRTZWFyY2goc2VhcmNoKSlcclxuICAgIGRpc3BhdGNoKGFydGljbGVzUGFnZUFjdGlvbnMuc2V0UGFnZSgxKSlcclxuICAgIGRlYm91bmNlZEZldGNoRGF0YSgpXHJcbiAgfSwgW2Rpc3BhdGNoLCBkZWJvdW5jZWRGZXRjaERhdGFdKVxyXG5cclxuICBjb25zdCBvbkNoYW5nZVR5cGUgPSB1c2VDYWxsYmFjaygodmFsdWU6IEFydGljbGVUeXBlKSA9PiB7XHJcbiAgICBkaXNwYXRjaChhcnRpY2xlc1BhZ2VBY3Rpb25zLnNldFR5cGUodmFsdWUpKVxyXG4gICAgZGlzcGF0Y2goYXJ0aWNsZXNQYWdlQWN0aW9ucy5zZXRQYWdlKDEpKVxyXG4gICAgZmV0Y2hEYXRhKClcclxuICB9LCBbZGlzcGF0Y2gsIGZldGNoRGF0YV0pXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWVzKGNscy5BcnRpY2xlUGFnZUZpbHRlcnMsIHt9LCBbY2xhc3NOYW1lXSl9PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Nscy5zb3J0V3JhcHBlcn0+XHJcbiAgICAgICAgICAgICAgPEFydGljbGVTb3J0U2VsZWN0b3JcclxuICAgICAgICAgICAgICAgICAgb3JkZXI9e29yZGVyfVxyXG4gICAgICAgICAgICAgICAgICBzb3J0PXtzb3J0fVxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZU9yZGVyPXtvbkNoYW5nZU9yZGVyfVxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZVNvcnQ9e29uQ2hhbmdlU29ydH1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxBcnRpY2xlVmlld1NlbGVjdG9yIHZpZXc9e0FydGljbGVWaWV3LkJMT0NLfSBvblZpZXdDbGljaz17b25DaGFuZ2VWaWV3fSAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8Q2FyZCBjbGFzc05hbWU9e2Nscy5zZWFyY2h9PlxyXG4gICAgICAgICAgICAgIDxJbnB1dCBvbkNoYW5nZT17b25DaGFuZ2VTZWFyY2h9IHZhbHVlPXtzZWFyY2h9IHBsYWNlaG9sZGVyPXt0KCfQn9C+0LjRgdC6Jyl9IC8+XHJcbiAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICA8QXJ0aWNsZVR5cGVUYWJzXHJcbiAgICAgICAgICAgICAgdmFsdWU9e3R5cGV9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2VUeXBlPXtvbkNoYW5nZVR5cGV9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbHMudGFic31cclxuICAgICAgICAgICAgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgKVxyXG59KVxyXG5cclxuQXJ0aWNsZVBhZ2VGaWx0ZXJzLmRpc3BsYXlOYW1lID0gJ0FydGljbGVQYWdlRmlsdGVycydcclxuZXhwb3J0IHsgQXJ0aWNsZVBhZ2VGaWx0ZXJzIH1cclxuIiwiaW1wb3J0IGNscyBmcm9tICcuL0FydGljbGVQYWdlLm1vZHVsZS5zY3NzJ1xyXG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJ3JlYWN0LWkxOG5leHQnXHJcbmltcG9ydCB7IG1lbW8sIHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IEFydGljbGVMaXN0IH0gZnJvbSAnZW50aXRpZXMvQXJ0aWNsZSdcclxuaW1wb3J0IHsgYXJ0aWNsZXNQYWdlUmVkdWNlciwgZ2V0QXJ0aWNsZXMgfSBmcm9tICcuLi8uLi9tb2RlbC9zbGljZXMvYXJ0aWNsZXNQYWdlU2xpY2UnXHJcbmltcG9ydCB7IER5bmFtaWNNb2R1bGVMb2FkZXIsIHR5cGUgUmVkdWNlcnNMaXN0IH0gZnJvbSAnc2hhcmVkL2xpYi9jb21wb25lbnRzL0R5bmFtaWNNb2R1bGVMb2FkZXIvRHluYW1pY01vZHVsZUxvYWRlcidcclxuaW1wb3J0IHsgdXNlSW5pdGlhbEVmZmVjdCB9IGZyb20gJ3NoYXJlZC9saWIvaG9va3MvdXNlSW5pdGlhbEVmZmVjdC91c2VJbml0aWFsRWZmZWN0J1xyXG5pbXBvcnQgeyB1c2VBcHBEaXNwYXRjaCB9IGZyb20gJ3NoYXJlZC9saWIvaG9va3MvdXNlQXBwRGlzcGF0Y2gvdXNlQXBwRGlzcGF0Y2gnXHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcbmltcG9ydCB7IGdldEFydGljbGVzUGFnZUVycm9yLCBnZXRBcnRpY2xlc1BhZ2VJbml0ZWQsIGdldEFydGljbGVzUGFnZUlzTG9hZGluZywgZ2V0QXJ0aWNsZXNQYWdlVmlldyB9IGZyb20gJy4uLy4uL21vZGVsL3NlbGVjdG9ycy9hcnRpY2xlc1BhZ2VTZWxlY3RvcidcclxuaW1wb3J0IHsgZmV0Y2hOZXh0QXJ0aWNsZXNQYWdlIH0gZnJvbSAnLi4vLi4vbW9kZWwvc2VydmljZXMvZmV0Y2hOZXh0QXJ0aWNsZXNQYWdlL2ZldGNoTmV4dEFydGljbGVzUGFnZSdcclxuaW1wb3J0IHsgaW5pdEFydGljbGVzUGFnZSB9IGZyb20gJy4uLy4uL21vZGVsL3NlcnZpY2VzL2luaXRBcnRpY2xlc1BhZ2UvaW5pdEFydGljbGVzUGFnZSdcclxuaW1wb3J0IHsgdXNlU2VhcmNoUGFyYW1zIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcclxuaW1wb3J0IHsgQXJ0aWNsZVBhZ2VGaWx0ZXJzIH0gZnJvbSAnLi4vQXJ0aWNsZVBhZ2VGaWx0ZXJzL0FydGljbGVQYWdlRmlsdGVycydcclxuXHJcbmludGVyZmFjZSBBcnRpY2xlUGFnZVByb3BzIHtcclxuICBjbGFzc05hbWU/OiBzdHJpbmdcclxufVxyXG5cclxuY29uc3QgcmVkdWNlcnM6IFJlZHVjZXJzTGlzdCA9IHtcclxuICBhcnRpY2xlc1BhZ2U6IGFydGljbGVzUGFnZVJlZHVjZXJcclxufVxyXG5cclxuY29uc3QgQXJ0aWNsZVBhZ2UgPSBtZW1vKCh7IGNsYXNzTmFtZSA9ICcnIH06IEFydGljbGVQYWdlUHJvcHMpID0+IHtcclxuICBjb25zdCB7IHQgfSA9IHVzZVRyYW5zbGF0aW9uKClcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZUFwcERpc3BhdGNoKClcclxuICBjb25zdCBhcnRpY2xlcyA9IHVzZVNlbGVjdG9yKGdldEFydGljbGVzLnNlbGVjdEFsbClcclxuICBjb25zdCBpc0xvYWRpbmcgPSB1c2VTZWxlY3RvcihnZXRBcnRpY2xlc1BhZ2VJc0xvYWRpbmcpXHJcbiAgY29uc3QgZXJyb3IgPSB1c2VTZWxlY3RvcihnZXRBcnRpY2xlc1BhZ2VFcnJvcilcclxuICBjb25zdCB2aWV3ID0gdXNlU2VsZWN0b3IoZ2V0QXJ0aWNsZXNQYWdlVmlldylcclxuICBjb25zdCBpbml0ZWQgPSB1c2VTZWxlY3RvcihnZXRBcnRpY2xlc1BhZ2VJbml0ZWQpXHJcbiAgY29uc3QgW3NlYXJjaFBhcmFtc10gPSB1c2VTZWFyY2hQYXJhbXMoKVxyXG5cclxuICBjb25zdCBvbkxvYWROZXh0UGFydCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIHZvaWQgZGlzcGF0Y2goZmV0Y2hOZXh0QXJ0aWNsZXNQYWdlKCkpXHJcbiAgfSwgW2Rpc3BhdGNoXSlcclxuXHJcbiAgdXNlSW5pdGlhbEVmZmVjdCgoKSA9PiB7XHJcbiAgICB2b2lkIGRpc3BhdGNoKGluaXRBcnRpY2xlc1BhZ2Uoc2VhcmNoUGFyYW1zKSlcclxuICB9KVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgICA8RHluYW1pY01vZHVsZUxvYWRlciByZWR1Y2Vycz17cmVkdWNlcnN9IHJlbW92ZUFmdGVyVW5tb3VudD17ZmFsc2V9PlxyXG4gICAgICAgICAgPEFydGljbGVQYWdlRmlsdGVycyAvPlxyXG4gICAgICAgICAgPEFydGljbGVMaXN0IHZpZXc9e3ZpZXd9IGlzTG9hZGluZz17aXNMb2FkaW5nfSBhcnRpY2xlcz17YXJ0aWNsZXN9IGNsYXNzTmFtZT17Y2xzLmxpc3R9IG9uTG9hZE5leHRQYXJ0PXtvbkxvYWROZXh0UGFydH0gLz5cclxuICAgICAgPC9EeW5hbWljTW9kdWxlTG9hZGVyPlxyXG4gIClcclxufSlcclxuXHJcbkFydGljbGVQYWdlLmRpc3BsYXlOYW1lID0gJ0FydGljbGVQYWdlJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXJ0aWNsZVBhZ2VcclxuIiwiaW1wb3J0IHsgdHlwZSBNb2RzLCBjbGFzc05hbWVzIH0gZnJvbSAnc2hhcmVkL2xpYi9jbGFzc05hbWVzL2NsYXNzTmFtZXMnXHJcbmltcG9ydCBjbHMgZnJvbSAnLi9JbnB1dC5tb2R1bGUuc2NzcydcclxuaW1wb3J0IHsgbWVtbywgdHlwZSBJbnB1dEhUTUxBdHRyaWJ1dGVzLCB0eXBlIEZDIH0gZnJvbSAncmVhY3QnXHJcblxyXG50eXBlIEhUTUxJbnB1dFByb3BzID0gT21pdDxJbnB1dEhUTUxBdHRyaWJ1dGVzPEhUTUxJbnB1dEVsZW1lbnQ+LCAndmFsdWUnIHwgJ29uQ2hhbmdlJyB8ICd0eXBlJyB8ICdyZWFkT25seSc+XHJcblxyXG5pbnRlcmZhY2UgSW5wdXRQcm9wcyBleHRlbmRzIEhUTUxJbnB1dFByb3BzIHtcclxuICBjbGFzc05hbWU/OiBzdHJpbmdcclxuICB2YWx1ZT86IHN0cmluZyB8IG51bWJlclxyXG4gIHR5cGU/OiBzdHJpbmdcclxuICBvbkNoYW5nZT86ICh2YWx1ZTogc3RyaW5nKSA9PiB2b2lkXHJcbiAgcmVhZG9ubHk/OiBib29sZWFuXHJcbiAgcGxhY2Vob2xkZXI/OiBzdHJpbmdcclxufVxyXG5cclxuY29uc3QgSW5wdXQ6IEZDPElucHV0UHJvcHM+ID0gbWVtbygocHJvcHM6IElucHV0UHJvcHMpID0+IHtcclxuICBjb25zdCB7IGNsYXNzTmFtZSA9ICcnLCB2YWx1ZSA9ICcnLCB0eXBlID0gJ3RleHQnLCBwbGFjZWhvbGRlciA9ICcnLCBvbkNoYW5nZSwgcmVhZG9ubHkgPSBmYWxzZSwgLi4ub3RoZXJQcm9wcyB9ID0gcHJvcHNcclxuXHJcbiAgY29uc3Qgb25DaGFuZ2VIYW5kbGVyID0gKGU6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XHJcbiAgICBvbkNoYW5nZT8uKGUudGFyZ2V0LnZhbHVlKVxyXG4gIH1cclxuXHJcbiAgY29uc3QgbW9kczogTW9kcyA9IHtcclxuICAgIFtjbHMucmVhZG9ubHldOiByZWFkb25seVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZXMoY2xzLklucHV0LCBtb2RzLCBbY2xhc3NOYW1lXSl9PlxyXG4gICAgICAgICAgPGlucHV0IHR5cGU9e3R5cGV9IHZhbHVlPXt2YWx1ZX0gcmVhZE9ubHk9e3JlYWRvbmx5fSBvbkNoYW5nZT17b25DaGFuZ2VIYW5kbGVyfSBwbGFjZWhvbGRlcj17cGxhY2Vob2xkZXJ9IC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gIClcclxufSlcclxuXHJcbklucHV0LmRpc3BsYXlOYW1lID0gJ0lucHV0J1xyXG5cclxuZXhwb3J0IHsgSW5wdXQgfVxyXG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLnNyYy1wYWdlcy1BcnRpY2xlUGFnZS11aS1BcnRpY2xlUGFnZUZpbHRlcnMtQXJ0aWNsZVBhZ2VGaWx0ZXJzLW1vZHVsZV9fc29ydFdyYXBwZXItLWdwZU91IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4uc3JjLXBhZ2VzLUFydGljbGVQYWdlLXVpLUFydGljbGVQYWdlRmlsdGVycy1BcnRpY2xlUGFnZUZpbHRlcnMtbW9kdWxlX19zZWFyY2gtLWJFRXNaIHtcbiAgbWFyZ2luLXRvcDogMTZweDtcbn1cblxuLnNyYy1wYWdlcy1BcnRpY2xlUGFnZS11aS1BcnRpY2xlUGFnZUZpbHRlcnMtQXJ0aWNsZVBhZ2VGaWx0ZXJzLW1vZHVsZV9fdGFicy0tUFJzZncge1xuICBtYXJnaW4tdG9wOiAxNnB4O1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3BhZ2VzL0FydGljbGVQYWdlL3VpL0FydGljbGVQYWdlRmlsdGVycy9BcnRpY2xlUGFnZUZpbHRlcnMubW9kdWxlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtBQUNKOztBQUVBO0VBQ0ksZ0JBQUE7QUFDSjs7QUFFQTtFQUNJLGdCQUFBO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLnNvcnRXcmFwcGVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbn1cXHJcXG5cXHJcXG4uc2VhcmNoIHtcXHJcXG4gICAgbWFyZ2luLXRvcDogMTZweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRhYnMge1xcclxcbiAgICBtYXJnaW4tdG9wOiAxNnB4O1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJzb3J0V3JhcHBlclwiOiBgc3JjLXBhZ2VzLUFydGljbGVQYWdlLXVpLUFydGljbGVQYWdlRmlsdGVycy1BcnRpY2xlUGFnZUZpbHRlcnMtbW9kdWxlX19zb3J0V3JhcHBlci0tZ3BlT3VgLFxuXHRcInNlYXJjaFwiOiBgc3JjLXBhZ2VzLUFydGljbGVQYWdlLXVpLUFydGljbGVQYWdlRmlsdGVycy1BcnRpY2xlUGFnZUZpbHRlcnMtbW9kdWxlX19zZWFyY2gtLWJFRXNaYCxcblx0XCJ0YWJzXCI6IGBzcmMtcGFnZXMtQXJ0aWNsZVBhZ2UtdWktQXJ0aWNsZVBhZ2VGaWx0ZXJzLUFydGljbGVQYWdlRmlsdGVycy1tb2R1bGVfX3RhYnMtLVBSc2Z3YFxufTtcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5zcmMtcGFnZXMtQXJ0aWNsZVBhZ2UtdWktQXJ0aWNsZVBhZ2UtQXJ0aWNsZVBhZ2UtbW9kdWxlX19BcnRpY2xlUGFnZS0tcUhaNzQge1xuICBtaW4taGVpZ2h0OiAxMDAlO1xufVxuXG4uc3JjLXBhZ2VzLUFydGljbGVQYWdlLXVpLUFydGljbGVQYWdlLUFydGljbGVQYWdlLW1vZHVsZV9fbGlzdC0tbHpEX2gge1xuICBtYXJnaW4tdG9wOiAzMHB4O1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3BhZ2VzL0FydGljbGVQYWdlL3VpL0FydGljbGVQYWdlL0FydGljbGVQYWdlLm1vZHVsZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0ksZ0JBQUE7QUFDSjs7QUFFQTtFQUNJLGdCQUFBO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLkFydGljbGVQYWdlIHtcXHJcXG4gICAgbWluLWhlaWdodDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmxpc3Qge1xcclxcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJBcnRpY2xlUGFnZVwiOiBgc3JjLXBhZ2VzLUFydGljbGVQYWdlLXVpLUFydGljbGVQYWdlLUFydGljbGVQYWdlLW1vZHVsZV9fQXJ0aWNsZVBhZ2UtLXFIWjc0YCxcblx0XCJsaXN0XCI6IGBzcmMtcGFnZXMtQXJ0aWNsZVBhZ2UtdWktQXJ0aWNsZVBhZ2UtQXJ0aWNsZVBhZ2UtbW9kdWxlX19saXN0LS1sekRfaGBcbn07XG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAuc3JjLXNoYXJlZC11aS1JbnB1dC1JbnB1dC1tb2R1bGVfX0lucHV0LS1YOEVWYiB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi5zcmMtc2hhcmVkLXVpLUlucHV0LUlucHV0LW1vZHVsZV9fSW5wdXQtLVg4RVZiIGlucHV0IHtcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbi5zcmMtc2hhcmVkLXVpLUlucHV0LUlucHV0LW1vZHVsZV9fcmVhZG9ubHktLWZUTjFQIHtcbiAgYm9yZGVyOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIG9wYWNpdHk6IDAuNztcbn1cbi5zcmMtc2hhcmVkLXVpLUlucHV0LUlucHV0LW1vZHVsZV9fcmVhZG9ubHktLWZUTjFQIGlucHV0IHtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3NoYXJlZC91aS9JbnB1dC9JbnB1dC5tb2R1bGUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNJLGdCQUFBO0FBQ0o7O0FBRUE7RUFDSSxhQUFBO0VBQ0Esc0NBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUVBO0VBQ0ksNkJBQUE7RUFDQSxZQUFBO0FBQ0o7QUFDSTtFQUNJLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7QUFDUlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuSW5wdXQge1xcclxcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uSW5wdXQgaW5wdXQge1xcclxcbiAgICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnJlYWRvbmx5IHtcXHJcXG4gICAgYm9yZGVyOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XFxyXFxuICAgIG9wYWNpdHk6IDAuNztcXHJcXG5cXHJcXG4gICAgaW5wdXQge1xcclxcbiAgICAgICAgYm9yZGVyOiBub25lO1xcclxcbiAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcXHJcXG4gICAgICAgIG91dGxpbmU6IG5vbmU7XFxyXFxuICAgIH1cXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwiSW5wdXRcIjogYHNyYy1zaGFyZWQtdWktSW5wdXQtSW5wdXQtbW9kdWxlX19JbnB1dC0tWDhFVmJgLFxuXHRcInJlYWRvbmx5XCI6IGBzcmMtc2hhcmVkLXVpLUlucHV0LUlucHV0LW1vZHVsZV9fcmVhZG9ubHktLWZUTjFQYFxufTtcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1s0XS51c2VbMV0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vQXJ0aWNsZVBhZ2VGaWx0ZXJzLm1vZHVsZS5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cbmlmIChtb2R1bGUuaG90KSB7XG4gIGlmICghY29udGVudC5sb2NhbHMgfHwgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKSB7XG4gICAgdmFyIGlzRXF1YWxMb2NhbHMgPSBmdW5jdGlvbiBpc0VxdWFsTG9jYWxzKGEsIGIsIGlzTmFtZWRFeHBvcnQpIHtcbiAgaWYgKCFhICYmIGIgfHwgYSAmJiAhYikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgcDtcbiAgZm9yIChwIGluIGEpIHtcbiAgICBpZiAoaXNOYW1lZEV4cG9ydCAmJiBwID09PSBcImRlZmF1bHRcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgaWYgKGFbcF0gIT09IGJbcF0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgZm9yIChwIGluIGIpIHtcbiAgICBpZiAoaXNOYW1lZEV4cG9ydCAmJiBwID09PSBcImRlZmF1bHRcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgaWYgKCFhW3BdKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIHJldHVybiB0cnVlO1xufTtcbiAgICB2YXIgaXNOYW1lZEV4cG9ydCA9ICFjb250ZW50LmxvY2FscztcbiAgICB2YXIgb2xkTG9jYWxzID0gaXNOYW1lZEV4cG9ydCA/IG5hbWVkRXhwb3J0IDogY29udGVudC5sb2NhbHM7XG5cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcbiAgICAgIFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1s0XS51c2VbMV0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vQXJ0aWNsZVBhZ2VGaWx0ZXJzLm1vZHVsZS5zY3NzXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghaXNFcXVhbExvY2FscyhvbGRMb2NhbHMsIGlzTmFtZWRFeHBvcnQgPyBuYW1lZEV4cG9ydCA6IGNvbnRlbnQubG9jYWxzLCBpc05hbWVkRXhwb3J0KSkge1xuICAgICAgICAgICAgICAgIG1vZHVsZS5ob3QuaW52YWxpZGF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgb2xkTG9jYWxzID0gaXNOYW1lZEV4cG9ydCA/IG5hbWVkRXhwb3J0IDogY29udGVudC5sb2NhbHM7XG5cbiAgICAgICAgICAgICAgdXBkYXRlKGNvbnRlbnQpO1xuICAgICAgfVxuICAgIClcbiAgfVxuXG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHtcbiAgICB1cGRhdGUoKTtcbiAgfSk7XG59XG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbNF0udXNlWzFdIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL0FydGljbGVQYWdlRmlsdGVycy5tb2R1bGUuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbNF0udXNlWzFdIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL0FydGljbGVQYWdlLm1vZHVsZS5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cbmlmIChtb2R1bGUuaG90KSB7XG4gIGlmICghY29udGVudC5sb2NhbHMgfHwgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKSB7XG4gICAgdmFyIGlzRXF1YWxMb2NhbHMgPSBmdW5jdGlvbiBpc0VxdWFsTG9jYWxzKGEsIGIsIGlzTmFtZWRFeHBvcnQpIHtcbiAgaWYgKCFhICYmIGIgfHwgYSAmJiAhYikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgcDtcbiAgZm9yIChwIGluIGEpIHtcbiAgICBpZiAoaXNOYW1lZEV4cG9ydCAmJiBwID09PSBcImRlZmF1bHRcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgaWYgKGFbcF0gIT09IGJbcF0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgZm9yIChwIGluIGIpIHtcbiAgICBpZiAoaXNOYW1lZEV4cG9ydCAmJiBwID09PSBcImRlZmF1bHRcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgaWYgKCFhW3BdKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIHJldHVybiB0cnVlO1xufTtcbiAgICB2YXIgaXNOYW1lZEV4cG9ydCA9ICFjb250ZW50LmxvY2FscztcbiAgICB2YXIgb2xkTG9jYWxzID0gaXNOYW1lZEV4cG9ydCA/IG5hbWVkRXhwb3J0IDogY29udGVudC5sb2NhbHM7XG5cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcbiAgICAgIFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1s0XS51c2VbMV0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vQXJ0aWNsZVBhZ2UubW9kdWxlLnNjc3NcIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCFpc0VxdWFsTG9jYWxzKG9sZExvY2FscywgaXNOYW1lZEV4cG9ydCA/IG5hbWVkRXhwb3J0IDogY29udGVudC5sb2NhbHMsIGlzTmFtZWRFeHBvcnQpKSB7XG4gICAgICAgICAgICAgICAgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKCk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBvbGRMb2NhbHMgPSBpc05hbWVkRXhwb3J0ID8gbmFtZWRFeHBvcnQgOiBjb250ZW50LmxvY2FscztcblxuICAgICAgICAgICAgICB1cGRhdGUoY29udGVudCk7XG4gICAgICB9XG4gICAgKVxuICB9XG5cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkge1xuICAgIHVwZGF0ZSgpO1xuICB9KTtcbn1cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1s0XS51c2VbMV0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vQXJ0aWNsZVBhZ2UubW9kdWxlLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzRdLnVzZVsxXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9JbnB1dC5tb2R1bGUuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5pZiAobW9kdWxlLmhvdCkge1xuICBpZiAoIWNvbnRlbnQubG9jYWxzIHx8IG1vZHVsZS5ob3QuaW52YWxpZGF0ZSkge1xuICAgIHZhciBpc0VxdWFsTG9jYWxzID0gZnVuY3Rpb24gaXNFcXVhbExvY2FscyhhLCBiLCBpc05hbWVkRXhwb3J0KSB7XG4gIGlmICghYSAmJiBiIHx8IGEgJiYgIWIpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIHA7XG4gIGZvciAocCBpbiBhKSB7XG4gICAgaWYgKGlzTmFtZWRFeHBvcnQgJiYgcCA9PT0gXCJkZWZhdWx0XCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIGlmIChhW3BdICE9PSBiW3BdKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIGZvciAocCBpbiBiKSB7XG4gICAgaWYgKGlzTmFtZWRFeHBvcnQgJiYgcCA9PT0gXCJkZWZhdWx0XCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIGlmICghYVtwXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn07XG4gICAgdmFyIGlzTmFtZWRFeHBvcnQgPSAhY29udGVudC5sb2NhbHM7XG4gICAgdmFyIG9sZExvY2FscyA9IGlzTmFtZWRFeHBvcnQgPyBuYW1lZEV4cG9ydCA6IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXG4gICAgICBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbNF0udXNlWzFdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL0lucHV0Lm1vZHVsZS5zY3NzXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghaXNFcXVhbExvY2FscyhvbGRMb2NhbHMsIGlzTmFtZWRFeHBvcnQgPyBuYW1lZEV4cG9ydCA6IGNvbnRlbnQubG9jYWxzLCBpc05hbWVkRXhwb3J0KSkge1xuICAgICAgICAgICAgICAgIG1vZHVsZS5ob3QuaW52YWxpZGF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgb2xkTG9jYWxzID0gaXNOYW1lZEV4cG9ydCA/IG5hbWVkRXhwb3J0IDogY29udGVudC5sb2NhbHM7XG5cbiAgICAgICAgICAgICAgdXBkYXRlKGNvbnRlbnQpO1xuICAgICAgfVxuICAgIClcbiAgfVxuXG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHtcbiAgICB1cGRhdGUoKTtcbiAgfSk7XG59XG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbNF0udXNlWzFdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL0lucHV0Lm1vZHVsZS5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiaW1wb3J0IHsgY3JlYXRlQXN5bmNUaHVuayB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQnXHJcbmltcG9ydCB7IHR5cGUgVGh1bmtDb25maWcgfSBmcm9tICdhcHAvcHJvdmlkZXJzL1N0b3JlUHJvdmlkZXInXHJcbmltcG9ydCB7IGdldEFydGljbGVzUGFnZUluaXRlZCB9IGZyb20gJy4uLy4uL3NlbGVjdG9ycy9hcnRpY2xlc1BhZ2VTZWxlY3RvcidcclxuaW1wb3J0IHsgYXJ0aWNsZXNQYWdlQWN0aW9ucyB9IGZyb20gJy4uLy4uL3NsaWNlcy9hcnRpY2xlc1BhZ2VTbGljZSdcclxuaW1wb3J0IHsgZmV0Y2hBcnRpY2xlc0xpc3QgfSBmcm9tICcuLi9mZXRjaEFydGljbGVzTGlzdC9mZXRjaEFydGljbGVzTGlzdCdcclxuaW1wb3J0IHsgdHlwZSBBcnRpY2xlU29ydEZpZWxkIH0gZnJvbSAnZW50aXRpZXMvQXJ0aWNsZSdcclxuaW1wb3J0IHsgdHlwZSBTb3J0T3JkZXIgfSBmcm9tICdzaGFyZWQvdHlwZXMnXHJcblxyXG5leHBvcnQgY29uc3QgaW5pdEFydGljbGVzUGFnZSA9IGNyZWF0ZUFzeW5jVGh1bms8dm9pZCwgVVJMU2VhcmNoUGFyYW1zLCBUaHVua0NvbmZpZzxzdHJpbmc+PihcclxuICAnYXJ0aWNsZXNQYWdlL2luaXRBcnRpY2xlc1BhZ2UnLFxyXG4gIGFzeW5jIChzZWFyY2hQYXJhbXMsIHRodW5rQXBpKSA9PiB7XHJcbiAgICBjb25zdCB7IGdldFN0YXRlLCBkaXNwYXRjaCB9ID0gdGh1bmtBcGlcclxuICAgIGNvbnN0IGluaXRlZCA9IGdldEFydGljbGVzUGFnZUluaXRlZChnZXRTdGF0ZSgpKVxyXG5cclxuICAgIGlmICghaW5pdGVkKSB7XHJcbiAgICAgIGNvbnN0IG9yZGVyRnJvbVVSTCA9IHNlYXJjaFBhcmFtcy5nZXQoJ29yZGVyJykgYXMgU29ydE9yZGVyXHJcbiAgICAgIGNvbnN0IHNvcnRGcm9tVVJMID0gc2VhcmNoUGFyYW1zLmdldCgnc29ydCcpIGFzIEFydGljbGVTb3J0RmllbGRcclxuICAgICAgY29uc3Qgc2VhcmNoRnJvbVVSTCA9IHNlYXJjaFBhcmFtcy5nZXQoJ3NlYXJjaCcpXHJcblxyXG4gICAgICBpZiAob3JkZXJGcm9tVVJMKSB7XHJcbiAgICAgICAgZGlzcGF0Y2goYXJ0aWNsZXNQYWdlQWN0aW9ucy5zZXRPcmRlcihvcmRlckZyb21VUkwpKVxyXG4gICAgICB9XHJcbiAgICAgIGlmIChzb3J0RnJvbVVSTCkge1xyXG4gICAgICAgIGRpc3BhdGNoKGFydGljbGVzUGFnZUFjdGlvbnMuc2V0U29ydChzb3J0RnJvbVVSTCkpXHJcbiAgICAgIH1cclxuICAgICAgaWYgKHNlYXJjaEZyb21VUkwpIHtcclxuICAgICAgICBkaXNwYXRjaChhcnRpY2xlc1BhZ2VBY3Rpb25zLnNldFNlYXJjaChzZWFyY2hGcm9tVVJMKSlcclxuICAgICAgfVxyXG5cclxuICAgICAgZGlzcGF0Y2goYXJ0aWNsZXNQYWdlQWN0aW9ucy5pbml0U3RhdGUoKSlcclxuICAgICAgdm9pZCBkaXNwYXRjaChmZXRjaEFydGljbGVzTGlzdCh7fSkpXHJcbiAgICB9XHJcbiAgfVxyXG4pXHJcbiIsImltcG9ydCB7IHR5cGUgTXV0YWJsZVJlZk9iamVjdCwgdXNlQ2FsbGJhY2ssIHVzZVJlZiB9IGZyb20gJ3JlYWN0J1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHVzZURlYm91bmNlIChjYWxsYmFjazogKC4uLmFyZ3M6IGFueVtdKSA9PiB2b2lkLCBkZWxheTogbnVtYmVyKSB7XHJcbiAgY29uc3QgdGltZXIgPSB1c2VSZWYoKSBhcyBhbnlcclxuICBjb25zb2xlLmxvZyh0aW1lcilcclxuXHJcbiAgcmV0dXJuIHVzZUNhbGxiYWNrKCguLi5hcmdzOiBhbnlbXSkgPT4ge1xyXG4gICAgaWYgKHRpbWVyLmN1cnJlbnQpIHtcclxuICAgICAgY2xlYXJUaW1lb3V0KHRpbWVyLmN1cnJlbnQpXHJcbiAgICB9XHJcbiAgICB0aW1lci5jdXJyZW50ID0gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIGNhbGxiYWNrKC4uLmFyZ3MpXHJcbiAgICB9LCBkZWxheSlcclxuICB9LCBbY2FsbGJhY2ssIGRlbGF5XSlcclxufVxyXG4iLCJpbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VJbml0aWFsRWZmZWN0IChjYWxsYmFjazogKCkgPT4gdm9pZCkge1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoX19QUk9KRUNUX18gIT09ICdzdG9yeWJvb2snKSB7XHJcbiAgICAgIGNhbGxiYWNrKClcclxuICAgIH1cclxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvZXhoYXVzdGl2ZS1kZXBzXHJcbiAgfSwgW10pXHJcbn1cclxuIl0sIm5hbWVzIjpbImNsYXNzTmFtZXMiLCJjbHMiLCJ1c2VUcmFuc2xhdGlvbiIsIm1lbW8iLCJ1c2VDYWxsYmFjayIsIkFydGljbGVWaWV3U2VsZWN0b3IiLCJBcnRpY2xlVmlldyIsIkFydGljbGVTb3J0U2VsZWN0b3IiLCJBcnRpY2xlVHlwZVRhYnMiLCJhcnRpY2xlc1BhZ2VBY3Rpb25zIiwidXNlQXBwRGlzcGF0Y2giLCJ1c2VTZWxlY3RvciIsImdldEFydGljbGVzUGFnZU9yZGVyIiwiZ2V0QXJ0aWNsZXNQYWdlU29ydCIsImdldEFydGljbGVzUGFnZVZpZXciLCJnZXRBcnRpY2xlc1BhZ2VTZWFyY2giLCJnZXRBcnRpY2xlc1BhZ2VUeXBlIiwiQ2FyZCIsIklucHV0IiwiZmV0Y2hBcnRpY2xlc0xpc3QiLCJ1c2VEZWJvdW5jZSIsIkFydGljbGVQYWdlRmlsdGVycyIsIl9zIiwiX2MiLCJwcm9wcyIsIl9hIiwiY2xhc3NOYW1lIiwidCIsImRpc3BhdGNoIiwidmlldyIsInNvcnQiLCJvcmRlciIsInNlYXJjaCIsInR5cGUiLCJmZXRjaERhdGEiLCJyZXBsYWNlIiwiZGVib3VuY2VkRmV0Y2hEYXRhIiwib25DaGFuZ2VWaWV3IiwibmV3VmlldyIsInNldFZpZXciLCJzZXRQYWdlIiwib25DaGFuZ2VPcmRlciIsIm5ld09yZGVyIiwic2V0T3JkZXIiLCJvbkNoYW5nZVNvcnQiLCJuZXdTb3J0Iiwic2V0U29ydCIsIm9uQ2hhbmdlU2VhcmNoIiwic2V0U2VhcmNoIiwib25DaGFuZ2VUeXBlIiwidmFsdWUiLCJzZXRUeXBlIiwiX2pzeHMiLCJjaGlsZHJlbiIsInNvcnRXcmFwcGVyIiwiX2pzeCIsIkJMT0NLIiwib25WaWV3Q2xpY2siLCJvbkNoYW5nZSIsInBsYWNlaG9sZGVyIiwidGFicyIsIl9jMiIsImRpc3BsYXlOYW1lIiwiJFJlZnJlc2hSZWckIiwiQXJ0aWNsZUxpc3QiLCJhcnRpY2xlc1BhZ2VSZWR1Y2VyIiwiZ2V0QXJ0aWNsZXMiLCJEeW5hbWljTW9kdWxlTG9hZGVyIiwidXNlSW5pdGlhbEVmZmVjdCIsImdldEFydGljbGVzUGFnZUVycm9yIiwiZ2V0QXJ0aWNsZXNQYWdlSW5pdGVkIiwiZ2V0QXJ0aWNsZXNQYWdlSXNMb2FkaW5nIiwiZmV0Y2hOZXh0QXJ0aWNsZXNQYWdlIiwiaW5pdEFydGljbGVzUGFnZSIsInVzZVNlYXJjaFBhcmFtcyIsInJlZHVjZXJzIiwiYXJ0aWNsZXNQYWdlIiwiQXJ0aWNsZVBhZ2UiLCJfYiIsImFydGljbGVzIiwic2VsZWN0QWxsIiwiaXNMb2FkaW5nIiwiZXJyb3IiLCJpbml0ZWQiLCJzZWFyY2hQYXJhbXMiLCJvbkxvYWROZXh0UGFydCIsInJlbW92ZUFmdGVyVW5tb3VudCIsImxpc3QiLCJfZCIsIl9lIiwiX2YiLCJyZWFkb25seSIsIm90aGVyUHJvcHMiLCJfX3Jlc3QiLCJvbkNoYW5nZUhhbmRsZXIiLCJlIiwidGFyZ2V0IiwibW9kcyIsInJlYWRPbmx5IiwiX2MzIl0sInNvdXJjZVJvb3QiOiIifQ==