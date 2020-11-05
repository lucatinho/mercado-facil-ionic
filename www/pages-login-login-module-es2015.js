(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-login-login-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n\n\t<ion-col>\n\t\t<div text-center>\n\t\t\t<h4 class=\"ion-text-center\">Login</h4>\n\t\t</div>\n\t\t<div padding>\n\t\t\t<ion-item>\n\t\t\t\t<ion-input type=\"text\" [(ngModel)]=\"username\" placeholder=\"Email\"></ion-input>\n\t\t\t</ion-item>\n\n\t\t\t<ion-item>\n\t\t\t\t<ion-input type=\"password\" [(ngModel)]=\"password\" placeholder=\"Senha\"></ion-input>\n\t\t\t</ion-item>\n\t\t</div>\n\t</ion-col>\n\t\t<div padding align-self-center>\n\t\t\t<ion-button size=\"default\" expand=\"block\" (click)=\"doLogin()\">Login</ion-button>\n\t\t</div>\n\t\n\n\t<span class=\"divider line one-line\">ou</span>\n\n\t<ion-button expand=\"block\" color=\"light\" routerLink=\"/cadastro\">\n\t\t<ion-text color=\"primary\">Cadastre-se</ion-text>\n\t</ion-button>\n\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/login/login-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/login/login-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: LoginPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function() { return LoginPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.page */ "./src/app/pages/login/login.page.ts");




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/login/login.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.module.ts ***!
  \*********************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login-routing.module */ "./src/app/pages/login/login-routing.module.ts");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.page */ "./src/app/pages/login/login.page.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");





let LoginPageModule = class LoginPageModule {
};
LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            _login_routing_module__WEBPACK_IMPORTED_MODULE_2__["LoginPageRoutingModule"]
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]]
    })
], LoginPageModule);



/***/ }),

/***/ "./src/app/pages/login/login.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-grid {\n  width: 100%;\n  height: 100%;\n  background: #dfdfdf;\n}\n\nion-row {\n  height: 100%;\n}\n\nion-col {\n  border: 1px solid #488aff;\n  background: #fff;\n}\n\nion-button {\n  font-weight: 300;\n}\n\n@media (min-width: 240px) and (max-width: 768px) {\n  ion-grid {\n    background: #fff;\n  }\n\n  ion-col {\n    border: none;\n  }\n}\n\n.divider {\n  display: flex;\n}\n\n.divider:before, .divider:after {\n  content: \"\";\n  flex: 1;\n}\n\n.line {\n  align-items: center;\n  margin: 1em -1em;\n  color: #cccccc;\n}\n\n.line:before, .line:after {\n  height: 1px;\n  margin: 0 1em;\n}\n\n.one-line:before, .one-line:after {\n  background: #cccccc;\n}\n\n.auth-form ion-grid,\n.auth-form ion-row {\n  height: 100%;\n  justify-content: center;\n}\n\n.already {\n  display: block;\n  text-align: center;\n  padding-bottom: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbG9naW4vSDpcXGlvbmljXFx0Y2Mvc3JjXFxhcHBcXHBhZ2VzXFxsb2dpblxcbG9naW4ucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDSSxXQUFBO0VBQ0EsWUFKUTtFQUtSLG1CQUFBO0FDRko7O0FES0E7RUFDSSxZQVRRO0FDT1o7O0FES0E7RUFDSSx5QkFBQTtFQUNBLGdCQWZVO0FDYWQ7O0FES0E7RUFDSSxnQkFBQTtBQ0ZKOztBREtBO0VBQ0k7SUFDSSxnQkF4Qk07RUNzQlo7O0VESUU7SUFDSSxZQUFBO0VDRE47QUFDRjs7QURLQTtFQUNJLGFBQUE7QUNISjs7QURLSTtFQUVFLFdBQUE7RUFDQSxPQUFBO0FDSk47O0FEUUE7RUFDSSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQ0xKOztBRE9JO0VBRUUsV0FBQTtFQUNBLGFBQUE7QUNOTjs7QURXSTtFQUVHLG1CQUFBO0FDVFA7O0FEYUE7O0VBRUksWUFBQTtFQUNBLHVCQUFBO0FDVko7O0FEYUE7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtBQ1ZKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbG9naW4vbG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJHdoaXRlLWNvbG9yOiAjZmZmO1xyXG4kaGVpZ2h0MTAwOiAxMDAlO1xyXG5cclxuaW9uLWdyaWQge1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIGhlaWdodDogJGhlaWdodDEwMDtcclxuICAgIGJhY2tncm91bmQ6ICNkZmRmZGY7XHJcbn1cclxuXHJcbmlvbi1yb3cge1xyXG4gICAgaGVpZ2h0OiAkaGVpZ2h0MTAwO1xyXG59XHJcblxyXG5pb24tY29sIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM0ODhhZmY7XHJcbiAgICBiYWNrZ3JvdW5kOiAkd2hpdGUtY29sb3I7XHJcbn1cclxuXHJcbmlvbi1idXR0b24ge1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDI0MHB4KSBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgIGlvbi1ncmlkIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAkd2hpdGUtY29sb3I7XHJcbiAgICB9XHJcbiAgICBpb24tY29sIHtcclxuICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICB9XHJcbn1cclxuLy8gb3V0cm9cclxuXHJcbi5kaXZpZGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBcclxuICAgICY6YmVmb3JlLFxyXG4gICAgJjphZnRlciB7XHJcbiAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgIGZsZXg6IDE7XHJcbiAgICB9XHJcbn1cclxuICBcclxuLmxpbmUge1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIG1hcmdpbjogMWVtIC0xZW07XHJcbiAgICBjb2xvcjogI2NjY2NjYztcclxuICAgIFxyXG4gICAgJjpiZWZvcmUsXHJcbiAgICAmOmFmdGVyIHtcclxuICAgICAgaGVpZ2h0OiAxcHg7XHJcbiAgICAgIG1hcmdpbjogMCAxZW07XHJcbiAgICB9XHJcbn0gXHJcblxyXG4ub25lLWxpbmUge1xyXG4gICAgJjpiZWZvcmUsXHJcbiAgICAmOmFmdGVyIHtcclxuICAgICAgIGJhY2tncm91bmQ6ICNjY2NjY2M7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5hdXRoLWZvcm0gaW9uLWdyaWQsXHJcbi5hdXRoLWZvcm0gaW9uLXJvdyB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLmFscmVhZHkge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxufSIsImlvbi1ncmlkIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZDogI2RmZGZkZjtcbn1cblxuaW9uLXJvdyB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuaW9uLWNvbCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM0ODhhZmY7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG59XG5cbmlvbi1idXR0b24ge1xuICBmb250LXdlaWdodDogMzAwO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogMjQwcHgpIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICBpb24tZ3JpZCB7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgfVxuXG4gIGlvbi1jb2wge1xuICAgIGJvcmRlcjogbm9uZTtcbiAgfVxufVxuLmRpdmlkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLmRpdmlkZXI6YmVmb3JlLCAuZGl2aWRlcjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGZsZXg6IDE7XG59XG5cbi5saW5lIHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luOiAxZW0gLTFlbTtcbiAgY29sb3I6ICNjY2NjY2M7XG59XG4ubGluZTpiZWZvcmUsIC5saW5lOmFmdGVyIHtcbiAgaGVpZ2h0OiAxcHg7XG4gIG1hcmdpbjogMCAxZW07XG59XG5cbi5vbmUtbGluZTpiZWZvcmUsIC5vbmUtbGluZTphZnRlciB7XG4gIGJhY2tncm91bmQ6ICNjY2NjY2M7XG59XG5cbi5hdXRoLWZvcm0gaW9uLWdyaWQsXG4uYXV0aC1mb3JtIGlvbi1yb3cge1xuICBoZWlnaHQ6IDEwMCU7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uYWxyZWFkeSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/login/login.page.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/login/login.page.ts ***!
  \*******************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_shared_apimercado_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/apimercado.service */ "./src/app/shared/apimercado.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_shared_var_usuario_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/var-usuario.service */ "./src/app/shared/var-usuario.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var src_app_tabs_tabs_functions_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/tabs/tabs-functions.service */ "./src/app/tabs/tabs-functions.service.ts");








