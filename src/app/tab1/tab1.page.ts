import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';
import { ICart } from '../models/ICart.models';
import { IProduct } from '../models/IProduct.models';
import { CartService } from '../services/cart.service';
import { DadosService } from '../services/dados.service';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  listaProdutosAPI: IProduct;
  cart: ICart;
  cartItemCount: BehaviorSubject<number>;

  private filtroSelecionado = 'all';

  constructor(
    public alertController: AlertController,
    public toastController: ToastController,
    public productService: ProductService,
    public dadosService: DadosService,
    public cartService: CartService,
    public route: Router) { }

  logScrollEnd() {

  }

  exibeDetalheProduto(produto: IProduct) {
    this.dadosService.guardarDados('produto', produto);
    this.route.navigateByUrl('/produto-detalhe');
  }

  exibeCarrinho() {
    this.route.navigateByUrl('/carrinho');
  }

  buscarProduto(evento: any) {
    console.log(evento.target.value);
    const busca = evento.target.value;
    if (busca && busca.trim() !== '') {
      this.productService.getProdutoByName(busca).subscribe(dados => {
        console.log(dados);
        this.listaProdutosAPI = dados;
      });
    }
  }

  addAoCarrinho(produto: IProduct) {
    this.cartService.addToCart(produto);
    this.msg('Produto adicionado');
  }

  filtroChange(event) {
    console.log(event.target.value);
    this.filtroSelecionado = event.target.value;

    if (event.target.value === 'all') {
      this.productService.getProdutosTodos()
        .subscribe(resposta => {
          this.listaProdutosAPI = resposta;
        });
    }

    if (event.target.value === 'high') {
      this.productService.getProdutosDestaques()
        .subscribe(resposta => {
          this.listaProdutosAPI = resposta;
        });
    }

    if (event.target.value === 'organic') {
      this.productService.getProdutoOrganicos()
        .subscribe(resposta => {
          this.listaProdutosAPI = resposta;
        });
    }
  }

  async msg(msg: string) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000,
      color: 'success',
      position: 'middle'
    });
    toast.present();
    return null;
  }

  ngOnInit() {
    this.productService.getProdutosTodos().subscribe(resposta => {
      this.listaProdutosAPI = resposta;
    });
    this.cart = this.cartService.getCart();
    this.cartItemCount = this.cartService.getCartItemCount();
  }

}
