import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
    // { path: '', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
    // { path: 'collections', loadChildren: () => import('./pages/collections/collections.module').then(m => m.CollectionsModule) },
    // { path: 'dashboard', loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardModule) },
    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutesModule {}