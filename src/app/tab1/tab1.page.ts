import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { ApimercadoService } from '../shared/apimercado.service';
import { Storage } from '@ionic/storage';
import { LoadingController, AlertController, NavController, ToastController } from '@ionic/angular';
import { VarUsuarioService } from '../shared/var-usuario.service';
import { Router } from '@angular/router';
import { TabsFunctionsService } from '../tabs/tabs-functions.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page implements OnInit {
  // variavel do banco
  Mercados: any;
  varSessao: any;
  mercadoFavorito: any = {}
    // {
    //   picture: "http://placehold.it/64x64",
    //   nomeMercado: "",
    //   observacao: "Selecione um mercado favorito",
    //   horario: "",
    //   situacao: 0
    // };
  // variaveis de rota
  mercado: string;
  result: any;
  viewFavorito: boolean = false;

  constructor(
    private apimercado: ApimercadoService,
    private cartService: CartService,
    private storage: Storage,
    private loadingController: LoadingController,
    private alertCtrl: AlertController,
    private varUser: VarUsuarioService,
    private router: Router,
    private navCtrl: NavController,
    private toastCtrl: ToastController,
    private tabsFunctions: TabsFunctionsService
  ) { }

  ngOnInit() {
    // puxa metodo banco
    this.banco();
    // pega valor mercado
    this.apimercado.currentMercadoSelecionado.subscribe(mercado => this.mercado = mercado);
  }

  favoritoNavigate() {
    if (this.mercadoFavorito.situacao != 0) {
      this.navCtrl.navigateRoot(["/lista"]);
    }
  }
  // 
  async getFavorito() {
    this.storage.get("favorito").then((val) => {
      console.log("favorito get: ", val);
      if (val != null) {
        this.viewFavorito = true;
        // pega os dados atuais do mercado a partir do id
        for (let index = 0; index < this.Mercados.length; index++) {
          if (this.Mercados[index].idMercado == val) {
            this.mercadoFavorito = this.Mercados[index];
            console.log("caiu: ", this.mercadoFavorito)
          }
        }
      }
    })
    .catch((response) => {
      console.log("nao tem favorito no storage: ", response);

      // this.mercadoFavorito = {
      //   picture: "http://placehold.it/64x64",
      //   nomeMercado: "Selecione um mercado favorito",
      //   observacao: "",
      //   horario: ""
      // };
    });
  }

  async postFavorito(favorito) {
    // console.log("favorito: ", favorito);
    this.storage.set("favorito", favorito).then(() => {
      console.log("favorito salvo")
      this.getFavorito();
      this.router.navigate(["/tabs/tab1"])
    });
  }

  // async deleteFavorito() {
  //   // mostrar no console log
  //   this.storage.set("favorito",
  //     {
  //       picture: "http://placehold.it/64x64",
  //       nomeMercado: "",
  //       observacao: "Selecione um mercado favorito",
  //       horario: "",
  //       situacao: 0
  //     }
  //   ).then(() => {
  //     console.log("favorito deletado");
  //     this.getFavorito();
  //     this.router.navigate(["/tabs/tab1"])
  //   });
  // }

  async deleteFavorito() {
    this.storage.remove("favorito").then(() => {
      console.log("favorito deletado");
      this.getFavorito();
      this.router.navigate(["/tabs/tab1"])
    });
  }
  // fim

  banco() {
    // this.telaCarregamento();
    this.telaCarregamento().then(() => {
      this.apimercado.listarMercados()
        .then((response) => {
          this.Mercados = response;
          this.Mercados.sort((a, b) => a.nomeMercado.localeCompare(b.nomeMercado));
          this.loadingController.dismiss();
          this.getFavorito();
          // if (this.varUser.getLogin().login != null) {
          this.tabsFunctions.sessaoCliente();
          //   console.log("chamou")
          // }
        })
        .catch((response) => {
          this.Mercados = response;
          this.loadingController.dismiss();
          this.mensagemErroSistema("Verifique sua coneção com a internet e tente novamente !");
        });
    });
  }

  // Envia valor mercado
  onMercadoPress(mercadoSelecionado: string) {
    // zerar carrinho
    this.cartService.zerarCarrinho();
    this.apimercado.changeMercadoSelecionado(mercadoSelecionado);
  }
  postNomeMercado(nomeMercado: string) {
    this.varUser.postMercadoSelecionado(nomeMercado);
  }
  postInfoMercado(infoMercado){
    this.varUser.postInfoMercadoSelecionado(infoMercado)
  }
  postFreteMercado(freteMercado: any) {
    this.varUser.postFreteMercado(freteMercado);
  }
  postSubCategoriasMercado(subCategorias: any) {
    this.varUser.postSubCategorias(subCategorias)
  }
  async telaCarregamento() {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Por favor aguarde...'
    });
    return loading.present();
  };

  async mensagemErroSistema(mensagem) {
    const alert = await this.alertCtrl.create({
      header: 'Alerta',
      subHeader: 'Erro interno do sistema',
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

}
