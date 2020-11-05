function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-pagenotfound-pagenotfound-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/pagenotfound/pagenotfound.page.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/pagenotfound/pagenotfound.page.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesPagenotfoundPagenotfoundPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content>\n  <ion-text color=\"black\"class=\"ion-text-center\" >\n    <h1>Problemas com essa pagina, se voltar a aparecer contate o dono do sistema!</h1>\n    <h2>Contato:</h2>\n    <h3>Suporte@suporte.com</h3>\n    <h3>Whats: (17) 99794-4040</h3>\n  </ion-text>\n</ion-content>\n\n<ion-button color=\"primary\" routerLink=\"/\">\n  <ion-text color=\"light\">Inicio</ion-text>\n</ion-button>\n";
    /***/
  },

  /***/
  "./src/app/pages/pagenotfound/pagenotfound-routing.module.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/pages/pagenotfound/pagenotfound-routing.module.ts ***!
    \*******************************************************************/

  /*! exports provided: PagenotfoundPageRoutingModule */

  /***/
  function srcAppPagesPagenotfoundPagenotfoundRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PagenotfoundPageRoutingModule", function () {
      return PagenotfoundPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _pagenotfound_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./pagenotfound.page */
    "./src/app/pages/pagenotfound/pagenotfound.page.ts");

    var routes = [{
      path: '',
      component: _pagenotfound_page__WEBPACK_IMPORTED_MODULE_3__["PagenotfoundPage"]
    }];

    var PagenotfoundPageRoutingModule = function PagenotfoundPageRoutingModule() {
      _classCallCheck(this, PagenotfoundPageRoutingModule);
    };

    PagenotfoundPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], PagenotfoundPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/pagenotfound/pagenotfound.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/pages/pagenotfound/pagenotfound.module.ts ***!
    \***********************************************************/

  /*! exports provided: PagenotfoundPageModule */

  /***/
  function srcAppPagesPagenotfoundPagenotfoundModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PagenotfoundPageModule", function () {
      return PagenotfoundPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _pagenotfound_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./pagenotfound-routing.module */
    "./src/app/pages/pagenotfound/pagenotfound-routing.module.ts");
    /* harmony import */


    var _pagenotfound_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./pagenotfound.page */
    "./src/app/pages/pagenotfound/pagenotfound.page.ts");

    var PagenotfoundPageModule = function PagenotfoundPageModule() {
      _classCallCheck(this, PagenotfoundPageModule);
    };

    PagenotfoundPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _pagenotfound_routing_module__WEBPACK_IMPORTED_MODULE_5__["PagenotfoundPageRoutingModule"]],
      declarations: [_pagenotfound_page__WEBPACK_IMPORTED_MODULE_6__["PagenotfoundPage"]]
    })], PagenotfoundPageModule);
    /***/
  },

  /***/
  "./src/app/pages/pagenotfound/pagenotfound.page.scss":
  /*!***********************************************************!*\
    !*** ./src/app/pages/pagenotfound/pagenotfound.page.scss ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesPagenotfoundPagenotfoundPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BhZ2Vub3Rmb3VuZC9wYWdlbm90Zm91bmQucGFnZS5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/pages/pagenotfound/pagenotfound.page.ts":
  /*!*********************************************************!*\
    !*** ./src/app/pages/pagenotfound/pagenotfound.page.ts ***!
    \*********************************************************/

  /*! exports provided: PagenotfoundPage */

  /***/
  function srcAppPagesPagenotfoundPagenotfoundPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PagenotfoundPage", function () {
      return PagenotfoundPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var PagenotfoundPage = /*#__PURE__*/function () {
      function PagenotfoundPage() {
        _classCallCheck(this, PagenotfoundPage);
      }

      _createClass(PagenotfoundPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PagenotfoundPage;
    }();

    PagenotfoundPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-pagenotfound',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./pagenotfound.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/pagenotfound/pagenotfound.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./pagenotfound.page.scss */
      "./src/app/pages/pagenotfound/pagenotfound.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], PagenotfoundPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-pagenotfound-pagenotfound-module-es5.js.map