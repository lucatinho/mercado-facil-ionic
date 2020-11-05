(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-cadastro-cadastro-module~pages-carrinho-carrinho-module~pages-index-index-module~pages~20d9ae09"],{

/***/ "./src/app/shared/apimercado.service.ts":
/*!**********************************************!*\
  !*** ./src/app/shared/apimercado.service.ts ***!
  \**********************************************/
/*! exports provided: ApimercadoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApimercadoService", function() { return ApimercadoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _var_usuario_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./var-usuario.service */ "./src/app/shared/var-usuario.service.ts");





let ApimercadoService = class ApimercadoService {
    // login =================================================================================================
    constructor(http, saveUser) {
        this.http = http;
        this.saveUser = saveUser;
        // variavel mercado
        this.mercadoSelecionado = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]("0");
        this.currentMercadoSelecionado = this.mercadoSelecionado.asObservable();
        // variavel categoria
        this.categoriaSelecionado = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]("1");
        this.currentCategoriaSelecionado = this.categoriaSelecionado.asObservable();
        // variavel lista
        this.listaSelecionado = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]("0");
        this.currentListaSelecionado = this.listaSelecionado.asObservable();
    }
    // mudar variavel mercado
    changeMercadoSelecionado(mercado) {
        this.mercadoSelecionado.next(mercado);
        console.log("MercadoData: ", mercado);
    }
    // mudar variavel categoria
    changeCategoriaSelecionado(categoria) {
        this.categoriaSelecionado.next(categoria);
        console.log("CategoriaData: ", categoria);
    }
    // mudar variavel lista
    changeListaSelecionado(lista) {
        this.listaSelecionado.next(lista);
        console.log("ListaData: ", lista);
    }
    // GET ------------------------------------------------------------------------------------------------------------------
    listarMercados() {
        let username = 'servo';
        let password = '123';
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ Authorization: 'Basic ' + btoa(username + ':' + password) });
        // link local
        // return this.http.get("http://localhost:8080/api/mercados", { headers }).toPromise();
        // link rede
        return this.http.get("https://apimercado-central.herokuapp.com/api/mercados", { headers }).toPromise();
    }
    // listarCategorias() {
    //   let username = 'servo'
    //   let password = '123'
    //   const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    //   // link local
    //   // return this.http.get("http://localhost:8080/api/categorias", { headers }).toPromise();
    //   // link rede
    //   return this.http.get("https://apimercado-central.herokuapp.com/api/categorias", { headers }).toPromise();
    // }
    // escolher qual mercado
    listarCategorias() {
        let username = 'servo';
        let password = '123';
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ Authorization: 'Basic ' + btoa(username + ':' + password) });
        // link local
        // let url = 'http://localhost:8080/api/' + this.mercadoSelecionado.value + "/categorias";
        // return this.http.get(url, { headers }).toPromise();
        // return this.http.get("http://localhost:8080/api/mercado1", { headers }).toPromise();
        // link rede
        let url = 'https://apimercado-central.herokuapp.com/api/' + this.mercadoSelecionado.value + "/categorias";
        return this.http.get(url, { headers }).toPromise();
    }
    // escolher qual mercado
    listarProdutos() {
        let username = 'servo';
        let password = '123';
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ Authorization: 'Basic ' + btoa(username + ':' + password) });
        // link local
        // let url ='http://localhost:8080/api/' + this.mercadoSelecionado.value;
        // return this.http.get(url, { headers }).toPromise();
        // return this.http.get("http://localhost:8080/api/mercado1", { headers }).toPromise();
        // link rede
        let url = 'https://apimercado-central.herokuapp.com/api/' + this.mercadoSelecionado.value;
        return this.http.get(url, { headers }).toPromise();
    }
    // login(username:string,password:string){
    //     const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    //     return this.http.get("http://localhost:8080/login",{headers,responseType: 'text' as 'json'})
    //   }
    // precisa estar logado
    listarPedidos(val) {
        // let username = 'usuario'
        // let password = '123'
        let username = val.username;
        let password = val.password;
        let idCliente = this.saveUser.getInfoCliente().idCliente;
        console.log("id: ", idCliente);
        console.log("usuario | senha: ", username, password);
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ Authorization: 'Basic ' + btoa(username + ':' + password) });
        // link local
        // let url = 'http://localhost:8080/api/pedido/cliente/' + idCliente;
        // return this.http.get(url, { headers }).toPromise();
        // link rede
        let url = 'https://apimercado-central.herokuapp.com/api/pedido/cliente/' + idCliente;
        return this.http.get(url, { headers }).toPromise();
    }
    login(username, password) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ Authorization: 'Basic ' + btoa(username + ':' + password) });
        // link local
        // return this.http.get("http://localhost:8080/login", { headers, responseType: 'text' as 'json' })
        // link rede
        return this.http.get("https://apimercado-central.herokuapp.com/login", { headers, responseType: 'text' });
    }
    sessaoCliente(val) {
        // let username = 'lucatinho'
        // let password = '123'
        let username = val.username;
        let password = val.password;
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ Authorization: 'Basic ' + btoa(username + ':' + password) });
        // link local
        // let url = 'http://localhost:8080/api/cliente/nomelogin/' + username;
        // return this.http.get("http://localhost:8080/api/cliente/nomelogin/joaozin", { headers }).toPromise();
        // return this.http.get(url, { headers }).toPromise();
        // link rede
        let url = 'https://apimercado-central.herokuapp.com/api/cliente/email/' + username;
        return this.http.get(url, { headers }).toPromise();
    }
    logout() {
        // let username = 'usuario'
        // let password = '123'
        let username = "";
        let password = "";
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ Authorization: 'Basic ' + btoa(username + ':' + password) });
        // link local
        // return this.http.get("http://localhost:8080/logout", { headers }).toPromise();
        // link rede
        return this.http.get("https://apimercado-central.herokuapp.com/logout", { headers }).toPromise();
    }
    // !precisa estar logado
    // POST -------------------------------------------------------------------------------------------------------
    // cadastro de clientes -----------------------------------------------------------------------------------------
    postCliente(cadastro) {
        // let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        let username = 'servo';
        let password = '123';
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ Authorization: 'Basic ' + btoa(username + ':' + password), 'Content-Type': 'application/json' });
        // link local
        // return this.http.post('http://localhost:8080/api/cliente', cadastro, { headers }).toPromise();
        // link rede
        return this.http.post('https://apimercado-central.herokuapp.com/api/cliente', cadastro, { headers }).toPromise();
    }
    verificacaoCadastroCliente() {
        let username = 'servo';
        let password = '123';
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ Authorization: 'Basic ' + btoa(username + ':' + password) });
        // link local
        // return this.http.get("http://localhost:8080/api/clientes", { headers }).toPromise();
        // link rede
        return this.http.get("https://apimercado-central.herokuapp.com/api/clientes", { headers }).toPromise();
    }
    cadastrarUsuario(cadastroUser) {
        let username = 'servo';
        let password = '123';
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ Authorization: 'Basic ' + btoa(username + ':' + password) });
        // link local
        // return this.http.post('http://localhost:8080/api/usuario', cadastroUser, { headers: headers }).toPromise();
        // link rede
        return this.http.post('https://apimercado-central.herokuapp.com/api/usuario', cadastroUser, { headers: headers }).toPromise();
    }
    // !cadastro de clientes ------------------------------------------------------------------------------------------
    // Cadastro de pedidos
    enviarPedido(pedido, val) {
        // let username = 'usuario'
        // let password = '123'
        let username = val.username;
        let password = val.password;
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ Authorization: 'Basic ' + btoa(username + ':' + password), 'Content-Type': 'application/json' });
        // link local
        // return this.http.post('http://localhost:8080/api/pedido', pedido, { headers }).toPromise();
        // link rede
        return this.http.post('https://apimercado-central.herokuapp.com/api/pedido', pedido, { headers }).toPromise();
    }
    // !Cadastro de pedidos
    // PUT ----------------------------------------------------------------------------------------------------------
    // Cadastro de pedidos
    adicionarMercadoFavorito(pedido) {
        // let username = 'lucatinho'
        // let password = '123'
        let username = this.saveUser.getLogin().username;
        let password = this.saveUser.getLogin().password;
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ Authorization: 'Basic ' + btoa(username + ':' + password), 'Content-Type': 'application/json' });
        // link local
        // return this.http.post('http://localhost:8080/api/pedido', pedido, { headers }).toPromise();
        // link rede
        return this.http.put('https://apimercado-central.herokuapp.com/api/cliente', pedido, { headers }).toPromise();
    }
};
ApimercadoService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _var_usuario_service__WEBPACK_IMPORTED_MODULE_4__["VarUsuarioService"] }
];
ApimercadoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _var_usuario_service__WEBPACK_IMPORTED_MODULE_4__["VarUsuarioService"]])
], ApimercadoService);



