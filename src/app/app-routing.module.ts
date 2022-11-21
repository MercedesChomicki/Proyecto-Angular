import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MundoAnimalAboutComponent } from './mundo-animal-about/mundo-animal-about.component';
import { MundoAnimalProductsComponent } from './mundo-animal-products/mundo-animal-products.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'products',
    pathMatch: 'full'
  },
  {
    path: 'products',
    component: MundoAnimalProductsComponent
  },
  {
    path: 'about',
    component: MundoAnimalAboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
