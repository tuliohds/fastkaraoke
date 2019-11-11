import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ApplicationProvider} from "../../providers/application";

@Component({
  selector: 'page-musicas',
  templateUrl: 'musicas.html'
})
export class MusicasPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  constructor(public navCtrl: NavController, public appProvider: ApplicationProvider) {
  }

  ngOnInit() {
      console.log("hello");
  }
  
}
