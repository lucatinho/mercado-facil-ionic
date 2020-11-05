(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-user-endereco-novo-endereco-novo-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/user/endereco-novo/endereco-novo.page.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/user/endereco-novo/endereco-novo.page.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"false\">\n  <ion-toolbar color=\"base_header\">\n     <!-- botao voltar -->\n     <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>\n      Adicionar endereço\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"ion-padding\">\n    <form [formGroup]=\"enderecoForm\" (ngSubmit)=\"submit()\">\n\n      <ion-list formGroupName=\"endereco\">\n        \n        <ion-item>\n          <ion-label position=\"floating\">Cidade</ion-label>\n          <ion-input formControlName=\"cidade\"></ion-input>\n        </ion-item>\n        <div *ngFor=\"let error of errorMessages.cidade\">\n          <ng-container *ngIf=\"cidade.hasError(error.type) && (cidade.dirty || cidade.touched)\">\n            <small class=\"error-message\">{{error.message}}</small>\n          </ng-container>\n        </div>\n        <ion-item>\n          <ion-label position=\"floating\">Bairro</ion-label>\n          <ion-input formControlName=\"bairro\"></ion-input>\n        </ion-item>\n        <div *ngFor=\"let error of errorMessages.bairro\">\n          <ng-container *ngIf=\"bairro.hasError(error.type) && (bairro.dirty || bairro.touched)\">\n            <small class=\"error-message\">{{error.message}}</small>\n          </ng-container>\n        </div>\n\n        <ion-item>\n          <ion-label position=\"floating\">Rua</ion-label>\n          <ion-input formControlName=\"rua\"></ion-input>\n        </ion-item>\n        <div *ngFor=\"let error of errorMessages.rua\">\n          <ng-container *ngIf=\"rua.hasError(error.type) && (rua.dirty || rua.touched)\">\n            <small class=\"error-message\">{{error.message}}</small>\n          </ng-container>\n        </div>\n       \n        <ion-item>\n          <ion-label position=\"floating\">Numero</ion-label>\n          <ion-input inputmode=\"tel\" formControlName=\"numero\"></ion-input>\n        </ion-item>\n        <div *ngFor=\"let error of errorMessages.numero\">\n          <ng-container *ngIf=\"numero.hasError(error.type) && (numero.dirty || numero.touched)\">\n            <small class=\"error-message\">{{error.message}}</small>\n          </ng-container>\n        </div>\n        \n\n        <ion-item>\n          <ion-label position=\"floating\">CEP</ion-label>\n          <ion-input inputmode=\"tel\" formControlName=\"cep\"></ion-input>\n        </ion-item>\n        <div *ngFor=\"let error of errorMessages.cep\">\n          <ng-container *ngIf=\"cep.hasError(error.type) && (cep.dirty || cep.touched)\">\n            <small class=\"error-message\">{{error.message}}</small>\n          </ng-container>\n        </div>\n      </ion-list>\n      <ion-button [disabled]=\"!enderecoForm.valid\" type=\"submit\" expand=\"block\">Adicionar <ion-icon slot=\"end\"\n          name=\"create\">\n        </ion-icon>\n      </ion-button>\n    </form>\n  </div>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/user/endereco-novo/endereco-novo-routing.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/pages/user/endereco-novo/endereco-novo-routing.module.ts ***!
  \**************************************************************************/
/*! exports provided: EnderecoNovoPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnderecoNovoPageRoutingModule", function() { return EnderecoNovoPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _endereco_novo_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./endereco-novo.page */ "./src/app/pages/user/endereco-novo/endereco-novo.page.ts");




const routes = [
    {
        path: '',
        component: _endereco_novo_page__WEBPACK_IMPORTED_MODULE_3__["EnderecoNovoPage"]
    }
];
let EnderecoNovoPageRoutingModule = class EnderecoNovoPageRoutingModule {
};
EnderecoNovoPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], EnderecoNovoPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/user/endereco-novo/endereco-novo.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/user/endereco-novo/endereco-novo.module.ts ***!
  \******************************************************************/
/*! exports provided: EnderecoNovoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnderecoNovoPageModule", function() { return EnderecoNovoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _endereco_novo_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./endereco-novo-routing.module */ "./src/app/pages/user/endereco-novo/endereco-novo-routing.module.ts");
/* harmony import */ var _endereco_novo_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./endereco-novo.page */ "./src/app/pages/user/endereco-novo/endereco-novo.page.ts");







let EnderecoNovoPageModule = class EnderecoNovoPageModule {
};
EnderecoNovoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            // FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _endereco_novo_routing_module__WEBPACK_IMPORTED_MODULE_5__["EnderecoNovoPageRoutingModule"]
        ],
        declarations: [_endereco_novo_page__WEBPACK_IMPORTED_MODULE_6__["EnderecoNovoPage"]]
    })
], EnderecoNovoPageModule);



/***/ }),

/***/ "./src/app/pages/user/endereco-novo/endereco-novo.page.scss":
/*!******************************************************************!*\
  !*** ./src/app/pages/user/endereco-novo/endereco-novo.page.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3VzZXIvZW5kZXJlY28tbm92by9lbmRlcmVjby1ub3ZvLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/user/endereco-novo/endereco-novo.page.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/user/endereco-novo/endereco-novo.page.ts ***!
  \****************************************************************/
