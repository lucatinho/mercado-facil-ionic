function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-cadastro-cadastro-module~pages-carrinho-carrinho-module~pages-index-index-module~pages~20d9ae09"], {
  /***/
  "./src/app/shared/apimercado.service.ts":
  /*!**********************************************!*\
    !*** ./src/app/shared/apimercado.service.ts ***!
    \**********************************************/

  /*! exports provided: ApimercadoService */

  /***/
  function srcAppSharedApimercadoServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ApimercadoService", function () {
      return ApimercadoService;
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


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _var_usuario_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./var-usuario.service */
    "./src/app/shared/var-usuario.service.ts");

    var ApimercadoService = /*#__PURE__*/function () {
      // login =================================================================================================
      function ApimercadoService(http, saveUser) {
        _classCallCheck(this, ApimercadoService);

        this.http = http;
        this.saveUser = saveUser; // variavel mercado

        this.mercadoSelecionado = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]("0");
        this.currentMercadoSelecionado = this.mercadoSelecionado.asObservable(); // variavel categoria

        this.categoriaSelecionado = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]("1");
        this.currentCategoriaSelecionado = this.categoriaSelecionado.asObservable(); // variavel lista

        this.listaSelecionado = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]("0");
        this.currentListaSelecionado = this.listaSelecionado.asObservable();
      } // mudar variavel mercado


      _createClass(ApimercadoService, [{
        key: "changeMercadoSelecionado",
        value: function changeMercadoSelecionado(mercado) {
          this.mercadoSelecionado.next(mercado);
          console.log("MercadoData: ", mercado);
        } // mudar variavel categoria

      }, {
        key: "changeCategoriaSelecionado",
        value: function changeCategoriaSelecionado(categoria) {
          this.categoriaSelecionado.next(categoria);
          console.log("CategoriaData: ", categoria);
        } // mudar variavel lista

      }, {
        key: "changeListaSelecionado",
        value: function changeListaSelecionado(lista) {
          this.listaSelecionado.next(lista);
          console.log("ListaData: ", lista);
        } // GET ------------------------------------------------------------------------------------------------------------------

      }, {
        key: "listarMercados",
        value: function listarMercados() {
          var username = 'servo';
          var password = '123';
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            Authorization: 'Basic ' + btoa(username + ':' + password)
          }); // link local
          // return this.http.get("http://localhost:8080/api/mercados", { headers }).toPromise();
          // link rede

          return this.http.get("https://apimercado-central.herokuapp.com/api/mercados", {
            headers: headers
          }).toPromise();
        } // listarCategorias() {
        //   let username = 'servo'
        //   let password = '123'
        //   const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
        //   // link local
        //   // return this.http.get("http://localhost:8080/api/categorias", { headers }).toPromise();
        //   // link rede
        //   return this.http.get("https://apimercado-central.herokuapp.com/api/categorias", { headers }).toPromise();
        // }
        // escolher qual mercado

      }, {
        key: "listarCategorias",
        value: function listarCategorias() {
          var username = 'servo';
          var password = '123';
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            Authorization: 'Basic ' + btoa(username + ':' + password)
          }); // link local
          // let url = 'http://localhost:8080/api/' + this.mercadoSelecionado.value + "/categorias";
          // return this.http.get(url, { headers }).toPromise();
          // return this.http.get("http://localhost:8080/api/mercado1", { headers }).toPromise();
          // link rede

          var url = 'https://apimercado-central.herokuapp.com/api/' + this.mercadoSelecionado.value + "/categorias";
          return this.http.get(url, {
            headers: headers
          }).toPromise();
        } // escolher qual mercado

      }, {
        key: "listarProdutos",
        value: function listarProdutos() {
          var username = 'servo';
          var password = '123';
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            Authorization: 'Basic ' + btoa(username + ':' + password)
          }); // link local
          // let url ='http://localhost:8080/api/' + this.mercadoSelecionado.value;
          // return this.http.get(url, { headers }).toPromise();
          // return this.http.get("http://localhost:8080/api/mercado1", { headers }).toPromise();
          // link rede

          var url = 'https://apimercado-central.herokuapp.com/api/' + this.mercadoSelecionado.value;
          return this.http.get(url, {
            headers: headers
          }).toPromise();
        } // login(username:string,password:string){
        //     const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
        //     return this.http.get("http://localhost:8080/login",{headers,responseType: 'text' as 'json'})
        //   }
        // precisa estar logado

      }, {
        key: "listarPedidos",
        value: function listarPedidos(val) {
          // let username = 'usuario'
          // let password = '123'
          var username = val.username;
          var password = val.password;
          var idCliente = this.saveUser.getInfoCliente().idCliente;
          console.log("id: ", idCliente);
          console.log("usuario | senha: ", username, password);
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            Authorization: 'Basic ' + btoa(username + ':' + password)
          }); // link local
          // let url = 'http://localhost:8080/api/pedido/cliente/' + idCliente;
          // return this.http.get(url, { headers }).toPromise();
          // link rede

          var url = 'https://apimercado-central.herokuapp.com/api/pedido/cliente/' + idCliente;
          return this.http.get(url, {
            headers: headers
          }).toPromise();
        }
      }, {
        key: "login",
        value: function login(username, password) {
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            Authorization: 'Basic ' + btoa(username + ':' + password)
          }); // link local
          // return this.http.get("http://localhost:8080/login", { headers, responseType: 'text' as 'json' })
          // link rede

          return this.http.get("https://apimercado-central.herokuapp.com/login", {
            headers: headers,
            responseType: 'text'
          });
        }
      }, {
        key: "sessaoCliente",
        value: function sessaoCliente(val) {
          // let username = 'lucatinho'
          // let password = '123'
          var username = val.username;
          var password = val.password;
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            Authorization: 'Basic ' + btoa(username + ':' + password)
          }); // link local
          // let url = 'http://localhost:8080/api/cliente/nomelogin/' + username;
          // return this.http.get("http://localhost:8080/api/cliente/nomelogin/joaozin", { headers }).toPromise();
          // return this.http.get(url, { headers }).toPromise();
          // link rede

          var url = 'https://apimercado-central.herokuapp.com/api/cliente/email/' + username;
          return this.http.get(url, {
            headers: headers
          }).toPromise();
        }
      }, {
        key: "logout",
        value: function logout() {
          // let username = 'usuario'
          // let password = '123'
          var username = "";
          var password = "";
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            Authorization: 'Basic ' + btoa(username + ':' + password)
          }); // link local
          // return this.http.get("http://localhost:8080/logout", { headers }).toPromise();
          // link rede

          return this.http.get("https://apimercado-central.herokuapp.com/logout", {
            headers: headers
          }).toPromise();
        } // !precisa estar logado
        // POST -------------------------------------------------------------------------------------------------------
        // cadastro de clientes -----------------------------------------------------------------------------------------

      }, {
        key: "postCliente",
        value: function postCliente(cadastro) {
          // let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
          var username = 'servo';
          var password = '123';
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            Authorization: 'Basic ' + btoa(username + ':' + password),
            'Content-Type': 'application/json'
          }); // link local
          // return this.http.post('http://localhost:8080/api/cliente', cadastro, { headers }).toPromise();
          // link rede

          return this.http.post('https://apimercado-central.herokuapp.com/api/cliente', cadastro, {
            headers: headers
          }).toPromise();
        }
      }, {
        key: "verificacaoCadastroCliente",
        value: function verificacaoCadastroCliente() {
          var username = 'servo';
          var password = '123';
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            Authorization: 'Basic ' + btoa(username + ':' + password)
          }); // link local
          // return this.http.get("http://localhost:8080/api/clientes", { headers }).toPromise();
          // link rede

          return this.http.get("https://apimercado-central.herokuapp.com/api/clientes", {
            headers: headers
          }).toPromise();
        }
      }, {
        key: "cadastrarUsuario",
        value: function cadastrarUsuario(cadastroUser) {
          var username = 'servo';
          var password = '123';
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            Authorization: 'Basic ' + btoa(username + ':' + password)
          }); // link local
          // return this.http.post('http://localhost:8080/api/usuario', cadastroUser, { headers: headers }).toPromise();
          // link rede

          return this.http.post('https://apimercado-central.herokuapp.com/api/usuario', cadastroUser, {
            headers: headers
          }).toPromise();
        } // !cadastro de clientes ------------------------------------------------------------------------------------------
        // Cadastro de pedidos

      }, {
        key: "enviarPedido",
        value: function enviarPedido(pedido, val) {
          // let username = 'usuario'
          // let password = '123'
          var username = val.username;
          var password = val.password;
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            Authorization: 'Basic ' + btoa(username + ':' + password),
            'Content-Type': 'application/json'
          }); // link local
          // return this.http.post('http://localhost:8080/api/pedido', pedido, { headers }).toPromise();
          // link rede

          return this.http.post('https://apimercado-central.herokuapp.com/api/pedido', pedido, {
            headers: headers
          }).toPromise();
        } // !Cadastro de pedidos
        // PUT ----------------------------------------------------------------------------------------------------------
        // Cadastro de pedidos

      }, {
        key: "adicionarMercadoFavorito",
        value: function adicionarMercadoFavorito(pedido) {
          // let username = 'lucatinho'
          // let password = '123'
          var username = this.saveUser.getLogin().username;
          var password = this.saveUser.getLogin().password;
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            Authorization: 'Basic ' + btoa(username + ':' + password),
            'Content-Type': 'application/json'
          }); // link local
          // return this.http.post('http://localhost:8080/api/pedido', pedido, { headers }).toPromise();
          // link rede

          return this.http.put('https://apimercado-central.herokuapp.com/api/cliente', pedido, {
            headers: headers
          }).toPromise();
        }
      }]);

      return ApimercadoService;
    }();

    ApimercadoService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _var_usuario_service__WEBPACK_IMPORTED_MODULE_4__["VarUsuarioService"]
      }];
    };

    ApimercadoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _var_usuario_service__WEBPACK_IMPORTED_MODULE_4__["VarUsuarioService"]])], ApimercadoService);
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
//# sourceMappingURL=default~pages-cadastro-cadastro-module~pages-carrinho-carrinho-module~pages-index-index-module~pages~20d9ae09-es5.js.map