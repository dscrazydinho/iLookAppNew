import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { catchError, map } from 'rxjs/operators';
import { ILogin, IUser } from 'src/app/models/IUser.models';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiURL = 'http://ilook-env.eba-y7ikrzce.sa-east-1.elasticbeanstalk.com/api/usuarios/';

  constructor(
    private http: HttpClient,
    public toastController: ToastController) { }

  postLogin(login: ILogin): any {
    const url = `${this.apiURL}login`;
    return this.http.post(url, login).pipe(
      map(retorno => retorno),
      catchError(erro => this.exibirErro(erro))
    );
  }

  async exibirErro(erro) {
    const toast = await this.toastController.create({
      header: 'Erro ao consultar a API',
      message: erro,
      duration: 2000,
      color: 'danger',
      position: 'middle'
    });
    toast.present();
    return null;
  }
}
