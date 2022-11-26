import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MundoAnimalContactComponent } from './mundo-animal-contact/mundo-animal-contact.component';
import { MundoAnimalHomeComponent } from './mundo-animal-home/mundo-animal-home.component';
import { MundoAnimalProductsComponent } from './mundo-animal-products/mundo-animal-products.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: MundoAnimalHomeComponent
  },
  {
    path: 'products',
    component: MundoAnimalProductsComponent
  },
  {
    path: 'contact',
    component: MundoAnimalContactComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
