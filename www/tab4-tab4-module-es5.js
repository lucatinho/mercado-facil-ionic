function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab4-tab4-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/tab4/tab4.page.html":
  /*!***************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab4/tab4.page.html ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTab4Tab4PageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"base_header\">\n    <!-- botao de refresh -->\n    <ion-buttons slot=\"end\">\n      <ion-button  (click)=\"sessaoCliente()\">\n        <ion-icon name=\"refresh-circle-outline\" style=\"zoom:1.5;\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title >\n      Perfil\n    </ion-title>\n    \n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n\n  <ion-item lines=\"none\">\n    <ion-avatar slot=\"end\">\n      <img src=\"assets/img/avatar.png\">\n    </ion-avatar>\n    <ion-label>\n      <h2>{{ varsessao.nome }}</h2>\n      <!-- <h2>Nome do Usuario</h2> -->\n    </ion-label>\n  </ion-item>\n\n  <ion-item-divider color=\"cinza_fundo\"></ion-item-divider>\n\n\n  <ion-item lines=\"none\">\n    <ion-label>Email</ion-label>\n    <ion-note slot=\"end\">{{ varsessao.email }}</ion-note>\n  </ion-item>\n\n  <ion-item lines=\"none\" routerLink=\"/endereco-edit\">\n    <ion-label>Endereço de entrega</ion-label>\n    <!-- <ion-note slot=\"end\">{{ endereco.bairro }}, {{ endereco.rua }}, {{ endereco.numero }}</ion-note> -->\n    <ion-icon slot=\"end\" name=\"create-outline\"></ion-icon>\n  </ion-item>\n\n\n  <ion-item-divider color=\"cinza_fundo\"></ion-item-divider>\n\n  <ion-item>\n    <ion-label>Data de Nascimento</ion-label>\n    <ion-datetime value=\"1990-04-03\" placeholder=\"Select Date\"></ion-datetime>\n  </ion-item>\n\n\n</ion-content>\n\n<ion-button expand=\"block\" color=\"base_header\" (click)=\"sairConta()\">\n  <th>Sair da conta</th>\n</ion-button> ";
    /***/
  },

  /***/
  "./src/app/tab4/tab4.module.ts":
  /*!*************************************!*\
    !*** ./src/app/tab4/tab4.module.ts ***!
    \*************************************/

  /*! exports provided: Tab4PageModule */

  /***/
  function srcAppTab4Tab4ModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Tab4PageModule", function () {
      return Tab4PageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _tab4_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./tab4.page */
    "./src/app/tab4/tab4.page.ts");
    /* harmony import */


    var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../explore-container/explore-container.module */
    "./src/app/explore-container/explore-container.module.ts");

    var Tab4PageModule = function Tab4PageModule() {
      _classCallCheck(this, Tab4PageModule);
    };

    Tab4PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
      imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_7__["ExploreContainerComponentModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{
        path: '',
        component: _tab4_page__WEBPACK_IMPORTED_MODULE_6__["Tab4Page"]
      }])],
      declarations: [_tab4_page__WEBPACK_IMPORTED_MODULE_6__["Tab4Page"]]
    })], Tab4PageModule);
    /***/
  },

  /***/
  "./src/app/tab4/tab4.page.scss":
  /*!*************************************!*\
    !*** ./src/app/tab4/tab4.page.scss ***!
    \*************************************/

  /*! exports provided: default */

  /***/
  function srcAppTab4Tab4PageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-content {\n  --background: translucent;\n}\n\nion-content {\n  --background: #e7e7e7;\n}\n\nion-avatar {\n  width: 60px !important;\n  height: 60px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFiNC9IOlxcaW9uaWNcXHRjYy9zcmNcXGFwcFxcdGFiNFxcdGFiNC5wYWdlLnNjc3MiLCJzcmMvYXBwL3RhYjQvdGFiNC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBQTtBQ0NGOztBREVBO0VBQ0UscUJBQUE7QUNDRjs7QURFQTtFQUNFLHNCQUFBO0VBQ0EsdUJBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL3RhYjQvdGFiNC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNsdWNlbnQ7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiAjZTdlN2U3O1xufVxuXG5pb24tYXZhdGFye1xuICB3aWR0aDogNjBweCAhaW1wb3J0YW50OyBcbiAgaGVpZ2h0IDogNjBweCAhaW1wb3J0YW50O1xufSIsImlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc2x1Y2VudDtcbn1cblxuaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6ICNlN2U3ZTc7XG59XG5cbmlvbi1hdmF0YXIge1xuICB3aWR0aDogNjBweCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDYwcHggIWltcG9ydGFudDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/tab4/tab4.page.ts":
  /*!***********************************!*\
    !*** ./src/app/tab4/tab4.page.ts ***!
    \***********************************/

  /*! exports provided: Tab4Page */

  /***/
  function srcAppTab4Tab4PageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Tab4Page", function () {
      return Tab4Page;
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


    var _shared_apimercado_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../shared/apimercado.service */
    "./src/app/shared/apimercado.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _shared_var_usuario_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../shared/var-usuario.service */
    "./src/app/shared/var-usuario.service.ts");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");

    var Tab4Page = /*#__PURE__*/function () {
      function Tab4Page(apimercado, router, modalCTRL, varuser, storage) {
        _classCallCheck(this, Tab4Page);

        this.apimercado = apimercado;
        this.router = router;
        this.modalCTRL = modalCTRL;
        this.varuser = varuser;
        this.storage = storage;
        this.varsessao = "Valor ilusorio";
        this.endereco = {};
      }

      _createClass(Tab4Page, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          // puxa metodo banco
          this.sessaoCliente();
        }
      }, {
        key: "enderecoPrincipal",
        value: function enderecoPrincipal() {
          // this.varuser.getInfoCliente().endereco
          for (var index = 0; index < this.varsessao.endereco.length; index++) {
            if (this.varsessao.endereco[index].principal == true) {
              this.endereco = this.varsessao.endereco[index];
              console.log("ta: ", this.endereco);
            }
          }
        }
      }, {
        key: "sessaoCliente",
        value: function sessaoCliente() {
          var _this = this;

          this.storage.get("login").then(function (val) {
            if (val != null) {
              // chama a tela de carregamento
              _this.apimercado.sessaoCliente(val).then(function (response) {
                _this.varsessao = response;

                _this.varuser.postInfoCliente(response);

                console.log("Sessao: ", _this.varsessao); // fecha a tela de carregamento

                _this.enderecoPrincipal(); // this.nome = this.varSessao.nomeLogin;

              })["catch"](function (response) {
                _this.varsessao = response;
                console.log("Deu errrado a sessao: ", _this.varsessao); // fecha a tela de carregamento
              });
            } else {
              console.log("nao ta logado");

              _this.router.navigate(["/login"]);
            }
          })["catch"](function (response) {
            console.log("nao esta logado storage: ", response);
          });
        } // cria a modal
        //  async editarEndereco() {
        //   const modal = await this.modalCTRL.create({
        //     component: EditEnderecoComponent
        //   });
        //   modal.present();
        // }
        // fim da modal

      }, {
        key: "sairConta",
        value: function sairConta() {
          var _this2 = this;

          // chama a tela de carregamento
          this.apimercado.logout().then(function (response) {
            _this2.varLogaut = response;
            console.log("sucesso: ", _this2.varLogaut);

            _this2.router.navigate(["/login"]); // fecha a tela de carregamento

          })["catch"](function (response) {
            _this2.varLogaut = response;

            if (_this2.varLogaut.status == 200) {
              _this2.varuser.deleteLogin();

              console.log("Deu certo sair da conta: ", _this2.varLogaut);

              _this2.router.navigate(["/login"]);
            } // fecha a tela de carregamento

          });
        }
      }]);

      return Tab4Page;
    }();

    Tab4Page.ctorParameters = function () {
      return [{
        type: _shared_apimercado_service__WEBPACK_IMPORTED_MODULE_2__["ApimercadoService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
      }, {
        type: _shared_var_usuario_service__WEBPACK_IMPORTED_MODULE_5__["VarUsuarioService"]
      }, {
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"]
      }];
    };

    Tab4Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-tab4',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./tab4.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/tab4/tab4.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./tab4.page.scss */
      "./src/app/tab4/tab4.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_apimercado_service__WEBPACK_IMPORTED_MODULE_2__["ApimercadoService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"], _shared_var_usuario_service__WEBPACK_IMPORTED_MODULE_5__["VarUsuarioService"], _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"]])], Tab4Page);
    /***/
  }
}]);
//# sourceMappingURL=tab4-tab4-module-es5.js.map