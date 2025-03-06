import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LandingPage } from './landing.component';

@NgModule({
  declarations: [LandingPage],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [LandingPage]
})
export class LandingModule { } 