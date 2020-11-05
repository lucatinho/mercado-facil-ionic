import { Component } from '@angular/core';
import { ApimercadoService } from '../shared/apimercado.service';
import { Router } from '@angular/router';
import { TabsFunctionsService } from './tabs-functions.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  varSessao: any;

  constructor(
    private apimercado: ApimercadoService, 
    private router: Router,
    private tabsFunctions: TabsFunctionsService
    ) { }

  tab2(){
    this.tabsFunctions.bancoReloadTab2();
    console.log("ta");
  }
  // estasLogado() {
  //   // chama a tela de carregamento
  //   this.apimercado.sessaoCliente()
  //     .then((response) => {
  //       this.varSessao = response;
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
  // reload(){
  //   location.reload()
  // }
}
