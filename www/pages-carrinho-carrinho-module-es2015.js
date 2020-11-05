(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-carrinho-carrinho-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/modalone/modalone.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/modalone/modalone.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"base_header\" (click)=\"close()\">\n    <ion-title>Finalizando</ion-title>\n    <ion-icon slot=\"end\" size=\"large\" name=\"arrow-down-circle-outline\" class=\"iconeseta\"></ion-icon>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <!-- <ion-item>\n    <ion-label>Forma de Envio:</ion-label>\n    <ion-select [(ngModel)]=\"formaEnvio\" (ionChange)=\"postFormaEnvio(formaEnvio);\" ok-text=\"Confirmar\" cancel-text=\"Cancelar\" (click)=\"postFormaEnvio(value)\">\n      <ion-select-option value=\"Entregar\">Entregar - R$10,00</ion-select-option>\n      <ion-select-option value=\"Retirar no Mercado\">Retirar no Mercado</ion-select-option>\n    </ion-select>\n  </ion-item> -->\n\n  <ion-item>\n    <ion-label>Forma de Envio:</ion-label>\n    <ion-select [(ngModel)]=\"formaEnvio\" (ionChange)=\"postFormaEnvio(formaEnvio);\" value=\"notifications\" interface=\"action-sheet\">\n      <ion-select-option value=\"Entrega\">Entregar - {{ freteview | currency:'BRL' }}</ion-select-option>\n      <ion-select-option value=\"Retirada no mercardo\" >Retirar no Mercado</ion-select-option>\n    </ion-select>\n  </ion-item>\n\n  <!-- só deve aparecer se forma de envio for entrega -->\n\n  <ion-item *ngIf=\"enderecoValidacao == true\">\n    <ion-label>Endereço de entrega:</ion-label>\n    <ion-select [(ngModel)]=\"enderecoEntrega\" (ionChange)=\"postEnderecoEntrega(enderecoEntrega);\" value=\"notifications\" interface=\"action-sheet\">\n      <ion-select-option *ngFor=\"let endereco of enderecosCliente\" value={{endereco.idEndereco}}>Bairro {{endereco.bairro}},Rua {{endereco.rua}},Nº {{endereco.numero}}</ion-select-option>\n      <!-- <ion-select-option value=\"Retirada no mercardo\" >Retirar no Mercado</ion-select-option> -->\n    </ion-select>\n  </ion-item>\n\n\n  <ion-item>\n    <ion-label>Forma de Pagamento:</ion-label>\n    <ion-select [(ngModel)]=\"formaPagamenento\" (ionChange)=\"postFormaPagamento(formaPagamenento);\" value=\"notifications\" interface=\"action-sheet\">\n      <ion-select-option value=\"Dinheiro\">Dinheiro</ion-select-option>\n      <ion-select-option value=\"Cartão Credito\" >Cartão Credito</ion-select-option>\n      <ion-select-option value=\"Cartao Debito\">Cartao Debito</ion-select-option>\n    </ion-select>\n  </ion-item>\n\n  <ion-item-divider>\n    <ion-label></ion-label>\n  </ion-item-divider>\n \n  <ion-list>\n\n    <ion-text class=\"ion-text-center\">\n      <ion-title size=\"small\">Subtotal: {{ getSubTotal() | currency:'BRL'}}</ion-title>\n    </ion-text>\n\n    <br>\n\n    <ion-text class=\"ion-text-center\">\n      <ion-title size=\"small\">Frete: {{ frete | currency:'BRL'}}</ion-title>\n    </ion-text>\n\n    <p class=\"ion-text-center\">Total:</p>\n    <ion-text color=\"base_header\">\n      <h1 class=\"ion-text-center\">{{ total() | currency:'BRL'}}</h1>\n    </ion-text>\n\n  </ion-list>\n  \n  <ion-button expand=\"block\" color=\"base_header\" (click)=\"checkout()\"><th>Finalizar</th></ion-button>\n  <!-- <ion-button expand=\"block\" color=\"base_header\" (click)=\"test()\"><th>Finalizar</th></ion-button> -->\n\n</ion-content>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/carrinho/carrinho.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/carrinho/carrinho.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"base_header\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n     <!--botao de carrinho-->\n     <ion-buttons slot=\"end\">\n      <ion-button (click)=\"mensagemListaCompra()\">\n        <ion-icon name=\"save-outline\" style=\"zoom:1.5;\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Meu Carrinho</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <!-- inicio produto-->\n  <ion-item-sliding *ngFor=\"let p of cart\" id=\"item100\">\n    <ion-item>\n      <ion-thumbnail slot=\"start\">\n        <img src={{p.imgProduto}}>\n      </ion-thumbnail>\n\n      <ion-label>\n        <h2>{{ p.nomeProduto }}</h2>\n        <p>{{ p.marca.nomeMarca }}</p>\n        <ion-note slot=\"end\" color=\"text\">{{ p.amount * p.preco | currency:'BRL' }}</ion-note>\n      </ion-label>\n      <!--botões de soma-->\n      <ion-buttons color=\"icon\" slot=\"end\">\n        <ion-button color=\"icon\" (click)=\"decreaseCartItem(p)\">\n          <ion-icon name=\"remove-outline\"></ion-icon>\n        </ion-button>\n        <ion-button disabled=\"true\">\n          <th>{{ p.amount }}</th>\n        </ion-button>\n        <ion-button color=\"icon\" (click)=\"increaseCartItem(p)\">\n          <ion-icon name=\"add-outline\"></ion-icon>\n        </ion-button>\n      </ion-buttons>\n      <!-- fim botoes de soma -->\n    </ion-item>\n    <!--Retirar produto-->\n    <ion-item-options side=\"end\">\n      <ion-item-option color=\"danger\" (click)=\"removeCartItem(p)\">\n        <ion-icon slot=\"icon-only\" name=\"trash\"></ion-icon>\n      </ion-item-option>\n    </ion-item-options>\n  </ion-item-sliding>\n  <!-- fim produto -->\n\n</ion-content>\n\n<ion-footer>\n  <!-- chama modal no ts -->\n  <ion-toolbar (click)=\"showModalOne()\">\n    <!-- icone para cima -->\n    <ion-icon slot=\"end\" color=\"base_header\" size=\"large\" name=\"cart\" class=\"carinho\"></ion-icon>\n    \n    <!-- fim icone para cima -->\n    <ion-title>Subtotal:{{ getTotal() | currency:'BRL' }}</ion-title>\n  </ion-toolbar>\n</ion-footer>");

