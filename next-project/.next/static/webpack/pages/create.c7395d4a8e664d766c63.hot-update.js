"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/create",{

/***/ "./store/auth-context.js":
/*!*******************************!*\
  !*** ./store/auth-context.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AuthContextProvider\": function() { return /* binding */ AuthContextProvider; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/tsotne/Desktop/techTask/next-project/store/auth-context.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\nvar AuthContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createContext({\n  token: '',\n  isLoggedIn: false,\n  login: function login(token) {},\n  logout: function logout() {}\n});\nvar AuthContextProvider = function AuthContextProvider(props) {\n  _s();\n\n  var ISSERVER = false;\n  var initToken = !ISSERVER && localStorage.getItem('token');\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(initToken),\n      token = _useState[0],\n      setToken = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),\n      isLogin = _useState2[0],\n      setIsLogin = _useState2[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    token ? setIsLogin(true) : setIsLogin(false);\n    console.log('useEffect');\n  });\n\n  var loginHandler = function loginHandler() {\n    setIsLogin(true);\n    setToken(token);\n    !ISSERVER && localStorage.setItem('token', token);\n  };\n\n  var logoutHandler = function logoutHandler() {\n    setToken(null);\n    setIsLogin(false);\n    !ISSERVER && localStorage.removeItem('token');\n  };\n\n  var contextValue = {\n    token: token,\n    isLoggedIn: isLogin,\n    login: loginHandler,\n    logout: logoutHandler\n  };\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AuthContext.Provider, {\n    value: contextValue,\n    children: props.children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 41,\n    columnNumber: 9\n  }, _this);\n};\n\n_s(AuthContextProvider, \"HOmpb0+y7FexTVkFKgz+Iw1/Vxg=\");\n\n_c = AuthContextProvider;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AuthContext);\n\nvar _c;\n\n$RefreshReg$(_c, \"AuthContextProvider\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdG9yZS9hdXRoLWNvbnRleHQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQSxJQUFNRyxXQUFXLGdCQUFHSCwwREFBQSxDQUFvQjtBQUNwQ0ssRUFBQUEsS0FBSyxFQUFFLEVBRDZCO0FBRXBDQyxFQUFBQSxVQUFVLEVBQUUsS0FGd0I7QUFHcENDLEVBQUFBLEtBQUssRUFBRSxlQUFDRixLQUFELEVBQVcsQ0FBRSxDQUhnQjtBQUlwQ0csRUFBQUEsTUFBTSxFQUFFLGtCQUFNLENBQUU7QUFKb0IsQ0FBcEIsQ0FBcEI7QUFPTyxJQUFNQyxtQkFBbUIsR0FBRyxTQUF0QkEsbUJBQXNCLENBQUNDLEtBQUQsRUFBVztBQUFBOztBQUMxQyxNQUFNQyxRQUFRLFFBQWQ7QUFDQSxNQUFNQyxTQUFTLEdBQUcsQ0FBQ0QsUUFBRCxJQUFhRSxZQUFZLENBQUNDLE9BQWIsQ0FBcUIsT0FBckIsQ0FBL0I7O0FBRjBDLGtCQUdoQmIsK0NBQVEsQ0FBQ1csU0FBRCxDQUhRO0FBQUEsTUFHbkNQLEtBSG1DO0FBQUEsTUFHNUJVLFFBSDRCOztBQUFBLG1CQUlaZCwrQ0FBUSxDQUFDLEtBQUQsQ0FKSTtBQUFBLE1BSW5DZSxPQUptQztBQUFBLE1BSTFCQyxVQUowQjs7QUFNMUNmLEVBQUFBLGdEQUFTLENBQUMsWUFBTTtBQUNaRyxJQUFBQSxLQUFLLEdBQUdZLFVBQVUsQ0FBQyxJQUFELENBQWIsR0FBc0JBLFVBQVUsQ0FBQyxLQUFELENBQXJDO0FBQ0FDLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFdBQVo7QUFDSCxHQUhRLENBQVQ7O0FBS0EsTUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsR0FBTTtBQUN2QkgsSUFBQUEsVUFBVSxDQUFDLElBQUQsQ0FBVjtBQUNBRixJQUFBQSxRQUFRLENBQUNWLEtBQUQsQ0FBUjtBQUNBLEtBQUNNLFFBQUQsSUFBYUUsWUFBWSxDQUFDUSxPQUFiLENBQXFCLE9BQXJCLEVBQThCaEIsS0FBOUIsQ0FBYjtBQUNILEdBSkQ7O0FBTUEsTUFBTWlCLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsR0FBTTtBQUN4QlAsSUFBQUEsUUFBUSxDQUFDLElBQUQsQ0FBUjtBQUNBRSxJQUFBQSxVQUFVLENBQUMsS0FBRCxDQUFWO0FBQ0EsS0FBQ04sUUFBRCxJQUFhRSxZQUFZLENBQUNVLFVBQWIsQ0FBd0IsT0FBeEIsQ0FBYjtBQUNILEdBSkQ7O0FBTUEsTUFBTUMsWUFBWSxHQUFHO0FBQ2pCbkIsSUFBQUEsS0FBSyxFQUFFQSxLQURVO0FBRWpCQyxJQUFBQSxVQUFVLEVBQUVVLE9BRks7QUFHakJULElBQUFBLEtBQUssRUFBRWEsWUFIVTtBQUlqQlosSUFBQUEsTUFBTSxFQUFFYztBQUpTLEdBQXJCO0FBT0Esc0JBQ0ksOERBQUMsV0FBRCxDQUFhLFFBQWI7QUFBc0IsU0FBSyxFQUFFRSxZQUE3QjtBQUFBLGNBQ01kLEtBQUssQ0FBQ2U7QUFEWjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFLSCxDQW5DTTs7R0FBTWhCOztLQUFBQTtBQXFDYiwrREFBZU4sV0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zdG9yZS9hdXRoLWNvbnRleHQuanM/NGU5MSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcblxuY29uc3QgQXV0aENvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KHtcbiAgICB0b2tlbjogJycsXG4gICAgaXNMb2dnZWRJbjogZmFsc2UsXG4gICAgbG9naW46ICh0b2tlbikgPT4ge30sXG4gICAgbG9nb3V0OiAoKSA9PiB7fVxufSk7XG5cbmV4cG9ydCBjb25zdCBBdXRoQ29udGV4dFByb3ZpZGVyID0gKHByb3BzKSA9PiB7XG4gICAgY29uc3QgSVNTRVJWRVIgPSB0eXBlb2Ygd2luZG93ID09PSBcInVuZGVmaW5lZFwiO1xuICAgIGNvbnN0IGluaXRUb2tlbiA9ICFJU1NFUlZFUiAmJiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKTtcbiAgICBjb25zdCBbdG9rZW4sIHNldFRva2VuXSA9IHVzZVN0YXRlKGluaXRUb2tlbik7XG4gICAgY29uc3QgW2lzTG9naW4sIHNldElzTG9naW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgdG9rZW4gPyBzZXRJc0xvZ2luKHRydWUpIDogc2V0SXNMb2dpbihmYWxzZSlcbiAgICAgICAgY29uc29sZS5sb2coJ3VzZUVmZmVjdCcpXG4gICAgfSk7XG5cbiAgICBjb25zdCBsb2dpbkhhbmRsZXIgPSAoKSA9PiB7XG4gICAgICAgIHNldElzTG9naW4odHJ1ZSlcbiAgICAgICAgc2V0VG9rZW4odG9rZW4pO1xuICAgICAgICAhSVNTRVJWRVIgJiYgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rva2VuJywgdG9rZW4pO1xuICAgIH1cblxuICAgIGNvbnN0IGxvZ291dEhhbmRsZXIgPSAoKSA9PiB7XG4gICAgICAgIHNldFRva2VuKG51bGwpO1xuICAgICAgICBzZXRJc0xvZ2luKGZhbHNlKVxuICAgICAgICAhSVNTRVJWRVIgJiYgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3Rva2VuJylcbiAgICB9XG5cbiAgICBjb25zdCBjb250ZXh0VmFsdWUgPSB7XG4gICAgICAgIHRva2VuOiB0b2tlbixcbiAgICAgICAgaXNMb2dnZWRJbjogaXNMb2dpbixcbiAgICAgICAgbG9naW46IGxvZ2luSGFuZGxlcixcbiAgICAgICAgbG9nb3V0OiBsb2dvdXRIYW5kbGVyXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPEF1dGhDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtjb250ZXh0VmFsdWV9PlxuICAgICAgICAgICAgeyBwcm9wcy5jaGlsZHJlbiB9XG4gICAgICAgIDwvQXV0aENvbnRleHQuUHJvdmlkZXI+XG4gICAgKVxufTtcblxuZXhwb3J0IGRlZmF1bHQgQXV0aENvbnRleHQ7Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJBdXRoQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ0b2tlbiIsImlzTG9nZ2VkSW4iLCJsb2dpbiIsImxvZ291dCIsIkF1dGhDb250ZXh0UHJvdmlkZXIiLCJwcm9wcyIsIklTU0VSVkVSIiwiaW5pdFRva2VuIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInNldFRva2VuIiwiaXNMb2dpbiIsInNldElzTG9naW4iLCJjb25zb2xlIiwibG9nIiwibG9naW5IYW5kbGVyIiwic2V0SXRlbSIsImxvZ291dEhhbmRsZXIiLCJyZW1vdmVJdGVtIiwiY29udGV4dFZhbHVlIiwiY2hpbGRyZW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./store/auth-context.js\n");

/***/ })

});