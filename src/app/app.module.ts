import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';

import { HttpClientModule } from '@angular/common/http'

import { FormsModule } from '@angular/forms';
import { MundoAnimalProductsComponent } from './mundo-animal-products/mundo-animal-products.component';
import { CartComponent } from './cart/cart.component';
import { InputIntegerComponent } from './input-integer/input-integer.component';
import { MundoAnimalHomeComponent } from './mundo-animal-home/mundo-animal-home.component';
import { MundoAnimalContactComponent } from './mundo-animal-contact/mundo-animal-contact.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    MundoAnimalProductsComponent,
    CartComponent,
    InputIntegerComponent,
    MundoAnimalHomeComponent,
    MundoAnimalContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
