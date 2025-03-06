import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsRoutingModule } from './products-routing.module';
import { RouterModule } from '@angular/router';
// Pages
import { ProductsListComponent } from './pages/products-list/products-list.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
// // Components
// import { ProductCardComponent } from './components/product-card/product-card.component';
// import { ProductFilterComponent } from './components/product-filter/product-filter.component';

@NgModule({
  declarations: [
    // Pages
    ProductsListComponent,
    ProductDetailsComponent,
    
    // // Components
    // ProductCardComponent,
    // ProductFilterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ProductsRoutingModule
  ],
  providers: [
    //if there are specific services for this module
  ]
})
export class ProductsModule { } 