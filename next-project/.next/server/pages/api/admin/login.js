"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/admin/login";
exports.ids = ["pages/api/admin/login"];
exports.modules = {

/***/ "./lib/prisma.js":
/*!***********************!*\
  !*** ./lib/prisma.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nlet prisma;\n\nif (false) {} else {\n  if (!global.prisma) {\n    global.prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\n  }\n\n  prisma = global.prisma;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (prisma);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvcHJpc21hLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBRUEsSUFBSUMsTUFBSjs7QUFFQSxJQUFJLE9BQXVDLEVBQTNDLE1BRU87QUFDTCxNQUFJLENBQUNDLE1BQU0sQ0FBQ0QsTUFBWixFQUFvQjtBQUNsQkMsSUFBQUEsTUFBTSxDQUFDRCxNQUFQLEdBQWdCLElBQUlELHdEQUFKLEVBQWhCO0FBQ0Q7O0FBQ0RDLEVBQUFBLE1BQU0sR0FBR0MsTUFBTSxDQUFDRCxNQUFoQjtBQUNEOztBQUVELGlFQUFlQSxNQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dC1wcm9qZWN0Ly4vbGliL3ByaXNtYS5qcz9jNTY1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByaXNtYUNsaWVudCB9IGZyb20gJ0BwcmlzbWEvY2xpZW50J1xuXG5sZXQgcHJpc21hXG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHByaXNtYSA9IG5ldyBQcmlzbWFDbGllbnQoKVxufSBlbHNlIHtcbiAgaWYgKCFnbG9iYWwucHJpc21hKSB7XG4gICAgZ2xvYmFsLnByaXNtYSA9IG5ldyBQcmlzbWFDbGllbnQoKVxuICB9XG4gIHByaXNtYSA9IGdsb2JhbC5wcmlzbWFcbn1cblxuZXhwb3J0IGRlZmF1bHQgcHJpc21hOyJdLCJuYW1lcyI6WyJQcmlzbWFDbGllbnQiLCJwcmlzbWEiLCJnbG9iYWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/prisma.js\n");

/***/ }),

