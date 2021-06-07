import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { IUser } from 'src/app/models/IUser.models';
import { UserService } from 'src/app/services/users/user.service';

@Component({
  selector: 'app-cad',
  templateUrl: './cad.page.html',
  styleUrls: ['./cad.page.scss'],
})
export class CadPage implements OnInit {

  public user: IUser = {};

  constructor(
    private userService: UserService,
    public toastController: ToastController,
    private router: Router
  ) { }

  cadastrar() {
    if (
      (!this.user.username) ||
      (!this.user.password) ||
      (!this.user.nameUsers) ||
      (!this.user.nascUsers) ||
      (!this.user.rgUsers) ||
      (!this.user.cpfUsers)
    ) {
      this.exibirResult('Você precisa preencher todos os campos com *', 'danger');
      console.log(this.user);
    } else {
      console.log(this.user);
      this.exibirResult('Usuário cadastrado!', 'success');
      this.router.navigateByUrl('/');
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
