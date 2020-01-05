import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewMonsterPageRoutingModule } from './view-monster-routing.module';

import { ViewMonsterPage } from './view-monster.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewMonsterPageRoutingModule
  ],
  declarations: [ViewMonsterPage]
})
export class ViewMonsterPageModule {}
