import { Component, OnInit } from '@angular/core';
import { EditEnderecoComponent } from 'src/app/components/userEdit/edit-endereco/edit-endereco.component';
import { ModalController, LoadingController, ToastController, AlertController } from '@ionic/angular';
import { ApimercadoService } from 'src/app/shared/apimercado.service';
import { VarUsuarioService } from 'src/app/shared/var-usuario.service';
import { Storage } from '@ionic/storage';
import { Router, NavigationEnd } from '@angular/router';
import { UservariableService } from '../uservariable.service';

@Component({
  selector: 'app-endereco-edit',
  templateUrl: './endereco-edit.page.html',
  styleUrls: ['./endereco-edit.page.scss'],
})
export class EnderecoEditPage implements OnInit {
  varsessao: any = {};
  isCheck: number = 0;
  result: any;
  validaitor: boolean = false;

  constructor(
    private apimercado: ApimercadoService,
    private modalCTRL: ModalController,
    private loadingController: LoadingController,
    private toastCtrl: ToastController,
    private alertCtrl: AlertController,
    private varuser: VarUsuarioService,
    private storage: Storage,
    private router: Router,
    private uservariable: UservariableService
  ) { }

  ngOnInit() {
    this.sessaoCliente();
  }

  check(id) {
    for (let index = 0; index < this.varsessao.endereco.length; index++) {
      if (this.varsessao.endereco[index].principal == true) {
        this.varsessao.endereco[index].principal = false;
      }
      if (this.varsessao.endereco[index].idEndereco == id) {
        this.varsessao.endereco[index].principal = true;
        this.putEndereco();
      }
    }
  }

  checkbox() {
    // this.uservariable.checkbox();
    // for (let index = 0; index < this.varsessao.endereco.length; index++) {
    //   if (this.varsessao.endereco[index].principal == true) {
    //     this.isCheck = this.varsessao.endereco[index].idEndereco
    //     console.log("entrou", this.varsessao)
    //   }
    // }
  }

  putEndereco() {
    console.log("enviar: ", this.varsessao.endereco);

    this.telaCarregamento().then(() => {

      this.apimercado.postCliente(this.varsessao).then((response: any) => {
        this.loadingController.dismiss();
        console.log("funcionou Usuario = ", response);
        this.result = response;
        // window.location.reload();
        this.mensagemErro("Endereço principal alterado !");
      })
        .catch((response) => {
          console.log("deu erro usuario = ", response);
          this.result = response;
          this.loadingController.dismiss();
          this.mensagemErro("Erro ao trocar endereço");
        });
    });
  }

  sessaoCliente() {
    this.uservariable.sessaoCliente();

    this.uservariable.serviceData
      .subscribe(data => (this.varsessao = data));

      this.uservariable.serviceCheck
      .subscribe(data => (this.isCheck = data));

    //  this.checkbox();
    // this.storage.get("login").then((val) => {
    //   // chama a tela de carregamento
    //   if (val != null) {
    //     this.apimercado.sessaoCliente(val)
    //       .then((response) => {
    //         this.varsessao = response;
    //         this.varuser.postInfoCliente(response);
    //         console.log("Sessao: ", this.varsessao);
            // this.checkbox();
    //         // fecha a tela de carregamento
    //         console.log("nomeLoginSessao", this.varsessao);
    //         this.validaitor = true;
    //         // this.nome = this.varSessao.nomeLogin;
    //       })
    //       .catch((response) => {
    //         this.varsessao = response;
    //         console.log("Deu errrado a sessao: ", this.varsessao);
    //         // fecha a tela de carregamento
    //       });
    //   } else {
    //     this.router.navigate(["/login"])
    //   }
    // }).catch((response) => {
    //   console.log("nao esta logado storage: ", response);
    // });
  }

  async telaCarregamento() {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Por favor aguarde...'
    });
    return loading.present();
  };

  enderecoNovo() {
    this.uservariable.enderecoNovo();
  }
  async mensagemErro(mensagem) {
    // mensagem de add carinho
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
  }

}
