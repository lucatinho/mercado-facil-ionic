import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { ApimercadoService } from './apimercado.service';

@Injectable({
  providedIn: 'root'
})
export class VarUsuarioService {
  private refresh:boolean = false
  private login: any = [];
  private infoCliente: any=[];
  private pedidoSelecionado: any;
  private pedidos: any;
  private nomeMercadoSelecionado: string;
  private SubCategoriaSelecionado: any = [
    {
      idSubCategoria: 1,
      nomeSubCategoria: "modelo",
      imgSubCategoria: null
    }
  ];
  private freteMercado: any;
  private SubCategorias: any;
  private infoMercadoSelecionado:any;
  private listaMercadoSelecionada:any;
  // private login = new BehaviorSubject(0);

  constructor(private storage: Storage) { }
  // storage

  // login ------------------------------------------------------------------
  getLogin() {
    if (this.login == null) {
      this.login = "";
      console.log("entrou no if");
    }else{
    this.storage.get("login").then((val) => {
      this.login = val;
    }).catch((response) => {
      console.log("nao esta logado storage: ", response);
    });}
    return this.login;
  }

  postLogin(username: string, password: string) {
    this.login = {
      username: username,
      password: password
    };
    console.log("varUser: ", this.login);

    this.storage.set("login", this.login).then(() => {
      console.log("usuario salvo")
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
    this.infoCliente = infoCliente
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
  postFreteMercado(freteMercado: any) {
    this.freteMercado = freteMercado;
  }
  // nomeMercadoSelecionado
  getMercadoSelecionado() {
    return this.nomeMercadoSelecionado;
  }
  postMercadoSelecionado(nomeMercadoSelecionado: string) {
    this.nomeMercadoSelecionado = nomeMercadoSelecionado;
  }

  // nome da subcategoria
  getSubCategorias() {
    return this.SubCategorias;
  }
  postSubCategorias(SubCategorias: string) {
    this.SubCategorias = SubCategorias;
  }

  // nome da subcategoria selecionada 
  getSubCategoriaSelecionado() {
    return this.SubCategoriaSelecionado;
  }
  postSubCategoriaSelecionado(SubCategoriaSelecionado) {
    this.SubCategoriaSelecionado = SubCategoriaSelecionado;
  }

  getInfoMercadoSelecionado(){
   return this.infoMercadoSelecionado;
  }

  postInfoMercadoSelecionado(infoMercado){
    this.infoMercadoSelecionado = infoMercado;
  }

  getListaCompraSelecionada(){
    return this.listaMercadoSelecionada;
   }
 
   postListaCompraSelecionada(ListaMercadoSelecionada){
     this.listaMercadoSelecionada = ListaMercadoSelecionada;
   }
 
}
