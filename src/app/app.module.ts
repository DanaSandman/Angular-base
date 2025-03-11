import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutesModule } from './app.routes.module';
import { LayoutModule } from './layout/layout.module';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { LandingModule } from './pages/landing/landing.module';
@NgModule({
    imports: [
        BrowserModule, 
        AppRoutesModule,
        LayoutModule,
        LandingModule,
    ],
    declarations: [AppComponent],
    providers: [
        provideHttpClient(withInterceptorsFromDi())
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}