import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EnderecoEditPageRoutingModule } from './endereco-edit-routing.module';

import { EnderecoEditPage } from './endereco-edit.page';
import { EditEnderecoComponent } from 'src/app/components/userEdit/edit-endereco/edit-endereco.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EnderecoEditPageRoutingModule
  ],
  declarations: [EnderecoEditPage, EditEnderecoComponent],
  entryComponents: [EditEnderecoComponent]
})
export class EnderecoEditPageModule {}
