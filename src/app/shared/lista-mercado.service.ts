import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class ListaMercadoService {
  mercadoListaRef: AngularFireList<any>;

  constructor(private db: AngularFireDatabase) { }

  // pega lista
  getMercadoLista() {
    this.mercadoListaRef = this.db.list('/mercados');
    return this.mercadoListaRef;
  }

}