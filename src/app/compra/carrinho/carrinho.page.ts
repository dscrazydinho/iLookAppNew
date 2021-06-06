import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ICart } from '../../models/ICart.models';
import { IProduct } from '../../models/IProduct.models';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.page.html',
  styleUrls: ['./carrinho.page.scss'],
})
export class CarrinhoPage implements OnInit {

  cart: ICart;

  constructor(
    private cartService: CartService,
    private router: Router
  ) { }

  ngOnInit() {
    this.cart = this.cartService.getCart();
    console.log(this.cart);
  }

  finalizar(){
    this.router.navigateByUrl('/finalizar');
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
