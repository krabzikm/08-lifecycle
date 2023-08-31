import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { PriceComponent } from './components/price/price.component';
import { ProductComponentPage } from "./pages/product/product-page.component";


@NgModule({
  declarations: [
    PriceComponent,
      ProductComponentPage
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
