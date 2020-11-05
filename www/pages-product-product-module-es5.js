function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-product-product-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/product/product.page.html":
  /*!***************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/product/product.page.html ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesProductProductPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- cabeçalho pagina -->\n<ion-header>\n  <ion-toolbar color=\"base_header\">\n    <!-- botao voltar -->\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"\"></ion-back-button>\n    </ion-buttons>\n     <!--botao de carrinho-->\n    <ion-buttons slot=\"end\">\n      <ion-button routerLink=\"/carrinho\">\n        <ion-icon name=\"cart-outline\" style=\"zoom:1.2;\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n\n\n    <!-- titulo -->\n    <ion-title>{{ nomeMercado }}</ion-title>\n    <ion-title size=\"small\">{{ nomeSubCategoria }}</ion-title>\n  </ion-toolbar>\n  <!-- fim menu -->\n</ion-header>\n<!-- fim cabeçalho pagina -->\n\n<ion-content>\n\n  <ion-list>\n    <!-- produto -->\n    <ion-item-group *ngFor=\"let item of marca; index as i\">\n      <ion-item *ngIf=\"item.subCategoria.idSubCategoria == (listaSelecionado) && item.ativo == true\">\n        <ion-thumbnail slot=\"start\">\n          <img src={{item.imgProduto}}>\n        </ion-thumbnail>\n\n        <ion-label>\n          <!-- <h2>{{ item.nomeProduto }}</h2> -->\n          <h2>{{ item.nomeProduto }} {{ item.marca.nomeMarca }}</h2>\n          <h3>\n            <th>De: 12.30</th>\n          </h3>\n          <h3>\n            <th>Por: {{item.preco | currency:'BRL' }}</th>\n          </h3>\n        </ion-label>\n\n        <!--botões de soma-->\n        <!-- <ion-buttons color=\"primary\" slot=\"end\">\n        <ion-button (click)=\"soma(-1)\" color=\"icon\">\n          <ion-icon name=\"remove-outline\"></ion-icon>\n        </ion-button>\n        <ion-button disabled=\"true\">\n          <th>{{varSoma}}</th>\n        </ion-button>\n        <ion-button (click)=\"soma(1)\" color=\"icon\">\n          <ion-icon name=\"add-outline\"></ion-icon>\n        </ion-button>\n      </ion-buttons> -->\n        <!-- fim botoes de soma -->\n\n        <!-- botao de add carrinho -->\n        <ion-button color=\"icon\" (click)=\"addToCart(item)\" inserirCarrinho slot=\"end\" size=\"default\">\n          <ion-icon name=\"cart-outline\"></ion-icon>\n        </ion-button>\n        <!-- fim botao add carrinho -->\n\n      </ion-item>\n    </ion-item-group>\n    <!-- fim produto -->\n  </ion-list>\n\n  <!--botao do carrinho-->\n  <!-- <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\" routerLink=\"/carrinho\">\n    <ion-fab-button color=\"icon\">\n      <ion-icon name=\"cart-outline\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab> -->\n  <!-- fim botao carrinho -->\n\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/product/product-routing.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/pages/product/product-routing.module.ts ***!
    \*********************************************************/

  /*! exports provided: ProductPageRoutingModule */

  /***/
  function srcAppPagesProductProductRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductPageRoutingModule", function () {
      return ProductPageRoutingModule;
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


    var _product_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./product.page */
    "./src/app/pages/product/product.page.ts");

    var routes = [{
      path: '',
      component: _product_page__WEBPACK_IMPORTED_MODULE_3__["ProductPage"]
    }];

    var ProductPageRoutingModule = function ProductPageRoutingModule() {
      _classCallCheck(this, ProductPageRoutingModule);
    };

    ProductPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ProductPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/product/product.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/pages/product/product.module.ts ***!
    \*************************************************/

  /*! exports provided: ProductPageModule */

  /***/
  function srcAppPagesProductProductModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductPageModule", function () {
      return ProductPageModule;
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


    var _product_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./product-routing.module */
    "./src/app/pages/product/product-routing.module.ts");
    /* harmony import */


    var _product_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./product.page */
    "./src/app/pages/product/product.page.ts");

    var ProductPageModule = function ProductPageModule() {
      _classCallCheck(this, ProductPageModule);
    };

    ProductPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _product_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProductPageRoutingModule"]],
      declarations: [_product_page__WEBPACK_IMPORTED_MODULE_6__["ProductPage"]]
    })], ProductPageModule);
    /***/
  },

  /***/
  "./src/app/pages/product/product.page.scss":
  /*!*************************************************!*\
    !*** ./src/app/pages/product/product.page.scss ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesProductProductPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-thumbnail {\n  --border-radius:15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJvZHVjdC9IOlxcaW9uaWNcXHRjYy9zcmNcXGFwcFxccGFnZXNcXHByb2R1Y3RcXHByb2R1Y3QucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9wcm9kdWN0L3Byb2R1Y3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksb0JBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2R1Y3QvcHJvZHVjdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdGh1bWJuYWlsIHtcclxuICAgIC0tYm9yZGVyLXJhZGl1czoxNXB4O1xyXG4gIH0iLCJpb24tdGh1bWJuYWlsIHtcbiAgLS1ib3JkZXItcmFkaXVzOjE1cHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/product/product.page.ts":
  /*!***********************************************!*\
    !*** ./src/app/pages/product/product.page.ts ***!
    \***********************************************/

  /*! exports provided: ProductPage */

  /***/
  function srcAppPagesProductProductPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductPage", function () {
      return ProductPage;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var src_app_shared_apimercado_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/shared/apimercado.service */
    "./src/app/shared/apimercado.service.ts");
    /* harmony import */


    var src_app_shared_lista_mercado_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/shared/lista-mercado.service */
    "./src/app/shared/lista-mercado.service.ts");
    /* harmony import */


    var src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/services/cart.service */
    "./src/app/services/cart.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_shared_var_usuario_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/shared/var-usuario.service */
    "./src/app/shared/var-usuario.service.ts");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");

    var ProductPage = /*#__PURE__*/function () {
      function ProductPage(toastCtrl, apimercado, aptService, cartService, router, varUser, storage) {
        _classCallCheck(this, ProductPage);

        this.toastCtrl = toastCtrl;
        this.apimercado = apimercado;
        this.aptService = aptService;
        this.cartService = cartService;
        this.router = router;
        this.varUser = varUser;
        this.storage = storage;
      }

      _createClass(ProductPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          // pega valor do mercado/categoria/lista do apimercado
          this.apimercado.currentMercadoSelecionado.subscribe(function (mercado) {
            return _this.mercadoSelecionado = mercado;
          });
          this.apimercado.currentCategoriaSelecionado.subscribe(function (categoria) {
            return _this.categoriaSelecionado = categoria;
          });
          this.apimercado.currentListaSelecionado.subscribe(function (lista) {
            return _this.listaSelecionado = lista;
          }); // puxa metodo banco

          this.getNomeMercadoSubCategoria();
          this.banco();
          this.estasLogado();
        } // puxar nome mercado e subCategoria

      }, {
        key: "getNomeMercadoSubCategoria",
        value: function getNomeMercadoSubCategoria() {
          this.nomeMercado = this.varUser.getMercadoSelecionado();
          this.nomeSubCategoria = this.varUser.getSubCategoriaSelecionado();
        } // estasLogado() {
        //   // chama a tela de carregamento
        //   this.apimercado.sessaoCliente()
        //     .then((response) => {
        //       this.varSessao = response;
        //       this.varUser.postIdCliente(this.varSessao.idCliente);
        //       console.log("Verificaçao de login: ", this.varSessao);
        //       // fecha a tela de carregamento
        //     })
        //     .catch((response) => {
        //       this.varSessao = response;
        //       console.log("Nao ta logado: ", this.varSessao);
        //       this.router.navigate(["/login"])
        //       // fecha a tela de carregamento
        //     });
        // }

      }, {
        key: "estasLogado",
        value: function estasLogado() {
          var _this2 = this;

          this.storage.get("login").then(function (val) {
            if (val != null) {
              // chama a tela de carregamento
              _this2.apimercado.sessaoCliente(val).then(function (response) {
                _this2.varSessao = response; // this.varUser.postInfoCliente(response);

                console.log("logou, estava salvo"); // this.banco();
                // this.getMercadoFavorito();
                // fecha a tela de carregamento
              })["catch"](function (response) {
                _this2.varSessao = response;
                console.log("Nao ta logado: ", _this2.varSessao); // this.router.navigate(["/login"])
                // fecha a tela de carregamento
              });
            } else {
              console.log("storage nulo");

              _this2.router.navigate(["/login"]);
            }
          })["catch"](function (response) {
            console.log("nao esta logado storage");
          });
        }
      }, {
        key: "banco",
        value: function banco() {
          var _this3 = this;

          // chama a tela de carregamento
          this.apimercado.listarProdutos().then(function (response) {
            _this3.marca = response;
            console.log(_this3.marca); // fecha a tela de carregamento
          })["catch"](function (response) {
            _this3.marca = response; // fecha a tela de carregamento
          });
        } // manda produto para o carrinho e faz mensagem 

      }, {
        key: "addToCart",
        value: function addToCart(product) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var toast;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    this.cartService.addProduct(product); // mensagem de add carinho

                    _context.next = 3;
                    return this.toastCtrl.create({
                      color: "icon",
                      message: "Adicionado ao carrinho: ".concat(product.marca.nomeMarca),
                      duration: 900
                    });

                  case 3:
                    toast = _context.sent;
                    toast.present();

                  case 5:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }]);

      return ProductPage;
    }();

    ProductPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]
      }, {
        type: src_app_shared_apimercado_service__WEBPACK_IMPORTED_MODULE_3__["ApimercadoService"]
      }, {
        type: src_app_shared_lista_mercado_service__WEBPACK_IMPORTED_MODULE_4__["ListaMercadoService"]
      }, {
        type: src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_5__["CartService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
      }, {
        type: src_app_shared_var_usuario_service__WEBPACK_IMPORTED_MODULE_7__["VarUsuarioService"]
      }, {
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_8__["Storage"]
      }];
    };

    ProductPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-product',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./product.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/product/product.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./product.page.scss */
      "./src/app/pages/product/product.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"], src_app_shared_apimercado_service__WEBPACK_IMPORTED_MODULE_3__["ApimercadoService"], src_app_shared_lista_mercado_service__WEBPACK_IMPORTED_MODULE_4__["ListaMercadoService"], src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_5__["CartService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], src_app_shared_var_usuario_service__WEBPACK_IMPORTED_MODULE_7__["VarUsuarioService"], _ionic_storage__WEBPACK_IMPORTED_MODULE_8__["Storage"]])], ProductPage);
    /***/
  },

  /***/
  "./src/app/shared/lista-mercado.service.ts":
  /*!*************************************************!*\
    !*** ./src/app/shared/lista-mercado.service.ts ***!
    \*************************************************/

  /*! exports provided: ListaMercadoService */

  /***/
  function srcAppSharedListaMercadoServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ListaMercadoService", function () {
      return ListaMercadoService;
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


    var _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/fire/database */
    "./node_modules/@angular/fire/fesm2015/angular-fire-database.js");

    var ListaMercadoService = /*#__PURE__*/function () {
      function ListaMercadoService(db) {
        _classCallCheck(this, ListaMercadoService);

        this.db = db;
      } // pega lista


      _createClass(ListaMercadoService, [{
        key: "getMercadoLista",
        value: function getMercadoLista() {
          this.mercadoListaRef = this.db.list('/mercados');
          return this.mercadoListaRef;
        }
      }]);

      return ListaMercadoService;
    }();

    ListaMercadoService.ctorParameters = function () {
      return [{
        type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"]
      }];
    };

    ListaMercadoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"]])], ListaMercadoService);
    /***/
  }
}]);
//# sourceMappingURL=pages-product-product-module-es5.js.map