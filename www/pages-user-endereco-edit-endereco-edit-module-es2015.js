(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-user-endereco-edit-endereco-edit-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/userEdit/edit-endereco/edit-endereco.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/userEdit/edit-endereco/edit-endereco.component.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"false\">\n  <ion-toolbar color=\"base_header\">\n    <!-- botao voltar -->\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"close()\">\n        <!-- <ion-icon name=\"arrow-back-outline\"></ion-icon> -->\n        <ion-icon name=\"arrow-down-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <!-- <ion-title class=\"ion-text-center\"> -->\n    <ion-title>\n      Adicionar endereço\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <!-- <div class=\"ion-padding\">\n    <form [formGroup]=\"registrationForm\" (ngSubmit)=\"submit()\">\n\n      <ion-list formGroupName=\"endereco\">\n        <ion-list-header>\n          <ion-label>Endereço</ion-label>\n        </ion-list-header>\n        <ion-item>\n          <ion-label position=\"floating\">Cidade</ion-label>\n          <ion-input formControlName=\"cidade\"></ion-input>\n        </ion-item>\n        <div *ngFor=\"let error of errorMessages.cidade\">\n          <ng-container *ngIf=\"cidade.hasError(error.type) && (cidade.dirty || cidade.touched)\">\n            <small class=\"error-message\">{{error.message}}</small>\n          </ng-container>\n        </div>\n        <ion-item>\n          <ion-label position=\"floating\">Bairro</ion-label>\n          <ion-input formControlName=\"bairro\"></ion-input>\n        </ion-item>\n        <div *ngFor=\"let error of errorMessages.bairro\">\n          <ng-container *ngIf=\"bairro.hasError(error.type) && (bairro.dirty || bairro.touched)\">\n            <small class=\"error-message\">{{error.message}}</small>\n          </ng-container>\n        </div>\n\n        <ion-item>\n          <ion-label position=\"floating\">Rua</ion-label>\n          <ion-input formControlName=\"rua\"></ion-input>\n        </ion-item>\n        <div *ngFor=\"let error of errorMessages.rua\">\n          <ng-container *ngIf=\"rua.hasError(error.type) && (rua.dirty || rua.touched)\">\n            <small class=\"error-message\">{{error.message}}</small>\n          </ng-container>\n        </div>\n       \n        <ion-item>\n          <ion-label position=\"floating\">Numero</ion-label>\n          <ion-input inputmode=\"tel\" formControlName=\"numero\"></ion-input>\n        </ion-item>\n        <div *ngFor=\"let error of errorMessages.numero\">\n          <ng-container *ngIf=\"numero.hasError(error.type) && (numero.dirty || numero.touched)\">\n            <small class=\"error-message\">{{error.message}}</small>\n          </ng-container>\n        </div>\n        \n\n        <ion-item>\n          <ion-label position=\"floating\">CEP</ion-label>\n          <ion-input inputmode=\"tel\" formControlName=\"cep\"></ion-input>\n        </ion-item>\n        <div *ngFor=\"let error of errorMessages.cep\">\n          <ng-container *ngIf=\"cep.hasError(error.type) && (cep.dirty || cep.touched)\">\n            <small class=\"error-message\">{{error.message}}</small>\n          </ng-container>\n        </div>\n      </ion-list>\n      <ion-button [disabled]=\"!registrationForm.valid\" type=\"submit\" expand=\"block\">Submit <ion-icon slot=\"end\"\n          name=\"create\">\n        </ion-icon>\n      </ion-button>\n    </form>\n  </div> -->\n\n</ion-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/user/endereco-edit/endereco-edit.page.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/user/endereco-edit/endereco-edit.page.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"base_header\">\n    <!-- botao voltar -->\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"\"></ion-back-button>\n    </ion-buttons>\n    <!-- botao de refresh -->\n    <ion-buttons (click)=\"enderecoNovo()\" slot=\"end\">\n      <ion-button>\n        <ion-icon name=\"add-outline\" style=\"zoom:1.5;\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Seus endereços</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <!-- Checkboxes in a List -->\n  <ion-list>\n    <ion-radio-group value={{isCheck}}>\n\n      <ion-list-header>\n        <ion-label>Selecione o endereço para entrega</ion-label>\n      </ion-list-header>\n\n      <ion-item *ngFor=\"let endereco of varsessao.endereco\" (click)=\"check(endereco.idEndereco)\">\n        <ion-label>{{ endereco.bairro }}, {{ endereco.rua }}, Nº {{ endereco.numero }}</ion-label>\n        <ion-radio slot=\"start\" color=\"tertiary\" value={{endereco.idEndereco}}></ion-radio>\n        <!-- <ion-radio slot=\"start\" color=\"tertiary\" value={{endereco.principal}} [(ngModel)]=\"endereco.principal\"></ion-radio> -->\n      </ion-item>\n\n    </ion-radio-group>\n  </ion-list>\n\n</ion-content>");

