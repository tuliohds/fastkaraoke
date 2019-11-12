import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ApplicationProvider} from "../../providers/application";
import {resolve} from "@angular/compiler-cli/src/ngtsc/file_system";

@Component({
  selector: 'page-musicas',
  templateUrl: 'musicas.html'
})
export class MusicasPage {
  songs: any;
  searchQuery: string = '';
  items: string[];
  // this tells the tabs component which Pages
  // should be each tab's root Page
  constructor(public navCtrl: NavController, private appProvider: ApplicationProvider) {
  }

  ngOnInit() {
    this.appProvider.getMusicas().subscribe(res => this.songs = res)
  }
  initializeItems() {
    setTimeout( () => {
      this.appProvider.getMusicas().subscribe(res => this.songs = res)
    }, 5000);

  }
  getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

    const val = ev.target.value;

    if (val && val.trim() != '') {
      this.songs = this.songs.filter((song) => {
        return (song.mscNome.toString().toLowerCase().indexOf(val.toString().toLowerCase()) > -1);
      })
    }
  }

}
