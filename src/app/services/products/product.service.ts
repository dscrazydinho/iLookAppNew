import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';

import { Observable } from 'rxjs';
import { ToastController } from '@ionic/angular';
import { IProduct } from 'src/app/models/IProduct.models';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiURL = 'http://ilook-env.eba-y7ikrzce.sa-east-1.elasticbeanstalk.com/api/produtos/';

  constructor(
    private http: HttpClient,
    public toastController: ToastController
  ) { }

  getProdutosTodos(): Observable<IProduct> {
    const url = `${this.apiURL}todos`;
    return this.http.get<IProduct>(url).pipe(
      map(retorno => retorno),
      catchError(erro => this.exibirErro(erro))
    );
  }

  getProdutosDestaques(): Observable<IProduct> {
    const url = `${this.apiURL}destaques`;
    return this.http.get<IProduct>(url).pipe(
      map(retorno => retorno),
      catchError(erro => this.exibirErro(erro))
    );
  }

  getProdutoOrganicos(): Observable<IProduct> {
    const url = `${this.apiURL}organicos`;
    return this.http.get<IProduct>(url).pipe(
      map(retorno => retorno),
      catchError(erro => this.exibirErro(erro))
    );
  }

  getProdutoByName(busca: string): Observable<IProduct>{
    const url = `${this.apiURL}${busca}`;
    return this.http.get<IProduct>(url).pipe(
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
