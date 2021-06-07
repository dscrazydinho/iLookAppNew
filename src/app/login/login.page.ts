import { core } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { ILogin } from '../models/IUser.models';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  private login: ILogin = {};

  constructor(
    public toastController: ToastController,
    private route: Router
  ) { }

  cadPage() {
    this.route.navigateByUrl('cadUser');
  }
  voltar(){
    this.route.navigateByUrl('/');
  }

  fazerLogin(){
    console.log(this.login);
    this.presentToast('Login Realizado', 'success');
    this.route.navigateByUrl('/');
  }

  async presentToast(msg: string, cor: string){
    const toast = await this.toastController.create({
      message: msg,
      color: cor,
      position: 'top',
      duration: 1200
    });
    toast.present();
    return null;
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
