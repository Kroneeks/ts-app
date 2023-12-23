"use strict";
(self["webpackChunkfloristby"] = self["webpackChunkfloristby"] || []).push([["src_pages_ArticleDetailsPage_ui_ArticleDetailsPage_ArticleDetailsPage_tsx"],{

/***/ "./src/entities/Comment/ui/CommentCard/CommentCard.tsx":
/*!*************************************************************!*\
  !*** ./src/entities/Comment/ui/CommentCard/CommentCard.tsx ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CommentCard: () => (/* binding */ CommentCard)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var shared_lib_classNames_classNames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shared/lib/classNames/classNames */ "./src/shared/lib/classNames/classNames.ts");
/* harmony import */ var _CommentCard_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CommentCard.module.scss */ "./src/entities/Comment/ui/CommentCard/CommentCard.module.scss");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var shared_ui_Avatar_Avatar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! shared/ui/Avatar/Avatar */ "./src/shared/ui/Avatar/Avatar.tsx");
/* harmony import */ var shared_ui_Text_Text__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! shared/ui/Text/Text */ "./src/shared/ui/Text/Text.tsx");
/* harmony import */ var shared_ui_Skeleton_Skeleton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! shared/ui/Skeleton/Skeleton */ "./src/shared/ui/Skeleton/Skeleton.tsx");
/* harmony import */ var shared_ui_AppLink_AppLink__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! shared/ui/AppLink/AppLink */ "./src/shared/ui/AppLink/AppLink.tsx");
/* harmony import */ var shared_config_routeConfig_routeConfig__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! shared/config/routeConfig/routeConfig */ "./src/shared/config/routeConfig/routeConfig.tsx");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");










var CommentCard = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_3__.memo)(_c2 = function _c2(props) {
  var _a;
  var _b = props.className,
    className = _b === void 0 ? '' : _b,
    comment = props.comment,
    _c = props.isLoading,
    isLoading = _c === void 0 ? false : _c;
  if (isLoading) {
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
      className: (0,shared_lib_classNames_classNames__WEBPACK_IMPORTED_MODULE_1__.classNames)(_CommentCard_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].CommentCard, {}, [className]),
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: _CommentCard_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].header,
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(shared_ui_Skeleton_Skeleton__WEBPACK_IMPORTED_MODULE_6__.Skeleton, {
          width: 40,
          height: 40,
          borderR: '50%'
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(shared_ui_Skeleton_Skeleton__WEBPACK_IMPORTED_MODULE_6__.Skeleton, {
          height: 16,
          width: 100
        })]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(shared_ui_Skeleton_Skeleton__WEBPACK_IMPORTED_MODULE_6__.Skeleton, {
        className: _CommentCard_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].body,
        width: '100%',
        height: 50
      })]
    });
  }
  if (!comment) {
    return null;
  }
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
    className: (0,shared_lib_classNames_classNames__WEBPACK_IMPORTED_MODULE_1__.classNames)(_CommentCard_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].CommentCard, {}, [className]),
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(shared_ui_AppLink_AppLink__WEBPACK_IMPORTED_MODULE_7__.AppLink, {
      to: "".concat(shared_config_routeConfig_routeConfig__WEBPACK_IMPORTED_MODULE_8__.RoutePath.profile).concat(comment.user.id),
      className: _CommentCard_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].header,
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(shared_ui_Avatar_Avatar__WEBPACK_IMPORTED_MODULE_4__.Avatar, {
        size: shared_ui_Avatar_Avatar__WEBPACK_IMPORTED_MODULE_4__.AvatarSize.SMALL,
        src: (_a = comment.user.avatar) !== null && _a !== void 0 ? _a : 'https://cdn-icons-png.flaticon.com/512/456/456212.png'
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(shared_ui_Text_Text__WEBPACK_IMPORTED_MODULE_5__.Text, {
        title: comment.user.username
      })]
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(shared_ui_Text_Text__WEBPACK_IMPORTED_MODULE_5__.Text, {
      className: _CommentCard_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].body,
      text: comment.text
    })]
  });
});
_c3 = CommentCard;
CommentCard.displayName = 'CommentCard';

var _c2, _c3;
__webpack_require__.$Refresh$.register(_c2, "CommentCard$memo");
__webpack_require__.$Refresh$.register(_c3, "CommentCard");

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

/***/ "./src/entities/Comment/ui/CommentList/CommentList.tsx":
/*!*************************************************************!*\
  !*** ./src/entities/Comment/ui/CommentList/CommentList.tsx ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CommentList: () => (/* binding */ CommentList)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var shared_lib_classNames_classNames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shared/lib/classNames/classNames */ "./src/shared/lib/classNames/classNames.ts");
/* harmony import */ var _CommentList_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CommentList.module.scss */ "./src/entities/Comment/ui/CommentList/CommentList.module.scss");
/* harmony import */ var _CommentCard_CommentCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../CommentCard/CommentCard */ "./src/entities/Comment/ui/CommentCard/CommentCard.tsx");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var shared_ui_Text_Text__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! shared/ui/Text/Text */ "./src/shared/ui/Text/Text.tsx");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

var _s = __webpack_require__.$Refresh$.signature();






var CommentList = function CommentList(props) {
  _s();
  var _a = props.className,
    className = _a === void 0 ? '' : _a,
    _b = props.comments,
    comments = _b === void 0 ? [] : _b,
    _c = props.isLoading,
    isLoading = _c === void 0 ? false : _c;
  var t = (0,react_i18next__WEBPACK_IMPORTED_MODULE_4__.useTranslation)('comments').t;
  if (isLoading) {
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
      className: (0,shared_lib_classNames_classNames__WEBPACK_IMPORTED_MODULE_1__.classNames)(_CommentList_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].CommentList, {}, [className]),
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_CommentCard_CommentCard__WEBPACK_IMPORTED_MODULE_3__.CommentCard, {
        isLoading: true
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_CommentCard_CommentCard__WEBPACK_IMPORTED_MODULE_3__.CommentCard, {
        isLoading: true
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_CommentCard_CommentCard__WEBPACK_IMPORTED_MODULE_3__.CommentCard, {
        isLoading: true
      })]
    });
  }
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
    className: (0,shared_lib_classNames_classNames__WEBPACK_IMPORTED_MODULE_1__.classNames)(_CommentList_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].CommentList, {}, [className]),
    children: (comments === null || comments === void 0 ? void 0 : comments.length) ? comments.map(function (comment) {
      return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_CommentCard_CommentCard__WEBPACK_IMPORTED_MODULE_3__.CommentCard, {
        isLoading: isLoading,
        className: _CommentList_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].comment,
        comment: comment
      }, comment.id);
    }) : (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(shared_ui_Text_Text__WEBPACK_IMPORTED_MODULE_5__.Text, {
      title: t('Комментарии отсутствуют')
    })
  });
};
_s(CommentList, "h6J0Q3nxDyaAQ99JMz6OOoWbcwM=", false, function () {
  return [react_i18next__WEBPACK_IMPORTED_MODULE_4__.useTranslation];
});
_c2 = CommentList;

var _c2;
__webpack_require__.$Refresh$.register(_c2, "CommentList");

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

/***/ "./src/features/AddCommentForm/ui/AddCommentForm/AddCommentForm.async.tsx":
/*!********************************************************************************!*\
  !*** ./src/features/AddCommentForm/ui/AddCommentForm/AddCommentForm.async.tsx ***!
  \********************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AddCommentFormAsync: () => (/* binding */ AddCommentFormAsync)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

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

var AddCommentFormAsync = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(_c = function _c() {
  return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          return [4 /*yield*/, __webpack_require__.e(/*! import() */ "src_features_AddCommentForm_ui_AddCommentForm_AddCommentForm_tsx").then(__webpack_require__.bind(__webpack_require__, /*! ./AddCommentForm */ "./src/features/AddCommentForm/ui/AddCommentForm/AddCommentForm.tsx"))];
        case 1:
          return [2 /*return*/, _a.sent()];
      }
    });
  });
});
_c2 = AddCommentFormAsync;
var _c, _c2;
__webpack_require__.$Refresh$.register(_c, "AddCommentFormAsync$lazy");
__webpack_require__.$Refresh$.register(_c2, "AddCommentFormAsync");

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

/***/ "./src/pages/ArticleDetailsPage/ui/ArticleDetailsPageHeader/ArticleDetailsPageHeader.tsx":
/*!***********************************************************************************************!*\
  !*** ./src/pages/ArticleDetailsPage/ui/ArticleDetailsPageHeader/ArticleDetailsPageHeader.tsx ***!
  \***********************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ArticleDetailsPageHeader: () => (/* binding */ ArticleDetailsPageHeader)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var shared_lib_classNames_classNames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shared/lib/classNames/classNames */ "./src/shared/lib/classNames/classNames.ts");
/* harmony import */ var _ArticleDetailsPageHeader_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ArticleDetailsPageHeader.module.scss */ "./src/pages/ArticleDetailsPage/ui/ArticleDetailsPageHeader/ArticleDetailsPageHeader.module.scss");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var shared_config_routeConfig_routeConfig__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! shared/config/routeConfig/routeConfig */ "./src/shared/config/routeConfig/routeConfig.tsx");
/* harmony import */ var shared_ui_Button_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! shared/ui/Button/Button */ "./src/shared/ui/Button/Button.tsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var entities_User__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! entities/User */ "./src/entities/User/index.ts");
/* harmony import */ var entities_Article__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! entities/Article */ "./src/entities/Article/index.ts");
/* harmony import */ var pages_ArticleDetailsPage_model_selectors_article__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! pages/ArticleDetailsPage/model/selectors/article */ "./src/pages/ArticleDetailsPage/model/selectors/article.ts");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

var _s = __webpack_require__.$Refresh$.signature();












var ArticleDetailsPageHeader = /*#__PURE__*/_s( /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_4__.memo)(_c = _s(function (props) {
  _s();
  var _a = props.className,
    className = _a === void 0 ? '' : _a;
  var t = (0,react_i18next__WEBPACK_IMPORTED_MODULE_3__.useTranslation)().t;
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_11__.useNavigate)();
  var userData = (0,react_redux__WEBPACK_IMPORTED_MODULE_7__.useSelector)(entities_User__WEBPACK_IMPORTED_MODULE_8__.getUserAuthData);
  var article = (0,react_redux__WEBPACK_IMPORTED_MODULE_7__.useSelector)(entities_Article__WEBPACK_IMPORTED_MODULE_9__.getArticleDetailsData);
  var canEdit = (0,react_redux__WEBPACK_IMPORTED_MODULE_7__.useSelector)(pages_ArticleDetailsPage_model_selectors_article__WEBPACK_IMPORTED_MODULE_10__.getCanEditArticle);
  var onBackToList = (0,react__WEBPACK_IMPORTED_MODULE_4__.useCallback)(function () {
    navigate(shared_config_routeConfig_routeConfig__WEBPACK_IMPORTED_MODULE_5__.RoutePath.articles);
  }, [navigate]);
  var onEditArticle = (0,react__WEBPACK_IMPORTED_MODULE_4__.useCallback)(function () {
    navigate("".concat(shared_config_routeConfig_routeConfig__WEBPACK_IMPORTED_MODULE_5__.RoutePath.articleDetails).concat(article === null || article === void 0 ? void 0 : article.id, "/edit"));
  }, [navigate, article === null || article === void 0 ? void 0 : article.id]);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
    className: (0,shared_lib_classNames_classNames__WEBPACK_IMPORTED_MODULE_1__.classNames)(_ArticleDetailsPageHeader_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].ArticleDetailsPageHeader, {}, [className]),
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(shared_ui_Button_Button__WEBPACK_IMPORTED_MODULE_6__.Button, {
      theme: shared_ui_Button_Button__WEBPACK_IMPORTED_MODULE_6__.ButtonTheme.OUTLINE,
      onClick: onBackToList,
      children: t('Назад к списку')
    }), canEdit && (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(shared_ui_Button_Button__WEBPACK_IMPORTED_MODULE_6__.Button, {
      className: _ArticleDetailsPageHeader_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].editBtn,
      theme: shared_ui_Button_Button__WEBPACK_IMPORTED_MODULE_6__.ButtonTheme.OUTLINE,
      onClick: onEditArticle,
      children: t('Редактировать')
    })]
  });
}, "O8heqABp8NIdMgiDcbSESluxqPY=", false, function () {
  return [react_i18next__WEBPACK_IMPORTED_MODULE_3__.useTranslation, react_router_dom__WEBPACK_IMPORTED_MODULE_11__.useNavigate, react_redux__WEBPACK_IMPORTED_MODULE_7__.useSelector, react_redux__WEBPACK_IMPORTED_MODULE_7__.useSelector, react_redux__WEBPACK_IMPORTED_MODULE_7__.useSelector];
})), "O8heqABp8NIdMgiDcbSESluxqPY=", false, function () {
  return [react_i18next__WEBPACK_IMPORTED_MODULE_3__.useTranslation, react_router_dom__WEBPACK_IMPORTED_MODULE_11__.useNavigate, react_redux__WEBPACK_IMPORTED_MODULE_7__.useSelector, react_redux__WEBPACK_IMPORTED_MODULE_7__.useSelector, react_redux__WEBPACK_IMPORTED_MODULE_7__.useSelector];
});
_c2 = ArticleDetailsPageHeader;
ArticleDetailsPageHeader.displayName = 'ArticleDetailsPageHeader';

var _c, _c2;
__webpack_require__.$Refresh$.register(_c, "ArticleDetailsPageHeader$memo");
__webpack_require__.$Refresh$.register(_c2, "ArticleDetailsPageHeader");

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

/***/ "./src/pages/ArticleDetailsPage/ui/ArticleDetailsPage/ArticleDetailsPage.tsx":
/*!***********************************************************************************!*\
  !*** ./src/pages/ArticleDetailsPage/ui/ArticleDetailsPage/ArticleDetailsPage.tsx ***!
  \***********************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var shared_lib_classNames_classNames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shared/lib/classNames/classNames */ "./src/shared/lib/classNames/classNames.ts");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var entities_Article__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! entities/Article */ "./src/entities/Article/index.ts");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var entities_Comment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! entities/Comment */ "./src/entities/Comment/index.ts");
/* harmony import */ var shared_ui_Text_Text__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! shared/ui/Text/Text */ "./src/shared/ui/Text/Text.tsx");
/* harmony import */ var _ArticleDetailsPage_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ArticleDetailsPage.module.scss */ "./src/pages/ArticleDetailsPage/ui/ArticleDetailsPage/ArticleDetailsPage.module.scss");
/* harmony import */ var shared_lib_components_DynamicModuleLoader_DynamicModuleLoader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! shared/lib/components/DynamicModuleLoader/DynamicModuleLoader */ "./src/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader.tsx");
/* harmony import */ var _model_slices_articleDetailsCommentsSlice__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../model/slices/articleDetailsCommentsSlice */ "./src/pages/ArticleDetailsPage/model/slices/articleDetailsCommentsSlice.ts");
/* harmony import */ var _model_slices_articleDetailsPageRecomendationSlice__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../model/slices/articleDetailsPageRecomendationSlice */ "./src/pages/ArticleDetailsPage/model/slices/articleDetailsPageRecomendationSlice.ts");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _model_selectors_comments__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../model/selectors/comments */ "./src/pages/ArticleDetailsPage/model/selectors/comments.ts");
/* harmony import */ var shared_lib_hooks_useInitialEffect_useInitialEffect__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! shared/lib/hooks/useInitialEffect/useInitialEffect */ "./src/shared/lib/hooks/useInitialEffect/useInitialEffect.ts");
/* harmony import */ var shared_lib_hooks_useAppDispatch_useAppDispatch__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! shared/lib/hooks/useAppDispatch/useAppDispatch */ "./src/shared/lib/hooks/useAppDispatch/useAppDispatch.ts");
/* harmony import */ var _model_services_fetchCommentsByArticleId_fetchCommentsByArticleId__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId */ "./src/pages/ArticleDetailsPage/model/services/fetchCommentsByArticleId/fetchCommentsByArticleId.ts");
/* harmony import */ var features_AddCommentForm__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! features/AddCommentForm */ "./src/features/AddCommentForm/index.ts");
/* harmony import */ var _model_services_addCommentForArticle_addCommentForArticle__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../model/services/addCommentForArticle/addCommentForArticle */ "./src/pages/ArticleDetailsPage/model/services/addCommentForArticle/addCommentForArticle.ts");
/* harmony import */ var shared_config_routeConfig_routeConfig__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! shared/config/routeConfig/routeConfig */ "./src/shared/config/routeConfig/routeConfig.tsx");
/* harmony import */ var widgets_Page_Page__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! widgets/Page/Page */ "./src/widgets/Page/Page.tsx");
/* harmony import */ var _model_selectors_recomendations__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../model/selectors/recomendations */ "./src/pages/ArticleDetailsPage/model/selectors/recomendations.ts");
/* harmony import */ var _model_services_fetchArticleRecommendations_fetchArticleRecommendations__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../model/services/fetchArticleRecommendations/fetchArticleRecommendations */ "./src/pages/ArticleDetailsPage/model/services/fetchArticleRecommendations/fetchArticleRecommendations.ts");
/* harmony import */ var _model_slices__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../model/slices */ "./src/pages/ArticleDetailsPage/model/slices/index.ts");
/* harmony import */ var _ArticleDetailsPageHeader_ArticleDetailsPageHeader__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../ArticleDetailsPageHeader/ArticleDetailsPageHeader */ "./src/pages/ArticleDetailsPage/ui/ArticleDetailsPageHeader/ArticleDetailsPageHeader.tsx");
/* harmony import */ var pages_ArticlePage_model_services_fetchNextArticlesPage_fetchNextArticlesPage__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! pages/ArticlePage/model/services/fetchNextArticlesPage/fetchNextArticlesPage */ "./src/pages/ArticlePage/model/services/fetchNextArticlesPage/fetchNextArticlesPage.ts");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

var _s = __webpack_require__.$Refresh$.signature();


























var reducers = {
  articleDetailsPage: _model_slices__WEBPACK_IMPORTED_MODULE_22__.articleDetailsPageReducer
};
var ArticleDetailsPage = function ArticleDetailsPage(_a) {
  _s();
  var _b = _a.className,
    className = _b === void 0 ? '' : _b;
  var t = (0,react_i18next__WEBPACK_IMPORTED_MODULE_2__.useTranslation)('article-details').t;
  var id = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_25__.useParams)().id;
  var comments = (0,react_redux__WEBPACK_IMPORTED_MODULE_11__.useSelector)(_model_slices_articleDetailsCommentsSlice__WEBPACK_IMPORTED_MODULE_9__.getArticleComments.selectAll);
  var recomendations = (0,react_redux__WEBPACK_IMPORTED_MODULE_11__.useSelector)(_model_slices_articleDetailsPageRecomendationSlice__WEBPACK_IMPORTED_MODULE_10__.getArticleRecomendations.selectAll);
  var commentsIsLoading = (0,react_redux__WEBPACK_IMPORTED_MODULE_11__.useSelector)(_model_selectors_comments__WEBPACK_IMPORTED_MODULE_12__.getArticleCommentsIsLoading);
  var recomendationsIsLoading = (0,react_redux__WEBPACK_IMPORTED_MODULE_11__.useSelector)(_model_selectors_recomendations__WEBPACK_IMPORTED_MODULE_20__.getArticleRecomendationsIsLoading);
  var dispatch = (0,shared_lib_hooks_useAppDispatch_useAppDispatch__WEBPACK_IMPORTED_MODULE_14__.useAppDispatch)();
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_25__.useNavigate)();
  var onSendComment = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(function (text) {
    void dispatch((0,_model_services_addCommentForArticle_addCommentForArticle__WEBPACK_IMPORTED_MODULE_17__.addCommentForArticle)(text));
  }, [dispatch]);
  var onBackToList = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(function () {
    navigate(shared_config_routeConfig_routeConfig__WEBPACK_IMPORTED_MODULE_18__.RoutePath.articles);
  }, [navigate]);
  (0,shared_lib_hooks_useInitialEffect_useInitialEffect__WEBPACK_IMPORTED_MODULE_13__.useInitialEffect)(function () {
    void dispatch((0,_model_services_fetchCommentsByArticleId_fetchCommentsByArticleId__WEBPACK_IMPORTED_MODULE_15__.fetchCommentsByArticleId)(id));
    void dispatch((0,_model_services_fetchArticleRecommendations_fetchArticleRecommendations__WEBPACK_IMPORTED_MODULE_21__.fetchArticleRecommendations)());
  });
  var onLoadNextPart = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(function () {
    void dispatch((0,pages_ArticlePage_model_services_fetchNextArticlesPage_fetchNextArticlesPage__WEBPACK_IMPORTED_MODULE_24__.fetchNextArticlesPage)());
  }, [dispatch]);
  if (!id) {
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(widgets_Page_Page__WEBPACK_IMPORTED_MODULE_19__.Page, {
      className: (0,shared_lib_classNames_classNames__WEBPACK_IMPORTED_MODULE_1__.classNames)('', {}, [className]),
      children: t('Пост не найден')
    });
  }
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(shared_lib_components_DynamicModuleLoader_DynamicModuleLoader__WEBPACK_IMPORTED_MODULE_8__.DynamicModuleLoader, {
    reducers: reducers,
    removeAfterUnmount: true,
    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(widgets_Page_Page__WEBPACK_IMPORTED_MODULE_19__.Page, {
      className: (0,shared_lib_classNames_classNames__WEBPACK_IMPORTED_MODULE_1__.classNames)('', {}, [className]),
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_ArticleDetailsPageHeader_ArticleDetailsPageHeader__WEBPACK_IMPORTED_MODULE_23__.ArticleDetailsPageHeader, {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(entities_Article__WEBPACK_IMPORTED_MODULE_4__.ArticleDetails, {
        id: id
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(shared_ui_Text_Text__WEBPACK_IMPORTED_MODULE_6__.Text, {
        size: shared_ui_Text_Text__WEBPACK_IMPORTED_MODULE_6__.TextSize.L,
        className: _ArticleDetailsPage_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].commentsTitle,
        title: t('Рекомендуем')
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(entities_Article__WEBPACK_IMPORTED_MODULE_4__.ArticleList, {
        onLoadNextPart: onLoadNextPart,
        articles: recomendations,
        isLoading: recomendationsIsLoading,
        className: _ArticleDetailsPage_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].recommendations,
        target: '_blank'
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(shared_ui_Text_Text__WEBPACK_IMPORTED_MODULE_6__.Text, {
        size: shared_ui_Text_Text__WEBPACK_IMPORTED_MODULE_6__.TextSize.L,
        className: _ArticleDetailsPage_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].commentsTitle,
        title: t('Комментарии')
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(features_AddCommentForm__WEBPACK_IMPORTED_MODULE_16__.AddCommentForm, {
        onSendComment: onSendComment
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(entities_Comment__WEBPACK_IMPORTED_MODULE_5__.CommentList, {
        isLoading: commentsIsLoading,
        comments: comments
      })]
    })
  });
};
_s(ArticleDetailsPage, "FygsCwTrN52xaLJICQWvnFR/qgM=", false, function () {
  return [react_i18next__WEBPACK_IMPORTED_MODULE_2__.useTranslation, react_router_dom__WEBPACK_IMPORTED_MODULE_25__.useParams, react_redux__WEBPACK_IMPORTED_MODULE_11__.useSelector, react_redux__WEBPACK_IMPORTED_MODULE_11__.useSelector, react_redux__WEBPACK_IMPORTED_MODULE_11__.useSelector, react_redux__WEBPACK_IMPORTED_MODULE_11__.useSelector, shared_lib_hooks_useAppDispatch_useAppDispatch__WEBPACK_IMPORTED_MODULE_14__.useAppDispatch, react_router_dom__WEBPACK_IMPORTED_MODULE_25__.useNavigate, shared_lib_hooks_useInitialEffect_useInitialEffect__WEBPACK_IMPORTED_MODULE_13__.useInitialEffect];
});
_c = ArticleDetailsPage;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ArticleDetailsPage);
var _c;
__webpack_require__.$Refresh$.register(_c, "ArticleDetailsPage");

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

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/entities/Comment/ui/CommentCard/CommentCard.module.scss":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/entities/Comment/ui/CommentCard/CommentCard.module.scss ***!
  \******************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, `.src-entities-Comment-ui-CommentCard-CommentCard-module__CommentCard--xIHBy {
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  padding: 10px;
  box-sizing: border-box;
}

.src-entities-Comment-ui-CommentCard-CommentCard-module__header--dsH_3 {
  display: flex;
  align-items: center;
  column-gap: 10px;
  width: auto;
}

.src-entities-Comment-ui-CommentCard-CommentCard-module__body--zEcWO {
  width: 100%;
}`, "",{"version":3,"sources":["webpack://./src/entities/Comment/ui/CommentCard/CommentCard.module.scss"],"names":[],"mappings":"AAAA;EACI,aAAA;EACA,sBAAA;EACA,aAAA;EACA,aAAA;EACA,sBAAA;AACJ;;AAEA;EACI,aAAA;EACA,mBAAA;EACA,gBAAA;EACA,WAAA;AACJ;;AAEA;EACI,WAAA;AACJ","sourcesContent":[".CommentCard {\r\n    display: flex;\r\n    flex-direction: column;\r\n    row-gap: 10px;\r\n    padding: 10px;\r\n    box-sizing: border-box;\r\n}\r\n\r\n.header {\r\n    display: flex;\r\n    align-items: center;\r\n    column-gap: 10px;\r\n    width: auto;\r\n}\r\n\r\n.body {\r\n    width: 100%;\r\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"CommentCard": `src-entities-Comment-ui-CommentCard-CommentCard-module__CommentCard--xIHBy`,
	"header": `src-entities-Comment-ui-CommentCard-CommentCard-module__header--dsH_3`,
	"body": `src-entities-Comment-ui-CommentCard-CommentCard-module__body--zEcWO`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/entities/Comment/ui/CommentList/CommentList.module.scss":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/entities/Comment/ui/CommentList/CommentList.module.scss ***!
  \******************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, `.src-entities-Comment-ui-CommentList-CommentList-module__comment--zo5NF {
  margin-top: 20px;
}`, "",{"version":3,"sources":["webpack://./src/entities/Comment/ui/CommentList/CommentList.module.scss"],"names":[],"mappings":"AAAA;EACI,gBAAA;AACJ","sourcesContent":[".comment {\r\n    margin-top: 20px;\r\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"comment": `src-entities-Comment-ui-CommentList-CommentList-module__comment--zo5NF`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/ArticleDetailsPage/ui/ArticleDetailsPageHeader/ArticleDetailsPageHeader.module.scss":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/ArticleDetailsPage/ui/ArticleDetailsPageHeader/ArticleDetailsPageHeader.module.scss ***!
  \****************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, `.src-pages-ArticleDetailsPage-ui-ArticleDetailsPageHeader-ArticleDetailsPageHeader-module__ArticleDetailsPageHeader--PF3DY {
  display: flex;
  align-items: center;
}

.src-pages-ArticleDetailsPage-ui-ArticleDetailsPageHeader-ArticleDetailsPageHeader-module__editBtn--XdnP3 {
  margin-left: auto;
}`, "",{"version":3,"sources":["webpack://./src/pages/ArticleDetailsPage/ui/ArticleDetailsPageHeader/ArticleDetailsPageHeader.module.scss"],"names":[],"mappings":"AAAA;EACI,aAAA;EACA,mBAAA;AACJ;;AAEA;EACI,iBAAA;AACJ","sourcesContent":[".ArticleDetailsPageHeader {\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n.editBtn {\r\n    margin-left: auto;\r\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"ArticleDetailsPageHeader": `src-pages-ArticleDetailsPage-ui-ArticleDetailsPageHeader-ArticleDetailsPageHeader-module__ArticleDetailsPageHeader--PF3DY`,
	"editBtn": `src-pages-ArticleDetailsPage-ui-ArticleDetailsPageHeader-ArticleDetailsPageHeader-module__editBtn--XdnP3`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/ArticleDetailsPage/ui/ArticleDetailsPage/ArticleDetailsPage.module.scss":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/ArticleDetailsPage/ui/ArticleDetailsPage/ArticleDetailsPage.module.scss ***!
  \****************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, `.src-pages-ArticleDetailsPage-ui-ArticleDetailsPage-ArticleDetailsPage-module__ArticleDetailsPage--adu8f {
  min-height: 100%;
}

.src-pages-ArticleDetailsPage-ui-ArticleDetailsPage-ArticleDetailsPage-module__commentsTitle--oRxyw {
  margin-top: 50px;
}

.src-pages-ArticleDetailsPage-ui-ArticleDetailsPage-ArticleDetailsPage-module__recommendations--NwQlS {
  margin-top: 20px;
  display: flex;
  flex-wrap: nowrap;
  overflow-y: hidden;
  overflow-x: auto;
  padding-bottom: 20px;
}`, "",{"version":3,"sources":["webpack://./src/pages/ArticleDetailsPage/ui/ArticleDetailsPage/ArticleDetailsPage.module.scss"],"names":[],"mappings":"AAAA;EACI,gBAAA;AACJ;;AAEA;EACI,gBAAA;AACJ;;AAEA;EACI,gBAAA;EACA,aAAA;EACA,iBAAA;EACA,kBAAA;EACA,gBAAA;EACA,oBAAA;AACJ","sourcesContent":[".ArticleDetailsPage {\r\n    min-height: 100%;\r\n}\r\n\r\n.commentsTitle {\r\n    margin-top: 50px;\r\n}\r\n\r\n.recommendations {\r\n    margin-top: 20px;\r\n    display: flex;\r\n    flex-wrap: nowrap;\r\n    overflow-y: hidden;\r\n    overflow-x: auto;\r\n    padding-bottom: 20px;\r\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"ArticleDetailsPage": `src-pages-ArticleDetailsPage-ui-ArticleDetailsPage-ArticleDetailsPage-module__ArticleDetailsPage--adu8f`,
	"commentsTitle": `src-pages-ArticleDetailsPage-ui-ArticleDetailsPage-ArticleDetailsPage-module__commentsTitle--oRxyw`,
	"recommendations": `src-pages-ArticleDetailsPage-ui-ArticleDetailsPage-ArticleDetailsPage-module__recommendations--NwQlS`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/entities/Comment/ui/CommentCard/CommentCard.module.scss":
/*!*********************************************************************!*\
  !*** ./src/entities/Comment/ui/CommentCard/CommentCard.module.scss ***!
  \*********************************************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_CommentCard_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!../../../../../node_modules/sass-loader/dist/cjs.js!./CommentCard.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/entities/Comment/ui/CommentCard/CommentCard.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_CommentCard_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);


if (true) {
  if (!_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_CommentCard_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals || module.hot.invalidate) {
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
    var isNamedExport = !_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_CommentCard_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;
    var oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_CommentCard_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_CommentCard_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

    module.hot.accept(
      /*! !!../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!../../../../../node_modules/sass-loader/dist/cjs.js!./CommentCard.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/entities/Comment/ui/CommentCard/CommentCard.module.scss",
      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_CommentCard_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!../../../../../node_modules/sass-loader/dist/cjs.js!./CommentCard.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/entities/Comment/ui/CommentCard/CommentCard.module.scss");
(function () {
        if (!isEqualLocals(oldLocals, isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_CommentCard_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_CommentCard_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals, isNamedExport)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_CommentCard_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_CommentCard_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

              update(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_CommentCard_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"]);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}



       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_CommentCard_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_CommentCard_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_CommentCard_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/entities/Comment/ui/CommentList/CommentList.module.scss":
/*!*********************************************************************!*\
  !*** ./src/entities/Comment/ui/CommentList/CommentList.module.scss ***!
  \*********************************************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_CommentList_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!../../../../../node_modules/sass-loader/dist/cjs.js!./CommentList.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/entities/Comment/ui/CommentList/CommentList.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_CommentList_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);


if (true) {
  if (!_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_CommentList_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals || module.hot.invalidate) {
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
    var isNamedExport = !_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_CommentList_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;
    var oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_CommentList_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_CommentList_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

    module.hot.accept(
      /*! !!../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!../../../../../node_modules/sass-loader/dist/cjs.js!./CommentList.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/entities/Comment/ui/CommentList/CommentList.module.scss",
      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_CommentList_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!../../../../../node_modules/sass-loader/dist/cjs.js!./CommentList.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/entities/Comment/ui/CommentList/CommentList.module.scss");
(function () {
        if (!isEqualLocals(oldLocals, isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_CommentList_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_CommentList_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals, isNamedExport)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_CommentList_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_CommentList_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

              update(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_CommentList_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"]);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}



       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_CommentList_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_CommentList_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_CommentList_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/pages/ArticleDetailsPage/ui/ArticleDetailsPageHeader/ArticleDetailsPageHeader.module.scss":
/*!*******************************************************************************************************!*\
  !*** ./src/pages/ArticleDetailsPage/ui/ArticleDetailsPageHeader/ArticleDetailsPageHeader.module.scss ***!
  \*******************************************************************************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ArticleDetailsPageHeader_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!../../../../../node_modules/sass-loader/dist/cjs.js!./ArticleDetailsPageHeader.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/ArticleDetailsPage/ui/ArticleDetailsPageHeader/ArticleDetailsPageHeader.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ArticleDetailsPageHeader_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);


if (true) {
  if (!_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ArticleDetailsPageHeader_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals || module.hot.invalidate) {
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
    var isNamedExport = !_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ArticleDetailsPageHeader_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;
    var oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ArticleDetailsPageHeader_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ArticleDetailsPageHeader_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

    module.hot.accept(
      /*! !!../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!../../../../../node_modules/sass-loader/dist/cjs.js!./ArticleDetailsPageHeader.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/ArticleDetailsPage/ui/ArticleDetailsPageHeader/ArticleDetailsPageHeader.module.scss",
      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ArticleDetailsPageHeader_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!../../../../../node_modules/sass-loader/dist/cjs.js!./ArticleDetailsPageHeader.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/ArticleDetailsPage/ui/ArticleDetailsPageHeader/ArticleDetailsPageHeader.module.scss");
(function () {
        if (!isEqualLocals(oldLocals, isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ArticleDetailsPageHeader_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ArticleDetailsPageHeader_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals, isNamedExport)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ArticleDetailsPageHeader_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ArticleDetailsPageHeader_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

              update(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ArticleDetailsPageHeader_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"]);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}



       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ArticleDetailsPageHeader_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ArticleDetailsPageHeader_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ArticleDetailsPageHeader_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/pages/ArticleDetailsPage/ui/ArticleDetailsPage/ArticleDetailsPage.module.scss":
/*!*******************************************************************************************!*\
  !*** ./src/pages/ArticleDetailsPage/ui/ArticleDetailsPage/ArticleDetailsPage.module.scss ***!
  \*******************************************************************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ArticleDetailsPage_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!../../../../../node_modules/sass-loader/dist/cjs.js!./ArticleDetailsPage.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/ArticleDetailsPage/ui/ArticleDetailsPage/ArticleDetailsPage.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ArticleDetailsPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);


if (true) {
  if (!_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ArticleDetailsPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals || module.hot.invalidate) {
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
    var isNamedExport = !_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ArticleDetailsPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;
    var oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ArticleDetailsPage_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ArticleDetailsPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

    module.hot.accept(
      /*! !!../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!../../../../../node_modules/sass-loader/dist/cjs.js!./ArticleDetailsPage.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/ArticleDetailsPage/ui/ArticleDetailsPage/ArticleDetailsPage.module.scss",
      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ArticleDetailsPage_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!../../../../../node_modules/sass-loader/dist/cjs.js!./ArticleDetailsPage.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/ArticleDetailsPage/ui/ArticleDetailsPage/ArticleDetailsPage.module.scss");
(function () {
        if (!isEqualLocals(oldLocals, isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ArticleDetailsPage_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ArticleDetailsPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals, isNamedExport)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ArticleDetailsPage_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ArticleDetailsPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

              update(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ArticleDetailsPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"]);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}



       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ArticleDetailsPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ArticleDetailsPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ArticleDetailsPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/entities/Comment/index.ts":
/*!***************************************!*\
  !*** ./src/entities/Comment/index.ts ***!
  \***************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CommentList: () => (/* reexport safe */ _ui_CommentList_CommentList__WEBPACK_IMPORTED_MODULE_0__.CommentList)
/* harmony export */ });
/* harmony import */ var _ui_CommentList_CommentList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui/CommentList/CommentList */ "./src/entities/Comment/ui/CommentList/CommentList.tsx");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");




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

/***/ "./src/features/AddCommentForm/index.ts":
/*!**********************************************!*\
  !*** ./src/features/AddCommentForm/index.ts ***!
  \**********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AddCommentForm: () => (/* reexport safe */ _ui_AddCommentForm_AddCommentForm_async__WEBPACK_IMPORTED_MODULE_0__.AddCommentFormAsync)
/* harmony export */ });
/* harmony import */ var _ui_AddCommentForm_AddCommentForm_async__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui/AddCommentForm/AddCommentForm.async */ "./src/features/AddCommentForm/ui/AddCommentForm/AddCommentForm.async.tsx");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");




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

/***/ "./src/pages/ArticleDetailsPage/model/selectors/article.ts":
/*!*****************************************************************!*\
  !*** ./src/pages/ArticleDetailsPage/model/selectors/article.ts ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getCanEditArticle: () => (/* binding */ getCanEditArticle)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/reselect/es/index.js");
/* harmony import */ var entities_Article__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! entities/Article */ "./src/entities/Article/index.ts");
/* harmony import */ var entities_User__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! entities/User */ "./src/entities/User/index.ts");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");




var getCanEditArticle = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__.createSelector)(entities_Article__WEBPACK_IMPORTED_MODULE_0__.getArticleDetailsData, entities_User__WEBPACK_IMPORTED_MODULE_1__.getUserAuthData, function (article, user) {
    if (!article || !user) {
        return false;
    }
    return article.user.id === user.id;
});


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

/***/ "./src/pages/ArticleDetailsPage/model/selectors/comments.ts":
/*!******************************************************************!*\
  !*** ./src/pages/ArticleDetailsPage/model/selectors/comments.ts ***!
  \******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getArticleCommentsError: () => (/* binding */ getArticleCommentsError),
