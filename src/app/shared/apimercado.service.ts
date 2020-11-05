import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { VarUsuarioService } from './var-usuario.service';

@Injectable({
  providedIn: 'root'
})
export class ApimercadoService {
  // variavel mercado
  private mercadoSelecionado = new BehaviorSubject<string>("0");
  currentMercadoSelecionado = this.mercadoSelecionado.asObservable();
  // variavel categoria
  private categoriaSelecionado = new BehaviorSubject<string>("1");
  currentCategoriaSelecionado = this.categoriaSelecionado.asObservable();
  // variavel lista
  private listaSelecionado = new BehaviorSubject<string>("0");
  currentListaSelecionado = this.listaSelecionado.asObservable();

  // login =================================================================================================


  constructor(private http: HttpClient, private saveUser: VarUsuarioService) { }

  // mudar variavel mercado
  changeMercadoSelecionado(mercado: string) {
    this.mercadoSelecionado.next(mercado)
    console.log("MercadoData: ", mercado);
  }
  // mudar variavel categoria
  changeCategoriaSelecionado(categoria: string) {
    this.categoriaSelecionado.next(categoria)
    console.log("CategoriaData: ", categoria);
  }
  // mudar variavel lista
  changeListaSelecionado(lista: string) {
    this.listaSelecionado.next(lista)
    console.log("ListaData: ", lista);
  }
  // GET ------------------------------------------------------------------------------------------------------------------

  listarMercados() {
    let username = 'servo'
    let password = '123'
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
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
    let username = 'servo'
    let password = '123'
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    // link local
    // let url = 'http://localhost:8080/api/' + this.mercadoSelecionado.value + "/categorias";
    // return this.http.get(url, { headers }).toPromise();
    // return this.http.get("http://localhost:8080/api/mercado1", { headers }).toPromise();
    // link rede
    let url ='https://apimercado-central.herokuapp.com/api/' + this.mercadoSelecionado.value + "/categorias";
    return this.http.get(url, { headers }).toPromise();
  }

  // escolher qual mercado
  listarProdutos() {
    let username = 'servo'
    let password = '123'
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
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
    let username = val.username
    let password = val.password;
    let idCliente = this.saveUser.getInfoCliente().idCliente;
    console.log("id: ", idCliente);
    console.log("usuario | senha: ", username, password);
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    // link local
    // let url = 'http://localhost:8080/api/pedido/cliente/' + idCliente;
    // return this.http.get(url, { headers }).toPromise();
    // link rede
    let url = 'https://apimercado-central.herokuapp.com/api/pedido/cliente/' + idCliente;
    return this.http.get(url, { headers }).toPromise();
  }


  login(username: string, password: string) {
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    // link local
    // return this.http.get("http://localhost:8080/login", { headers, responseType: 'text' as 'json' })
    // link rede
    return this.http.get("https://apimercado-central.herokuapp.com/login", { headers, responseType: 'text' as 'json' })
  }

  sessaoCliente(val) {
    // let username = 'lucatinho'
    // let password = '123'
    let username = val.username
    let password = val.password;
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
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
    let username = ""
    let password = ""
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    // link local
    // return this.http.get("http://localhost:8080/logout", { headers }).toPromise();
    // link rede
    return this.http.get("https://apimercado-central.herokuapp.com/logout", { headers }).toPromise();
  }
  // !precisa estar logado

  // POST -------------------------------------------------------------------------------------------------------

  // cadastro de clientes -----------------------------------------------------------------------------------------
  postCliente(cadastro: any) {
    // let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    let username = 'servo'
    let password = '123'
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password), 'Content-Type': 'application/json' });
    // link local
    // return this.http.post('http://localhost:8080/api/cliente', cadastro, { headers }).toPromise();
    // link rede
    return this.http.post('https://apimercado-central.herokuapp.com/api/cliente', cadastro, { headers }).toPromise();
  }

  verificacaoCadastroCliente() {
    let username = 'servo'
    let password = '123'
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    // link local
    // return this.http.get("http://localhost:8080/api/clientes", { headers }).toPromise();
    // link rede
    return this.http.get("https://apimercado-central.herokuapp.com/api/clientes", { headers }).toPromise();
  }

  cadastrarUsuario(cadastroUser: any) {
    let username = 'servo'
    let password = '123'
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    // link local
    // return this.http.post('http://localhost:8080/api/usuario', cadastroUser, { headers: headers }).toPromise();
    // link rede
    return this.http.post('https://apimercado-central.herokuapp.com/api/usuario', cadastroUser, { headers: headers }).toPromise();
  }
  // !cadastro de clientes ------------------------------------------------------------------------------------------

  // Cadastro de pedidos
  enviarPedido(pedido: any, val) {
    // let username = 'usuario'
    // let password = '123'
    let username = val.username
    let password = val.password;
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password), 'Content-Type': 'application/json' });
    // link local
    // return this.http.post('http://localhost:8080/api/pedido', pedido, { headers }).toPromise();
    // link rede
    return this.http.post('https://apimercado-central.herokuapp.com/api/pedido', pedido, { headers }).toPromise();
  }
  // !Cadastro de pedidos


  // PUT ----------------------------------------------------------------------------------------------------------
  // Cadastro de pedidos
  adicionarMercadoFavorito(pedido: any) {
    // let username = 'lucatinho'
    // let password = '123'
    let username = this.saveUser.getLogin().username;
    let password = this.saveUser.getLogin().password;
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password), 'Content-Type': 'application/json' });
    // link local
    // return this.http.post('http://localhost:8080/api/pedido', pedido, { headers }).toPromise();
    // link rede
    return this.http.put('https://apimercado-central.herokuapp.com/api/cliente', pedido, { headers }).toPromise();
  }
  // !Cadastro de pedidos
}