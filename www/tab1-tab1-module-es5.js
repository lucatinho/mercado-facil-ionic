function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab1-tab1-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/tab1.page.html":
  /*!***************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/tab1.page.html ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTab1Tab1PageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header [translucent]=\"false\">\n  <ion-toolbar color=\"base_header\">\n    <ion-title class=\"ion-text-center\">\n      <h2>Mercado Fácil</h2>\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <!--Lista de Favoritos-->\n  <ion-list>\n    <!-- titulo -->\n    <ion-list-header>\n      <ion-text color=\"base_header\">\n        <th>Favoritos</th>\n      </ion-text>\n    </ion-list-header>\n    <!-- fim titulo -->\n    <!-- <ion-item-group *ngIf=\"mercadoFavorito.contador != 1\"> -->\n      <ion-list *ngIf=\"viewFavorito == false\">\n\n        <ion-label>\n          <p>&nbsp;&nbsp;&nbsp;&nbsp;Selecione um mercado como favorito.</p>\n        </ion-label>\n\n      </ion-list>\n\n      \n      <ion-item-group *ngIf=\"viewFavorito == true\">\n\n      </ion-item-group>\n      <ion-item-group *ngIf=\"viewFavorito == true\">\n      <ion-item (click)=\"favoritoNavigate()\">\n        <ion-thumbnail slot=\"start\">\n          <img src={{mercadoFavorito.picture}}>\n        </ion-thumbnail>\n        <ion-label>\n          <h3>{{mercadoFavorito.nomeMercado}}</h3>\n          <p>{{mercadoFavorito.observacao}}</p>\n        </ion-label>\n\n        <!--botão coração do favorito-->\n        <ion-buttons slot=\"end\" (click)=\"deleteFavorito()\">\n          <ion-button>\n            <ion-icon color=\"danger\" name=\"heart\"></ion-icon>\n          </ion-button>\n        </ion-buttons>\n      </ion-item>\n    </ion-item-group>\n  </ion-list>\n\n  <!-- fim lista favoritos -->\n\n  <!-- Lista de Diponiveis-->\n  <ion-list>\n    <!-- titulo -->\n    <ion-list-header>\n      <ion-text color=\"base_header\">\n        <th>Disponiveis</th>\n      </ion-text>\n    </ion-list-header>\n    <!-- fim titulo -->\n    <ion-item-group *ngFor=\"let item of Mercados; index as i\">\n      <ion-item *ngIf=\"item.situacao == true\" (click)=\"onMercadoPress(item.url);postNomeMercado(item.nomeMercado);\n      postFreteMercado(item.freteMercado);postSubCategoriasMercado(item.subCategorias);postInfoMercado(item)\" routerLink=\"/lista\">\n        <ion-thumbnail slot=\"start\">\n          <img src={{item.picture}}>\n          <!-- <img src=\"https://i.imgur.com/xZ2ZaRu.png\"> -->\n          \n        </ion-thumbnail>\n        <ion-label>\n          <h3>{{item.nomeMercado}}</h3>\n          <p>{{item.observacao}}</p>\n          <p>Fecha ás {{item.horario}} horas.</p>\n        </ion-label>\n        <!--botão coração do favorito-->\n        <ion-buttons slot=\"end\" (click)=\"postFavorito(item.idMercado)\">\n          <ion-button>\n            <ion-icon name=\"heart-outline\"></ion-icon>\n          </ion-button>\n        </ion-buttons>\n\n      </ion-item>\n    </ion-item-group>\n\n  </ion-list>\n  <!-- fim Lista de Diponiveis-->\n\n  <!-- Lista de Não Diponiveis-->\n  <ion-list>\n    <!-- titulo -->\n    <ion-list-header>\n      <ion-text color=\"base_header\">\n        <th>Não Disponiveis</th>\n      </ion-text>\n    </ion-list-header>\n    <!-- fim titulo -->\n    <ion-item-group *ngFor=\"let item of Mercados; index as i\">\n      <ion-item *ngIf=\"item.situacao == false\">\n        <ion-thumbnail slot=\"start\">\n          <img src={{item.picture}}>\n        </ion-thumbnail>\n        <ion-label>\n          <h3>{{item.nomeMercado}}</h3>\n          <p>{{item.observacao}}</p>\n          <p>Fecha ás {{item.horario}} horas.</p>\n        </ion-label>\n         <!--botão coração do favorito-->\n         <ion-buttons slot=\"end\" (click)=\"postFavorito(item.idMercado)\">\n          <ion-button>\n            <ion-icon name=\"heart-outline\"></ion-icon>\n          </ion-button>\n        </ion-buttons>\n      </ion-item>\n    </ion-item-group>\n  </ion-list>\n  <!-- fim lista nao disponiveis -->\n\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/tab1/tab1.module.ts":
  /*!*************************************!*\
    !*** ./src/app/tab1/tab1.module.ts ***!
    \*************************************/

  /*! exports provided: Tab1PageModule */

  /***/
  function srcAppTab1Tab1ModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Tab1PageModule", function () {
      return Tab1PageModule;
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


    var _tab1_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./tab1.page */
    "./src/app/tab1/tab1.page.ts");
    /* harmony import */


    var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../explore-container/explore-container.module */
    "./src/app/explore-container/explore-container.module.ts");

    var Tab1PageModule = function Tab1PageModule() {
      _classCallCheck(this, Tab1PageModule);
    };

    Tab1PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
      imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_7__["ExploreContainerComponentModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{
        path: '',
        component: _tab1_page__WEBPACK_IMPORTED_MODULE_6__["Tab1Page"]
      }])],
      declarations: [_tab1_page__WEBPACK_IMPORTED_MODULE_6__["Tab1Page"]]
    })], Tab1PageModule);
    /***/
  },

  /***/
  "./src/app/tab1/tab1.page.scss":
  /*!*************************************!*\
    !*** ./src/app/tab1/tab1.page.scss ***!
    \*************************************/

  /*! exports provided: default */

  /***/
  function srcAppTab1Tab1PageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-content {\n  --background: translucent;\n}\n\nion-title {\n  --color: #ffffff;\n}\n\nion-thumbnail {\n  --border-radius:10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFiMS9IOlxcaW9uaWNcXHRjYy9zcmNcXGFwcFxcdGFiMVxcdGFiMS5wYWdlLnNjc3MiLCJzcmMvYXBwL3RhYjEvdGFiMS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBQTtBQ0NGOztBREVBO0VBQ0UsZ0JBQUE7QUNDRjs7QURFQTtFQUNFLG9CQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC90YWIxL3RhYjEucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zbHVjZW50O1xufVxuXG5pb24tdGl0bGV7XG4gIC0tY29sb3I6ICNmZmZmZmY7XG59XG5cbmlvbi10aHVtYm5haWwge1xuICAtLWJvcmRlci1yYWRpdXM6MTBweDtcbn0iLCJpb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNsdWNlbnQ7XG59XG5cbmlvbi10aXRsZSB7XG4gIC0tY29sb3I6ICNmZmZmZmY7XG59XG5cbmlvbi10aHVtYm5haWwge1xuICAtLWJvcmRlci1yYWRpdXM6MTBweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/tab1/tab1.page.ts":
  /*!***********************************!*\
    !*** ./src/app/tab1/tab1.page.ts ***!
    \***********************************/

  /*! exports provided: Tab1Page */

  /***/
  function srcAppTab1Tab1PageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Tab1Page", function () {
      return Tab1Page;
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


    var _services_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/cart.service */
    "./src/app/services/cart.service.ts");
    /* harmony import */


    var _shared_apimercado_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../shared/apimercado.service */
    "./src/app/shared/apimercado.service.ts");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _shared_var_usuario_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../shared/var-usuario.service */
    "./src/app/shared/var-usuario.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _tabs_tabs_functions_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../tabs/tabs-functions.service */
    "./src/app/tabs/tabs-functions.service.ts");

    var Tab1Page = /*#__PURE__*/function () {
      function Tab1Page(apimercado, cartService, storage, loadingController, alertCtrl, varUser, router, navCtrl, toastCtrl, tabsFunctions) {
        _classCallCheck(this, Tab1Page);

        this.apimercado = apimercado;
        this.cartService = cartService;
        this.storage = storage;
        this.loadingController = loadingController;
        this.alertCtrl = alertCtrl;
        this.varUser = varUser;
        this.router = router;
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.tabsFunctions = tabsFunctions;
        this.mercadoFavorito = {};
        this.viewFavorito = false;
      }

      _createClass(Tab1Page, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          // puxa metodo banco
          this.banco(); // pega valor mercado

          this.apimercado.currentMercadoSelecionado.subscribe(function (mercado) {
            return _this.mercado = mercado;
          });
        }
      }, {
        key: "favoritoNavigate",
        value: function favoritoNavigate() {
          if (this.mercadoFavorito.situacao != 0) {
            this.navCtrl.navigateRoot(["/lista"]);
          }
        } // 

      }, {
        key: "getFavorito",
        value: function getFavorito() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this2 = this;

            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    this.storage.get("favorito").then(function (val) {
                      console.log("favorito get: ", val);

                      if (val != null) {
                        _this2.viewFavorito = true; // pega os dados atuais do mercado a partir do id

                        for (var index = 0; index < _this2.Mercados.length; index++) {
                          if (_this2.Mercados[index].idMercado == val) {
                            _this2.mercadoFavorito = _this2.Mercados[index];
                            console.log("caiu: ", _this2.mercadoFavorito);
                          }
                        }
                      }
                    })["catch"](function (response) {
                      console.log("nao tem favorito no storage: ", response); // this.mercadoFavorito = {
                      //   picture: "http://placehold.it/64x64",
                      //   nomeMercado: "Selecione um mercado favorito",
                      //   observacao: "",
                      //   horario: ""
                      // };
                    });

                  case 1:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "postFavorito",
        value: function postFavorito(favorito) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var _this3 = this;

            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    // console.log("favorito: ", favorito);
                    this.storage.set("favorito", favorito).then(function () {
                      console.log("favorito salvo");

                      _this3.getFavorito();

                      _this3.router.navigate(["/tabs/tab1"]);
                    });

                  case 1:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        } // async deleteFavorito() {
        //   // mostrar no console log
        //   this.storage.set("favorito",
        //     {
        //       picture: "http://placehold.it/64x64",
        //       nomeMercado: "",
        //       observacao: "Selecione um mercado favorito",
        //       horario: "",
        //       situacao: 0
        //     }
        //   ).then(() => {
        //     console.log("favorito deletado");
        //     this.getFavorito();
        //     this.router.navigate(["/tabs/tab1"])
        //   });
        // }

      }, {
        key: "deleteFavorito",
        value: function deleteFavorito() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var _this4 = this;

            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    this.storage.remove("favorito").then(function () {
                      console.log("favorito deletado");

                      _this4.getFavorito();

                      _this4.router.navigate(["/tabs/tab1"]);
                    });

                  case 1:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        } // fim

      }, {
        key: "banco",
        value: function banco() {
          var _this5 = this;

          // this.telaCarregamento();
          this.telaCarregamento().then(function () {
            _this5.apimercado.listarMercados().then(function (response) {
              _this5.Mercados = response;

              _this5.Mercados.sort(function (a, b) {
                return a.nomeMercado.localeCompare(b.nomeMercado);
              });

              _this5.loadingController.dismiss();

              _this5.getFavorito(); // if (this.varUser.getLogin().login != null) {


              _this5.tabsFunctions.sessaoCliente(); //   console.log("chamou")
              // }

            })["catch"](function (response) {
              _this5.Mercados = response;

              _this5.loadingController.dismiss();

              _this5.mensagemErroSistema("Verifique sua coneção com a internet e tente novamente !");
            });
          });
        } // Envia valor mercado

      }, {
        key: "onMercadoPress",
        value: function onMercadoPress(mercadoSelecionado) {
          // zerar carrinho
          this.cartService.zerarCarrinho();
          this.apimercado.changeMercadoSelecionado(mercadoSelecionado);
        }
      }, {
        key: "postNomeMercado",
        value: function postNomeMercado(nomeMercado) {
          this.varUser.postMercadoSelecionado(nomeMercado);
        }
      }, {
        key: "postInfoMercado",
        value: function postInfoMercado(infoMercado) {
          this.varUser.postInfoMercadoSelecionado(infoMercado);
        }
      }, {
        key: "postFreteMercado",
        value: function postFreteMercado(freteMercado) {
          this.varUser.postFreteMercado(freteMercado);
        }
      }, {
        key: "postSubCategoriasMercado",
        value: function postSubCategoriasMercado(subCategorias) {
          this.varUser.postSubCategorias(subCategorias);
        }
      }, {
        key: "telaCarregamento",
        value: function telaCarregamento() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            var loading;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.next = 2;
                    return this.loadingController.create({
                      cssClass: 'my-custom-class',
                      message: 'Por favor aguarde...'
                    });

                  case 2:
                    loading = _context4.sent;
                    return _context4.abrupt("return", loading.present());

                  case 4:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }, {
        key: "mensagemErroSistema",
        value: function mensagemErroSistema(mensagem) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
            var alert;
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    _context5.next = 2;
                    return this.alertCtrl.create({
                      header: 'Alerta',
                      subHeader: 'Erro interno do sistema',
                      message: "".concat(mensagem),
                      buttons: ['OK']
                    });

                  case 2:
                    alert = _context5.sent;
                    _context5.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));
        }
      }, {
        key: "mensagemErroUsuario",
        value: function mensagemErroUsuario(mensagem) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
            var toast;
            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    _context6.next = 2;
                    return this.toastCtrl.create({
                      color: "primary",
                      message: "".concat(mensagem),
                      duration: 2500
                    });

                  case 2:
                    toast = _context6.sent;
                    toast.present();

                  case 4:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6, this);
          }));
        }
      }]);

      return Tab1Page;
    }();

    Tab1Page.ctorParameters = function () {
      return [{
        type: _shared_apimercado_service__WEBPACK_IMPORTED_MODULE_3__["ApimercadoService"]
      }, {
        type: _services_cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"]
      }, {
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"]
      }, {
        type: _shared_var_usuario_service__WEBPACK_IMPORTED_MODULE_6__["VarUsuarioService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"]
      }, {
        type: _tabs_tabs_functions_service__WEBPACK_IMPORTED_MODULE_8__["TabsFunctionsService"]
      }];
    };

    Tab1Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-tab1',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./tab1.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/tab1.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./tab1.page.scss */
      "./src/app/tab1/tab1.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_apimercado_service__WEBPACK_IMPORTED_MODULE_3__["ApimercadoService"], _services_cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"], _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"], _shared_var_usuario_service__WEBPACK_IMPORTED_MODULE_6__["VarUsuarioService"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"], _tabs_tabs_functions_service__WEBPACK_IMPORTED_MODULE_8__["TabsFunctionsService"]])], Tab1Page);
    /***/
  }
}]);
//# sourceMappingURL=tab1-tab1-module-es5.js.map