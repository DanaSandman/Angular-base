import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutesModule } from './app.routes.module';
import { CommonModule } from './common/common.module';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { LandingModule } from './pages/landing/landing.module';
import { ProductsModule } from './features/products/products.module';

@NgModule({
    imports: [
        BrowserModule, 
        AppRoutesModule,
        CommonModule,
        LandingModule,
    ],
    declarations: [AppComponent],
    providers: [
        provideHttpClient(withInterceptorsFromDi())
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}