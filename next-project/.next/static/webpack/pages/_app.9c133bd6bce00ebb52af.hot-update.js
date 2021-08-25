"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./store/auth-context.js":
/*!*******************************!*\
  !*** ./store/auth-context.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AuthContextProvider\": function() { return /* binding */ AuthContextProvider; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/tsotne/Desktop/techTask/next-project/store/auth-context.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\nvar AuthContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createContext({\n  token: '',\n  isLoggedIn: false,\n  login: function login(token) {},\n  logout: function logout() {}\n});\nvar AuthContextProvider = function AuthContextProvider(props) {\n  _s();\n\n  var ISSERVER = false;\n  var initToken = !ISSERVER && localStorage.getItem('token');\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(initToken),\n      token = _useState[0],\n      setToken = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),\n      isLogin = _useState2[0],\n      setIsLogin = _useState2[1];\n\n  var loginHandler = function loginHandler() {\n    setIsLogin(true);\n    setToken(token);\n    !ISSERVER && localStorage.setItem('token', token);\n  };\n\n  var logoutHandler = function logoutHandler() {\n    setToken(null);\n    setIsLogin(false);\n    !ISSERVER && localStorage.removeItem('token');\n  };\n\n  var contextValue = {\n    token: token,\n    isLoggedIn: isLogin,\n    login: loginHandler,\n    logout: logoutHandler\n  };\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AuthContext.Provider, {\n    value: contextValue,\n    children: props.children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 36,\n    columnNumber: 9\n  }, _this);\n};\n\n_s(AuthContextProvider, \"x3k60mEJf6DD4kyGd0q7lHU/sk8=\");\n\n_c = AuthContextProvider;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AuthContext);\n\nvar _c;\n\n$RefreshReg$(_c, \"AuthContextProvider\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdG9yZS9hdXRoLWNvbnRleHQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQSxJQUFNRyxXQUFXLGdCQUFHSCwwREFBQSxDQUFvQjtBQUNwQ0ssRUFBQUEsS0FBSyxFQUFFLEVBRDZCO0FBRXBDQyxFQUFBQSxVQUFVLEVBQUUsS0FGd0I7QUFHcENDLEVBQUFBLEtBQUssRUFBRSxlQUFDRixLQUFELEVBQVcsQ0FBRSxDQUhnQjtBQUlwQ0csRUFBQUEsTUFBTSxFQUFFLGtCQUFNLENBQUU7QUFKb0IsQ0FBcEIsQ0FBcEI7QUFPTyxJQUFNQyxtQkFBbUIsR0FBRyxTQUF0QkEsbUJBQXNCLENBQUNDLEtBQUQsRUFBVztBQUFBOztBQUMxQyxNQUFNQyxRQUFRLFFBQWQ7QUFDQSxNQUFNQyxTQUFTLEdBQUcsQ0FBQ0QsUUFBRCxJQUFhRSxZQUFZLENBQUNDLE9BQWIsQ0FBcUIsT0FBckIsQ0FBL0I7O0FBRjBDLGtCQUdoQmIsK0NBQVEsQ0FBQ1csU0FBRCxDQUhRO0FBQUEsTUFHbkNQLEtBSG1DO0FBQUEsTUFHNUJVLFFBSDRCOztBQUFBLG1CQUlaZCwrQ0FBUSxDQUFDLEtBQUQsQ0FKSTtBQUFBLE1BSW5DZSxPQUptQztBQUFBLE1BSTFCQyxVQUowQjs7QUFNMUMsTUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsR0FBTTtBQUN2QkQsSUFBQUEsVUFBVSxDQUFDLElBQUQsQ0FBVjtBQUNBRixJQUFBQSxRQUFRLENBQUNWLEtBQUQsQ0FBUjtBQUNBLEtBQUNNLFFBQUQsSUFBYUUsWUFBWSxDQUFDTSxPQUFiLENBQXFCLE9BQXJCLEVBQThCZCxLQUE5QixDQUFiO0FBQ0gsR0FKRDs7QUFNQSxNQUFNZSxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLEdBQU07QUFDeEJMLElBQUFBLFFBQVEsQ0FBQyxJQUFELENBQVI7QUFDQUUsSUFBQUEsVUFBVSxDQUFDLEtBQUQsQ0FBVjtBQUNBLEtBQUNOLFFBQUQsSUFBYUUsWUFBWSxDQUFDUSxVQUFiLENBQXdCLE9BQXhCLENBQWI7QUFDSCxHQUpEOztBQU1BLE1BQU1DLFlBQVksR0FBRztBQUNqQmpCLElBQUFBLEtBQUssRUFBRUEsS0FEVTtBQUVqQkMsSUFBQUEsVUFBVSxFQUFFVSxPQUZLO0FBR2pCVCxJQUFBQSxLQUFLLEVBQUVXLFlBSFU7QUFJakJWLElBQUFBLE1BQU0sRUFBRVk7QUFKUyxHQUFyQjtBQU9BLHNCQUNJLDhEQUFDLFdBQUQsQ0FBYSxRQUFiO0FBQXNCLFNBQUssRUFBRUUsWUFBN0I7QUFBQSxjQUNNWixLQUFLLENBQUNhO0FBRFo7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBS0gsQ0E5Qk07O0dBQU1kOztLQUFBQTtBQWdDYiwrREFBZU4sV0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zdG9yZS9hdXRoLWNvbnRleHQuanM/NGU5MSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcblxuY29uc3QgQXV0aENvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KHtcbiAgICB0b2tlbjogJycsXG4gICAgaXNMb2dnZWRJbjogZmFsc2UsXG4gICAgbG9naW46ICh0b2tlbikgPT4ge30sXG4gICAgbG9nb3V0OiAoKSA9PiB7fVxufSk7XG5cbmV4cG9ydCBjb25zdCBBdXRoQ29udGV4dFByb3ZpZGVyID0gKHByb3BzKSA9PiB7XG4gICAgY29uc3QgSVNTRVJWRVIgPSB0eXBlb2Ygd2luZG93ID09PSBcInVuZGVmaW5lZFwiO1xuICAgIGNvbnN0IGluaXRUb2tlbiA9ICFJU1NFUlZFUiAmJiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKTtcbiAgICBjb25zdCBbdG9rZW4sIHNldFRva2VuXSA9IHVzZVN0YXRlKGluaXRUb2tlbik7XG4gICAgY29uc3QgW2lzTG9naW4sIHNldElzTG9naW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gICAgY29uc3QgbG9naW5IYW5kbGVyID0gKCkgPT4ge1xuICAgICAgICBzZXRJc0xvZ2luKHRydWUpXG4gICAgICAgIHNldFRva2VuKHRva2VuKTtcbiAgICAgICAgIUlTU0VSVkVSICYmIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2tlbicsIHRva2VuKTtcbiAgICB9XG5cbiAgICBjb25zdCBsb2dvdXRIYW5kbGVyID0gKCkgPT4ge1xuICAgICAgICBzZXRUb2tlbihudWxsKTtcbiAgICAgICAgc2V0SXNMb2dpbihmYWxzZSlcbiAgICAgICAgIUlTU0VSVkVSICYmIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCd0b2tlbicpXG4gICAgfVxuXG4gICAgY29uc3QgY29udGV4dFZhbHVlID0ge1xuICAgICAgICB0b2tlbjogdG9rZW4sXG4gICAgICAgIGlzTG9nZ2VkSW46IGlzTG9naW4sXG4gICAgICAgIGxvZ2luOiBsb2dpbkhhbmRsZXIsXG4gICAgICAgIGxvZ291dDogbG9nb3V0SGFuZGxlclxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxBdXRoQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17Y29udGV4dFZhbHVlfT5cbiAgICAgICAgICAgIHsgcHJvcHMuY2hpbGRyZW4gfVxuICAgICAgICA8L0F1dGhDb250ZXh0LlByb3ZpZGVyPlxuICAgIClcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEF1dGhDb250ZXh0OyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiQXV0aENvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidG9rZW4iLCJpc0xvZ2dlZEluIiwibG9naW4iLCJsb2dvdXQiLCJBdXRoQ29udGV4dFByb3ZpZGVyIiwicHJvcHMiLCJJU1NFUlZFUiIsImluaXRUb2tlbiIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJzZXRUb2tlbiIsImlzTG9naW4iLCJzZXRJc0xvZ2luIiwibG9naW5IYW5kbGVyIiwic2V0SXRlbSIsImxvZ291dEhhbmRsZXIiLCJyZW1vdmVJdGVtIiwiY29udGV4dFZhbHVlIiwiY2hpbGRyZW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./store/auth-context.js\n");

/***/ })

});