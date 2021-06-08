import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor(
    public toastController: ToastController,
    public route: Router
  ) { }

  user() {
    this.route.navigateByUrl('/perfil');
  }

  compras() {
    this.route.navigateByUrl('/vendas-user');
  }

  end() {
    this.route.navigateByUrl('/listEnd');
  }

  exibeCarrinho() {
    this.route.navigateByUrl('/carrinho');
  }

  async logout() {

    if (localStorage.getItem('token')) {

      const toast = await this.toastController.create({
        header: 'Tem certeza que deseja sair?',
        position: 'middle',
        color: 'danger',
        buttons: [
          {
            side: 'start',
            text: 'Não',
            role: 'cancel',
            handler: () => {
              console.log('Cancel clicked');
            }
          }, {
            text: 'Sim',
            role: 'ok',
            handler: () => {
              localStorage.clear();
            }
          }
        ]
      });
      await toast.present();

      const { role } = await toast.onDidDismiss();
      console.log('onDidDismiss resolved with role', role);
    } else {
      this.route.navigateByUrl('/login');
    }
  }
}
