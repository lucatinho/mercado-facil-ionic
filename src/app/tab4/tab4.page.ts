import { Component, OnInit } from '@angular/core';
import { ApimercadoService } from '../shared/apimercado.service';
import { Router, NavigationEnd } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { EditEnderecoComponent } from '../components/userEdit/edit-endereco/edit-endereco.component';
import { VarUsuarioService } from '../shared/var-usuario.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss']
})
export class Tab4Page implements OnInit {

  varsessao: any = "Valor ilusorio";
  varLogaut: any;
  nome: any;
  endereco: any = {};

  constructor(
    private apimercado: ApimercadoService,
    private router: Router,
    private modalCTRL: ModalController,
    private varuser: VarUsuarioService,
    private storage: Storage
  ) { }

  ngOnInit() {
    // puxa metodo banco
    this.sessaoCliente();
  }

  enderecoPrincipal() {
    // this.varuser.getInfoCliente().endereco
    for (let index = 0; index < this.varsessao.endereco.length; index++) {
      if (this.varsessao.endereco[index].principal == true) {
        this.endereco = this.varsessao.endereco[index]
        console.log("ta: ", this.endereco)
      }
    }
  }

  sessaoCliente() {
    this.storage.get("login").then((val) => {
      if (val != null) {
         // chama a tela de carregamento
      this.apimercado.sessaoCliente(val)
      .then((response) => {
        this.varsessao = response;
        this.varuser.postInfoCliente(response);
        console.log("Sessao: ", this.varsessao);
        // fecha a tela de carregamento
        this.enderecoPrincipal();
        // this.nome = this.varSessao.nomeLogin;
      })
      .catch((response) => {
        this.varsessao = response;
        console.log("Deu errrado a sessao: ", this.varsessao);
        // fecha a tela de carregamento
      });
      }else{
        console.log("nao ta logado")
        this.router.navigate(["/login"])
      }
     
    }).catch((response) => {
      console.log("nao esta logado storage: ", response);
    });
  }
    // cria a modal
    //  async editarEndereco() {
    //   const modal = await this.modalCTRL.create({
    //     component: EditEnderecoComponent
    //   });
    //   modal.present();
    // }
    // fim da modal

    sairConta(){
      // chama a tela de carregamento
      this.apimercado.logout()
        .then((response) => {
          this.varLogaut = response;
          console.log("sucesso: ", this.varLogaut);
          this.router.navigate(["/login"])
          // fecha a tela de carregamento
        })
        .catch((response) => {
          this.varLogaut = response;
          if (this.varLogaut.status == 200) {
            this.varuser.deleteLogin();
            console.log("Deu certo sair da conta: ", this.varLogaut);
            this.router.navigate(["/login"]);
          }
          // fecha a tela de carregamento
        });
    }
  }
