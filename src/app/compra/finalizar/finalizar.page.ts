import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-finalizar',
  templateUrl: './finalizar.page.html',
  styleUrls: ['./finalizar.page.scss'],
})
export class FinalizarPage implements OnInit {
  public hidden = false;

  constructor() { }

  exibeCartao(event){
    console.log(event.target.value);
    if(event.target.value === 'cartao'){
      this.hidden = true;
      console.log(this.hidden);
    }else{
      this.hidden = false;
    }
  }

  ngOnInit() {
  }

}
