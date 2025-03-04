import { NgModule } from '@angular/core';
import { CommonModule as AngularCommonModule } from '@angular/common';
import { FooterComponent } from '../layout/footer/footer.component';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [
        FooterComponent
    ],
    imports: [
        AngularCommonModule,
        RouterModule
    ],
    exports: [
        FooterComponent
    ]
})
export class CommonModule { }
