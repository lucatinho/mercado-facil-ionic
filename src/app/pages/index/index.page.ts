import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { VarUsuarioService } from 'src/app/shared/var-usuario.service';
import { ApimercadoService } from 'src/app/shared/apimercado.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.page.html',
  styleUrls: ['./index.page.scss'],
})
export class IndexPage implements OnInit {

  login:any;

  constructor(
    private navCtrl: NavController, 
    private saveUser: VarUsuarioService, 
    private apimercado: ApimercadoService
    ) { }

  ngOnInit() {
    // this.sessao();
  }

  // sessao() {
  //   this.apimercado.sessaoCliente()
  //     .then((response) => {
  //       this.login = response;
  //       console.log("sessao: ", this.login);
  //       this.navCtrl.navigateRoot(["/tabs"]);
  //     })
  //     .catch((response) => {
  //       this.login = response;
  //       console.log("sessao index: ", this.login);
  //       this.navCtrl.navigateRoot(["/tabs"]);
  //     });
  // };
}