/***/ }),

/***/ "./src/app/components/modalone/modalone.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/components/modalone/modalone.component.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".iconeseta {\n  margin-right: 13px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tb2RhbG9uZS9IOlxcaW9uaWNcXHRjYy9zcmNcXGFwcFxcY29tcG9uZW50c1xcbW9kYWxvbmVcXG1vZGFsb25lLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL21vZGFsb25lL21vZGFsb25lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbW9kYWxvbmUvbW9kYWxvbmUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaWNvbmVzZXRhe1xyXG4gICAgbWFyZ2luLXJpZ2h0OjEzcHg7XHJcbiAgfSIsIi5pY29uZXNldGEge1xuICBtYXJnaW4tcmlnaHQ6IDEzcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/components/modalone/modalone.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/modalone/modalone.component.ts ***!
  \***********************************************************/
/*! exports provided: ModaloneComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModaloneComponent", function() { return ModaloneComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/cart.service */ "./src/app/services/cart.service.ts");
/* harmony import */ var src_app_shared_apimercado_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/apimercado.service */ "./src/app/shared/apimercado.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_shared_var_usuario_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/var-usuario.service */ "./src/app/shared/var-usuario.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var src_app_tabs_tabs_functions_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/tabs/tabs-functions.service */ "./src/app/tabs/tabs-functions.service.ts");









