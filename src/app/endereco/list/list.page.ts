import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { IUser } from 'src/app/models/IUser.models';
import { DadosService } from 'src/app/services/dadosGeral/dados.service';
import { UserService } from 'src/app/services/users/user.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  private usuarioLogado: IUser;

  constructor(
    public toastController: ToastController,
    public dadosService: DadosService,
    public usuarioService: UserService,
    public route: Router
  ) {
    this.validaLogin();
  }

  cadEnd() {
    this.route.navigateByUrl('/cadEnd');
  }

  validaLogin() {
    if (localStorage.getItem('token') === null) {
      this.route.navigateByUrl('/login');
    } else {
      this.usuarioService.getUser(localStorage.getItem('user')).subscribe(resposta => {
        this.usuarioLogado = resposta;
      });
    }
  }

  ngOnInit() {
  }



}
