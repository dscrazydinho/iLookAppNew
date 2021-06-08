import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonCard, ToastController } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';
import { isEmpty } from 'rxjs/operators';
import { ICard } from 'src/app/models/ICard.model';
import { ICart } from 'src/app/models/ICart.models';
import { IUser } from 'src/app/models/IUser.models';
import { CartService } from 'src/app/services/cart/cart.service';
import { UserService } from 'src/app/services/users/user.service';


@Component({
  selector: 'app-finalizar',
  templateUrl: './finalizar.page.html',
  styleUrls: ['./finalizar.page.scss'],
})
export class FinalizarPage implements OnInit {

  public hidden = false;
  public totalItem: number;
  public usuarioLogado: IUser = {};

  cart: ICart = {};
  cartItemCount: BehaviorSubject<number>;
  card: ICard = {};

  constructor(
    private cartService: CartService,
    public toastController: ToastController,
    public usuarioService: UserService,
    private router: Router
  ) {
    this.validaLogin();
  }

  ngOnInit() {
    this.cart = this.cartService.getCart();
    this.cauculaTotal();
    this.cartItemCount = this.cartService.getCartItemCount();
    console.log(this.cart);
  }

  exibeCartao(event) {
    console.log(event.target.value);
    if (event.target.value === 'CREDITO' || event.target.value === 'DEBITO') {
      this.hidden = true;
      console.log(this.hidden);
    } else {
      this.hidden = false;
    }
  }

  comprar() {
    if (this.cart.deliveryEnds === undefined || this.cart.paymentSales === undefined) {
      this.exibirResult('Você precisa escolher um método de pagamento e um endereço de entrega, se não tiver um endereco, cadastre um no menu', 'danger');
    } else if (this.cart.paymentSales === 'cartao' && (this.card.cvc === 0 || this.card.numero === 0 || this.card.validade === undefined)) {
      this.exibirResult('Você precisa digitar um cartão válido', 'danger');
    } else {
      this.exibirResult('Compra Realizada com sucesso!', 'success');
      this.cartService.cleanCart();
      this.router.navigateByUrl('/');
    }
    console.log(this.cart, this.card);
  }

  cauculaTotal() {
    this.cart.valueSales = 0;
    for (const i of this.cart.itensSales) {
      this.totalItem = i.priceSalesItem * i.qtdSalesItem;
      this.cart.valueSales = this.cart.valueSales + this.totalItem;
    }
    return this.cart.valueSales;
  }

  validaLogin() {
    if (localStorage.getItem('token') === null) {
      this.router.navigateByUrl('/login');
    } else {
      this.usuarioService.getUser(localStorage.getItem('user')).subscribe(resposta => {
        this.usuarioLogado = resposta;
      });
    }
  }

  async exibirResult(msg: string, cor: string) {
    const toast = await this.toastController.create({
      message: msg,
      color: cor,
      position: 'middle',
      buttons: [
        {
          text: 'OK',
          role: 'ok',
          handler: () => {
            console.log('ok clicked');
          }
        }
      ]
    });
    toast.present();
    return null;
  }

}
