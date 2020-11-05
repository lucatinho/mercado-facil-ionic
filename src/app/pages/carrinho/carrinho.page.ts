import { Component, OnInit } from '@angular/core';
import { ModalController, AlertController, ToastController } from '@ionic/angular';
import { ModaloneComponent } from 'src/app/components/modalone/modalone.component';
import { CartService, Product } from 'src/app/services/cart.service';
import { ApimercadoService } from 'src/app/shared/apimercado.service';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { VarUsuarioService } from 'src/app/shared/var-usuario.service';
import { TabsFunctionsService } from 'src/app/tabs/tabs-functions.service';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.page.html',
  styleUrls: ['./carrinho.page.scss'],
})
export class CarrinhoPage implements OnInit {
  varSessao: any;
  // subtotal
  subtotal: any;
  // carrinho
  cart: Product[] = [];

  titulo: any;


  constructor(
    // declara a modal e importa la em cima
    private modalCTRL: ModalController,
    private cartService: CartService,
    private apimercado: ApimercadoService,
    private router: Router,
    private storage: Storage,
    public alertController: AlertController,
    private toastCtrl: ToastController,
    private varUser: VarUsuarioService,
    private tabsFunctions: TabsFunctionsService
  ) { }

  ngOnInit() {
    this.cart = this.cartService.getCart();
    // pega valor subtotal
    this.cartService.currentSubtotal.subscribe(subtotal => this.subtotal = subtotal);
    // this.estasLogado();
  }

  remove() {
    // mostrar no console log
    this.storage.remove("listaMercado").then(() => {
      console.log("listaMercado deletado");
    });
  }

  addLista() {
    // lista as listas que ja tem 
    this.storage.get("listaMercado").then((val) => {
      let listaAntiga = val
      console.log("listaantiga: ", listaAntiga);
      // console.log("listaantiga: ", this.varUser.getInfoMercadoSelecionado());
      // formata a nova lista 
      let formatar = {
        titulo: this.titulo,
        nomeMercado: this.varUser.getInfoMercadoSelecionado().nomeMercado,
        imgMercado: this.varUser.getInfoMercadoSelecionado().picture,
        totalCompra: this.subtotal,
        produtos: this.cart,
        data: new Date()
      }
      console.log("o que sera add: ", formatar);

      // une as a lista nova com as outras
      let enviar = null;
      if (listaAntiga != null) {
        console.log("o que chegou: ", formatar)
        console.log("valor: ", listaAntiga.length)

        enviar = listaAntiga;
        enviar[listaAntiga.length] = formatar

        console.log("ver: ", enviar)
      } else {
        enviar = [formatar];
        console.log("ver sem push: ", enviar)
      }

      // envia para o storage 
      this.storage.set("listaMercado", enviar).then(() => {
        console.log("listaMercado salvo")
        this.mensagemSucesso("Lista salva com sucesso !")
        this.tabsFunctions.getListaMercado();
      });
    }).catch((response) => {
      console.log("listaMercado erro: ", response);
    });
  }

  // cria a modal
  async showModalOne() {
    const modal = await this.modalCTRL.create({
      component: ModaloneComponent
    });
    modal.present();
    this.cart = this.cartService.getCart();
  }
  // fim da modal

  decreaseCartItem(product) {
    this.cartService.decreaseProduct(product);
  }
  increaseCartItem(product) {
    this.cartService.addProduct(product);
  }
  removeCartItem(product) {
    this.cartService.removeProduct(product);
  }
  // subtotal
  getTotal() {
    this.subtotal = this.cart.reduce((i, j) => i + j.preco * j.amount, 0);
    this.cartService.subtotalProduct(this.subtotal);
    return this.subtotal;
  }


  async mensagemListaCompra() {
    if (this.cart.length == 0) {
      this.mensagemErroUsuario("Carrinho não pode estar vazio!");
    } else {
      const alert = await this.alertController.create({
        cssClass: 'my-custom-class',
        // header: 'Alert',
        subHeader: 'Lista de compras',
        message: 'Adicionar produtos do carrinho a lista de compra ?',
        buttons: [
          {
            text: 'Cancelar',
            role: 'cancel',
            cssClass: 'secondary',
            handler: (blah) => {
              console.log('Confirm Cancel: blah');
            }
          }, {
            text: 'Sim',
            handler: () => {
              this.tituloLista();
              console.log('Confirm Okay');
            }
          }
        ]
      });
      await alert.present();
    }
  }

  async tituloLista() {
    const alert = await this.alertController.create({
      // cssClass: 'my-custom-class',
      header: 'De um nome a sua lista',
      // subHeader: 'De um nome a sua lista',
      // message: 'Adicionar produtos do carrinho a lista de compra ?',
      inputs: [
        {
          name: 'name1',
          type: 'text',
          placeholder: 'Nome da lista',
          value: this.titulo
        },
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Sim',
          handler: (alertData) => {
            this.titulo = alertData.name1
            console.log(alertData.name1);
            this.addLista();
          }
        }
      ]
    });
    await alert.present();
  }


  async mensagemSucesso(mensagem) {
    const alert = await this.alertController.create({
      header: 'Sucesso',
      // subHeader: 'Sucesso',
      message: `${mensagem}`,
      buttons: ['OK']
    });
    await alert.present();
  }

  async mensagemErroUsuario(mensagem) {
    const toast = await this.toastCtrl.create({
      color: "primary",
      message: `${mensagem}`,
      duration: 2500
    });
    toast.present();
  };

  // estasLogado() {
  //   this.storage.get("login").then((val) => {
  //     if (val != null) {
  //       // chama a tela de carregamento
  //       this.apimercado.sessaoCliente(val)
  //         .then((response) => {
  //           this.varSessao = response;
  //           // this.varUser.postInfoCliente(response);
  //           console.log("logou, estava salvo");
  //           // this.banco();
  //           // this.getMercadoFavorito();
  //           // fecha a tela de carregamento
  //         })
  //         .catch((response) => {
  //           this.varSessao = response;
  //           console.log("Nao ta logado: ", this.varSessao);

  //           // this.router.navigate(["/login"])
  //           // fecha a tela de carregamento
  //         });
  //     } else {
  //       console.log("storage nulo")
  //       this.router.navigate(["/login"])
  //     }
  //   }).catch((response) => {
  //     console.log("nao esta logado storage");
  //   });
  // }

}
