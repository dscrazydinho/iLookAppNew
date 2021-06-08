import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  constructor(public route: Router) {
    this.validaLogin();
  }

  validaLogin() {
    if (localStorage.getItem('token') === null) {
      this.route.navigateByUrl('/login');
    }
  }

  ngOnInit() {
  }

}
