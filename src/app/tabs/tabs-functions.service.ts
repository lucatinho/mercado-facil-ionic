import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { ApimercadoService } from '../shared/apimercado.service';
import { VarUsuarioService } from '../shared/var-usuario.service';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TabsFunctionsService {
  varSessao: any
  pedidos:any
  listaCompra:any;
  listaCompraValidaitor:any;

  private dataSource = new BehaviorSubject(this.pedidos);
  serviceData = this.dataSource.asObservable();

  private dataListaCompra = new BehaviorSubject(this.listaCompra);
  serviceListaCompra = this.dataListaCompra.asObservable();

  private dataListaCompraValideitor = new BehaviorSubject(this.listaCompraValidaitor);
  serviceListaCompraValideitor = this.dataListaCompraValideitor.asObservable();

  constructor(
    private storage: Storage,
    private apimercado: ApimercadoService,
    private varUser: VarUsuarioService,
    private router: Router
  ) { }

// tab1
  sessaoCliente() {
    this.storage.get("login").then((val) => {
      if (val != null) {
        // chama a tela de carregamento
        this.apimercado.sessaoCliente(val)
          .then((response) => {
            this.varSessao = response;
            this.varUser.postInfoCliente(this.varSessao);
            console.log("logou, estava salvo");
            // this.banco();
            // this.getMercadoFavorito();
            // fecha a tela de carregamento
          })
          .catch((response) => {
            this.varSessao = response;
            console.log("Nao ta logado: ", this.varSessao);

            // this.router.navigate(["/login"])
            // fecha a tela de carregamento
          });
      } else {
        console.log("storage nulo")
      }
    }).catch((response) => {
      console.log("nao esta logado storage");
    });
  }
// !tab1

// tab2
  bancoReloadTab2() {
    // console.log("ver: ", this.saveUser.getInfoCliente())
    this.storage.get("login").then((val) => {
      if (val != null) {
        this.apimercado.listarPedidos(val)
          .then((response) => {
            this.pedidos = response;
            this.pedidos.sort((b, a) => a.dataPedido.localeCompare(b.dataPedido));
            console.log("lista de pedidos: ", this.pedidos);
            this.dataSource.next(this.pedidos);
            // this.saveUser.postPedidos(this.pedidos);
          })
          .catch((response) => {
            // this.pedidos = response;
            console.log("deu erro: ", response);
          });
      } else {
        console.log("nao ta logado")
        this.router.navigate(["/login"])
      };
    }).catch((response) => {
      console.log("nao esta logado storage: ", response);
    });
  }
// !tab2

  // tab3
  getListaMercado() {
    this.storage.get("listaMercado").then((val) => {
      this.listaCompra = val;
      this.listaCompra.sort((b, a) => a.data.localeCompare(b.data));
      this.dataListaCompra.next(this.listaCompra);
      console.log(val)
      this.dataListaCompraValideitor.next(false);
      if (this.listaCompra.length == 0 || this.listaCompra == null) {
            console.log("entrou")
            this.dataListaCompraValideitor.next(true);
          }
      // console.log(this.serviceListaCompra)
      
    }).catch((response) => {
      console.log("listaMercado erro: ", response);
      this.dataListaCompraValideitor.next(true);
    });
    // return this.infoCliente;
  }

}


