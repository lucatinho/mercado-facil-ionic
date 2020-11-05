import { Component, OnInit } from '@angular/core';
import { ApimercadoService } from 'src/app/shared/apimercado.service';
import * as bcrypt from 'bcryptjs';
import { Router } from '@angular/router';
import { ToastController, AlertController, LoadingController } from '@ionic/angular';
import { Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {
  // userRegister: any = {};
  userRegister: any = {};
  result: any;
  pass: any;
  valideitor: boolean;
  verificacaoNome: any;

  constructor(
    private apimercado: ApimercadoService,
    private router: Router,
    private toastCtrl: ToastController,
    private alertCtrl: AlertController,
    private formBuilder: FormBuilder,
    private loadingController: LoadingController
  ) { }
  ngOnInit() { }

  get nome() {
    return this.registrationForm.get("nome");
  }
  get email() {
    return this.registrationForm.get('email');
  }
  get celular() {
    return this.registrationForm.get('celular');
  }
  get cpf() {
    return this.registrationForm.get('cpf');
  }
  get senha() {
    return this.registrationForm.get('senha');
  }
  get senha2() {
    return this.registrationForm.get('senha2');
  }
  get cidade() {
    return this.registrationForm.get('endereco.cidade');
  }
  get bairro() {
    return this.registrationForm.get('endereco.bairro');
  }
  get rua() {
    return this.registrationForm.get('endereco.rua');
  }
  get numero() {
    return this.registrationForm.get('endereco.numero');
  }
  get cep() {
    return this.registrationForm.get('endereco.cep');
  }
  public errorMessages = {
    email: [
      { type: 'required', message: 'Email não pode ser vazio' },
      { type: 'pattern', message: 'Por favor coloque um email valido' }
    ],
    nome: [
      { type: 'required', message: 'Nome não pode ser vazio' },
      { type: 'minlength', message: 'Nome não pode ter menos de 3 caracteres' },
      { type: 'maxlength', message: 'Nome não pode ter mais de 100 caracteres' }
    ],
    senha: [
      { type: 'required', message: 'Senha não pode ser vazio' },
      { type: 'minlength', message: 'Senha não pode ter menos de 6 caracteres' },
      { type: 'maxlength', message: 'Senha não pode ter mais de 32 caracteres' }
    ],
    senha2: [
      { type: 'required', message: 'Senha não pode ser vazio' }
    ],
    cpf: [
      { type: 'required', message: 'CPF não pode ser vazio' },
      { type: 'minlength', message: 'CPF não pode ter menos de 9 caracteres' },
      { type: 'maxlength', message: 'CPF não pode ter mais de 100 caracteres' }
    ],
    celular: [
      { type: 'required', message: 'Celular não pode ser vazio' },
      { type: 'pattern', message: 'Por favor coloque um numero de celular valido' }
    ],
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
  registrationForm = this.formBuilder.group({
    email: [
      '',
      [
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$')
      ]
    ],
    nome: ['', [Validators.required, Validators.maxLength(100), Validators.minLength(3)]],
    senha: ['', [Validators.required, Validators.maxLength(32), Validators.minLength(6)]],
    senha2: ['', [Validators.required]],
    cpf: ['', [Validators.required, Validators.maxLength(14), Validators.minLength(11)]],
    celular: [
      '',
      [
        Validators.required,
        Validators.pattern('^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-s./0-9]*$')
      ]
    ],
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
  public submit() {
    this.valideitor = false;

    this.userRegister = this.registrationForm.value

    if (this.userRegister.senha != this.userRegister.senha2) {
      this.mensagemErro("Senhas diferentes");
      this.valideitor = true;
    };

    if (this.valideitor == false) {
      this.verificacaoNickName();
      console.log(this.userRegister);
    } else {
      console.log(this.userRegister);
      console.log("A operação nao pode continuar");
    }
  }

  Encrypt() {
    console.log("senha a:", this.userRegister.senha);
    this.pass = bcrypt.hashSync(this.userRegister.senha, 10);
    console.log("senha b:", this.pass);
  }

  verificacaoNickName() {
    this.telaCarregamento().then(() => {
    // chama a tela de carregamento
    this.apimercado.verificacaoCadastroCliente()
      .then((response) => {
        this.verificacaoNome = response;
        console.log("lista de nomesCliente: ", this.verificacaoNome);

        for (let index = 0; index < this.verificacaoNome.length; index++) {
          if (this.userRegister.email == this.verificacaoNome[index].email) {
            this.valideitor = true;
            console.log("view: 1-informado pelo cliente", this.userRegister.email, "== 2-sistema",
              this.verificacaoNome[index].email, "id: ", this.verificacaoNome[index].idCliente);
          }
        };
        this.loadingController.dismiss();
        if (this.valideitor == true) {
          this.mensagemErro("email ja existente");
        } else {
          // console.log("view: 1-informado pelo cliente", this.userRegister.nomeLogin, "== 2-sistema", this.verificacaoNome.nomeLogin)
          console.log("chamou o cadastrar");
          this.Cadastrar();
        }
        // fecha a tela de carregamento
      })
      .catch((response) => {
        this.verificacaoNome = response;
        this.loadingController.dismiss();
        console.log("deu ruim verificacaoNickName: ", this.verificacaoNome);
        this.mensagemErroSistema("Erro ao verificar nickName");
        // fecha a tela de carregamento
      });
    })
  }

  Cadastrar() {
    this.telaCarregamento().then(() => {
    this.Encrypt();
    let CadastroClient: any = {
      login: this.userRegister.email,
      senha: this.pass,
      cliente: {
        email: this.userRegister.email,
        nome: this.userRegister.nome,
        observacao: "1",
        permiteLogin: "1",
        cpf: this.userRegister.cpf,
        celular: this.userRegister.celular,
        endereco: [
          this.userRegister.endereco
        ]
      },
      roles: [
        {
          nomeRole: "ROLE_USUARIO"
        }
      ]
    }
    console.log("cadastroUser", CadastroClient);

   
    this.apimercado.cadastrarUsuario(CadastroClient).then((response: any) => {
      console.log("funcionou Usuario = ", response);
      this.result = response;
      this.loadingController.dismiss();
      this.router.navigate(["/login"])
    })
      .catch((response) => {
        console.log("deu erro usuario = ", response);
        this.loadingController.dismiss();
        this.result = response;
        this.mensagemErroSistema("Erro ao cadastrar usuario");
      });
    });
  }

  // CadastrarUsuario() {
  //   let cadastroUser: any = {
  //     login: this.userRegister.nomeLogin,
  //     nomeCompleto: this.userRegister.nome,
  //     senha: this.pass,
  //     cliente: {
  //       idCliente: this.result.idCliente
  //     },
  //     roles: [
  //       {
  //         nomeRole: "ROLE_USUARIO"
  //       }
  //     ]
  //   }

  //   console.log("testeCad User = ", cadastroUser);

  //   this.apimercado.cadastrarUsuario(cadastroUser).then((response: any) => {
  //     console.log("funcionou Usuario = ", response);
  //     this.result = response;
  //     this.router.navigate(["/login"])
  //     this.mensagemSucesso("Cadastro realizado com sucesso !")
  //   })
  //     .catch((response) => {
  //       console.log("deu erro usuario = ", response);
  //       this.result = response;
  //       this.mensagemErroSistema("Erro ao cadastrar usuario");
  //     });
  // }

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

  async mensagemSucesso(mensagem) {
    const alert = await this.alertCtrl.create({
      header: 'Alerta',
      subHeader: 'Sucesso',
      message: `${mensagem}`,
      buttons: ['OK']
    });
    await alert.present();
  }

  async telaCarregamento() {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Por favor aguarde...'
    });
    return loading.present();
  };

}
