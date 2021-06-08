import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { ICart } from 'src/app/models/ICart.models';

@Injectable({
  providedIn: 'root'
})
export class VendaService {

  private apiURL = 'http://ilook-env.eba-y7ikrzce.sa-east-1.elasticbeanstalk.com/api/vendas/';

  constructor(
    private http: HttpClient,
    public toastController: ToastController
  ) { }

  getVendas(): Observable<ICart>{
    const url = `${this.apiURL}todos`;
    return this.http.get<ICart>(url).pipe(
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
