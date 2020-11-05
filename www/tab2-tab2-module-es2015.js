(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab2-tab2-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/listar-pedido-produto/listar-pedido-produto.component.html":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/listar-pedido-produto/listar-pedido-produto.component.html ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"false\">\n  <ion-toolbar color=\"base_header\">\n    <!-- botao voltar -->\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"close()\">\n        <!-- <ion-icon name=\"arrow-back-outline\"></ion-icon> -->\n        <ion-icon name=\"arrow-down-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <!-- <ion-title class=\"ion-text-center\"> -->\n    <ion-title>\n      Produtos\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n\n  <!-- <ion-item-group *ngFor=\"let item of produto; index as i\"> -->\n  <!-- <ion-item *ngIf=\"item.idPedido == (varPedidoSelecionado)\"> -->\n  <ion-item-group>\n    <ion-item>\n      <ion-label>\n        <h2><th>{{ produto.mercados.nome }}</th></h2>\n        <!-- <h3>\n                <th>De: 12.30</th>\n              </h3> -->\n        <h3>\n          Frete: {{ nomeFrete }}\n        </h3>\n\n        <h3>\n          Forma de pagamento: {{ produto.formaPagamento }}\n        </h3>\n        <h3 *ngIf=\"enderecoEnviar != false\" >\n          Entrega: {{enderecoEnviar.bairro}}, {{enderecoEnviar.rua}}, Nº {{enderecoEnviar.numero}}\n        </h3>\n      </ion-label>\n      <ion-badge slot=\"end\" color=\"tertiary\">{{ produto.statusPedido.nomeStatusPedido }}</ion-badge>\n    </ion-item>\n  </ion-item-group>\n  <!-- fim produto -->\n\n  <ion-list>\n    <ion-item-group *ngFor=\"let item of produto.pedidoProdutos; index as i\">\n      <ion-item>\n        <ion-label>\n          <h2><th>{{ item.nomeProduto }} {{ item.marcaProduto }}</th></h2>\n          <h3>\n            Quantidade:  {{ item.qtdProduto }}\n          </h3>\n          <h3>\n            Valor unitário: {{ item.valorUni | currency:'BRL' }}\n          </h3>\n        </ion-label>\n      </ion-item>\n    </ion-item-group>\n    <!-- fim produto -->\n  </ion-list>\n\n</ion-content>\n\n<ion-footer>\n  <!-- chama modal no ts -->\n  <ion-toolbar color=\"light\">\n    <!-- fim icone para cima -->\n    <ion-title>Total: {{ totalProdutos() | currency:'BRL' }}</ion-title>\n  </ion-toolbar>\n</ion-footer> ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab2/tab2.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab2/tab2.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"false\">\n  <ion-toolbar color=\"base_header\">\n<!-- botao de refresh -->\n    <ion-buttons slot=\"end\">\n      <ion-button  (click)=\"banco()\">\n        <ion-icon name=\"refresh-circle-outline\" style=\"zoom:1.5;\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    \n    <ion-title class=\"ion-text-center\">\n      Historico de Pedidos\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n\n  <ion-list>\n    <!-- inicio pedido -->\n    <ion-item *ngFor=\"let item of pedidos; index as i\" (click)=\"postPedidoSelecionado(item)\">\n      <ion-thumbnail slot=\"start\">\n        <img src={{item.mercados.picture}}>\n      </ion-thumbnail>\n      <ion-label>\n        <h2>{{ item.mercados.nome}}</h2>\n        <p>{{ item.dataPedido | date:'dd/MM hh:mm'}}</p>\n        <!-- <p>\n          <th></th>\n        </p> -->\n      </ion-label>\n\n      <ion-buttons slot=\"end\">\n        <ion-button>\n          <ion-icon name=\"information-circle-outline\"></ion-icon>\n        </ion-button>\n      </ion-buttons>\n\n      \n      <!-- <ion-badge slot=\"end\" color=\"warning\">{{ item.statusPedido.nomeStatusPedido }}</ion-badge> -->\n    </ion-item>\n    <!-- fim pedido -->\n\n  </ion-list> \n\n</ion-content>");

/***/ }),

/***/ "./src/app/components/listar-pedido-produto/listar-pedido-produto.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/components/listar-pedido-produto/listar-pedido-produto.component.scss ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbGlzdGFyLXBlZGlkby1wcm9kdXRvL2xpc3Rhci1wZWRpZG8tcHJvZHV0by5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/components/listar-pedido-produto/listar-pedido-produto.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/components/listar-pedido-produto/listar-pedido-produto.component.ts ***!
  \*************************************************************************************/
/*! exports provided: ListarPedidoProdutoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListarPedidoProdutoComponent", function() { return ListarPedidoProdutoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_shared_var_usuario_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/var-usuario.service */ "./src/app/shared/var-usuario.service.ts");




