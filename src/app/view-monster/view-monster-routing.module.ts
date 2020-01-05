import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewMonsterPage } from './view-monster.page';

const routes: Routes = [
  {
    path: '',
    component: ViewMonsterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewMonsterPageRoutingModule {}
