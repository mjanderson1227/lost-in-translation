/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/backend.js":
/*!************************!*\
  !*** ./src/backend.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module 'firebase/app'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module 'firebase/firestore'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n\n\n\n// Our web app's Firebase configuration\nconst firebaseConfig = {\n    apiKey: \"AIzaSyC6VteKfa822wvV7bMquvpKruCoIf2m9F0\",\n    authDomain: \"lost-in-translation-338b5.firebaseapp.com\",\n    projectId: \"lost-in-translation-338b5\",\n    storageBucket: \"lost-in-translation-338b5.appspot.com\",\n    messagingSenderId: \"166555498885\",\n    appId: \"1:166555498885:web:13bb9d6eb320c552f42cec\"\n};\n\n// Initialize Backend\nconst app = Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'firebase/app'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(firebaseConfig);\n\n// Retrieve reference to database\nconst db = Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'firebase/firestore'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(app);\n\n// Collection\nconst colRef = Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'firebase/firestore'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(db, 'leaderboard');\n\n// Get data inside the collection\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module 'firebase/firestore'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(colRef)\n    .then((snapshot) => {\n        console.log(snapshot.docs);\n    });\n\n\n//# sourceURL=webpack://rowdyhacks-2023/./src/backend.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/backend.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;