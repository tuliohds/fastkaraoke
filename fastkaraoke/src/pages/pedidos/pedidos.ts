import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NovoPedidoPage } from '../novo-pedido/novo-pedido';
import { ApplicationProvider} from "../../providers/application";

@Component({
  selector: 'page-pedidos',
  templateUrl: 'pedidos.html'
})
export class PedidosPage {
  pedidos: any;
  // this tells the tabs component which Pages
  // should be each tab's root Page
  constructor(public navCtrl: NavController, private appProvider: ApplicationProvider) {
  }

  goToNovoPedido(params){
    if (!params) params = {};
    this.navCtrl.push(NovoPedidoPage);
  }

  ngOnInit() {
    this.appProvider.getPedidos().subscribe(res => this.pedidos = res)
  }
}
