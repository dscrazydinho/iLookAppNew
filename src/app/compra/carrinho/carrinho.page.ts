import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { ICart } from '../../models/ICart.models';
import { IProduct } from '../../models/IProduct.models';
import { ToastController } from '@ionic/angular';
import { CartService } from 'src/app/services/cart/cart.service';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.page.html',
  styleUrls: ['./carrinho.page.scss'],
})
export class CarrinhoPage implements OnInit {

  cart: ICart;
  cartItemCount: BehaviorSubject<number>;

  constructor(
    private cartService: CartService,
    public toastController: ToastController,
    private router: Router
  ) { }

  ngOnInit() {
    this.cart = this.cartService.getCart();
    this.cartItemCount = this.cartService.getCartItemCount();
    console.log(this.cart);
  }

  finalizar() {
    this.router.navigateByUrl('/finalizar');
  }

  async limpar() {

    const toast = await this.toastController.create({
      header: 'Tem certeza que deseja limpar o carrinho?',
      position: 'middle',
      color: 'danger',
      buttons: [
        {
          side: 'start',
          text: 'Não',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }, {
          text: 'Sim',
          role: 'ok',
          handler: () => {
            this.cartService.cleanCart();
          }
        }
      ]
    });
    await toast.present();

    const { role } = await toast.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }



  decreaseCartItem(produto: IProduct) {
    this.cartService.decreaseProduct(produto);
  }

  increaseCartItem(produto: IProduct) {
    this.cartService.addToCart(produto);
  }

  removeCartItem(produto: IProduct) {
    this.cartService.removeToCart(produto);
  }


  /*getTotal() {
    return this.cart.reduce((i, j) => i + j.pSaleProducts * j.qtdProducts, 0);
  }*/

}
