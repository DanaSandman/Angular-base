import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPage } from './pages/landing/landing.component';
import { ProductsListComponent } from './features/products/pages/products-list/products-list.component';
import { ProductDetailsComponent } from './features/products/pages/product-details/product-details.component';

export const routes: Routes = [
    { path: '', component: LandingPage },
    // { path: 'dashboard', loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardModule) },
    { path: 'products', loadChildren: () => import('./features/products/products.module').then(m => m.ProductsModule) },
    // { path: 'products', component: ProductsListComponent },
    // { path: 'products/:id', component: ProductDetailsComponent },
    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    // imports: [RouterModule.forRoot(routes, { enableTracing: true })],
    exports: [RouterModule],
})
export class AppRoutesModule {}