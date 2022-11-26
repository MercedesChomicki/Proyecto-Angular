import { Component, OnInit } from '@angular/core';
import { ProductCartService } from '../product-cart.service';
import { ProductDataService } from '../product-data.service';
import { Product } from './product';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products: Product[] = [];

  constructor(
    private cart: ProductCartService,
    private productsDataService: ProductDataService ) {
  }

  ngOnInit(): void {
    this.productsDataService.getAll()
    .subscribe(products => this.products = products);
  }

  addToCart(product:Product):void {
    this.cart.addToCart(product);
    product.stock -= product.quantity;
    product.quantity = 0; //reinicia a 0
  }

  maxReached(m: String){
    alert(m);
  }

}
