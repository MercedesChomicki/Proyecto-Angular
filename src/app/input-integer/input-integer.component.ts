import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../product-list/product';

@Component({
  selector: 'app-input-integer',
  templateUrl: './input-integer.component.html',
  styleUrls: ['./input-integer.component.scss']
})
export class InputIntegerComponent implements OnInit {

  constructor() { }

  @Input()
  quantity!: number;

  @Input()
  max!: number;

  @Output()
  quantityChange: EventEmitter<number> = new EventEmitter<number>();

  // Evento que vamos a emitir cada vez que el stock alcanzó el máximo:
  @Output()
  maxReached: EventEmitter<String> = new EventEmitter<String>();

  ngOnInit(): void {
  }

  upQuantity(): void{
    if(this.quantity < this.max){
      this.quantity++;
      this.quantityChange.emit(this.quantity);
    } 
    else {
      this.maxReached.emit("Se alcanzó el max");
    }
  }

  downQuantity(): void{
    if(this.quantity > 0){
      this.quantity--;
      this.quantityChange.emit(this.quantity);
    }
  }


  // Tengo que detectar el valor que ingresan en el input y restringir valores mayores al stock de cada producto
  // 

  validateQuantity(event: Event): void{
    // let input = event.target;
    // if(input > product.stock) { //No funciona
    //   event.preventDefault();
    // }
    this.quantityChange.emit(this.quantity);
  }



  
}
