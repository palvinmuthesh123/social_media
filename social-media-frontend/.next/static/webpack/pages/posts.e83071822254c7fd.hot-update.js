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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ PostCard)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var _context_AuthContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../context/AuthContext */ \"./src/context/AuthContext.js\");\n/* harmony import */ var _PostCard_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PostCard.module.css */ \"./src/components/Feed/PostCard.module.css\");\n/* harmony import */ var _PostCard_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_PostCard_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jwt-decode */ \"./node_modules/jwt-decode/build/esm/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n // Importing CSS module\n\nfunction PostCard(param) {\n    let { post, onLike } = param;\n    _s();\n    const { user } = (0,_context_AuthContext__WEBPACK_IMPORTED_MODULE_1__.useAuth)();\n    const handleLike = async ()=>{\n        if (!localStorage.getItem('token')) return alert('Please log in to like a post.');\n        try {\n            await axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].post(\"\".concat(\"http://localhost:5000/api\", \"/posts/like?postId=\").concat(post.id), null, {\n                headers: {\n                    Authorization: \"Bearer \".concat(localStorage.getItem('token'))\n                }\n            });\n            // onLike(post.id);\n            window.location.reload();\n        // onLike();\n        } catch (error) {\n            console.log(error, error.response.data.error);\n            alert(error.response.data.error ? error.response.data.error : \"Something went wrong\");\n        }\n    };\n    const handleFollow = async (id)=>{\n        console.log(id, \"IIIIIIIIIIIIIIII\");\n        if (!localStorage.getItem('token')) return alert('Please log in to like a post.');\n        try {\n            await axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].post(\"\".concat(\"http://localhost:5000/api\", \"/users/\").concat(id.user_id, \"/follow\"), null, {\n                headers: {\n                    Authorization: \"Bearer \".concat(localStorage.getItem('token'))\n                }\n            });\n            window.location.reload();\n        } catch (error) {\n            console.log(error, error.response.data.error);\n            alert(error.response.data.error ? error.response.data.error : \"Something went wrong\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_PostCard_module_css__WEBPACK_IMPORTED_MODULE_2___default().postCard),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                onClick: ()=>handleFollow(post),\n                className: (_PostCard_module_css__WEBPACK_IMPORTED_MODULE_2___default().author),\n                children: post.username\n            }, void 0, false, {\n                fileName: \"D:\\\\Project Manager Assignment\\\\social-media-frontend\\\\src\\\\components\\\\Feed\\\\PostCard.js\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: (_PostCard_module_css__WEBPACK_IMPORTED_MODULE_2___default().content),\n                children: post.content + (post && post.following == 1 ? post.following : \"\")\n            }, void 0, false, {\n                fileName: \"D:\\\\Project Manager Assignment\\\\social-media-frontend\\\\src\\\\components\\\\Feed\\\\PostCard.js\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: (_PostCard_module_css__WEBPACK_IMPORTED_MODULE_2___default().likeButton),\n                onClick: handleLike,\n                disabled: post.likes >= 100,\n                children: [\n                    \"Like (\",\n                    post.likes,\n                    \")\"\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Project Manager Assignment\\\\social-media-frontend\\\\src\\\\components\\\\Feed\\\\PostCard.js\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Project Manager Assignment\\\\social-media-frontend\\\\src\\\\components\\\\Feed\\\\PostCard.js\",\n        lineNumber: 39,\n        columnNumber: 5\n    }, this);\n}\n_s(PostCard, \"9ep4vdl3mBfipxjmc+tQCDhw6Ik=\", false, function() {\n    return [\n        _context_AuthContext__WEBPACK_IMPORTED_MODULE_1__.useAuth\n    ];\n});\n_c = PostCard;\nvar _c;\n$RefreshReg$(_c, \"PostCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9GZWVkL1Bvc3RDYXJkLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBMEI7QUFDMEI7QUFDVCxDQUFDLHVCQUF1QjtBQUM1QjtBQUV4QixTQUFTSSxTQUFTLEtBQWdCO1FBQWhCLEVBQUVDLElBQUksRUFBRUMsTUFBTSxFQUFFLEdBQWhCOztJQUMvQixNQUFNLEVBQUVDLElBQUksRUFBRSxHQUFHTiw2REFBT0E7SUFFeEIsTUFBTU8sYUFBYTtRQUNqQixJQUFJLENBQUNDLGFBQWFDLE9BQU8sQ0FBQyxVQUFVLE9BQU9DLE1BQU07UUFDakQsSUFBSTtZQUNGLE1BQU1YLGtEQUFVLENBQUMsR0FBd0RLLE9BQXJETywyQkFBK0IsRUFBQyx1QkFBNkIsT0FBUlAsS0FBS1UsRUFBRSxHQUFJLE1BQU07Z0JBQ3hGQyxTQUFTO29CQUFFQyxlQUFlLFVBQXdDLE9BQTlCUixhQUFhQyxPQUFPLENBQUM7Z0JBQVc7WUFDdEU7WUFDQSxtQkFBbUI7WUFDbkJRLE9BQU9DLFFBQVEsQ0FBQ0MsTUFBTTtRQUN0QixZQUFZO1FBQ2QsRUFBRSxPQUFPQyxPQUFPO1lBQ2RDLFFBQVFDLEdBQUcsQ0FBQ0YsT0FBT0EsTUFBTUcsUUFBUSxDQUFDQyxJQUFJLENBQUNKLEtBQUs7WUFDNUNWLE1BQU1VLE1BQU1HLFFBQVEsQ0FBQ0MsSUFBSSxDQUFDSixLQUFLLEdBQUdBLE1BQU1HLFFBQVEsQ0FBQ0MsSUFBSSxDQUFDSixLQUFLLEdBQUc7UUFDaEU7SUFDRjtJQUVBLE1BQU1LLGVBQWUsT0FBT1g7UUFDMUJPLFFBQVFDLEdBQUcsQ0FBQ1IsSUFBSTtRQUNoQixJQUFJLENBQUNOLGFBQWFDLE9BQU8sQ0FBQyxVQUFVLE9BQU9DLE1BQU07UUFDakQsSUFBSTtZQUNGLE1BQU1YLGtEQUFVLENBQUMsR0FBNENlLE9BQXpDSCwyQkFBK0IsRUFBQyxXQUFvQixPQUFYRyxHQUFHWSxPQUFPLEVBQUMsWUFBVSxNQUFNO2dCQUN0RlgsU0FBUztvQkFBRUMsZUFBZSxVQUF3QyxPQUE5QlIsYUFBYUMsT0FBTyxDQUFDO2dCQUFXO1lBQ3RFO1lBQ0FRLE9BQU9DLFFBQVEsQ0FBQ0MsTUFBTTtRQUN4QixFQUFFLE9BQU9DLE9BQU87WUFDZEMsUUFBUUMsR0FBRyxDQUFDRixPQUFPQSxNQUFNRyxRQUFRLENBQUNDLElBQUksQ0FBQ0osS0FBSztZQUM1Q1YsTUFBTVUsTUFBTUcsUUFBUSxDQUFDQyxJQUFJLENBQUNKLEtBQUssR0FBR0EsTUFBTUcsUUFBUSxDQUFDQyxJQUFJLENBQUNKLEtBQUssR0FBRztRQUNoRTtJQUNGO0lBRUEscUJBQ0UsOERBQUNPO1FBQUlDLFdBQVczQixzRUFBZTs7MEJBQzdCLDhEQUFDNkI7Z0JBQUdDLFNBQVMsSUFBSU4sYUFBYXJCO2dCQUFPd0IsV0FBVzNCLG9FQUFhOzBCQUFHRyxLQUFLNkIsUUFBUTs7Ozs7OzBCQUM3RSw4REFBQ0M7Z0JBQUVOLFdBQVczQixxRUFBYzswQkFBR0csS0FBSytCLE9BQU8sR0FBSS9CLENBQUFBLFFBQVFBLEtBQUtnQyxTQUFTLElBQUUsSUFBSWhDLEtBQUtnQyxTQUFTLEdBQUcsRUFBQzs7Ozs7OzBCQUM3Riw4REFBQ0M7Z0JBQ0NULFdBQVczQix3RUFBaUI7Z0JBQzVCOEIsU0FBU3hCO2dCQUNUZ0MsVUFBVW5DLEtBQUtvQyxLQUFLLElBQUk7O29CQUN6QjtvQkFDUXBDLEtBQUtvQyxLQUFLO29CQUFDOzs7Ozs7Ozs7Ozs7O0FBSTFCO0dBN0N3QnJDOztRQUNMSCx5REFBT0E7OztLQURGRyIsInNvdXJjZXMiOlsiRDpcXFByb2plY3QgTWFuYWdlciBBc3NpZ25tZW50XFxzb2NpYWwtbWVkaWEtZnJvbnRlbmRcXHNyY1xcY29tcG9uZW50c1xcRmVlZFxcUG9zdENhcmQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHsgdXNlQXV0aCB9IGZyb20gJy4uLy4uL2NvbnRleHQvQXV0aENvbnRleHQnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vUG9zdENhcmQubW9kdWxlLmNzcyc7IC8vIEltcG9ydGluZyBDU1MgbW9kdWxlXHJcbmltcG9ydCAqIGFzIGp3dERlY29kZSBmcm9tICdqd3QtZGVjb2RlJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUG9zdENhcmQoeyBwb3N0LCBvbkxpa2UgfSkge1xyXG4gIGNvbnN0IHsgdXNlciB9ID0gdXNlQXV0aCgpO1xyXG5cclxuICBjb25zdCBoYW5kbGVMaWtlID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgaWYgKCFsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKSkgcmV0dXJuIGFsZXJ0KCdQbGVhc2UgbG9nIGluIHRvIGxpa2UgYSBwb3N0LicpO1xyXG4gICAgdHJ5IHtcclxuICAgICAgYXdhaXQgYXhpb3MucG9zdChgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUElfVVJMfS9wb3N0cy9saWtlP3Bvc3RJZD0ke3Bvc3QuaWR9YCwgbnVsbCwge1xyXG4gICAgICAgIGhlYWRlcnM6IHsgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke2xvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpfWAgfSxcclxuICAgICAgfSk7XHJcbiAgICAgIC8vIG9uTGlrZShwb3N0LmlkKTtcclxuICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgICAvLyBvbkxpa2UoKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yLCBlcnJvci5yZXNwb25zZS5kYXRhLmVycm9yKTtcclxuICAgICAgYWxlcnQoZXJyb3IucmVzcG9uc2UuZGF0YS5lcnJvciA/IGVycm9yLnJlc3BvbnNlLmRhdGEuZXJyb3IgOiBcIlNvbWV0aGluZyB3ZW50IHdyb25nXCIpXHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlRm9sbG93ID0gYXN5bmMgKGlkKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhpZCwgXCJJSUlJSUlJSUlJSUlJSUlJXCIpXHJcbiAgICBpZiAoIWxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpKSByZXR1cm4gYWxlcnQoJ1BsZWFzZSBsb2cgaW4gdG8gbGlrZSBhIHBvc3QuJyk7XHJcbiAgICB0cnkge1xyXG4gICAgICBhd2FpdCBheGlvcy5wb3N0KGAke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FQSV9VUkx9L3VzZXJzLyR7aWQudXNlcl9pZH0vZm9sbG93YCwgbnVsbCwge1xyXG4gICAgICAgIGhlYWRlcnM6IHsgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke2xvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpfWAgfSxcclxuICAgICAgfSk7XHJcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yLCBlcnJvci5yZXNwb25zZS5kYXRhLmVycm9yKTtcclxuICAgICAgYWxlcnQoZXJyb3IucmVzcG9uc2UuZGF0YS5lcnJvciA/IGVycm9yLnJlc3BvbnNlLmRhdGEuZXJyb3IgOiBcIlNvbWV0aGluZyB3ZW50IHdyb25nXCIpXHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucG9zdENhcmR9PlxyXG4gICAgICA8aDQgb25DbGljaz17KCk9PmhhbmRsZUZvbGxvdyhwb3N0KX0gY2xhc3NOYW1lPXtzdHlsZXMuYXV0aG9yfT57cG9zdC51c2VybmFtZX08L2g0PlxyXG4gICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5jb250ZW50fT57cG9zdC5jb250ZW50ICsgKHBvc3QgJiYgcG9zdC5mb2xsb3dpbmc9PTEgPyBwb3N0LmZvbGxvd2luZyA6IFwiXCIpfTwvcD5cclxuICAgICAgPGJ1dHRvblxyXG4gICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmxpa2VCdXR0b259XHJcbiAgICAgICAgb25DbGljaz17aGFuZGxlTGlrZX1cclxuICAgICAgICBkaXNhYmxlZD17cG9zdC5saWtlcyA+PSAxMDB9IC8vIEV4YW1wbGUgY29uZGl0aW9uIGZvciBkaXNhYmxpbmdcclxuICAgICAgPlxyXG4gICAgICAgIExpa2UgKHtwb3N0Lmxpa2VzfSlcclxuICAgICAgPC9idXR0b24+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJheGlvcyIsInVzZUF1dGgiLCJzdHlsZXMiLCJqd3REZWNvZGUiLCJQb3N0Q2FyZCIsInBvc3QiLCJvbkxpa2UiLCJ1c2VyIiwiaGFuZGxlTGlrZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJhbGVydCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19BUElfVVJMIiwiaWQiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsIndpbmRvdyIsImxvY2F0aW9uIiwicmVsb2FkIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwicmVzcG9uc2UiLCJkYXRhIiwiaGFuZGxlRm9sbG93IiwidXNlcl9pZCIsImRpdiIsImNsYXNzTmFtZSIsInBvc3RDYXJkIiwiaDQiLCJvbkNsaWNrIiwiYXV0aG9yIiwidXNlcm5hbWUiLCJwIiwiY29udGVudCIsImZvbGxvd2luZyIsImJ1dHRvbiIsImxpa2VCdXR0b24iLCJkaXNhYmxlZCIsImxpa2VzIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Feed/PostCard.js\n"));

/***/ })

});