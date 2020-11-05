import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';


@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
   // variaveis banco
   server: any;
   subitem: any;
   subsubitem: any;
   // variavel menu
   openMenu: boolean = false;
   // variaveis de rota
   categoriaSelecionado: string;
   mercadoSelecionado: string;
   listaSelecionado: string;
 
 
   constructor(public menuCtrl: MenuController) { }
 
   ngOnInit() {
     // pega valor do mercado e da categoria do data
    //  this.data.currentMercadoSelecionado.subscribe(mercado => this.mercadoSelecionado = mercado);
    //  this.data.currentCategoriaSelecionado.subscribe(categoria => this.categoriaSelecionado = categoria);
     // puxa metodo banco
     this.banco();
   }
 
   // metodo banco
   banco() {
     fetch('./assets/server/mercadosprod.json').then(res => res.json()).then(json => {
       console.log('server::', json);
       this.server = json;
       this.subitem = this.server[this.mercadoSelecionado].children;
       this.subsubitem = this.server[this.mercadoSelecionado].children[this.categoriaSelecionado].children;
     });
     console.log("Valor do mercado:", this.mercadoSelecionado);
   }
 
   // faz menu abrir uma vez
   ionViewWillEnter() {
     if (this.openMenu == false) {
       this.menuCtrl.open();
       this.openMenu = true;
     }
   }
 
   
 }