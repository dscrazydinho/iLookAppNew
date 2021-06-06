import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor(
    public route: Router
    ) {}

  user(){
    this.route.navigateByUrl('/login');
    //this.route.navigateByUrl('perfil');
  }

  end(){
    this.route.navigateByUrl('/listEnd');
  }

  exibeCarrinho() {
    this.route.navigateByUrl('/carrinho');
  }

}
