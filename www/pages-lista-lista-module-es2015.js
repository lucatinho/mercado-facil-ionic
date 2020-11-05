(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-lista-lista-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/lista/lista.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/lista/lista.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- cabeçalho pagina -->\n<ion-header>\n  <ion-toolbar color=\"base_header\">\n    <!-- botao voltar -->\n    <ion-buttons slot=\"start\">\n      <ion-icon name=\"arrow-back-outline\" style=\"zoom:1.5;\" class=\"voltar\" (click)=\"back()\"></ion-icon>\n      <!-- <ion-back-button defaultHref=\"\"></ion-back-button> -->\n    </ion-buttons>\n    <!--botao de menu-->\n    <ion-buttons slot=\"end\">\n      <ion-menu-button ionDidOpen=\"true\"></ion-menu-button>\n    </ion-buttons>\n    <!-- titulo -->\n    <ion-title>{{ nomeMercado }}</ion-title>\n    <ion-title size=\"small\">{{ nomeCategoria }}</ion-title>\n  </ion-toolbar>\n  <!-- menu -->\n  <ion-router-outlet id=\"main-content\"></ion-router-outlet>\n  <!-- fim menu -->\n</ion-header>\n<!-- fim cabeçalho pagina -->\n\n<ion-content class=\"ion-padding\">\n\n  <!-- mensagem sem selecionar lista -->\n    <ion-item *ngIf=\"selecionouCategoria == 1\">\n      <ion-label>\n        <p>Por favor selecione uma categoria.</p>\n      </ion-label>\n    </ion-item>\n<!-- mercado sem esse tipo de produto -->\n    <!-- <ion-item *ngIf=\"selecionouCategoria == 2\">\n      <ion-label>\n        <p>Mercado sem esse tipo de produto, selecione outra categoria.</p>\n      </ion-label>\n    </ion-item> -->\n\n  <!-- lista de subprodutos -->\n  <ion-item-group *ngFor=\"let item of categoriaSelecionado; index as i\">\n    <ion-list *ngIf=\"item.comparador != 1\">\n      <ion-item router-direction=\"forward\" detail=\"true\"\n        (click)=\"onListaPress(item.idSubCategoria);postNomeSubCategoriaSelecionado(item.nomeSubCategoria)\"\n        routerLink=\"/product\">\n\n        <!-- <ion-img slot=\"start\" src=\"https://i.imgur.com/LDIM9cG.png\"></ion-img> -->\n        <ion-img slot=\"start\" src={{item.imgSubCategoria}}></ion-img>\n        <ion-label>\n          <h2>{{item.nomeSubCategoria}}</h2>\n        </ion-label>\n        <!--  <ion-icon slot=\"end\" name=\"chevron-forward-outline\"></ion-icon> -->\n      </ion-item>\n    </ion-list>\n  </ion-item-group>\n  <!-- fim produto -->\n\n  <!-- -------------------------------------------------------------------------------------------------------- -->\n\n  <!--botao do carrinho-->\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\" routerLink=\"/carrinho\" (click)=informarCliente()>\n    <ion-fab-button color=\"icon\">\n      <ion-icon name=\"cart-outline\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n  <!-- fim botao carrinho -->\n\n</ion-content>\n\n<!-- ----------------------------------------------------------------------------------------------------- -->\n\n<!-- menu -->\n<ion-menu side=\"end\" contentId=\"main-content\" type=\"overlay\">\n  <!-- titulo -->\n  <ion-header>\n    <ion-toolbar color=\"base_header\">\n      <ion-title>Categorias</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  <!-- corpo -->\n  <ion-content>\n\n    <ion-list>\n      <ion-menu-toggle autoHide=\"false\" *ngFor=\"let categoria of categorias\">\n        <ion-item (click)=\"onCategoriaPress(categoria.subCategoria);nomeCategoriaSelecionada(categoria.nomeCategoria)\"\n          routerDirection=\"root\">\n          <ion-icon name=\"add-circle-outline\" slot=\"start\"></ion-icon>\n          <ion-label>{{ categoria.nomeCategoria }}</ion-label>\n        </ion-item>\n      </ion-menu-toggle>\n    </ion-list>\n\n  </ion-content>\n\n</ion-menu>\n<!-- fim menu -->");

/***/ }),

/***/ "./src/app/pages/lista/lista-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/lista/lista-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: ListaPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListaPageRoutingModule", function() { return ListaPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _lista_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lista.page */ "./src/app/pages/lista/lista.page.ts");




const routes = [
    {
        path: '',
        component: _lista_page__WEBPACK_IMPORTED_MODULE_3__["ListaPage"]
    }
];
let ListaPageRoutingModule = class ListaPageRoutingModule {
};
ListaPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ListaPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/lista/lista.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/lista/lista.module.ts ***!
  \*********************************************/
/*! exports provided: ListaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListaPageModule", function() { return ListaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _lista_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lista-routing.module */ "./src/app/pages/lista/lista-routing.module.ts");
/* harmony import */ var _lista_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lista.page */ "./src/app/pages/lista/lista.page.ts");







