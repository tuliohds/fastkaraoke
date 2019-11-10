import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { Page2Page } from '../page2/page2';
import { MusicasPage } from '../musicas/musicas';
import { PedidosPage } from '../pedidos/pedidos';
import { SobrePage } from '../sobre/sobre';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = Page2Page;
  tab2Root: any = MusicasPage;
  tab3Root: any = PedidosPage;
  tab4Root: any = SobrePage;
  constructor(public navCtrl: NavController) {
  }
}