let ListarPedidoProdutoComponent = class ListarPedidoProdutoComponent {
    constructor(modalCTRL, saveUser) {
        this.modalCTRL = modalCTRL;
        this.saveUser = saveUser;
        this.nomeFrete = "Retirada no estabelecimento";
        this.enderecoEnviar = [];
    }
    ngOnInit() {
        // this.puxarBanco();
        this.pedidoSelecionado();
    }
    // botao de fechar a modal
    close() {
        this.modalCTRL.dismiss();
    }
    pedidoSelecionado() {
        this.produto = this.saveUser.getPedidoSelecionado();
        console.log("chegou :", this.produto);
        this.totalProdutos();
        if (this.produto.formaEnvio == "Entrega") {
            for (let index = 0; index < this.produto.cliente.endereco.length; index++) {
                if (this.produto.endereco == this.produto.cliente.endereco[index].idEndereco) {
                    this.enderecoEnviar = this.produto.cliente.endereco[index];
                }
            }
        }
        else {
            this.enderecoEnviar = false;
        }
    }
    totalProdutos() {
        this.total = 0;
        for (let index = 0; index < this.produto.pedidoProdutos.length; index++) {
            this.total = this.total + (this.produto.pedidoProdutos[index].valorUni * this.produto.pedidoProdutos[index].qtdProduto);
        }
        ;
        if (this.produto.formaEnvio == "Entrega") {
            this.total = this.total + this.produto.mercados.freteMercado;
            this.nomeFrete = "R$ " + this.produto.mercados.freteMercado;
        }
        return this.total;
    }
    ;
};
ListarPedidoProdutoComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: src_app_shared_var_usuario_service__WEBPACK_IMPORTED_MODULE_3__["VarUsuarioService"] }
];
ListarPedidoProdutoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-listar-pedido-produto',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./listar-pedido-produto.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/listar-pedido-produto/listar-pedido-produto.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./listar-pedido-produto.component.scss */ "./src/app/components/listar-pedido-produto/listar-pedido-produto.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], src_app_shared_var_usuario_service__WEBPACK_IMPORTED_MODULE_3__["VarUsuarioService"]])
], ListarPedidoProdutoComponent);



/***/ }),

/***/ "./src/app/tab2/tab2.module.ts":
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.module.ts ***!
  \*************************************/
/*! exports provided: Tab2PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab2PageModule", function() { return Tab2PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _tab2_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab2.page */ "./src/app/tab2/tab2.page.ts");
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../explore-container/explore-container.module */ "./src/app/explore-container/explore-container.module.ts");
/* harmony import */ var _components_listar_pedido_produto_listar_pedido_produto_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/listar-pedido-produto/listar-pedido-produto.component */ "./src/app/components/listar-pedido-produto/listar-pedido-produto.component.ts");









let Tab2PageModule = class Tab2PageModule {
};
Tab2PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_7__["ExploreContainerComponentModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _tab2_page__WEBPACK_IMPORTED_MODULE_6__["Tab2Page"] }])
        ],
        declarations: [_tab2_page__WEBPACK_IMPORTED_MODULE_6__["Tab2Page"], _components_listar_pedido_produto_listar_pedido_produto_component__WEBPACK_IMPORTED_MODULE_8__["ListarPedidoProdutoComponent"]],
        entryComponents: [_components_listar_pedido_produto_listar_pedido_produto_component__WEBPACK_IMPORTED_MODULE_8__["ListarPedidoProdutoComponent"]]
    })
], Tab2PageModule);



/***/ }),

/***/ "./src/app/tab2/tab2.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content ion-toolbar {\n  --background: translucent;\n}\n\n.iconSize {\n  font-size: 128px;\n}\n\nion-thumbnail {\n  --border-radius:10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFiMi9IOlxcaW9uaWNcXHRjYy9zcmNcXGFwcFxcdGFiMlxcdGFiMi5wYWdlLnNjc3MiLCJzcmMvYXBwL3RhYjIvdGFiMi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBQTtBQ0NGOztBREVBO0VBQ0UsZ0JBQUE7QUNDRjs7QURDQTtFQUNFLG9CQUFBO0FDRUYiLCJmaWxlIjoic3JjL2FwcC90YWIyL3RhYjIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQgaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zbHVjZW50O1xufVxuXG4uaWNvblNpemUge1xuICBmb250LXNpemU6IDEyOHB4O1xufVxuaW9uLXRodW1ibmFpbCB7XG4gIC0tYm9yZGVyLXJhZGl1czoxMHB4O1xufSIsImlvbi1jb250ZW50IGlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc2x1Y2VudDtcbn1cblxuLmljb25TaXplIHtcbiAgZm9udC1zaXplOiAxMjhweDtcbn1cblxuaW9uLXRodW1ibmFpbCB7XG4gIC0tYm9yZGVyLXJhZGl1czoxMHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/tab2/tab2.page.ts":
/*!***********************************!*\
  !*** ./src/app/tab2/tab2.page.ts ***!
  \***********************************/
