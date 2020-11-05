import { Component, OnInit } from '@angular/core';
import { ModalController, AlertController, ToastController, LoadingController } from '@ionic/angular';
import { CartService } from 'src/app/services/cart.service';
import { ApimercadoService } from 'src/app/shared/apimercado.service';
import { Router } from '@angular/router';
import { VarUsuarioService } from 'src/app/shared/var-usuario.service';
import {formatDate} from '@angular/common';
import { Storage } from '@ionic/storage';
import { TabsFunctionsService } from 'src/app/tabs/tabs-functions.service';

@Component({
  selector: 'app-modalone',
  templateUrl: './modalone.component.html',
  styleUrls: ['./modalone.component.scss'],
})
export class ModaloneComponent implements OnInit {
  cart: any = [];
  produtoFormatando:any = []
  produtoFormatado:any = {}
  subtotal: any;
  result: any;
  validaitor:boolean;
  myDate:any;
  frete:any = 0;
  freteview:any=0;

  formaPagamenento:string;
  formaEnvio:string;

  enderecosCliente:number;
  enderecoEntrega:number=0;
  enderecoValidacao:boolean;

  constructor(
    private modalCTRL: ModalController,
    private alertCtrl: AlertController,
    private cartService: CartService,
    private apimercado: ApimercadoService,
    private router: Router,
    private saveUser: VarUsuarioService,
    private toastCtrl: ToastController,
    private storage: Storage,
    private loadingController: LoadingController,
    private tabsFunctions: TabsFunctionsService
  ) { }

  ngOnInit() {
    this.cart = this.cartService.getCart();
    // puxar subtotal
    this.cartService.currentSubtotal.subscribe(subtotal => this.subtotal = subtotal);
    // this.enviarPedido();
   this.freteview = this.saveUser.getFreteMercado();
   this.enderecosCliente = this.saveUser.getInfoCliente().endereco
   console.log(this.enderecosCliente);
  }

  // getEnderecoEntrega(value){
  //   this.enderecoEntrega = value
  //   console.log("entrega: ", value)
  // }

  getData(){
    // this.myDate = new Date();
    // this.myDate = formatDate(new Date(), 'yyyy-MM-ddThh:mm', 'en');
    this.myDate = new Date();
  }

  checkout() {
    this.validaitor=false;
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


  enviarPedido(){
    console.log("carrinho: ", this.cart);
    this.formatarProdutos();
    let modalPedido: any = {
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
      pedidoProdutos: 
        this.produtoFormatado 
    };

    console.log("enviar: ", modalPedido);

// chama o storage para pegar dados  
this.telaCarregamento().then(() => {
    this.storage.get("login").then((val) => {

    this.apimercado.enviarPedido(modalPedido, val).then((response: any) => {
      console.log("funcionou pedido = ", response);
      this.result = response;
      this.tabsFunctions.bancoReloadTab2();
      this.mensagemSucessoPedido();
      this.loadingController.dismiss();
      this.router.navigate(["/tabs/tab2"]);
      this.close();
    })
      .catch((response) => {
        console.log("deu erro pedido = ", response);
        this.loadingController.dismiss();
        this.result = response;
        this.mensagemErroSistema("Algo esta errado com o pedido");
      });
    }).catch((response) => {
      console.log("nao esta logado storage");
      this.loadingController.dismiss();
    });
  });
  }

  formatarProdutos(){
    for (let index = 0; index < this.cart.length; index++) {
      this.produtoFormatando[index] = {
        produto: this.cart[index].idProduto,
        nomeProduto: this.cart[index].nomeProduto,
        marcaProduto: this.cart[index].marca.nomeMarca,
        valorUni:  this.cart[index].preco,
        qtdProduto: this.cart[index].amount
      }
      console.log("formantando:", this.produtoFormatado);
    }
    this.produtoFormatado = this.produtoFormatando
    console.log("formatado:", this.produtoFormatado);
  }


  // subtotal
  getSubTotal() {
    this.cartService.subtotalProduct(this.subtotal);
    return this.subtotal;
  }

  freteMercado(){
    this.frete = this.saveUser.getFreteMercado();
  }
  total(total) {
    this.frete = 0;
    if(this.formaEnvio == "Entrega"){
      total = this.subtotal + this.saveUser.getFreteMercado();
      this.freteMercado();
    }else{
      total = this.subtotal
    }
    return total;
  }

  // botao de fechar a modal
  close() {
    this.modalCTRL.dismiss();
  }

  postFormaPagamento(formaPagamento:any){
    this.formaPagamenento = formaPagamento;
    console.log("Pagamento: ",this.formaPagamenento);
  }
  postFormaEnvio(formaEnvio:any){
    this.formaEnvio = formaEnvio;
    console.log("envio: ",this.formaEnvio);
    this.total(0);
    // faz aparecer o selecionador de endereco
    if(formaEnvio == "Entrega"){
      this.enderecoValidacao = true
    }else{
      this.enderecoValidacao = false
      this.enderecoEntrega = 0;
    }
  }
  postEnderecoEntrega(id){
    this.enderecoEntrega = id;
    console.log("id: ", id);
  }

  async mensagemSucessoPedido() {
    const alert = await this.alertCtrl.create({
      header: 'Operação realizada com sucesso!',
      message: `Obrigado por comprar com a gente, volte sempre ;)`,
      buttons: ['OK']
    });
    await alert.present();
  };

  async mensagemErroUsuario(mensagem) {
    const toast = await this.toastCtrl.create({
      color: "primary",
      message: `${mensagem}`,
      duration: 2500
    });
    toast.present();
  };

  async mensagemErroSistema(mensagem) {
    const alert = await this.alertCtrl.create({
      header: 'Alerta',
      subHeader: 'Erro interno do sistema',
      message: `${mensagem}, por favor contate um desenvolvedor!`,
      buttons: ['OK']
    });
    await alert.present();
  };

  async mensagemErroLogin(mensagem) {
    const alert = await this.alertCtrl.create({
      header: 'Alerta',
      message: `${mensagem}`,
      buttons: ['OK']
    });
    await alert.present();
  };

  async telaCarregamento() {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Por favor aguarde...'
    });
    return loading.present();
  };
}