/***/ }),

/***/ "./src/app/components/userEdit/edit-endereco/edit-endereco.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/components/userEdit/edit-endereco/edit-endereco.component.scss ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".error-message {\n  color: var(--ion-color-danger);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91c2VyRWRpdC9lZGl0LWVuZGVyZWNvL0g6XFxpb25pY1xcdGNjL3NyY1xcYXBwXFxjb21wb25lbnRzXFx1c2VyRWRpdFxcZWRpdC1lbmRlcmVjb1xcZWRpdC1lbmRlcmVjby5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy91c2VyRWRpdC9lZGl0LWVuZGVyZWNvL2VkaXQtZW5kZXJlY28uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw4QkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy91c2VyRWRpdC9lZGl0LWVuZGVyZWNvL2VkaXQtZW5kZXJlY28uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXJyb3ItbWVzc2FnZSB7XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhbmdlcik7XHJcbn0iLCIuZXJyb3ItbWVzc2FnZSB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyKTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/components/userEdit/edit-endereco/edit-endereco.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/components/userEdit/edit-endereco/edit-endereco.component.ts ***!
  \******************************************************************************/
/*! exports provided: EditEnderecoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditEnderecoComponent", function() { return EditEnderecoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");



let EditEnderecoComponent = class EditEnderecoComponent {
    constructor(modalCTRL) {
        this.modalCTRL = modalCTRL;
    }
    ngOnInit() { }
    close() {
        this.modalCTRL.dismiss();
    }
};
EditEnderecoComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] }
];
EditEnderecoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-edit-endereco',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./edit-endereco.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/userEdit/edit-endereco/edit-endereco.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./edit-endereco.component.scss */ "./src/app/components/userEdit/edit-endereco/edit-endereco.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])
], EditEnderecoComponent);



/***/ }),

/***/ "./src/app/pages/user/endereco-edit/endereco-edit-routing.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/pages/user/endereco-edit/endereco-edit-routing.module.ts ***!
  \**************************************************************************/
/*! exports provided: EnderecoEditPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnderecoEditPageRoutingModule", function() { return EnderecoEditPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _endereco_edit_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./endereco-edit.page */ "./src/app/pages/user/endereco-edit/endereco-edit.page.ts");




const routes = [
    {
        path: '',
        component: _endereco_edit_page__WEBPACK_IMPORTED_MODULE_3__["EnderecoEditPage"]
    }
];
let EnderecoEditPageRoutingModule = class EnderecoEditPageRoutingModule {
};
EnderecoEditPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], EnderecoEditPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/user/endereco-edit/endereco-edit.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/user/endereco-edit/endereco-edit.module.ts ***!
  \******************************************************************/
/*! exports provided: EnderecoEditPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnderecoEditPageModule", function() { return EnderecoEditPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _endereco_edit_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./endereco-edit-routing.module */ "./src/app/pages/user/endereco-edit/endereco-edit-routing.module.ts");
/* harmony import */ var _endereco_edit_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./endereco-edit.page */ "./src/app/pages/user/endereco-edit/endereco-edit.page.ts");
/* harmony import */ var src_app_components_userEdit_edit_endereco_edit_endereco_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/userEdit/edit-endereco/edit-endereco.component */ "./src/app/components/userEdit/edit-endereco/edit-endereco.component.ts");








let EnderecoEditPageModule = class EnderecoEditPageModule {
};
EnderecoEditPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _endereco_edit_routing_module__WEBPACK_IMPORTED_MODULE_5__["EnderecoEditPageRoutingModule"]
        ],
        declarations: [_endereco_edit_page__WEBPACK_IMPORTED_MODULE_6__["EnderecoEditPage"], src_app_components_userEdit_edit_endereco_edit_endereco_component__WEBPACK_IMPORTED_MODULE_7__["EditEnderecoComponent"]],
        entryComponents: [src_app_components_userEdit_edit_endereco_edit_endereco_component__WEBPACK_IMPORTED_MODULE_7__["EditEnderecoComponent"]]
    })
], EnderecoEditPageModule);



/***/ }),

/***/ "./src/app/pages/user/endereco-edit/endereco-edit.page.scss":
/*!******************************************************************!*\
  !*** ./src/app/pages/user/endereco-edit/endereco-edit.page.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3VzZXIvZW5kZXJlY28tZWRpdC9lbmRlcmVjby1lZGl0LnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/user/endereco-edit/endereco-edit.page.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/user/endereco-edit/endereco-edit.page.ts ***!
  \****************************************************************/
