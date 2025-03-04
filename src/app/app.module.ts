import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutesModule } from './app.routes.module';

@NgModule({
    imports: [BrowserModule, AppRoutesModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent],
})
export class AppModule {}