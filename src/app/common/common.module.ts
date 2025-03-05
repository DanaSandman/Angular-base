import { NgModule } from '@angular/core';
import { CommonModule as AngularCommonModule } from '@angular/common';
import { FooterComponent } from '../layout/footer/footer.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../layout/header/header.component';

@NgModule({
    declarations: [
        FooterComponent,
        HeaderComponent
    ],
    imports: [
        AngularCommonModule,
        RouterModule
    ],
    exports: [
        FooterComponent,
        HeaderComponent
    ]
})
export class CommonModule { }
