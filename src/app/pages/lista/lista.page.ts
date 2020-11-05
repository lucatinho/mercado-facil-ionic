import { Component, OnInit, } from '@angular/core';
import { MenuController, AlertController, ToastController, NavController } from '@ionic/angular';
import { ListaMercadoService } from 'src/app/shared/lista-mercado.service';
import { ApimercadoService } from 'src/app/shared/apimercado.service';
import { Router } from '@angular/router';
import { VarUsuarioService } from 'src/app/shared/var-usuario.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.page.html',
  styleUrls: ['./lista.page.scss'],
})

export class ListaPage implements OnInit {

  // variaveis banco
  categorias: any = [];
  categoriasOrdenada: any;
  listaSubProduto: any;
  // variavel menu
  openMenu: boolean = false;
  // variaveis de rota
  categoriaSelecionado: any = [];
  mercadoSelecionado: string;
  // visual front
  nomeMercado: string;
  nomeCategoria: string;
  selecionouCategoria: any = 1;



  orderSubCategoria: any;
  cont = 0;
  constructor(
    public menuCtrl: MenuController,
    private apimercado: ApimercadoService,
    private alertCtrl: AlertController,
    private router: Router,
    private toastCtrl: ToastController,
    private varUser: VarUsuarioService,
    private navCtrl: NavController,
    private cartService: CartService
  ) { }

  ngOnInit() {
    // pega valor do mercado e da categoria do apimercado
    this.apimercado.currentMercadoSelecionado.subscribe(mercado => this.mercadoSelecionado = mercado);
    // this.apimercado.currentCategoriaSelecionado.subscribe(categoria => this.categoriaSelecionado = categoria);
    // puxa metodo banco
    this.getNomeMercado();
    // this.banco();
    this.bancoCategoria();
    this.getSubCategorias();
  }

  async back(){
    if (this.cartService.getCart().length == 0) {
      this.navCtrl.navigateBack(["/tabs/tab1"]);
    }else{
    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      // header: 'Alert',
      // subHeader: 'Remover lista',
      message: 'Se voltar para o início o carrinho de compras atual será esvaziado!',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Voltar',
          handler: () => {
            console.log('Confirm Okay');
            // this.router.navigate(["/tabs/tab1"])
            this.navCtrl.navigateBack(["/tabs/tab1"]);
          }
        }
      ]
    });
    await alert.present();
  }
  }
  async informarCliente() {
    if (this.cont == 0) {
      const toast = await this.toastCtrl.create({
        // header: 'Toast header',
        message: 'Clique nesse icone para finalizar a compra',
        position: 'bottom',
        color: 'light',
        duration: 5000,
        buttons: [
          {
            side: 'end',
            // text: 'Favorite',
            icon: 'cart',

          }
        ]
      });
      toast.present();
    }
    this.cont++;
  }
  // qual mercado foi selecionado 
  getNomeMercado() {
    this.nomeMercado = this.varUser.getMercadoSelecionado();
  }

  // qual categoria foi selecionado 
  onCategoriaPress(categoriaSelecionado: string) {
    this.selecionouCategoria = 0;
    if (categoriaSelecionado.length == 0) {
      this.mensagemErroUsuario(" Mercado sem esse tipo de produto, selecione outra categoria.");
    }
    this.categoriaSelecionado = categoriaSelecionado;
    this.categoriaSelecionado.sort((a, b) => a.nomeSubCategoria.localeCompare(b.nomeSubCategoria));
    this.varUser.postSubCategoriaSelecionado(categoriaSelecionado);
    // puxa banco sempre que acionar metodo 
    // this.banco();
  }

  // nome da categoria selecionada
  nomeCategoriaSelecionada(nomeCategoria: string) {
    this.nomeCategoria = nomeCategoria;
  }

  postNomeSubCategoriaSelecionado(subCategoriaSelecionado) {
    this.varUser.postSubCategoriaSelecionado(subCategoriaSelecionado);
  }

  getSubCategorias() {
    this.listaSubProduto = this.varUser.getSubCategoriaSelecionado();
  }

  // qual lista foi selecionada
  onListaPress(listaSelecionado) {
    this.apimercado.changeListaSelecionado(listaSelecionado);
  }

  ordenacaoCategorias() {
    this.orderSubCategoria = this.categorias;
    console.log("banco order subcategoria:", this.orderSubCategoria);
  }

  bancoCategoria() {
    // chama a tela de carregamento
    this.apimercado.listarCategorias()
      .then((response) => {
        this.categorias = response;
        this.categorias.sort((a, b) => a.nomeCategoria.localeCompare(b.nomeCategoria));
        console.log("banco categoria:", this.categorias);
        // fecha a tela de carregamento
      })
      .catch((response) => {
        this.categorias = response;
        // fecha a tela de carregamento
      });
  }


  // faz menu abrir uma vez
  ionViewWillEnter() {
    if (this.openMenu == false) {
      this.menuCtrl.open();
      this.openMenu = true;
    }
  }

  async mensagemErroSistema(mensagem) {
    const alert = await this.alertCtrl.create({
      header: 'Alerta',
      subHeader: 'Erro interno do sistema',
      message: `${mensagem}, por favor contate um desenvolvedor!`,
      buttons: ['OK']
    });
    await alert.present();
  }

  async mensagemErroUsuario(mensagem) {
    // mensagem de add carinho
    const toast = await this.toastCtrl.create({
      color: "primary",
      message: `${mensagem}`,
      duration: 3000
    });
    toast.present();
  };

  async mensagemInfo(mensagem) {
    // mensagem de add carinho
    const toast = await this.toastCtrl.create({
      color: "light",
      message: `${mensagem}`,
      duration: 4000
    });
    toast.present();
  };
}