let LoginPage = class LoginPage {
    constructor(service, router, saveUser, toastCtrl, alertCtrl, navCtrl, storage, tabsFunctions, loadingController) {
        this.service = service;
        this.router = router;
        this.saveUser = saveUser;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.tabsFunctions = tabsFunctions;
        this.loadingController = loadingController;
    }
    ngOnInit() { }
    doLogin() {
        console.log("login: ", this.username, this.password);
        let resp = this.service.login(this.username, this.password);
        this.saveUser.postLogin(this.username, this.password);
        resp.subscribe(data => {
            this.message = data;
            // console.log("mensagem: ", this.message);
        });
        this.sessao();
    }
    sessao() {
        // this.saveUser.postLogin(this.username,this.password);
        this.telaCarregamento().then(() => {
            let val = {
                username: this.username,
                password: this.password
            };
            this.service.sessaoCliente(val)
                .then((response) => {
                this.login = response;
                console.log("sessao: ", this.login);
                this.saveUser.postInfoCliente(this.login);
                this.tabsFunctions.sessaoCliente();
                this.loadingController.dismiss();
                this.navCtrl.navigateRoot(["/tabs/tab1"]);
            })
                .catch((response) => {
                this.login = response;
                this.loadingController.dismiss();
                this.mensagemErroUsuario("Usuario ou senha incorretos");
            });
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
LoginPage.ctorParameters = () => [
    { type: src_app_shared_apimercado_service__WEBPACK_IMPORTED_MODULE_2__["ApimercadoService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: src_app_shared_var_usuario_service__WEBPACK_IMPORTED_MODULE_4__["VarUsuarioService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"] },
    { type: src_app_tabs_tabs_functions_service__WEBPACK_IMPORTED_MODULE_7__["TabsFunctionsService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"] }
];
LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.page.scss */ "./src/app/pages/login/login.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_apimercado_service__WEBPACK_IMPORTED_MODULE_2__["ApimercadoService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        src_app_shared_var_usuario_service__WEBPACK_IMPORTED_MODULE_4__["VarUsuarioService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"],
        src_app_tabs_tabs_functions_service__WEBPACK_IMPORTED_MODULE_7__["TabsFunctionsService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"]])
], LoginPage);



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");





let SharedModule = class SharedModule {
};
SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        exports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"]
        ]
    })
], SharedModule);



/***/ })

}]);
//# sourceMappingURL=pages-login-login-module-es2015.js.map