import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { VarUsuarioService } from '../shared/var-usuario.service';
import { Router } from '@angular/router';
import { TabsFunctionsService } from '../tabs/tabs-functions.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

  listaProduto: any = [];
  valideitor: boolean;

  constructor(
    private storage: Storage,
    private varUser: VarUsuarioService,
    private router: Router,
    private tabsFunctions: TabsFunctionsService,
    public alertController: AlertController
  ) { }

  ngOnInit() {
    this.getListaMercado();
    // this.remove();
  }

  getListaMercado() {
    this.tabsFunctions.getListaMercado();

    this.tabsFunctions.serviceListaCompra
      .subscribe(data => (this.listaProduto = data));
    console.log("ver: ", this.listaProduto)

    this.tabsFunctions.serviceListaCompraValideitor
      .subscribe(data => (this.valideitor = data));
  }

  async removeItemLista(item) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      // header: 'Alert',
      // subHeader: 'Remover lista',
      message: 'Deseja remover a lista de compra ' + item.titulo + ' ?',
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
            console.log('Confirm Okay');
            console.log("veio: ", item);
            var index = this.listaProduto.indexOf(item);
            this.listaProduto.splice(index, 1)
            console.log("como ficou: ", this.listaProduto);
            // envia para o storage 
            this.storage.set("listaMercado", this.listaProduto).then(() => {
              console.log("listaMercado salvo")
            });
          }
        }
      ]
    });
    await alert.present();
  }

  DeleteLista() {
    this.storage.remove("listaMercado").then(() => {
      console.log("listaMercado deletado");
    });
  }

  postListaSelecionada(infoCliente) {
    this.varUser.postListaCompraSelecionada(infoCliente);
    this.router.navigate(["/lista-compras"]);
  }

}