let ListaPageModule = class ListaPageModule {
};
ListaPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _lista_routing_module__WEBPACK_IMPORTED_MODULE_5__["ListaPageRoutingModule"]
        ],
        declarations: [_lista_page__WEBPACK_IMPORTED_MODULE_6__["ListaPage"]]
    })
], ListaPageModule);



/***/ }),

/***/ "./src/app/pages/lista/lista.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/lista/lista.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":root {\n  --ion-safe-area-top: 20px;\n  --ion-safe-area-bottom: 22px;\n}\n\nion-img {\n  width: 50px !important;\n  height: 50px !important;\n}\n\nion-content {\n  --background: translucent;\n}\n\nion-title {\n  --color: #ffffff;\n}\n\nion-thumbnail {\n  --border-radius:10px;\n}\n\n.voltar {\n  margin-left: 9px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbGlzdGEvSDpcXGlvbmljXFx0Y2Mvc3JjXFxhcHBcXHBhZ2VzXFxsaXN0YVxcbGlzdGEucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9saXN0YS9saXN0YS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBQTtFQUNBLDRCQUFBO0FDQ0o7O0FERUE7RUFDSSxzQkFBQTtFQUNBLHVCQUFBO0FDQ0o7O0FERUU7RUFDRSx5QkFBQTtBQ0NKOztBREVFO0VBQ0UsZ0JBQUE7QUNDSjs7QURFRTtFQUNFLG9CQUFBO0FDQ0o7O0FEQ0U7RUFDRSxnQkFBQTtBQ0VKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbGlzdGEvbGlzdGEucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOnJvb3Qge1xyXG4gICAgLS1pb24tc2FmZS1hcmVhLXRvcDogMjBweDtcclxuICAgIC0taW9uLXNhZmUtYXJlYS1ib3R0b206IDIycHg7XHJcbn1cclxuXHJcbmlvbi1pbWd7XHJcbiAgICB3aWR0aDogNTBweCAhaW1wb3J0YW50OyBcclxuICAgIGhlaWdodCA6IDUwcHggIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIGlvbi1jb250ZW50IHtcclxuICAgIC0tYmFja2dyb3VuZDogdHJhbnNsdWNlbnQ7XHJcbiAgfVxyXG4gIFxyXG4gIGlvbi10aXRsZXtcclxuICAgIC0tY29sb3I6ICNmZmZmZmY7XHJcbiAgfVxyXG4gIFxyXG4gIGlvbi10aHVtYm5haWwge1xyXG4gICAgLS1ib3JkZXItcmFkaXVzOjEwcHg7XHJcbiAgfVxyXG4gIC52b2x0YXJ7XHJcbiAgICBtYXJnaW4tbGVmdDogOXB4O1xyXG4gIH0iLCI6cm9vdCB7XG4gIC0taW9uLXNhZmUtYXJlYS10b3A6IDIwcHg7XG4gIC0taW9uLXNhZmUtYXJlYS1ib3R0b206IDIycHg7XG59XG5cbmlvbi1pbWcge1xuICB3aWR0aDogNTBweCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDUwcHggIWltcG9ydGFudDtcbn1cblxuaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zbHVjZW50O1xufVxuXG5pb24tdGl0bGUge1xuICAtLWNvbG9yOiAjZmZmZmZmO1xufVxuXG5pb24tdGh1bWJuYWlsIHtcbiAgLS1ib3JkZXItcmFkaXVzOjEwcHg7XG59XG5cbi52b2x0YXIge1xuICBtYXJnaW4tbGVmdDogOXB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/lista/lista.page.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/lista/lista.page.ts ***!
  \*******************************************/
/*! exports provided: ListaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListaPage", function() { return ListaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_shared_apimercado_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/apimercado.service */ "./src/app/shared/apimercado.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_shared_var_usuario_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/var-usuario.service */ "./src/app/shared/var-usuario.service.ts");
/* harmony import */ var src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/cart.service */ "./src/app/services/cart.service.ts");







