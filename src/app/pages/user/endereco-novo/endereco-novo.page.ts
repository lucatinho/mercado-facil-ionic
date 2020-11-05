import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { ApimercadoService } from 'src/app/shared/apimercado.service';
import { LoadingController, ToastController, AlertController } from '@ionic/angular';
import { Router, NavigationEnd } from '@angular/router';
import { Storage } from '@ionic/storage';
import { UservariableService } from '../uservariable.service';

@Component({
  selector: 'app-endereco-novo',
  templateUrl: './endereco-novo.page.html',
  styleUrls: ['./endereco-novo.page.scss'],
})
export class EnderecoNovoPage implements OnInit {
  result:any;
  varsessao:any;

  mySubscription: any;

  constructor(
    private formBuilder: FormBuilder,
    private apimercado: ApimercadoService,
    private loadingController: LoadingController,
    private toastCtrl: ToastController,
    private alertCtrl: AlertController,
    private router: Router,
    private storage: Storage,
    private uservariable: UservariableService
    ) { }

  ngOnInit() {
    this.sessaoCliente();
    // this.lastUrlFalse();
  }

  get cidade() {
    return this.enderecoForm.get('endereco.cidade');
  }
  get bairro() {
    return this.enderecoForm.get('endereco.bairro');
  }
  get rua() {
    return this.enderecoForm.get('endereco.rua');
  }
  get numero() {
    return this.enderecoForm.get('endereco.numero');
  }
  get cep() {
    return this.enderecoForm.get('endereco.cep');
  }
  public errorMessages = {
    rua: [
      { type: 'required', message: 'Rua não pode ser vazio' },
      { type: 'maxlength', message: 'Rua não pode ter mais de 100 caracteres' }
    ],
    cidade: [
      { type: 'required', message: 'Cidade não pode ser vazio' },
      {
        type: 'pattern',
        message: 'Por favor insira uma cidade valida'
      }
    ],
    bairro: [
      { type: 'required', message: 'Bairro não pode ser vazio' },
      {
        type: 'pattern',
        message: 'Por favor insira um bairro valido'
      }
    ],
    numero: [
      { type: 'required', message: 'Numero não pode ser vazio' },
      {
        type: 'pattern',
        message: 'Por favor insira um numero valido'
      }
    ],
    cep: [
      { type: 'required', message: 'CEP não pode ser vazio' },
      {
        type: 'pattern',
        message: 'Por favor coloque um CEP valido'
      }
    ]
  };

  enderecoForm = this.formBuilder.group({
    endereco: this.formBuilder.group({
      rua: ['', [Validators.required, Validators.maxLength(100)]],
      cidade: ['', [Validators.required,
      Validators.pattern('^[a-zA-Z]{2,20}')]],
      bairro: ['', [Validators.required, Validators.maxLength(100)]],
      numero: ['', [Validators.required, Validators.pattern('^[0-9]{1,6}')]],
      cep: [
        '',
        [Validators.required, Validators.pattern('^[0-9]{5}(?:-[0-9]{3})?$')]
      ]
    })
  });


//   submit() {
// this.varsessao.endereco.push(this.enderecoForm);


//   }

  public submit() {

    this.varsessao.endereco.push(this.enderecoForm.value.endereco);

    console.log("endereço novo: ", this.varsessao);

    this.telaCarregamento().then(() => {
    this.apimercado.postCliente(this.varsessao).then((response: any) => {
      this.loadingController.dismiss();
      console.log("funcionou Usuario = ", response);
      this.result = response;
      this.uservariable.sessaoCliente();
      this.router.navigate(["/endereco-edit"])
      this.mensagemErro("Endereço adicionado !");

    })
      .catch((response) => {
        console.log("deu erro usuario = ", response);
        this.result = response;
        this.loadingController.dismiss();
        this.mensagemErroSistema("Erro ao adicionar endereço");
      });
    });
  };
  

  sessaoCliente() {
    this.storage.get("login").then((val) => {
    // chama a tela de carregamento
    this.apimercado.sessaoCliente(val)
      .then((response) => {
        this.varsessao = response;
        console.log("Sessao: ", this.varsessao);
        // fecha a tela de carregamento
        console.log("nomeLoginSessao", this.varsessao);
        // this.nome = this.varSessao.nomeLogin;
      })
      .catch((response) => {
        this.varsessao = response;
        console.log("Deu errrado a sessao: ", this.varsessao);
        // fecha a tela de carregamento
      });
    }).catch((response) => {
      console.log("nao esta logado storage: ", response);
    });
  }

  async telaCarregamento() {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Por favor aguarde...'
    });
    return loading.present();
  };

  async mensagemErro(mensagem) {
    // mensagem de add carinho
    const toast = await this.toastCtrl.create({
      color: "primary",
      message: `${mensagem}`,
      duration: 3000
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
