import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { ApimercadoService } from 'src/app/shared/apimercado.service';
import { ListaMercadoService } from 'src/app/shared/lista-mercado.service';
import { CartService } from 'src/app/services/cart.service';
import { Router } from '@angular/router';
import { VarUsuarioService } from 'src/app/shared/var-usuario.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-product',
  templateUrl: './product.page.html',
  styleUrls: ['./product.page.scss'],
})
export class ProductPage implements OnInit {
  // variaveis banco
  server: any;
  marca: any;
  // variaveis de rota
  categoriaSelecionado: string;
  mercadoSelecionado: string;
  listaSelecionado: string;
  // visual front
  nomeMercado:string;
  nomeSubCategoria:string;

  varSessao:any;

  constructor(
    private toastCtrl: ToastController,
    private apimercado : ApimercadoService,
    private aptService: ListaMercadoService,
    private cartService: CartService,
    private router: Router,
    private varUser: VarUsuarioService,
    private storage: Storage
  ) { }

  ngOnInit() {
    // pega valor do mercado/categoria/lista do apimercado
    this.apimercado.currentMercadoSelecionado.subscribe(mercado => this.mercadoSelecionado = mercado);
    this.apimercado.currentCategoriaSelecionado.subscribe(categoria => this.categoriaSelecionado = categoria);
    this.apimercado.currentListaSelecionado.subscribe(lista => this.listaSelecionado = lista);
    // puxa metodo banco
    this.getNomeMercadoSubCategoria();
    this.banco();
    this.estasLogado();
  }

  // puxar nome mercado e subCategoria
  getNomeMercadoSubCategoria(){
    this.nomeMercado = this.varUser.getMercadoSelecionado();
    this.nomeSubCategoria = this.varUser.getSubCategoriaSelecionado();
  }

  // estasLogado() {
  //   // chama a tela de carregamento
  //   this.apimercado.sessaoCliente()
  //     .then((response) => {
  //       this.varSessao = response;
  //       this.varUser.postIdCliente(this.varSessao.idCliente);
  //       console.log("Verificaçao de login: ", this.varSessao);
  //       // fecha a tela de carregamento
  //     })
  //     .catch((response) => {
  //       this.varSessao = response;
  //       console.log("Nao ta logado: ", this.varSessao);
  //       this.router.navigate(["/login"])
  //       // fecha a tela de carregamento
  //     });
  // }

  estasLogado() {
    this.storage.get("login").then((val) => {
      if (val != null) {
        // chama a tela de carregamento
      this.apimercado.sessaoCliente(val)
      .then((response) => {
        this.varSessao = response;
        // this.varUser.postInfoCliente(response);
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
      }else{
        console.log("storage nulo")
        this.router.navigate(["/login"])
      }  
    }).catch((response) => {
      console.log("nao esta logado storage");
    });
  }

  banco() {
    // chama a tela de carregamento
    this.apimercado.listarProdutos()
      .then((response) => {
        this.marca = response;
        console.log(this.marca)
        // fecha a tela de carregamento
      })
      .catch((response) => {
        this.marca = response;
        // fecha a tela de carregamento
      });
  }

  // manda produto para o carrinho e faz mensagem 
  async addToCart(product) {
    this.cartService.addProduct(product);
    // mensagem de add carinho
    const toast = await this.toastCtrl.create({
      color: "icon",
      message: `Adicionado ao carrinho: ${product.marca.nomeMarca}`,
      duration: 900
    });
    toast.present();
  };

  
  
  // metodo banco
  // banco() {
    // puxa banco
    // this.aptService.getMercadoLista().valueChanges().subscribe(res => {
    //   this.server = res;
      // ve qual é a lista de produto
  //     this.produto = this.server[this.mercadoSelecionado].children[this.categoriaSelecionado].children[this.listaSelecionado].children;
  //     console.log("Valor do mercado:", this.mercadoSelecionado);
  //     console.log("CategoriaB: ", this.categoriaSelecionado);
  //   });
  // }
}
