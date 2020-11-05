import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EnderecoNovoPageRoutingModule } from './endereco-novo-routing.module';

import { EnderecoNovoPage } from './endereco-novo.page';

@NgModule({
  imports: [
    CommonModule,
    // FormsModule,
    ReactiveFormsModule,
    IonicModule,
    EnderecoNovoPageRoutingModule
  ],
  declarations: [EnderecoNovoPage]
})
export class EnderecoNovoPageModule {}
