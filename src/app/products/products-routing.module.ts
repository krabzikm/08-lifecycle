import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponentPage } from "./pages/product/product-page.component";

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'product', component: ProductComponentPage },
      { path: '**', redirectTo: 'product' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
