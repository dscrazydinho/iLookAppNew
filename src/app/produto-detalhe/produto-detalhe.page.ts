import { Component, OnInit } from '@angular/core';
import { IProduct } from '../models/IProduct.models';
import { DadosService } from '../services/dados.service';

@Component({
  selector: 'app-produto-detalhe',
  templateUrl: './produto-detalhe.page.html',
  styleUrls: ['./produto-detalhe.page.scss'],
})
export class ProdutoDetalhePage implements OnInit {

  produto: IProduct;

  constructor(
    public dadosService: DadosService
    ) { }

  ngOnInit() {
    this.produto = this.dadosService.pegarDados('produto');
    console.log('Produto Enviado', this.produto);
  }

}
