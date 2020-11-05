import { Component, OnInit } from '@angular/core';
import { ApimercadoService } from '../shared/apimercado.service';
import { Router } from '@angular/router';
import { ModalController, LoadingController } from '@ionic/angular';
import { ListarPedidoProdutoComponent } from '../components/listar-pedido-produto/listar-pedido-produto.component';
import { VarUsuarioService } from '../shared/var-usuario.service';
import { Storage } from '@ionic/storage';
import { TabsFunctionsService } from '../tabs/tabs-functions.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  pedidos: any;
  varSessao: any;
  recarregar: boolean = false;

  constructor(
    private apimercado: ApimercadoService,
    private router: Router,
    private modalCTRL: ModalController,
    private loadingController: LoadingController,
    private saveUser: VarUsuarioService,
    private storage: Storage,
    private tabsFunctions: TabsFunctionsService
    ) { }

  ngOnInit() {
    // this.doRefresh();
    // puxa metodo banco
    // this.estasLogado();
    this.banco();
    
  }

  // doRefresh() {
  //   console.log('Begin async operation');

  //   setTimeout(() => {
  //     console.log('Async operation has ended');
  //     this.bancoReload();
  //     this.doRefresh();
  //   }, 60000);
  // }

  postPedidoSelecionado(pedidoSelecionado) {
    console.log("qual foi: ", pedidoSelecionado);
    this.saveUser.postPedidoSelecionado(pedidoSelecionado);
    this.listarProdutos();
  }

  // cria a modal
  async listarProdutos() {
    const modal = await this.modalCTRL.create({
      component: ListarPedidoProdutoComponent
    });
    modal.present();
  }
  // fim da modal

  banco() {
    // console.log("ver: ", this.saveUser.getInfoCliente())
    this.storage.get("login").then((val) => {
      if (val != null) {
        this.telaCarregamento().then(() => {
          this.apimercado.listarPedidos(val)
            .then((response) => {
              this.pedidos = response;
              this.pedidos.sort((b, a) => a.dataPedido.localeCompare(b.dataPedido));
              console.log("lista de pedidos: ", this.pedidos);
              this.bancoReload();
              // this.saveUser.postPedidos(this.pedidos);
              this.loadingController.dismiss();
            })
            .catch((response) => {
              this.pedidos = response;
              console.log("deu erro: ", this.pedidos);
              this.bancoReload();
              this.loadingController.dismiss();
            });
        });
      }else{
        console.log("nao ta logado")
        this.router.navigate(["/login"])
      }
    }).catch((response) => {
      this.bancoReload();
      console.log("nao esta logado storage: ", response);
    });
  }

  bancoReload() {
    this.tabsFunctions.serviceData
      .subscribe(data => (this.pedidos = data));

  //   // console.log("ver: ", this.saveUser.getInfoCliente())
  //   this.storage.get("login").then((val) => {
  //     if (val != null) {
  //         this.apimercado.listarPedidos(val)
  //           .then((response) => {
  //             this.pedidos = response;
  //             console.log("lista de pedidos: ", this.pedidos);
  //             // this.saveUser.postPedidos(this.pedidos);
  //             this.loadingController.dismiss();
  //           })
  //           .catch((response) => {
  //             this.pedidos = response;
  //             console.log("deu erro: ", this.pedidos);
  //             this.loadingController.dismiss();
  //           });
  //     }else{
  //       console.log("nao ta logado")
  //       this.router.navigate(["/login"])
  //     };
  //   }).catch((response) => {
  //     console.log("nao esta logado storage: ", response);
  //   });
  }

  async telaCarregamento() {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Por favor aguarde...'
    });
    return loading.present();
  };
}
