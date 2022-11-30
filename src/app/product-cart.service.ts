import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from './product-list/product';

/**
 * Maneja la logica del carrito
 */

@Injectable({
  providedIn: 'root'
})
export class ProductCartService {
  
  private _cartList: Product[] = []; //Observable
  cartList: BehaviorSubject<Product[]> = new BehaviorSubject(this._cartList); //Observer
  
  constructor() { }

  addToCart(product: Product) {
    let item: Product = this._cartList.find((v1) =>v1.name == product.name)!;
    if(!item) {
      this._cartList.push({ ... product}); //{... product} -> clona el objeto producto
    } else {
      item.quantity += product.quantity;
    }
    this.cartList.next(this._cartList); //equivalente al emit de eventos
  }

  removeToCart(product: Product){
    for (let i = 0; i < this._cartList.length; i++) {
      if(this._cartList[i].name == product.name){
        this._cartList.splice(i, product.id);
      }
    }

  }

}
