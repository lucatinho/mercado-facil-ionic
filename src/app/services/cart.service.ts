import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Product {
  idprodutomarca?: number;
  nameprodutomarca: string;
  preco?: number;
  amount?: number;
  pictureprodutomarca: string;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  
  private cart = [];
  private cartItemCount = new BehaviorSubject(0);
  // subtotal carrinho
  private subtotal = new BehaviorSubject<string>("0");
  currentSubtotal = this.subtotal.asObservable();
  
 
  constructor() {}
  
  zerarCarrinho(){
    return this.cart = [];
  }
 
  getCart() {
    return this.cart;
  }
 
  getCartItemCount() {
    return this.cartItemCount;
  }

  addProduct(product) {
    let added = false;
    for (let p of this.cart) {
      if (p.idProduto === product.idProduto) {
        p.amount += 1;
        added = true;
        break;
      }
    }
    if (!added) {
      product.amount = 1;
      this.cart.push(product);
    }
    this.cartItemCount.next(this.cartItemCount.value + 1);
    console.log("Carrinho: ",this.cart);
  }
 
  decreaseProduct(product) {
    for (let [index, p] of this.cart.entries()) {
      if (p.idProduto === product.idProduto) {
        p.amount -= 1;
        if (p.amount == 0) {
          this.cart.splice(index, 1);
        }
      }
    }
    this.cartItemCount.next(this.cartItemCount.value - 1);
  }
 
  removeProduct(product) {
    for (let [index, p] of this.cart.entries()) {
      if (p.idProduto === product.idProduto) {
        this.cartItemCount.next(this.cartItemCount.value - p.amount);
        this.cart.splice(index, 1);
      }
    }
  }

  // subtotal
 subtotalProduct(value: string) {
    this.subtotal.next(value);
  }

}