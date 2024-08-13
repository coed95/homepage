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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _images_majima_jpeg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/majima.jpeg */ \"./src/images/majima.jpeg\");\n/* harmony import */ var _images_majima_footer_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/majima-footer.png */ \"./src/images/majima-footer.png\");\n/* harmony import */ var _images_chapter_1_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/chapter-1.png */ \"./src/images/chapter-1.png\");\n/* harmony import */ var _images_chapter_2_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/chapter-2.png */ \"./src/images/chapter-2.png\");\n/* harmony import */ var _images_chapter_3_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/chapter-3.png */ \"./src/images/chapter-3.png\");\n/* harmony import */ var _images_chapter_4_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./images/chapter-4.png */ \"./src/images/chapter-4.png\");\n/* harmony import */ var _images_chapter_5_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./images/chapter-5.png */ \"./src/images/chapter-5.png\");\n/* harmony import */ var _images_chapter_6_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./images/chapter-6.png */ \"./src/images/chapter-6.png\");\n/* harmony import */ var _images_chapter_7_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./images/chapter-7.png */ \"./src/images/chapter-7.png\");\n/* harmony import */ var _images_chapter_8_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./images/chapter-8.png */ \"./src/images/chapter-8.png\");\n/* harmony import */ var _images_chapter_9_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./images/chapter-9.png */ \"./src/images/chapter-9.png\");\n/* harmony import */ var _images_chapter_10_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./images/chapter-10.png */ \"./src/images/chapter-10.png\");\n/* harmony import */ var _images_chapter_11_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./images/chapter-11.png */ \"./src/images/chapter-11.png\");\n/* harmony import */ var _images_chapter_12_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./images/chapter-12.png */ \"./src/images/chapter-12.png\");\n/* harmony import */ var _images_chapter_13_png__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./images/chapter-13.png */ \"./src/images/chapter-13.png\");\n/* harmony import */ var _images_chapter_14_png__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./images/chapter-14.png */ \"./src/images/chapter-14.png\");\n/* harmony import */ var _images_chapter_15_png__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./images/chapter-15.png */ \"./src/images/chapter-15.png\");\n/* harmony import */ var _images_chapter_16_png__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./images/chapter-16.png */ \"./src/images/chapter-16.png\");\n/* harmony import */ var _images_chapter_17_png__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./images/chapter-17.png */ \"./src/images/chapter-17.png\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nfunction setHeaderImage(src, alt) {\n  var image = document.querySelector('.header img');\n  image.src = src;\n  image.alt = alt;\n}\nfunction setFooterImage(src, alt) {\n  var image = document.querySelector('.footer img');\n  image.src = src;\n  image.alt = alt;\n}\nfunction setChapterImage(numberOfChapters) {\n  var chapterImages = {\n    1: _images_chapter_1_png__WEBPACK_IMPORTED_MODULE_3__,\n    2: _images_chapter_2_png__WEBPACK_IMPORTED_MODULE_4__,\n    3: _images_chapter_3_png__WEBPACK_IMPORTED_MODULE_5__,\n    4: _images_chapter_4_png__WEBPACK_IMPORTED_MODULE_6__,\n    5: _images_chapter_5_png__WEBPACK_IMPORTED_MODULE_7__,\n    6: _images_chapter_6_png__WEBPACK_IMPORTED_MODULE_8__,\n    7: _images_chapter_7_png__WEBPACK_IMPORTED_MODULE_9__,\n    8: _images_chapter_8_png__WEBPACK_IMPORTED_MODULE_10__,\n    9: _images_chapter_9_png__WEBPACK_IMPORTED_MODULE_11__,\n    10: _images_chapter_10_png__WEBPACK_IMPORTED_MODULE_12__,\n    11: _images_chapter_11_png__WEBPACK_IMPORTED_MODULE_13__,\n    12: _images_chapter_12_png__WEBPACK_IMPORTED_MODULE_14__,\n    13: _images_chapter_13_png__WEBPACK_IMPORTED_MODULE_15__,\n    14: _images_chapter_14_png__WEBPACK_IMPORTED_MODULE_16__,\n    15: _images_chapter_15_png__WEBPACK_IMPORTED_MODULE_17__,\n    16: _images_chapter_16_png__WEBPACK_IMPORTED_MODULE_18__,\n    17: _images_chapter_17_png__WEBPACK_IMPORTED_MODULE_19__\n  };\n  var chapterDivs = document.querySelectorAll('.chapter-div');\n  for (var index = 0; index < numberOfChapters; index++) {\n    var image = chapterDivs[index].querySelector('img');\n    image.src = chapterImages[index + 1];\n  }\n}\nfunction setChapterInfo(numberOfChapters) {\n  var chapterDivs = document.querySelectorAll('.chapter-div');\n  var chapters = ['Bound by Oath', 'The Real Estate Broker in the Shadows', 'A Gilded Cage', 'Proof of Resolve', 'An Honest Living', 'The Yakuza Way', 'A Dark Escape', 'Tug of War', 'Ensnared', \"A Man's Worth\", 'A Murky Riverbed', 'Den of Desires', 'Crime and Punishment', 'Unwavering Bonds', 'Scattered Light', 'Proof of Love', 'Black and White'];\n  for (var index = 0; index < numberOfChapters; index++) {\n    var chapterInfo = chapterDivs[index].querySelector('.chapter-info');\n    var title = document.createElement('div');\n    title.classList.add('title');\n    var titleContent = document.createElement('h3');\n    titleContent.textContent = index < 16 ? \"Chapter \".concat(index + 1) : 'Finale';\n    var externalLink = document.createElement('a');\n    externalLink.classList.add('fa');\n    externalLink.classList.add('fa-external-link');\n    externalLink.target = '_blank';\n    if (index < 16) {\n      externalLink.href = \"https://yakuza.fandom.com/wiki/Yakuza_0/Chapter_\".concat(index + 1);\n    } else {\n      externalLink.href = 'https://yakuza.fandom.com/wiki/Yakuza_0/Finale';\n    }\n    title.appendChild(titleContent);\n    title.appendChild(externalLink);\n    var subtitle = document.createElement('h4');\n    subtitle.textContent = chapters[index];\n    var description = document.createElement('p');\n    description.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam id eius hic accusamus minus rerum dicta, porro fuga commodi alias?';\n    chapterInfo.appendChild(title);\n    chapterInfo.appendChild(subtitle);\n    chapterInfo.appendChild(description);\n  }\n}\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  var totalChapters = 17;\n  setHeaderImage(_images_majima_jpeg__WEBPACK_IMPORTED_MODULE_1__, \"Goro\");\n  setChapterImage(totalChapters);\n  setChapterInfo(totalChapters);\n  setFooterImage(_images_majima_footer_png__WEBPACK_IMPORTED_MODULE_2__);\n});\n\n//# sourceURL=webpack://template/./src/index.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n}\n\np {\n    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n    font-size: 1.25rem;\n    line-height: 1.3em;\n}\n\nh1 {\n    font-family: 'Edo SZ';\n}\n\nh2 {\n    font-family: 'Roboto', sans-serif;\n    font-size: 3.125rem;\n}\n\n.fa {\n    display: inline-block;\n    font: normal normal normal 14px/1 FontAwesome;\n    text-rendering: auto;\n}\n\n/* header */\n\n.header {\n    background: linear-gradient(#450a0a, #7f1d1d);\n    margin: auto;\n    position: relative;\n}\n\n.header .wrapper {\n    align-items: center;\n    display: flex;\n    justify-content: center;\n    padding: 50px;\n}\n\n.image-wrapper img {\n    display: block;\n    height: auto;\n    width: 100%;\n}\n\n.about {\n    background-color: white;\n    box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.75);\n    padding: 4rem;\n    width: min(100vw - 2.5rem, 37.5rem);\n}\n\n.about h2 {\n    margin-bottom: 1.25rem;\n}\n\n/* main */\n\n.main .wrapper {\n    margin-block: 5rem;\n    margin-inline: auto;\n    width: min(100% - 6.25rem, 87.5rem);\n}\n\n.chapters {\n    display: grid;\n    gap: 2.5rem;\n    grid-template-columns: repeat(auto-fill, minmax(min(100%, 21.875rem), 1fr));\n    margin-top: 2.5rem;\n}\n\n.box-shadow {\n    box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.75);\n}\n\n.chapter-div img {\n    display: block;\n    height: 15.625rem;\n    object-fit: cover;\n    width: 100%;\n}\n\n.chapter-info {\n    background-color: #ddd;\n    padding: 0.625rem;\n}\n\n.chapter-info .title {\n    display: flex;\n    justify-content: space-between;\n}\n\n.chapter-info h3 {\n    font-size: 1.5rem;\n    margin-bottom: 0.313rem;\n}\n\n.chapter-info h4 {\n    color: rgba(0, 0, 0, 0.75);\n    font-size: 1.125rem;\n    margin-bottom: 0.625rem;\n}\n\n.chapter-info p {\n    font-size: 1rem;\n}\n\n.chapter-info a {\n    color: black;\n    font-size: 1.5rem;\n}\n\n.chapter-info a:visited {\n    color: black;\n    text-decoration: none;\n}\n\n.fa-external-link::before {\n    content: \"\\\\f08e\";\n}\n\n/* footer */\n\n.footer {\n    background: linear-gradient(#450a0a, #7f1d1d);\n    color: white;\n}\n\n.footer .wrapper {\n    display: flex;\n    justify-content: center;\n}\n\n.footer .wrapper > * {\n    padding: 3.75rem 2.5rem;\n}\n\n.contact-info h2 {\n    margin-bottom: 1rem;\n}\n\n.contact-info p {\n    margin-bottom: 1rem;\n}\n\n.fa-phone::before {\n    content: \"\\\\f095\";\n}\n\n.fa-envelope::before {\n    content: \"\\\\f0e0\";\n}\n\n.fa-github::before {\n    content: \"\\\\f09b\";\n}\n\n.fa-linkedin::before {\n    content: \"\\\\f0e1\";\n  \n}\n\n.fa-x-twitter::before {\n    content: \"\\\\f099\";\n}\n\n.social-icons.footer-icons {\n    color: black;\n    justify-content: flex-start;\n}\n\n.social-icons {\n    display: flex;\n    gap: 1.25rem;\n    margin-top: 1.25rem;\n}\n\na.fa {\n    color: black;\n    font-size: 2rem;\n    text-decoration: none;\n}\n\n.footer .image-wrapper {\n    width: min(100vw - 1.25rem, 34.4rem);\n}\n\n/* media */\n\n@media (max-width: 1100px) {\n    .image-wrapper h1 {\n        font-size: 3rem;\n        left: 1rem;\n        text-align: left;\n    }\n\n    .about {\n        margin: auto;\n    }\n\n    .footer .wrapper {\n        align-items: center;\n        flex-direction: column;\n    }\n\n    .contact-info {\n        text-align: center;\n    }\n\n    .social-icons.footer-icons {\n        justify-content: center;\n    }\n\n    .footer .image-wrapper {\n        width: calc(100vw - 2.5rem);\n    }\n}\n\n@media (min-width: 800px) and (max-width: 1100px) {\n    .header .wrapper {\n        display: block;\n    }\n\n    .header .image-wrapper {\n        float: left;\n        height: 22rem;\n        margin-right: 1rem;\n        width: 22rem;\n    }\n\n    .about {\n        margin-top: 3.75rem;\n        width: min(100vw - 2.5rem, 40rem);\n    }\n}\n\n@media (max-width: 800px) {\n    .header .wrapper {\n        flex-direction: column;\n        gap: 1.25rem;\n    }\n\n    .about {\n        margin: 0;\n    }\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://template/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://template/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://template/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://template/./src/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://template/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://template/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://template/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://template/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://template/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://template/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/images/chapter-1.png":
/*!**********************************!*\
  !*** ./src/images/chapter-1.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"bd97a5d2fa1f3fc236d8.png\";\n\n//# sourceURL=webpack://template/./src/images/chapter-1.png?");

/***/ }),

/***/ "./src/images/chapter-10.png":
/*!***********************************!*\
  !*** ./src/images/chapter-10.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"8d98ca566eddaafdcfe8.png\";\n\n//# sourceURL=webpack://template/./src/images/chapter-10.png?");

/***/ }),

/***/ "./src/images/chapter-11.png":
/*!***********************************!*\
  !*** ./src/images/chapter-11.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"48ab91da37281df1b4f0.png\";\n\n//# sourceURL=webpack://template/./src/images/chapter-11.png?");

/***/ }),

/***/ "./src/images/chapter-12.png":
/*!***********************************!*\
  !*** ./src/images/chapter-12.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"9361f55a3702db2c40fa.png\";\n\n//# sourceURL=webpack://template/./src/images/chapter-12.png?");

/***/ }),

/***/ "./src/images/chapter-13.png":
/*!***********************************!*\
  !*** ./src/images/chapter-13.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"a6782f53e516fa93e867.png\";\n\n//# sourceURL=webpack://template/./src/images/chapter-13.png?");

/***/ }),

/***/ "./src/images/chapter-14.png":
/*!***********************************!*\
  !*** ./src/images/chapter-14.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"b7e97f798594b4c2dabb.png\";\n\n//# sourceURL=webpack://template/./src/images/chapter-14.png?");

/***/ }),

