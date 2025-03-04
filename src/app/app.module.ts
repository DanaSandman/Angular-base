import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutesModule } from './app.routes.module';
import { CommonModule } from './common/common.module';

@NgModule({
    imports: [
        BrowserModule, 
        AppRoutesModule,
        CommonModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent],
})
export class AppModule {}