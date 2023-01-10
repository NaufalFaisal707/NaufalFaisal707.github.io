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
    'icon': {
      'name': '<i class="fa-solid fa-house drac-text-purple-cyan"></i>',
      'border-color': 'border-image: linear-gradient(135deg,var(--purple), var(--cyan)) 10;'
    },
    'structure': {
      'class': 'vh-100 d-flex flex-column-reverse flex-lg-row justify-content-center align-items-center',
      'element': function element() {
        return "\n                    <div class=\"text-center text-lg-start\">\n                        <p class=\"h1 fw-bold\">".concat(web.ownerBio[0].split('[nama]').join(web.ownerName), "</p>\n                        <p class=\"fs-6\">").concat(web.ownerBio[1].split('[umur]').join(web.ownerAge()), "</p>\n                        <div class=\"fs-4 d-flex justify-content-center justify-content-lg-start gap-5 pt-2\">\n                            ").concat(web.ownerSocial.map(function (val) {
          return "<a href=\"".concat(val.url, "\" aria-label=\"link media sosial\" target=\"_blank\" class=\"url drac-text-white\">").concat(val.icon, "</a>");
        }).join(''), "\n                        </div>                \n                    </div>\n                    <img class=\"col-10 col-sm-6 col-md-6 col-lg-6\" src=\"").concat(web.webBrandPic, "\" alt=\"\" srcset=\"\">\n                    ");
      }
    }
  }, {
    'name': 'Pendidikan',
    'icon': {
      'name': '<i class="fa-solid fa-graduation-cap drac-text-pink-purple"></i>',
      'border-color': 'border-image: linear-gradient(135deg,var(--pink), var(--purple)) 10;'
    },
    'structure': {
      'class': 'vh-100 d-flex flex-column justify-content-md-evenly align-items-center auto-pad',
      'element': function element(name, icon, border) {
        return "\n                    <div class=\"h4 py-4 py-md-0\">\n                        ".concat(icon, " ").concat(name, "\n                    </div>\n                    <div class=\"d-flex flex-wrap flex-xl-row flex-column gap-5\">\n                    ").concat(web.person.education.map(function (val) {
          return "\n                        <div class=\"border-left ps-4 py-2 pe-4\" style=\"".concat(border, "\">\n                                <div class=\"card-body\">\n                                    <h4 class=\"card-title drac-text-pink-purple\">").concat(val.year, "</h4>\n                                    <p class=\"card-text fs-5\">").concat(val.school, "</p>\n                                </div>\n                            </div>\n                        ");
        }).join(''), "\n                    </div>");
      }
    }
  }, {
    'name': 'Kemampuan & Keahlian',
    'icon': {
      'name': '<i class="fa-solid fa-wand-magic-sparkles drac-text-yellow-pink"></i>',
      'border-color': 'border-image: linear-gradient(135deg,var(--yellow), var(--pink)) 10;'
    },
    'structure': {
      'class': 'vh-100 d-flex flex-column justify-content-md-evenly align-items-center auto-pad',
      'element': function element(name, icon) {
        return "\n                    <div class=\"h4 py-4 py-md-0\">\n                        ".concat(icon, " ").concat(name, "\n                    </div>\n                    <div class=\"d-flex justify-content-center flex-wrap gap-5\">\n                        tes\n                    </div>\n                    ");
      }
    }
  }, {
    'name': 'Proyek Saya',
    'icon': {
      'name': '<i class="fa-solid fa-diagram-project drac-text-cyan-green"></i>',
      'border-color': 'border-image: linear-gradient(135deg,var(--cyan), var(--green)) 10;'
    },
    'structure': {
      'class': 'vh-100 d-flex flex-column justify-content-md-evenly align-items-center auto-pad',
      'element': function element(name, icon) {
        return "\n                    <div class=\"h4 py-4 py-md-0\">\n                        ".concat(icon, " ").concat(name, "\n                    </div>\n                    ");
      }
    }
  }, {
    'name': 'Sertifikat',
    'icon': {
      'name': '<i class="fa-solid fa-award drac-text-yellow-pink"></i>',
      'border-color': 'border-image: linear-gradient(135deg,var(--yellow), var(--pink)) 10;'
    },
    'structure': {
      'class': 'vh-100 d-flex flex-column justify-content-md-evenly align-items-center auto-pad',
      'element': function element(name, icon) {
        return "\n                    <div class=\"h4 py-4 py-md-0\">\n                        ".concat(icon, " ").concat(name, "\n                    </div>\n                    ");
      }
    }
  }, {
    'name': 'Kontak Saya',
    'icon': {
      'name': '<i class="fa-solid fa-headset drac-text-purple-cyan"></i>',
      'border-color': 'border-image: linear-gradient(135deg,var(--purple), var(--cyan)) 10;'
    },
    'structure': {
      'class': 'vh-100 d-flex flex-column justify-content-md-evenly align-items-center auto-pad',
      'element': function element(name, icon) {
        return "\n                    <div class=\"h4 py-4 py-md-0\">\n                        ".concat(icon, " ").concat(name, "\n                    </div>\n                    ");
      }
    }
  }];

  // Body structure
  var body = $('body');
  body.attr({
    'data-bs-spy': 'scroll',
    'data-bs-target': '#mynav'
  }).addClass('user-select-none');

  // navbar
  body.html("\n    <nav id=\"mynav\" class=\"navbar fixed-top navbar-expand-xl navbar-dark\">\n        <div class=\"container\">\n            <a class=\"navbar-brand drac-bg-animated brand-clip\" href=\"#\">".concat(web.webBrandName, "</a>\n            <button class=\"navbar-toggler\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#navbarNav\" aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n                <span class=\"navbar-toggler-icon\"></span>\n            </button>\n            <div class=\"collapse navbar-collapse\" id=\"navbarNav\">\n                <ul class=\"navbar-nav ms-auto\">\n                    ").concat(navItems.map(function (val, inx) {
    return "<li class=\"nav-item\"><a class=\"nav-link\" style=\"".concat(val['icon']['border-color'], "\" href=\"#page").concat(inx, "\">").concat(val['icon']['name'], " ").concat(val['name'], "</a></li>");
  }).join(''), "\n                </ul>\n            </div>\n        </div>\n    </nav>\n    "));

  // body
  $.each(navItems, function (inx, val) {
    body.append("<section class=\"container\" id=\"page".concat(inx, "\"><div class=\"").concat(val['structure']['class'], "\">").concat(val['structure']['element'](val['name'], val['icon']['name'], val['icon']['border-color']), "</div></section>"));
  });
});

