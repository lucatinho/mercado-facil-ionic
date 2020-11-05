(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-lista-compras-lista-compras-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/lista-compras/lista-compras.page.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/lista-compras/lista-compras.page.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"false\">\n  <ion-toolbar color=\"base_header\">\n    <!-- botao voltar -->\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>\n      Lista de compras \n    </ion-title>\n    <ion-title size=\"small\">{{ banco.titulo }}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n<!-- inicio produto-->\n<ion-item-sliding *ngFor=\"let item of banco.produtos\" id=\"item100\">\n  <ion-item>\n    <ion-thumbnail slot=\"start\">\n      <img src={{item.imgProduto}}>\n    </ion-thumbnail>\n\n    <ion-label>\n      <h2>{{ item.nomeProduto }}</h2>\n      <p>{{ item.marca.nomeMarca }}</p>\n      <ion-note slot=\"end\" color=\"text\">{{ item.preco | currency:'BRL' }}</ion-note>\n      <!-- <ion-note slot=\"end\" color=\"text\">{{ item.amount * item.preco | currency:'BRL' }}</ion-note> -->\n    </ion-label>\n    <!--botões de soma-->\n    <ion-buttons color=\"icon\" slot=\"end\">\n      <!-- <ion-button color=\"icon\" (click)=\"decreaseCartItem(p)\">\n        <ion-icon name=\"remove-outline\"></ion-icon>\n      </ion-button> -->\n      <ion-button disabled=\"true\">\n        <th>Qtd: {{ item.amount }}</th>\n      </ion-button>\n      <!-- <ion-button color=\"icon\" (click)=\"increaseCartItem(p)\">\n        <ion-icon name=\"add-outline\"></ion-icon>\n      </ion-button> -->\n    </ion-buttons>\n    <!-- fim botoes de soma -->\n  </ion-item>\n  <!--Retirar produto-->\n  <!-- <ion-item-options side=\"end\">\n    <ion-item-option color=\"danger\" (click)=\"removeCartItem(p)\">\n      <ion-icon slot=\"icon-only\" name=\"trash\"></ion-icon>\n    </ion-item-option>\n  </ion-item-options> -->\n</ion-item-sliding>\n<!-- fim produto -->\n\n</ion-content>\n\n<ion-footer>\n\n\n<ion-toolbar>\n  <!-- <ion-icon slot=\"end\" color=\"base_header\" size=\"large\" name=\"arrow-up-circle-outline\"></ion-icon> -->\n  <ion-title>Total:{{ banco.totalCompra | currency:'BRL' }}</ion-title>\n</ion-toolbar>\n\n</ion-footer>");

/***/ }),

/***/ "./src/app/pages/lista-compras/lista-compras-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/lista-compras/lista-compras-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: ListaComprasPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListaComprasPageRoutingModule", function() { return ListaComprasPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _lista_compras_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lista-compras.page */ "./src/app/pages/lista-compras/lista-compras.page.ts");




const routes = [
    {
        path: '',
        component: _lista_compras_page__WEBPACK_IMPORTED_MODULE_3__["ListaComprasPage"]
    }
];
let ListaComprasPageRoutingModule = class ListaComprasPageRoutingModule {
};
ListaComprasPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ListaComprasPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/lista-compras/lista-compras.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/lista-compras/lista-compras.module.ts ***!
  \*************************************************************/
/*! exports provided: ListaComprasPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListaComprasPageModule", function() { return ListaComprasPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _lista_compras_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lista-compras-routing.module */ "./src/app/pages/lista-compras/lista-compras-routing.module.ts");
/* harmony import */ var _lista_compras_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lista-compras.page */ "./src/app/pages/lista-compras/lista-compras.page.ts");







let ListaComprasPageModule = class ListaComprasPageModule {
};
ListaComprasPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _lista_compras_routing_module__WEBPACK_IMPORTED_MODULE_5__["ListaComprasPageRoutingModule"]
        ],
        declarations: [_lista_compras_page__WEBPACK_IMPORTED_MODULE_6__["ListaComprasPage"]]
    })
], ListaComprasPageModule);



/***/ }),

/***/ "./src/app/pages/lista-compras/lista-compras.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/pages/lista-compras/lista-compras.page.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-thumbnail {\n  --border-radius:10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbGlzdGEtY29tcHJhcy9IOlxcaW9uaWNcXHRjYy9zcmNcXGFwcFxccGFnZXNcXGxpc3RhLWNvbXByYXNcXGxpc3RhLWNvbXByYXMucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9saXN0YS1jb21wcmFzL2xpc3RhLWNvbXByYXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksb0JBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xpc3RhLWNvbXByYXMvbGlzdGEtY29tcHJhcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdGh1bWJuYWlsIHtcclxuICAgIC0tYm9yZGVyLXJhZGl1czoxMHB4O1xyXG4gIH0iLCJpb24tdGh1bWJuYWlsIHtcbiAgLS1ib3JkZXItcmFkaXVzOjEwcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/lista-compras/lista-compras.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/lista-compras/lista-compras.page.ts ***!
  \***********************************************************/
/*! exports provided: ListaComprasPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListaComprasPage", function() { return ListaComprasPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var src_app_shared_var_usuario_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/var-usuario.service */ "./src/app/shared/var-usuario.service.ts");




