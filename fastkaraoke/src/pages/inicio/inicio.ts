import { Component } from '@angular/core';
import { ApplicationProvider} from "../../providers/application";

@Component({
  selector: 'page-inicio',
  templateUrl: 'inicio.html'
})
export class InicioPage {

  proximopedido: any;

  constructor(private appProvider: ApplicationProvider) {
  }

  ngOnInit() {
    this.appProvider.getProximoPedido().subscribe(res => this.proximopedido = res)
  }

}
