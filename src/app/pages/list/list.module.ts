import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListPageRoutingModule } from './list-routing.module';

import { ListPage } from './list.page';
import { ExploreContainerComponentModule } from 'src/app/explore-container/explore-container.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListPageRoutingModule,
    ExploreContainerComponentModule,
    RouterModule.forChild([{ path: '', component: ListPage }])
  ],
  declarations: [ListPage]
})
export class ListPageModule {}
