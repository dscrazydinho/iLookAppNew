import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadPage } from './cad.page';

const routes: Routes = [
  {
    path: '',
    component: CadPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadPageRoutingModule {}