/***/ "./src/images/chapter-15.png":
/*!***********************************!*\
  !*** ./src/images/chapter-15.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"217300ebfb28cdaff64d.png\";\n\n//# sourceURL=webpack://template/./src/images/chapter-15.png?");

/***/ }),

/***/ "./src/images/chapter-16.png":
/*!***********************************!*\
  !*** ./src/images/chapter-16.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"323bb74c27bcfdc001e6.png\";\n\n//# sourceURL=webpack://template/./src/images/chapter-16.png?");

/***/ }),

/***/ "./src/images/chapter-17.png":
/*!***********************************!*\
  !*** ./src/images/chapter-17.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"bb49c2fc249cef378b6f.png\";\n\n//# sourceURL=webpack://template/./src/images/chapter-17.png?");

/***/ }),

/***/ "./src/images/chapter-2.png":
/*!**********************************!*\
  !*** ./src/images/chapter-2.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"f1722a189f7a477f8836.png\";\n\n//# sourceURL=webpack://template/./src/images/chapter-2.png?");

/***/ }),

/***/ "./src/images/chapter-3.png":
/*!**********************************!*\
  !*** ./src/images/chapter-3.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"b2bbdcfeecb1b902e40c.png\";\n\n//# sourceURL=webpack://template/./src/images/chapter-3.png?");

/***/ }),

