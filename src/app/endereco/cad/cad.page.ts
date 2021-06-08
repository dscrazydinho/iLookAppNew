import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { IEnd } from 'src/app/models/IEnd.models';
import { EndDeliveryService } from 'src/app/services/users/end-delivery.service';

@Component({
  selector: 'app-cad',
  templateUrl: './cad.page.html',
  styleUrls: ['./cad.page.scss'],
})
export class CadPage implements OnInit {

  public end: IEnd = {};

  constructor(
    private endService: EndDeliveryService,
    public toastController: ToastController,
    private router: Router
  ) {
    this.validaLogin();
  }

  cadastrar() {
    if (
      (!this.end.cepEndereco) ||
      (!this.end.cityEndereco) ||
      (!this.end.neighEndereco) ||
      (!this.end.numberEndereco) ||
      (!this.end.streetEndereco) ||
      (!this.end.ufEndereco)
    ) {
      this.exibirResult('Você precisa preencher todos os campos com *', 'danger');
      console.log(this.end);
    } else {
      console.log(this.end);
      this.exibirResult('Endereços de entrega atualizados!', 'success');
      this.router.navigateByUrl('/');
    }
  }

  validaLogin() {
    if (localStorage.getItem('token') === null) {
      this.router.navigateByUrl('/login');
    }
  }

  async exibirResult(msg: string, cor: string) {
    const toast = await this.toastController.create({
      message: msg,
      color: cor,
      position: 'middle',
      buttons: [
        {
          text: 'OK',
          role: 'ok',
          handler: () => {
            console.log('ok clicked');
          }
        }
      ]
    });
    toast.present();
    return null;
  }

  ngOnInit() {
  }

}
