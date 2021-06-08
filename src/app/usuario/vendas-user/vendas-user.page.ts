import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { ICart } from 'src/app/models/ICart.models';
import { IUser } from 'src/app/models/IUser.models';
import { DadosService } from 'src/app/services/dadosGeral/dados.service';
import { UserService } from 'src/app/services/users/user.service';
import { VendaService } from 'src/app/services/users/venda.service';

@Component({
  selector: 'app-vendas-user',
  templateUrl: './vendas-user.page.html',
  styleUrls: ['./vendas-user.page.scss'],
})
export class VendasUserPage implements OnInit {

  private usuarioLogado: IUser;
  private vendas: ICart;

  constructor(
    public toastController: ToastController,
    public dadosService: DadosService,
    public usuarioService: UserService,
    public vendasService: VendaService,
    public route: Router
  ) {
    this.validaLogin();
  }

  validaLogin() {
    if (localStorage.getItem('token') === null) {
      this.route.navigateByUrl('/login');
    } else {
      this.usuarioService.getUser(localStorage.getItem('user')).subscribe(resposta =>{
        this.usuarioLogado = resposta;
      });
      this.vendasService.getVendas().subscribe(resposta =>{
        this.vendas = resposta;
      });
    }

  }

  ngOnInit() {
  }

}
