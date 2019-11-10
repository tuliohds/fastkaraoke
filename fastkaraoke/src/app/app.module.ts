import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

// import { AboutPage } from '../pages/about/about';
// import { ContactPage } from '../pages/contact/contact';
// import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { InicioPage } from '../pages/inicio/inicio';
import { MusicasPage } from '../pages/musicas/musicas';
import { PedidosPage } from '../pages/pedidos/pedidos';
import { SobrePage } from '../pages/sobre/sobre';
import { NovoPedidoPage } from '../pages/novo-pedido/novo-pedido';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

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
    IonicModule.forRoot(MyApp)
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
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
