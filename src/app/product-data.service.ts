import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Product } from './product-list/product';

const URL = 'https://637ea54acfdbfd9a63b4d6a8.mockapi.io/api/mundoanimal/products';

@Injectable({
  providedIn: 'root'
})
export class ProductDataService {

  constructor(private http: HttpClient) { }

  //consume la API de productos y devuelve un observable a la respuesta.
  public getAll(): Observable<Product[]>{
    return this.http.get<Product[]>(URL).pipe(
      tap((product: Product[]) => product.forEach(product => product.quantity = 0))  
      );
  }

}
