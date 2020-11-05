import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { VarUsuarioService } from 'src/app/shared/var-usuario.service';


@Component({
  selector: 'app-listar-pedido-produto',
  templateUrl: './listar-pedido-produto.component.html',
  styleUrls: ['./listar-pedido-produto.component.scss'],
})
export class ListarPedidoProdutoComponent implements OnInit {
  produto: any;
  bancoPedidos: any;
  formatarProduto: any;
  total: any;
  nomeFrete: any = "Retirada no estabelecimento";
  enderecoEnviar: any = [];

  constructor(private modalCTRL: ModalController, private saveUser: VarUsuarioService) { }

  ngOnInit() {
    // this.puxarBanco();
    this.pedidoSelecionado();
  }

  // botao de fechar a modal
  close() {
    this.modalCTRL.dismiss();
  }

  pedidoSelecionado() {
    this.produto = this.saveUser.getPedidoSelecionado();
    console.log("chegou :", this.produto);
    this.totalProdutos();
    if (this.produto.formaEnvio == "Entrega") {
      for (let index = 0; index < this.produto.cliente.endereco.length; index++) {
        if (this.produto.endereco == this.produto.cliente.endereco[index].idEndereco) {
          this.enderecoEnviar = this.produto.cliente.endereco[index];
        }
      }
    }else{
      this.enderecoEnviar = false;
    }
  }


  totalProdutos() {
    this.total = 0;
    for (let index = 0; index < this.produto.pedidoProdutos.length; index++) {
      this.total = this.total + (this.produto.pedidoProdutos[index].valorUni * this.produto.pedidoProdutos[index].qtdProduto);
    };
    if (this.produto.formaEnvio == "Entrega") {
      this.total = this.total + this.produto.mercados.freteMercado;
      this.nomeFrete = "R$ " + this.produto.mercados.freteMercado
    }
    return this.total;
  };

}
