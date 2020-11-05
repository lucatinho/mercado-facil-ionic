import { Component, OnInit } from '@angular/core';
import { ApimercadoService } from 'src/app/shared/apimercado.service';
import { Router } from '@angular/router';
import { VarUsuarioService } from 'src/app/shared/var-usuario.service';
import { ToastController, AlertController, NavController, LoadingController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { TabsFunctionsService } from 'src/app/tabs/tabs-functions.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  username: string;
  password: string;
  login: any;
  message: any

  constructor(
    private service: ApimercadoService,
    private router:Router, 
    private saveUser: VarUsuarioService,
    private toastCtrl: ToastController,
    private alertCtrl: AlertController,
    private navCtrl: NavController,
    private storage: Storage,
    private tabsFunctions: TabsFunctionsService,
    private loadingController: LoadingController
    ) { }

  ngOnInit() { }

  doLogin() {
    console.log("login: ", this.username, this.password);
    let resp = this.service.login(this.username, this.password);
    this.saveUser.postLogin(this.username,this.password);
    resp.subscribe(data => {
      this.message = data;
      // console.log("mensagem: ", this.message);
    });
    this.sessao();
  }

  sessao() {
    // this.saveUser.postLogin(this.username,this.password);
    this.telaCarregamento().then(() => {
    let val = {
      username: this.username,
      password: this.password
    }
    this.service.sessaoCliente(val)
      .then((response) => {
        this.login = response;
        console.log("sessao: ", this.login);
        this.saveUser.postInfoCliente(this.login);

        this.tabsFunctions.sessaoCliente();
        this.loadingController.dismiss();
        this.navCtrl.navigateRoot(["/tabs/tab1"]);
        
      })
      .catch((response) => {
        this.login = response;
        this.loadingController.dismiss();
        this.mensagemErroUsuario("Usuario ou senha incorretos");
      });
    });
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

  async telaCarregamento() {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Por favor aguarde...'
    });
    return loading.present();
  };

}