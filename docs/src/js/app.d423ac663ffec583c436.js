/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! ./js/page */ "./src/js/page.js");
__webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
__webpack_require__(/*! ./css/default.css */ "./src/css/default.css");

/***/ }),

/***/ "./src/js/page.js":
/*!************************!*\
  !*** ./src/js/page.js ***!
  \************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
var web = __webpack_require__(/*! ./profile */ "./src/js/profile.js");
$(function () {
  $('style#remove').remove();

  // Page title
  document.title = web.webTitle();

  // navbar indicator
  var navItems = [{
    'name': 'beranda',
    'icon': '<i class="fa-solid fa-house"></i>'
  }, {
    'name': 'Pendidikan',
    'icon': '<i class="fa-solid fa-graduation-cap"></i>'
  }, {
    'name': 'Kemampuan & Keahlian',
    'icon': '<i class="fa-solid fa-wand-magic-sparkles"></i>'
  }, {
    'name': 'Proyek Saya',
    'icon': '<i class="fa-solid fa-diagram-project"></i>'
  }, {
    'name': 'Sertifikat',
    'icon': '<i class="fa-solid fa-award"></i>'
  }, {
    'name': 'Kontak Saya',
    'icon': '<i class="fa-solid fa-headset"></i>'
  }];

  // Body structure
  var body = $('body');
  body.attr({
    'data-bs-spy': 'scroll',
    'data-bs-target': '#mynav'
  }).addClass('user-select-none');
  // navbar
  body.html("\n    <nav id=\"mynav\" class=\"navbar fixed-top navbar-expand-lg navbar-dark\">\n        <div class=\"container\">\n            <a class=\"navbar-brand\" href=\"#\">Naufal.f</a>\n            <button class=\"navbar-toggler\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#navbarNav\"\n                aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n                <span class=\"navbar-toggler-icon\"></span>\n            </button>\n            <div class=\"collapse navbar-collapse\" id=\"navbarNav\">\n                <ul class=\"navbar-nav ms-auto\">\n                    ".concat(navItems.map(function (val, inx) {
    return "\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#page".concat(inx, "\">\n                                    ").concat(val['icon'], " ").concat(val['name'], "\n                                </a>\n                            </li>");
  }).join(''), "\n                </ul>\n            </div>\n        </div>\n    </nav>\n    "));

  // body
  $.each(navItems, function (inx, val) {
    body.append("<section id=\"page".concat(inx, "\"/>"));
    inx === 0 ? $("section#page".concat(inx)).addClass('container').html("\n            <div class=\"vh-100 d-flex flex-column-reverse flex-lg-row justify-content-center align-items-center\">\n                <div class=\"text-center text-lg-start\">\n                    <p class=\"h1\">\n                        ".concat(web.ownerBio[0].split('[nama]').join(web.ownerName), "\n                    </p>\n                    <p class=\"fs-6\">\n                        ").concat(web.ownerBio[1].split('[umur]').join(web.ownerAge()), "\n                    </p>\n                    <div class=\"fs-4 d-flex justify-content-center justify-content-lg-start gap-5 pt-2\">\n                        ").concat(web.ownerSocial.map(function (val) {
      return "\n                                    <a href=\"".concat(val.url, "\" aria-label=\"link media sosial\" target=\"_blank\" class=\"url drac-text-white\">").concat(val.icon, "</a>\n                                    ");
    }).join(''), "\n                    </div>                \n                </div>\n                <img class=\"col-10 col-sm-6 col-md-6 col-lg-6\" src=\"").concat(web.webBrandPic, "\" width=\"auto\" height=\"auto\" alt=\"\" srcset=\"\">\n            </div>\n            ")) : $("section#page".concat(inx)).addClass('container').html("\n        <div class=\"min-vh-100 d-flex flex-column justify-content-md-evenly align-items-center auto-pad\">\n            <div class=\"h4 py-4 py-md-0\">\n                ".concat(val['icon'], " ").concat(val['name'], "\n            </div>\n            <div class=\"d-flex justify-content-center flex-wrap gap-5\">\n            ").concat(inx === 1 ? web.person.education.map(function (val) {
      return "\n                    <div variant=\"subtle\" class=\"drac-box drac-card drac-card-subtle drac-border-white drac-bg-white drac-p-md\">\n                        <div class=\"card-img-top school-image rounded\" style=\"".concat(val.picURL, "\"></div>\n                        <div class=\"card-body pt-4\">\n                            <h4 class=\"card-title drac-text-pink\">").concat(val.year, "</h4>\n                            <p class=\"card-text fs-5\">").concat(val.school, "</p>\n                        </div>\n                    </div>\n                    ");
    }).join('') : inx === 1 ? "<div>jancok pristel</div>" : "", "\n            </div>\n        </div>\n        "));
  });

  // page script
  $(window).scroll(function () {
    window.pageYOffset >= 100 ? $('nav').addClass('drac-bg-black-secondary shadow').css('transition', '.2s') : $('nav').removeClass('drac-bg-black-secondary shadow');
  });

  // `
  //     <div class="card bg-transparent border-start border-5 text-primary" style="width: 20rem">
  // <div class="card-img-top school-image"></div>
  // <div class="card-body">
  //     <h4 class="card-title txt-pink">${val.year}</h4>
  //     <p class="card-text fs-5">${val.school}</p>
  //     <button class="drac-btn drac-bg-purple drac-btn-outline drac-text-purple">Outline</button>
  // </div>
  //     </div>
  // `

  // inx === 0
  //     ? (function(){
  //         $(`section#${inx}`).append('<div class="container"/>').ready(() => {
  //             $('section div.container').append('<div class="vh-100 d-flex flex-lg-row flex-column-reverse justify-content-center align-items-center"/>').ready(() => {
  //                 const ctn0 = $('section div.container div.vh-100')
  //                 ctn0.append('<span class="text-center text-lg-start"/>').ready(() => {
  //                     const text0 = $('section span.text-center')
  //                     text0.append('<p class="h1"/>').ready(() => $('section span p.h1').html(web.ownerBio[0].split('[nama]').join(web.ownerName)))
  //                     text0.append('<p class="fs-6"/>').ready(() => $('section span p.fs-6').html(web.ownerBio[1].split('[umur]').join(web.ownerAge())))
  //                 })
  //                 ctn0.append(`<img class="col-10 col-md-8 col-lg-6" src="${web.webBrandPic}" alt="" srcset="">`)
  //             })
  //         })
  //     }())
  // : $(`section#${inx}`).addClass('vh-100 container').text('anjay coy')
  // .ready(() => {
  //     $('nav.navbar').append('<div class="container"/>').ready(() => {
  //         const navContaienr = $('nav div.container')
  //         navContaienr.append('<a class="navbar-brand"/>').ready(() => $('nav a.navbar-brand').text(web.webBrandName).attr('href', web.webBrandUrl))
  //         navContaienr.append('<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"/>').ready(() => $('nav button.navbar-toggler').append('<span class="navbar-toggler-icon"/>'))
  //         navContaienr.append('<div class="collapse navbar-collapse" id="navbarNav"/>').ready(() => {
  //             $('nav div.collapse').append('<ul class="navbar-nav ms-auto"/>').ready(() => {
  //                 $.each(navItems, function(inx, val){
  //                     $('nav ul.navbar-nav').append(`<li class="nav-item"><a class="nav-link" href="#${inx}"><i class="fa-solid ${val['icon']}"></i> ${val['name']}</a></li>`)
  //                 })
  //             })
  //         })
  //     })
  // })      

  // $('body')
  //     .children('nav')
  //         .text('anjay coy').addClass('h1')
});

