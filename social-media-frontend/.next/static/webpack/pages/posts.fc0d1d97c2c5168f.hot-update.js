"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/posts",{

/***/ "./src/components/Feed/PostCard.js":
/*!*****************************************!*\
  !*** ./src/components/Feed/PostCard.js ***!
  \*****************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ PostCard)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var _context_AuthContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../context/AuthContext */ \"./src/context/AuthContext.js\");\n/* harmony import */ var _PostCard_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PostCard.module.css */ \"./src/components/Feed/PostCard.module.css\");\n/* harmony import */ var _PostCard_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_PostCard_module_css__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\n // Importing CSS module\nfunction PostCard(param) {\n    let { post, onLike } = param;\n    _s();\n    const { user } = (0,_context_AuthContext__WEBPACK_IMPORTED_MODULE_1__.useAuth)();\n    const handleLike = async ()=>{\n        if (!localStorage.getItem('token')) return alert('Please log in to like a post.');\n        try {\n            await axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].post(\"\".concat(\"http://localhost:5000/api\", \"/posts/like?postId=\").concat(post.id), null, {\n                headers: {\n                    Authorization: \"Bearer \".concat(localStorage.getItem('token'))\n                }\n            });\n            onLike(post.id);\n        } catch (error) {\n            console.log(error, error.response);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_PostCard_module_css__WEBPACK_IMPORTED_MODULE_2___default().postCard),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                className: (_PostCard_module_css__WEBPACK_IMPORTED_MODULE_2___default().author),\n                children: post.username\n            }, void 0, false, {\n                fileName: \"D:\\\\Project Manager Assignment\\\\social-media-frontend\\\\src\\\\components\\\\Feed\\\\PostCard.js\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: (_PostCard_module_css__WEBPACK_IMPORTED_MODULE_2___default().content),\n                children: post.content\n            }, void 0, false, {\n                fileName: \"D:\\\\Project Manager Assignment\\\\social-media-frontend\\\\src\\\\components\\\\Feed\\\\PostCard.js\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: (_PostCard_module_css__WEBPACK_IMPORTED_MODULE_2___default().likeButton),\n                onClick: handleLike,\n                disabled: post.likes >= 100,\n                children: [\n                    \"Like (\",\n                    post.likes,\n                    \")\"\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Project Manager Assignment\\\\social-media-frontend\\\\src\\\\components\\\\Feed\\\\PostCard.js\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Project Manager Assignment\\\\social-media-frontend\\\\src\\\\components\\\\Feed\\\\PostCard.js\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, this);\n}\n_s(PostCard, \"9ep4vdl3mBfipxjmc+tQCDhw6Ik=\", false, function() {\n    return [\n        _context_AuthContext__WEBPACK_IMPORTED_MODULE_1__.useAuth\n    ];\n});\n_c = PostCard;\nvar _c;\n$RefreshReg$(_c, \"PostCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9GZWVkL1Bvc3RDYXJkLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUEwQjtBQUMwQjtBQUNULENBQUMsdUJBQXVCO0FBRXBELFNBQVNHLFNBQVMsS0FBZ0I7UUFBaEIsRUFBRUMsSUFBSSxFQUFFQyxNQUFNLEVBQUUsR0FBaEI7O0lBQy9CLE1BQU0sRUFBRUMsSUFBSSxFQUFFLEdBQUdMLDZEQUFPQTtJQUV4QixNQUFNTSxhQUFhO1FBQ2pCLElBQUksQ0FBQ0MsYUFBYUMsT0FBTyxDQUFDLFVBQVUsT0FBT0MsTUFBTTtRQUNqRCxJQUFJO1lBQ0YsTUFBTVYsa0RBQVUsQ0FBQyxHQUF3REksT0FBckRPLDJCQUErQixFQUFDLHVCQUE2QixPQUFSUCxLQUFLVSxFQUFFLEdBQUksTUFBTTtnQkFDeEZDLFNBQVM7b0JBQUVDLGVBQWUsVUFBd0MsT0FBOUJSLGFBQWFDLE9BQU8sQ0FBQztnQkFBVztZQUN0RTtZQUNBSixPQUFPRCxLQUFLVSxFQUFFO1FBQ2hCLEVBQUUsT0FBT0csT0FBTztZQUNkQyxRQUFRQyxHQUFHLENBQUNGLE9BQU9BLE1BQU1HLFFBQVE7UUFDbkM7SUFDRjtJQUVBLHFCQUNFLDhEQUFDQztRQUFJQyxXQUFXcEIsc0VBQWU7OzBCQUM3Qiw4REFBQ3NCO2dCQUFHRixXQUFXcEIsb0VBQWE7MEJBQUdFLEtBQUtzQixRQUFROzs7Ozs7MEJBQzVDLDhEQUFDQztnQkFBRUwsV0FBV3BCLHFFQUFjOzBCQUFHRSxLQUFLd0IsT0FBTzs7Ozs7OzBCQUMzQyw4REFBQ0M7Z0JBQ0NQLFdBQVdwQix3RUFBaUI7Z0JBQzVCNkIsU0FBU3hCO2dCQUNUeUIsVUFBVTVCLEtBQUs2QixLQUFLLElBQUk7O29CQUN6QjtvQkFDUTdCLEtBQUs2QixLQUFLO29CQUFDOzs7Ozs7Ozs7Ozs7O0FBSTFCO0dBNUJ3QjlCOztRQUNMRix5REFBT0E7OztLQURGRSIsInNvdXJjZXMiOlsiRDpcXFByb2plY3QgTWFuYWdlciBBc3NpZ25tZW50XFxzb2NpYWwtbWVkaWEtZnJvbnRlbmRcXHNyY1xcY29tcG9uZW50c1xcRmVlZFxcUG9zdENhcmQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHsgdXNlQXV0aCB9IGZyb20gJy4uLy4uL2NvbnRleHQvQXV0aENvbnRleHQnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vUG9zdENhcmQubW9kdWxlLmNzcyc7IC8vIEltcG9ydGluZyBDU1MgbW9kdWxlXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQb3N0Q2FyZCh7IHBvc3QsIG9uTGlrZSB9KSB7XHJcbiAgY29uc3QgeyB1c2VyIH0gPSB1c2VBdXRoKCk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUxpa2UgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBpZiAoIWxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpKSByZXR1cm4gYWxlcnQoJ1BsZWFzZSBsb2cgaW4gdG8gbGlrZSBhIHBvc3QuJyk7XHJcbiAgICB0cnkge1xyXG4gICAgICBhd2FpdCBheGlvcy5wb3N0KGAke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FQSV9VUkx9L3Bvc3RzL2xpa2U/cG9zdElkPSR7cG9zdC5pZH1gLCBudWxsLCB7XHJcbiAgICAgICAgaGVhZGVyczogeyBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7bG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJyl9YCB9LFxyXG4gICAgICB9KTtcclxuICAgICAgb25MaWtlKHBvc3QuaWQpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5sb2coZXJyb3IsIGVycm9yLnJlc3BvbnNlKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wb3N0Q2FyZH0+XHJcbiAgICAgIDxoNCBjbGFzc05hbWU9e3N0eWxlcy5hdXRob3J9Pntwb3N0LnVzZXJuYW1lfTwvaDQ+XHJcbiAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmNvbnRlbnR9Pntwb3N0LmNvbnRlbnR9PC9wPlxyXG4gICAgICA8YnV0dG9uXHJcbiAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMubGlrZUJ1dHRvbn1cclxuICAgICAgICBvbkNsaWNrPXtoYW5kbGVMaWtlfVxyXG4gICAgICAgIGRpc2FibGVkPXtwb3N0Lmxpa2VzID49IDEwMH0gLy8gRXhhbXBsZSBjb25kaXRpb24gZm9yIGRpc2FibGluZ1xyXG4gICAgICA+XHJcbiAgICAgICAgTGlrZSAoe3Bvc3QubGlrZXN9KVxyXG4gICAgICA8L2J1dHRvbj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbImF4aW9zIiwidXNlQXV0aCIsInN0eWxlcyIsIlBvc3RDYXJkIiwicG9zdCIsIm9uTGlrZSIsInVzZXIiLCJoYW5kbGVMaWtlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImFsZXJ0IiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX0FQSV9VUkwiLCJpZCIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwicmVzcG9uc2UiLCJkaXYiLCJjbGFzc05hbWUiLCJwb3N0Q2FyZCIsImg0IiwiYXV0aG9yIiwidXNlcm5hbWUiLCJwIiwiY29udGVudCIsImJ1dHRvbiIsImxpa2VCdXR0b24iLCJvbkNsaWNrIiwiZGlzYWJsZWQiLCJsaWtlcyJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Feed/PostCard.js\n"));

/***/ })

});