// page script
$(window).scroll(function () {
  window.pageYOffset >= 100 ? $('nav').addClass('shadow').css({
    'transition': '.2s',
    'background-color': 'var(--blackSecondary)'
  }) : $('nav').removeClass('shadow').css('background-color', 'transparent');
});

// body.append(`<section id="page${inx}"/>`)
// inx === 0
//     ? $(`section#page${inx}`).addClass('container')
//     .html(`
//     <div class="vh-100 d-flex flex-column-reverse flex-lg-row justify-content-center align-items-center">
//         <div class="text-center text-lg-start">
//             <p class="h1">
//                 ${web.ownerBio[0].split('[nama]').join(web.ownerName)}
//             </p>
//             <p class="fs-6">
//                 ${web.ownerBio[1].split('[umur]').join(web.ownerAge())}
//             </p>
//             <div class="fs-4 d-flex justify-content-center justify-content-lg-start gap-5 pt-2">
//                 ${
//                     web.ownerSocial.map(val => {
//                         return `
//                             <a href="${val.url}" aria-label="link media sosial" target="_blank" class="url drac-text-white">${val.icon}</a>
//                             `
//                     }).join('')
//                 }
//             </div>                
//         </div>
//         <img class="col-10 col-sm-6 col-md-6 col-lg-6" src="${web.webBrandPic}" width="auto" height="auto" alt="" srcset="">
//     </div>
//     `)

// : $(`section#page${inx}`).addClass('container')
// .html(`
// <div class="min-vh-100 d-flex flex-column justify-content-md-evenly align-items-center auto-pad">
//     <div class="h4 py-4 py-md-0">
//         ${val['icon']} ${val['name']}
//     </div>
//     <div class="d-flex justify-content-center flex-wrap gap-5">
//     ${
//         inx === 1
//         ? web.person.education.map(val => {
//             return `
// <div variant="subtle" class="drac-box drac-card drac-card-subtle drac-border-white drac-bg-white drac-p-md">
//     <div class="card-img-top school-image rounded" style="${val.picURL}"></div>
//     <div class="card-body pt-4">
//         <h4 class="card-title drac-text-pink">${val.year}</h4>
//         <p class="card-text fs-5">${val.school}</p>
//     </div>
// </div>
//             `
//         }).join('')
//     : inx === 1
//         ? `<div>jancok pristel</div>`
//     : ``
//     }
//     </div>
// </div>
// `)
// })

/***/ }),

/***/ "./src/js/profile.js":
/*!***************************!*\
  !*** ./src/js/profile.js ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = {
  webBrandName: 'Naufal.f',
  webBrandPic: __webpack_require__(/*! ../asset/img/Page.png */ "./src/asset/img/Page.png"),
  ownerName: '<span class="drac-text-red drac-bg-animated clip">Naufal</span> Faisal',
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
      school: 'SDS Binamuslimin'
    }, {
      year: '2017 - 2019',
      school: 'SMP KP Ciparay'
    }, {
      year: '2020 - 2023',
      school: 'SMK 2 LPPM-RI Majalaya'
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