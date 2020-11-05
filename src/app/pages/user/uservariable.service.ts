import { Injectable } from '@angular/core';
import { ApimercadoService } from 'src/app/shared/apimercado.service';
import { Storage } from '@ionic/storage';
import { VarUsuarioService } from 'src/app/shared/var-usuario.service';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UservariableService {
  varsessao: any = {};
  isCheck: number = 0;
  validaitor: boolean = false;

  private dataSource = new BehaviorSubject(this.varsessao);
  serviceData = this.dataSource.asObservable();

  private dataCheck = new BehaviorSubject(this.isCheck);
  serviceCheck = this.dataCheck.asObservable();

  constructor(
    private apimercado: ApimercadoService, 
    private storage: Storage, 
    private varuser: VarUsuarioService,
    private router: Router
    ) { }

  sessaoCliente() {
    this.storage.get("login").then((val) => {
      // chama a tela de carregamento
      if (val != null) {
        this.apimercado.sessaoCliente(val)
          .then((response) => {
            this.validaitor = true;
            this.dataSource.next(response);
            
            this.varuser.postInfoCliente(response);
            this.varsessao = response;
            console.log("nomeLoginSessao", response);
            this.checkbox();
          })
          .catch((response) => {
            console.log("Deu errrado a sessao: ", response);
            // fecha a tela de carregamento
          });
      } else {
        this.router.navigate(["/login"])
      }
    }).catch((response) => {
      console.log("nao esta logado storage: ", response);
    });
  }

  checkbox() {
    for (let index = 0; index < this.varsessao.endereco.length; index++) {
      if (this.varsessao.endereco[index].principal == true) {
        this.isCheck = this.varsessao.endereco[index].idEndereco
        this.dataCheck.next(this.isCheck);
        console.log("entrou", this.isCheck)
      }
    }
  }

  enderecoNovo() {
    if (this.validaitor != false) {
      this.router.navigate(["/endereco-novo"])
    } else {
      this.router.navigate(["/login"])
    }
  }

}