/* harmony export */   getArticleCommentsIsLoading: () => (/* binding */ getArticleCommentsIsLoading)
/* harmony export */ });
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

var getArticleCommentsIsLoading = function (state) { var _a, _b; return (_b = (_a = state.articleDetailsPage) === null || _a === void 0 ? void 0 : _a.comments) === null || _b === void 0 ? void 0 : _b.isLoading; };
var getArticleCommentsError = function (state) { var _a, _b; return (_b = (_a = state.articleDetailsPage) === null || _a === void 0 ? void 0 : _a.comments) === null || _b === void 0 ? void 0 : _b.error; };


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

/***/ "./src/pages/ArticleDetailsPage/model/selectors/recomendations.ts":
/*!************************************************************************!*\
  !*** ./src/pages/ArticleDetailsPage/model/selectors/recomendations.ts ***!
  \************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getArticleRecomendationsError: () => (/* binding */ getArticleRecomendationsError),
/* harmony export */   getArticleRecomendationsIsLoading: () => (/* binding */ getArticleRecomendationsIsLoading)
/* harmony export */ });
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

var getArticleRecomendationsIsLoading = function (state) { var _a, _b; return (_b = (_a = state.articleDetailsPage) === null || _a === void 0 ? void 0 : _a.recommendations) === null || _b === void 0 ? void 0 : _b.isLoading; };
var getArticleRecomendationsError = function (state) { var _a, _b; return (_b = (_a = state.articleDetailsPage) === null || _a === void 0 ? void 0 : _a.recommendations) === null || _b === void 0 ? void 0 : _b.error; };


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

/***/ "./src/pages/ArticleDetailsPage/model/services/addCommentForArticle/addCommentForArticle.ts":
/*!**************************************************************************************************!*\
  !*** ./src/pages/ArticleDetailsPage/model/services/addCommentForArticle/addCommentForArticle.ts ***!
  \**************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addCommentForArticle: () => (/* binding */ addCommentForArticle)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");
/* harmony import */ var entities_User__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! entities/User */ "./src/entities/User/index.ts");
/* harmony import */ var entities_Article__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! entities/Article */ "./src/entities/Article/index.ts");
/* harmony import */ var _fetchCommentsByArticleId_fetchCommentsByArticleId__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../fetchCommentsByArticleId/fetchCommentsByArticleId */ "./src/pages/ArticleDetailsPage/model/services/fetchCommentsByArticleId/fetchCommentsByArticleId.ts");
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




var addCommentForArticle = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_3__.createAsyncThunk)('articleDetails/addCommentForArticle', function (text, thunkApi) { return __awaiter(void 0, void 0, void 0, function () {
    var dispatch, extra, rejectWithValue, getState, userData, article, response, err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                dispatch = thunkApi.dispatch, extra = thunkApi.extra, rejectWithValue = thunkApi.rejectWithValue, getState = thunkApi.getState;
                userData = (0,entities_User__WEBPACK_IMPORTED_MODULE_0__.getUserAuthData)(getState());
                article = (0,entities_Article__WEBPACK_IMPORTED_MODULE_1__.getArticleDetailsData)(getState());
                if (!userData || !text || !article) {
                    return [2 /*return*/, rejectWithValue('No data')];
                }
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, extra.api.post('/comments', {
                        articleId: article.id,
                        userId: userData.id,
                        text: text
                    })];
            case 2:
                response = _a.sent();
                if (!response.data) {
                    throw new Error();
                }
                void dispatch((0,_fetchCommentsByArticleId_fetchCommentsByArticleId__WEBPACK_IMPORTED_MODULE_2__.fetchCommentsByArticleId)(article.id));
                return [2 /*return*/, response.data];
            case 3:
                err_1 = _a.sent();
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

/***/ "./src/pages/ArticleDetailsPage/model/services/fetchArticleRecommendations/fetchArticleRecommendations.ts":
/*!****************************************************************************************************************!*\
  !*** ./src/pages/ArticleDetailsPage/model/services/fetchArticleRecommendations/fetchArticleRecommendations.ts ***!
  \****************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fetchArticleRecommendations: () => (/* binding */ fetchArticleRecommendations)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");
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

var fetchArticleRecommendations = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)('articleDetailsPage/fetchArticleRecommendations', function (props, thunkApi) { return __awaiter(void 0, void 0, void 0, function () {
    var extra, rejectWithValue, response, err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                extra = thunkApi.extra, rejectWithValue = thunkApi.rejectWithValue;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, extra.api.get('/articles', {
                        params: {
                            _limit: 4
                        }
                    })];
            case 2:
                response = _a.sent();
                if (!response.data) {
                    throw new Error();
                }
                return [2 /*return*/, response.data];
            case 3:
                err_1 = _a.sent();
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

/***/ "./src/pages/ArticleDetailsPage/model/services/fetchCommentsByArticleId/fetchCommentsByArticleId.ts":
/*!**********************************************************************************************************!*\
  !*** ./src/pages/ArticleDetailsPage/model/services/fetchCommentsByArticleId/fetchCommentsByArticleId.ts ***!
  \**********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fetchCommentsByArticleId: () => (/* binding */ fetchCommentsByArticleId)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");
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

var fetchCommentsByArticleId = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)('articleDetailsPage/fetchCommentsByArticleId', function (articleId, thunkApi) { return __awaiter(void 0, void 0, void 0, function () {
    var extra, rejectWithValue, response, err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                extra = thunkApi.extra, rejectWithValue = thunkApi.rejectWithValue;
                if (!articleId) {
                    return [2 /*return*/, rejectWithValue('error')];
                }
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, extra.api.get('/comments', {
                        params: {
                            articleId: articleId,
                            _expand: 'user'
                        }
                    })];
            case 2:
                response = _a.sent();
                if (!response.data) {
                    throw new Error();
                }
                return [2 /*return*/, response.data];
            case 3:
                err_1 = _a.sent();
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

/***/ "./src/pages/ArticleDetailsPage/model/slices/articleDetailsCommentsSlice.ts":
/*!**********************************************************************************!*\
  !*** ./src/pages/ArticleDetailsPage/model/slices/articleDetailsCommentsSlice.ts ***!
  \**********************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   articleDetailsCommentsReducer: () => (/* binding */ articleDetailsCommentsReducer),
/* harmony export */   commentsAdapter: () => (/* binding */ commentsAdapter),
/* harmony export */   getArticleComments: () => (/* binding */ getArticleComments)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");
/* harmony import */ var _services_fetchCommentsByArticleId_fetchCommentsByArticleId__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/fetchCommentsByArticleId/fetchCommentsByArticleId */ "./src/pages/ArticleDetailsPage/model/services/fetchCommentsByArticleId/fetchCommentsByArticleId.ts");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");



var commentsAdapter = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createEntityAdapter)({
    selectId: function (comment) { return comment.id; }
});
var getArticleComments = commentsAdapter.getSelectors(function (state) { var _a, _b; return (_b = (_a = state === null || state === void 0 ? void 0 : state.articleDetailsPage) === null || _a === void 0 ? void 0 : _a.comments) !== null && _b !== void 0 ? _b : commentsAdapter.getInitialState(); });
var articleDetailsCommentsSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createSlice)({
    name: 'articleDetailsCommentsSlice',
    initialState: commentsAdapter.getInitialState({
        isLoading: false,
        error: undefined,
        ids: [],
        entities: {}
    }),
    reducers: {},
    extraReducers: function (builder) {
        builder.addCase(_services_fetchCommentsByArticleId_fetchCommentsByArticleId__WEBPACK_IMPORTED_MODULE_0__.fetchCommentsByArticleId.pending, function (state) {
            state.error = undefined;
            state.isLoading = true;
        });
        builder.addCase(_services_fetchCommentsByArticleId_fetchCommentsByArticleId__WEBPACK_IMPORTED_MODULE_0__.fetchCommentsByArticleId.fulfilled, function (state, action) {
            state.isLoading = false;
            commentsAdapter.setAll(state, action.payload);
        });
        builder.addCase(_services_fetchCommentsByArticleId_fetchCommentsByArticleId__WEBPACK_IMPORTED_MODULE_0__.fetchCommentsByArticleId.rejected, function (state, action) {
            state.isLoading = false;
            state.error = action.payload;
        });
    }
});
var articleDetailsCommentsReducer = articleDetailsCommentsSlice.reducer;


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

/***/ "./src/pages/ArticleDetailsPage/model/slices/articleDetailsPageRecomendationSlice.ts":
/*!*******************************************************************************************!*\
  !*** ./src/pages/ArticleDetailsPage/model/slices/articleDetailsPageRecomendationSlice.ts ***!
  \*******************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   articleDetailsPageRecomendationReducer: () => (/* binding */ articleDetailsPageRecomendationReducer),
/* harmony export */   getArticleRecomendations: () => (/* binding */ getArticleRecomendations),
/* harmony export */   recomendationsAdapter: () => (/* binding */ recomendationsAdapter)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");
/* harmony import */ var _services_fetchArticleRecommendations_fetchArticleRecommendations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/fetchArticleRecommendations/fetchArticleRecommendations */ "./src/pages/ArticleDetailsPage/model/services/fetchArticleRecommendations/fetchArticleRecommendations.ts");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");



var recomendationsAdapter = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createEntityAdapter)({
    selectId: function (article) { return article.id; }
});
var getArticleRecomendations = recomendationsAdapter.getSelectors(function (state) { var _a, _b; return (_b = (_a = state === null || state === void 0 ? void 0 : state.articleDetailsPage) === null || _a === void 0 ? void 0 : _a.recommendations) !== null && _b !== void 0 ? _b : recomendationsAdapter.getInitialState(); });
var articleDetailsPageRecomendationSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createSlice)({
    name: 'articleDetailsPageRecomendation',
    initialState: recomendationsAdapter.getInitialState({
        isLoading: false,
        error: undefined,
        ids: [],
        entities: {}
    }),
    reducers: {},
    extraReducers: function (builder) {
        builder.addCase(_services_fetchArticleRecommendations_fetchArticleRecommendations__WEBPACK_IMPORTED_MODULE_0__.fetchArticleRecommendations.pending, function (state) {
            state.error = undefined;
            state.isLoading = true;
        });
        builder.addCase(_services_fetchArticleRecommendations_fetchArticleRecommendations__WEBPACK_IMPORTED_MODULE_0__.fetchArticleRecommendations.fulfilled, function (state, action) {
            state.isLoading = false;
            recomendationsAdapter.setAll(state, action.payload);
        });
        builder.addCase(_services_fetchArticleRecommendations_fetchArticleRecommendations__WEBPACK_IMPORTED_MODULE_0__.fetchArticleRecommendations.rejected, function (state, action) {
            state.isLoading = false;
            state.error = action.payload;
        });
    }
});
var articleDetailsPageRecomendationReducer = articleDetailsPageRecomendationSlice.reducer;


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

/***/ "./src/pages/ArticleDetailsPage/model/slices/index.ts":
/*!************************************************************!*\
  !*** ./src/pages/ArticleDetailsPage/model/slices/index.ts ***!
  \************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   articleDetailsPageReducer: () => (/* binding */ articleDetailsPageReducer)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _articleDetailsPageRecomendationSlice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./articleDetailsPageRecomendationSlice */ "./src/pages/ArticleDetailsPage/model/slices/articleDetailsPageRecomendationSlice.ts");