/***/ "./pages/api/admin/login/index.js":
/*!****************************************!*\
  !*** ./pages/api/admin/login/index.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../../lib/prisma */ \"./lib/prisma.js\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__);\n\n\nasync function handler(req, res) {\n  if (req.method === 'POST') {\n    // Process a POST request\n    const {\n      email,\n      password\n    } = req.body;\n    const user = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__.default.admin.findFirst({\n      where: {\n        username: email\n      }\n    });\n\n    if (user && password === (user === null || user === void 0 ? void 0 : user.password)) {\n      var token = jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default().sign({\n        id: user === null || user === void 0 ? void 0 : user.id,\n        email: user === null || user === void 0 ? void 0 : user.username\n      }, \"jwtsecretkey2021\", {\n        expiresIn: \"10h\"\n      });\n      res.status(200).json({\n        status: 'success',\n        data: {\n          username: user.username,\n          role: user.role,\n          token\n        }\n      });\n      return;\n    } else {\n      res.status(200).json({\n        status: 'error',\n        message: 'User not found'\n      });\n      return;\n    }\n  } else {\n    // Handle any other HTTP method\n    res.status(400).send({\n      message: 'Only POST requests allowed'\n    });\n    return;\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvYWRtaW4vbG9naW4vaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBQ0E7QUFHZSxlQUFlRSxPQUFmLENBQXVCQyxHQUF2QixFQUE0QkMsR0FBNUIsRUFBZ0M7QUFDM0MsTUFBSUQsR0FBRyxDQUFDRSxNQUFKLEtBQWUsTUFBbkIsRUFBMkI7QUFDdkI7QUFDQSxVQUFNO0FBQUVDLE1BQUFBLEtBQUY7QUFBU0MsTUFBQUE7QUFBVCxRQUFzQkosR0FBRyxDQUFDSyxJQUFoQztBQUVBLFVBQU1DLElBQUksR0FBRyxNQUFNVCxnRUFBQSxDQUF1QjtBQUN0Q1ksTUFBQUEsS0FBSyxFQUFFO0FBQ0hDLFFBQUFBLFFBQVEsRUFBRVA7QUFEUDtBQUQrQixLQUF2QixDQUFuQjs7QUFNQSxRQUFHRyxJQUFJLElBQUlGLFFBQVEsTUFBS0UsSUFBTCxhQUFLQSxJQUFMLHVCQUFLQSxJQUFJLENBQUVGLFFBQVgsQ0FBbkIsRUFBdUM7QUFDbkMsVUFBSU8sS0FBSyxHQUFHYix3REFBQSxDQUFTO0FBQUVlLFFBQUFBLEVBQUUsRUFBRVAsSUFBRixhQUFFQSxJQUFGLHVCQUFFQSxJQUFJLENBQUVPLEVBQVo7QUFBZ0JWLFFBQUFBLEtBQUssRUFBRUcsSUFBRixhQUFFQSxJQUFGLHVCQUFFQSxJQUFJLENBQUVJO0FBQTdCLE9BQVQsRUFBa0RJLGtCQUFsRCxFQUEwRTtBQUNsRkcsUUFBQUEsU0FBUyxFQUFFSCxLQUEwQkk7QUFENkMsT0FBMUUsQ0FBWjtBQUlBakIsTUFBQUEsR0FBRyxDQUFDa0IsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQ2pCRCxRQUFBQSxNQUFNLEVBQUUsU0FEUztBQUVqQkUsUUFBQUEsSUFBSSxFQUFFO0FBQ0ZYLFVBQUFBLFFBQVEsRUFBRUosSUFBSSxDQUFDSSxRQURiO0FBRUZZLFVBQUFBLElBQUksRUFBRWhCLElBQUksQ0FBQ2dCLElBRlQ7QUFHRlgsVUFBQUE7QUFIRTtBQUZXLE9BQXJCO0FBUUE7QUFDSCxLQWRELE1BY0s7QUFDRFYsTUFBQUEsR0FBRyxDQUFDa0IsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQ2pCRCxRQUFBQSxNQUFNLEVBQUUsT0FEUztBQUVqQkksUUFBQUEsT0FBTyxFQUFFO0FBRlEsT0FBckI7QUFJQTtBQUNIO0FBR0YsR0FqQ0gsTUFpQ1M7QUFDTDtBQUNBdEIsSUFBQUEsR0FBRyxDQUFDa0IsTUFBSixDQUFXLEdBQVgsRUFBZ0JLLElBQWhCLENBQXFCO0FBQUVELE1BQUFBLE9BQU8sRUFBRTtBQUFYLEtBQXJCO0FBQ0E7QUFDRDtBQUNOIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dC1wcm9qZWN0Ly4vcGFnZXMvYXBpL2FkbWluL2xvZ2luL2luZGV4LmpzPzc5ZjEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHByaXNtYSBmcm9tICcuLy4uLy4uLy4uLy4uL2xpYi9wcmlzbWEnXG5pbXBvcnQgand0IGZyb20gJ2pzb253ZWJ0b2tlbic7XG5cblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcyl7XG4gICAgaWYgKHJlcS5tZXRob2QgPT09ICdQT1NUJykge1xuICAgICAgICAvLyBQcm9jZXNzIGEgUE9TVCByZXF1ZXN0XG4gICAgICAgIGNvbnN0IHsgZW1haWwsIHBhc3N3b3JkIH0gPSByZXEuYm9keTtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBwcmlzbWEuYWRtaW4uZmluZEZpcnN0KHtcbiAgICAgICAgICAgIHdoZXJlOiB7XG4gICAgICAgICAgICAgICAgdXNlcm5hbWU6IGVtYWlsXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAgICAgaWYodXNlciAmJiBwYXNzd29yZCA9PT0gdXNlcj8ucGFzc3dvcmQpe1xuICAgICAgICAgICAgdmFyIHRva2VuID0gand0LnNpZ24oeyBpZDogdXNlcj8uaWQsIGVtYWlsOiB1c2VyPy51c2VybmFtZSB9LCBwcm9jZXNzLmVudi5KV1RfU0VDUkVULCB7XG4gICAgICAgICAgICAgICAgZXhwaXJlc0luOiBwcm9jZXNzLmVudi5KV1RfRVhQSVJFU19JTlxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHtcbiAgICAgICAgICAgICAgICBzdGF0dXM6ICdzdWNjZXNzJyxcbiAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgIHVzZXJuYW1lOiB1c2VyLnVzZXJuYW1lLCBcbiAgICAgICAgICAgICAgICAgICAgcm9sZTogdXNlci5yb2xlLFxuICAgICAgICAgICAgICAgICAgICB0b2tlblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oe1xuICAgICAgICAgICAgICAgIHN0YXR1czogJ2Vycm9yJyxcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiAnVXNlciBub3QgZm91bmQnXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cblxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gSGFuZGxlIGFueSBvdGhlciBIVFRQIG1ldGhvZFxuICAgICAgICByZXMuc3RhdHVzKDQwMCkuc2VuZCh7IG1lc3NhZ2U6ICdPbmx5IFBPU1QgcmVxdWVzdHMgYWxsb3dlZCd9KTtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG59Il0sIm5hbWVzIjpbInByaXNtYSIsImp3dCIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJlbWFpbCIsInBhc3N3b3JkIiwiYm9keSIsInVzZXIiLCJhZG1pbiIsImZpbmRGaXJzdCIsIndoZXJlIiwidXNlcm5hbWUiLCJ0b2tlbiIsInNpZ24iLCJpZCIsInByb2Nlc3MiLCJlbnYiLCJKV1RfU0VDUkVUIiwiZXhwaXJlc0luIiwiSldUX0VYUElSRVNfSU4iLCJzdGF0dXMiLCJqc29uIiwiZGF0YSIsInJvbGUiLCJtZXNzYWdlIiwic2VuZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/admin/login/index.js\n");

/***/ }),

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/admin/login/index.js"));
module.exports = __webpack_exports__;

})();