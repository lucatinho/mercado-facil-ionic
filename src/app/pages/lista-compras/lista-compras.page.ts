import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { VarUsuarioService } from 'src/app/shared/var-usuario.service';

@Component({
  selector: 'app-lista-compras',
  templateUrl: './lista-compras.page.html',
  styleUrls: ['./lista-compras.page.scss'],
})
export class ListaComprasPage implements OnInit {

  banco:any={};
  constructor(private storage: Storage, private varUser: VarUsuarioService) { }

  ngOnInit() {
    this.banco = this.varUser.getListaCompraSelecionada();
    // this.getListaMercado();
    console.log("ta: ",this.varUser.getListaCompraSelecionada());

  }

  decreaseCartItem(){

  }
  increaseCartItem(){

  }
  removeCartItem(){
    
  }

  // getListaMercado() {
  //   this.storage.get("listaMercado").then((val) => {
  //     this.listaProduto = val;
  //     console.log(val)
  //   }).catch((response) => {
  //     console.log("listaMercado erro: ", response);
  //   });
  //   // return this.infoCliente;
  // }
}