/***/ "./src/images/chapter-4.png":
/*!**********************************!*\
  !*** ./src/images/chapter-4.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"15e0c7d731afcaa62c45.png\";\n\n//# sourceURL=webpack://template/./src/images/chapter-4.png?");

/***/ }),

/***/ "./src/images/chapter-5.png":
/*!**********************************!*\
  !*** ./src/images/chapter-5.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"26d23df564f4d99533e4.png\";\n\n//# sourceURL=webpack://template/./src/images/chapter-5.png?");

/***/ }),

/***/ "./src/images/chapter-6.png":
/*!**********************************!*\
  !*** ./src/images/chapter-6.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"f06d4963e5fc5d43f1f6.png\";\n\n//# sourceURL=webpack://template/./src/images/chapter-6.png?");

/***/ }),

/***/ "./src/images/chapter-7.png":
/*!**********************************!*\
  !*** ./src/images/chapter-7.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"803ef0928b59ad0e0b37.png\";\n\n//# sourceURL=webpack://template/./src/images/chapter-7.png?");

/***/ }),

/***/ "./src/images/chapter-8.png":
/*!**********************************!*\
  !*** ./src/images/chapter-8.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"cc1a0c81d901e17fbb92.png\";\n\n//# sourceURL=webpack://template/./src/images/chapter-8.png?");

/***/ }),

/***/ "./src/images/chapter-9.png":
/*!**********************************!*\
  !*** ./src/images/chapter-9.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"3a951c6da1e9d819d4df.png\";\n\n//# sourceURL=webpack://template/./src/images/chapter-9.png?");

/***/ }),

/***/ "./src/images/majima-footer.png":
/*!**************************************!*\
  !*** ./src/images/majima-footer.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"b26871b7bf068af7a1b1.png\";\n\n//# sourceURL=webpack://template/./src/images/majima-footer.png?");

/***/ }),

/***/ "./src/images/majima.jpeg":
/*!********************************!*\
  !*** ./src/images/majima.jpeg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"ed3a2002b5de734dc42b.jpeg\";\n\n//# sourceURL=webpack://template/./src/images/majima.jpeg?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;