import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VendasUserPageRoutingModule } from './vendas-user-routing.module';

import { VendasUserPage } from './vendas-user.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VendasUserPageRoutingModule
  ],
  declarations: [VendasUserPage]
})
export class VendasUserPageModule {}