let ModaloneComponent = class ModaloneComponent {
    constructor(modalCTRL, alertCtrl, cartService, apimercado, router, saveUser, toastCtrl, storage, loadingController, tabsFunctions) {
        this.modalCTRL = modalCTRL;
        this.alertCtrl = alertCtrl;
        this.cartService = cartService;
        this.apimercado = apimercado;
        this.router = router;
        this.saveUser = saveUser;
        this.toastCtrl = toastCtrl;
        this.storage = storage;
        this.loadingController = loadingController;
        this.tabsFunctions = tabsFunctions;
        this.cart = [];
        this.produtoFormatando = [];
        this.produtoFormatado = {};
        this.frete = 0;
        this.freteview = 0;
        this.enderecoEntrega = 0;
    }
    ngOnInit() {
        this.cart = this.cartService.getCart();
        // puxar subtotal
        this.cartService.currentSubtotal.subscribe(subtotal => this.subtotal = subtotal);
        // this.enviarPedido();
        this.freteview = this.saveUser.getFreteMercado();
        this.enderecosCliente = this.saveUser.getInfoCliente().endereco;
        console.log(this.enderecosCliente);
    }
    // getEnderecoEntrega(value){
    //   this.enderecoEntrega = value
    //   console.log("entrega: ", value)
    // }
    getData() {
        // this.myDate = new Date();
        // this.myDate = formatDate(new Date(), 'yyyy-MM-ddThh:mm', 'en');
        this.myDate = new Date();
    }
    checkout() {
        this.validaitor = false;
        if (this.cart.length == 0) {
            this.mensagemErroUsuario("carrinho nao pode estar vazio");
            this.validaitor = true;
        }
        if (this.formaPagamenento == null) {
            this.mensagemErroUsuario("Informe a forma de pagamento");
            this.validaitor = true;
        }
        if (this.formaEnvio == null) {
            this.mensagemErroUsuario("Informe a forma de envio");
            this.validaitor = true;
        }
        if (this.formaEnvio == "Entrega" && this.enderecoEntrega == 0) {
            this.mensagemErroUsuario("Informe o endereço de entrega");
            this.validaitor = true;
        }
        if (this.saveUser.getInfoCliente().idCliente == null) {
            this.mensagemErroLogin("Você não esta logado, por favor, por favor logue!");
            this.validaitor = true;
            this.router.navigate(["/login"]);
            this.close();
        }
        if (this.validaitor == false) {
            this.getData();
            console.log("data: ", this.myDate);
            this.enviarPedido();
        }
    }
    enviarPedido() {
        console.log("carrinho: ", this.cart);
        this.formatarProdutos();
        let modalPedido = {
            cliente: {
                idCliente: this.saveUser.getInfoCliente().idCliente
            },
            mercados: {
                idMercado: this.cart[0].idMercado
            },
            formaPagamento: this.formaPagamenento,
            formaEnvio: this.formaEnvio,
            dataPedido: this.myDate,
            endereco: this.enderecoEntrega,
            statusPedido: {
                idStatusPedido: 1
            },
            pedidoProdutos: this.produtoFormatado
        };
        console.log("enviar: ", modalPedido);
        // chama o storage para pegar dados  
        this.telaCarregamento().then(() => {
            this.storage.get("login").then((val) => {
                this.apimercado.enviarPedido(modalPedido, val).then((response) => {
                    console.log("funcionou pedido = ", response);
                    this.result = response;
                    this.tabsFunctions.bancoReloadTab2();
                    this.mensagemSucessoPedido();
                    this.loadingController.dismiss();
                    this.router.navigate(["/tabs/tab2"]);
                    this.close();
                })
                    .catch((response) => {
                    console.log("deu erro pedido = ", response);
                    this.loadingController.dismiss();
                    this.result = response;
                    this.mensagemErroSistema("Algo esta errado com o pedido");
                });
            }).catch((response) => {
                console.log("nao esta logado storage");
                this.loadingController.dismiss();
            });
        });
    }
    formatarProdutos() {
        for (let index = 0; index < this.cart.length; index++) {
            this.produtoFormatando[index] = {
                produto: this.cart[index].idProduto,
                nomeProduto: this.cart[index].nomeProduto,
                marcaProduto: this.cart[index].marca.nomeMarca,
                valorUni: this.cart[index].preco,
                qtdProduto: this.cart[index].amount
            };
            console.log("formantando:", this.produtoFormatado);
        }
        this.produtoFormatado = this.produtoFormatando;
        console.log("formatado:", this.produtoFormatado);
    }
    // subtotal
    getSubTotal() {
        this.cartService.subtotalProduct(this.subtotal);
        return this.subtotal;
    }
    freteMercado() {
        this.frete = this.saveUser.getFreteMercado();
    }
    total(total) {
        this.frete = 0;
        if (this.formaEnvio == "Entrega") {
            total = this.subtotal + this.saveUser.getFreteMercado();
            this.freteMercado();
        }
        else {
            total = this.subtotal;
        }
        return total;
    }
    // botao de fechar a modal
    close() {
        this.modalCTRL.dismiss();
    }
    postFormaPagamento(formaPagamento) {
        this.formaPagamenento = formaPagamento;
        console.log("Pagamento: ", this.formaPagamenento);
    }
    postFormaEnvio(formaEnvio) {
        this.formaEnvio = formaEnvio;
        console.log("envio: ", this.formaEnvio);
        this.total(0);
        // faz aparecer o selecionador de endereco
        if (formaEnvio == "Entrega") {
            this.enderecoValidacao = true;
        }
        else {
            this.enderecoValidacao = false;
            this.enderecoEntrega = 0;
        }
    }
    postEnderecoEntrega(id) {
        this.enderecoEntrega = id;
        console.log("id: ", id);
    }
    mensagemSucessoPedido() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: 'Operação realizada com sucesso!',
                message: `Obrigado por comprar com a gente, volte sempre ;)`,
                buttons: ['OK']
            });
            yield alert.present();
        });
    }
    ;
    mensagemErroUsuario(mensagem) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const toast = yield this.toastCtrl.create({
                color: "primary",
                message: `${mensagem}`,
                duration: 2500
            });
            toast.present();
        });
    }
    ;
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
    ;
    mensagemErroLogin(mensagem) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: 'Alerta',
                message: `${mensagem}`,
                buttons: ['OK']
            });
            yield alert.present();
        });
    }
    ;
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
ModaloneComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"] },
    { type: src_app_shared_apimercado_service__WEBPACK_IMPORTED_MODULE_4__["ApimercadoService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: src_app_shared_var_usuario_service__WEBPACK_IMPORTED_MODULE_6__["VarUsuarioService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_7__["Storage"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: src_app_tabs_tabs_functions_service__WEBPACK_IMPORTED_MODULE_8__["TabsFunctionsService"] }
];
ModaloneComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-modalone',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./modalone.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/modalone/modalone.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./modalone.component.scss */ "./src/app/components/modalone/modalone.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
        src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"],
        src_app_shared_apimercado_service__WEBPACK_IMPORTED_MODULE_4__["ApimercadoService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
        src_app_shared_var_usuario_service__WEBPACK_IMPORTED_MODULE_6__["VarUsuarioService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_7__["Storage"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
        src_app_tabs_tabs_functions_service__WEBPACK_IMPORTED_MODULE_8__["TabsFunctionsService"]])
], ModaloneComponent);



/***/ }),

/***/ "./src/app/pages/carrinho/carrinho-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/carrinho/carrinho-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: CarrinhoPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarrinhoPageRoutingModule", function() { return CarrinhoPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _carrinho_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./carrinho.page */ "./src/app/pages/carrinho/carrinho.page.ts");




const routes = [
    {
        path: '',
        component: _carrinho_page__WEBPACK_IMPORTED_MODULE_3__["CarrinhoPage"]
    }
];
let CarrinhoPageRoutingModule = class CarrinhoPageRoutingModule {
};
CarrinhoPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CarrinhoPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/carrinho/carrinho.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/carrinho/carrinho.module.ts ***!
  \***************************************************/
/*! exports provided: CarrinhoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarrinhoPageModule", function() { return CarrinhoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _carrinho_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./carrinho-routing.module */ "./src/app/pages/carrinho/carrinho-routing.module.ts");
/* harmony import */ var _carrinho_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./carrinho.page */ "./src/app/pages/carrinho/carrinho.page.ts");
/* harmony import */ var src_app_components_modalone_modalone_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/modalone/modalone.component */ "./src/app/components/modalone/modalone.component.ts");








let CarrinhoPageModule = class CarrinhoPageModule {
};
CarrinhoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _carrinho_routing_module__WEBPACK_IMPORTED_MODULE_5__["CarrinhoPageRoutingModule"]
        ],
        // importa e declara a modal
        declarations: [_carrinho_page__WEBPACK_IMPORTED_MODULE_6__["CarrinhoPage"], src_app_components_modalone_modalone_component__WEBPACK_IMPORTED_MODULE_7__["ModaloneComponent"]],
        entryComponents: [src_app_components_modalone_modalone_component__WEBPACK_IMPORTED_MODULE_7__["ModaloneComponent"]]
    })
], CarrinhoPageModule);



