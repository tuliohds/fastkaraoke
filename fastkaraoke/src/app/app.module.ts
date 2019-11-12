import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { IonicStorageModule } from '@ionic/storage';
import { HttpClientModule, HttpClient} from "@angular/common/http";

import { TabsPage } from '../pages/tabs/tabs';

import { InicioPage } from '../pages/inicio/inicio';
import { MusicasPage } from '../pages/musicas/musicas';
import { PedidosPage } from '../pages/pedidos/pedidos';
import { SobrePage } from '../pages/sobre/sobre';
import { NovoPedidoPage } from '../pages/novo-pedido/novo-pedido';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ApplicationProvider } from '../providers/application';
import { Badge } from '@ionic-native/badge/ngx';

@NgModule({
  declarations: [
    MyApp,
    InicioPage,
    MusicasPage,
    PedidosPage,
    SobrePage,
    NovoPedidoPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    InicioPage,
    MusicasPage,
    PedidosPage,
    SobrePage,
    NovoPedidoPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    HttpClient,
    ApplicationProvider,
    Badge
  ]
})
export class AppModule {}
