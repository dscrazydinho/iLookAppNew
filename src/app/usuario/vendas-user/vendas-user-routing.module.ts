import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VendasUserPage } from './vendas-user.page';

const routes: Routes = [
  {
    path: '',
    component: VendasUserPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VendasUserPageRoutingModule {}