/***/ }),

/***/ "./src/app/pages/carrinho/carrinho.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/carrinho/carrinho.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-thumbnail {\n  --border-radius:15px;\n}\n\n.carinho {\n  margin-right: 13px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY2FycmluaG8vSDpcXGlvbmljXFx0Y2Mvc3JjXFxhcHBcXHBhZ2VzXFxjYXJyaW5ob1xcY2FycmluaG8ucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9jYXJyaW5oby9jYXJyaW5oby5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxvQkFBQTtBQ0NKOztBREVFO0VBQ0Usa0JBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NhcnJpbmhvL2NhcnJpbmhvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10aHVtYm5haWwge1xyXG4gICAgLS1ib3JkZXItcmFkaXVzOjE1cHg7XHJcbiAgfVxyXG5cclxuICAuY2FyaW5ob3tcclxuICAgIG1hcmdpbi1yaWdodDoxM3B4O1xyXG4gIH0iLCJpb24tdGh1bWJuYWlsIHtcbiAgLS1ib3JkZXItcmFkaXVzOjE1cHg7XG59XG5cbi5jYXJpbmhvIHtcbiAgbWFyZ2luLXJpZ2h0OiAxM3B4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/carrinho/carrinho.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/carrinho/carrinho.page.ts ***!
  \*************************************************/
/*! exports provided: CarrinhoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarrinhoPage", function() { return CarrinhoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_components_modalone_modalone_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/components/modalone/modalone.component */ "./src/app/components/modalone/modalone.component.ts");
/* harmony import */ var src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/cart.service */ "./src/app/services/cart.service.ts");
/* harmony import */ var src_app_shared_apimercado_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/apimercado.service */ "./src/app/shared/apimercado.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var src_app_shared_var_usuario_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/var-usuario.service */ "./src/app/shared/var-usuario.service.ts");
/* harmony import */ var src_app_tabs_tabs_functions_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/tabs/tabs-functions.service */ "./src/app/tabs/tabs-functions.service.ts");










