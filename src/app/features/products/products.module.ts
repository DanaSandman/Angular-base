import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsRoutingModule } from './products-routing.module';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
// Pages
import { ProductsListComponent } from './pages/products-list/products-list.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
// Components
import { ProductCardComponent } from './components/product-card/product-card.component';
// Import ProductFilterComponent only if you're going to use it
// import { ProductFilterComponent } from './components/product-filter/product-filter.component';

@NgModule({
  declarations: [
    // Pages
    ProductsListComponent,
    ProductDetailsComponent,
    
    // Components
    ProductCardComponent
    // Uncomment if you're using it
    // ProductFilterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ProductsRoutingModule,
    SharedModule
  ],
  providers: []
})
export class ProductsModule { } 