/* harmony import */ var _articleDetailsCommentsSlice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./articleDetailsCommentsSlice */ "./src/pages/ArticleDetailsPage/model/slices/articleDetailsCommentsSlice.ts");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");




var articleDetailsPageReducer = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__.combineReducers)({
    recommendations: _articleDetailsPageRecomendationSlice__WEBPACK_IMPORTED_MODULE_0__.articleDetailsPageRecomendationReducer,
    comments: _articleDetailsCommentsSlice__WEBPACK_IMPORTED_MODULE_1__.articleDetailsCommentsReducer
});


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX3BhZ2VzX0FydGljbGVEZXRhaWxzUGFnZV91aV9BcnRpY2xlRGV0YWlsc1BhZ2VfQXJ0aWNsZURldGFpbHNQYWdlX3RzeC4xODc1ZTFjMDQ4N2MzNjMyZTkzNi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTZEO0FBQ2xCO0FBR2Y7QUFDZ0M7QUFDbEI7QUFDWTtBQUNIO0FBQ2M7QUFRakUsSUFBTVMsV0FBVyxnQkFBR1AsMkNBQUksQ0FBQVEsR0FBQSxHQUFDLFNBQUFBLElBQUNDLEtBQXVCOztFQUN2QyxJQUFBQyxFQUFBLEdBQStDRCxLQUFLLENBQUFFLFNBQXRDO0lBQWRBLFNBQVMsR0FBQUQsRUFBQSxjQUFHLEVBQUUsR0FBQUEsRUFBQTtJQUFFRSxPQUFPLEdBQXdCSCxLQUFLLENBQUFHLE9BQTdCO0lBQUVDLEVBQUEsR0FBc0JKLEtBQUssQ0FBQUssU0FBVjtJQUFqQkEsU0FBUyxHQUFBRCxFQUFBLGNBQUcsS0FBSyxHQUFBQSxFQUFBO0VBRWxELElBQUlDLFNBQVMsRUFBRTtJQUNiLE9BQ0lDLHVEQUFBO01BQUtKLFNBQVMsRUFBRWIsNEVBQVUsQ0FBQ0MsZ0VBQUcsQ0FBQ1EsV0FBVyxFQUFFLEVBQUUsRUFBRSxDQUFDSSxTQUFTLENBQUMsQ0FBQztNQUFBSyxRQUFBLEdBQ3hERCx1REFBQTtRQUFLSixTQUFTLEVBQUVaLGdFQUFHLENBQUNrQixNQUFNO1FBQUFELFFBQUEsR0FDdEJFLHNEQUFBLENBQUNkLGlFQUFRO1VBQUNlLEtBQUssRUFBRSxFQUFFO1VBQUVDLE1BQU0sRUFBRSxFQUFFO1VBQUVDLE9BQU8sRUFBQztRQUFLLEVBQUcsRUFDakRILHNEQUFBLENBQUNkLGlFQUFRO1VBQUNnQixNQUFNLEVBQUUsRUFBRTtVQUFFRCxLQUFLLEVBQUU7UUFBRyxFQUFJO01BQUEsRUFDbEMsRUFDTkQsc0RBQUEsQ0FBQ2QsaUVBQVE7UUFBQ08sU0FBUyxFQUFFWixnRUFBRyxDQUFDdUIsSUFBSTtRQUFFSCxL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Q0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Zsb3Jpc3RieS8uL3NyYy9lbnRpdGllcy9Db21tZW50L3VpL0NvbW1lbnRDYXJkL0NvbW1lbnRDYXJkLnRzeCIsIndlYnBhY2s6Ly9mbG9yaXN0YnkvLi9zcmMvZW50aXRpZXMvQ29tbWVudC91aS9Db21tZW50TGlzdC9Db21tZW50TGlzdC50c3giLCJ3ZWJwYWNrOi8vZmxvcmlzdGJ5Ly4vc3JjL2ZlYXR1cmVzL0FkZENvbW1lbnRGb3JtL3VpL0FkZENvbW1lbnRGb3JtL0FkZENvbW1lbnRGb3JtLmFzeW5jLnRzeCIsIndlYnBhY2s6Ly9mbG9yaXN0YnkvLi9zcmMvcGFnZXMvQXJ0aWNsZURldGFpbHNQYWdlL3VpL0FydGljbGVEZXRhaWxzUGFnZUhlYWRlci9BcnRpY2xlRGV0YWlsc1BhZ2VIZWFkZXIudHN4Iiwid2VicGFjazovL2Zsb3Jpc3RieS8uL3NyYy9wYWdlcy9BcnRpY2xlRGV0YWlsc1BhZ2UvdWkvQXJ0aWNsZURldGFpbHNQYWdlL0FydGljbGVEZXRhaWxzUGFnZS50c3giLCJ3ZWJwYWNrOi8vZmxvcmlzdGJ5Ly4vc3JjL2VudGl0aWVzL0NvbW1lbnQvdWkvQ29tbWVudENhcmQvQ29tbWVudENhcmQubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vZmxvcmlzdGJ5Ly4vc3JjL2VudGl0aWVzL0NvbW1lbnQvdWkvQ29tbWVudExpc3QvQ29tbWVudExpc3QubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vZmxvcmlzdGJ5Ly4vc3JjL3BhZ2VzL0FydGljbGVEZXRhaWxzUGFnZS91aS9BcnRpY2xlRGV0YWlsc1BhZ2VIZWFkZXIvQXJ0aWNsZURldGFpbHNQYWdlSGVhZGVyLm1vZHVsZS5zY3NzIiwid2VicGFjazovL2Zsb3Jpc3RieS8uL3NyYy9wYWdlcy9BcnRpY2xlRGV0YWlsc1BhZ2UvdWkvQXJ0aWNsZURldGFpbHNQYWdlL0FydGljbGVEZXRhaWxzUGFnZS5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9mbG9yaXN0YnkvLi9zcmMvZW50aXRpZXMvQ29tbWVudC91aS9Db21tZW50Q2FyZC9Db21tZW50Q2FyZC5tb2R1bGUuc2Nzcz9mZmI5Iiwid2VicGFjazovL2Zsb3Jpc3RieS8uL3NyYy9lbnRpdGllcy9Db21tZW50L3VpL0NvbW1lbnRMaXN0L0NvbW1lbnRMaXN0Lm1vZHVsZS5zY3NzP2RiN2QiLCJ3ZWJwYWNrOi8vZmxvcmlzdGJ5Ly4vc3JjL3BhZ2VzL0FydGljbGVEZXRhaWxzUGFnZS91aS9BcnRpY2xlRGV0YWlsc1BhZ2VIZWFkZXIvQXJ0aWNsZURldGFpbHNQYWdlSGVhZGVyLm1vZHVsZS5zY3NzPzgzN2IiLCJ3ZWJwYWNrOi8vZmxvcmlzdGJ5Ly4vc3JjL3BhZ2VzL0FydGljbGVEZXRhaWxzUGFnZS91aS9BcnRpY2xlRGV0YWlsc1BhZ2UvQXJ0aWNsZURldGFpbHNQYWdlLm1vZHVsZS5zY3NzP2ZkMzMiLCJ3ZWJwYWNrOi8vZmxvcmlzdGJ5Ly4vc3JjL2VudGl0aWVzL0NvbW1lbnQvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vZmxvcmlzdGJ5Ly4vc3JjL2ZlYXR1cmVzL0FkZENvbW1lbnRGb3JtL2luZGV4LnRzIiwid2VicGFjazovL2Zsb3Jpc3RieS8uL3NyYy9wYWdlcy9BcnRpY2xlRGV0YWlsc1BhZ2UvbW9kZWwvc2VsZWN0b3JzL2FydGljbGUudHMiLCJ3ZWJwYWNrOi8vZmxvcmlzdGJ5Ly4vc3JjL3BhZ2VzL0FydGljbGVEZXRhaWxzUGFnZS9tb2RlbC9zZWxlY3RvcnMvY29tbWVudHMudHMiLCJ3ZWJwYWNrOi8vZmxvcmlzdGJ5Ly4vc3JjL3BhZ2VzL0FydGljbGVEZXRhaWxzUGFnZS9tb2RlbC9zZWxlY3RvcnMvcmVjb21lbmRhdGlvbnMudHMiLCJ3ZWJwYWNrOi8vZmxvcmlzdGJ5Ly4vc3JjL3BhZ2VzL0FydGljbGVEZXRhaWxzUGFnZS9tb2RlbC9zZXJ2aWNlcy9hZGRDb21tZW50Rm9yQXJ0aWNsZS9hZGRDb21tZW50Rm9yQXJ0aWNsZS50cyIsIndlYnBhY2s6Ly9mbG9yaXN0YnkvLi9zcmMvcGFnZXMvQXJ0aWNsZURldGFpbHNQYWdlL21vZGVsL3NlcnZpY2VzL2ZldGNoQXJ0aWNsZVJlY29tbWVuZGF0aW9ucy9mZXRjaEFydGljbGVSZWNvbW1lbmRhdGlvbnMudHMiLCJ3ZWJwYWNrOi8vZmxvcmlzdGJ5Ly4vc3JjL3BhZ2VzL0FydGljbGVEZXRhaWxzUGFnZS9tb2RlbC9zZXJ2aWNlcy9mZXRjaENvbW1lbnRzQnlBcnRpY2xlSWQvZmV0Y2hDb21tZW50c0J5QXJ0aWNsZUlkLnRzIiwid2VicGFjazovL2Zsb3Jpc3RieS8uL3NyYy9wYWdlcy9BcnRpY2xlRGV0YWlsc1BhZ2UvbW9kZWwvc2xpY2VzL2FydGljbGVEZXRhaWxzQ29tbWVudHNTbGljZS50cyIsIndlYnBhY2s6Ly9mbG9yaXN0YnkvLi9zcmMvcGFnZXMvQXJ0aWNsZURldGFpbHNQYWdlL21vZGVsL3NsaWNlcy9hcnRpY2xlRGV0YWlsc1BhZ2VSZWNvbWVuZGF0aW9uU2xpY2UudHMiLCJ3ZWJwYWNrOi8vZmxvcmlzdGJ5Ly4vc3JjL3BhZ2VzL0FydGljbGVEZXRhaWxzUGFnZS9tb2RlbC9zbGljZXMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY2xhc3NOYW1lcyB9IGZyb20gJ3NoYXJlZC9saWIvY2xhc3NOYW1lcy9jbGFzc05hbWVzJ1xyXG5pbXBvcnQgY2xzIGZyb20gJy4vQ29tbWVudENhcmQubW9kdWxlLnNjc3MnXHJcbmltcG9ydCB7IHR5cGUgQ29tbWVudCB9IGZyb20gJy4uLy4uL21vZGVsL3R5cGVzL2NvbW1lbnQnXHJcbmltcG9ydCB7IExvYWRlciB9IGZyb20gJ3NoYXJlZC91aS9Mb2FkZXIvTG9hZGVyJ1xyXG5pbXBvcnQgeyBtZW1vIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IEF2YXRhciwgQXZhdGFyU2l6ZSB9IGZyb20gJ3NoYXJlZC91aS9BdmF0YXIvQXZhdGFyJ1xyXG5pbXBvcnQgeyBUZXh0IH0gZnJvbSAnc2hhcmVkL3VpL1RleHQvVGV4dCdcclxuaW1wb3J0IHsgU2tlbGV0b24gfSBmcm9tICdzaGFyZWQvdWkvU2tlbGV0b24vU2tlbGV0b24nXHJcbmltcG9ydCB7IEFwcExpbmsgfSBmcm9tICdzaGFyZWQvdWkvQXBwTGluay9BcHBMaW5rJ1xyXG5pbXBvcnQgeyBSb3V0ZVBhdGggfSBmcm9tICdzaGFyZWQvY29uZmlnL3JvdXRlQ29uZmlnL3JvdXRlQ29uZmlnJ1xyXG5cclxuaW50ZXJmYWNlIENvbW1lbnRDYXJkUHJvcHMge1xyXG4gIGNsYXNzTmFtZT86IHN0cmluZ1xyXG4gIGNvbW1lbnQ/OiBDb21tZW50XHJcbiAgaXNMb2FkaW5nPzogYm9vbGVhblxyXG59XHJcblxyXG5jb25zdCBDb21tZW50Q2FyZCA9IG1lbW8oKHByb3BzOiBDb21tZW50Q2FyZFByb3BzKSA9PiB7XHJcbiAgY29uc3QgeyBjbGFzc05hbWUgPSAnJywgY29tbWVudCwgaXNMb2FkaW5nID0gZmFsc2UgfSA9IHByb3BzXHJcblxyXG4gIGlmIChpc0xvYWRpbmcpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZXMoY2xzLkNvbW1lbnRDYXJkLCB7fSwgW2NsYXNzTmFtZV0pfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Nscy5oZWFkZXJ9PlxyXG4gICAgICAgICAgICAgICAgPFNrZWxldG9uIHdpZHRoPXs0MH0gaGVpZ2h0PXs0MH0gYm9yZGVyUj0nNTAlJyAvPlxyXG4gICAgICAgICAgICAgICAgPFNrZWxldG9uIGhlaWdodD17MTZ9IHdpZHRoPXsxMDB9IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8U2tlbGV0b24gY2xhc3NOYW1lPXtjbHMuYm9keX0gd2lkdGg9eycxMDAlJ30gaGVpZ2h0PXs1MH0gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxuICB9XHJcblxyXG4gIGlmICghY29tbWVudCkgeyByZXR1cm4gbnVsbCB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWVzKGNscy5Db21tZW50Q2FyZCwge30sIFtjbGFzc05hbWVdKX0+XHJcbiAgICAgICAgICA8QXBwTGluayB0bz17YCR7Um91dGVQYXRoLnByb2ZpbGV9JHtjb21tZW50LnVzZXIuaWR9YH0gY2xhc3NOYW1lPXtjbHMuaGVhZGVyfT5cclxuICAgICAgICAgICAgICA8QXZhdGFyIHNpemU9e0F2YXRhclNpemUuU01BTEx9IHNyYz17Y29tbWVudC51c2VyLmF2YXRhciA/PyAnaHR0cHM6Ly9jZG4taWNvbnMtcG5nLmZsYXRpY29uLmNvbS81MTIvNDU2LzQ1NjIxMi5wbmcnfSAvPlxyXG4gICAgICAgICAgICAgIDxUZXh0IHRpdGxlPXtjb21tZW50LnVzZXIudXNlcm5hbWV9IC8+XHJcbiAgICAgICAgICA8L0FwcExpbms+XHJcbiAgICAgICAgICA8VGV4dCBjbGFzc05hbWU9e2Nscy5ib2R5fSB0ZXh0PXtjb21tZW50LnRleHR9IC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gIClcclxufSlcclxuXHJcbkNvbW1lbnRDYXJkLmRpc3BsYXlOYW1lID0gJ0NvbW1lbnRDYXJkJ1xyXG5cclxuZXhwb3J0IHsgQ29tbWVudENhcmQgfVxyXG4iLCJpbXBvcnQgeyBjbGFzc05hbWVzIH0gZnJvbSAnc2hhcmVkL2xpYi9jbGFzc05hbWVzL2NsYXNzTmFtZXMnXHJcbmltcG9ydCBjbHMgZnJvbSAnLi9Db21tZW50TGlzdC5tb2R1bGUuc2NzcydcclxuaW1wb3J0IHsgdHlwZSBDb21tZW50IH0gZnJvbSAnLi4vLi4vbW9kZWwvdHlwZXMvY29tbWVudCdcclxuaW1wb3J0IHsgQ29tbWVudENhcmQgfSBmcm9tICcuLi9Db21tZW50Q2FyZC9Db21tZW50Q2FyZCdcclxuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb24gfSBmcm9tICdyZWFjdC1pMThuZXh0J1xyXG5pbXBvcnQgeyBUZXh0IH0gZnJvbSAnc2hhcmVkL3VpL1RleHQvVGV4dCdcclxuXHJcbmludGVyZmFjZSBDb21tZW50TGlzdFByb3BzIHtcclxuICBjbGFzc05hbWU/OiBzdHJpbmdcclxuICBjb21tZW50czogQ29tbWVudFtdXHJcbiAgaXNMb2FkaW5nPzogYm9vbGVhblxyXG59XHJcblxyXG5jb25zdCBDb21tZW50TGlzdCA9IChwcm9wczogQ29tbWVudExpc3RQcm9wcykgPT4ge1xyXG4gIGNvbnN0IHsgY2xhc3NOYW1lID0gJycsIGNvbW1lbnRzID0gW10sIGlzTG9hZGluZyA9IGZhbHNlIH0gPSBwcm9wc1xyXG4gIGNvbnN0IHsgdCB9ID0gdXNlVHJhbnNsYXRpb24oJ2NvbW1lbnRzJylcclxuXHJcbiAgaWYgKGlzTG9hZGluZykge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhjbHMuQ29tbWVudExpc3QsIHt9LCBbY2xhc3NOYW1lXSl9PlxyXG4gICAgICAgICAgICA8Q29tbWVudENhcmQgaXNMb2FkaW5nIC8+XHJcbiAgICAgICAgICAgIDxDb21tZW50Q2FyZCBpc0xvYWRpbmcgLz5cclxuICAgICAgICAgICAgPENvbW1lbnRDYXJkIGlzTG9hZGluZyAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZXMoY2xzLkNvbW1lbnRMaXN0LCB7fSwgW2NsYXNzTmFtZV0pfT5cclxuICAgICAgICAgIHtjb21tZW50cz8ubGVuZ3RoXHJcbiAgICAgICAgICAgID8gY29tbWVudHMubWFwKChjb21tZW50KSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8Q29tbWVudENhcmRcclxuICAgICAgICAgICAgICAgICAgICBpc0xvYWRpbmc9e2lzTG9hZGluZ31cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Nscy5jb21tZW50fVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbW1lbnQ9e2NvbW1lbnR9XHJcbiAgICAgICAgICAgICAgICAgICAga2V5PXtjb21tZW50LmlkfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgOiA8VGV4dCB0aXRsZT17dCgn0JrQvtC80LzQtdC90YLQsNGA0LjQuCDQvtGC0YHRg9GC0YHRgtCy0YPRjtGCJyl9IC8+XHJcbiAgICAgICAgICB9XHJcbiAgICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IHsgQ29tbWVudExpc3QgfVxyXG4iLCJpbXBvcnQgeyB0eXBlIEZDLCBsYXp5IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IHR5cGUgQWRkQ29tbWVudEZvcm1Qcm9wcyB9IGZyb20gJy4vQWRkQ29tbWVudEZvcm0nXHJcblxyXG5leHBvcnQgY29uc3QgQWRkQ29tbWVudEZvcm1Bc3luYyA9IGxhenk8RkM8QWRkQ29tbWVudEZvcm1Qcm9wcz4+KGFzeW5jICgpID0+IGF3YWl0IGltcG9ydCgnLi9BZGRDb21tZW50Rm9ybScpKVxyXG4iLCJpbXBvcnQgeyBjbGFzc05hbWVzIH0gZnJvbSAnc2hhcmVkL2xpYi9jbGFzc05hbWVzL2NsYXNzTmFtZXMnXHJcbmltcG9ydCBjbHMgZnJvbSAnLi9BcnRpY2xlRGV0YWlsc1BhZ2VIZWFkZXIubW9kdWxlLnNjc3MnXHJcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAncmVhY3QtaTE4bmV4dCdcclxuaW1wb3J0IHsgbWVtbywgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgdXNlTmF2aWdhdGUgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xyXG5pbXBvcnQgeyBSb3V0ZVBhdGggfSBmcm9tICdzaGFyZWQvY29uZmlnL3JvdXRlQ29uZmlnL3JvdXRlQ29uZmlnJ1xyXG5pbXBvcnQgeyBCdXR0b24sIEJ1dHRvblRoZW1lIH0gZnJvbSAnc2hhcmVkL3VpL0J1dHRvbi9CdXR0b24nXHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcbmltcG9ydCB7IGdldFVzZXJBdXRoRGF0YSB9IGZyb20gJ2VudGl0aWVzL1VzZXInXHJcbmltcG9ydCB7IGdldEFydGljbGVEZXRhaWxzRGF0YSB9IGZyb20gJ2VudGl0aWVzL0FydGljbGUnXHJcbmltcG9ydCB7IGdldENhbkVkaXRBcnRpY2xlIH0gZnJvbSAncGFnZXMvQXJ0aWNsZURldGFpbHNQYWdlL21vZGVsL3NlbGVjdG9ycy9hcnRpY2xlJ1xyXG5cclxuaW50ZXJmYWNlIEFydGljbGVEZXRhaWxzUGFnZUhlYWRlclByb3BzIHtcclxuICBjbGFzc05hbWU/OiBzdHJpbmdcclxufVxyXG5cclxuY29uc3QgQXJ0aWNsZURldGFpbHNQYWdlSGVhZGVyID0gbWVtbygocHJvcHM6IEFydGljbGVEZXRhaWxzUGFnZUhlYWRlclByb3BzKSA9PiB7XHJcbiAgY29uc3QgeyBjbGFzc05hbWUgPSAnJyB9ID0gcHJvcHNcclxuICBjb25zdCB7IHQgfSA9IHVzZVRyYW5zbGF0aW9uKClcclxuICBjb25zdCBuYXZpZ2F0ZSA9IHVzZU5hdmlnYXRlKClcclxuICBjb25zdCB1c2VyRGF0YSA9IHVzZVNlbGVjdG9yKGdldFVzZXJBdXRoRGF0YSlcclxuICBjb25zdCBhcnRpY2xlID0gdXNlU2VsZWN0b3IoZ2V0QXJ0aWNsZURldGFpbHNEYXRhKVxyXG4gIGNvbnN0IGNhbkVkaXQgPSB1c2VTZWxlY3RvcihnZXRDYW5FZGl0QXJ0aWNsZSlcclxuXHJcbiAgY29uc3Qgb25CYWNrVG9MaXN0ID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgbmF2aWdhdGUoUm91dGVQYXRoLmFydGljbGVzKVxyXG4gIH0sIFtuYXZpZ2F0ZV0pXHJcblxyXG4gIGNvbnN0IG9uRWRpdEFydGljbGUgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICBuYXZpZ2F0ZShgJHtSb3V0ZVBhdGguYXJ0aWNsZURldGFpbHN9JHthcnRpY2xlPy5pZH0vZWRpdGApXHJcbiAgfSwgW25hdmlnYXRlLCBhcnRpY2xlPy5pZF0pXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWVzKGNscy5BcnRpY2xlRGV0YWlsc1BhZ2VIZWFkZXIsIHt9LCBbY2xhc3NOYW1lXSl9PlxyXG4gICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgIHRoZW1lPXtCdXR0b25UaGVtZS5PVVRMSU5FfVxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e29uQmFja1RvTGlzdH1cclxuICAgICAgICAgICAgPnt0KCfQndCw0LfQsNC0INC6INGB0L/QuNGB0LrRgycpfTwvQnV0dG9uPlxyXG4gICAgICAgICAge2NhbkVkaXQgJiYgKFxyXG4gICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xzLmVkaXRCdG59XHJcbiAgICAgICAgICAgICAgdGhlbWU9e0J1dHRvblRoZW1lLk9VVExJTkV9XHJcbiAgICAgICAgICAgICAgb25DbGljaz17b25FZGl0QXJ0aWNsZX1cclxuICAgICAgICAgICAgICA+e3QoJ9Cg0LXQtNCw0LrRgtC40YDQvtCy0LDRgtGMJyl9PC9CdXR0b24+XHJcbiAgICAgICAgICApfVxyXG4gICAgICA8L2Rpdj5cclxuICApXHJcbn0pXHJcblxyXG5BcnRpY2xlRGV0YWlsc1BhZ2VIZWFkZXIuZGlzcGxheU5hbWUgPSAnQXJ0aWNsZURldGFpbHNQYWdlSGVhZGVyJ1xyXG5cclxuZXhwb3J0IHsgQXJ0aWNsZURldGFpbHNQYWdlSGVhZGVyIH1cclxuIiwiaW1wb3J0IHsgY2xhc3NOYW1lcyB9IGZyb20gJ3NoYXJlZC9saWIvY2xhc3NOYW1lcy9jbGFzc05hbWVzJ1xyXG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJ3JlYWN0LWkxOG5leHQnXHJcbmltcG9ydCB7IHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IEFydGljbGVEZXRhaWxzLCBBcnRpY2xlTGlzdCB9IGZyb20gJ2VudGl0aWVzL0FydGljbGUnXHJcbmltcG9ydCB7IHVzZU5hdmlnYXRlLCB1c2VQYXJhbXMgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xyXG5pbXBvcnQgeyBDb21tZW50TGlzdCB9IGZyb20gJ2VudGl0aWVzL0NvbW1lbnQnXHJcbmltcG9ydCB7IFRleHQsIFRleHRTaXplIH0gZnJvbSAnc2hhcmVkL3VpL1RleHQvVGV4dCdcclxuaW1wb3J0IGNscyBmcm9tICcuL0FydGljbGVEZXRhaWxzUGFnZS5tb2R1bGUuc2NzcydcclxuaW1wb3J0IHsgRHluYW1pY01vZHVsZUxvYWRlciwgdHlwZSBSZWR1Y2Vyc0xpc3QgfSBmcm9tICdzaGFyZWQvbGliL2NvbXBvbmVudHMvRHluYW1pY01vZHVsZUxvYWRlci9EeW5hbWljTW9kdWxlTG9hZGVyJ1xyXG5pbXBvcnQgeyBhcnRpY2xlRGV0YWlsc0NvbW1lbnRzUmVkdWNlciwgZ2V0QXJ0aWNsZUNvbW1lbnRzIH0gZnJvbSAnLi4vLi4vbW9kZWwvc2xpY2VzL2FydGljbGVEZXRhaWxzQ29tbWVudHNTbGljZSdcclxuaW1wb3J0IHsgYXJ0aWNsZURldGFpbHNQYWdlUmVjb21lbmRhdGlvblJlZHVjZXIsIGdldEFydGljbGVSZWNvbWVuZGF0aW9ucyB9IGZyb20gJy4uLy4uL21vZGVsL3NsaWNlcy9hcnRpY2xlRGV0YWlsc1BhZ2VSZWNvbWVuZGF0aW9uU2xpY2UnXHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcbmltcG9ydCB7IGdldEFydGljbGVDb21tZW50c0lzTG9hZGluZyB9IGZyb20gJy4uLy4uL21vZGVsL3NlbGVjdG9ycy9jb21tZW50cydcclxuaW1wb3J0IHsgdXNlSW5pdGlhbEVmZmVjdCB9IGZyb20gJ3NoYXJlZC9saWIvaG9va3MvdXNlSW5pdGlhbEVmZmVjdC91c2VJbml0aWFsRWZmZWN0J1xyXG5pbXBvcnQgeyB1c2VBcHBEaXNwYXRjaCB9IGZyb20gJ3NoYXJlZC9saWIvaG9va3MvdXNlQXBwRGlzcGF0Y2gvdXNlQXBwRGlzcGF0Y2gnXHJcbmltcG9ydCB7IGZldGNoQ29tbWVudHNCeUFydGljbGVJZCB9IGZyb20gJy4uLy4uL21vZGVsL3NlcnZpY2VzL2ZldGNoQ29tbWVudHNCeUFydGljbGVJZC9mZXRjaENvbW1lbnRzQnlBcnRpY2xlSWQnXHJcbmltcG9ydCB7IEFkZENvbW1lbnRGb3JtIH0gZnJvbSAnZmVhdHVyZXMvQWRkQ29tbWVudEZvcm0nXHJcbmltcG9ydCB7IGFkZENvbW1lbnRGb3JBcnRpY2xlIH0gZnJvbSAnLi4vLi4vbW9kZWwvc2VydmljZXMvYWRkQ29tbWVudEZvckFydGljbGUvYWRkQ29tbWVudEZvckFydGljbGUnXHJcbmltcG9ydCB7IEJ1dHRvbiwgQnV0dG9uVGhlbWUgfSBmcm9tICdzaGFyZWQvdWkvQnV0dG9uL0J1dHRvbidcclxuaW1wb3J0IHsgUm91dGVQYXRoIH0gZnJvbSAnc2hhcmVkL2NvbmZpZy9yb3V0ZUNvbmZpZy9yb3V0ZUNvbmZpZydcclxuaW1wb3J0IHsgUGFnZSB9IGZyb20gJ3dpZGdldHMvUGFnZS9QYWdlJ1xyXG5pbXBvcnQgeyBnZXRBcnRpY2xlUmVjb21lbmRhdGlvbnNJc0xvYWRpbmcgfSBmcm9tICcuLi8uLi9tb2RlbC9zZWxlY3RvcnMvcmVjb21lbmRhdGlvbnMnXHJcbmltcG9ydCB7IGZldGNoQXJ0aWNsZVJlY29tbWVuZGF0aW9ucyB9IGZyb20gJy4uLy4uL21vZGVsL3NlcnZpY2VzL2ZldGNoQXJ0aWNsZVJlY29tbWVuZGF0aW9ucy9mZXRjaEFydGljbGVSZWNvbW1lbmRhdGlvbnMnXHJcbmltcG9ydCB7IGFydGljbGVEZXRhaWxzUGFnZVJlZHVjZXIgfSBmcm9tICcuLi8uLi9tb2RlbC9zbGljZXMnXHJcbmltcG9ydCB7IEFydGljbGVEZXRhaWxzUGFnZUhlYWRlciB9IGZyb20gJy4uL0FydGljbGVEZXRhaWxzUGFnZUhlYWRlci9BcnRpY2xlRGV0YWlsc1BhZ2VIZWFkZXInXHJcbmltcG9ydCB7IGZldGNoTmV4dEFydGljbGVzUGFnZSB9IGZyb20gJ3BhZ2VzL0FydGljbGVQYWdlL21vZGVsL3NlcnZpY2VzL2ZldGNoTmV4dEFydGljbGVzUGFnZS9mZXRjaE5leHRBcnRpY2xlc1BhZ2UnXHJcblxyXG5pbnRlcmZhY2UgQXJ0aWNsZURldGFpbHNQYWdlUHJvcHMge1xyXG4gIGNsYXNzTmFtZT86IHN0cmluZ1xyXG59XHJcblxyXG5jb25zdCByZWR1Y2VyczogUmVkdWNlcnNMaXN0ID0ge1xyXG4gIGFydGljbGVEZXRhaWxzUGFnZTogYXJ0aWNsZURldGFpbHNQYWdlUmVkdWNlclxyXG59XHJcblxyXG5jb25zdCBBcnRpY2xlRGV0YWlsc1BhZ2UgPSAoeyBjbGFzc05hbWUgPSAnJyB9OiBBcnRpY2xlRGV0YWlsc1BhZ2VQcm9wcykgPT4ge1xyXG4gIGNvbnN0IHsgdCB9ID0gdXNlVHJhbnNsYXRpb24oJ2FydGljbGUtZGV0YWlscycpXHJcbiAgY29uc3QgeyBpZCB9ID0gdXNlUGFyYW1zPHsgaWQ6IHN0cmluZyB9PigpXHJcbiAgY29uc3QgY29tbWVudHMgPSB1c2VTZWxlY3RvcihnZXRBcnRpY2xlQ29tbWVudHMuc2VsZWN0QWxsKVxyXG4gIGNvbnN0IHJlY29tZW5kYXRpb25zID0gdXNlU2VsZWN0b3IoZ2V0QXJ0aWNsZVJlY29tZW5kYXRpb25zLnNlbGVjdEFsbClcclxuICBjb25zdCBjb21tZW50c0lzTG9hZGluZyA9IHVzZVNlbGVjdG9yKGdldEFydGljbGVDb21tZW50c0lzTG9hZGluZylcclxuICBjb25zdCByZWNvbWVuZGF0aW9uc0lzTG9hZGluZyA9IHVzZVNlbGVjdG9yKGdldEFydGljbGVSZWNvbWVuZGF0aW9uc0lzTG9hZGluZylcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZUFwcERpc3BhdGNoKClcclxuICBjb25zdCBuYXZpZ2F0ZSA9IHVzZU5hdmlnYXRlKClcclxuXHJcbiAgY29uc3Qgb25TZW5kQ29tbWVudCA9IHVzZUNhbGxiYWNrKCh0ZXh0OiBzdHJpbmcpID0+IHtcclxuICAgIHZvaWQgZGlzcGF0Y2goYWRkQ29tbWVudEZvckFydGljbGUodGV4dCkpXHJcbiAgfSwgW2Rpc3BhdGNoXSlcclxuXHJcbiAgY29uc3Qgb25CYWNrVG9MaXN0ID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgbmF2aWdhdGUoUm91dGVQYXRoLmFydGljbGVzKVxyXG4gIH0sIFtuYXZpZ2F0ZV0pXHJcblxyXG4gIHVzZUluaXRpYWxFZmZlY3QoKCkgPT4ge1xyXG4gICAgdm9pZCBkaXNwYXRjaChmZXRjaENvbW1lbnRzQnlBcnRpY2xlSWQoaWQpKVxyXG4gICAgdm9pZCBkaXNwYXRjaChmZXRjaEFydGljbGVSZWNvbW1lbmRhdGlvbnMoKSlcclxuICB9KVxyXG5cclxuICBjb25zdCBvbkxvYWROZXh0UGFydCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIHZvaWQgZGlzcGF0Y2goZmV0Y2hOZXh0QXJ0aWNsZXNQYWdlKCkpXHJcbiAgfSwgW2Rpc3BhdGNoXSlcclxuXHJcbiAgaWYgKCFpZCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8UGFnZSBjbGFzc05hbWU9e2NsYXNzTmFtZXMoJycsIHt9LCBbY2xhc3NOYW1lXSl9PlxyXG4gICAgICAgICAgICB7dCgn0J/QvtGB0YIg0L3QtSDQvdCw0LnQtNC10L0nKX1cclxuICAgICAgICA8L1BhZ2U+XHJcbiAgICApXHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgICA8RHluYW1pY01vZHVsZUxvYWRlciByZWR1Y2Vycz17cmVkdWNlcnN9IHJlbW92ZUFmdGVyVW5tb3VudD5cclxuICAgICAgICAgIDxQYWdlIGNsYXNzTmFtZT17Y2xhc3NOYW1lcygnJywge30sIFtjbGFzc05hbWVdKX0+XHJcbiAgICAgICAgICAgICAgPEFydGljbGVEZXRhaWxzUGFnZUhlYWRlciAvPlxyXG4gICAgICAgICAgICAgIDxBcnRpY2xlRGV0YWlscyBpZD17aWR9IC8+XHJcbiAgICAgICAgICAgICAgPFRleHQgc2l6ZT17VGV4dFNpemUuTH0gY2xhc3NOYW1lPXtjbHMuY29tbWVudHNUaXRsZX0gdGl0bGU9e3QoJ9Cg0LXQutC+0LzQtdC90LTRg9C10LwnKX0gLz5cclxuICAgICAgICAgICAgICA8QXJ0aWNsZUxpc3Qgb25Mb2FkTmV4dFBhcnQ9e29uTG9hZE5leHRQYXJ0fSBhcnRpY2xlcz17cmVjb21lbmRhdGlvbnN9IGlzTG9hZGluZz17cmVjb21lbmRhdGlvbnNJc0xvYWRpbmd9IGNsYXNzTmFtZT17Y2xzLnJlY29tbWVuZGF0aW9uc30gdGFyZ2V0PXsnX2JsYW5rJ30gLz5cclxuICAgICAgICAgICAgICA8VGV4dCBzaXplPXtUZXh0U2l6ZS5MfSBjbGFzc05hbWU9e2Nscy5jb21tZW50c1RpdGxlfSB0aXRsZT17dCgn0JrQvtC80LzQtdC90YLQsNGA0LjQuCcpfSAvPlxyXG4gICAgICAgICAgICAgIDxBZGRDb21tZW50Rm9ybSBvblNlbmRDb21tZW50PXtvblNlbmRDb21tZW50fSAvPlxyXG4gICAgICAgICAgICAgIDxDb21tZW50TGlzdCBpc0xvYWRpbmc9e2NvbW1lbnRzSXNMb2FkaW5nfSBjb21tZW50cz17Y29tbWVudHN9IC8+XHJcbiAgICAgICAgICA8L1BhZ2U+XHJcbiAgICAgIDwvRHluYW1pY01vZHVsZUxvYWRlcj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFydGljbGVEZXRhaWxzUGFnZVxyXG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLnNyYy1lbnRpdGllcy1Db21tZW50LXVpLUNvbW1lbnRDYXJkLUNvbW1lbnRDYXJkLW1vZHVsZV9fQ29tbWVudENhcmQtLXhJSEJ5IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcm93LWdhcDogMTBweDtcbiAgcGFkZGluZzogMTBweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLnNyYy1lbnRpdGllcy1Db21tZW50LXVpLUNvbW1lbnRDYXJkLUNvbW1lbnRDYXJkLW1vZHVsZV9faGVhZGVyLS1kc0hfMyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGNvbHVtbi1nYXA6IDEwcHg7XG4gIHdpZHRoOiBhdXRvO1xufVxuXG4uc3JjLWVudGl0aWVzLUNvbW1lbnQtdWktQ29tbWVudENhcmQtQ29tbWVudENhcmQtbW9kdWxlX19ib2R5LS16RWNXTyB7XG4gIHdpZHRoOiAxMDAlO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2VudGl0aWVzL0NvbW1lbnQvdWkvQ29tbWVudENhcmQvQ29tbWVudENhcmQubW9kdWxlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FBQ0o7O0FBRUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUFDSjs7QUFFQTtFQUNJLFdBQUE7QUFDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuQ29tbWVudENhcmQge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICByb3ctZ2FwOiAxMHB4O1xcclxcbiAgICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgY29sdW1uLWdhcDogMTBweDtcXHJcXG4gICAgd2lkdGg6IGF1dG87XFxyXFxufVxcclxcblxcclxcbi5ib2R5IHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcIkNvbW1lbnRDYXJkXCI6IGBzcmMtZW50aXRpZXMtQ29tbWVudC11aS1Db21tZW50Q2FyZC1Db21tZW50Q2FyZC1tb2R1bGVfX0NvbW1lbnRDYXJkLS14SUhCeWAsXG5cdFwiaGVhZGVyXCI6IGBzcmMtZW50aXRpZXMtQ29tbWVudC11aS1Db21tZW50Q2FyZC1Db21tZW50Q2FyZC1tb2R1bGVfX2hlYWRlci0tZHNIXzNgLFxuXHRcImJvZHlcIjogYHNyYy1lbnRpdGllcy1Db21tZW50LXVpLUNvbW1lbnRDYXJkLUNvbW1lbnRDYXJkLW1vZHVsZV9fYm9keS0tekVjV09gXG59O1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLnNyYy1lbnRpdGllcy1Db21tZW50LXVpLUNvbW1lbnRMaXN0LUNvbW1lbnRMaXN0LW1vZHVsZV9fY29tbWVudC0tem81TkYge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2VudGl0aWVzL0NvbW1lbnQvdWkvQ29tbWVudExpc3QvQ29tbWVudExpc3QubW9kdWxlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDSSxnQkFBQTtBQUNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5jb21tZW50IHtcXHJcXG4gICAgbWFyZ2luLXRvcDogMjBweDtcXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwiY29tbWVudFwiOiBgc3JjLWVudGl0aWVzLUNvbW1lbnQtdWktQ29tbWVudExpc3QtQ29tbWVudExpc3QtbW9kdWxlX19jb21tZW50LS16bzVORmBcbn07XG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAuc3JjLXBhZ2VzLUFydGljbGVEZXRhaWxzUGFnZS11aS1BcnRpY2xlRGV0YWlsc1BhZ2VIZWFkZXItQXJ0aWNsZURldGFpbHNQYWdlSGVhZGVyLW1vZHVsZV9fQXJ0aWNsZURldGFpbHNQYWdlSGVhZGVyLS1QRjNEWSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5zcmMtcGFnZXMtQXJ0aWNsZURldGFpbHNQYWdlLXVpLUFydGljbGVEZXRhaWxzUGFnZUhlYWRlci1BcnRpY2xlRGV0YWlsc1BhZ2VIZWFkZXItbW9kdWxlX19lZGl0QnRuLS1YZG5QMyB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3BhZ2VzL0FydGljbGVEZXRhaWxzUGFnZS91aS9BcnRpY2xlRGV0YWlsc1BhZ2VIZWFkZXIvQXJ0aWNsZURldGFpbHNQYWdlSGVhZGVyLm1vZHVsZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBRUE7RUFDSSxpQkFBQTtBQUNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5BcnRpY2xlRGV0YWlsc1BhZ2VIZWFkZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uZWRpdEJ0biB7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJBcnRpY2xlRGV0YWlsc1BhZ2VIZWFkZXJcIjogYHNyYy1wYWdlcy1BcnRpY2xlRGV0YWlsc1BhZ2UtdWktQXJ0aWNsZURldGFpbHNQYWdlSGVhZGVyLUFydGljbGVEZXRhaWxzUGFnZUhlYWRlci1tb2R1bGVfX0FydGljbGVEZXRhaWxzUGFnZUhlYWRlci0tUEYzRFlgLFxuXHRcImVkaXRCdG5cIjogYHNyYy1wYWdlcy1BcnRpY2xlRGV0YWlsc1BhZ2UtdWktQXJ0aWNsZURldGFpbHNQYWdlSGVhZGVyLUFydGljbGVEZXRhaWxzUGFnZUhlYWRlci1tb2R1bGVfX2VkaXRCdG4tLVhkblAzYFxufTtcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5zcmMtcGFnZXMtQXJ0aWNsZURldGFpbHNQYWdlLXVpLUFydGljbGVEZXRhaWxzUGFnZS1BcnRpY2xlRGV0YWlsc1BhZ2UtbW9kdWxlX19BcnRpY2xlRGV0YWlsc1BhZ2UtLWFkdThmIHtcbiAgbWluLWhlaWdodDogMTAwJTtcbn1cblxuLnNyYy1wYWdlcy1BcnRpY2xlRGV0YWlsc1BhZ2UtdWktQXJ0aWNsZURldGFpbHNQYWdlLUFydGljbGVEZXRhaWxzUGFnZS1tb2R1bGVfX2NvbW1lbnRzVGl0bGUtLW9SeHl3IHtcbiAgbWFyZ2luLXRvcDogNTBweDtcbn1cblxuLnNyYy1wYWdlcy1BcnRpY2xlRGV0YWlsc1BhZ2UtdWktQXJ0aWNsZURldGFpbHNQYWdlLUFydGljbGVEZXRhaWxzUGFnZS1tb2R1bGVfX3JlY29tbWVuZGF0aW9ucy0tTndRbFMge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xuICBvdmVyZmxvdy14OiBhdXRvO1xuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9wYWdlcy9BcnRpY2xlRGV0YWlsc1BhZ2UvdWkvQXJ0aWNsZURldGFpbHNQYWdlL0FydGljbGVEZXRhaWxzUGFnZS5tb2R1bGUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNJLGdCQUFBO0FBQ0o7O0FBRUE7RUFDSSxnQkFBQTtBQUNKOztBQUVBO0VBQ0ksZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7QUFDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuQXJ0aWNsZURldGFpbHNQYWdlIHtcXHJcXG4gICAgbWluLWhlaWdodDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnRzVGl0bGUge1xcclxcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucmVjb21tZW5kYXRpb25zIHtcXHJcXG4gICAgbWFyZ2luLXRvcDogMjBweDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC13cmFwOiBub3dyYXA7XFxyXFxuICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcXHJcXG4gICAgb3ZlcmZsb3cteDogYXV0bztcXHJcXG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcIkFydGljbGVEZXRhaWxzUGFnZVwiOiBgc3JjLXBhZ2VzLUFydGljbGVEZXRhaWxzUGFnZS11aS1BcnRpY2xlRGV0YWlsc1BhZ2UtQXJ0aWNsZURldGFpbHNQYWdlLW1vZHVsZV9fQXJ0aWNsZURldGFpbHNQYWdlLS1hZHU4ZmAsXG5cdFwiY29tbWVudHNUaXRsZVwiOiBgc3JjLXBhZ2VzLUFydGljbGVEZXRhaWxzUGFnZS11aS1BcnRpY2xlRGV0YWlsc1BhZ2UtQXJ0aWNsZURldGFpbHNQYWdlLW1vZHVsZV9fY29tbWVudHNUaXRsZS0tb1J4eXdgLFxuXHRcInJlY29tbWVuZGF0aW9uc1wiOiBgc3JjLXBhZ2VzLUFydGljbGVEZXRhaWxzUGFnZS11aS1BcnRpY2xlRGV0YWlsc1BhZ2UtQXJ0aWNsZURldGFpbHNQYWdlLW1vZHVsZV9fcmVjb21tZW5kYXRpb25zLS1Od1FsU2Bcbn07XG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbNF0udXNlWzFdIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL0NvbW1lbnRDYXJkLm1vZHVsZS5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cbmlmIChtb2R1bGUuaG90KSB7XG4gIGlmICghY29udGVudC5sb2NhbHMgfHwgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKSB7XG4gICAgdmFyIGlzRXF1YWxMb2NhbHMgPSBmdW5jdGlvbiBpc0VxdWFsTG9jYWxzKGEsIGIsIGlzTmFtZWRFeHBvcnQpIHtcbiAgaWYgKCFhICYmIGIgfHwgYSAmJiAhYikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgcDtcbiAgZm9yIChwIGluIGEpIHtcbiAgICBpZiAoaXNOYW1lZEV4cG9ydCAmJiBwID09PSBcImRlZmF1bHRcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgaWYgKGFbcF0gIT09IGJbcF0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgZm9yIChwIGluIGIpIHtcbiAgICBpZiAoaXNOYW1lZEV4cG9ydCAmJiBwID09PSBcImRlZmF1bHRcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgaWYgKCFhW3BdKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIHJldHVybiB0cnVlO1xufTtcbiAgICB2YXIgaXNOYW1lZEV4cG9ydCA9ICFjb250ZW50LmxvY2FscztcbiAgICB2YXIgb2xkTG9jYWxzID0gaXNOYW1lZEV4cG9ydCA/IG5hbWVkRXhwb3J0IDogY29udGVudC5sb2NhbHM7XG5cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcbiAgICAgIFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1s0XS51c2VbMV0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vQ29tbWVudENhcmQubW9kdWxlLnNjc3NcIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCFpc0VxdWFsTG9jYWxzKG9sZExvY2FscywgaXNOYW1lZEV4cG9ydCA/IG5hbWVkRXhwb3J0IDogY29udGVudC5sb2NhbHMsIGlzTmFtZWRFeHBvcnQpKSB7XG4gICAgICAgICAgICAgICAgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKCk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBvbGRMb2NhbHMgPSBpc05hbWVkRXhwb3J0ID8gbmFtZWRFeHBvcnQgOiBjb250ZW50LmxvY2FscztcblxuICAgICAgICAgICAgICB1cGRhdGUoY29udGVudCk7XG4gICAgICB9XG4gICAgKVxuICB9XG5cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkge1xuICAgIHVwZGF0ZSgpO1xuICB9KTtcbn1cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1s0XS51c2VbMV0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vQ29tbWVudENhcmQubW9kdWxlLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzRdLnVzZVsxXSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9Db21tZW50TGlzdC5tb2R1bGUuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5pZiAobW9kdWxlLmhvdCkge1xuICBpZiAoIWNvbnRlbnQubG9jYWxzIHx8IG1vZHVsZS5ob3QuaW52YWxpZGF0ZSkge1xuICAgIHZhciBpc0VxdWFsTG9jYWxzID0gZnVuY3Rpb24gaXNFcXVhbExvY2FscyhhLCBiLCBpc05hbWVkRXhwb3J0KSB7XG4gIGlmICghYSAmJiBiIHx8IGEgJiYgIWIpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIHA7XG4gIGZvciAocCBpbiBhKSB7XG4gICAgaWYgKGlzTmFtZWRFeHBvcnQgJiYgcCA9PT0gXCJkZWZhdWx0XCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIGlmIChhW3BdICE9PSBiW3BdKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIGZvciAocCBpbiBiKSB7XG4gICAgaWYgKGlzTmFtZWRFeHBvcnQgJiYgcCA9PT0gXCJkZWZhdWx0XCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIGlmICghYVtwXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn07XG4gICAgdmFyIGlzTmFtZWRFeHBvcnQgPSAhY29udGVudC5sb2NhbHM7XG4gICAgdmFyIG9sZExvY2FscyA9IGlzTmFtZWRFeHBvcnQgPyBuYW1lZEV4cG9ydCA6IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXG4gICAgICBcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbNF0udXNlWzFdIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL0NvbW1lbnRMaXN0Lm1vZHVsZS5zY3NzXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghaXNFcXVhbExvY2FscyhvbGRMb2NhbHMsIGlzTmFtZWRFeHBvcnQgPyBuYW1lZEV4cG9ydCA6IGNvbnRlbnQubG9jYWxzLCBpc05hbWVkRXhwb3J0KSkge1xuICAgICAgICAgICAgICAgIG1vZHVsZS5ob3QuaW52YWxpZGF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgb2xkTG9jYWxzID0gaXNOYW1lZEV4cG9ydCA/IG5hbWVkRXhwb3J0IDogY29udGVudC5sb2NhbHM7XG5cbiAgICAgICAgICAgICAgdXBkYXRlKGNvbnRlbnQpO1xuICAgICAgfVxuICAgIClcbiAgfVxuXG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHtcbiAgICB1cGRhdGUoKTtcbiAgfSk7XG59XG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbNF0udXNlWzFdIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL0NvbW1lbnRMaXN0Lm1vZHVsZS5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1s0XS51c2VbMV0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vQXJ0aWNsZURldGFpbHNQYWdlSGVhZGVyLm1vZHVsZS5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cbmlmIChtb2R1bGUuaG90KSB7XG4gIGlmICghY29udGVudC5sb2NhbHMgfHwgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKSB7XG4gICAgdmFyIGlzRXF1YWxMb2NhbHMgPSBmdW5jdGlvbiBpc0VxdWFsTG9jYWxzKGEsIGIsIGlzTmFtZWRFeHBvcnQpIHtcbiAgaWYgKCFhICYmIGIgfHwgYSAmJiAhYikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgcDtcbiAgZm9yIChwIGluIGEpIHtcbiAgICBpZiAoaXNOYW1lZEV4cG9ydCAmJiBwID09PSBcImRlZmF1bHRcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgaWYgKGFbcF0gIT09IGJbcF0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgZm9yIChwIGluIGIpIHtcbiAgICBpZiAoaXNOYW1lZEV4cG9ydCAmJiBwID09PSBcImRlZmF1bHRcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgaWYgKCFhW3BdKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIHJldHVybiB0cnVlO1xufTtcbiAgICB2YXIgaXNOYW1lZEV4cG9ydCA9ICFjb250ZW50LmxvY2FscztcbiAgICB2YXIgb2xkTG9jYWxzID0gaXNOYW1lZEV4cG9ydCA/IG5hbWVkRXhwb3J0IDogY29udGVudC5sb2NhbHM7XG5cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcbiAgICAgIFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1s0XS51c2VbMV0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vQXJ0aWNsZURldGFpbHNQYWdlSGVhZGVyLm1vZHVsZS5zY3NzXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghaXNFcXVhbExvY2FscyhvbGRMb2NhbHMsIGlzTmFtZWRFeHBvcnQgPyBuYW1lZEV4cG9ydCA6IGNvbnRlbnQubG9jYWxzLCBpc05hbWVkRXhwb3J0KSkge1xuICAgICAgICAgICAgICAgIG1vZHVsZS5ob3QuaW52YWxpZGF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgb2xkTG9jYWxzID0gaXNOYW1lZEV4cG9ydCA/IG5hbWVkRXhwb3J0IDogY29udGVudC5sb2NhbHM7XG5cbiAgICAgICAgICAgICAgdXBkYXRlKGNvbnRlbnQpO1xuICAgICAgfVxuICAgIClcbiAgfVxuXG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHtcbiAgICB1cGRhdGUoKTtcbiAgfSk7XG59XG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbNF0udXNlWzFdIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL0FydGljbGVEZXRhaWxzUGFnZUhlYWRlci5tb2R1bGUuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbNF0udXNlWzFdIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL0FydGljbGVEZXRhaWxzUGFnZS5tb2R1bGUuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5pZiAobW9kdWxlLmhvdCkge1xuICBpZiAoIWNvbnRlbnQubG9jYWxzIHx8IG1vZHVsZS5ob3QuaW52YWxpZGF0ZSkge1xuICAgIHZhciBpc0VxdWFsTG9jYWxzID0gZnVuY3Rpb24gaXNFcXVhbExvY2FscyhhLCBiLCBpc05hbWVkRXhwb3J0KSB7XG4gIGlmICghYSAmJiBiIHx8IGEgJiYgIWIpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIHA7XG4gIGZvciAocCBpbiBhKSB7XG4gICAgaWYgKGlzTmFtZWRFeHBvcnQgJiYgcCA9PT0gXCJkZWZhdWx0XCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIGlmIChhW3BdICE9PSBiW3BdKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIGZvciAocCBpbiBiKSB7XG4gICAgaWYgKGlzTmFtZWRFeHBvcnQgJiYgcCA9PT0gXCJkZWZhdWx0XCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIGlmICghYVtwXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn07XG4gICAgdmFyIGlzTmFtZWRFeHBvcnQgPSAhY29udGVudC5sb2NhbHM7XG4gICAgdmFyIG9sZExvY2FscyA9IGlzTmFtZWRFeHBvcnQgPyBuYW1lZEV4cG9ydCA6IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXG4gICAgICBcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbNF0udXNlWzFdIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL0FydGljbGVEZXRhaWxzUGFnZS5tb2R1bGUuc2Nzc1wiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIWlzRXF1YWxMb2NhbHMob2xkTG9jYWxzLCBpc05hbWVkRXhwb3J0ID8gbmFtZWRFeHBvcnQgOiBjb250ZW50LmxvY2FscywgaXNOYW1lZEV4cG9ydCkpIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUuaG90LmludmFsaWRhdGUoKTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIG9sZExvY2FscyA9IGlzTmFtZWRFeHBvcnQgPyBuYW1lZEV4cG9ydCA6IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgICAgICAgICAgIHVwZGF0ZShjb250ZW50KTtcbiAgICAgIH1cbiAgICApXG4gIH1cblxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7XG4gICAgdXBkYXRlKCk7XG4gIH0pO1xufVxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzRdLnVzZVsxXSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9BcnRpY2xlRGV0YWlsc1BhZ2UubW9kdWxlLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJleHBvcnQgdHlwZSB7IENvbW1lbnQgfSBmcm9tICcuL21vZGVsL3R5cGVzL2NvbW1lbnQnXHJcbmV4cG9ydCB7IENvbW1lbnRMaXN0IH0gZnJvbSAnLi91aS9Db21tZW50TGlzdC9Db21tZW50TGlzdCdcclxuIiwiZXhwb3J0IHR5cGUgeyBBZGRDb21tZW50Rm9ybVNjaGVtYSB9IGZyb20gJy4vbW9kZWwvdHlwZXMvYWRkQ29tbWVudEZvcm0nXHJcbmV4cG9ydCB7IEFkZENvbW1lbnRGb3JtQXN5bmMgYXMgQWRkQ29tbWVudEZvcm0gfSBmcm9tICcuL3VpL0FkZENvbW1lbnRGb3JtL0FkZENvbW1lbnRGb3JtLmFzeW5jJ1xyXG4iLCJpbXBvcnQgeyBjcmVhdGVTZWxlY3RvciB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQnXHJcbmltcG9ydCB7IGdldEFydGljbGVEZXRhaWxzRGF0YSB9IGZyb20gJ2VudGl0aWVzL0FydGljbGUnXHJcbmltcG9ydCB7IGdldFVzZXJBdXRoRGF0YSB9IGZyb20gJ2VudGl0aWVzL1VzZXInXHJcblxyXG5leHBvcnQgY29uc3QgZ2V0Q2FuRWRpdEFydGljbGUgPSBjcmVhdGVTZWxlY3RvcihcclxuICBnZXRBcnRpY2xlRGV0YWlsc0RhdGEsXHJcbiAgZ2V0VXNlckF1dGhEYXRhLFxyXG4gIChhcnRpY2xlLCB1c2VyKSA9PiB7XHJcbiAgICBpZiAoIWFydGljbGUgfHwgIXVzZXIpIHtcclxuICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXJ0aWNsZS51c2VyLmlkID09PSB1c2VyLmlkXHJcbiAgfVxyXG4pXHJcbiIsImltcG9ydCB7IHR5cGUgU3RhdGVTY2hlbWEgfSBmcm9tICdhcHAvcHJvdmlkZXJzL1N0b3JlUHJvdmlkZXInXHJcblxyXG5leHBvcnQgY29uc3QgZ2V0QXJ0aWNsZUNvbW1lbnRzSXNMb2FkaW5nID0gKHN0YXRlOiBTdGF0ZVNjaGVtYSkgPT4gc3RhdGUuYXJ0aWNsZURldGFpbHNQYWdlPy5jb21tZW50cz8uaXNMb2FkaW5nXHJcbmV4cG9ydCBjb25zdCBnZXRBcnRpY2xlQ29tbWVudHNFcnJvciA9IChzdGF0ZTogU3RhdGVTY2hlbWEpID0+IHN0YXRlLmFydGljbGVEZXRhaWxzUGFnZT8uY29tbWVudHM/LmVycm9yXHJcbiIsImltcG9ydCB7IHR5cGUgU3RhdGVTY2hlbWEgfSBmcm9tICdhcHAvcHJvdmlkZXJzL1N0b3JlUHJvdmlkZXInXHJcblxyXG5leHBvcnQgY29uc3QgZ2V0QXJ0aWNsZVJlY29tZW5kYXRpb25zSXNMb2FkaW5nID0gKHN0YXRlOiBTdGF0ZVNjaGVtYSkgPT4gc3RhdGUuYXJ0aWNsZURldGFpbHNQYWdlPy5yZWNvbW1lbmRhdGlvbnM/LmlzTG9hZGluZ1xyXG5leHBvcnQgY29uc3QgZ2V0QXJ0aWNsZVJlY29tZW5kYXRpb25zRXJyb3IgPSAoc3RhdGU6IFN0YXRlU2NoZW1hKSA9PiBzdGF0ZS5hcnRpY2xlRGV0YWlsc1BhZ2U/LnJlY29tbWVuZGF0aW9ucz8uZXJyb3JcclxuIiwiaW1wb3J0IHsgY3JlYXRlQXN5bmNUaHVuayB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQnXHJcbmltcG9ydCB7IHR5cGUgVGh1bmtDb25maWcgfSBmcm9tICdhcHAvcHJvdmlkZXJzL1N0b3JlUHJvdmlkZXInXHJcbmltcG9ydCB7IHR5cGUgQ29tbWVudCB9IGZyb20gJ2VudGl0aWVzL0NvbW1lbnQnXHJcbmltcG9ydCB7IGdldFVzZXJBdXRoRGF0YSB9IGZyb20gJ2VudGl0aWVzL1VzZXInXHJcbmltcG9ydCB7IGdldEFydGljbGVEZXRhaWxzRGF0YSB9IGZyb20gJ2VudGl0aWVzL0FydGljbGUnXHJcbmltcG9ydCB7IGFkZENvbW1lbnRGb3JtQWN0aW9ucyB9IGZyb20gJ2ZlYXR1cmVzL0FkZENvbW1lbnRGb3JtL21vZGVsL3NsaWNlcy9hZGRDb21tZW50Rm9ybVNsaWNlJ1xyXG5pbXBvcnQgeyBmZXRjaENvbW1lbnRzQnlBcnRpY2xlSWQgfSBmcm9tICcuLi9mZXRjaENvbW1lbnRzQnlBcnRpY2xlSWQvZmV0Y2hDb21tZW50c0J5QXJ0aWNsZUlkJ1xyXG5cclxuZXhwb3J0IGNvbnN0IGFkZENvbW1lbnRGb3JBcnRpY2xlID0gY3JlYXRlQXN5bmNUaHVuazxDb21tZW50LCBzdHJpbmcsIFRodW5rQ29uZmlnPHN0cmluZz4+KFxyXG4gICdhcnRpY2xlRGV0YWlscy9hZGRDb21tZW50Rm9yQXJ0aWNsZScsXHJcbiAgYXN5bmMgKHRleHQsIHRodW5rQXBpKSA9PiB7XHJcbiAgICBjb25zdCB7IGRpc3BhdGNoLCBleHRyYSwgcmVqZWN0V2l0aFZhbHVlLCBnZXRTdGF0ZSB9ID0gdGh1bmtBcGlcclxuXHJcbiAgICBjb25zdCB1c2VyRGF0YSA9IGdldFVzZXJBdXRoRGF0YShnZXRTdGF0ZSgpKVxyXG4gICAgY29uc3QgYXJ0aWNsZSA9IGdldEFydGljbGVEZXRhaWxzRGF0YShnZXRTdGF0ZSgpKVxyXG5cclxuICAgIGlmICghdXNlckRhdGEgfHwgIXRleHQgfHwgIWFydGljbGUpIHtcclxuICAgICAgcmV0dXJuIHJlamVjdFdpdGhWYWx1ZSgnTm8gZGF0YScpXHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBleHRyYS5hcGkucG9zdDxDb21tZW50PignL2NvbW1lbnRzJywge1xyXG4gICAgICAgIGFydGljbGVJZDogYXJ0aWNsZS5pZCxcclxuICAgICAgICB1c2VySWQ6IHVzZXJEYXRhLmlkLFxyXG4gICAgICAgIHRleHRcclxuICAgICAgfSlcclxuXHJcbiAgICAgIGlmICghcmVzcG9uc2UuZGF0YSkge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcigpXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHZvaWQgZGlzcGF0Y2goZmV0Y2hDb21tZW50c0J5QXJ0aWNsZUlkKGFydGljbGUuaWQpKVxyXG5cclxuICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGFcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICByZXR1cm4gcmVqZWN0V2l0aFZhbHVlKCdlcnJvcicpXHJcbiAgICB9XHJcbiAgfVxyXG4pXHJcbiIsImltcG9ydCB7IGNyZWF0ZUFzeW5jVGh1bmsgfSBmcm9tICdAcmVkdXhqcy90b29sa2l0J1xyXG5pbXBvcnQgeyB0eXBlIFRodW5rQ29uZmlnIH0gZnJvbSAnYXBwL3Byb3ZpZGVycy9TdG9yZVByb3ZpZGVyJ1xyXG5pbXBvcnQgeyB0eXBlIEFydGljbGUgfSBmcm9tICdlbnRpdGllcy9BcnRpY2xlJ1xyXG5cclxuZXhwb3J0IGNvbnN0IGZldGNoQXJ0aWNsZVJlY29tbWVuZGF0aW9ucyA9IGNyZWF0ZUFzeW5jVGh1bms8QXJ0aWNsZVtdLCB2b2lkLCBUaHVua0NvbmZpZzxzdHJpbmc+PihcclxuICAnYXJ0aWNsZURldGFpbHNQYWdlL2ZldGNoQXJ0aWNsZVJlY29tbWVuZGF0aW9ucycsXHJcbiAgYXN5bmMgKHByb3BzLCB0aHVua0FwaSkgPT4ge1xyXG4gICAgY29uc3QgeyBleHRyYSwgcmVqZWN0V2l0aFZhbHVlIH0gPSB0aHVua0FwaVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZXh0cmEuYXBpLmdldDxBcnRpY2xlW10+KCcvYXJ0aWNsZXMnLCB7XHJcbiAgICAgICAgcGFyYW1zOiB7XHJcbiAgICAgICAgICBfbGltaXQ6IDRcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcblxyXG4gICAgICBpZiAoIXJlc3BvbnNlLmRhdGEpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoKVxyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YVxyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIHJldHVybiByZWplY3RXaXRoVmFsdWUoJ2Vycm9yJylcclxuICAgIH1cclxuICB9XHJcbilcclxuIiwiaW1wb3J0IHsgY3JlYXRlQXN5bmNUaHVuayB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQnXHJcbmltcG9ydCB7IHR5cGUgVGh1bmtDb25maWcgfSBmcm9tICdhcHAvcHJvdmlkZXJzL1N0b3JlUHJvdmlkZXInXHJcbmltcG9ydCB7IHR5cGUgQ29tbWVudCB9IGZyb20gJ2VudGl0aWVzL0NvbW1lbnQnXHJcblxyXG5leHBvcnQgY29uc3QgZmV0Y2hDb21tZW50c0J5QXJ0aWNsZUlkID0gY3JlYXRlQXN5bmNUaHVuazxDb21tZW50W10sIHN0cmluZyB8IHVuZGVmaW5lZCwgVGh1bmtDb25maWc8c3RyaW5nPj4oXHJcbiAgJ2FydGljbGVEZXRhaWxzUGFnZS9mZXRjaENvbW1lbnRzQnlBcnRpY2xlSWQnLFxyXG4gIGFzeW5jIChhcnRpY2xlSWQsIHRodW5rQXBpKSA9PiB7XHJcbiAgICBjb25zdCB7IGV4dHJhLCByZWplY3RXaXRoVmFsdWUgfSA9IHRodW5rQXBpXHJcblxyXG4gICAgaWYgKCFhcnRpY2xlSWQpIHtcclxuICAgICAgcmV0dXJuIHJlamVjdFdpdGhWYWx1ZSgnZXJyb3InKVxyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZXh0cmEuYXBpLmdldDxDb21tZW50W10+KCcvY29tbWVudHMnLCB7XHJcbiAgICAgICAgcGFyYW1zOiB7XHJcbiAgICAgICAgICBhcnRpY2xlSWQsXHJcbiAgICAgICAgICBfZXhwYW5kOiAndXNlcidcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcblxyXG4gICAgICBpZiAoIXJlc3BvbnNlLmRhdGEpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoKVxyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YVxyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIHJldHVybiByZWplY3RXaXRoVmFsdWUoJ2Vycm9yJylcclxuICAgIH1cclxuICB9XHJcbilcclxuIiwiaW1wb3J0IHtcclxuICB0eXBlIFBheWxvYWRBY3Rpb24sXHJcbiAgY3JlYXRlRW50aXR5QWRhcHRlcixcclxuICBjcmVhdGVTbGljZVxyXG59IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQnXHJcbmltcG9ydCB7IHR5cGUgU3RhdGVTY2hlbWEgfSBmcm9tICdhcHAvcHJvdmlkZXJzL1N0b3JlUHJvdmlkZXInXHJcbmltcG9ydCB7IHR5cGUgQ29tbWVudCB9IGZyb20gJ2VudGl0aWVzL0NvbW1lbnQnXHJcbmltcG9ydCB7IHR5cGUgQXJ0aWNsZURldGFpbHNDb21tZW50c1NjaGVtYSB9IGZyb20gJy4uL3R5cGVzL0FydGljbGVEZXRhaWxzQ29tbWVudHNTY2hlbWEnXHJcbmltcG9ydCB7IGZldGNoQ29tbWVudHNCeUFydGljbGVJZCB9IGZyb20gJy4uL3NlcnZpY2VzL2ZldGNoQ29tbWVudHNCeUFydGljbGVJZC9mZXRjaENvbW1lbnRzQnlBcnRpY2xlSWQnXHJcblxyXG5leHBvcnQgY29uc3QgY29tbWVudHNBZGFwdGVyID0gY3JlYXRlRW50aXR5QWRhcHRlcjxDb21tZW50Pih7XHJcbiAgc2VsZWN0SWQ6IChjb21tZW50KSA9PiBjb21tZW50LmlkXHJcbn0pXHJcblxyXG5leHBvcnQgY29uc3QgZ2V0QXJ0aWNsZUNvbW1lbnRzID0gY29tbWVudHNBZGFwdGVyLmdldFNlbGVjdG9yczxTdGF0ZVNjaGVtYT4oXHJcbiAgKHN0YXRlKSA9PiBzdGF0ZT8uYXJ0aWNsZURldGFpbHNQYWdlPy5jb21tZW50cyA/PyBjb21tZW50c0FkYXB0ZXIuZ2V0SW5pdGlhbFN0YXRlKClcclxuKVxyXG5cclxuY29uc3QgYXJ0aWNsZURldGFpbHNDb21tZW50c1NsaWNlID0gY3JlYXRlU2xpY2Uoe1xyXG4gIG5hbWU6ICdhcnRpY2xlRGV0YWlsc0NvbW1lbnRzU2xpY2UnLFxyXG4gIGluaXRpYWxTdGF0ZTogY29tbWVudHNBZGFwdGVyLmdldEluaXRpYWxTdGF0ZTxBcnRpY2xlRGV0YWlsc0NvbW1lbnRzU2NoZW1hPih7XHJcbiAgICBpc0xvYWRpbmc6IGZhbHNlLFxyXG4gICAgZXJyb3I6IHVuZGVmaW5lZCxcclxuICAgIGlkczogW10sXHJcbiAgICBlbnRpdGllczoge31cclxuICB9KSxcclxuICByZWR1Y2Vyczoge30sXHJcbiAgZXh0cmFSZWR1Y2VyczogKGJ1aWxkZXIpID0+IHtcclxuICAgIGJ1aWxkZXIuYWRkQ2FzZShmZXRjaENvbW1lbnRzQnlBcnRpY2xlSWQucGVuZGluZywgKHN0YXRlKSA9PiB7XHJcbiAgICAgIHN0YXRlLmVycm9yID0gdW5kZWZpbmVkXHJcbiAgICAgIHN0YXRlLmlzTG9hZGluZyA9IHRydWVcclxuICAgIH0pXHJcbiAgICBidWlsZGVyLmFkZENhc2UoZmV0Y2hDb21tZW50c0J5QXJ0aWNsZUlkLmZ1bGZpbGxlZCwgKHN0YXRlLCBhY3Rpb246IFBheWxvYWRBY3Rpb248Q29tbWVudFtdPikgPT4ge1xyXG4gICAgICBzdGF0ZS5pc0xvYWRpbmcgPSBmYWxzZVxyXG4gICAgICBjb21tZW50c0FkYXB0ZXIuc2V0QWxsKHN0YXRlLCBhY3Rpb24ucGF5bG9hZClcclxuICAgIH0pXHJcbiAgICBidWlsZGVyLmFkZENhc2UoZmV0Y2hDb21tZW50c0J5QXJ0aWNsZUlkLnJlamVjdGVkLCAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgICBzdGF0ZS5pc0xvYWRpbmcgPSBmYWxzZVxyXG4gICAgICBzdGF0ZS5lcnJvciA9IGFjdGlvbi5wYXlsb2FkIGFzIHN0cmluZ1xyXG4gICAgfSlcclxuICB9XHJcbn0pXHJcblxyXG5leHBvcnQgY29uc3QgeyByZWR1Y2VyOiBhcnRpY2xlRGV0YWlsc0NvbW1lbnRzUmVkdWNlciB9ID0gYXJ0aWNsZURldGFpbHNDb21tZW50c1NsaWNlXHJcbiIsImltcG9ydCB7XHJcbiAgY3JlYXRlRW50aXR5QWRhcHRlcixcclxuICBjcmVhdGVTbGljZVxyXG59IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQnXHJcbmltcG9ydCB7IHR5cGUgU3RhdGVTY2hlbWEgfSBmcm9tICdhcHAvcHJvdmlkZXJzL1N0b3JlUHJvdmlkZXInXHJcbmltcG9ydCB7IHR5cGUgQXJ0aWNsZURldGFpbHNSZWNvbWVuZGF0aW9uU2NoZW1hIH0gZnJvbSAnLi4vdHlwZXMvQXJ0aWNsZURldGFpbHNSZWNvbWVuZGF0aW9uU2NoZW1hJ1xyXG5pbXBvcnQgeyB0eXBlIEFydGljbGUgfSBmcm9tICdlbnRpdGllcy9BcnRpY2xlJ1xyXG5pbXBvcnQgeyBmZXRjaEFydGljbGVSZWNvbW1lbmRhdGlvbnMgfSBmcm9tICcuLi9zZXJ2aWNlcy9mZXRjaEFydGljbGVSZWNvbW1lbmRhdGlvbnMvZmV0Y2hBcnRpY2xlUmVjb21tZW5kYXRpb25zJ1xyXG5cclxuZXhwb3J0IGNvbnN0IHJlY29tZW5kYXRpb25zQWRhcHRlciA9IGNyZWF0ZUVudGl0eUFkYXB0ZXI8QXJ0aWNsZT4oe1xyXG4gIHNlbGVjdElkOiAoYXJ0aWNsZSkgPT4gYXJ0aWNsZS5pZFxyXG59KVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldEFydGljbGVSZWNvbWVuZGF0aW9ucyA9IHJlY29tZW5kYXRpb25zQWRhcHRlci5nZXRTZWxlY3RvcnM8U3RhdGVTY2hlbWE+KFxyXG4gIChzdGF0ZSkgPT4gc3RhdGU/LmFydGljbGVEZXRhaWxzUGFnZT8ucmVjb21tZW5kYXRpb25zID8/IHJlY29tZW5kYXRpb25zQWRhcHRlci5nZXRJbml0aWFsU3RhdGUoKVxyXG4pXHJcblxyXG5jb25zdCBhcnRpY2xlRGV0YWlsc1BhZ2VSZWNvbWVuZGF0aW9uU2xpY2UgPSBjcmVhdGVTbGljZSh7XHJcbiAgbmFtZTogJ2FydGljbGVEZXRhaWxzUGFnZVJlY29tZW5kYXRpb24nLFxyXG4gIGluaXRpYWxTdGF0ZTogcmVjb21lbmRhdGlvbnNBZGFwdGVyLmdldEluaXRpYWxTdGF0ZTxBcnRpY2xlRGV0YWlsc1JlY29tZW5kYXRpb25TY2hlbWE+KHtcclxuICAgIGlzTG9hZGluZzogZmFsc2UsXHJcbiAgICBlcnJvcjogdW5kZWZpbmVkLFxyXG4gICAgaWRzOiBbXSxcclxuICAgIGVudGl0aWVzOiB7fVxyXG4gIH0pLFxyXG4gIHJlZHVjZXJzOiB7fSxcclxuICBleHRyYVJlZHVjZXJzOiAoYnVpbGRlcikgPT4ge1xyXG4gICAgYnVpbGRlci5hZGRDYXNlKGZldGNoQXJ0aWNsZVJlY29tbWVuZGF0aW9ucy5wZW5kaW5nLCAoc3RhdGUpID0+IHtcclxuICAgICAgc3RhdGUuZXJyb3IgPSB1bmRlZmluZWRcclxuICAgICAgc3RhdGUuaXNMb2FkaW5nID0gdHJ1ZVxyXG4gICAgfSlcclxuICAgIGJ1aWxkZXIuYWRkQ2FzZShmZXRjaEFydGljbGVSZWNvbW1lbmRhdGlvbnMuZnVsZmlsbGVkLCAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgICBzdGF0ZS5pc0xvYWRpbmcgPSBmYWxzZVxyXG4gICAgICByZWNvbWVuZGF0aW9uc0FkYXB0ZXIuc2V0QWxsKHN0YXRlLCBhY3Rpb24ucGF5bG9hZClcclxuICAgIH0pXHJcbiAgICBidWlsZGVyLmFkZENhc2UoZmV0Y2hBcnRpY2xlUmVjb21tZW5kYXRpb25zLnJlamVjdGVkLCAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgICBzdGF0ZS5pc0xvYWRpbmcgPSBmYWxzZVxyXG4gICAgICBzdGF0ZS5lcnJvciA9IGFjdGlvbi5wYXlsb2FkIGFzIHN0cmluZ1xyXG4gICAgfSlcclxuICB9XHJcbn0pXHJcblxyXG5leHBvcnQgY29uc3QgeyByZWR1Y2VyOiBhcnRpY2xlRGV0YWlsc1BhZ2VSZWNvbWVuZGF0aW9uUmVkdWNlciB9ID0gYXJ0aWNsZURldGFpbHNQYWdlUmVjb21lbmRhdGlvblNsaWNlXHJcbiIsImltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQnXHJcbmltcG9ydCB7IHR5cGUgQXJ0aWNsZURldGFpbHNQYWdlU2NoZW1hIH0gZnJvbSAnLi4vdHlwZXMnXHJcbmltcG9ydCB7IGFydGljbGVEZXRhaWxzUGFnZVJlY29tZW5kYXRpb25SZWR1Y2VyIH0gZnJvbSAnLi9hcnRpY2xlRGV0YWlsc1BhZ2VSZWNvbWVuZGF0aW9uU2xpY2UnXHJcbmltcG9ydCB7IGFydGljbGVEZXRhaWxzQ29tbWVudHNSZWR1Y2VyIH0gZnJvbSAnLi9hcnRpY2xlRGV0YWlsc0NvbW1lbnRzU2xpY2UnXHJcblxyXG5leHBvcnQgY29uc3QgYXJ0aWNsZURldGFpbHNQYWdlUmVkdWNlciA9IGNvbWJpbmVSZWR1Y2VyczxBcnRpY2xlRGV0YWlsc1BhZ2VTY2hlbWE+KHtcclxuICByZWNvbW1lbmRhdGlvbnM6IGFydGljbGVEZXRhaWxzUGFnZVJlY29tZW5kYXRpb25SZWR1Y2VyLFxyXG4gIGNvbW1lbnRzOiBhcnRpY2xlRGV0YWlsc0NvbW1lbnRzUmVkdWNlclxyXG59KVxyXG4iXSwibmFtZXMiOlsiY2xhc3NOYW1lcyIsImNscyIsIm1lbW8iLCJBdmF0YXIiLCJBdmF0YXJTaXplIiwiVGV4dCIsIlNrZWxldG9uIiwiQXBwTGluayIsIlJvdXRlUGF0aCIsIkNvbW1lbnRDYXJkIiwiX2MyIiwicHJvcHMiLCJfYiIsImNsYXNzTmFtZSIsImNvbW1lbnQiLCJfYyIsImlzTG9hZGluZyIsIl9qc3hzIiwiY2hpbGRyZW4iLCJoZWFkZXIiLCJfanN4Iiwid2lkdGgiLCJoZWlnaHQiLCJib3JkZXJSIiwiYm9keSIsInRvIiwiY29uY2F0IiwicHJvZmlsZSIsInVzZXIiLCJpZCIsInNpemUiLCJTTUFMTCIsInNyYyIsIl9hIiwiYXZhdGFyIiwidGl0bGUiLCJ1c2VybmFtZSIsInRleHQiLCJfYzMiLCJkaXNwbGF5TmFtZSIsIiRSZWZyZXNoUmVnJCIsInVzZVRyYW5zbGF0aW9uIiwiQ29tbWVudExpc3QiLCJfcyIsImNvbW1lbnRzIiwidCIsImxlbmd0aCIsIm1hcCIsImxhenkiLCJBZGRDb21tZW50Rm9ybUFzeW5jIiwiX19hd2FpdGVyIiwiX19nZW5lcmF0b3IiLCJzZW50IiwidXNlQ2FsbGJhY2siLCJ1c2VOYXZpZ2F0ZSIsIkJ1dHRvbiIsIkJ1dHRvblRoZW1lIiwidXNlU2VsZWN0b3IiLCJnZXRVc2VyQXV0aERhdGEiLCJnZXRBcnRpY2xlRGV0YWlsc0RhdGEiLCJnZXRDYW5FZGl0QXJ0aWNsZSIsIkFydGljbGVEZXRhaWxzUGFnZUhlYWRlciIsIm5hdmlnYXRlIiwidXNlckRhdGEiLCJhcnRpY2xlIiwiY2FuRWRpdCIsIm9uQmFja1RvTGlzdCIsImFydGljbGVzIiwib25FZGl0QXJ0aWNsZSIsImFydGljbGVEZXRhaWxzIiwidGhlbWUiLCJPVVRMSU5FIiwib25DbGljayIsImVkaXRCdG4iLCJBcnRpY2xlRGV0YWlscyIsIkFydGljbGVMaXN0IiwidXNlUGFyYW1zIiwiVGV4dFNpemUiLCJEeW5hbWljTW9kdWxlTG9hZGVyIiwiZ2V0QXJ0aWNsZUNvbW1lbnRzIiwiZ2V0QXJ0aWNsZVJlY29tZW5kYXRpb25zIiwiZ2V0QXJ0aWNsZUNvbW1lbnRzSXNMb2FkaW5nIiwidXNlSW5pdGlhbEVmZmVjdCIsInVzZUFwcERpc3BhdGNoIiwiZmV0Y2hDb21tZW50c0J5QXJ0aWNsZUlkIiwiQWRkQ29tbWVudEZvcm0iLCJhZGRDb21tZW50Rm9yQXJ0aWNsZSIsIlBhZ2UiLCJnZXRBcnRpY2xlUmVjb21lbmRhdGlvbnNJc0xvYWRpbmciLCJmZXRjaEFydGljbGVSZWNvbW1lbmRhdGlvbnMiLCJhcnRpY2xlRGV0YWlsc1BhZ2VSZWR1Y2VyIiwiZmV0Y2hOZXh0QXJ0aWNsZXNQYWdlIiwicmVkdWNlcnMiLCJhcnRpY2xlRGV0YWlsc1BhZ2UiLCJBcnRpY2xlRGV0YWlsc1BhZ2UiLCJzZWxlY3RBbGwiLCJyZWNvbWVuZGF0aW9ucyIsImNvbW1lbnRzSXNMb2FkaW5nIiwicmVjb21lbmRhdGlvbnNJc0xvYWRpbmciLCJkaXNwYXRjaCIsIm9uU2VuZENvbW1lbnQiLCJvbkxvYWROZXh0UGFydCIsInJlbW92ZUFmdGVyVW5tb3VudCIsIkwiLCJjb21tZW50c1RpdGxlIiwicmVjb21tZW5kYXRpb25zIiwidGFyZ2V0Il0sInNvdXJjZVJvb3QiOiIifQ==