/***/ }),

/***/ "./src/app/shared/var-usuario.service.ts":
/*!***********************************************!*\
  !*** ./src/app/shared/var-usuario.service.ts ***!
  \***********************************************/
/*! exports provided: VarUsuarioService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VarUsuarioService", function() { return VarUsuarioService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");



let VarUsuarioService = class VarUsuarioService {
    // private login = new BehaviorSubject(0);
    constructor(storage) {
        this.storage = storage;
        this.refresh = false;
        this.login = [];
        this.infoCliente = [];
        this.SubCategoriaSelecionado = [
            {
                idSubCategoria: 1,
                nomeSubCategoria: "modelo",
                imgSubCategoria: null
            }
        ];
    }
    // storage
    // login ------------------------------------------------------------------
    getLogin() {
        if (this.login == null) {
            this.login = "";
            console.log("entrou no if");
        }
        else {
            this.storage.get("login").then((val) => {
                this.login = val;
            }).catch((response) => {
                console.log("nao esta logado storage: ", response);
            });
        }
        return this.login;
    }
    postLogin(username, password) {
        this.login = {
            username: username,
            password: password
        };
        console.log("varUser: ", this.login);
        this.storage.set("login", this.login).then(() => {
            console.log("usuario salvo");
        });
    }
    deleteLogin() {
        // mostrar no console log
        this.storage.remove("login").then(() => {
            console.log("usuario deletado");
        });
    }
    // !login ------------------------------------------------------------------
    // !storage
    // idcliente -------------------------------------------------------------------
    getInfoCliente() {
        // this.storage.get("infoCliente").then((val) => {
        //   this.infoCliente = val;
        //   console.log("depois")
        // }).catch((response) => {
        //   console.log("infoCliente erro: ", response);
        // });
        return this.infoCliente;
    }
    postInfoCliente(infoCliente) {
        this.infoCliente = infoCliente;
        // this.storage.set("infoCliente", infoCliente).then(() => {
        //   console.log("infoCliente salvo")
        // });
    }
    // !idcliente -------------------------------------------------------------------
    // listapedido
    getPedidoSelecionado() {
        return this.pedidoSelecionado;
    }
    postPedidoSelecionado(pedidoSelecionado) {
        this.pedidoSelecionado = pedidoSelecionado;
    }
    // listaPedidos
    getPedidos() {
        return this.pedidos;
    }
    postPedidos(pedidos) {
        this.pedidos = pedidos;
    }
    // nomeMercadoSelecionado
    getFreteMercado() {
        return this.freteMercado;
    }
    postFreteMercado(freteMercado) {
        this.freteMercado = freteMercado;
    }
    // nomeMercadoSelecionado
    getMercadoSelecionado() {
        return this.nomeMercadoSelecionado;
    }
    postMercadoSelecionado(nomeMercadoSelecionado) {
        this.nomeMercadoSelecionado = nomeMercadoSelecionado;
    }
    // nome da subcategoria
    getSubCategorias() {
        return this.SubCategorias;
    }
    postSubCategorias(SubCategorias) {
        this.SubCategorias = SubCategorias;
    }
    // nome da subcategoria selecionada 
    getSubCategoriaSelecionado() {
        return this.SubCategoriaSelecionado;
    }
    postSubCategoriaSelecionado(SubCategoriaSelecionado) {
        this.SubCategoriaSelecionado = SubCategoriaSelecionado;
    }
    getInfoMercadoSelecionado() {
        return this.infoMercadoSelecionado;
    }
    postInfoMercadoSelecionado(infoMercado) {
        this.infoMercadoSelecionado = infoMercado;
    }
    getListaCompraSelecionada() {
        return this.listaMercadoSelecionada;
    }
    postListaCompraSelecionada(ListaMercadoSelecionada) {
        this.listaMercadoSelecionada = ListaMercadoSelecionada;
    }
};
VarUsuarioService.ctorParameters = () => [
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"] }
];
VarUsuarioService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"]])
], VarUsuarioService);



/***/ })

}]);
//# sourceMappingURL=default~pages-cadastro-cadastro-module~pages-carrinho-carrinho-module~pages-index-index-module~pages~20d9ae09-es2015.js.map