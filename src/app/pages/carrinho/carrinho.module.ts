import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CarrinhoPageRoutingModule } from './carrinho-routing.module';

import { CarrinhoPage } from './carrinho.page';
import { ModaloneComponent } from 'src/app/components/modalone/modalone.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CarrinhoPageRoutingModule
  ],
  // importa e declara a modal
  declarations: [CarrinhoPage, ModaloneComponent],
  entryComponents: [ModaloneComponent]
})
export class CarrinhoPageModule {}
