function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-lista-compras-lista-compras-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/lista-compras/lista-compras.page.html":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/lista-compras/lista-compras.page.html ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesListaComprasListaComprasPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header [translucent]=\"false\">\n  <ion-toolbar color=\"base_header\">\n    <!-- botao voltar -->\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>\n      Lista de compras \n    </ion-title>\n    <ion-title size=\"small\">{{ banco.titulo }}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n<!-- inicio produto-->\n<ion-item-sliding *ngFor=\"let item of banco.produtos\" id=\"item100\">\n  <ion-item>\n    <ion-thumbnail slot=\"start\">\n      <img src={{item.imgProduto}}>\n    </ion-thumbnail>\n\n    <ion-label>\n      <h2>{{ item.nomeProduto }}</h2>\n      <p>{{ item.marca.nomeMarca }}</p>\n      <ion-note slot=\"end\" color=\"text\">{{ item.preco | currency:'BRL' }}</ion-note>\n      <!-- <ion-note slot=\"end\" color=\"text\">{{ item.amount * item.preco | currency:'BRL' }}</ion-note> -->\n    </ion-label>\n    <!--botões de soma-->\n    <ion-buttons color=\"icon\" slot=\"end\">\n      <!-- <ion-button color=\"icon\" (click)=\"decreaseCartItem(p)\">\n        <ion-icon name=\"remove-outline\"></ion-icon>\n      </ion-button> -->\n      <ion-button disabled=\"true\">\n        <th>Qtd: {{ item.amount }}</th>\n      </ion-button>\n      <!-- <ion-button color=\"icon\" (click)=\"increaseCartItem(p)\">\n        <ion-icon name=\"add-outline\"></ion-icon>\n      </ion-button> -->\n    </ion-buttons>\n    <!-- fim botoes de soma -->\n  </ion-item>\n  <!--Retirar produto-->\n  <!-- <ion-item-options side=\"end\">\n    <ion-item-option color=\"danger\" (click)=\"removeCartItem(p)\">\n      <ion-icon slot=\"icon-only\" name=\"trash\"></ion-icon>\n    </ion-item-option>\n  </ion-item-options> -->\n</ion-item-sliding>\n<!-- fim produto -->\n\n</ion-content>\n\n<ion-footer>\n\n\n<ion-toolbar>\n  <!-- <ion-icon slot=\"end\" color=\"base_header\" size=\"large\" name=\"arrow-up-circle-outline\"></ion-icon> -->\n  <ion-title>Total:{{ banco.totalCompra | currency:'BRL' }}</ion-title>\n</ion-toolbar>\n\n</ion-footer>";
    /***/
  },

  /***/
  "./src/app/pages/lista-compras/lista-compras-routing.module.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/pages/lista-compras/lista-compras-routing.module.ts ***!
    \*********************************************************************/

  /*! exports provided: ListaComprasPageRoutingModule */

  /***/
  function srcAppPagesListaComprasListaComprasRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ListaComprasPageRoutingModule", function () {
      return ListaComprasPageRoutingModule;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _lista_compras_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./lista-compras.page */
    "./src/app/pages/lista-compras/lista-compras.page.ts");

    var routes = [{
      path: '',
      component: _lista_compras_page__WEBPACK_IMPORTED_MODULE_3__["ListaComprasPage"]
    }];

    var ListaComprasPageRoutingModule = function ListaComprasPageRoutingModule() {
      _classCallCheck(this, ListaComprasPageRoutingModule);
    };

    ListaComprasPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ListaComprasPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/lista-compras/lista-compras.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/pages/lista-compras/lista-compras.module.ts ***!
    \*************************************************************/

  /*! exports provided: ListaComprasPageModule */

  /***/
  function srcAppPagesListaComprasListaComprasModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ListaComprasPageModule", function () {
      return ListaComprasPageModule;
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


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _lista_compras_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./lista-compras-routing.module */
    "./src/app/pages/lista-compras/lista-compras-routing.module.ts");
    /* harmony import */


    var _lista_compras_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./lista-compras.page */
    "./src/app/pages/lista-compras/lista-compras.page.ts");

    var ListaComprasPageModule = function ListaComprasPageModule() {
      _classCallCheck(this, ListaComprasPageModule);
    };

    ListaComprasPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _lista_compras_routing_module__WEBPACK_IMPORTED_MODULE_5__["ListaComprasPageRoutingModule"]],
      declarations: [_lista_compras_page__WEBPACK_IMPORTED_MODULE_6__["ListaComprasPage"]]
    })], ListaComprasPageModule);
    /***/
  },

  /***/
  "./src/app/pages/lista-compras/lista-compras.page.scss":
  /*!*************************************************************!*\
    !*** ./src/app/pages/lista-compras/lista-compras.page.scss ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesListaComprasListaComprasPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-thumbnail {\n  --border-radius:10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbGlzdGEtY29tcHJhcy9IOlxcaW9uaWNcXHRjYy9zcmNcXGFwcFxccGFnZXNcXGxpc3RhLWNvbXByYXNcXGxpc3RhLWNvbXByYXMucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9saXN0YS1jb21wcmFzL2xpc3RhLWNvbXByYXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksb0JBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xpc3RhLWNvbXByYXMvbGlzdGEtY29tcHJhcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdGh1bWJuYWlsIHtcclxuICAgIC0tYm9yZGVyLXJhZGl1czoxMHB4O1xyXG4gIH0iLCJpb24tdGh1bWJuYWlsIHtcbiAgLS1ib3JkZXItcmFkaXVzOjEwcHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/lista-compras/lista-compras.page.ts":
  /*!***********************************************************!*\
    !*** ./src/app/pages/lista-compras/lista-compras.page.ts ***!
    \***********************************************************/

  /*! exports provided: ListaComprasPage */

  /***/
  function srcAppPagesListaComprasListaComprasPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ListaComprasPage", function () {
      return ListaComprasPage;
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


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
    /* harmony import */


    var src_app_shared_var_usuario_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/shared/var-usuario.service */
    "./src/app/shared/var-usuario.service.ts");

    var ListaComprasPage = /*#__PURE__*/function () {
      function ListaComprasPage(storage, varUser) {
        _classCallCheck(this, ListaComprasPage);

        this.storage = storage;
        this.varUser = varUser;
        this.banco = {};
      }

      _createClass(ListaComprasPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.banco = this.varUser.getListaCompraSelecionada(); // this.getListaMercado();

          console.log("ta: ", this.varUser.getListaCompraSelecionada());
        }
      }, {
        key: "decreaseCartItem",
        value: function decreaseCartItem() {}
      }, {
        key: "increaseCartItem",
        value: function increaseCartItem() {}
      }, {
        key: "removeCartItem",
        value: function removeCartItem() {}
      }]);

      return ListaComprasPage;
    }();

    ListaComprasPage.ctorParameters = function () {
      return [{
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"]
      }, {
        type: src_app_shared_var_usuario_service__WEBPACK_IMPORTED_MODULE_3__["VarUsuarioService"]
      }];
    };

    ListaComprasPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-lista-compras',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./lista-compras.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/lista-compras/lista-compras.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./lista-compras.page.scss */
      "./src/app/pages/lista-compras/lista-compras.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"], src_app_shared_var_usuario_service__WEBPACK_IMPORTED_MODULE_3__["VarUsuarioService"]])], ListaComprasPage);
    /***/
  },

  /***/
  "./src/app/shared/var-usuario.service.ts":
  /*!***********************************************!*\
    !*** ./src/app/shared/var-usuario.service.ts ***!
    \***********************************************/

  /*! exports provided: VarUsuarioService */

  /***/
  function srcAppSharedVarUsuarioServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VarUsuarioService", function () {
      return VarUsuarioService;
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


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");

    var VarUsuarioService = /*#__PURE__*/function () {
      // private login = new BehaviorSubject(0);
      function VarUsuarioService(storage) {
        _classCallCheck(this, VarUsuarioService);

        this.storage = storage;
        this.refresh = false;
        this.login = [];
        this.infoCliente = [];
        this.SubCategoriaSelecionado = [{
          idSubCategoria: 1,
          nomeSubCategoria: "modelo",
          imgSubCategoria: null
        }];
      } // storage
      // login ------------------------------------------------------------------


      _createClass(VarUsuarioService, [{
        key: "getLogin",
        value: function getLogin() {
          var _this = this;

          if (this.login == null) {
            this.login = "";
            console.log("entrou no if");
          } else {
            this.storage.get("login").then(function (val) {
              _this.login = val;
            })["catch"](function (response) {
              console.log("nao esta logado storage: ", response);
            });
          }

          return this.login;
        }
      }, {
        key: "postLogin",
        value: function postLogin(username, password) {
          this.login = {
            username: username,
            password: password
          };
          console.log("varUser: ", this.login);
          this.storage.set("login", this.login).then(function () {
            console.log("usuario salvo");
          });
        }
      }, {
        key: "deleteLogin",
        value: function deleteLogin() {
          // mostrar no console log
          this.storage.remove("login").then(function () {
            console.log("usuario deletado");
          });
        } // !login ------------------------------------------------------------------
        // !storage
        // idcliente -------------------------------------------------------------------

      }, {
        key: "getInfoCliente",
        value: function getInfoCliente() {
          // this.storage.get("infoCliente").then((val) => {
          //   this.infoCliente = val;
          //   console.log("depois")
          // }).catch((response) => {
          //   console.log("infoCliente erro: ", response);
          // });
          return this.infoCliente;
        }
      }, {
        key: "postInfoCliente",
        value: function postInfoCliente(infoCliente) {
          this.infoCliente = infoCliente; // this.storage.set("infoCliente", infoCliente).then(() => {
          //   console.log("infoCliente salvo")
          // });
        } // !idcliente -------------------------------------------------------------------
        // listapedido

      }, {
        key: "getPedidoSelecionado",
        value: function getPedidoSelecionado() {
          return this.pedidoSelecionado;
        }
      }, {
        key: "postPedidoSelecionado",
        value: function postPedidoSelecionado(pedidoSelecionado) {
          this.pedidoSelecionado = pedidoSelecionado;
        } // listaPedidos

      }, {
        key: "getPedidos",
        value: function getPedidos() {
          return this.pedidos;
        }
      }, {
        key: "postPedidos",
        value: function postPedidos(pedidos) {
          this.pedidos = pedidos;
        } // nomeMercadoSelecionado

      }, {
        key: "getFreteMercado",
        value: function getFreteMercado() {
          return this.freteMercado;
        }
      }, {
        key: "postFreteMercado",
        value: function postFreteMercado(freteMercado) {
          this.freteMercado = freteMercado;
        } // nomeMercadoSelecionado

      }, {
        key: "getMercadoSelecionado",
        value: function getMercadoSelecionado() {
          return this.nomeMercadoSelecionado;
        }
      }, {
        key: "postMercadoSelecionado",
        value: function postMercadoSelecionado(nomeMercadoSelecionado) {
          this.nomeMercadoSelecionado = nomeMercadoSelecionado;
        } // nome da subcategoria

      }, {
        key: "getSubCategorias",
        value: function getSubCategorias() {
          return this.SubCategorias;
        }
      }, {
        key: "postSubCategorias",
        value: function postSubCategorias(SubCategorias) {
          this.SubCategorias = SubCategorias;
        } // nome da subcategoria selecionada 

      }, {
        key: "getSubCategoriaSelecionado",
        value: function getSubCategoriaSelecionado() {
          return this.SubCategoriaSelecionado;
        }
      }, {
        key: "postSubCategoriaSelecionado",
        value: function postSubCategoriaSelecionado(SubCategoriaSelecionado) {
          this.SubCategoriaSelecionado = SubCategoriaSelecionado;
        }
      }, {
        key: "getInfoMercadoSelecionado",
        value: function getInfoMercadoSelecionado() {
          return this.infoMercadoSelecionado;
        }
      }, {
        key: "postInfoMercadoSelecionado",
        value: function postInfoMercadoSelecionado(infoMercado) {
          this.infoMercadoSelecionado = infoMercado;
        }
      }, {
        key: "getListaCompraSelecionada",
        value: function getListaCompraSelecionada() {
          return this.listaMercadoSelecionada;
        }
      }, {
        key: "postListaCompraSelecionada",
        value: function postListaCompraSelecionada(ListaMercadoSelecionada) {
          this.listaMercadoSelecionada = ListaMercadoSelecionada;
        }
      }]);

      return VarUsuarioService;
    }();

    VarUsuarioService.ctorParameters = function () {
      return [{
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"]
      }];
    };

    VarUsuarioService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"]])], VarUsuarioService);
    /***/
  }
}]);
//# sourceMappingURL=pages-lista-compras-lista-compras-module-es5.js.map