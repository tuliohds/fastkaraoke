import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NovoPedidoPage } from '../novo-pedido/novo-pedido';

@Component({
  selector: 'page-pedidos',
  templateUrl: 'pedidos.html'
})
export class PedidosPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  constructor(public navCtrl: NavController) {
  }
  goToNovoPedido(params){
    if (!params) params = {};
    this.navCtrl.push(NovoPedidoPage);
  }
}