/*! exports provided: EnderecoEditPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnderecoEditPage", function() { return EnderecoEditPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_shared_apimercado_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/apimercado.service */ "./src/app/shared/apimercado.service.ts");
/* harmony import */ var src_app_shared_var_usuario_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/var-usuario.service */ "./src/app/shared/var-usuario.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _uservariable_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../uservariable.service */ "./src/app/pages/user/uservariable.service.ts");








let EnderecoEditPage = class EnderecoEditPage {
    constructor(apimercado, modalCTRL, loadingController, toastCtrl, alertCtrl, varuser, storage, router, uservariable) {
        this.apimercado = apimercado;
        this.modalCTRL = modalCTRL;
        this.loadingController = loadingController;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.varuser = varuser;
        this.storage = storage;
        this.router = router;
        this.uservariable = uservariable;
        this.varsessao = {};
        this.isCheck = 0;
        this.validaitor = false;
    }
    ngOnInit() {
        this.sessaoCliente();
    }
    check(id) {
        for (let index = 0; index < this.varsessao.endereco.length; index++) {
            if (this.varsessao.endereco[index].principal == true) {
                this.varsessao.endereco[index].principal = false;
            }
            if (this.varsessao.endereco[index].idEndereco == id) {
                this.varsessao.endereco[index].principal = true;
                this.putEndereco();
            }
        }
    }
    checkbox() {
        // this.uservariable.checkbox();
        // for (let index = 0; index < this.varsessao.endereco.length; index++) {
        //   if (this.varsessao.endereco[index].principal == true) {
        //     this.isCheck = this.varsessao.endereco[index].idEndereco
        //     console.log("entrou", this.varsessao)
        //   }
        // }
    }
    putEndereco() {
        console.log("enviar: ", this.varsessao.endereco);
        this.telaCarregamento().then(() => {
            this.apimercado.postCliente(this.varsessao).then((response) => {
                this.loadingController.dismiss();
                console.log("funcionou Usuario = ", response);
                this.result = response;
                // window.location.reload();
                this.mensagemErro("Endereço principal alterado !");
            })
                .catch((response) => {
                console.log("deu erro usuario = ", response);
                this.result = response;
                this.loadingController.dismiss();
                this.mensagemErro("Erro ao trocar endereço");
            });
        });
    }
    sessaoCliente() {
        this.uservariable.sessaoCliente();
        this.uservariable.serviceData
            .subscribe(data => (this.varsessao = data));
        this.uservariable.serviceCheck
            .subscribe(data => (this.isCheck = data));
        //  this.checkbox();
        // this.storage.get("login").then((val) => {
        //   // chama a tela de carregamento
        //   if (val != null) {
        //     this.apimercado.sessaoCliente(val)
        //       .then((response) => {
        //         this.varsessao = response;
        //         this.varuser.postInfoCliente(response);
        //         console.log("Sessao: ", this.varsessao);
        // this.checkbox();
        //         // fecha a tela de carregamento
        //         console.log("nomeLoginSessao", this.varsessao);
        //         this.validaitor = true;
        //         // this.nome = this.varSessao.nomeLogin;
        //       })
        //       .catch((response) => {
        //         this.varsessao = response;
        //         console.log("Deu errrado a sessao: ", this.varsessao);
        //         // fecha a tela de carregamento
        //       });
        //   } else {
        //     this.router.navigate(["/login"])
        //   }
        // }).catch((response) => {
        //   console.log("nao esta logado storage: ", response);
        // });
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
    enderecoNovo() {
        this.uservariable.enderecoNovo();
    }
    mensagemErro(mensagem) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            // mensagem de add carinho
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
};
EnderecoEditPage.ctorParameters = () => [
    { type: src_app_shared_apimercado_service__WEBPACK_IMPORTED_MODULE_3__["ApimercadoService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: src_app_shared_var_usuario_service__WEBPACK_IMPORTED_MODULE_4__["VarUsuarioService"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _uservariable_service__WEBPACK_IMPORTED_MODULE_7__["UservariableService"] }
];
EnderecoEditPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-endereco-edit',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./endereco-edit.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/user/endereco-edit/endereco-edit.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./endereco-edit.page.scss */ "./src/app/pages/user/endereco-edit/endereco-edit.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_apimercado_service__WEBPACK_IMPORTED_MODULE_3__["ApimercadoService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
        src_app_shared_var_usuario_service__WEBPACK_IMPORTED_MODULE_4__["VarUsuarioService"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"],
        _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
        _uservariable_service__WEBPACK_IMPORTED_MODULE_7__["UservariableService"]])
], EnderecoEditPage);



/***/ })

}]);
//# sourceMappingURL=pages-user-endereco-edit-endereco-edit-module-es2015.js.map