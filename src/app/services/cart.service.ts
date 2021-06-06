import { Injectable } from '@angular/core';
import { ICart, ICartItens } from '../models/ICart.models';
import { IProduct } from '../models/IProduct.models';
import { BehaviorSubject } from 'rxjs';
import { IonCardTitle } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cart: ICart = { itensSales: [] };
  private cartItem: ICartItens = {};
  private cartItemCount = new BehaviorSubject(0);

  constructor() { }

  getCart() {
    return this.cart;
  }

  getCartItemCount(): BehaviorSubject<number> {
    return this.cartItemCount;
  }

  addToCart(produto: IProduct) {
    let added = false;
    for (const i of this.cart.itensSales) {
      if (i.productSalesItem.idProducts === produto.idProducts) {
        i.qtdSalesItem += 1;
        added = true;
        break;
      }
    }
    if (!added) {
      this.cart.itensSales.push({
        qtdSalesItem: 1,
        priceSalesItem: produto.pSaleProducts,
        productSalesItem: produto,
      });
    }
    this.cartItemCount.next(this.cartItemCount.value + 1);
  };

  decreaseProduct(produto: IProduct) {
    for (const [index, item] of this.cart.itensSales.entries()) {
      if (item.productSalesItem.idProducts === produto.idProducts) {
        item.qtdSalesItem -= 1;
        if (item.qtdSalesItem === 0) {
          this.cart.itensSales.splice(index, 1);
        }
      }
    }
    this.cartItemCount.next(this.cartItemCount.value - 1);
  }

  removeToCart(produto: IProduct) {
    for (const [index, item] of this.cart.itensSales.entries()) {
      if (item.productSalesItem.idProducts === produto.idProducts) {
        this.cartItemCount.next(this.cartItemCount.value - item.qtdSalesItem);
        this.cart.itensSales.splice(index, 1);
      }
    }
  };
}
