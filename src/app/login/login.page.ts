import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { ILogin } from '../models/IUser.models';
import { UserService } from '../services/users/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  private token = null;

  private msgErroValid = {
    username: [
      { type: 'required', message: 'Email é obrigatório!' },
      { type: 'email', message: 'Digite um e-mail válido!' }
    ],
    password: [
      { type: 'required', message: 'Senha é obrigatório!' },
      { type: 'minlength', message: 'Senha muito curta!' },
      { type: 'maxlength', message: 'Senha muito Longa!' }
    ]
  };



  // eslint-disable-next-line @typescript-eslint/member-ordering
  public loginForm: FormGroup;

  constructor(
    public toastController: ToastController,
    private route: Router,
    public fBuilder: FormBuilder,
    public userService: UserService
  ) {
    this.loginForm = this.fBuilder.group({
      username: new FormControl('', Validators.compose([
        Validators.required,
        /*Validators.email*/
      ])),
      password: new FormControl('', Validators.compose([
        Validators.required,
       /* Validators.minLength(8),
        Validators.maxLength(25)*/
      ]))
    });
  }

  cadPage() {
    this.route.navigateByUrl('cadUser');
  }
  voltar() {
    this.route.navigateByUrl('/');
  }

  fazerLogin() {
    this.userService.postLogin(this.loginForm.value).subscribe((resposta) => {
      this.token = resposta;
      if (this.token) {
        localStorage.setItem('token', this.token);
        localStorage.setItem('user', this.loginForm.value.username);
        this.presentToast('Login Realizado', 'success');
        this.route.navigateByUrl('/');
      } else {
        this.presentToast('Usuario e/ou senha incorretos', 'danger');
      }
    });
  }

  async presentToast(msg: string, cor: string) {
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
