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

/***/ "./src/pages/posts.js":
/*!****************************!*\
  !*** ./src/pages/posts.js ***!
  \****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Posts)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_AuthContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/AuthContext */ \"./src/context/AuthContext.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var _components_Feed_CreatePostForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Feed/CreatePostForm */ \"./src/components/Feed/CreatePostForm.js\");\n/* harmony import */ var _components_Feed_PostCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Feed/PostCard */ \"./src/components/Feed/PostCard.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Posts() {\n    _s();\n    const { user } = (0,_context_AuthContext__WEBPACK_IMPORTED_MODULE_2__.useAuth)();\n    const [posts, setPosts] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    // Fetch posts on page load\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"Posts.useEffect\": ()=>{\n            console.log(user, \"TTTTTTTTTTTTTTTT\");\n            const fetchPosts = {\n                \"Posts.useEffect.fetchPosts\": async ()=>{\n                    try {\n                        const { data } = await axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"].get(\"\".concat(\"http://localhost:5000/api\", \"/posts\"), {\n                            headers: {\n                                Authorization: \"Bearer \".concat(localStorage.getItem('token'))\n                            }\n                        });\n                        setPosts(data.posts);\n                    } catch (error) {\n                        setPosts([]);\n                        console.log(error, \"EEEEEEEEEEEEEEEEE\");\n                    }\n                }\n            }[\"Posts.useEffect.fetchPosts\"];\n            fetchPosts();\n        }\n    }[\"Posts.useEffect\"], []);\n    // Refresh posts after a new post is created\n    const refreshPosts = async ()=>{\n        const { data } = await axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"].get(\"\".concat(\"http://localhost:5000/api\", \"/posts\"), {\n            headers: {\n                Authorization: \"Bearer \".concat(localStorage.getItem('token'))\n            }\n        });\n        setPosts(data && data.posts ? data.posts : []);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"posts-page\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: [\n                    \"Welcome, \",\n                    user && user.username ? user.username : \"\"\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Project Manager Assignment\\\\social-media-frontend\\\\src\\\\pages\\\\posts.js\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Feed_CreatePostForm__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                onPostCreated: refreshPosts\n            }, void 0, false, {\n                fileName: \"D:\\\\Project Manager Assignment\\\\social-media-frontend\\\\src\\\\pages\\\\posts.js\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"posts-list\",\n                children: posts ? posts.map((post)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Feed_PostCard__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        post: post,\n                        onLike: refreshPosts\n                    }, post.id, false, {\n                        fileName: \"D:\\\\Project Manager Assignment\\\\social-media-frontend\\\\src\\\\pages\\\\posts.js\",\n                        lineNumber: 42,\n                        columnNumber: 11\n                    }, this)) : null\n            }, void 0, false, {\n                fileName: \"D:\\\\Project Manager Assignment\\\\social-media-frontend\\\\src\\\\pages\\\\posts.js\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Project Manager Assignment\\\\social-media-frontend\\\\src\\\\pages\\\\posts.js\",\n        lineNumber: 37,\n        columnNumber: 5\n    }, this);\n}\n_s(Posts, \"x3war8wD93+wdJICNSQNXInDL+I=\", false, function() {\n    return [\n        _context_AuthContext__WEBPACK_IMPORTED_MODULE_2__.useAuth\n    ];\n});\n_c = Posts;\nvar _c;\n$RefreshReg$(_c, \"Posts\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvcG9zdHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBNEM7QUFDSztBQUN2QjtBQUNxQztBQUNaO0FBRXBDLFNBQVNNOztJQUN0QixNQUFNLEVBQUVDLElBQUksRUFBRSxHQUFHTCw2REFBT0E7SUFDeEIsTUFBTSxDQUFDTSxPQUFPQyxTQUFTLEdBQUdSLCtDQUFRQSxDQUFDLEVBQUU7SUFFckMsMkJBQTJCO0lBQzNCRCxnREFBU0E7MkJBQUM7WUFDUlUsUUFBUUMsR0FBRyxDQUFDSixNQUFNO1lBQ2xCLE1BQU1LOzhDQUFhO29CQUNqQixJQUFJO3dCQUNGLE1BQU0sRUFBRUMsSUFBSSxFQUFFLEdBQUcsTUFBTVYsaURBQVMsQ0FBQyxHQUFtQyxPQUFoQ1ksMkJBQStCLEVBQUMsV0FBUzs0QkFDM0VHLFNBQVM7Z0NBQUVDLGVBQWUsVUFBd0MsT0FBOUJDLGFBQWFDLE9BQU8sQ0FBQzs0QkFBVzt3QkFDdEU7d0JBQ0FaLFNBQVNJLEtBQUtMLEtBQUs7b0JBQ3JCLEVBQUUsT0FBT2MsT0FBTzt3QkFDZGIsU0FBUyxFQUFFO3dCQUNYQyxRQUFRQyxHQUFHLENBQUNXLE9BQU87b0JBQ3JCO2dCQUNGOztZQUNBVjtRQUNGOzBCQUFHLEVBQUU7SUFFTCw0Q0FBNEM7SUFDNUMsTUFBTVcsZUFBZTtRQUNuQixNQUFNLEVBQUVWLElBQUksRUFBRSxHQUFHLE1BQU1WLGlEQUFTLENBQUMsR0FBbUMsT0FBaENZLDJCQUErQixFQUFDLFdBQVM7WUFDM0VHLFNBQVM7Z0JBQUVDLGVBQWUsVUFBd0MsT0FBOUJDLGFBQWFDLE9BQU8sQ0FBQztZQUFXO1FBQ3RFO1FBQ0FaLFNBQVNJLFFBQVFBLEtBQUtMLEtBQUssR0FBR0ssS0FBS0wsS0FBSyxHQUFHLEVBQUU7SUFDL0M7SUFFQSxxQkFDRSw4REFBQ2dCO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDQzs7b0JBQUc7b0JBQVVuQixRQUFRQSxLQUFLb0IsUUFBUSxHQUFHcEIsS0FBS29CLFFBQVEsR0FBRzs7Ozs7OzswQkFDdEQsOERBQUN2Qix1RUFBY0E7Z0JBQUN3QixlQUFlTDs7Ozs7OzBCQUMvQiw4REFBQ0M7Z0JBQUlDLFdBQVU7MEJBQ1pqQixRQUFRQSxNQUFNcUIsR0FBRyxDQUFDLENBQUNDLHFCQUNsQiw4REFBQ3pCLGlFQUFRQTt3QkFBZXlCLE1BQU1BO3dCQUFNQyxRQUFRUjt1QkFBN0JPLEtBQUtFLEVBQUU7Ozs7Z0NBQ25COzs7Ozs7Ozs7Ozs7QUFJYjtHQXhDd0IxQjs7UUFDTEoseURBQU9BOzs7S0FERkkiLCJzb3VyY2VzIjpbIkQ6XFxQcm9qZWN0IE1hbmFnZXIgQXNzaWdubWVudFxcc29jaWFsLW1lZGlhLWZyb250ZW5kXFxzcmNcXHBhZ2VzXFxwb3N0cy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VBdXRoIH0gZnJvbSAnLi4vY29udGV4dC9BdXRoQ29udGV4dCc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCBDcmVhdGVQb3N0Rm9ybSBmcm9tICcuLi9jb21wb25lbnRzL0ZlZWQvQ3JlYXRlUG9zdEZvcm0nO1xyXG5pbXBvcnQgUG9zdENhcmQgZnJvbSAnLi4vY29tcG9uZW50cy9GZWVkL1Bvc3RDYXJkJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBvc3RzKCkge1xyXG4gIGNvbnN0IHsgdXNlciB9ID0gdXNlQXV0aCgpO1xyXG4gIGNvbnN0IFtwb3N0cywgc2V0UG9zdHNdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICAvLyBGZXRjaCBwb3N0cyBvbiBwYWdlIGxvYWRcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2codXNlciwgXCJUVFRUVFRUVFRUVFRUVFRUXCIpXHJcbiAgICBjb25zdCBmZXRjaFBvc3RzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3MuZ2V0KGAke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FQSV9VUkx9L3Bvc3RzYCwge1xyXG4gICAgICAgICAgaGVhZGVyczogeyBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7bG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJyl9YCB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHNldFBvc3RzKGRhdGEucG9zdHMpO1xyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIHNldFBvc3RzKFtdKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yLCBcIkVFRUVFRUVFRUVFRUVFRUVFXCIpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gICAgZmV0Y2hQb3N0cygpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgLy8gUmVmcmVzaCBwb3N0cyBhZnRlciBhIG5ldyBwb3N0IGlzIGNyZWF0ZWRcclxuICBjb25zdCByZWZyZXNoUG9zdHMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGF4aW9zLmdldChgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUElfVVJMfS9wb3N0c2AsIHtcclxuICAgICAgaGVhZGVyczogeyBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7bG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJyl9YCB9LFxyXG4gICAgfSk7XHJcbiAgICBzZXRQb3N0cyhkYXRhICYmIGRhdGEucG9zdHMgPyBkYXRhLnBvc3RzIDogW10pO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInBvc3RzLXBhZ2VcIj5cclxuICAgICAgPGgxPldlbGNvbWUsIHt1c2VyICYmIHVzZXIudXNlcm5hbWUgPyB1c2VyLnVzZXJuYW1lIDogXCJcIn08L2gxPlxyXG4gICAgICA8Q3JlYXRlUG9zdEZvcm0gb25Qb3N0Q3JlYXRlZD17cmVmcmVzaFBvc3RzfSAvPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvc3RzLWxpc3RcIj5cclxuICAgICAgICB7cG9zdHMgPyBwb3N0cy5tYXAoKHBvc3QpID0+IChcclxuICAgICAgICAgIDxQb3N0Q2FyZCBrZXk9e3Bvc3QuaWR9IHBvc3Q9e3Bvc3R9IG9uTGlrZT17cmVmcmVzaFBvc3RzfSAvPlxyXG4gICAgICAgICkpIDogbnVsbH1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZUF1dGgiLCJheGlvcyIsIkNyZWF0ZVBvc3RGb3JtIiwiUG9zdENhcmQiLCJQb3N0cyIsInVzZXIiLCJwb3N0cyIsInNldFBvc3RzIiwiY29uc29sZSIsImxvZyIsImZldGNoUG9zdHMiLCJkYXRhIiwiZ2V0IiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX0FQSV9VUkwiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJlcnJvciIsInJlZnJlc2hQb3N0cyIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwidXNlcm5hbWUiLCJvblBvc3RDcmVhdGVkIiwibWFwIiwicG9zdCIsIm9uTGlrZSIsImlkIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/posts.js\n"));

/***/ })

});