let CarrinhoPage = class CarrinhoPage {
    constructor(
    // declara a modal e importa la em cima
    modalCTRL, cartService, apimercado, router, storage, alertController, toastCtrl, varUser, tabsFunctions) {
        this.modalCTRL = modalCTRL;
        this.cartService = cartService;
        this.apimercado = apimercado;
        this.router = router;
        this.storage = storage;
        this.alertController = alertController;
        this.toastCtrl = toastCtrl;
        this.varUser = varUser;
        this.tabsFunctions = tabsFunctions;
        // carrinho
        this.cart = [];
    }
    ngOnInit() {
        this.cart = this.cartService.getCart();
        // pega valor subtotal
        this.cartService.currentSubtotal.subscribe(subtotal => this.subtotal = subtotal);
        // this.estasLogado();
    }
    remove() {
        // mostrar no console log
        this.storage.remove("listaMercado").then(() => {
            console.log("listaMercado deletado");
        });
    }
    addLista() {
        // lista as listas que ja tem 
        this.storage.get("listaMercado").then((val) => {
            let listaAntiga = val;
            console.log("listaantiga: ", listaAntiga);
            // console.log("listaantiga: ", this.varUser.getInfoMercadoSelecionado());
            // formata a nova lista 
            let formatar = {
                titulo: this.titulo,
                nomeMercado: this.varUser.getInfoMercadoSelecionado().nomeMercado,
                imgMercado: this.varUser.getInfoMercadoSelecionado().picture,
                totalCompra: this.subtotal,
                produtos: this.cart,
                data: new Date()
            };
            console.log("o que sera add: ", formatar);
            // une as a lista nova com as outras
            let enviar = null;
            if (listaAntiga != null) {
                console.log("o que chegou: ", formatar);
                console.log("valor: ", listaAntiga.length);
                enviar = listaAntiga;
                enviar[listaAntiga.length] = formatar;
                console.log("ver: ", enviar);
            }
            else {
                enviar = [formatar];
                console.log("ver sem push: ", enviar);
            }
            // envia para o storage 
            this.storage.set("listaMercado", enviar).then(() => {
                console.log("listaMercado salvo");
                this.mensagemSucesso("Lista salva com sucesso !");
                this.tabsFunctions.getListaMercado();
            });
        }).catch((response) => {
            console.log("listaMercado erro: ", response);
        });
    }
    // cria a modal
    showModalOne() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalCTRL.create({
                component: src_app_components_modalone_modalone_component__WEBPACK_IMPORTED_MODULE_3__["ModaloneComponent"]
            });
            modal.present();
            this.cart = this.cartService.getCart();
        });
    }
    // fim da modal
    decreaseCartItem(product) {
        this.cartService.decreaseProduct(product);
    }
    increaseCartItem(product) {
        this.cartService.addProduct(product);
    }
    removeCartItem(product) {
        this.cartService.removeProduct(product);
    }
    // subtotal
    getTotal() {
        this.subtotal = this.cart.reduce((i, j) => i + j.preco * j.amount, 0);
        this.cartService.subtotalProduct(this.subtotal);
        return this.subtotal;
    }
    mensagemListaCompra() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (this.cart.length == 0) {
                this.mensagemErroUsuario("Carrinho não pode estar vazio!");
            }
            else {
                const alert = yield this.alertController.create({
                    cssClass: 'my-custom-class',
                    // header: 'Alert',
                    subHeader: 'Lista de compras',
                    message: 'Adicionar produtos do carrinho a lista de compra ?',
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
                                this.tituloLista();
                                console.log('Confirm Okay');
                            }
                        }
                    ]
                });
                yield alert.present();
            }
        });
    }
    tituloLista() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                // cssClass: 'my-custom-class',
                header: 'De um nome a sua lista',
                // subHeader: 'De um nome a sua lista',
                // message: 'Adicionar produtos do carrinho a lista de compra ?',
                inputs: [
                    {
                        name: 'name1',
                        type: 'text',
                        placeholder: 'Nome da lista',
                        value: this.titulo
                    },
                ],
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
                        handler: (alertData) => {
                            this.titulo = alertData.name1;
                            console.log(alertData.name1);
                            this.addLista();
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    mensagemSucesso(mensagem) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Sucesso',
                // subHeader: 'Sucesso',
                message: `${mensagem}`,
                buttons: ['OK']
            });
            yield alert.present();
        });
    }
    mensagemErroUsuario(mensagem) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const toast = yield this.toastCtrl.create({
                color: "primary",
                message: `${mensagem}`,
                duration: 2500
            });
            toast.present();
        });
    }
    ;
};
CarrinhoPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_4__["CartService"] },
    { type: src_app_shared_apimercado_service__WEBPACK_IMPORTED_MODULE_5__["ApimercadoService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_7__["Storage"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
    { type: src_app_shared_var_usuario_service__WEBPACK_IMPORTED_MODULE_8__["VarUsuarioService"] },
    { type: src_app_tabs_tabs_functions_service__WEBPACK_IMPORTED_MODULE_9__["TabsFunctionsService"] }
];
CarrinhoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-carrinho',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./carrinho.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/carrinho/carrinho.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./carrinho.page.scss */ "./src/app/pages/carrinho/carrinho.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
        src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_4__["CartService"],
        src_app_shared_apimercado_service__WEBPACK_IMPORTED_MODULE_5__["ApimercadoService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_7__["Storage"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
        src_app_shared_var_usuario_service__WEBPACK_IMPORTED_MODULE_8__["VarUsuarioService"],
        src_app_tabs_tabs_functions_service__WEBPACK_IMPORTED_MODULE_9__["TabsFunctionsService"]])
], CarrinhoPage);



/***/ })

}]);
//# sourceMappingURL=pages-carrinho-carrinho-module-es2015.js.map