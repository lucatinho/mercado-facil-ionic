(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab3-tab3-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/tab3.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/tab3.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"false\">\n  <ion-toolbar color=\"base_header\">\n    <!-- botao de refresh -->\n    <!-- <ion-buttons slot=\"end\">\n      <ion-button (click)=\"getListaMercado()\">\n        <ion-icon name=\"refresh-circle-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons> -->\n\n    <ion-title class=\"ion-text-center\">\n      Lista de Compras\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n\n  <ion-list>\n    <ion-item-sliding *ngFor=\"let item of listaProduto; index as i\">\n      <ion-item (click)=postListaSelecionada(item)>\n\n        <ion-thumbnail slot=\"start\">\n          <img src={{item.imgMercado}}>\n        </ion-thumbnail>\n\n        <ion-label>\n          <!--Usuario pode escolher o nome da lista-->\n          <h3>{{item.titulo}}</h3>\n          <p>{{item.nomeMercado}}</p>\n          <p>{{item.data | date:'dd/MM/yy'}}</p>\n          <!-- <p>{{item.totalCompra | currency:'BRL'}}</p> -->\n        </ion-label>\n        <!--botão coração do favorito-->\n        <ion-buttons slot=\"end\">\n          <ion-button>\n            <ion-icon color=\"danger\" name=\"heart\"></ion-icon> \n          </ion-button>\n        </ion-buttons>\n\n      </ion-item>\n      <!--Retirar produto-->\n      <ion-item-options (click)=\"removeItemLista(item)\" side=\"end\">\n        <ion-item-option color=\"danger\">\n          <ion-icon slot=\"icon-only\" name=\"trash\"></ion-icon>\n        </ion-item-option>\n      </ion-item-options>\n    </ion-item-sliding>\n  </ion-list>\n\n  <ion-list *ngIf=\"valideitor == true\">\n\n    <!-- <ion-label>\n      <p>Você ainda não tem uma lista salva.</p>\n    </ion-label> -->\n    <ion-label>\n      <p>&nbsp;&nbsp;&nbsp;&nbsp;\n        No carrinho de compras aperte nesse ícone <ion-icon name=\"save-outline\" style=\"zoom:1.5;\">\n        </ion-icon> para adicionar uma lista</p>\n    </ion-label>\n   \n</ion-list>\n</ion-content>");

/***/ }),

/***/ "./src/app/tab3/tab3.module.ts":
/*!*************************************!*\
  !*** ./src/app/tab3/tab3.module.ts ***!
  \*************************************/
/*! exports provided: Tab3PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab3PageModule", function() { return Tab3PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _tab3_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab3.page */ "./src/app/tab3/tab3.page.ts");
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../explore-container/explore-container.module */ "./src/app/explore-container/explore-container.module.ts");








let Tab3PageModule = class Tab3PageModule {
};
Tab3PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_7__["ExploreContainerComponentModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _tab3_page__WEBPACK_IMPORTED_MODULE_6__["Tab3Page"] }])
        ],
        declarations: [_tab3_page__WEBPACK_IMPORTED_MODULE_6__["Tab3Page"]]
    })
], Tab3PageModule);



/***/ }),

/***/ "./src/app/tab3/tab3.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab3/tab3.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content ion-toolbar {\n  --background: translucent;\n}\n\nion-title {\n  --color: #ffffff;\n}\n\nion-thumbnail {\n  --border-radius:10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFiMy9IOlxcaW9uaWNcXHRjYy9zcmNcXGFwcFxcdGFiM1xcdGFiMy5wYWdlLnNjc3MiLCJzcmMvYXBwL3RhYjMvdGFiMy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBQTtBQ0NGOztBRENBO0VBQ0UsZ0JBQUE7QUNFRjs7QURDQTtFQUNFLG9CQUFBO0FDRUYiLCJmaWxlIjoic3JjL2FwcC90YWIzL3RhYjMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQgaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zbHVjZW50O1xufVxuaW9uLXRpdGxle1xuICAtLWNvbG9yOiAjZmZmZmZmO1xufVxuXG5pb24tdGh1bWJuYWlsIHtcbiAgLS1ib3JkZXItcmFkaXVzOjEwcHg7XG59IiwiaW9uLWNvbnRlbnQgaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zbHVjZW50O1xufVxuXG5pb24tdGl0bGUge1xuICAtLWNvbG9yOiAjZmZmZmZmO1xufVxuXG5pb24tdGh1bWJuYWlsIHtcbiAgLS1ib3JkZXItcmFkaXVzOjEwcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/tab3/tab3.page.ts":
/*!***********************************!*\
  !*** ./src/app/tab3/tab3.page.ts ***!
  \***********************************/
/*! exports provided: Tab3Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab3Page", function() { return Tab3Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _shared_var_usuario_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/var-usuario.service */ "./src/app/shared/var-usuario.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _tabs_tabs_functions_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../tabs/tabs-functions.service */ "./src/app/tabs/tabs-functions.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");







let Tab3Page = class Tab3Page {
    constructor(storage, varUser, router, tabsFunctions, alertController) {
        this.storage = storage;
        this.varUser = varUser;
        this.router = router;
        this.tabsFunctions = tabsFunctions;
        this.alertController = alertController;
        this.listaProduto = [];
    }
    ngOnInit() {
        this.getListaMercado();
        // this.remove();
    }
    getListaMercado() {
        this.tabsFunctions.getListaMercado();
        this.tabsFunctions.serviceListaCompra
            .subscribe(data => (this.listaProduto = data));
        console.log("ver: ", this.listaProduto);
        this.tabsFunctions.serviceListaCompraValideitor
            .subscribe(data => (this.valideitor = data));
    }
    removeItemLista(item) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                // header: 'Alert',
                // subHeader: 'Remover lista',
                message: 'Deseja remover a lista de compra ' + item.titulo + ' ?',
                buttons: [
                    {
                        text: 'Cancelar',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (blah) => {
                            console.log('Confirm Cancel: blah');
                        }
                    }, {
                        text: 'Sim',
                        handler: () => {
                            console.log('Confirm Okay');
                            console.log("veio: ", item);
                            var index = this.listaProduto.indexOf(item);
                            this.listaProduto.splice(index, 1);
                            console.log("como ficou: ", this.listaProduto);
                            // envia para o storage 
                            this.storage.set("listaMercado", this.listaProduto).then(() => {
                                console.log("listaMercado salvo");
                            });
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    DeleteLista() {
        this.storage.remove("listaMercado").then(() => {
            console.log("listaMercado deletado");
        });
    }
    postListaSelecionada(infoCliente) {
        this.varUser.postListaCompraSelecionada(infoCliente);
        this.router.navigate(["/lista-compras"]);
    }
};
Tab3Page.ctorParameters = () => [
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"] },
    { type: _shared_var_usuario_service__WEBPACK_IMPORTED_MODULE_3__["VarUsuarioService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _tabs_tabs_functions_service__WEBPACK_IMPORTED_MODULE_5__["TabsFunctionsService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"] }
];
Tab3Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tab3',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./tab3.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/tab3.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./tab3.page.scss */ "./src/app/tab3/tab3.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"],
        _shared_var_usuario_service__WEBPACK_IMPORTED_MODULE_3__["VarUsuarioService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        _tabs_tabs_functions_service__WEBPACK_IMPORTED_MODULE_5__["TabsFunctionsService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"]])
], Tab3Page);



/***/ })

}]);
//# sourceMappingURL=tab3-tab3-module-es2015.js.map