let ListaPage = class ListaPage {
    constructor(menuCtrl, apimercado, alertCtrl, router, toastCtrl, varUser, navCtrl, cartService) {
        this.menuCtrl = menuCtrl;
        this.apimercado = apimercado;
        this.alertCtrl = alertCtrl;
        this.router = router;
        this.toastCtrl = toastCtrl;
        this.varUser = varUser;
        this.navCtrl = navCtrl;
        this.cartService = cartService;
        // variaveis banco
        this.categorias = [];
        // variavel menu
        this.openMenu = false;
        // variaveis de rota
        this.categoriaSelecionado = [];
        this.selecionouCategoria = 1;
        this.cont = 0;
    }
    ngOnInit() {
        // pega valor do mercado e da categoria do apimercado
        this.apimercado.currentMercadoSelecionado.subscribe(mercado => this.mercadoSelecionado = mercado);
        // this.apimercado.currentCategoriaSelecionado.subscribe(categoria => this.categoriaSelecionado = categoria);
        // puxa metodo banco
        this.getNomeMercado();
        // this.banco();
        this.bancoCategoria();
        this.getSubCategorias();
    }
    back() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (this.cartService.getCart().length == 0) {
                this.navCtrl.navigateBack(["/tabs/tab1"]);
            }
            else {
                const alert = yield this.alertCtrl.create({
                    cssClass: 'my-custom-class',
                    // header: 'Alert',
                    // subHeader: 'Remover lista',
                    message: 'Se voltar para o início o carrinho de compras atual será esvaziado!',
                    buttons: [
                        {
                            text: 'Cancelar',
                            role: 'cancel',
                            cssClass: 'secondary',
                            handler: (blah) => {
                                console.log('Confirm Cancel: blah');
                            }
                        }, {
                            text: 'Voltar',
                            handler: () => {
                                console.log('Confirm Okay');
                                // this.router.navigate(["/tabs/tab1"])
                                this.navCtrl.navigateBack(["/tabs/tab1"]);
                            }
                        }
                    ]
                });
                yield alert.present();
            }
        });
    }
    informarCliente() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (this.cont == 0) {
                const toast = yield this.toastCtrl.create({
                    // header: 'Toast header',
                    message: 'Clique nesse icone para finalizar a compra',
                    position: 'bottom',
                    color: 'light',
                    duration: 5000,
                    buttons: [
                        {
                            side: 'end',
                            // text: 'Favorite',
                            icon: 'cart',
                        }
                    ]
                });
                toast.present();
            }
            this.cont++;
        });
    }
    // qual mercado foi selecionado 
    getNomeMercado() {
        this.nomeMercado = this.varUser.getMercadoSelecionado();
    }
    // qual categoria foi selecionado 
    onCategoriaPress(categoriaSelecionado) {
        this.selecionouCategoria = 0;
        if (categoriaSelecionado.length == 0) {
            this.mensagemErroUsuario(" Mercado sem esse tipo de produto, selecione outra categoria.");
        }
        this.categoriaSelecionado = categoriaSelecionado;
        this.categoriaSelecionado.sort((a, b) => a.nomeSubCategoria.localeCompare(b.nomeSubCategoria));
        this.varUser.postSubCategoriaSelecionado(categoriaSelecionado);
        // puxa banco sempre que acionar metodo 
        // this.banco();
    }
    // nome da categoria selecionada
    nomeCategoriaSelecionada(nomeCategoria) {
        this.nomeCategoria = nomeCategoria;
    }
    postNomeSubCategoriaSelecionado(subCategoriaSelecionado) {
        this.varUser.postSubCategoriaSelecionado(subCategoriaSelecionado);
    }
    getSubCategorias() {
        this.listaSubProduto = this.varUser.getSubCategoriaSelecionado();
    }
    // qual lista foi selecionada
    onListaPress(listaSelecionado) {
        this.apimercado.changeListaSelecionado(listaSelecionado);
    }
    ordenacaoCategorias() {
        this.orderSubCategoria = this.categorias;
        console.log("banco order subcategoria:", this.orderSubCategoria);
    }
    bancoCategoria() {
        // chama a tela de carregamento
        this.apimercado.listarCategorias()
            .then((response) => {
            this.categorias = response;
            this.categorias.sort((a, b) => a.nomeCategoria.localeCompare(b.nomeCategoria));
            console.log("banco categoria:", this.categorias);
            // fecha a tela de carregamento
        })
            .catch((response) => {
            this.categorias = response;
            // fecha a tela de carregamento
        });
    }
    // faz menu abrir uma vez
    ionViewWillEnter() {
        if (this.openMenu == false) {
            this.menuCtrl.open();
            this.openMenu = true;
        }
    }
    mensagemErroSistema(mensagem) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: 'Alerta',
                subHeader: 'Erro interno do sistema',
                message: `${mensagem}, por favor contate um desenvolvedor!`,
                buttons: ['OK']
            });
            yield alert.present();
        });
    }
    mensagemErroUsuario(mensagem) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            // mensagem de add carinho
            const toast = yield this.toastCtrl.create({
                color: "primary",
                message: `${mensagem}`,
                duration: 3000
            });
            toast.present();
        });
    }
    ;
    mensagemInfo(mensagem) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            // mensagem de add carinho
            const toast = yield this.toastCtrl.create({
                color: "light",
                message: `${mensagem}`,
                duration: 4000
            });
            toast.present();
        });
    }
    ;
};
ListaPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"] },
    { type: src_app_shared_apimercado_service__WEBPACK_IMPORTED_MODULE_3__["ApimercadoService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
    { type: src_app_shared_var_usuario_service__WEBPACK_IMPORTED_MODULE_5__["VarUsuarioService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_6__["CartService"] }
];
ListaPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-lista',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./lista.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/lista/lista.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./lista.page.scss */ "./src/app/pages/lista/lista.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"],
        src_app_shared_apimercado_service__WEBPACK_IMPORTED_MODULE_3__["ApimercadoService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
        src_app_shared_var_usuario_service__WEBPACK_IMPORTED_MODULE_5__["VarUsuarioService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_6__["CartService"]])
], ListaPage);



/***/ })

}]);
//# sourceMappingURL=pages-lista-lista-module-es2015.js.map