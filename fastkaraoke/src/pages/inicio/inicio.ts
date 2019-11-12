import { Component } from '@angular/core';
import { ApplicationProvider} from "../../providers/application";
// import { Badge } from "@ionic-native/badge";

@Component({
  selector: 'page-inicio',
  templateUrl: 'inicio.html'
})
export class InicioPage {

  proximopedido: any;
  // quantidade:number = 10;

  constructor(
      private appProvider: ApplicationProvider,
      // private badge: Badge
  ) {
    // badge.set(this.quantidade);
  }

  ngOnInit() {
    this.appProvider.getProximoPedido().subscribe(res => this.proximopedido = res);
    // this.quantidadePedidos();

  }

  quantidadePedidos() {
    this.appProvider.getPedidos().subscribe(res => console.log(res));
  }

}