let ListaComprasPage = class ListaComprasPage {
    constructor(storage, varUser) {
        this.storage = storage;
        this.varUser = varUser;
        this.banco = {};
    }
    ngOnInit() {
        this.banco = this.varUser.getListaCompraSelecionada();
        // this.getListaMercado();
        console.log("ta: ", this.varUser.getListaCompraSelecionada());
    }
    decreaseCartItem() {
    }
    increaseCartItem() {
    }
    removeCartItem() {
    }
};
ListaComprasPage.ctorParameters = () => [
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"] },
    { type: src_app_shared_var_usuario_service__WEBPACK_IMPORTED_MODULE_3__["VarUsuarioService"] }
];
ListaComprasPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-lista-compras',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./lista-compras.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/lista-compras/lista-compras.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./lista-compras.page.scss */ "./src/app/pages/lista-compras/lista-compras.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"], src_app_shared_var_usuario_service__WEBPACK_IMPORTED_MODULE_3__["VarUsuarioService"]])
], ListaComprasPage);



/***/ }),

/***/ "./src/app/shared/var-usuario.service.ts":
/*!***********************************************!*\
  !*** ./src/app/shared/var-usuario.service.ts ***!
  \***********************************************/
/*! exports provided: VarUsuarioService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VarUsuarioService", function() { return VarUsuarioService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");



let VarUsuarioService = class VarUsuarioService {
    // private login = new BehaviorSubject(0);
    constructor(storage) {
        this.storage = storage;
        this.refresh = false;
        this.login = [];
        this.infoCliente = [];
        this.SubCategoriaSelecionado = [
            {
                idSubCategoria: 1,
                nomeSubCategoria: "modelo",
                imgSubCategoria: null
            }
        ];
    }
    // storage
    // login ------------------------------------------------------------------
    getLogin() {
        if (this.login == null) {
            this.login = "";
            console.log("entrou no if");
        }
        else {
            this.storage.get("login").then((val) => {
                this.login = val;
            }).catch((response) => {
                console.log("nao esta logado storage: ", response);
            });
        }
        return this.login;
    }
    postLogin(username, password) {
        this.login = {
            username: username,
            password: password
        };
        console.log("varUser: ", this.login);
        this.storage.set("login", this.login).then(() => {
            console.log("usuario salvo");
        });
    }
    deleteLogin() {
        // mostrar no console log
        this.storage.remove("login").then(() => {
            console.log("usuario deletado");
        });
    }
    // !login ------------------------------------------------------------------
    // !storage
    // idcliente -------------------------------------------------------------------
    getInfoCliente() {
        // this.storage.get("infoCliente").then((val) => {
        //   this.infoCliente = val;
        //   console.log("depois")
        // }).catch((response) => {
        //   console.log("infoCliente erro: ", response);
        // });
        return this.infoCliente;
    }
    postInfoCliente(infoCliente) {
        this.infoCliente = infoCliente;
        // this.storage.set("infoCliente", infoCliente).then(() => {
        //   console.log("infoCliente salvo")
        // });
    }
    // !idcliente -------------------------------------------------------------------
    // listapedido
    getPedidoSelecionado() {
        return this.pedidoSelecionado;
    }
    postPedidoSelecionado(pedidoSelecionado) {
        this.pedidoSelecionado = pedidoSelecionado;
    }
    // listaPedidos
    getPedidos() {
        return this.pedidos;
    }
    postPedidos(pedidos) {
        this.pedidos = pedidos;
    }
    // nomeMercadoSelecionado
    getFreteMercado() {
        return this.freteMercado;
    }
    postFreteMercado(freteMercado) {
        this.freteMercado = freteMercado;
    }
    // nomeMercadoSelecionado
    getMercadoSelecionado() {
        return this.nomeMercadoSelecionado;
    }
    postMercadoSelecionado(nomeMercadoSelecionado) {
        this.nomeMercadoSelecionado = nomeMercadoSelecionado;
    }
    // nome da subcategoria
    getSubCategorias() {
        return this.SubCategorias;
    }
    postSubCategorias(SubCategorias) {
        this.SubCategorias = SubCategorias;
    }
    // nome da subcategoria selecionada 
    getSubCategoriaSelecionado() {
        return this.SubCategoriaSelecionado;
    }
    postSubCategoriaSelecionado(SubCategoriaSelecionado) {
        this.SubCategoriaSelecionado = SubCategoriaSelecionado;
    }
    getInfoMercadoSelecionado() {
        return this.infoMercadoSelecionado;
    }
    postInfoMercadoSelecionado(infoMercado) {
        this.infoMercadoSelecionado = infoMercado;
    }
    getListaCompraSelecionada() {
        return this.listaMercadoSelecionada;
    }
    postListaCompraSelecionada(ListaMercadoSelecionada) {
        this.listaMercadoSelecionada = ListaMercadoSelecionada;
    }
};
VarUsuarioService.ctorParameters = () => [
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"] }
];
VarUsuarioService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"]])
], VarUsuarioService);



/***/ })

}]);
//# sourceMappingURL=pages-lista-compras-lista-compras-module-es2015.js.map