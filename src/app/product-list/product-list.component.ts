import { Component, OnInit } from '@angular/core';
import { Product } from './product';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products: Product[] = [
  {
    name: 'Pelota maciza de colores',
    type: 'Juguete para perros',
    description: 'Pelota de caucho maciza indestructible. Multicolor. Mediana. Diámetro: 48mm',
    price: 300,
    stock: 10,
    image: 'assets/img/pelota-caucho-multicolor.jpg',
    sale: false,
  },
  {
    name: 'Erizo grande con chifle',
    type: 'Juguete para perros',
    description: 'Juguete para perros con sonido con forma de erizo. Excelente diseño. No tóxico.',
    price: 800,
    stock: 5,
    image: 'assets/img/erizo-grande-con-chifle.jpg',
    sale: true,
  },
  {
    name: 'Pulpos de peluche sin sonido',
    type: 'Juguete para perros',
    description: 'Simpáticos animales de peluche. Varios modelos. Venta por unidad. Origen: China.',
    price: 1200,
    stock: 14,
    image: 'assets/img/pulpos.jpg',
    sale: false,
  },
  {
    name: 'Frisbee de silicona',
    type: 'Juguete para perros',
    description: 'Frisbee. Divertido juguete para ejercitar con su perro al aire libre. Lanze el plato volador periodicamente a su perro en espacios abiertos, asi mantendrá buen estado físico y entrenará su su coordinación viso-motriz. El frisbee es de silicona y flexible que lo hace resistente a las mordidas de su perro. Tamaño: 22cms',
    price: 650,
    stock: 0,
    image: 'assets/img/fribee-silicona.jpg',
    sale: false,
  }
]

  constructor() { }

  ngOnInit(): void {
  }

}
