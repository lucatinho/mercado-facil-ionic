(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-list-list-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/list/list.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/list/list.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- cabeçalho pagina -->\n<ion-header>\n  <ion-toolbar color=\"base_header\">\n    <!-- botao voltar -->\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"\"></ion-back-button>\n    </ion-buttons>\n    <!--botao de menu-->\n    <ion-buttons slot=\"end\">\n      <ion-menu-button ionDidOpen=\"true\"></ion-menu-button>\n    </ion-buttons>\n    <!-- titulo -->\n    <ion-title>Nome Mercado</ion-title>\n    <ion-title size=\"small\">Grãos</ion-title>\n  </ion-toolbar>\n  <!-- menu -->\n  <ion-router-outlet id=\"main-content\"></ion-router-outlet>\n  <!-- fim menu -->\n</ion-header>\n<!-- fim cabeçalho pagina -->\n\n<ion-content class=\"ion-padding\">\n  <!-- lista de subprodutos -->\n\n  <!-- produto -->\n  <ion-item-group *ngFor=\"let item of subsubitem; index as i\">\n    <ion-list>\n      <ion-item router-direction=\"forward\" detail=\"true\" (click)=\"onListaPress(item.idproduto)\" routerLink=\"/product\">\n        <ion-img slot=\"start\" src=\"assets/icon/arrozc64.png\"></ion-img>\n        <ion-label>\n          <h2>{{item.nameproduto}}</h2>\n        </ion-label>\n        <!--  <ion-icon slot=\"end\" name=\"chevron-forward-outline\"></ion-icon> -->\n      </ion-item>\n    </ion-list>\n  </ion-item-group>\n  <!-- fim produto -->\n\n<!-- -------------------------------------------------------------------------------------------------------- -->\n\n  <!--botao do carrinho-->\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\" routerLink=\"/carrinho\">\n    <ion-fab-button color=\"icon\">\n      <ion-icon name=\"cart-outline\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n  <!-- fim botao carrinho -->\n\n</ion-content>\n\n<!-- ----------------------------------------------------------------------------------------------------- -->\n\n<!-- menu -->\n<ion-menu side=\"end\" contentId=\"main-content\" type=\"overlay\">\n<!-- titulo -->\n  <ion-header>\n    <ion-toolbar color=\"base_header\">\n      <ion-title>Categorias</ion-title>\n    </ion-toolbar>\n  </ion-header>\n<!-- corpo -->\n  <ion-content>\n\n    <ion-list>\n      <ion-menu-toggle autoHide=\"false\" *ngFor=\"let categoria of subitem\">\n        <ion-item (click)=\"onCategoriaPress(categoria.idcategoria)\" [routerDirection]=\"root\">\n          <ion-icon name=\"mail\" slot=\"start\"></ion-icon>\n          <ion-label>{{ categoria.namecategoria }}</ion-label>\n        </ion-item>\n      </ion-menu-toggle>\n    </ion-list>\n\n  </ion-content>\n\n</ion-menu>\n<!-- fim menu -->");

/***/ }),

/***/ "./src/app/pages/list/list-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/list/list-routing.module.ts ***!
  \***************************************************/
/*! exports provided: ListPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListPageRoutingModule", function() { return ListPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _list_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list.page */ "./src/app/pages/list/list.page.ts");




const routes = [
    {
        path: '',
        component: _list_page__WEBPACK_IMPORTED_MODULE_3__["ListPage"]
    }
];
let ListPageRoutingModule = class ListPageRoutingModule {
};
ListPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ListPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/list/list.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/list/list.module.ts ***!
  \*******************************************/
/*! exports provided: ListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListPageModule", function() { return ListPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _list_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./list-routing.module */ "./src/app/pages/list/list-routing.module.ts");
/* harmony import */ var _list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./list.page */ "./src/app/pages/list/list.page.ts");
/* harmony import */ var src_app_explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/explore-container/explore-container.module */ "./src/app/explore-container/explore-container.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");









let ListPageModule = class ListPageModule {
};
ListPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _list_routing_module__WEBPACK_IMPORTED_MODULE_5__["ListPageRoutingModule"],
            src_app_explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_7__["ExploreContainerComponentModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"].forChild([{ path: '', component: _list_page__WEBPACK_IMPORTED_MODULE_6__["ListPage"] }])
        ],
        declarations: [_list_page__WEBPACK_IMPORTED_MODULE_6__["ListPage"]]
    })
], ListPageModule);



/***/ }),

/***/ "./src/app/pages/list/list.page.scss":
/*!*******************************************!*\
  !*** ./src/app/pages/list/list.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":root {\n  --ion-safe-area-top: 20px;\n  --ion-safe-area-bottom: 22px;\n}\n\nion-img {\n  width: 50px !important;\n  height: 50px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbGlzdC9IOlxcaW9uaWNcXHRjYy9zcmNcXGFwcFxccGFnZXNcXGxpc3RcXGxpc3QucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9saXN0L2xpc3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQUE7RUFDQSw0QkFBQTtBQ0NGOztBREVBO0VBQ0Usc0JBQUE7RUFDQSx1QkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbGlzdC9saXN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpyb290IHtcclxuICAtLWlvbi1zYWZlLWFyZWEtdG9wOiAyMHB4O1xyXG4gIC0taW9uLXNhZmUtYXJlYS1ib3R0b206IDIycHg7XHJcbn1cclxuXHJcbmlvbi1pbWd7XHJcbiAgd2lkdGg6IDUwcHggIWltcG9ydGFudDsgXHJcbiAgaGVpZ2h0IDogNTBweCAhaW1wb3J0YW50O1xyXG59XHJcbiIsIjpyb290IHtcbiAgLS1pb24tc2FmZS1hcmVhLXRvcDogMjBweDtcbiAgLS1pb24tc2FmZS1hcmVhLWJvdHRvbTogMjJweDtcbn1cblxuaW9uLWltZyB7XG4gIHdpZHRoOiA1MHB4ICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogNTBweCAhaW1wb3J0YW50O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/list/list.page.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/list/list.page.ts ***!
  \*****************************************/
/*! exports provided: ListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListPage", function() { return ListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");



let ListPage = class ListPage {
    constructor(menuCtrl) {
        this.menuCtrl = menuCtrl;
        // variavel menu
        this.openMenu = false;
    }
    ngOnInit() {
        // pega valor do mercado e da categoria do data
        //  this.data.currentMercadoSelecionado.subscribe(mercado => this.mercadoSelecionado = mercado);
        //  this.data.currentCategoriaSelecionado.subscribe(categoria => this.categoriaSelecionado = categoria);
        // puxa metodo banco
        this.banco();
    }
    // metodo banco
    banco() {
        fetch('./assets/server/mercadosprod.json').then(res => res.json()).then(json => {
            console.log('server::', json);
            this.server = json;
            this.subitem = this.server[this.mercadoSelecionado].children;
            this.subsubitem = this.server[this.mercadoSelecionado].children[this.categoriaSelecionado].children;
        });
        console.log("Valor do mercado:", this.mercadoSelecionado);
    }
    // faz menu abrir uma vez
    ionViewWillEnter() {
        if (this.openMenu == false) {
            this.menuCtrl.open();
            this.openMenu = true;
        }
    }
};
ListPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"] }
];
ListPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./list.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/list/list.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./list.page.scss */ "./src/app/pages/list/list.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"]])
], ListPage);



/***/ })

}]);
//# sourceMappingURL=pages-list-list-module-es2015.js.map