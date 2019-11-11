import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ApplicationProvider {
  serverUrl = "https://fast-karaoke.herokuapp.com";

  constructor(public http: HttpClient) {}

  getMusicas() {
    return this.http.get<any>(`${this.serverUrl}/musica/`);
  }

  getPedidos() {
    return this.http.get<any>(`${this.serverUrl}/pedido/all`);
  }

  getProximoPedido() {
    return this.http.get<any>(`${this.serverUrl}/pedido`);
  }


}