/***/ }),

/***/ "./src/js/profile.js":
/*!***************************!*\
  !*** ./src/js/profile.js ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = {
  webBrandName: 'Naufal.f',
  webBrandUrl: '#',
  webBrandPic: __webpack_require__(/*! ../asset/img/Page.png */ "./src/asset/img/Page.png"),
  ownerName: '<span class="drac-text-red">Naufal</span> Faisal',
  ownerBio: ["Hai!, Saya [nama]", 'sekarang saya berumur [umur] tahun, dan saya senang mempelajari sesuatu yang berhubugnan dengan perkembangan teknologi, programing dan editing.'],
  ownerBirthYear: 2005,
  ownerSocial: [{
    icon: '<i class="bi bi-facebook"></i>',
    url: '#'
  }, {
    icon: '<i class="bi bi-instagram"></i>',
    url: '#'
  }, {
    icon: '<i class="bi bi-twitter"></i>',
    url: '#'
  }, {
    icon: '<i class="bi bi-github"></i>',
    url: '#'
  }],
  ownerContact: {
    email: '',
    telegram: ''
  },
  person: {
    education: [{
      year: '2010 - 2016',
      school: 'SDS Binamuslimin',
      picURL: "background-image: url('".concat(__webpack_require__(/*! ../asset/img/pic0.jpg */ "./src/asset/img/pic0.jpg"), "')")
    }, {
      year: '2017 - 2019',
      school: 'SMP KP Ciparay',
      picURL: "background-image: url('".concat(__webpack_require__(/*! ../asset/img/pic2.jpg */ "./src/asset/img/pic2.jpg"), "')")
    }, {
      year: '2020 - 2023',
      school: 'SMK 2 LPPM-RI Majalaya',
      picURL: "background-image: url('".concat(__webpack_require__(/*! ../asset/img/pic1.jpg */ "./src/asset/img/pic1.jpg"), "')")
    }],
    skill: {}
  },
  // function
  ownerAge: function ownerAge() {
    return new Date().getFullYear() - this.ownerBirthYear;
  },
  webTitle: function webTitle() {
    return "".concat(this.webBrandName, " Web Portpolio");
  }
};

/***/ }),

/***/ "./src/css/default.css":
/*!*****************************!*\
  !*** ./src/css/default.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/asset/img/Page.png":
/*!********************************!*\
  !*** ./src/asset/img/Page.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "src/img/5d277e4afa1a623f8e74.png";

/***/ }),

/***/ "./src/asset/img/pic0.jpg":
/*!********************************!*\
  !*** ./src/asset/img/pic0.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "src/img/4f6c8c97bd5b591605d5.jpg";

/***/ }),

/***/ "./src/asset/img/pic1.jpg":
/*!********************************!*\
  !*** ./src/asset/img/pic1.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "src/img/a868a577f847b38555ce.jpg";

/***/ }),

/***/ "./src/asset/img/pic2.jpg":
/*!********************************!*\
  !*** ./src/asset/img/pic2.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "src/img/6bc0d9143dcdb4932906.jpg";

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
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
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
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl + "../../";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"app": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunknaufalfaisal707_github_io"] = self["webpackChunknaufalfaisal707_github_io"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_jquery_dist_jquery_js-node_modules_bootstrap_dist_css_bootstrap_min_css--3283a1"], () => (__webpack_require__("./src/app.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;