/*! exports provided: Tab2Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab2Page", function() { return Tab2Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_apimercado_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/apimercado.service */ "./src/app/shared/apimercado.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _components_listar_pedido_produto_listar_pedido_produto_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/listar-pedido-produto/listar-pedido-produto.component */ "./src/app/components/listar-pedido-produto/listar-pedido-produto.component.ts");
/* harmony import */ var _shared_var_usuario_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/var-usuario.service */ "./src/app/shared/var-usuario.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _tabs_tabs_functions_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../tabs/tabs-functions.service */ "./src/app/tabs/tabs-functions.service.ts");









let Tab2Page = class Tab2Page {
    constructor(apimercado, router, modalCTRL, loadingController, saveUser, storage, tabsFunctions) {
        this.apimercado = apimercado;
        this.router = router;
        this.modalCTRL = modalCTRL;
        this.loadingController = loadingController;
        this.saveUser = saveUser;
        this.storage = storage;
        this.tabsFunctions = tabsFunctions;
        this.recarregar = false;
    }
    ngOnInit() {
        // this.doRefresh();
        // puxa metodo banco
        // this.estasLogado();
        this.banco();
    }
    // doRefresh() {
    //   console.log('Begin async operation');
    //   setTimeout(() => {
    //     console.log('Async operation has ended');
    //     this.bancoReload();
    //     this.doRefresh();
    //   }, 60000);
    // }
    postPedidoSelecionado(pedidoSelecionado) {
        console.log("qual foi: ", pedidoSelecionado);
        this.saveUser.postPedidoSelecionado(pedidoSelecionado);
        this.listarProdutos();
    }
    // cria a modal
    listarProdutos() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalCTRL.create({
                component: _components_listar_pedido_produto_listar_pedido_produto_component__WEBPACK_IMPORTED_MODULE_5__["ListarPedidoProdutoComponent"]
            });
            modal.present();
        });
    }
    // fim da modal
    banco() {
        // console.log("ver: ", this.saveUser.getInfoCliente())
        this.storage.get("login").then((val) => {
            if (val != null) {
                this.telaCarregamento().then(() => {
                    this.apimercado.listarPedidos(val)
                        .then((response) => {
                        this.pedidos = response;
                        this.pedidos.sort((b, a) => a.dataPedido.localeCompare(b.dataPedido));
                        console.log("lista de pedidos: ", this.pedidos);
                        this.bancoReload();
                        // this.saveUser.postPedidos(this.pedidos);
                        this.loadingController.dismiss();
                    })
                        .catch((response) => {
                        this.pedidos = response;
                        console.log("deu erro: ", this.pedidos);
                        this.bancoReload();
                        this.loadingController.dismiss();
                    });
                });
            }
            else {
                console.log("nao ta logado");
                this.router.navigate(["/login"]);
            }
        }).catch((response) => {
            this.bancoReload();
            console.log("nao esta logado storage: ", response);
        });
    }
    bancoReload() {
        this.tabsFunctions.serviceData
            .subscribe(data => (this.pedidos = data));
        //   // console.log("ver: ", this.saveUser.getInfoCliente())
        //   this.storage.get("login").then((val) => {
        //     if (val != null) {
        //         this.apimercado.listarPedidos(val)
        //           .then((response) => {
        //             this.pedidos = response;
        //             console.log("lista de pedidos: ", this.pedidos);
        //             // this.saveUser.postPedidos(this.pedidos);
        //             this.loadingController.dismiss();
        //           })
        //           .catch((response) => {
        //             this.pedidos = response;
        //             console.log("deu erro: ", this.pedidos);
        //             this.loadingController.dismiss();
        //           });
        //     }else{
        //       console.log("nao ta logado")
        //       this.router.navigate(["/login"])
        //     };
        //   }).catch((response) => {
        //     console.log("nao esta logado storage: ", response);
        //   });
    }
    telaCarregamento() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                cssClass: 'my-custom-class',
                message: 'Por favor aguarde...'
            });
            return loading.present();
        });
    }
    ;
};
Tab2Page.ctorParameters = () => [
    { type: _shared_apimercado_service__WEBPACK_IMPORTED_MODULE_2__["ApimercadoService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] },
    { type: _shared_var_usuario_service__WEBPACK_IMPORTED_MODULE_6__["VarUsuarioService"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_7__["Storage"] },
    { type: _tabs_tabs_functions_service__WEBPACK_IMPORTED_MODULE_8__["TabsFunctionsService"] }
];
Tab2Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tab2',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./tab2.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab2/tab2.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./tab2.page.scss */ "./src/app/tab2/tab2.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_apimercado_service__WEBPACK_IMPORTED_MODULE_2__["ApimercadoService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"],
        _shared_var_usuario_service__WEBPACK_IMPORTED_MODULE_6__["VarUsuarioService"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_7__["Storage"],
        _tabs_tabs_functions_service__WEBPACK_IMPORTED_MODULE_8__["TabsFunctionsService"]])
], Tab2Page);



/***/ })

}]);
//# sourceMappingURL=tab2-tab2-module-es2015.js.map