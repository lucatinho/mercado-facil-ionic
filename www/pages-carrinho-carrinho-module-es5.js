function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-carrinho-carrinho-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/modalone/modalone.component.html":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/modalone/modalone.component.html ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsModaloneModaloneComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"base_header\" (click)=\"close()\">\n    <ion-title>Finalizando</ion-title>\n    <ion-icon slot=\"end\" size=\"large\" name=\"arrow-down-circle-outline\" class=\"iconeseta\"></ion-icon>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <!-- <ion-item>\n    <ion-label>Forma de Envio:</ion-label>\n    <ion-select [(ngModel)]=\"formaEnvio\" (ionChange)=\"postFormaEnvio(formaEnvio);\" ok-text=\"Confirmar\" cancel-text=\"Cancelar\" (click)=\"postFormaEnvio(value)\">\n      <ion-select-option value=\"Entregar\">Entregar - R$10,00</ion-select-option>\n      <ion-select-option value=\"Retirar no Mercado\">Retirar no Mercado</ion-select-option>\n    </ion-select>\n  </ion-item> -->\n\n  <ion-item>\n    <ion-label>Forma de Envio:</ion-label>\n    <ion-select [(ngModel)]=\"formaEnvio\" (ionChange)=\"postFormaEnvio(formaEnvio);\" value=\"notifications\" interface=\"action-sheet\">\n      <ion-select-option value=\"Entrega\">Entregar - {{ freteview | currency:'BRL' }}</ion-select-option>\n      <ion-select-option value=\"Retirada no mercardo\" >Retirar no Mercado</ion-select-option>\n    </ion-select>\n  </ion-item>\n\n  <!-- só deve aparecer se forma de envio for entrega -->\n\n  <ion-item *ngIf=\"enderecoValidacao == true\">\n    <ion-label>Endereço de entrega:</ion-label>\n    <ion-select [(ngModel)]=\"enderecoEntrega\" (ionChange)=\"postEnderecoEntrega(enderecoEntrega);\" value=\"notifications\" interface=\"action-sheet\">\n      <ion-select-option *ngFor=\"let endereco of enderecosCliente\" value={{endereco.idEndereco}}>Bairro {{endereco.bairro}},Rua {{endereco.rua}},Nº {{endereco.numero}}</ion-select-option>\n      <!-- <ion-select-option value=\"Retirada no mercardo\" >Retirar no Mercado</ion-select-option> -->\n    </ion-select>\n  </ion-item>\n\n\n  <ion-item>\n    <ion-label>Forma de Pagamento:</ion-label>\n    <ion-select [(ngModel)]=\"formaPagamenento\" (ionChange)=\"postFormaPagamento(formaPagamenento);\" value=\"notifications\" interface=\"action-sheet\">\n      <ion-select-option value=\"Dinheiro\">Dinheiro</ion-select-option>\n      <ion-select-option value=\"Cartão Credito\" >Cartão Credito</ion-select-option>\n      <ion-select-option value=\"Cartao Debito\">Cartao Debito</ion-select-option>\n    </ion-select>\n  </ion-item>\n\n  <ion-item-divider>\n    <ion-label></ion-label>\n  </ion-item-divider>\n \n  <ion-list>\n\n    <ion-text class=\"ion-text-center\">\n      <ion-title size=\"small\">Subtotal: {{ getSubTotal() | currency:'BRL'}}</ion-title>\n    </ion-text>\n\n    <br>\n\n    <ion-text class=\"ion-text-center\">\n      <ion-title size=\"small\">Frete: {{ frete | currency:'BRL'}}</ion-title>\n    </ion-text>\n\n    <p class=\"ion-text-center\">Total:</p>\n    <ion-text color=\"base_header\">\n      <h1 class=\"ion-text-center\">{{ total() | currency:'BRL'}}</h1>\n    </ion-text>\n\n  </ion-list>\n  \n  <ion-button expand=\"block\" color=\"base_header\" (click)=\"checkout()\"><th>Finalizar</th></ion-button>\n  <!-- <ion-button expand=\"block\" color=\"base_header\" (click)=\"test()\"><th>Finalizar</th></ion-button> -->\n\n</ion-content>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/carrinho/carrinho.page.html":
  /*!*****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/carrinho/carrinho.page.html ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesCarrinhoCarrinhoPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"base_header\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n     <!--botao de carrinho-->\n     <ion-buttons slot=\"end\">\n      <ion-button (click)=\"mensagemListaCompra()\">\n        <ion-icon name=\"save-outline\" style=\"zoom:1.5;\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Meu Carrinho</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <!-- inicio produto-->\n  <ion-item-sliding *ngFor=\"let p of cart\" id=\"item100\">\n    <ion-item>\n      <ion-thumbnail slot=\"start\">\n        <img src={{p.imgProduto}}>\n      </ion-thumbnail>\n\n      <ion-label>\n        <h2>{{ p.nomeProduto }}</h2>\n        <p>{{ p.marca.nomeMarca }}</p>\n        <ion-note slot=\"end\" color=\"text\">{{ p.amount * p.preco | currency:'BRL' }}</ion-note>\n      </ion-label>\n      <!--botões de soma-->\n      <ion-buttons color=\"icon\" slot=\"end\">\n        <ion-button color=\"icon\" (click)=\"decreaseCartItem(p)\">\n          <ion-icon name=\"remove-outline\"></ion-icon>\n        </ion-button>\n        <ion-button disabled=\"true\">\n          <th>{{ p.amount }}</th>\n        </ion-button>\n        <ion-button color=\"icon\" (click)=\"increaseCartItem(p)\">\n          <ion-icon name=\"add-outline\"></ion-icon>\n        </ion-button>\n      </ion-buttons>\n      <!-- fim botoes de soma -->\n    </ion-item>\n    <!--Retirar produto-->\n    <ion-item-options side=\"end\">\n      <ion-item-option color=\"danger\" (click)=\"removeCartItem(p)\">\n        <ion-icon slot=\"icon-only\" name=\"trash\"></ion-icon>\n      </ion-item-option>\n    </ion-item-options>\n  </ion-item-sliding>\n  <!-- fim produto -->\n\n</ion-content>\n\n<ion-footer>\n  <!-- chama modal no ts -->\n  <ion-toolbar (click)=\"showModalOne()\">\n    <!-- icone para cima -->\n    <ion-icon slot=\"end\" color=\"base_header\" size=\"large\" name=\"cart\" class=\"carinho\"></ion-icon>\n    \n    <!-- fim icone para cima -->\n    <ion-title>Subtotal:{{ getTotal() | currency:'BRL' }}</ion-title>\n  </ion-toolbar>\n</ion-footer>";
    /***/
  },

  /***/
  "./src/app/components/modalone/modalone.component.scss":
  /*!*************************************************************!*\
    !*** ./src/app/components/modalone/modalone.component.scss ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsModaloneModaloneComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".iconeseta {\n  margin-right: 13px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tb2RhbG9uZS9IOlxcaW9uaWNcXHRjYy9zcmNcXGFwcFxcY29tcG9uZW50c1xcbW9kYWxvbmVcXG1vZGFsb25lLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL21vZGFsb25lL21vZGFsb25lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbW9kYWxvbmUvbW9kYWxvbmUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaWNvbmVzZXRhe1xyXG4gICAgbWFyZ2luLXJpZ2h0OjEzcHg7XHJcbiAgfSIsIi5pY29uZXNldGEge1xuICBtYXJnaW4tcmlnaHQ6IDEzcHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/components/modalone/modalone.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/components/modalone/modalone.component.ts ***!
    \***********************************************************/

  /*! exports provided: ModaloneComponent */

  /***/
  function srcAppComponentsModaloneModaloneComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ModaloneComponent", function () {
      return ModaloneComponent;
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


    var src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/cart.service */
    "./src/app/services/cart.service.ts");
    /* harmony import */


    var src_app_shared_apimercado_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/shared/apimercado.service */
    "./src/app/shared/apimercado.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_shared_var_usuario_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/shared/var-usuario.service */
    "./src/app/shared/var-usuario.service.ts");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
    /* harmony import */


    var src_app_tabs_tabs_functions_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/tabs/tabs-functions.service */
    "./src/app/tabs/tabs-functions.service.ts");

    var ModaloneComponent = /*#__PURE__*/function () {
      function ModaloneComponent(modalCTRL, alertCtrl, cartService, apimercado, router, saveUser, toastCtrl, storage, loadingController, tabsFunctions) {
        _classCallCheck(this, ModaloneComponent);

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

      _createClass(ModaloneComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.cart = this.cartService.getCart(); // puxar subtotal

          this.cartService.currentSubtotal.subscribe(function (subtotal) {
            return _this.subtotal = subtotal;
          }); // this.enviarPedido();

          this.freteview = this.saveUser.getFreteMercado();
          this.enderecosCliente = this.saveUser.getInfoCliente().endereco;
          console.log(this.enderecosCliente);
        } // getEnderecoEntrega(value){
        //   this.enderecoEntrega = value
        //   console.log("entrega: ", value)
        // }

      }, {
        key: "getData",
        value: function getData() {
          // this.myDate = new Date();
          // this.myDate = formatDate(new Date(), 'yyyy-MM-ddThh:mm', 'en');
          this.myDate = new Date();
        }
      }, {
        key: "checkout",
        value: function checkout() {
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
      }, {
        key: "enviarPedido",
        value: function enviarPedido() {
          var _this2 = this;

          console.log("carrinho: ", this.cart);
          this.formatarProdutos();
          var modalPedido = {
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
          console.log("enviar: ", modalPedido); // chama o storage para pegar dados  

          this.telaCarregamento().then(function () {
            _this2.storage.get("login").then(function (val) {
              _this2.apimercado.enviarPedido(modalPedido, val).then(function (response) {
                console.log("funcionou pedido = ", response);
                _this2.result = response;

                _this2.tabsFunctions.bancoReloadTab2();

                _this2.mensagemSucessoPedido();

                _this2.loadingController.dismiss();

                _this2.router.navigate(["/tabs/tab2"]);

                _this2.close();
              })["catch"](function (response) {
                console.log("deu erro pedido = ", response);

                _this2.loadingController.dismiss();

                _this2.result = response;

                _this2.mensagemErroSistema("Algo esta errado com o pedido");
              });
            })["catch"](function (response) {
              console.log("nao esta logado storage");

              _this2.loadingController.dismiss();
            });
          });
        }
      }, {
        key: "formatarProdutos",
        value: function formatarProdutos() {
          for (var index = 0; index < this.cart.length; index++) {
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
        } // subtotal

      }, {
        key: "getSubTotal",
        value: function getSubTotal() {
          this.cartService.subtotalProduct(this.subtotal);
          return this.subtotal;
        }
      }, {
        key: "freteMercado",
        value: function freteMercado() {
          this.frete = this.saveUser.getFreteMercado();
        }
      }, {
        key: "total",
        value: function total(_total) {
          this.frete = 0;

          if (this.formaEnvio == "Entrega") {
            _total = this.subtotal + this.saveUser.getFreteMercado();
            this.freteMercado();
          } else {
            _total = this.subtotal;
          }

          return _total;
        } // botao de fechar a modal

      }, {
        key: "close",
        value: function close() {
          this.modalCTRL.dismiss();
        }
      }, {
        key: "postFormaPagamento",
        value: function postFormaPagamento(formaPagamento) {
          this.formaPagamenento = formaPagamento;
          console.log("Pagamento: ", this.formaPagamenento);
        }
      }, {
        key: "postFormaEnvio",
        value: function postFormaEnvio(formaEnvio) {
          this.formaEnvio = formaEnvio;
          console.log("envio: ", this.formaEnvio);
          this.total(0); // faz aparecer o selecionador de endereco

          if (formaEnvio == "Entrega") {
            this.enderecoValidacao = true;
          } else {
            this.enderecoValidacao = false;
            this.enderecoEntrega = 0;
          }
        }
      }, {
        key: "postEnderecoEntrega",
        value: function postEnderecoEntrega(id) {
          this.enderecoEntrega = id;
          console.log("id: ", id);
        }
      }, {
        key: "mensagemSucessoPedido",
        value: function mensagemSucessoPedido() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var alert;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.alertCtrl.create({
                      header: 'Operação realizada com sucesso!',
                      message: "Obrigado por comprar com a gente, volte sempre ;)",
                      buttons: ['OK']
                    });

                  case 2:
                    alert = _context.sent;
                    _context.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "mensagemErroUsuario",
        value: function mensagemErroUsuario(mensagem) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var toast;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.toastCtrl.create({
                      color: "primary",
                      message: "".concat(mensagem),
                      duration: 2500
                    });

                  case 2:
                    toast = _context2.sent;
                    toast.present();

                  case 4:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "mensagemErroSistema",
        value: function mensagemErroSistema(mensagem) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var alert;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return this.alertCtrl.create({
                      header: 'Alerta',
                      subHeader: 'Erro interno do sistema',
                      message: "".concat(mensagem, ", por favor contate um desenvolvedor!"),
                      buttons: ['OK']
                    });

                  case 2:
                    alert = _context3.sent;
                    _context3.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "mensagemErroLogin",
        value: function mensagemErroLogin(mensagem) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            var alert;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.next = 2;
                    return this.alertCtrl.create({
                      header: 'Alerta',
                      message: "".concat(mensagem),
                      buttons: ['OK']
                    });

                  case 2:
                    alert = _context4.sent;
                    _context4.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }, {
        key: "telaCarregamento",
        value: function telaCarregamento() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
            var loading;
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    _context5.next = 2;
                    return this.loadingController.create({
                      cssClass: 'my-custom-class',
                      message: 'Por favor aguarde...'
                    });

                  case 2:
                    loading = _context5.sent;
                    return _context5.abrupt("return", loading.present());

                  case 4:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));
        }
      }]);

      return ModaloneComponent;
    }();

    ModaloneComponent.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
      }, {
        type: src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"]
      }, {
        type: src_app_shared_apimercado_service__WEBPACK_IMPORTED_MODULE_4__["ApimercadoService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }, {
        type: src_app_shared_var_usuario_service__WEBPACK_IMPORTED_MODULE_6__["VarUsuarioService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]
      }, {
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_7__["Storage"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
      }, {
        type: src_app_tabs_tabs_functions_service__WEBPACK_IMPORTED_MODULE_8__["TabsFunctionsService"]
      }];
    };

    ModaloneComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-modalone',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./modalone.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/modalone/modalone.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./modalone.component.scss */
      "./src/app/components/modalone/modalone.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"], src_app_shared_apimercado_service__WEBPACK_IMPORTED_MODULE_4__["ApimercadoService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], src_app_shared_var_usuario_service__WEBPACK_IMPORTED_MODULE_6__["VarUsuarioService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"], _ionic_storage__WEBPACK_IMPORTED_MODULE_7__["Storage"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"], src_app_tabs_tabs_functions_service__WEBPACK_IMPORTED_MODULE_8__["TabsFunctionsService"]])], ModaloneComponent);
    /***/
  },

  /***/
  "./src/app/pages/carrinho/carrinho-routing.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/pages/carrinho/carrinho-routing.module.ts ***!
    \***********************************************************/

  /*! exports provided: CarrinhoPageRoutingModule */

  /***/
  function srcAppPagesCarrinhoCarrinhoRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CarrinhoPageRoutingModule", function () {
      return CarrinhoPageRoutingModule;
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


    var _carrinho_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./carrinho.page */
    "./src/app/pages/carrinho/carrinho.page.ts");

    var routes = [{
      path: '',
      component: _carrinho_page__WEBPACK_IMPORTED_MODULE_3__["CarrinhoPage"]
    }];

    var CarrinhoPageRoutingModule = function CarrinhoPageRoutingModule() {
      _classCallCheck(this, CarrinhoPageRoutingModule);
    };

    CarrinhoPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], CarrinhoPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/carrinho/carrinho.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/pages/carrinho/carrinho.module.ts ***!
    \***************************************************/

  /*! exports provided: CarrinhoPageModule */

  /***/
  function srcAppPagesCarrinhoCarrinhoModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CarrinhoPageModule", function () {
      return CarrinhoPageModule;
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


    var _carrinho_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./carrinho-routing.module */
    "./src/app/pages/carrinho/carrinho-routing.module.ts");
    /* harmony import */


    var _carrinho_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./carrinho.page */
    "./src/app/pages/carrinho/carrinho.page.ts");
    /* harmony import */


    var src_app_components_modalone_modalone_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/components/modalone/modalone.component */
    "./src/app/components/modalone/modalone.component.ts");

    var CarrinhoPageModule = function CarrinhoPageModule() {
      _classCallCheck(this, CarrinhoPageModule);
    };

    CarrinhoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _carrinho_routing_module__WEBPACK_IMPORTED_MODULE_5__["CarrinhoPageRoutingModule"]],
      // importa e declara a modal
      declarations: [_carrinho_page__WEBPACK_IMPORTED_MODULE_6__["CarrinhoPage"], src_app_components_modalone_modalone_component__WEBPACK_IMPORTED_MODULE_7__["ModaloneComponent"]],
      entryComponents: [src_app_components_modalone_modalone_component__WEBPACK_IMPORTED_MODULE_7__["ModaloneComponent"]]
    })], CarrinhoPageModule);
    /***/
  },

  /***/
  "./src/app/pages/carrinho/carrinho.page.scss":
  /*!***************************************************!*\
    !*** ./src/app/pages/carrinho/carrinho.page.scss ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesCarrinhoCarrinhoPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-thumbnail {\n  --border-radius:15px;\n}\n\n.carinho {\n  margin-right: 13px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY2FycmluaG8vSDpcXGlvbmljXFx0Y2Mvc3JjXFxhcHBcXHBhZ2VzXFxjYXJyaW5ob1xcY2FycmluaG8ucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9jYXJyaW5oby9jYXJyaW5oby5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxvQkFBQTtBQ0NKOztBREVFO0VBQ0Usa0JBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NhcnJpbmhvL2NhcnJpbmhvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10aHVtYm5haWwge1xyXG4gICAgLS1ib3JkZXItcmFkaXVzOjE1cHg7XHJcbiAgfVxyXG5cclxuICAuY2FyaW5ob3tcclxuICAgIG1hcmdpbi1yaWdodDoxM3B4O1xyXG4gIH0iLCJpb24tdGh1bWJuYWlsIHtcbiAgLS1ib3JkZXItcmFkaXVzOjE1cHg7XG59XG5cbi5jYXJpbmhvIHtcbiAgbWFyZ2luLXJpZ2h0OiAxM3B4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/carrinho/carrinho.page.ts":
  /*!*************************************************!*\
    !*** ./src/app/pages/carrinho/carrinho.page.ts ***!
    \*************************************************/

  /*! exports provided: CarrinhoPage */

  /***/
  function srcAppPagesCarrinhoCarrinhoPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CarrinhoPage", function () {
      return CarrinhoPage;
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


    var src_app_components_modalone_modalone_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/components/modalone/modalone.component */
    "./src/app/components/modalone/modalone.component.ts");
    /* harmony import */


    var src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/cart.service */
    "./src/app/services/cart.service.ts");
    /* harmony import */


    var src_app_shared_apimercado_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/shared/apimercado.service */
    "./src/app/shared/apimercado.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
    /* harmony import */


    var src_app_shared_var_usuario_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/shared/var-usuario.service */
    "./src/app/shared/var-usuario.service.ts");
    /* harmony import */


    var src_app_tabs_tabs_functions_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! src/app/tabs/tabs-functions.service */
    "./src/app/tabs/tabs-functions.service.ts");

    var CarrinhoPage = /*#__PURE__*/function () {
      function CarrinhoPage( // declara a modal e importa la em cima
      modalCTRL, cartService, apimercado, router, storage, alertController, toastCtrl, varUser, tabsFunctions) {
        _classCallCheck(this, CarrinhoPage);

        this.modalCTRL = modalCTRL;
        this.cartService = cartService;
        this.apimercado = apimercado;
        this.router = router;
        this.storage = storage;
        this.alertController = alertController;
        this.toastCtrl = toastCtrl;
        this.varUser = varUser;
        this.tabsFunctions = tabsFunctions; // carrinho

        this.cart = [];
      }

      _createClass(CarrinhoPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this3 = this;

          this.cart = this.cartService.getCart(); // pega valor subtotal

          this.cartService.currentSubtotal.subscribe(function (subtotal) {
            return _this3.subtotal = subtotal;
          }); // this.estasLogado();
        }
      }, {
        key: "remove",
        value: function remove() {
          // mostrar no console log
          this.storage.remove("listaMercado").then(function () {
            console.log("listaMercado deletado");
          });
        }
      }, {
        key: "addLista",
        value: function addLista() {
          var _this4 = this;

          // lista as listas que ja tem 
          this.storage.get("listaMercado").then(function (val) {
            var listaAntiga = val;
            console.log("listaantiga: ", listaAntiga); // console.log("listaantiga: ", this.varUser.getInfoMercadoSelecionado());
            // formata a nova lista 

            var formatar = {
              titulo: _this4.titulo,
              nomeMercado: _this4.varUser.getInfoMercadoSelecionado().nomeMercado,
              imgMercado: _this4.varUser.getInfoMercadoSelecionado().picture,
              totalCompra: _this4.subtotal,
              produtos: _this4.cart,
              data: new Date()
            };
            console.log("o que sera add: ", formatar); // une as a lista nova com as outras

            var enviar = null;

            if (listaAntiga != null) {
              console.log("o que chegou: ", formatar);
              console.log("valor: ", listaAntiga.length);
              enviar = listaAntiga;
              enviar[listaAntiga.length] = formatar;
              console.log("ver: ", enviar);
            } else {
              enviar = [formatar];
              console.log("ver sem push: ", enviar);
            } // envia para o storage 


            _this4.storage.set("listaMercado", enviar).then(function () {
              console.log("listaMercado salvo");

              _this4.mensagemSucesso("Lista salva com sucesso !");

              _this4.tabsFunctions.getListaMercado();
            });
          })["catch"](function (response) {
            console.log("listaMercado erro: ", response);
          });
        } // cria a modal

      }, {
        key: "showModalOne",
        value: function showModalOne() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
            var modal;
            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    _context6.next = 2;
                    return this.modalCTRL.create({
                      component: src_app_components_modalone_modalone_component__WEBPACK_IMPORTED_MODULE_3__["ModaloneComponent"]
                    });

                  case 2:
                    modal = _context6.sent;
                    modal.present();
                    this.cart = this.cartService.getCart();

                  case 5:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6, this);
          }));
        } // fim da modal

      }, {
        key: "decreaseCartItem",
        value: function decreaseCartItem(product) {
          this.cartService.decreaseProduct(product);
        }
      }, {
        key: "increaseCartItem",
        value: function increaseCartItem(product) {
          this.cartService.addProduct(product);
        }
      }, {
        key: "removeCartItem",
        value: function removeCartItem(product) {
          this.cartService.removeProduct(product);
        } // subtotal

      }, {
        key: "getTotal",
        value: function getTotal() {
          this.subtotal = this.cart.reduce(function (i, j) {
            return i + j.preco * j.amount;
          }, 0);
          this.cartService.subtotalProduct(this.subtotal);
          return this.subtotal;
        }
      }, {
        key: "mensagemListaCompra",
        value: function mensagemListaCompra() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
            var _this5 = this;

            var alert;
            return regeneratorRuntime.wrap(function _callee7$(_context7) {
              while (1) {
                switch (_context7.prev = _context7.next) {
                  case 0:
                    if (!(this.cart.length == 0)) {
                      _context7.next = 4;
                      break;
                    }

                    this.mensagemErroUsuario("Carrinho não pode estar vazio!");
                    _context7.next = 9;
                    break;

                  case 4:
                    _context7.next = 6;
                    return this.alertController.create({
                      cssClass: 'my-custom-class',
                      // header: 'Alert',
                      subHeader: 'Lista de compras',
                      message: 'Adicionar produtos do carrinho a lista de compra ?',
                      buttons: [{
                        text: 'Cancelar',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: function handler(blah) {
                          console.log('Confirm Cancel: blah');
                        }
                      }, {
                        text: 'Sim',
                        handler: function handler() {
                          _this5.tituloLista();

                          console.log('Confirm Okay');
                        }
                      }]
                    });

                  case 6:
                    alert = _context7.sent;
                    _context7.next = 9;
                    return alert.present();

                  case 9:
                  case "end":
                    return _context7.stop();
                }
              }
            }, _callee7, this);
          }));
        }
      }, {
        key: "tituloLista",
        value: function tituloLista() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
            var _this6 = this;

            var alert;
            return regeneratorRuntime.wrap(function _callee8$(_context8) {
              while (1) {
                switch (_context8.prev = _context8.next) {
                  case 0:
                    _context8.next = 2;
                    return this.alertController.create({
                      // cssClass: 'my-custom-class',
                      header: 'De um nome a sua lista',
                      // subHeader: 'De um nome a sua lista',
                      // message: 'Adicionar produtos do carrinho a lista de compra ?',
                      inputs: [{
                        name: 'name1',
                        type: 'text',
                        placeholder: 'Nome da lista',
                        value: this.titulo
                      }],
                      buttons: [{
                        text: 'Cancelar',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: function handler(blah) {
                          console.log('Confirm Cancel: blah');
                        }
                      }, {
                        text: 'Sim',
                        handler: function handler(alertData) {
                          _this6.titulo = alertData.name1;
                          console.log(alertData.name1);

                          _this6.addLista();
                        }
                      }]
                    });

                  case 2:
                    alert = _context8.sent;
                    _context8.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context8.stop();
                }
              }
            }, _callee8, this);
          }));
        }
      }, {
        key: "mensagemSucesso",
        value: function mensagemSucesso(mensagem) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
            var alert;
            return regeneratorRuntime.wrap(function _callee9$(_context9) {
              while (1) {
                switch (_context9.prev = _context9.next) {
                  case 0:
                    _context9.next = 2;
                    return this.alertController.create({
                      header: 'Sucesso',
                      // subHeader: 'Sucesso',
                      message: "".concat(mensagem),
                      buttons: ['OK']
                    });

                  case 2:
                    alert = _context9.sent;
                    _context9.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context9.stop();
                }
              }
            }, _callee9, this);
          }));
        }
      }, {
        key: "mensagemErroUsuario",
        value: function mensagemErroUsuario(mensagem) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
            var toast;
            return regeneratorRuntime.wrap(function _callee10$(_context10) {
              while (1) {
                switch (_context10.prev = _context10.next) {
                  case 0:
                    _context10.next = 2;
                    return this.toastCtrl.create({
                      color: "primary",
                      message: "".concat(mensagem),
                      duration: 2500
                    });

                  case 2:
                    toast = _context10.sent;
                    toast.present();

                  case 4:
                  case "end":
                    return _context10.stop();
                }
              }
            }, _callee10, this);
          }));
        }
      }]);

      return CarrinhoPage;
    }();

    CarrinhoPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }, {
        type: src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_4__["CartService"]
      }, {
        type: src_app_shared_apimercado_service__WEBPACK_IMPORTED_MODULE_5__["ApimercadoService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
      }, {
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_7__["Storage"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]
      }, {
        type: src_app_shared_var_usuario_service__WEBPACK_IMPORTED_MODULE_8__["VarUsuarioService"]
      }, {
        type: src_app_tabs_tabs_functions_service__WEBPACK_IMPORTED_MODULE_9__["TabsFunctionsService"]
      }];
    };

    CarrinhoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-carrinho',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./carrinho.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/carrinho/carrinho.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./carrinho.page.scss */
      "./src/app/pages/carrinho/carrinho.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_4__["CartService"], src_app_shared_apimercado_service__WEBPACK_IMPORTED_MODULE_5__["ApimercadoService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _ionic_storage__WEBPACK_IMPORTED_MODULE_7__["Storage"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"], src_app_shared_var_usuario_service__WEBPACK_IMPORTED_MODULE_8__["VarUsuarioService"], src_app_tabs_tabs_functions_service__WEBPACK_IMPORTED_MODULE_9__["TabsFunctionsService"]])], CarrinhoPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-carrinho-carrinho-module-es5.js.map