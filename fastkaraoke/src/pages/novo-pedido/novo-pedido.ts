import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage} from "@ionic/storage";
import { ApplicationProvider} from "../../providers/application";
import { InicioPage } from "../inicio/inicio";

@Component({
  selector: 'page-novo-pedido',
  templateUrl: 'novo-pedido.html'
})
export class NovoPedidoPage {
  novoPedido: any;
  // this tells the tabs component which Pages
  // should be each tab's root Page
  constructor(public navCtrl: NavController, private storage: Storage, private appProvider: ApplicationProvider) {
    this.novoPedido = {
      nome: "",
      mesa: "",
      musica: "",
    }
  }

    fazerNovoPedido() {
      this.storage.set('nome', this.novoPedido.nome);
      this.storage.set('mesa', this.novoPedido.mesa);
      this.storage.set('musica', this.novoPedido.musica);

      this.appProvider.postPedido(this.novoPedido).subscribe(res => console.log(res));
      this.navCtrl.push(InicioPage);
    }


}
