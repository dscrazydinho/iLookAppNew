import { Injectable } from '@angular/core';
import { ICart, ICartItens } from '../models/ICart.models';
import { IProduct } from '../models/IProduct.models';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cart: ICart = { itensSales: [] };
  private cartItem: ICartItens = { qtdSalesItem: 0, priceSalesItem: 0 };
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
      this.cartItem.qtdSalesItem = 1;
      this.cartItem.priceSalesItem = produto.pSaleProducts;
      this.cartItem.productSalesItem = produto;
      this.cart.itensSales.push(this.cartItem);
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