/*! exports provided: EnderecoNovoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnderecoNovoPage", function() { return EnderecoNovoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_shared_apimercado_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/apimercado.service */ "./src/app/shared/apimercado.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _uservariable_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../uservariable.service */ "./src/app/pages/user/uservariable.service.ts");








let EnderecoNovoPage = class EnderecoNovoPage {
    constructor(formBuilder, apimercado, loadingController, toastCtrl, alertCtrl, router, storage, uservariable) {
        this.formBuilder = formBuilder;
        this.apimercado = apimercado;
        this.loadingController = loadingController;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.router = router;
        this.storage = storage;
        this.uservariable = uservariable;
        this.errorMessages = {
            rua: [
                { type: 'required', message: 'Rua não pode ser vazio' },
                { type: 'maxlength', message: 'Rua não pode ter mais de 100 caracteres' }
            ],
            cidade: [
                { type: 'required', message: 'Cidade não pode ser vazio' },
                {
                    type: 'pattern',
                    message: 'Por favor insira uma cidade valida'
                }
            ],
            bairro: [
                { type: 'required', message: 'Bairro não pode ser vazio' },
                {
                    type: 'pattern',
                    message: 'Por favor insira um bairro valido'
                }
            ],
            numero: [
                { type: 'required', message: 'Numero não pode ser vazio' },
                {
                    type: 'pattern',
                    message: 'Por favor insira um numero valido'
                }
            ],
            cep: [
                { type: 'required', message: 'CEP não pode ser vazio' },
                {
                    type: 'pattern',
                    message: 'Por favor coloque um CEP valido'
                }
            ]
        };
        this.enderecoForm = this.formBuilder.group({
            endereco: this.formBuilder.group({
                rua: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(100)]],
                cidade: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[a-zA-Z]{2,20}')]],
                bairro: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(100)]],
                numero: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[0-9]{1,6}')]],
                cep: [
                    '',
                    [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[0-9]{5}(?:-[0-9]{3})?$')]
                ]
            })
        });
    }
    ngOnInit() {
        this.sessaoCliente();
        // this.lastUrlFalse();
    }
    get cidade() {
        return this.enderecoForm.get('endereco.cidade');
    }
    get bairro() {
        return this.enderecoForm.get('endereco.bairro');
    }
    get rua() {
        return this.enderecoForm.get('endereco.rua');
    }
    get numero() {
        return this.enderecoForm.get('endereco.numero');
    }
    get cep() {
        return this.enderecoForm.get('endereco.cep');
    }
    //   submit() {
    // this.varsessao.endereco.push(this.enderecoForm);
    //   }
    submit() {
        this.varsessao.endereco.push(this.enderecoForm.value.endereco);
        console.log("endereço novo: ", this.varsessao);
        this.telaCarregamento().then(() => {
            this.apimercado.postCliente(this.varsessao).then((response) => {
                this.loadingController.dismiss();
                console.log("funcionou Usuario = ", response);
                this.result = response;
                this.uservariable.sessaoCliente();
                this.router.navigate(["/endereco-edit"]);
                this.mensagemErro("Endereço adicionado !");
            })
                .catch((response) => {
                console.log("deu erro usuario = ", response);
                this.result = response;
                this.loadingController.dismiss();
                this.mensagemErroSistema("Erro ao adicionar endereço");
            });
        });
    }
    ;
    sessaoCliente() {
        this.storage.get("login").then((val) => {
            // chama a tela de carregamento
            this.apimercado.sessaoCliente(val)
                .then((response) => {
                this.varsessao = response;
                console.log("Sessao: ", this.varsessao);
                // fecha a tela de carregamento
                console.log("nomeLoginSessao", this.varsessao);
                // this.nome = this.varSessao.nomeLogin;
            })
                .catch((response) => {
                this.varsessao = response;
                console.log("Deu errrado a sessao: ", this.varsessao);
                // fecha a tela de carregamento
            });
        }).catch((response) => {
            console.log("nao esta logado storage: ", response);
        });
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
    mensagemErro(mensagem) {
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
};
EnderecoNovoPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: src_app_shared_apimercado_service__WEBPACK_IMPORTED_MODULE_3__["ApimercadoService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"] },
    { type: _uservariable_service__WEBPACK_IMPORTED_MODULE_7__["UservariableService"] }
];
EnderecoNovoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-endereco-novo',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./endereco-novo.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/user/endereco-novo/endereco-novo.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./endereco-novo.page.scss */ "./src/app/pages/user/endereco-novo/endereco-novo.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        src_app_shared_apimercado_service__WEBPACK_IMPORTED_MODULE_3__["ApimercadoService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"],
        _uservariable_service__WEBPACK_IMPORTED_MODULE_7__["UservariableService"]])
], EnderecoNovoPage);



/***/ })

}]);
//# sourceMappingURL=pages-user-endereco-novo-endereco-novo-module-es2015.js.map